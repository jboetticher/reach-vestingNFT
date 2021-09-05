'reach 0.1';
'use strict';

export const main =
  Reach.App(() => {

    const Creator = Participant('Creator', {
      getId: Fun([], UInt)
    });

    const Owner = ParticipantClass('Owner', {
      newOwner: Fun([], Address),
      seeData: Fun([Address, UInt], Null),
      log: Fun(true, Null)
    });

    // owner - displays the current owner
    const vNFT = View('NFT', { owner: Address });

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
      return modulator;
    }

    var nftData = { owner: Creator, lastTime: lastConsensusTime() };
    { vNFT.owner.set(nftData.owner); };

    // This was changed to nullify use of the invariant.
    invariant(balance() == balance());
    while (true) {
      commit();

      // Allows the owner to transfer ownership of the asset.
      Owner.only(() => {
        
        // Calculates the token count that can be claimed.
        const recentConsensusTime = lastConsensusTime();
        const claimableTokens = TokenCountToBeClaimed(nftData.lastTime, recentConsensusTime);
        interact.seeData(nftData.owner, claimableTokens);

        // Asks for the new owner
        const amOwner = this == nftData.owner;
        const newOwner = amOwner ? 
          declassify(interact.newOwner()) : 
          nftData.owner;
      });

      Owner.publish(newOwner, claimableTokens, recentConsensusTime)
        .when(amOwner)
        .timeout(false);
      require(this == nftData.owner);

      // Ensures that the token count to be claimed is given to the previous owner before 
      // control is transfered.
      // If the new and previous owners are the same, then we assume that they want to claim tokens.
      transfer(claimableTokens > balance() ? balance() : claimableTokens)
        .to(nftData.owner);

      nftData = { owner: newOwner, lastTime: recentConsensusTime };
      continue;
    }
    commit();

    assert(false);
  });
