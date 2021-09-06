import * as loader from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

(async () => {
  // Loads each account
  const stdlib = await loader.loadStdlib();
  const startingBalance = 600000; // stdlib.parseCurrency(10);

  // Creates test accounts
  const accAlice = await stdlib.newTestAccount(startingBalance);
  const accBob = await stdlib.newTestAccount(startingBalance);
  const accClaire = await stdlib.newTestAccount(startingBalance);

  const ctcAlice = accAlice.deploy(backend);

  // Creates view account
  const accEve = await stdlib.newTestAccount(startingBalance);
  const ctcEve = accEve.attach(backend, ctcAlice.getInfo());

  // Method that invokes the view functionality.
  // Learn about views: https://docs.reach.sh/ref-model.html#%28tech._view%29
  const externalViewer = async () => {
    console.log(`Eve sees who the owner is...`);
    const owner = await ctcEve.getViews().NFT.owner();
    console.log(`...it is ${stdlib.formatAddress(owner[1])}`);
  };

  const everyone = [
    [' Alice', accAlice],
    ['   Bob', accBob],
    ['Claire', accClaire],
  ];
  const randomArrayRef = (arr) =>
    arr[Math.floor(Math.random() * arr.length)];

  let trades = 3;

  // Creates owner participants
  const makeOwner = (acc, who) => {
    const ctc = acc.attach(backend, ctcAlice.getInfo());
    const others = everyone.filter(x => x[0] !== who);

    return backend.Owner(ctc, {
      // Asks for the next owner + claims token
      newOwner: (async () => {
        // Invokes viewer
        await externalViewer();

        // Stops after a set amount of trades have finished.
        if ( trades == 0 ) {
          console.log(`${who} stops`);
          process.exit(0);
        }

        // If trades = 2, claim instead of trading.
        if(trades == 2) {
          // Waits a few blocks to test calculation.
          for ( let i = 0; i < 10; i++ ) {
            console.log(`${who} takes his sweet time...`);
            await stdlib.wait(1);
          }

          return acc;
        }
        else {
          const next = randomArrayRef(others);
          console.log(`${who} trades to ${next[0]}`);
          trades--;
          return next[1];
        }
      }),

      // Displays the asset's data.
      seeData: ((owner, claimable) => {
        if ( stdlib.addressEq(owner, acc) ) {
          console.log(`${who} sees that they own it, with ${claimable} claimable.`);
        } else {
          console.log(`${who} sees that ${stdlib.formatAddress(owner)} owns it, with ${claimable} claimable.`);
        }
      }),

      // Logs for debugging purposes.
      log: ((e) => { console.log(e); })
    });
  };

  await Promise.all([
    backend.Creator(
      ctcAlice,
      { getId: () => {
        const id = stdlib.randomUInt();
        console.log(` Alice makes id #${id}`);
        return id; },
        log: (e) => { console.log(e); }
      },
    ),
    makeOwner(accAlice , ' Alice'),
    makeOwner(accBob   , '   Bob'),
    makeOwner(accClaire, 'Claire'),
  ]);
})();
