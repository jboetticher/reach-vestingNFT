// Automatically generated with Reach 0.1.3
/* eslint-disable */
export const _version = '0.1.3';
export const _backendVersion = 1;


export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };

export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      "NFT": {
        lastTime: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v111, v112] = svs;
              return (await ((async () => {
                
                
                return v112;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc1
          },
        owner: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v111, v112] = svs;
              return (await ((async () => {
                
                
                return v111;}))(...args));
              }
            
            stdlib.assert(false, 'illegal view')
            },
          ty: ctc0
          }
        }
      },
    views: {
      1: [ctc0, ctc1]
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
  
  const v88 = stdlib.protect(ctc0, await interact.getId(), {
    at: './index.rsh:38:43:application',
    fs: ['at ./index.rsh:37:17:application call to [unknown function] (defined at: ./index.rsh:37:21:function exp)'],
    msg: 'getId',
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v15, v88],
    evt_cnt: 1,
    funcNum: 1,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:12:decimal', stdlib.UInt_max, 5), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v90] = txn1.data;
      const v91 = txn1.time;
      const v92 = txn1.secs;
      const v89 = txn1.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:43:12:decimal', stdlib.UInt_max, 5),
        kind: 'to',
        tok: undefined
        });
      const v96 = {
        lastTime: v15,
        owner: v89
        };
      const v97 = v96;
      const v98 = v91;
      const v104 = stdlib.checkedBigNumberify('./index.rsh:43:12:decimal', stdlib.UInt_max, 5);
      
      if ((() => {
        
        return true;})()) {
        const v111 = v97.owner;
        const v112 = v97.lastTime;
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
  const [v90] = txn1.data;
  const v91 = txn1.time;
  const v92 = txn1.secs;
  const v89 = txn1.from;
  ;
  const v96 = {
    lastTime: v15,
    owner: v89
    };
  let v97 = v96;
  let v98 = v91;
  let v104 = stdlib.checkedBigNumberify('./index.rsh:43:12:decimal', stdlib.UInt_max, 5);
  
  while ((() => {
    
    return true;})()) {
    const v111 = v97.owner;
    const v112 = v97.lastTime;
    const txn2 = await (ctc.recv({
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc1],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const [v121] = txn2.data;
    const v122 = txn2.time;
    const v123 = txn2.secs;
    const v120 = txn2.from;
    ;
    const v126 = stdlib.addressEq(v120, v111);
    stdlib.assert(v126, {
      at: './index.rsh:77:14:application',
      fs: [],
      msg: null,
      who: 'Creator'
      });
    const v129 = stdlib.sub(v112, v98);
    const v132 = stdlib.gt(v129, v104);
    const v134 = v132 ? v104 : v129;
    const v139 = stdlib.sub(v104, v134);
    ;
    const v140 = {
      lastTime: v98,
      owner: v121
      };
    const cv97 = v140;
    const cv98 = v122;
    const cv104 = v139;
    
    v97 = cv97;
    v98 = cv98;
    v104 = cv104;
    
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
  const [v90] = txn1.data;
  const v91 = txn1.time;
  const v92 = txn1.secs;
  const v89 = txn1.from;
  ;
  const v96 = {
    lastTime: v15,
    owner: v89
    };
  let v97 = v96;
  let v98 = v91;
  let v104 = stdlib.checkedBigNumberify('./index.rsh:43:12:decimal', stdlib.UInt_max, 5);
  
  while ((() => {
    
    return true;})()) {
    const v111 = v97.owner;
    const v112 = v97.lastTime;
    const v113 = ctc.selfAddress('Owner', true, stdlib.checkedBigNumberify('./index.rsh:68:17:application', stdlib.UInt_max, 40));
    stdlib.protect(ctc1, await interact.showOwner(v90, v111), {
      at: './index.rsh:69:27:application',
      fs: ['at ./index.rsh:68:17:application call to [unknown function] (defined at: ./index.rsh:68:21:function exp)'],
      msg: 'showOwner',
      who: 'Owner'
      });
    const v117 = stdlib.addressEq(v113, v111);
    let v118;
    if (v117) {
      const v119 = stdlib.protect(ctc2, await interact.newOwner(), {
        at: './index.rsh:72:49:application',
        fs: ['at ./index.rsh:68:17:application call to [unknown function] (defined at: ./index.rsh:68:21:function exp)'],
        msg: 'newOwner',
        who: 'Owner'
        });
      v118 = v119;
      }
    else {
      v118 = v113;
      }
    
    const txn2 = await (ctc.sendrecv({
      args: [v98, v104, v111, v112, v118],
      evt_cnt: 1,
      funcNum: 4,
      onlyIf: v117,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const [v121] = txn2.data;
        const v122 = txn2.time;
        const v123 = txn2.secs;
        const v120 = txn2.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v126 = stdlib.addressEq(v120, v111);
        stdlib.assert(v126, {
          at: './index.rsh:77:14:application',
          fs: [],
          msg: null,
          who: 'Owner'
          });
        const v129 = stdlib.sub(v112, v98);
        
        const v132 = stdlib.gt(v129, v104);
        const v134 = v132 ? v104 : v129;
        const v139 = stdlib.sub(v104, v134);
        sim_r.txns.push({
          amt: v134,
          kind: 'from',
          to: v111,
          tok: undefined
          });
        const v140 = {
          lastTime: v98,
          owner: v121
          };
        const cv97 = v140;
        const cv98 = v122;
        const cv104 = v139;
        
        (() => {
          const v97 = cv97;
          const v98 = cv98;
          const v104 = cv104;
          
          if ((() => {
            
            return true;})()) {
            const v111 = v97.owner;
            const v112 = v97.lastTime;
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
      tys: [ctc0, ctc0, ctc2, ctc0, ctc2],
      waitIfNotPresent: false
      }));
    const [v121] = txn2.data;
    const v122 = txn2.time;
    const v123 = txn2.secs;
    const v120 = txn2.from;
    ;
    const v126 = stdlib.addressEq(v120, v111);
    stdlib.assert(v126, {
      at: './index.rsh:77:14:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v129 = stdlib.sub(v112, v98);
    stdlib.protect(ctc1, await interact.log(v129), {
      at: './index.rsh:49:25:application',
      fs: ['at ./index.rsh:49:25:application call to [unknown function] (defined at: ./index.rsh:49:25:function exp)', 'at ./index.rsh:49:25:application call to [unknown function] (defined at: ./index.rsh:49:25:function exp)', 'at ./index.rsh:82:52:application call to "TokenCountToBeClaimed" (defined at: ./index.rsh:47:5:function exp)'],
      msg: 'log',
      who: 'Owner'
      });
    
    const v132 = stdlib.gt(v129, v104);
    const v134 = v132 ? v104 : v129;
    const v139 = stdlib.sub(v104, v134);
    ;
    const v140 = {
      lastTime: v98,
      owner: v121
      };
    const cv97 = v140;
    const cv98 = v122;
    const cv104 = v139;
    
    v97 = cv97;
    v98 = cv98;
    v104 = cv104;
    
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
// "./index.rsh:43:8:dot"
// "[]"
int 5
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
byte base64(AAAAAAAAAAU=)
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
int 56
==
assert
dup
substring 0 8
btoi
store 255
dup
substring 8 16
btoi
store 254
dup
substring 16 48
store 253
dup
substring 48 56
btoi
store 252
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 251
pop
// compute state in HM_Check 4
byte base64(AAAAAAAAAAQ=)
load 255
itob
concat
load 254
itob
concat
load 253
concat
load 252
itob
concat
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:74:13:dot"
// "[]"
// Nothing
// "./index.rsh:77:14:application"
// "[]"
txn Sender
load 253
==
assert
load 252
load 255
-
dup
store 250
load 254
load 250
load 254
>
select
dup
store 249
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
load 253
dig 1
gtxns Receiver
==
assert
l5:
pop
byte base64()
load 255
itob
load 251
concat
global Round
itob
concat
load 254
load 249
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
load 255
substring 0 8
btoi
store 251
byte base64(AAAAAAAAAAE=)
load 252
concat
load 251
itob
concat
int 1
bzero
dig 1
substring 0 48
app_global_put
pop
// compute state in HM_Set 4
byte base64(AAAAAAAAAAQ=)
load 254
itob
concat
load 253
itob
concat
load 252
concat
load 251
itob
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
int 48
bzero
int 1
bzero
dig 1
substring 0 48
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
  viewSize: 48
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
                "name": "v90",
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
                "name": "v98",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v104",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v111",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v112",
                "type": "uint256"
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
                "name": "v121",
                "type": "address"
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
    "name": "NFT_lastTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
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
                "name": "v90",
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
                "name": "v98",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v104",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v111",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v112",
                "type": "uint256"
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
                "name": "v121",
                "type": "address"
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051808201825243815242602080830191909152600060018190558351918201819052919201604051602081830303815290604052600290805190602001906100789291906100b9565b50506040805160208082018352600080835293518252825180820185905291518284015282518083038401815260609092019092528051910120905561018d565b8280546100c590610152565b90600052602060002090601f0160209004810192826100e7576000855561012d565b82601f1061010057805160ff191683800117855561012d565b8280016001018555821561012d579182015b8281111561012d578251825591602001919060010190610112565b5061013992915061013d565b5090565b5b80821115610139576000815560010161013e565b600181811c9082168061016657607f821691505b6020821081141561018757634e487b7160e01b600052602260045260246000fd5b50919050565b6109268061019c6000396000f3fe6080604052600436106100435760003560e01c80635706bb931461004f5780635cf275dd146100775780639532ef01146100a4578063bed6b7b1146100b957600080fd5b3661004a57005b600080fd5b34801561005b57600080fd5b506100646100cc565b6040519081526020015b60405180910390f35b34801561008357600080fd5b5061008c610191565b6040516001600160a01b03909116815260200161006e565b6100b76100b23660046107ef565b610250565b005b6100b76100c7366004610771565b61033f565b6000600180541415610182576000600280546100e7906108a3565b80601f0160208091040260200160405190810160405280929190818152602001828054610113906108a3565b80156101605780601f1061013557610100808354040283529160200191610160565b820191906000526020600020905b81548152906001019060200180831161014357829003601f168201915b50505050508060200190518101906101789190610789565b6020015192915050565b61018e600060076104e3565b90565b6000600180541415610244576000600280546101ac906108a3565b80601f01602080910402602001604051908101604052809291908181526020018280546101d8906108a3565b80156102255780601f106101fa57610100808354040283529160200191610225565b820191906000526020600020905b81548152906001019060200180831161020857829003601f168201915b505050505080602001905181019061023d9190610789565b5192915050565b61018e600060086104e3565b604080516000602082015282359181019190915261028f906060016040516020818303038152906040528051906020012060001c60005414600a6104e3565b600080556102b3604080516060810182526000602082018181529282015290815290565b6040805183358152602080850135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a16102fe6005341460096104e3565b80518235905280513360209091015261031561063d565b8151602080830180519290925281514391015251600560409091015261033a8161050c565b505050565b60405161037b9061035790600490849060200161086a565b6040516020818303038152906040528051906020012060001c60005414600d6104e3565b60008055610387610681565b7ff3192de1a440ef38aba30d125b192d5a7706971764bfecdb8a079625143becf0826040516103b69190610836565b60405180910390a16103ca3415600b6104e3565b6103f86103dd606084016040850161074d565b6001600160a01b0316336001600160a01b031614600c6104e3565b6104078235606084013561087e565b80825260208301351061041b578051610421565b60208201355b6020820152610436606083016040840161074d565b6001600160a01b03166108fc82602001519081150290604051600060405180830381858888f19350505050158015610472573d6000803e3d6000fd5b5060408101518235905261048c60a083016080840161074d565b60408201516001600160a01b039091166020909101526104aa61063d565b6040820151602080830180519290925290514390820152808301516104d19185013561087e565b60208201516040015261033a8161050c565b816105085760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080518082018252600080825260208083019182528481018051518201516001600160a01b03168085529051515183526001805584519182015290519281019290925290606001604051602081830303815290604052600290805190602001906105789291906106b4565b506105ad6040518060800160405280600081526020016000815260200160006001600160a01b03168152602001600081525090565b60208381018051820151835280516040908101518484019081528251518401516001600160a01b03908116838701908152935151516060808801918252845160049781019790975287519487019490945291519285019290925291511660808301525160a082015260c00160408051601f198184030181529190528051602090910120600055505050565b905290565b60405180604001604052806000151581526020016106386040805160a081018252600060608201818152608083018290528252602082018190529181019190915290565b60405180606001604052806000815260200160008152602001610638604080518082019091526000808252602082015290565b8280546106c0906108a3565b90600052602060002090601f0160209004810192826106e25760008555610728565b82601f106106fb57805160ff1916838001178555610728565b82800160010185558215610728579182015b8281111561072857825182559160200191906001019061070d565b50610734929150610738565b5090565b5b808211156107345760008155600101610739565b60006020828403121561075f57600080fd5b813561076a816108d8565b9392505050565b600060a0828403121561078357600080fd5b50919050565b60006040828403121561079b57600080fd5b6040516040810181811067ffffffffffffffff821117156107cc57634e487b7160e01b600052604160045260246000fd5b60405282516107da816108d8565b81526020928301519281019290925250919050565b60006040828403121561078357600080fd5b8035825260208101356020830152604081013561081d816108d8565b6001600160a01b03166040830152606090810135910152565b60a081016108448284610801565b6080830135610852816108d8565b6001600160a01b031660809290920191909152919050565b82815260a0810161076a6020830184610801565b60008282101561089e57634e487b7160e01b600052601160045260246000fd5b500390565b600181811c908216806108b757607f821691505b6020821081141561078357634e487b7160e01b600052602260045260246000fd5b6001600160a01b03811681146108ed57600080fd5b5056fea2646970667358221220f57fe5cfa7b15de4e5572e27c1ab029a5b37adfd643164df5b9ceb7edbedfa1064736f6c63430008050033`,
  BytecodeLen: 2754,
  Which: `oD`,
  deployMode: `DM_constructor`,
  version: 1,
  views: {
    NFT: {
      lastTime: `NFT_lastTime`,
      owner: `NFT_owner`
      }
    }
  };

export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };

