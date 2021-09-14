// Automatically generated with Reach 0.1.4
/* eslint-disable */
export const _version = '0.1.4';
export const _backendVersion = 1;


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      "NFT": {
        owner: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v108] = svs;
              return (await ((async () => {
                
                
                return v108;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          }
        }
      },
    views: {
      1: [ctc0]
      }
    };
  
  };

export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };

export async function Creator(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const v15 = await ctc.creationTime();
  const v16 = await ctc.creationSecs();
  
  const v86 = stdlib.protect(ctc0, await interact.getId(), {
    at: './index.rsh:25:43:application',
    fs: ['at ./index.rsh:24:17:application call to [unknown function] (defined at: ./index.rsh:24:21:function exp)'],
    msg: 'getId',
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v15, v86],
    evt_cnt: 1,
    funcNum: 1,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:30:12:decimal', stdlib.UInt_max, 500000), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v88] = txn1.data;
      const v89 = txn1.time;
      const v90 = txn1.secs;
      const v87 = txn1.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:30:12:decimal', stdlib.UInt_max, 500000),
        kind: 'to',
        tok: undefined
        });
      const v94 = {
        lastTime: v15,
        owner: v87
        };
      const v95 = v94;
      const v96 = v89;
      const v102 = stdlib.checkedBigNumberify('./index.rsh:30:12:decimal', stdlib.UInt_max, 500000);
      
      if ((() => {
        
        return true;})()) {
        const v108 = v95.owner;
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const [v88] = txn1.data;
  const v89 = txn1.time;
  const v90 = txn1.secs;
  const v87 = txn1.from;
  ;
  const v94 = {
    lastTime: v15,
    owner: v87
    };
  let v95 = v94;
  let v96 = v89;
  let v102 = stdlib.checkedBigNumberify('./index.rsh:30:12:decimal', stdlib.UInt_max, 500000);
  
  while ((() => {
    
    return true;})()) {
    const v108 = v95.owner;
    const txn2 = await (ctc.recv({
      evt_cnt: 3,
      funcNum: 4,
      out_tys: [ctc1, ctc0, ctc0],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const [v123, v124, v125] = txn2.data;
    const v126 = txn2.time;
    const v127 = txn2.secs;
    const v122 = txn2.from;
    ;
    const v130 = stdlib.addressEq(v122, v108);
    stdlib.assert(v130, {
      at: './index.rsh:67:14:application',
      fs: [],
      msg: null,
      who: 'Creator'
      });
    const v132 = stdlib.gt(v124, v102);
    const v134 = v132 ? v102 : v124;
    const v139 = stdlib.sub(v102, v134);
    ;
    const v140 = {
      lastTime: v125,
      owner: v123
      };
    const cv95 = v140;
    const cv96 = v126;
    const cv102 = v139;
    
    v95 = cv95;
    v96 = cv96;
    v102 = cv102;
    
    continue;
    }
  return;
  
  };
export async function Owner(ctc, interact) {
  if (typeof(ctc) !== 'object' || ctc.sendrecv === undefined) {
    return Promise.reject(new Error(`The backend for Owner expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Owner expects to receive an interact object as its second argument.`));}
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v15 = await ctc.creationTime();
  const v16 = await ctc.creationSecs();
  
  const txn1 = await (ctc.recv({
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const [v88] = txn1.data;
  const v89 = txn1.time;
  const v90 = txn1.secs;
  const v87 = txn1.from;
  ;
  const v94 = {
    lastTime: v15,
    owner: v87
    };
  let v95 = v94;
  let v96 = v89;
  let v102 = stdlib.checkedBigNumberify('./index.rsh:30:12:decimal', stdlib.UInt_max, 500000);
  
  while ((() => {
    
    return true;})()) {
    const v108 = v95.owner;
    const v109 = ctc.selfAddress('Owner', true, stdlib.checkedBigNumberify('./index.rsh:48:17:application', stdlib.UInt_max, 38));
    const v112 = v95.lastTime;
    stdlib.protect(ctc1, await interact.log(v112), {
      at: './index.rsh:52:21:application',
      fs: ['at ./index.rsh:48:17:application call to [unknown function] (defined at: ./index.rsh:48:21:function exp)'],
      msg: 'log',
      who: 'Owner'
      });
    stdlib.protect(ctc1, await interact.log(v96), {
      at: './index.rsh:53:21:application',
      fs: ['at ./index.rsh:48:17:application call to [unknown function] (defined at: ./index.rsh:48:21:function exp)'],
      msg: 'log',
      who: 'Owner'
      });
    const v114 = stdlib.sub(v112, v96);
    const v115 = stdlib.mul(v114, stdlib.checkedBigNumberify('./index.rsh:36:26:decimal', stdlib.UInt_max, 1000));
    stdlib.protect(ctc1, await interact.seeData(v108, v115), {
      at: './index.rsh:55:25:application',
      fs: ['at ./index.rsh:48:17:application call to [unknown function] (defined at: ./index.rsh:48:21:function exp)'],
      msg: 'seeData',
      who: 'Owner'
      });
    const v118 = stdlib.addressEq(v109, v108);
    let v119;
    if (v118) {
      const v120 = stdlib.protect(ctc2, await interact.newOwner(), {
        at: './index.rsh:60:39:application',
        fs: ['at ./index.rsh:48:17:application call to [unknown function] (defined at: ./index.rsh:48:21:function exp)'],
        msg: 'newOwner',
        who: 'Owner'
        });
      v119 = v120;
      }
    else {
      v119 = v108;
      }
    
    const txn2 = await (ctc.sendrecv({
      args: [v102, v108, v119, v115, v96],
      evt_cnt: 3,
      funcNum: 4,
      onlyIf: v118,
      out_tys: [ctc2, ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const [v123, v124, v125] = txn2.data;
        const v126 = txn2.time;
        const v127 = txn2.secs;
        const v122 = txn2.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v130 = stdlib.addressEq(v122, v108);
        stdlib.assert(v130, {
          at: './index.rsh:67:14:application',
          fs: [],
          msg: null,
          who: 'Owner'
          });
        const v132 = stdlib.gt(v124, v102);
        const v134 = v132 ? v102 : v124;
        const v139 = stdlib.sub(v102, v134);
        sim_r.txns.push({
          amt: v134,
          kind: 'from',
          to: v108,
          tok: undefined
          });
        const v140 = {
          lastTime: v125,
          owner: v123
          };
        const cv95 = v140;
        const cv96 = v126;
        const cv102 = v139;
        
        (() => {
          const v95 = cv95;
          const v96 = cv96;
          const v102 = cv102;
          
          if ((() => {
            
            return true;})()) {
            const v108 = v95.owner;
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined,
      tys: [ctc0, ctc2, ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const [v123, v124, v125] = txn2.data;
    const v126 = txn2.time;
    const v127 = txn2.secs;
    const v122 = txn2.from;
    ;
    const v130 = stdlib.addressEq(v122, v108);
    stdlib.assert(v130, {
      at: './index.rsh:67:14:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v132 = stdlib.gt(v124, v102);
    const v134 = v132 ? v102 : v124;
    const v139 = stdlib.sub(v102, v134);
    ;
    const v140 = {
      lastTime: v125,
      owner: v123
      };
    const cv95 = v140;
    const cv96 = v126;
    const cv102 = v139;
    
    v95 = cv95;
    v96 = cv96;
    v102 = cv102;
    
    continue;
    }
  return;
  
  };

const _ALGO = {
  appApproval: `#pragma version 4
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
substring 0 32
store 1
substring 32 64
store 2
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
dup
bz ctor
// Handler 1
dup
int 1
==
bz l0
pop
txna ApplicationArgs 1
dup
len
int 8
==
assert
dup
btoi
store 255
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 254
pop
// compute state in HM_Check 0
int 8
bzero
load 255
itob
concat
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:30:8:dot"
// "[]"
int 500000
dup
bz l1
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Receiver
==
assert
l1:
pop
byte base64()
load 255
itob
txn Sender
concat
global Round
itob
concat
byte base64(AAAAAAAHoSA=)
concat
b loop2
l0:
l2:
l3:
// Handler 4
dup
int 4
==
bz l4
pop
txna ApplicationArgs 1
dup
len
int 40
==
assert
dup
substring 0 8
btoi
store 255
dup
substring 8 40
store 254
pop
txna ApplicationArgs 2
dup
len
int 48
==
assert
dup
substring 0 32
store 253
dup
substring 32 40
btoi
store 252
dup
substring 40 48
btoi
store 251
pop
// compute state in HM_Check 4
byte base64(AAAAAAAAAAQ=)
load 255
itob
concat
load 254
concat
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:64:13:dot"
// "[]"
// Nothing
// "./index.rsh:67:14:application"
// "[]"
txn Sender
load 254
==
assert
load 252
load 255
load 252
load 255
>
select
dup
store 250
dup
bz l5
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
load 254
dig 1
gtxns Receiver
==
assert
l5:
pop
byte base64()
load 251
itob
load 253
concat
global Round
itob
concat
load 255
load 250
-
itob
concat
b loop2
l4:
int 0
assert
loop2:
dup
substring 0 40
store 255
dup
substring 40 48
btoi
store 254
dup
substring 48 56
btoi
store 253
pop
pop
load 255
substring 8 40
store 252
byte base64(AAAAAAAAAAE=)
load 252
concat
int 1
bzero
dig 1
substring 0 40
app_global_put
pop
// compute state in HM_Set 4
byte base64(AAAAAAAAAAQ=)
load 253
itob
concat
load 252
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
loop3:
pop
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 2
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l6:
pop
global ZeroAddress
store 1
txn OnCompletion
int DeleteApplication
==
assert
updateState:
byte base64()
load 1
load 2
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
byte base64()
int 64
bzero
app_global_put
b checkSize
ctor:
txn Sender
global CreatorAddress
==
assert
txna ApplicationArgs 1
store 2
int 40
bzero
int 1
bzero
dig 1
substring 0 40
app_global_put
pop
// compute state in HM_Set 0
int 8
bzero
global Round
itob
concat
sha256
store 1
txn OnCompletion
int NoOp
==
assert
b updateState
`,
  appClear: `#pragma version 4
int 0
`,
  escrow: `#pragma version 4
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  unsupported: [],
  version: 2,
  viewKeys: 1,
  viewSize: 40
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v15",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v102",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v108",
                "type": "address"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v123",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v124",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v125",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "NFT_owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v15",
                "type": "uint256"
              }
            ],
            "internalType": "struct T0",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v102",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v108",
                "type": "address"
              }
            ],
            "internalType": "struct T8",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v123",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v124",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v125",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051808201825243815242602080830191909152600060018190558351918201819052919201604051602081830303815290604052600290805190602001906100789291906100b9565b50506040805160208082018352600080835293518252825180820185905291518284015282518083038401815260609092019092528051910120905561018d565b8280546100c590610152565b90600052602060002090601f0160209004810192826100e7576000855561012d565b82601f1061010057805160ff191683800117855561012d565b8280016001018555821561012d579182015b8281111561012d578251825591602001919060010190610112565b5061013992915061013d565b5090565b5b80821115610139576000815560010161013e565b600181811c9082168061016657607f821691505b6020821081141561018757634e487b7160e01b600052602260045260246000fd5b50919050565b6107a58061019c6000396000f3fe6080604052600436106100385760003560e01c80635cf275dd146100445780639532ef0114610075578063a48a19ef1461008a57600080fd5b3661003f57005b600080fd5b34801561005057600080fd5b5061005961009d565b6040516001600160a01b03909116815260200160405180910390f35b61008861008336600461066a565b61015f565b005b6100886100983660046105f8565b610252565b6000600180541415610150576000600280546100b890610722565b80601f01602080910402602001604051908101604052809291908181526020018280546100e490610722565b80156101315780601f1061010657610100808354040283529160200191610131565b820191906000526020600020905b81548152906001019060200180831161011457829003601f168201915b50505050508060200190518101906101499190610610565b5192915050565b61015c600060076103db565b90565b604080516000602082015282359181019190915261019e906060016040516020818303038152906040528051906020012060001c6000541460096103db565b600080556101c2604080516060810182526000602082018181529282015290815290565b6040805183358152602080850135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a161020f6207a120341460086103db565b8051823590528051336020909101526102266104cb565b81516020808301805192909252815143910152516207a12060409091015261024d81610404565b505050565b60405161028e9061026a9060049084906020016106e9565b6040516020818303038152906040528051906020012060001c60005414600c6103db565b6000805561029a61050f565b7f182be7599b2ed005c5e74972c14ff60b3f5b9d5686e2923398b11c08b71bc444826040516102c991906106a4565b60405180910390a16102dd3415600a6103db565b61030b6102f060408401602085016105d4565b6001600160a01b0316336001600160a01b031614600b6103db565b8135606083013511610321576060820135610324565b81355b815261033660408301602084016105d4565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f1935050505015801561036f573d6000803e3d6000fd5b5060208101516080830135905261038c60608301604084016105d4565b6020808301516001600160a01b039092169101526103a86104cb565b602080830151828201805191909152514391015281516103c99084356106fd565b60208201516040015261024d81610404565b816104005760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051602080820183526000825283810151518101516001600160a01b0316808352600180558351918201529091016040516020818303038152906040526002908051906020019061045892919061053b565b5050604080518082018252600080825260208083018281529481018051850151845251518101516001600160a01b0390811686528451600481840152935184860152945190941660608084019190915283518084039091018152608090920190925280519201919091209055565b905290565b60405180604001604052806000151581526020016104c66040805160a081018252600060608201818152608083018290528252602082018190529181019190915290565b6040518060400160405280600081526020016104c6604080518082019091526000808252602082015290565b82805461054790610722565b90600052602060002090601f01602090048101928261056957600085556105af565b82601f1061058257805160ff19168380011785556105af565b828001600101855582156105af579182015b828111156105af578251825591602001919060010190610594565b506105bb9291506105bf565b5090565b5b808211156105bb57600081556001016105c0565b6000602082840312156105e657600080fd5b81356105f181610757565b9392505050565b600060a0828403121561060a57600080fd5b50919050565b60006020828403121561062257600080fd5b6040516020810181811067ffffffffffffffff8211171561065357634e487b7160e01b600052604160045260246000fd5b604052825161066181610757565b81529392505050565b60006040828403121561060a57600080fd5b80358252602081013561068e81610757565b6001600160a01b03166020929092019190915250565b60a081016106b2828461067c565b60408301356106c081610757565b6001600160a01b0316604083015260608381013590830152608092830135929091019190915290565b828152606081016105f1602083018461067c565b60008282101561071d57634e487b7160e01b600052601160045260246000fd5b500390565b600181811c9082168061073657607f821691505b6020821081141561060a57634e487b7160e01b600052602260045260246000fd5b6001600160a01b038116811461076c57600080fd5b5056fea26469706673582212204559087afad01e6e574ec17285a652354faf378ccf526414a9238c994ceacbff64736f6c63430008050033`,
  BytecodeLen: 2369,
  Which: `oD`,
  deployMode: `DM_constructor`,
  version: 1,
  views: {
    NFT: {
      owner: `NFT_owner`
      }
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

