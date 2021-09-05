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
  
  return {
    infos: {
      "NFT": {
        owner: {
          decode: async (i, svs, args) => {
            if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1))) {
              const [v106] = svs;
              return (await ((async () => {
                
                
                return v106;}))(...args));
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
  
  const v84 = stdlib.protect(ctc0, await interact.getId(), {
    at: './index.rsh:23:43:application',
    fs: ['at ./index.rsh:22:17:application call to [unknown function] (defined at: ./index.rsh:22:21:function exp)'],
    msg: 'getId',
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v15, v84],
    evt_cnt: 1,
    funcNum: 1,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:12:decimal', stdlib.UInt_max, 5), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v86] = txn1.data;
      const v87 = txn1.time;
      const v88 = txn1.secs;
      const v85 = txn1.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:28:12:decimal', stdlib.UInt_max, 5),
        kind: 'to',
        tok: undefined
        });
      const v92 = {
        lastTime: v15,
        owner: v85
        };
      const v93 = v92;
      const v94 = v87;
      const v100 = stdlib.checkedBigNumberify('./index.rsh:28:12:decimal', stdlib.UInt_max, 5);
      
      if ((() => {
        
        return true;})()) {
        const v106 = v93.owner;
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
  const [v86] = txn1.data;
  const v87 = txn1.time;
  const v88 = txn1.secs;
  const v85 = txn1.from;
  ;
  const v92 = {
    lastTime: v15,
    owner: v85
    };
  let v93 = v92;
  let v94 = v87;
  let v100 = stdlib.checkedBigNumberify('./index.rsh:28:12:decimal', stdlib.UInt_max, 5);
  
  while ((() => {
    
    return true;})()) {
    const v106 = v93.owner;
    const txn2 = await (ctc.recv({
      evt_cnt: 3,
      funcNum: 4,
      out_tys: [ctc1, ctc0, ctc0],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const [v119, v120, v121] = txn2.data;
    const v122 = txn2.time;
    const v123 = txn2.secs;
    const v118 = txn2.from;
    ;
    const v126 = stdlib.addressEq(v118, v106);
    stdlib.assert(v126, {
      at: './index.rsh:63:14:application',
      fs: [],
      msg: null,
      who: 'Creator'
      });
    const v128 = stdlib.gt(v120, v100);
    const v130 = v128 ? v100 : v120;
    const v135 = stdlib.sub(v100, v130);
    ;
    const v136 = {
      lastTime: v121,
      owner: v119
      };
    const cv93 = v136;
    const cv94 = v122;
    const cv100 = v135;
    
    v93 = cv93;
    v94 = cv94;
    v100 = cv100;
    
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
  const [v86] = txn1.data;
  const v87 = txn1.time;
  const v88 = txn1.secs;
  const v85 = txn1.from;
  ;
  const v92 = {
    lastTime: v15,
    owner: v85
    };
  let v93 = v92;
  let v94 = v87;
  let v100 = stdlib.checkedBigNumberify('./index.rsh:28:12:decimal', stdlib.UInt_max, 5);
  
  while ((() => {
    
    return true;})()) {
    const v106 = v93.owner;
    const v107 = ctc.selfAddress('Owner', true, stdlib.checkedBigNumberify('./index.rsh:46:17:application', stdlib.UInt_max, 38));
    const v110 = v93.lastTime;
    const v111 = stdlib.sub(v110, v94);
    stdlib.protect(ctc1, await interact.seeData(v106, v111), {
      at: './index.rsh:51:25:application',
      fs: ['at ./index.rsh:46:17:application call to [unknown function] (defined at: ./index.rsh:46:21:function exp)'],
      msg: 'seeData',
      who: 'Owner'
      });
    const v114 = stdlib.addressEq(v107, v106);
    let v115;
    if (v114) {
      const v116 = stdlib.protect(ctc2, await interact.newOwner(), {
        at: './index.rsh:56:39:application',
        fs: ['at ./index.rsh:46:17:application call to [unknown function] (defined at: ./index.rsh:46:21:function exp)'],
        msg: 'newOwner',
        who: 'Owner'
        });
      v115 = v116;
      }
    else {
      v115 = v106;
      }
    
    const txn2 = await (ctc.sendrecv({
      args: [v100, v106, v115, v111, v94],
      evt_cnt: 3,
      funcNum: 4,
      onlyIf: v114,
      out_tys: [ctc2, ctc0, ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const [v119, v120, v121] = txn2.data;
        const v122 = txn2.time;
        const v123 = txn2.secs;
        const v118 = txn2.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v126 = stdlib.addressEq(v118, v106);
        stdlib.assert(v126, {
          at: './index.rsh:63:14:application',
          fs: [],
          msg: null,
          who: 'Owner'
          });
        const v128 = stdlib.gt(v120, v100);
        const v130 = v128 ? v100 : v120;
        const v135 = stdlib.sub(v100, v130);
        sim_r.txns.push({
          amt: v130,
          kind: 'from',
          to: v106,
          tok: undefined
          });
        const v136 = {
          lastTime: v121,
          owner: v119
          };
        const cv93 = v136;
        const cv94 = v122;
        const cv100 = v135;
        
        (() => {
          const v93 = cv93;
          const v94 = cv94;
          const v100 = cv100;
          
          if ((() => {
            
            return true;})()) {
            const v106 = v93.owner;
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
    const [v119, v120, v121] = txn2.data;
    const v122 = txn2.time;
    const v123 = txn2.secs;
    const v118 = txn2.from;
    ;
    const v126 = stdlib.addressEq(v118, v106);
    stdlib.assert(v126, {
      at: './index.rsh:63:14:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const v128 = stdlib.gt(v120, v100);
    const v130 = v128 ? v100 : v120;
    const v135 = stdlib.sub(v100, v130);
    ;
    const v136 = {
      lastTime: v121,
      owner: v119
      };
    const cv93 = v136;
    const cv94 = v122;
    const cv100 = v135;
    
    v93 = cv93;
    v94 = cv94;
    v100 = cv100;
    
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
// "./index.rsh:28:8:dot"
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
// "./index.rsh:60:13:dot"
// "[]"
// Nothing
// "./index.rsh:63:14:application"
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
                "name": "v86",
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
                "name": "v100",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v106",
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
                "name": "v119",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v121",
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
                "name": "v86",
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
                "name": "v100",
                "type": "uint256"
              },
              {
                "internalType": "address payable",
                "name": "v106",
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
                "name": "v119",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v120",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v121",
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051808201825243815242602080830191909152600060018190558351918201819052919201604051602081830303815290604052600290805190602001906100789291906100b9565b50506040805160208082018352600080835293518252825180820185905291518284015282518083038401815260609092019092528051910120905561018d565b8280546100c590610152565b90600052602060002090601f0160209004810192826100e7576000855561012d565b82601f1061010057805160ff191683800117855561012d565b8280016001018555821561012d579182015b8281111561012d578251825591602001919060010190610112565b5061013992915061013d565b5090565b5b80821115610139576000815560010161013e565b600181811c9082168061016657607f821691505b6020821081141561018757634e487b7160e01b600052602260045260246000fd5b50919050565b6107a18061019c6000396000f3fe6080604052600436106100385760003560e01c80635cf275dd146100445780639532ef0114610075578063a48a19ef1461008a57600080fd5b3661003f57005b600080fd5b34801561005057600080fd5b5061005961009d565b6040516001600160a01b03909116815260200160405180910390f35b610088610083366004610666565b61015f565b005b6100886100983660046105f4565b61024e565b6000600180541415610150576000600280546100b89061071e565b80601f01602080910402602001604051908101604052809291908181526020018280546100e49061071e565b80156101315780601f1061010657610100808354040283529160200191610131565b820191906000526020600020905b81548152906001019060200180831161011457829003601f168201915b5050505050806020019051810190610149919061060c565b5192915050565b61015c600060076103d7565b90565b604080516000602082015282359181019190915261019e906060016040516020818303038152906040528051906020012060001c6000541460096103d7565b600080556101c2604080516060810182526000602082018181529282015290815290565b6040805183358152602080850135908201527ff2c62eba998811305a23599b2e6d212befbd7ded3a73f4c08bfb9aefe08dc166910160405180910390a161020d6005341460086103d7565b8051823590528051336020909101526102246104c7565b8151602080830180519290925281514391015251600560409091015261024981610400565b505050565b60405161028a906102669060049084906020016106e5565b6040516020818303038152906040528051906020012060001c60005414600c6103d7565b6000805561029661050b565b7f182be7599b2ed005c5e74972c14ff60b3f5b9d5686e2923398b11c08b71bc444826040516102c591906106a0565b60405180910390a16102d93415600a6103d7565b6103076102ec60408401602085016105d0565b6001600160a01b0316336001600160a01b031614600b6103d7565b813560608301351161031d576060820135610320565b81355b815261033260408301602084016105d0565b81516040516001600160a01b03929092169181156108fc0291906000818181858888f1935050505015801561036b573d6000803e3d6000fd5b5060208101516080830135905261038860608301604084016105d0565b6020808301516001600160a01b039092169101526103a46104c7565b602080830151828201805191909152514391015281516103c59084356106f9565b60208201516040015261024981610400565b816103fc5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60408051602080820183526000825283810151518101516001600160a01b03168083526001805583519182015290910160405160208183030381529060405260029080519060200190610454929190610537565b5050604080518082018252600080825260208083018281529481018051850151845251518101516001600160a01b0390811686528451600481840152935184860152945190941660608084019190915283518084039091018152608090920190925280519201919091209055565b905290565b60405180604001604052806000151581526020016104c26040805160a081018252600060608201818152608083018290528252602082018190529181019190915290565b6040518060400160405280600081526020016104c2604080518082019091526000808252602082015290565b8280546105439061071e565b90600052602060002090601f01602090048101928261056557600085556105ab565b82601f1061057e57805160ff19168380011785556105ab565b828001600101855582156105ab579182015b828111156105ab578251825591602001919060010190610590565b506105b79291506105bb565b5090565b5b808211156105b757600081556001016105bc565b6000602082840312156105e257600080fd5b81356105ed81610753565b9392505050565b600060a0828403121561060657600080fd5b50919050565b60006020828403121561061e57600080fd5b6040516020810181811067ffffffffffffffff8211171561064f57634e487b7160e01b600052604160045260246000fd5b604052825161065d81610753565b81529392505050565b60006040828403121561060657600080fd5b80358252602081013561068a81610753565b6001600160a01b03166020929092019190915250565b60a081016106ae8284610678565b60408301356106bc81610753565b6001600160a01b0316604083015260608381013590830152608092830135929091019190915290565b828152606081016105ed6020830184610678565b60008282101561071957634e487b7160e01b600052601160045260246000fd5b500390565b600181811c9082168061073257607f821691505b6020821081141561060657634e487b7160e01b600052602260045260246000fd5b6001600160a01b038116811461076857600080fd5b5056fea26469706673582212207c74e8055935058757e330c16e1019dbbf82dc2111af9818ee39a84b0eea815964736f6c63430008050033`,
  BytecodeLen: 2365,
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

