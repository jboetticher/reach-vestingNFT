'reach 0.1';
'use strict';

/*
 * Contract Flow:
 * Creator makes the NFT
 * Creator loads the NFT with an ASA
 *      ! Send users to the atomic transfer example if they want purchasing to be part of the NFT.
 * LOOP:
 *    
*/

export const main =
  Reach.App(() => {

    const Creator = Participant('Creator', {
      getId: Fun([], UInt)
    });

    const Owner = ParticipantClass('Owner', {
      newOwner: Fun([], Address),
      showOwner: Fun([UInt, Address], Null),
      log: Fun(true, Null)
    });

    // owner - displays the current owner
    // lastTime - displays the last time that was claimed
    // unclaimed - displays the amount of currency that can be claimed
    const vNFT = View('NFT', {
      owner: Address,
      lastTime: UInt
      //unclaimed: UInt,
    });

    deploy();

    Creator.only(() => {
      const id = declassify(interact.getId());
    });

    // temporary: pays 5 tokens
    Creator
      .pay(5)
      .publish(id);

    // Figures out the number of tokens that can be claimed.
    function TokenCountToBeClaimed(lastConsensus, currentConsensus) {
      const modulator = lastConsensus - currentConsensus;
      Owner.interact.log(modulator);
      return modulator;
    }

    var nftData = { owner: Creator, lastTime: lastConsensusTime() };
    {
      vNFT.owner.set(nftData.owner);
      vNFT.lastTime.set(nftData.lastTime);
    };

    // This needs to be changed. The balance should decrease, not be constantly equal to 0.
    invariant(balance() >= 0);
    while (true) {
      commit();

      // We want to allow the owner to claim ownership of the asset instead of
      // just transfering.

      // Allows the owner to transfer ownership of the asset.
      Owner.only(() => {
        interact.showOwner(id, nftData.owner);
        const amOwner = this == nftData.owner;
        const newOwner =
          amOwner ? declassify(interact.newOwner()) : this;
      });
      Owner.publish(newOwner)
        .when(amOwner)
        .timeout(false);
      require(this == nftData.owner);

      // Ensures that the token count to be claimed is given to the previous owner before 
      // control is transfered.
      const recentConsensusTime = lastConsensusTime();
      const claimableTokens = TokenCountToBeClaimed(nftData.lastTime, recentConsensusTime);
      transfer(claimableTokens > balance() ? balance() : claimableTokens)
        .to(nftData.owner);

      nftData = { owner: newOwner, lastTime: recentConsensusTime };
      continue;
    }
    commit();

    assert(false);
  });
