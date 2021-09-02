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
              const [v62] = svs;
              return (await ((async () => {
                
                
                return v62;}))(...args));
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
  
  const v56 = stdlib.protect(ctc0, await interact.getId(), {
    at: './index.rsh:20:43:application',
    fs: ['at ./index.rsh:19:17:application call to [unknown function] (defined at: ./index.rsh:19:21:function exp)'],
    msg: 'getId',
    who: 'Creator'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v56],
    evt_cnt: 1,
    funcNum: 1,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const [v58] = txn1.data;
      const v59 = txn1.time;
      const v60 = txn1.secs;
      const v57 = txn1.from;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
        kind: 'to',
        tok: undefined
        });
      const v62 = v57;
      
      if ((() => {
        
        return true;})()) {
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
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const [v58] = txn1.data;
  const v59 = txn1.time;
  const v60 = txn1.secs;
  const v57 = txn1.from;
  ;
  let v62 = v57;
  
  while ((() => {
    
    return true;})()) {
    const txn2 = await (ctc.recv({
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc1],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const [v78] = txn2.data;
    const v79 = txn2.time;
    const v80 = txn2.secs;
    const v77 = txn2.from;
    ;
    const v82 = stdlib.addressEq(v77, v62);
    stdlib.assert(v82, {
      at: './index.rsh:37:14:application',
      fs: [],
      msg: null,
      who: 'Creator'
      });
    const cv62 = v78;
    
    v62 = cv62;
    
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
  const [v58] = txn1.data;
  const v59 = txn1.time;
  const v60 = txn1.secs;
  const v57 = txn1.from;
  ;
  let v62 = v57;
  
  while ((() => {
    
    return true;})()) {
    const v72 = ctc.selfAddress('Owner', true, stdlib.checkedBigNumberify('./index.rsh:29:17:application', stdlib.UInt_max, 31));
    stdlib.protect(ctc1, await interact.showOwner(v58, v62), {
      at: './index.rsh:30:27:application',
      fs: ['at ./index.rsh:29:17:application call to [unknown function] (defined at: ./index.rsh:29:21:function exp)'],
      msg: 'showOwner',
      who: 'Owner'
      });
    const v74 = stdlib.addressEq(v72, v62);
    let v75;
    if (v74) {
      const v76 = stdlib.protect(ctc2, await interact.newOwner(), {
        at: './index.rsh:33:49:application',
        fs: ['at ./index.rsh:29:17:application call to [unknown function] (defined at: ./index.rsh:29:21:function exp)'],
        msg: 'newOwner',
        who: 'Owner'
        });
      v75 = v76;
      }
    else {
      v75 = v72;
      }
    
    const txn2 = await (ctc.sendrecv({
      args: [v62, v75],
      evt_cnt: 1,
      funcNum: 4,
      onlyIf: v74,
      out_tys: [ctc2],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const [v78] = txn2.data;
        const v79 = txn2.time;
        const v80 = txn2.secs;
        const v77 = txn2.from;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v82 = stdlib.addressEq(v77, v62);
        stdlib.assert(v82, {
          at: './index.rsh:37:14:application',
          fs: [],
          msg: null,
          who: 'Owner'
          });
        const cv62 = v78;
        
        (() => {
          const v62 = cv62;
          
          if ((() => {
            
            return true;})()) {
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
      tys: [ctc2, ctc2],
      waitIfNotPresent: false
      }));
    const [v78] = txn2.data;
    const v79 = txn2.time;
    const v80 = txn2.secs;
    const v77 = txn2.from;
    ;
    const v82 = stdlib.addressEq(v77, v62);
    stdlib.assert(v82, {
      at: './index.rsh:37:14:application',
      fs: [],
      msg: null,
      who: 'Owner'
      });
    const cv62 = v78;
    
    v62 = cv62;
    
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
int 0
==
assert
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 255
pop
// compute state in HM_Check 0
int 8
bzero
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:21:13:dot"
// "[]"
byte base64()
txn Sender
b loop2
l0:
l1:
l2:
// Handler 4
dup
int 4
==
bz l3
pop
txna ApplicationArgs 1
dup
len
int 32
==
assert
dup
store 255
pop
txna ApplicationArgs 2
dup
len
int 32
==
assert
dup
store 254
pop
// compute state in HM_Check 4
byte base64(AAAAAAAAAAQ=)
load 255
concat
sha256
load 1
==
assert
// "CheckPay"
// "./index.rsh:34:13:dot"
// "[]"
// Nothing
// "./index.rsh:37:14:application"
// "[]"
txn Sender
load 255
==
assert
byte base64()
load 254
b loop2
l3:
int 0
assert
loop2:
dup
store 255
pop
pop
byte base64(AAAAAAAAAAE=)
load 255
concat
int 1
bzero
dig 1
substring 0 40
app_global_put
pop
// compute state in HM_Set 4
byte base64(AAAAAAAAAAQ=)
load 255
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
l4:
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
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v58",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
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
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v78",
                "type": "address"
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
            "internalType": "bool",
            "name": "svs",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v58",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
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
                "internalType": "address payable",
                "name": "v62",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "svs",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v78",
                "type": "address"
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
  Bytecode: `0x608060408190527f49ff028a829527a47ec6839c7147b484eccf5a2a94853eddac09cef44d9d4e9e90600090a160408051808201825243815242602080830191909152600060018190558351918201819052919201604051602081830303815290604052600290805190602001906100789291906100b3565b506040805160006020820181905291810182905260600160408051601f19818403018152919052805160209091012060005550610187915050565b8280546100bf9061014c565b90600052602060002090601f0160209004810192826100e15760008555610127565b82601f106100fa57805160ff1916838001178555610127565b82800160010185558215610127579182015b8281111561012757825182559160200191906001019061010c565b50610133929150610137565b5090565b5b808211156101335760008155600101610138565b600181811c9082168061016057607f821691505b6020821081141561018157634e487b7160e01b600052602260045260246000fd5b50919050565b610696806101966000396000f3fe6080604052600436106100385760003560e01c80631dc091ad146100445780635cf275dd14610059578063e78d4dcc1461008a57600080fd5b3661003f57005b600080fd5b610057610052366004610570565b61009d565b005b34801561006557600080fd5b5061006e610172565b6040516001600160a01b03909116815260200160405180910390f35b610057610098366004610570565b610234565b6100ef60006100af60208401846104fb565b6040516020016100cb9291909182521515602082015260400190565b6040516020818303038152906040528051906020012060001c600054146009610334565b600080556040517f120854c39fdbc847613c8c1a66d23aa6d099c4db8f64d852475191e60a6298d99061012390839061058c565b60405180910390a161013734156008610334565b61015d604080518082018252600080825282516020818101909452908152909182015290565b602081015133905261016e81610359565b5050565b60006001805414156102255760006002805461018d90610613565b80601f01602080910402602001604051908101604052809291908181526020018280546101b990610613565b80156102065780601f106101db57610100808354040283529160200191610206565b820191906000526020600020905b8154815290600101906020018083116101e957829003601f168201915b505050505080602001905181019061021e9190610516565b5192915050565b61023160006007610334565b90565b6040516102709061024c9060049084906020016105e8565b6040516020818303038152906040528051906020012060001c60005414600c610334565b600080556040517f168dfcb2f7aaefb580a898995f3edd5bbe0098062da0d07a6da3452238d9b729906102a49083906105ad565b60405180910390a16102b83415600a610334565b6102e36102c860208301836104d7565b6001600160a01b0316336001600160a01b031614600b610334565b610309604080518082018252600080825282516020818101909452908152909182015290565b61031960408301602084016104d7565b60208201516001600160a01b03909116905261016e81610359565b8161016e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b60408051602080820183526000825283810151516001600160a01b031680835260018055835191820152909101604051602081830303815290604052600290805190602001906103aa929190610411565b50604080516020810190915260008152602080840151516001600160a01b031682526040516103f191600491849101918252516001600160a01b0316602082015260400190565b60408051601f198184030181529190528051602090910120600055505050565b82805461041d90610613565b90600052602060002090601f01602090048101928261043f5760008555610485565b82601f1061045857805160ff1916838001178555610485565b82800160010185558215610485579182015b8281111561048557825182559160200191906001019061046a565b50610491929150610495565b5090565b5b808211156104915760008155600101610496565b803580151581146104ba57600080fd5b919050565b6000604082840312156104d157600080fd5b50919050565b6000602082840312156104e957600080fd5b81356104f481610648565b9392505050565b60006020828403121561050d57600080fd5b6104f4826104aa565b60006020828403121561052857600080fd5b6040516020810181811067ffffffffffffffff8211171561055957634e487b7160e01b600052604160045260246000fd5b604052825161056781610648565b81529392505050565b60006040828403121561058257600080fd5b6104f483836104bf565b60408101610599836104aa565b151582526020830135602083015292915050565b6040810182356105bc81610648565b6001600160a01b0390811683526020840135906105d882610648565b8082166020850152505092915050565b8281526040810182356105fa81610648565b6001600160a01b03166020929092019190915292915050565b600181811c9082168061062757607f821691505b602082108114156104d157634e487b7160e01b600052602260045260246000fd5b6001600160a01b038116811461065d57600080fd5b5056fea2646970667358221220b96c302c19d908dd536522a1d3ca843cd958df55c2a1d870d3291fac44ce593264736f6c63430008050033`,
  BytecodeLen: 2092,
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

