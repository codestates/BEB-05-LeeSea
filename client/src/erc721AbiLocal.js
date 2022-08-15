const erc721AbiLocal = {
  "contractName": "LeaSeaNFT",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
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
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
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
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
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
      "name": "totalSupply",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "tokenURI",
          "type": "string"
        }
      ],
      "name": "mintNFT",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.15+commit.e14f2714\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"tokenURI\",\"type\":\"string\"}],\"name\":\"mintNFT\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/LeeSeaNFT.sol\":\"LeaSeaNFT\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x0b606994df12f0ce35f6d2f6dcdde7e55e6899cdef7e00f180980caa81e3844e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c827c981a552d1c76c96060e92f56b52bc20c6f9b4dbf911fe99ddbfb41f2ea\",\"dweb:/ipfs/QmW8xvJdzHrr8Ry34C7viBsgG2b8T1mL4BQWJ5CdfD9JLB\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xed6a749c5373af398105ce6ee3ac4763aa450ea7285d268c85d9eeca809cdb1f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://20a97f891d06f0fe91560ea1a142aaa26fdd22bed1b51606b7d48f670deeb50f\",\"dweb:/ipfs/QmTbCtZKChpaX5H2iRiTDMcSz29GSLCpTCDgJpcMR4wg8x\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708\",\"dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV\"]},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol\":{\"keccak256\":\"0x0a79511df8151b10b0a0004d6a76ad956582d32824af4c0f4886bdbdfe5746e5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://afbedcf17f31db719e6fdc56caa8f458799c5fa2eb94cb1e94ef18f89af85768\",\"dweb:/ipfs/QmVmqRdBfbgYThpZSoAJ5o9mnAMjx8mCHHjv3Rh8cQAAg3\"]},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol\":{\"keccak256\":\"0x5c3501c1b70fcfc64417e9da5cc6a3597191baa354781e508e1e14cc0e50a038\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://899c87a849a94c848818d0afede6961d2c87665af1dd23a5c983e78981a65691\",\"dweb:/ipfs/QmUeFDffQRDmX87FX3MRxN3bmpUxDTWpWLwPJzeAJ3yF6H\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol\":{\"keccak256\":\"0xd1556954440b31c97a142c6ba07d5cade45f96fafd52091d33a14ebe365aecbf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://26fef835622b46a5ba08b3ef6b46a22e94b5f285d0f0fb66b703bd30217d2c34\",\"dweb:/ipfs/QmZ548qdwfL1qF7aXz3xh1GCdTiST81kGGuKRqVUfYmPZR\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146\",\"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xd6153ce99bcdcce22b124f755e72553295be6abcd63804cfdffceb188b8bef10\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://35c47bece3c03caaa07fab37dd2bb3413bfbca20db7bd9895024390e0a469487\",\"dweb:/ipfs/QmPGWT2x3QHcKxqe6gRmAkdakhbaRgx3DLzcakHz5M4eXG\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://59e1c62884d55b70f3ae5432b44bb3166ad71ae3acd19c57ab6ddc3c87c325ee\",\"dweb:/ipfs/QmezuXg5GK5oeA4F91EZhozBFekhq5TD966bHPH18cCqhu\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638\",\"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"project:/contracts/LeeSeaNFT.sol\":{\"keccak256\":\"0xd19c45509fe19399994ba9353050fd0a6fe147aa099b219f3c85532f596fa8b1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://b166acd483d53ee7c5f33381f10e73cc502affa3a785e5e71b903ede48439430\",\"dweb:/ipfs/QmXnVRqFPHkBwRK4oV9QycXBRTqm76K9mHoNEE7oaWHENV\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b506040518060400160405280600681526020017f636f7a4e465400000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4e4654000000000000000000000000000000000000000000000000000000000081525081600090816200008f919062000412565b508060019081620000a1919062000412565b505050620000c4620000b8620000ca60201b60201c565b620000d260201b60201c565b620004f9565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200021a57607f821691505b60208210810362000230576200022f620001d2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200029a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200025b565b620002a686836200025b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002f3620002ed620002e784620002be565b620002c8565b620002be565b9050919050565b6000819050919050565b6200030f83620002d2565b620003276200031e82620002fa565b84845462000268565b825550505050565b600090565b6200033e6200032f565b6200034b81848462000304565b505050565b5b8181101562000373576200036760008262000334565b60018101905062000351565b5050565b601f821115620003c2576200038c8162000236565b62000397846200024b565b81016020851015620003a7578190505b620003bf620003b6856200024b565b83018262000350565b50505b505050565b600082821c905092915050565b6000620003e760001984600802620003c7565b1980831691505092915050565b6000620004028383620003d4565b9150826002028217905092915050565b6200041d8262000198565b67ffffffffffffffff811115620004395762000438620001a3565b5b62000445825462000201565b6200045282828562000377565b600060209050601f8311600181146200048a576000841562000475578287015190505b620004818582620003f4565b865550620004f1565b601f1984166200049a8662000236565b60005b82811015620004c4578489015182556001820191506020850194506020810190506200049d565b86831015620004e45784890151620004e0601f891682620003d4565b8355505b6001600288020188555050505b505050505050565b6135a580620005096000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad578063b88d4fde11610071578063b88d4fde14610343578063c87b56dd1461035f578063e985e9c51461038f578063eacabe14146103bf578063f2fde38b146103ef5761012c565b806370a08231146102b1578063715018a6146102e15780638da5cb5b146102eb57806395d89b4114610309578063a22cb465146103275761012c565b806323b872dd116100f457806323b872dd146101e95780632f745c591461020557806342842e0e146102355780634f6ccce7146102515780636352211e146102815761012c565b806301ffc9a71461013157806306fdde0314610161578063081812fc1461017f578063095ea7b3146101af57806318160ddd146101cb575b600080fd5b61014b600480360381019061014691906120a8565b61040b565b60405161015891906120f0565b60405180910390f35b61016961041d565b60405161017691906121a4565b60405180910390f35b610199600480360381019061019491906121fc565b6104af565b6040516101a6919061226a565b60405180910390f35b6101c960048036038101906101c491906122b1565b6104f5565b005b6101d361060c565b6040516101e09190612300565b60405180910390f35b61020360048036038101906101fe919061231b565b610619565b005b61021f600480360381019061021a91906122b1565b610679565b60405161022c9190612300565b60405180910390f35b61024f600480360381019061024a919061231b565b61071e565b005b61026b600480360381019061026691906121fc565b61073e565b6040516102789190612300565b60405180910390f35b61029b600480360381019061029691906121fc565b6107af565b6040516102a8919061226a565b60405180910390f35b6102cb60048036038101906102c6919061236e565b610860565b6040516102d89190612300565b60405180910390f35b6102e9610917565b005b6102f361092b565b604051610300919061226a565b60405180910390f35b610311610955565b60405161031e91906121a4565b60405180910390f35b610341600480360381019061033c91906123c7565b6109e7565b005b61035d6004803603810190610358919061253c565b6109fd565b005b610379600480360381019061037491906121fc565b610a5f565b60405161038691906121a4565b60405180910390f35b6103a960048036038101906103a491906125bf565b610a71565b6040516103b691906120f0565b60405180910390f35b6103d960048036038101906103d491906126a0565b610b05565b6040516103e69190612300565b60405180910390f35b6104096004803603810190610404919061236e565b610b3d565b005b600061041682610bc0565b9050919050565b60606000805461042c9061272b565b80601f01602080910402602001604051908101604052809291908181526020018280546104589061272b565b80156104a55780601f1061047a576101008083540402835291602001916104a5565b820191906000526020600020905b81548152906001019060200180831161048857829003601f168201915b5050505050905090565b60006104ba82610c3a565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610500826107af565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610570576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610567906127ce565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661058f610c85565b73ffffffffffffffffffffffffffffffffffffffff1614806105be57506105bd816105b8610c85565b610a71565b5b6105fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f490612860565b60405180910390fd5b6106078383610c8d565b505050565b6000600a80549050905090565b61062a610624610c85565b82610d46565b610669576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610660906128f2565b60405180910390fd5b610674838383610ddb565b505050565b600061068483610860565b82106106c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106bc90612984565b60405180910390fd5b600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b610739838383604051806020016040528060008152506109fd565b505050565b600061074861060c565b8210610789576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078090612a16565b60405180910390fd5b600a828154811061079d5761079c612a36565b5b90600052602060002001549050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610857576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084e90612ab1565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c790612b43565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61091f611041565b61092960006110bf565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600180546109649061272b565b80601f01602080910402602001604051908101604052809291908181526020018280546109909061272b565b80156109dd5780601f106109b2576101008083540402835291602001916109dd565b820191906000526020600020905b8154815290600101906020018083116109c057829003601f168201915b5050505050905090565b6109f96109f2610c85565b8383611185565b5050565b610a0e610a08610c85565b83610d46565b610a4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a44906128f2565b60405180910390fd5b610a59848484846112f1565b50505050565b6060610a6a8261134d565b9050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000610b11600c61145f565b6000610b1d600c611475565b9050610b298482611483565b610b33818461165c565b8091505092915050565b610b45611041565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610bb4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bab90612bd5565b60405180910390fd5b610bbd816110bf565b50565b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610c335750610c32826116c9565b5b9050919050565b610c43816117ab565b610c82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7990612ab1565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610d00836107af565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610d52836107af565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d945750610d938185610a71565b5b80610dd257508373ffffffffffffffffffffffffffffffffffffffff16610dba846104af565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610dfb826107af565b73ffffffffffffffffffffffffffffffffffffffff1614610e51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4890612c67565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ec0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb790612cf9565b60405180910390fd5b610ecb838383611817565b610ed6600082610c8d565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f269190612d48565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f7d9190612d7c565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461103c838383611827565b505050565b611049610c85565b73ffffffffffffffffffffffffffffffffffffffff1661106761092b565b73ffffffffffffffffffffffffffffffffffffffff16146110bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b490612e1e565b60405180910390fd5b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036111f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ea90612e8a565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516112e491906120f0565b60405180910390a3505050565b6112fc848484610ddb565b6113088484848461182c565b611347576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133e90612f1c565b60405180910390fd5b50505050565b606061135882610c3a565b60006006600084815260200190815260200160002080546113789061272b565b80601f01602080910402602001604051908101604052809291908181526020018280546113a49061272b565b80156113f15780601f106113c6576101008083540402835291602001916113f1565b820191906000526020600020905b8154815290600101906020018083116113d457829003601f168201915b5050505050905060006114026119b3565b9050600081510361141757819250505061145a565b60008251111561144c578082604051602001611434929190612f78565b6040516020818303038152906040529250505061145a565b611455846119ca565b925050505b919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036114f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114e990612fe8565b60405180910390fd5b6114fb816117ab565b1561153b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153290613054565b60405180910390fd5b61154760008383611817565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115979190612d7c565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461165860008383611827565b5050565b611665826117ab565b6116a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161169b906130e6565b60405180910390fd5b806006600084815260200190815260200160002090816116c491906132b2565b505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061179457507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806117a457506117a382611a32565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b611822838383611a9c565b505050565b505050565b600061184d8473ffffffffffffffffffffffffffffffffffffffff16611bae565b156119a6578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611876610c85565b8786866040518563ffffffff1660e01b815260040161189894939291906133d9565b6020604051808303816000875af19250505080156118d457506040513d601f19601f820116820180604052508101906118d1919061343a565b60015b611956573d8060008114611904576040519150601f19603f3d011682016040523d82523d6000602084013e611909565b606091505b50600081510361194e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161194590612f1c565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506119ab565b600190505b949350505050565b606060405180602001604052806000815250905090565b60606119d582610c3a565b60006119df6119b3565b905060008151116119ff5760405180602001604052806000815250611a2a565b80611a0984611bd1565b604051602001611a1a929190612f78565b6040516020818303038152906040525b915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611aa7838383611d31565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611ae957611ae481611d36565b611b28565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611b2757611b268382611d7f565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611b6a57611b6581611eec565b611ba9565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611ba857611ba78282611fbd565b5b5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b606060008203611c18576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611d2c565b600082905060005b60008214611c4a578080611c3390613467565b915050600a82611c4391906134de565b9150611c20565b60008167ffffffffffffffff811115611c6657611c65612411565b5b6040519080825280601f01601f191660200182016040528015611c985781602001600182028036833780820191505090505b5090505b60008514611d2557600182611cb19190612d48565b9150600a85611cc0919061350f565b6030611ccc9190612d7c565b60f81b818381518110611ce257611ce1612a36565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611d1e91906134de565b9450611c9c565b8093505050505b919050565b505050565b600a80549050600b600083815260200190815260200160002081905550600a81908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001611d8c84610860565b611d969190612d48565b9050600060096000848152602001908152602001600020549050818114611e7b576000600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816009600083815260200190815260200160002081905550505b6009600084815260200190815260200160002060009055600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001600a80549050611f009190612d48565b90506000600b60008481526020019081526020016000205490506000600a8381548110611f3057611f2f612a36565b5b9060005260206000200154905080600a8381548110611f5257611f51612a36565b5b906000526020600020018190555081600b600083815260200190815260200160002081905550600b600085815260200190815260200160002060009055600a805480611fa157611fa0613540565b5b6001900381819060005260206000200160009055905550505050565b6000611fc883610860565b905081600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806009600084815260200190815260200160002081905550505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61208581612050565b811461209057600080fd5b50565b6000813590506120a28161207c565b92915050565b6000602082840312156120be576120bd612046565b5b60006120cc84828501612093565b91505092915050565b60008115159050919050565b6120ea816120d5565b82525050565b600060208201905061210560008301846120e1565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561214557808201518184015260208101905061212a565b83811115612154576000848401525b50505050565b6000601f19601f8301169050919050565b60006121768261210b565b6121808185612116565b9350612190818560208601612127565b6121998161215a565b840191505092915050565b600060208201905081810360008301526121be818461216b565b905092915050565b6000819050919050565b6121d9816121c6565b81146121e457600080fd5b50565b6000813590506121f6816121d0565b92915050565b60006020828403121561221257612211612046565b5b6000612220848285016121e7565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061225482612229565b9050919050565b61226481612249565b82525050565b600060208201905061227f600083018461225b565b92915050565b61228e81612249565b811461229957600080fd5b50565b6000813590506122ab81612285565b92915050565b600080604083850312156122c8576122c7612046565b5b60006122d68582860161229c565b92505060206122e7858286016121e7565b9150509250929050565b6122fa816121c6565b82525050565b600060208201905061231560008301846122f1565b92915050565b60008060006060848603121561233457612333612046565b5b60006123428682870161229c565b93505060206123538682870161229c565b9250506040612364868287016121e7565b9150509250925092565b60006020828403121561238457612383612046565b5b60006123928482850161229c565b91505092915050565b6123a4816120d5565b81146123af57600080fd5b50565b6000813590506123c18161239b565b92915050565b600080604083850312156123de576123dd612046565b5b60006123ec8582860161229c565b92505060206123fd858286016123b2565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6124498261215a565b810181811067ffffffffffffffff8211171561246857612467612411565b5b80604052505050565b600061247b61203c565b90506124878282612440565b919050565b600067ffffffffffffffff8211156124a7576124a6612411565b5b6124b08261215a565b9050602081019050919050565b82818337600083830152505050565b60006124df6124da8461248c565b612471565b9050828152602081018484840111156124fb576124fa61240c565b5b6125068482856124bd565b509392505050565b600082601f83011261252357612522612407565b5b81356125338482602086016124cc565b91505092915050565b6000806000806080858703121561255657612555612046565b5b60006125648782880161229c565b94505060206125758782880161229c565b9350506040612586878288016121e7565b925050606085013567ffffffffffffffff8111156125a7576125a661204b565b5b6125b38782880161250e565b91505092959194509250565b600080604083850312156125d6576125d5612046565b5b60006125e48582860161229c565b92505060206125f58582860161229c565b9150509250929050565b600067ffffffffffffffff82111561261a57612619612411565b5b6126238261215a565b9050602081019050919050565b600061264361263e846125ff565b612471565b90508281526020810184848401111561265f5761265e61240c565b5b61266a8482856124bd565b509392505050565b600082601f83011261268757612686612407565b5b8135612697848260208601612630565b91505092915050565b600080604083850312156126b7576126b6612046565b5b60006126c58582860161229c565b925050602083013567ffffffffffffffff8111156126e6576126e561204b565b5b6126f285828601612672565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061274357607f821691505b602082108103612756576127556126fc565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006127b8602183612116565b91506127c38261275c565b604082019050919050565b600060208201905081810360008301526127e7816127ab565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b600061284a603e83612116565b9150612855826127ee565b604082019050919050565b600060208201905081810360008301526128798161283d565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b60006128dc602e83612116565b91506128e782612880565b604082019050919050565b6000602082019050818103600083015261290b816128cf565b9050919050565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b600061296e602b83612116565b915061297982612912565b604082019050919050565b6000602082019050818103600083015261299d81612961565b9050919050565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b6000612a00602c83612116565b9150612a0b826129a4565b604082019050919050565b60006020820190508181036000830152612a2f816129f3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612a9b601883612116565b9150612aa682612a65565b602082019050919050565b60006020820190508181036000830152612aca81612a8e565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612b2d602983612116565b9150612b3882612ad1565b604082019050919050565b60006020820190508181036000830152612b5c81612b20565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612bbf602683612116565b9150612bca82612b63565b604082019050919050565b60006020820190508181036000830152612bee81612bb2565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612c51602583612116565b9150612c5c82612bf5565b604082019050919050565b60006020820190508181036000830152612c8081612c44565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612ce3602483612116565b9150612cee82612c87565b604082019050919050565b60006020820190508181036000830152612d1281612cd6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612d53826121c6565b9150612d5e836121c6565b925082821015612d7157612d70612d19565b5b828203905092915050565b6000612d87826121c6565b9150612d92836121c6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612dc757612dc6612d19565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612e08602083612116565b9150612e1382612dd2565b602082019050919050565b60006020820190508181036000830152612e3781612dfb565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612e74601983612116565b9150612e7f82612e3e565b602082019050919050565b60006020820190508181036000830152612ea381612e67565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612f06603283612116565b9150612f1182612eaa565b604082019050919050565b60006020820190508181036000830152612f3581612ef9565b9050919050565b600081905092915050565b6000612f528261210b565b612f5c8185612f3c565b9350612f6c818560208601612127565b80840191505092915050565b6000612f848285612f47565b9150612f908284612f47565b91508190509392505050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612fd2602083612116565b9150612fdd82612f9c565b602082019050919050565b6000602082019050818103600083015261300181612fc5565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b600061303e601c83612116565b915061304982613008565b602082019050919050565b6000602082019050818103600083015261306d81613031565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b60006130d0602e83612116565b91506130db82613074565b604082019050919050565b600060208201905081810360008301526130ff816130c3565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026131687fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261312b565b613172868361312b565b95508019841693508086168417925050509392505050565b6000819050919050565b60006131af6131aa6131a5846121c6565b61318a565b6121c6565b9050919050565b6000819050919050565b6131c983613194565b6131dd6131d5826131b6565b848454613138565b825550505050565b600090565b6131f26131e5565b6131fd8184846131c0565b505050565b5b81811015613221576132166000826131ea565b600181019050613203565b5050565b601f8211156132665761323781613106565b6132408461311b565b8101602085101561324f578190505b61326361325b8561311b565b830182613202565b50505b505050565b600082821c905092915050565b60006132896000198460080261326b565b1980831691505092915050565b60006132a28383613278565b9150826002028217905092915050565b6132bb8261210b565b67ffffffffffffffff8111156132d4576132d3612411565b5b6132de825461272b565b6132e9828285613225565b600060209050601f83116001811461331c576000841561330a578287015190505b6133148582613296565b86555061337c565b601f19841661332a86613106565b60005b828110156133525784890151825560018201915060208501945060208101905061332d565b8683101561336f578489015161336b601f891682613278565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600082825260208201905092915050565b60006133ab82613384565b6133b5818561338f565b93506133c5818560208601612127565b6133ce8161215a565b840191505092915050565b60006080820190506133ee600083018761225b565b6133fb602083018661225b565b61340860408301856122f1565b818103606083015261341a81846133a0565b905095945050505050565b6000815190506134348161207c565b92915050565b6000602082840312156134505761344f612046565b5b600061345e84828501613425565b91505092915050565b6000613472826121c6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036134a4576134a3612d19565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006134e9826121c6565b91506134f4836121c6565b925082613504576135036134af565b5b828204905092915050565b600061351a826121c6565b9150613525836121c6565b925082613535576135346134af565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220f0d3ee6d2a0bc4acfeb44a535e2f293730a58191c2c6912f7473c87b2f78d40f64736f6c634300080f0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad578063b88d4fde11610071578063b88d4fde14610343578063c87b56dd1461035f578063e985e9c51461038f578063eacabe14146103bf578063f2fde38b146103ef5761012c565b806370a08231146102b1578063715018a6146102e15780638da5cb5b146102eb57806395d89b4114610309578063a22cb465146103275761012c565b806323b872dd116100f457806323b872dd146101e95780632f745c591461020557806342842e0e146102355780634f6ccce7146102515780636352211e146102815761012c565b806301ffc9a71461013157806306fdde0314610161578063081812fc1461017f578063095ea7b3146101af57806318160ddd146101cb575b600080fd5b61014b600480360381019061014691906120a8565b61040b565b60405161015891906120f0565b60405180910390f35b61016961041d565b60405161017691906121a4565b60405180910390f35b610199600480360381019061019491906121fc565b6104af565b6040516101a6919061226a565b60405180910390f35b6101c960048036038101906101c491906122b1565b6104f5565b005b6101d361060c565b6040516101e09190612300565b60405180910390f35b61020360048036038101906101fe919061231b565b610619565b005b61021f600480360381019061021a91906122b1565b610679565b60405161022c9190612300565b60405180910390f35b61024f600480360381019061024a919061231b565b61071e565b005b61026b600480360381019061026691906121fc565b61073e565b6040516102789190612300565b60405180910390f35b61029b600480360381019061029691906121fc565b6107af565b6040516102a8919061226a565b60405180910390f35b6102cb60048036038101906102c6919061236e565b610860565b6040516102d89190612300565b60405180910390f35b6102e9610917565b005b6102f361092b565b604051610300919061226a565b60405180910390f35b610311610955565b60405161031e91906121a4565b60405180910390f35b610341600480360381019061033c91906123c7565b6109e7565b005b61035d6004803603810190610358919061253c565b6109fd565b005b610379600480360381019061037491906121fc565b610a5f565b60405161038691906121a4565b60405180910390f35b6103a960048036038101906103a491906125bf565b610a71565b6040516103b691906120f0565b60405180910390f35b6103d960048036038101906103d491906126a0565b610b05565b6040516103e69190612300565b60405180910390f35b6104096004803603810190610404919061236e565b610b3d565b005b600061041682610bc0565b9050919050565b60606000805461042c9061272b565b80601f01602080910402602001604051908101604052809291908181526020018280546104589061272b565b80156104a55780601f1061047a576101008083540402835291602001916104a5565b820191906000526020600020905b81548152906001019060200180831161048857829003601f168201915b5050505050905090565b60006104ba82610c3a565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610500826107af565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610570576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610567906127ce565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661058f610c85565b73ffffffffffffffffffffffffffffffffffffffff1614806105be57506105bd816105b8610c85565b610a71565b5b6105fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f490612860565b60405180910390fd5b6106078383610c8d565b505050565b6000600a80549050905090565b61062a610624610c85565b82610d46565b610669576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610660906128f2565b60405180910390fd5b610674838383610ddb565b505050565b600061068483610860565b82106106c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106bc90612984565b60405180910390fd5b600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b610739838383604051806020016040528060008152506109fd565b505050565b600061074861060c565b8210610789576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078090612a16565b60405180910390fd5b600a828154811061079d5761079c612a36565b5b90600052602060002001549050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610857576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084e90612ab1565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c790612b43565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61091f611041565b61092960006110bf565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600180546109649061272b565b80601f01602080910402602001604051908101604052809291908181526020018280546109909061272b565b80156109dd5780601f106109b2576101008083540402835291602001916109dd565b820191906000526020600020905b8154815290600101906020018083116109c057829003601f168201915b5050505050905090565b6109f96109f2610c85565b8383611185565b5050565b610a0e610a08610c85565b83610d46565b610a4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a44906128f2565b60405180910390fd5b610a59848484846112f1565b50505050565b6060610a6a8261134d565b9050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000610b11600c61145f565b6000610b1d600c611475565b9050610b298482611483565b610b33818461165c565b8091505092915050565b610b45611041565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610bb4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bab90612bd5565b60405180910390fd5b610bbd816110bf565b50565b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610c335750610c32826116c9565b5b9050919050565b610c43816117ab565b610c82576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7990612ab1565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610d00836107af565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610d52836107af565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d945750610d938185610a71565b5b80610dd257508373ffffffffffffffffffffffffffffffffffffffff16610dba846104af565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610dfb826107af565b73ffffffffffffffffffffffffffffffffffffffff1614610e51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e4890612c67565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ec0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610eb790612cf9565b60405180910390fd5b610ecb838383611817565b610ed6600082610c8d565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f269190612d48565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f7d9190612d7c565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461103c838383611827565b505050565b611049610c85565b73ffffffffffffffffffffffffffffffffffffffff1661106761092b565b73ffffffffffffffffffffffffffffffffffffffff16146110bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110b490612e1e565b60405180910390fd5b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036111f3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ea90612e8a565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516112e491906120f0565b60405180910390a3505050565b6112fc848484610ddb565b6113088484848461182c565b611347576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133e90612f1c565b60405180910390fd5b50505050565b606061135882610c3a565b60006006600084815260200190815260200160002080546113789061272b565b80601f01602080910402602001604051908101604052809291908181526020018280546113a49061272b565b80156113f15780601f106113c6576101008083540402835291602001916113f1565b820191906000526020600020905b8154815290600101906020018083116113d457829003601f168201915b5050505050905060006114026119b3565b9050600081510361141757819250505061145a565b60008251111561144c578082604051602001611434929190612f78565b6040516020818303038152906040529250505061145a565b611455846119ca565b925050505b919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036114f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114e990612fe8565b60405180910390fd5b6114fb816117ab565b1561153b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153290613054565b60405180910390fd5b61154760008383611817565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115979190612d7c565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461165860008383611827565b5050565b611665826117ab565b6116a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161169b906130e6565b60405180910390fd5b806006600084815260200190815260200160002090816116c491906132b2565b505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061179457507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806117a457506117a382611a32565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b611822838383611a9c565b505050565b505050565b600061184d8473ffffffffffffffffffffffffffffffffffffffff16611bae565b156119a6578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611876610c85565b8786866040518563ffffffff1660e01b815260040161189894939291906133d9565b6020604051808303816000875af19250505080156118d457506040513d601f19601f820116820180604052508101906118d1919061343a565b60015b611956573d8060008114611904576040519150601f19603f3d011682016040523d82523d6000602084013e611909565b606091505b50600081510361194e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161194590612f1c565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506119ab565b600190505b949350505050565b606060405180602001604052806000815250905090565b60606119d582610c3a565b60006119df6119b3565b905060008151116119ff5760405180602001604052806000815250611a2a565b80611a0984611bd1565b604051602001611a1a929190612f78565b6040516020818303038152906040525b915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611aa7838383611d31565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611ae957611ae481611d36565b611b28565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611b2757611b268382611d7f565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611b6a57611b6581611eec565b611ba9565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611ba857611ba78282611fbd565b5b5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b606060008203611c18576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611d2c565b600082905060005b60008214611c4a578080611c3390613467565b915050600a82611c4391906134de565b9150611c20565b60008167ffffffffffffffff811115611c6657611c65612411565b5b6040519080825280601f01601f191660200182016040528015611c985781602001600182028036833780820191505090505b5090505b60008514611d2557600182611cb19190612d48565b9150600a85611cc0919061350f565b6030611ccc9190612d7c565b60f81b818381518110611ce257611ce1612a36565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611d1e91906134de565b9450611c9c565b8093505050505b919050565b505050565b600a80549050600b600083815260200190815260200160002081905550600a81908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001611d8c84610860565b611d969190612d48565b9050600060096000848152602001908152602001600020549050818114611e7b576000600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816009600083815260200190815260200160002081905550505b6009600084815260200190815260200160002060009055600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001600a80549050611f009190612d48565b90506000600b60008481526020019081526020016000205490506000600a8381548110611f3057611f2f612a36565b5b9060005260206000200154905080600a8381548110611f5257611f51612a36565b5b906000526020600020018190555081600b600083815260200190815260200160002081905550600b600085815260200190815260200160002060009055600a805480611fa157611fa0613540565b5b6001900381819060005260206000200160009055905550505050565b6000611fc883610860565b905081600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806009600084815260200190815260200160002081905550505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61208581612050565b811461209057600080fd5b50565b6000813590506120a28161207c565b92915050565b6000602082840312156120be576120bd612046565b5b60006120cc84828501612093565b91505092915050565b60008115159050919050565b6120ea816120d5565b82525050565b600060208201905061210560008301846120e1565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561214557808201518184015260208101905061212a565b83811115612154576000848401525b50505050565b6000601f19601f8301169050919050565b60006121768261210b565b6121808185612116565b9350612190818560208601612127565b6121998161215a565b840191505092915050565b600060208201905081810360008301526121be818461216b565b905092915050565b6000819050919050565b6121d9816121c6565b81146121e457600080fd5b50565b6000813590506121f6816121d0565b92915050565b60006020828403121561221257612211612046565b5b6000612220848285016121e7565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061225482612229565b9050919050565b61226481612249565b82525050565b600060208201905061227f600083018461225b565b92915050565b61228e81612249565b811461229957600080fd5b50565b6000813590506122ab81612285565b92915050565b600080604083850312156122c8576122c7612046565b5b60006122d68582860161229c565b92505060206122e7858286016121e7565b9150509250929050565b6122fa816121c6565b82525050565b600060208201905061231560008301846122f1565b92915050565b60008060006060848603121561233457612333612046565b5b60006123428682870161229c565b93505060206123538682870161229c565b9250506040612364868287016121e7565b9150509250925092565b60006020828403121561238457612383612046565b5b60006123928482850161229c565b91505092915050565b6123a4816120d5565b81146123af57600080fd5b50565b6000813590506123c18161239b565b92915050565b600080604083850312156123de576123dd612046565b5b60006123ec8582860161229c565b92505060206123fd858286016123b2565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6124498261215a565b810181811067ffffffffffffffff8211171561246857612467612411565b5b80604052505050565b600061247b61203c565b90506124878282612440565b919050565b600067ffffffffffffffff8211156124a7576124a6612411565b5b6124b08261215a565b9050602081019050919050565b82818337600083830152505050565b60006124df6124da8461248c565b612471565b9050828152602081018484840111156124fb576124fa61240c565b5b6125068482856124bd565b509392505050565b600082601f83011261252357612522612407565b5b81356125338482602086016124cc565b91505092915050565b6000806000806080858703121561255657612555612046565b5b60006125648782880161229c565b94505060206125758782880161229c565b9350506040612586878288016121e7565b925050606085013567ffffffffffffffff8111156125a7576125a661204b565b5b6125b38782880161250e565b91505092959194509250565b600080604083850312156125d6576125d5612046565b5b60006125e48582860161229c565b92505060206125f58582860161229c565b9150509250929050565b600067ffffffffffffffff82111561261a57612619612411565b5b6126238261215a565b9050602081019050919050565b600061264361263e846125ff565b612471565b90508281526020810184848401111561265f5761265e61240c565b5b61266a8482856124bd565b509392505050565b600082601f83011261268757612686612407565b5b8135612697848260208601612630565b91505092915050565b600080604083850312156126b7576126b6612046565b5b60006126c58582860161229c565b925050602083013567ffffffffffffffff8111156126e6576126e561204b565b5b6126f285828601612672565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061274357607f821691505b602082108103612756576127556126fc565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006127b8602183612116565b91506127c38261275c565b604082019050919050565b600060208201905081810360008301526127e7816127ab565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b600061284a603e83612116565b9150612855826127ee565b604082019050919050565b600060208201905081810360008301526128798161283d565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b60006128dc602e83612116565b91506128e782612880565b604082019050919050565b6000602082019050818103600083015261290b816128cf565b9050919050565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b600061296e602b83612116565b915061297982612912565b604082019050919050565b6000602082019050818103600083015261299d81612961565b9050919050565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b6000612a00602c83612116565b9150612a0b826129a4565b604082019050919050565b60006020820190508181036000830152612a2f816129f3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612a9b601883612116565b9150612aa682612a65565b602082019050919050565b60006020820190508181036000830152612aca81612a8e565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612b2d602983612116565b9150612b3882612ad1565b604082019050919050565b60006020820190508181036000830152612b5c81612b20565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612bbf602683612116565b9150612bca82612b63565b604082019050919050565b60006020820190508181036000830152612bee81612bb2565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612c51602583612116565b9150612c5c82612bf5565b604082019050919050565b60006020820190508181036000830152612c8081612c44565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612ce3602483612116565b9150612cee82612c87565b604082019050919050565b60006020820190508181036000830152612d1281612cd6565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612d53826121c6565b9150612d5e836121c6565b925082821015612d7157612d70612d19565b5b828203905092915050565b6000612d87826121c6565b9150612d92836121c6565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612dc757612dc6612d19565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612e08602083612116565b9150612e1382612dd2565b602082019050919050565b60006020820190508181036000830152612e3781612dfb565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612e74601983612116565b9150612e7f82612e3e565b602082019050919050565b60006020820190508181036000830152612ea381612e67565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612f06603283612116565b9150612f1182612eaa565b604082019050919050565b60006020820190508181036000830152612f3581612ef9565b9050919050565b600081905092915050565b6000612f528261210b565b612f5c8185612f3c565b9350612f6c818560208601612127565b80840191505092915050565b6000612f848285612f47565b9150612f908284612f47565b91508190509392505050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612fd2602083612116565b9150612fdd82612f9c565b602082019050919050565b6000602082019050818103600083015261300181612fc5565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b600061303e601c83612116565b915061304982613008565b602082019050919050565b6000602082019050818103600083015261306d81613031565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b60006130d0602e83612116565b91506130db82613074565b604082019050919050565b600060208201905081810360008301526130ff816130c3565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026131687fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261312b565b613172868361312b565b95508019841693508086168417925050509392505050565b6000819050919050565b60006131af6131aa6131a5846121c6565b61318a565b6121c6565b9050919050565b6000819050919050565b6131c983613194565b6131dd6131d5826131b6565b848454613138565b825550505050565b600090565b6131f26131e5565b6131fd8184846131c0565b505050565b5b81811015613221576132166000826131ea565b600181019050613203565b5050565b601f8211156132665761323781613106565b6132408461311b565b8101602085101561324f578190505b61326361325b8561311b565b830182613202565b50505b505050565b600082821c905092915050565b60006132896000198460080261326b565b1980831691505092915050565b60006132a28383613278565b9150826002028217905092915050565b6132bb8261210b565b67ffffffffffffffff8111156132d4576132d3612411565b5b6132de825461272b565b6132e9828285613225565b600060209050601f83116001811461331c576000841561330a578287015190505b6133148582613296565b86555061337c565b601f19841661332a86613106565b60005b828110156133525784890151825560018201915060208501945060208101905061332d565b8683101561336f578489015161336b601f891682613278565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600082825260208201905092915050565b60006133ab82613384565b6133b5818561338f565b93506133c5818560208601612127565b6133ce8161215a565b840191505092915050565b60006080820190506133ee600083018761225b565b6133fb602083018661225b565b61340860408301856122f1565b818103606083015261341a81846133a0565b905095945050505050565b6000815190506134348161207c565b92915050565b6000602082840312156134505761344f612046565b5b600061345e84828501613425565b91505092915050565b6000613472826121c6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036134a4576134a3612d19565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006134e9826121c6565b91506134f4836121c6565b925082613504576135036134af565b5b828204905092915050565b600061351a826121c6565b9150613525836121c6565b925082613535576135346134af565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea2646970667358221220f0d3ee6d2a0bc4acfeb44a535e2f293730a58191c2c6912f7473c87b2f78d40f64736f6c634300080f0033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:5231:16",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "66:40:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "77:22:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "93:5:16"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "87:5:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "87:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "77:6:16"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "49:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "59:6:16",
                "type": ""
              }
            ],
            "src": "7:99:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "140:152:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "157:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "160:77:16",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "150:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "150:88:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "150:88:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "254:1:16",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "257:4:16",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "247:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "247:15:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "247:15:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "278:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "281:4:16",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "271:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "271:15:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "271:15:16"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "112:180:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "326:152:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "343:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "346:77:16",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "336:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "336:88:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "336:88:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "440:1:16",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "443:4:16",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "433:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "433:15:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "433:15:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "464:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "467:4:16",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "457:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "457:15:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "457:15:16"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "298:180:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "535:269:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "545:22:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "559:4:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "565:1:16",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "555:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "555:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "545:6:16"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "576:38:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "606:4:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "612:1:16",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "602:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "602:12:16"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "580:18:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "653:51:16",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "667:27:16",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "681:6:16"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "689:4:16",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "677:3:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "677:17:16"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "667:6:16"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "633:18:16"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "626:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "626:26:16"
                  },
                  "nodeType": "YulIf",
                  "src": "623:81:16"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "756:42:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "770:16:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "770:18:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "770:18:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "720:18:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "743:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "751:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "740:2:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "740:14:16"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "717:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "717:38:16"
                  },
                  "nodeType": "YulIf",
                  "src": "714:84:16"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "519:4:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "528:6:16",
                "type": ""
              }
            ],
            "src": "484:320:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "864:87:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "874:11:16",
                  "value": {
                    "name": "ptr",
                    "nodeType": "YulIdentifier",
                    "src": "882:3:16"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "874:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "902:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "905:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "895:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "895:14:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "895:14:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "918:26:16",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "936:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "939:4:16",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "keccak256",
                      "nodeType": "YulIdentifier",
                      "src": "926:9:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "926:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "918:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "array_dataslot_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "ptr",
                "nodeType": "YulTypedName",
                "src": "851:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "859:4:16",
                "type": ""
              }
            ],
            "src": "810:141:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1001:49:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1011:33:16",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1029:5:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1036:2:16",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1025:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1025:14:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1041:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "1021:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1021:23:16"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "1011:6:16"
                    }
                  ]
                }
              ]
            },
            "name": "divide_by_32_ceil",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "984:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "994:6:16",
                "type": ""
              }
            ],
            "src": "957:93:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1109:54:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1119:37:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "bits",
                        "nodeType": "YulIdentifier",
                        "src": "1144:4:16"
                      },
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1150:5:16"
                      }
                    ],
                    "functionName": {
                      "name": "shl",
                      "nodeType": "YulIdentifier",
                      "src": "1140:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1140:16:16"
                  },
                  "variableNames": [
                    {
                      "name": "newValue",
                      "nodeType": "YulIdentifier",
                      "src": "1119:8:16"
                    }
                  ]
                }
              ]
            },
            "name": "shift_left_dynamic",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "bits",
                "nodeType": "YulTypedName",
                "src": "1084:4:16",
                "type": ""
              },
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1090:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "newValue",
                "nodeType": "YulTypedName",
                "src": "1100:8:16",
                "type": ""
              }
            ],
            "src": "1056:107:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1245:317:16",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1255:35:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBytes",
                        "nodeType": "YulIdentifier",
                        "src": "1276:10:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1288:1:16",
                        "type": "",
                        "value": "8"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "1272:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1272:18:16"
                  },
                  "variables": [
                    {
                      "name": "shiftBits",
                      "nodeType": "YulTypedName",
                      "src": "1259:9:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1299:109:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulIdentifier",
                        "src": "1330:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1341:66:16",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "shift_left_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "1311:18:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1311:97:16"
                  },
                  "variables": [
                    {
                      "name": "mask",
                      "nodeType": "YulTypedName",
                      "src": "1303:4:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1417:51:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulIdentifier",
                        "src": "1448:9:16"
                      },
                      {
                        "name": "toInsert",
                        "nodeType": "YulIdentifier",
                        "src": "1459:8:16"
                      }
                    ],
                    "functionName": {
                      "name": "shift_left_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "1429:18:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1429:39:16"
                  },
                  "variableNames": [
                    {
                      "name": "toInsert",
                      "nodeType": "YulIdentifier",
                      "src": "1417:8:16"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1477:30:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1490:5:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "mask",
                            "nodeType": "YulIdentifier",
                            "src": "1501:4:16"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "1497:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1497:9:16"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "1486:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1486:21:16"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "1477:5:16"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1516:40:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1529:5:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "toInsert",
                            "nodeType": "YulIdentifier",
                            "src": "1540:8:16"
                          },
                          {
                            "name": "mask",
                            "nodeType": "YulIdentifier",
                            "src": "1550:4:16"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "1536:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1536:19:16"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "1526:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1526:30:16"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "1516:6:16"
                    }
                  ]
                }
              ]
            },
            "name": "update_byte_slice_dynamic32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1206:5:16",
                "type": ""
              },
              {
                "name": "shiftBytes",
                "nodeType": "YulTypedName",
                "src": "1213:10:16",
                "type": ""
              },
              {
                "name": "toInsert",
                "nodeType": "YulTypedName",
                "src": "1225:8:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "1238:6:16",
                "type": ""
              }
            ],
            "src": "1169:393:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1613:32:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1623:16:16",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1634:5:16"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "1623:7:16"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1595:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "1605:7:16",
                "type": ""
              }
            ],
            "src": "1568:77:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1683:28:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1693:12:16",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1700:5:16"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "1693:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "identity",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1669:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "1679:3:16",
                "type": ""
              }
            ],
            "src": "1651:60:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1777:82:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1787:66:16",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "1845:5:16"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "1827:17:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1827:24:16"
                          }
                        ],
                        "functionName": {
                          "name": "identity",
                          "nodeType": "YulIdentifier",
                          "src": "1818:8:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1818:34:16"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "1800:17:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1800:53:16"
                  },
                  "variableNames": [
                    {
                      "name": "converted",
                      "nodeType": "YulIdentifier",
                      "src": "1787:9:16"
                    }
                  ]
                }
              ]
            },
            "name": "convert_t_uint256_to_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1757:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "converted",
                "nodeType": "YulTypedName",
                "src": "1767:9:16",
                "type": ""
              }
            ],
            "src": "1717:142:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1912:28:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1922:12:16",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "1929:5:16"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "1922:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "prepare_store_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1898:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "1908:3:16",
                "type": ""
              }
            ],
            "src": "1865:75:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2022:193:16",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2032:63:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value_0",
                        "nodeType": "YulIdentifier",
                        "src": "2087:7:16"
                      }
                    ],
                    "functionName": {
                      "name": "convert_t_uint256_to_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "2056:30:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2056:39:16"
                  },
                  "variables": [
                    {
                      "name": "convertedValue_0",
                      "nodeType": "YulTypedName",
                      "src": "2036:16:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "2111:4:16"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "slot",
                                "nodeType": "YulIdentifier",
                                "src": "2151:4:16"
                              }
                            ],
                            "functionName": {
                              "name": "sload",
                              "nodeType": "YulIdentifier",
                              "src": "2145:5:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2145:11:16"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "2158:6:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "convertedValue_0",
                                "nodeType": "YulIdentifier",
                                "src": "2190:16:16"
                              }
                            ],
                            "functionName": {
                              "name": "prepare_store_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "2166:23:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "2166:41:16"
                          }
                        ],
                        "functionName": {
                          "name": "update_byte_slice_dynamic32",
                          "nodeType": "YulIdentifier",
                          "src": "2117:27:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2117:91:16"
                      }
                    ],
                    "functionName": {
                      "name": "sstore",
                      "nodeType": "YulIdentifier",
                      "src": "2104:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2104:105:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2104:105:16"
                }
              ]
            },
            "name": "update_storage_value_t_uint256_to_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "1999:4:16",
                "type": ""
              },
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "2005:6:16",
                "type": ""
              },
              {
                "name": "value_0",
                "nodeType": "YulTypedName",
                "src": "2013:7:16",
                "type": ""
              }
            ],
            "src": "1946:269:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2270:24:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2280:8:16",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "2287:1:16",
                    "type": "",
                    "value": "0"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "2280:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "zero_value_for_split_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "2266:3:16",
                "type": ""
              }
            ],
            "src": "2221:73:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2353:136:16",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2363:46:16",
                  "value": {
                    "arguments": [],
                    "functionName": {
                      "name": "zero_value_for_split_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "2377:30:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2377:32:16"
                  },
                  "variables": [
                    {
                      "name": "zero_0",
                      "nodeType": "YulTypedName",
                      "src": "2367:6:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "2462:4:16"
                      },
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "2468:6:16"
                      },
                      {
                        "name": "zero_0",
                        "nodeType": "YulIdentifier",
                        "src": "2476:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "update_storage_value_t_uint256_to_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "2418:43:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2418:65:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2418:65:16"
                }
              ]
            },
            "name": "storage_set_to_zero_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "2339:4:16",
                "type": ""
              },
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "2345:6:16",
                "type": ""
              }
            ],
            "src": "2300:189:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2545:136:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2612:63:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "2656:5:16"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2663:1:16",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "storage_set_to_zero_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "2626:29:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2626:39:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2626:39:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "start",
                        "nodeType": "YulIdentifier",
                        "src": "2565:5:16"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "2572:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "2562:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2562:14:16"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "2577:26:16",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "2579:22:16",
                        "value": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "2592:5:16"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2599:1:16",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2588:3:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2588:13:16"
                        },
                        "variableNames": [
                          {
                            "name": "start",
                            "nodeType": "YulIdentifier",
                            "src": "2579:5:16"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "2559:2:16",
                    "statements": []
                  },
                  "src": "2555:120:16"
                }
              ]
            },
            "name": "clear_storage_range_t_bytes1",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "start",
                "nodeType": "YulTypedName",
                "src": "2533:5:16",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2540:3:16",
                "type": ""
              }
            ],
            "src": "2495:186:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2766:464:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2792:431:16",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2806:54:16",
                        "value": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "2854:5:16"
                            }
                          ],
                          "functionName": {
                            "name": "array_dataslot_t_string_storage",
                            "nodeType": "YulIdentifier",
                            "src": "2822:31:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2822:38:16"
                        },
                        "variables": [
                          {
                            "name": "dataArea",
                            "nodeType": "YulTypedName",
                            "src": "2810:8:16",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "2873:63:16",
                        "value": {
                          "arguments": [
                            {
                              "name": "dataArea",
                              "nodeType": "YulIdentifier",
                              "src": "2896:8:16"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "startIndex",
                                  "nodeType": "YulIdentifier",
                                  "src": "2924:10:16"
                                }
                              ],
                              "functionName": {
                                "name": "divide_by_32_ceil",
                                "nodeType": "YulIdentifier",
                                "src": "2906:17:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2906:29:16"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "2892:3:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2892:44:16"
                        },
                        "variables": [
                          {
                            "name": "deleteStart",
                            "nodeType": "YulTypedName",
                            "src": "2877:11:16",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "3093:27:16",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "3095:23:16",
                              "value": {
                                "name": "dataArea",
                                "nodeType": "YulIdentifier",
                                "src": "3110:8:16"
                              },
                              "variableNames": [
                                {
                                  "name": "deleteStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "3095:11:16"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "startIndex",
                              "nodeType": "YulIdentifier",
                              "src": "3077:10:16"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3089:2:16",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "3074:2:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3074:18:16"
                        },
                        "nodeType": "YulIf",
                        "src": "3071:49:16"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "deleteStart",
                              "nodeType": "YulIdentifier",
                              "src": "3162:11:16"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "dataArea",
                                  "nodeType": "YulIdentifier",
                                  "src": "3179:8:16"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "len",
                                      "nodeType": "YulIdentifier",
                                      "src": "3207:3:16"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "divide_by_32_ceil",
                                    "nodeType": "YulIdentifier",
                                    "src": "3189:17:16"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "3189:22:16"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "3175:3:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "3175:37:16"
                            }
                          ],
                          "functionName": {
                            "name": "clear_storage_range_t_bytes1",
                            "nodeType": "YulIdentifier",
                            "src": "3133:28:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3133:80:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3133:80:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "2783:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2788:2:16",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2780:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2780:11:16"
                  },
                  "nodeType": "YulIf",
                  "src": "2777:446:16"
                }
              ]
            },
            "name": "clean_up_bytearray_end_slots_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "2742:5:16",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "2749:3:16",
                "type": ""
              },
              {
                "name": "startIndex",
                "nodeType": "YulTypedName",
                "src": "2754:10:16",
                "type": ""
              }
            ],
            "src": "2687:543:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3299:54:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3309:37:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "bits",
                        "nodeType": "YulIdentifier",
                        "src": "3334:4:16"
                      },
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3340:5:16"
                      }
                    ],
                    "functionName": {
                      "name": "shr",
                      "nodeType": "YulIdentifier",
                      "src": "3330:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3330:16:16"
                  },
                  "variableNames": [
                    {
                      "name": "newValue",
                      "nodeType": "YulIdentifier",
                      "src": "3309:8:16"
                    }
                  ]
                }
              ]
            },
            "name": "shift_right_unsigned_dynamic",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "bits",
                "nodeType": "YulTypedName",
                "src": "3274:4:16",
                "type": ""
              },
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3280:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "newValue",
                "nodeType": "YulTypedName",
                "src": "3290:8:16",
                "type": ""
              }
            ],
            "src": "3236:117:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3410:118:16",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3420:68:16",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3469:1:16",
                                "type": "",
                                "value": "8"
                              },
                              {
                                "name": "bytes",
                                "nodeType": "YulIdentifier",
                                "src": "3472:5:16"
                              }
                            ],
                            "functionName": {
                              "name": "mul",
                              "nodeType": "YulIdentifier",
                              "src": "3465:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3465:13:16"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "3484:1:16",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "3480:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3480:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "shift_right_unsigned_dynamic",
                          "nodeType": "YulIdentifier",
                          "src": "3436:28:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3436:51:16"
                      }
                    ],
                    "functionName": {
                      "name": "not",
                      "nodeType": "YulIdentifier",
                      "src": "3432:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3432:56:16"
                  },
                  "variables": [
                    {
                      "name": "mask",
                      "nodeType": "YulTypedName",
                      "src": "3424:4:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3497:25:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "3511:4:16"
                      },
                      {
                        "name": "mask",
                        "nodeType": "YulIdentifier",
                        "src": "3517:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "3507:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3507:15:16"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "3497:6:16"
                    }
                  ]
                }
              ]
            },
            "name": "mask_bytes_dynamic",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "3387:4:16",
                "type": ""
              },
              {
                "name": "bytes",
                "nodeType": "YulTypedName",
                "src": "3393:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "3403:6:16",
                "type": ""
              }
            ],
            "src": "3359:169:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3614:214:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3747:37:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "3774:4:16"
                      },
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "3780:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "mask_bytes_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "3755:18:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3755:29:16"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "3747:4:16"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "3793:29:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "3804:4:16"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3814:1:16",
                            "type": "",
                            "value": "2"
                          },
                          {
                            "name": "len",
                            "nodeType": "YulIdentifier",
                            "src": "3817:3:16"
                          }
                        ],
                        "functionName": {
                          "name": "mul",
                          "nodeType": "YulIdentifier",
                          "src": "3810:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3810:11:16"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "3801:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3801:21:16"
                  },
                  "variableNames": [
                    {
                      "name": "used",
                      "nodeType": "YulIdentifier",
                      "src": "3793:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "extract_used_part_and_set_length_of_short_byte_array",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "3595:4:16",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "3601:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "used",
                "nodeType": "YulTypedName",
                "src": "3609:4:16",
                "type": ""
              }
            ],
            "src": "3533:295:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3925:1303:16",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3936:51:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "3983:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "3950:32:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3950:37:16"
                  },
                  "variables": [
                    {
                      "name": "newLen",
                      "nodeType": "YulTypedName",
                      "src": "3940:6:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4072:22:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "4074:16:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4074:18:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4074:18:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "4044:6:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4052:18:16",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4041:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4041:30:16"
                  },
                  "nodeType": "YulIf",
                  "src": "4038:56:16"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4104:52:16",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "slot",
                            "nodeType": "YulIdentifier",
                            "src": "4150:4:16"
                          }
                        ],
                        "functionName": {
                          "name": "sload",
                          "nodeType": "YulIdentifier",
                          "src": "4144:5:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4144:11:16"
                      }
                    ],
                    "functionName": {
                      "name": "extract_byte_array_length",
                      "nodeType": "YulIdentifier",
                      "src": "4118:25:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4118:38:16"
                  },
                  "variables": [
                    {
                      "name": "oldLen",
                      "nodeType": "YulTypedName",
                      "src": "4108:6:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "4249:4:16"
                      },
                      {
                        "name": "oldLen",
                        "nodeType": "YulIdentifier",
                        "src": "4255:6:16"
                      },
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "4263:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "clean_up_bytearray_end_slots_t_string_storage",
                      "nodeType": "YulIdentifier",
                      "src": "4203:45:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4203:67:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4203:67:16"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4280:18:16",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "4297:1:16",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulTypedName",
                      "src": "4284:9:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4308:17:16",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "4321:4:16",
                    "type": "",
                    "value": "0x20"
                  },
                  "variableNames": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulIdentifier",
                      "src": "4308:9:16"
                    }
                  ]
                },
                {
                  "cases": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "4372:611:16",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "4386:37:16",
                            "value": {
                              "arguments": [
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "4405:6:16"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "4417:4:16",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "4413:3:16"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4413:9:16"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "4401:3:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4401:22:16"
                            },
                            "variables": [
                              {
                                "name": "loopEnd",
                                "nodeType": "YulTypedName",
                                "src": "4390:7:16",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "4437:51:16",
                            "value": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "4483:4:16"
                                }
                              ],
                              "functionName": {
                                "name": "array_dataslot_t_string_storage",
                                "nodeType": "YulIdentifier",
                                "src": "4451:31:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4451:37:16"
                            },
                            "variables": [
                              {
                                "name": "dstPtr",
                                "nodeType": "YulTypedName",
                                "src": "4441:6:16",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "4501:10:16",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4510:1:16",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "i",
                                "nodeType": "YulTypedName",
                                "src": "4505:1:16",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "4569:163:16",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "4594:6:16"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "src",
                                                "nodeType": "YulIdentifier",
                                                "src": "4612:3:16"
                                              },
                                              {
                                                "name": "srcOffset",
                                                "nodeType": "YulIdentifier",
                                                "src": "4617:9:16"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nodeType": "YulIdentifier",
                                              "src": "4608:3:16"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4608:19:16"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mload",
                                          "nodeType": "YulIdentifier",
                                          "src": "4602:5:16"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4602:26:16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "4587:6:16"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4587:42:16"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "4587:42:16"
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "4646:24:16",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "4660:6:16"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "4668:1:16",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "4656:3:16"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4656:14:16"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "dstPtr",
                                      "nodeType": "YulIdentifier",
                                      "src": "4646:6:16"
                                    }
                                  ]
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "4687:31:16",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "4704:9:16"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "4715:2:16",
                                        "type": "",
                                        "value": "32"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "4700:3:16"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4700:18:16"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "srcOffset",
                                      "nodeType": "YulIdentifier",
                                      "src": "4687:9:16"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "4535:1:16"
                                },
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "4538:7:16"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "4532:2:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4532:14:16"
                            },
                            "nodeType": "YulForLoop",
                            "post": {
                              "nodeType": "YulBlock",
                              "src": "4547:21:16",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "4549:17:16",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "4558:1:16"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "4561:4:16",
                                        "type": "",
                                        "value": "0x20"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "4554:3:16"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4554:12:16"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "4549:1:16"
                                    }
                                  ]
                                }
                              ]
                            },
                            "pre": {
                              "nodeType": "YulBlock",
                              "src": "4528:3:16",
                              "statements": []
                            },
                            "src": "4524:208:16"
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "4768:156:16",
                              "statements": [
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "4786:43:16",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "4813:3:16"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "4818:9:16"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "4809:3:16"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4809:19:16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "4803:5:16"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4803:26:16"
                                  },
                                  "variables": [
                                    {
                                      "name": "lastValue",
                                      "nodeType": "YulTypedName",
                                      "src": "4790:9:16",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "4853:6:16"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "lastValue",
                                            "nodeType": "YulIdentifier",
                                            "src": "4880:9:16"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "name": "newLen",
                                                "nodeType": "YulIdentifier",
                                                "src": "4895:6:16"
                                              },
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4903:4:16",
                                                "type": "",
                                                "value": "0x1f"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "and",
                                              "nodeType": "YulIdentifier",
                                              "src": "4891:3:16"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "4891:17:16"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mask_bytes_dynamic",
                                          "nodeType": "YulIdentifier",
                                          "src": "4861:18:16"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "4861:48:16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "4846:6:16"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "4846:64:16"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "4846:64:16"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "4751:7:16"
                                },
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "4760:6:16"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "4748:2:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4748:19:16"
                            },
                            "nodeType": "YulIf",
                            "src": "4745:179:16"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "4944:4:16"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "newLen",
                                          "nodeType": "YulIdentifier",
                                          "src": "4958:6:16"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "4966:1:16",
                                          "type": "",
                                          "value": "2"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "4954:3:16"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "4954:14:16"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "4970:1:16",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "4950:3:16"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4950:22:16"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "4937:6:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4937:36:16"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "4937:36:16"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "4365:618:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4370:1:16",
                        "type": "",
                        "value": "1"
                      }
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "5000:222:16",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "5014:14:16",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5027:1:16",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "5018:5:16",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "5051:67:16",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "5069:35:16",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "5088:3:16"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "5093:9:16"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "5084:3:16"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "5084:19:16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "5078:5:16"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "5078:26:16"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "5069:5:16"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "name": "newLen",
                              "nodeType": "YulIdentifier",
                              "src": "5044:6:16"
                            },
                            "nodeType": "YulIf",
                            "src": "5041:77:16"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "5138:4:16"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "5197:5:16"
                                    },
                                    {
                                      "name": "newLen",
                                      "nodeType": "YulIdentifier",
                                      "src": "5204:6:16"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "extract_used_part_and_set_length_of_short_byte_array",
                                    "nodeType": "YulIdentifier",
                                    "src": "5144:52:16"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5144:67:16"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "5131:6:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5131:81:16"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "5131:81:16"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "4992:230:16",
                      "value": "default"
                    }
                  ],
                  "expression": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "4345:6:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4353:2:16",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4342:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4342:14:16"
                  },
                  "nodeType": "YulSwitch",
                  "src": "4335:887:16"
                }
              ]
            },
            "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "3914:4:16",
                "type": ""
              },
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "3920:3:16",
                "type": ""
              }
            ],
            "src": "3833:1395:16"
          }
        ]
      },
      "contents": "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n}\n",
      "id": 16,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:38022:16",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "47:35:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "57:19:16",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "73:2:16",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "67:5:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "67:9:16"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "57:6:16"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "40:6:16",
                "type": ""
              }
            ],
            "src": "7:75:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "177:28:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "194:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "197:1:16",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "187:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "187:12:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "187:12:16"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "88:117:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "300:28:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "317:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "320:1:16",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "310:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "310:12:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "310:12:16"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "211:117:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "378:105:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "388:89:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "403:5:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "410:66:16",
                        "type": "",
                        "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "399:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "399:78:16"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "388:7:16"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "360:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "370:7:16",
                "type": ""
              }
            ],
            "src": "334:149:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "531:78:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "587:16:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "596:1:16",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "599:1:16",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "589:6:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "589:12:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "589:12:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "554:5:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "578:5:16"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_bytes4",
                              "nodeType": "YulIdentifier",
                              "src": "561:16:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "561:23:16"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "551:2:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "551:34:16"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "544:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "544:42:16"
                  },
                  "nodeType": "YulIf",
                  "src": "541:62:16"
                }
              ]
            },
            "name": "validator_revert_t_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "524:5:16",
                "type": ""
              }
            ],
            "src": "489:120:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "666:86:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "676:29:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "698:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "685:12:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "685:20:16"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "676:5:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "740:5:16"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_bytes4",
                      "nodeType": "YulIdentifier",
                      "src": "714:25:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "714:32:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "714:32:16"
                }
              ]
            },
            "name": "abi_decode_t_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "644:6:16",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "652:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "660:5:16",
                "type": ""
              }
            ],
            "src": "615:137:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "823:262:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "869:83:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "871:77:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "871:79:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "871:79:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "844:7:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "853:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "840:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "840:23:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "865:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "836:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "836:32:16"
                  },
                  "nodeType": "YulIf",
                  "src": "833:119:16"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "962:116:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "977:15:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "991:1:16",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "981:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1006:62:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1040:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1051:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1036:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1036:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1060:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bytes4",
                          "nodeType": "YulIdentifier",
                          "src": "1016:19:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1016:52:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1006:6:16"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "793:9:16",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "804:7:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "816:6:16",
                "type": ""
              }
            ],
            "src": "758:327:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1133:48:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1143:32:16",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1168:5:16"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "1161:6:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1161:13:16"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "1154:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1154:21:16"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "1143:7:16"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1115:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "1125:7:16",
                "type": ""
              }
            ],
            "src": "1091:90:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1246:50:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1263:3:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1283:5:16"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_bool",
                          "nodeType": "YulIdentifier",
                          "src": "1268:14:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1268:21:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1256:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1256:34:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1256:34:16"
                }
              ]
            },
            "name": "abi_encode_t_bool_to_t_bool_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1234:5:16",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1241:3:16",
                "type": ""
              }
            ],
            "src": "1187:109:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1394:118:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1404:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1416:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1427:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1412:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1412:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1404:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1478:6:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1491:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1502:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1487:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1487:17:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bool_to_t_bool_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "1440:37:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1440:65:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1440:65:16"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1366:9:16",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1378:6:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1389:4:16",
                "type": ""
              }
            ],
            "src": "1302:210:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1577:40:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1588:22:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1604:5:16"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1598:5:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1598:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "1588:6:16"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1560:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1570:6:16",
                "type": ""
              }
            ],
            "src": "1518:99:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1719:73:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1736:3:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1741:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1729:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1729:19:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1729:19:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1757:29:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1776:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1781:4:16",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1772:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1772:14:16"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "1757:11:16"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1691:3:16",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1696:6:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "1707:11:16",
                "type": ""
              }
            ],
            "src": "1623:169:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1847:258:16",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1857:10:16",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "1866:1:16",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "1861:1:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1926:63:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "1951:3:16"
                                },
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "1956:1:16"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1947:3:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1947:11:16"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
                                      "nodeType": "YulIdentifier",
                                      "src": "1970:3:16"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "1975:1:16"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1966:3:16"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1966:11:16"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "1960:5:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1960:18:16"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1940:6:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1940:39:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1940:39:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "1887:1:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1890:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "1884:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1884:13:16"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "1898:19:16",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1900:15:16",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "1909:1:16"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1912:2:16",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1905:3:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1905:10:16"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "1900:1:16"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "1880:3:16",
                    "statements": []
                  },
                  "src": "1876:113:16"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2023:76:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "2073:3:16"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "2078:6:16"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2069:3:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2069:16:16"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2087:1:16",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2062:6:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2062:27:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2062:27:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "2004:1:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2007:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2001:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2001:13:16"
                  },
                  "nodeType": "YulIf",
                  "src": "1998:101:16"
                }
              ]
            },
            "name": "copy_memory_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "1829:3:16",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "1834:3:16",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1839:6:16",
                "type": ""
              }
            ],
            "src": "1798:307:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2159:54:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2169:38:16",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2187:5:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2194:2:16",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2183:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2183:14:16"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2203:2:16",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "2199:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2199:7:16"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "2179:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2179:28:16"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "2169:6:16"
                    }
                  ]
                }
              ]
            },
            "name": "round_up_to_mul_of_32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2142:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "2152:6:16",
                "type": ""
              }
            ],
            "src": "2111:102:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2311:272:16",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2321:53:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2368:5:16"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "2335:32:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2335:39:16"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "2325:6:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2383:78:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2449:3:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2454:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2390:58:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2390:71:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "2383:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2496:5:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2503:4:16",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2492:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2492:16:16"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2510:3:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2515:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "2470:21:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2470:52:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2470:52:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2531:46:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2542:3:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2569:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "2547:21:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2547:29:16"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2538:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2538:39:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "2531:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2292:5:16",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "2299:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2307:3:16",
                "type": ""
              }
            ],
            "src": "2219:364:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2707:195:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2717:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2729:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2740:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2725:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2725:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2717:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2764:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2775:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2760:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2760:17:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2783:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2789:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2779:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2779:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2753:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2753:47:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2753:47:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2809:86:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2881:6:16"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2890:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2817:63:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2817:78:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2809:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2679:9:16",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2691:6:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2702:4:16",
                "type": ""
              }
            ],
            "src": "2589:313:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2953:32:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2963:16:16",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "2974:5:16"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "2963:7:16"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2935:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "2945:7:16",
                "type": ""
              }
            ],
            "src": "2908:77:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3034:79:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3091:16:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3100:1:16",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3103:1:16",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3093:6:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3093:12:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3093:12:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3057:5:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "3082:5:16"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "3064:17:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3064:24:16"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "3054:2:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3054:35:16"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3047:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3047:43:16"
                  },
                  "nodeType": "YulIf",
                  "src": "3044:63:16"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3027:5:16",
                "type": ""
              }
            ],
            "src": "2991:122:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3171:87:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3181:29:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "3203:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3190:12:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3190:20:16"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "3181:5:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3246:5:16"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "3219:26:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3219:33:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3219:33:16"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "3149:6:16",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "3157:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3165:5:16",
                "type": ""
              }
            ],
            "src": "3119:139:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3330:263:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3376:83:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "3378:77:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3378:79:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3378:79:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3351:7:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3360:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3347:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3347:23:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3372:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3343:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3343:32:16"
                  },
                  "nodeType": "YulIf",
                  "src": "3340:119:16"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3469:117:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3484:15:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3498:1:16",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3488:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3513:63:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3548:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3559:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3544:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3544:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3568:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "3523:20:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3523:53:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "3513:6:16"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "3300:9:16",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3311:7:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3323:6:16",
                "type": ""
              }
            ],
            "src": "3264:329:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3644:81:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3654:65:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3669:5:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3676:42:16",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "3665:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3665:54:16"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "3654:7:16"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint160",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3626:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "3636:7:16",
                "type": ""
              }
            ],
            "src": "3599:126:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3776:51:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3786:35:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3815:5:16"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "3797:17:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3797:24:16"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "3786:7:16"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3758:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "3768:7:16",
                "type": ""
              }
            ],
            "src": "3731:96:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3898:53:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3915:3:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3938:5:16"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "3920:17:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3920:24:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3908:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3908:37:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3908:37:16"
                }
              ]
            },
            "name": "abi_encode_t_address_to_t_address_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3886:5:16",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "3893:3:16",
                "type": ""
              }
            ],
            "src": "3833:118:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4055:124:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4065:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4077:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4088:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4073:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4073:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4065:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "4145:6:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4158:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4169:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4154:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4154:17:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4101:43:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4101:71:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4101:71:16"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4027:9:16",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4039:6:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4050:4:16",
                "type": ""
              }
            ],
            "src": "3957:222:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4228:79:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4285:16:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4294:1:16",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4297:1:16",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4287:6:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4287:12:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4287:12:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "4251:5:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "4276:5:16"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "4258:17:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4258:24:16"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "4248:2:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4248:35:16"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "4241:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4241:43:16"
                  },
                  "nodeType": "YulIf",
                  "src": "4238:63:16"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4221:5:16",
                "type": ""
              }
            ],
            "src": "4185:122:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4365:87:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4375:29:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "4397:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4384:12:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4384:20:16"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "4375:5:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4440:5:16"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "4413:26:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4413:33:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4413:33:16"
                }
              ]
            },
            "name": "abi_decode_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "4343:6:16",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "4351:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4359:5:16",
                "type": ""
              }
            ],
            "src": "4313:139:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4541:391:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4587:83:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "4589:77:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4589:79:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4589:79:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4562:7:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4571:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4558:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4558:23:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4583:2:16",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4554:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4554:32:16"
                  },
                  "nodeType": "YulIf",
                  "src": "4551:119:16"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4680:117:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4695:15:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4709:1:16",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4699:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4724:63:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4759:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4770:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4755:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4755:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4779:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "4734:20:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4734:53:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4724:6:16"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4807:118:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4822:16:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4836:2:16",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4826:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4852:63:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4887:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4898:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4883:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4883:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4907:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "4862:20:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4862:53:16"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "4852:6:16"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4503:9:16",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4514:7:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4526:6:16",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "4534:6:16",
                "type": ""
              }
            ],
            "src": "4458:474:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5003:53:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5020:3:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5043:5:16"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "5025:17:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5025:24:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5013:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5013:37:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5013:37:16"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4991:5:16",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4998:3:16",
                "type": ""
              }
            ],
            "src": "4938:118:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5160:124:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5170:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5182:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5193:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5178:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5178:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5170:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "5250:6:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5263:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5274:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5259:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5259:17:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5206:43:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5206:71:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5206:71:16"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5132:9:16",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5144:6:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5155:4:16",
                "type": ""
              }
            ],
            "src": "5062:222:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5390:519:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5436:83:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "5438:77:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5438:79:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5438:79:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5411:7:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5420:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5407:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5407:23:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5432:2:16",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5403:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5403:32:16"
                  },
                  "nodeType": "YulIf",
                  "src": "5400:119:16"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5529:117:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5544:15:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5558:1:16",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5548:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5573:63:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5608:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5619:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5604:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5604:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5628:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "5583:20:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5583:53:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5573:6:16"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5656:118:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5671:16:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5685:2:16",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5675:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5701:63:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5736:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5747:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5732:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5732:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5756:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "5711:20:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5711:53:16"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "5701:6:16"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5784:118:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5799:16:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5813:2:16",
                        "type": "",
                        "value": "64"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5803:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5829:63:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5864:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5875:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5860:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5860:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5884:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "5839:20:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5839:53:16"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "5829:6:16"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5344:9:16",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5355:7:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5367:6:16",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "5375:6:16",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "5383:6:16",
                "type": ""
              }
            ],
            "src": "5290:619:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5981:263:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6027:83:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "6029:77:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6029:79:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6029:79:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6002:7:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6011:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5998:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5998:23:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6023:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5994:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5994:32:16"
                  },
                  "nodeType": "YulIf",
                  "src": "5991:119:16"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "6120:117:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "6135:15:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6149:1:16",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "6139:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "6164:63:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6199:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "6210:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6195:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6195:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6219:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "6174:20:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6174:53:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "6164:6:16"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5951:9:16",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5962:7:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5974:6:16",
                "type": ""
              }
            ],
            "src": "5915:329:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6290:76:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6344:16:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6353:1:16",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6356:1:16",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6346:6:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6346:12:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6346:12:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "6313:5:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "6335:5:16"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_bool",
                              "nodeType": "YulIdentifier",
                              "src": "6320:14:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6320:21:16"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "6310:2:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6310:32:16"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "6303:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6303:40:16"
                  },
                  "nodeType": "YulIf",
                  "src": "6300:60:16"
                }
              ]
            },
            "name": "validator_revert_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6283:5:16",
                "type": ""
              }
            ],
            "src": "6250:116:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6421:84:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6431:29:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "6453:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6440:12:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6440:20:16"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "6431:5:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6493:5:16"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_bool",
                      "nodeType": "YulIdentifier",
                      "src": "6469:23:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6469:30:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6469:30:16"
                }
              ]
            },
            "name": "abi_decode_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "6399:6:16",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "6407:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6415:5:16",
                "type": ""
              }
            ],
            "src": "6372:133:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6591:388:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6637:83:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "6639:77:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6639:79:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6639:79:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6612:7:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6621:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6608:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6608:23:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6633:2:16",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "6604:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6604:32:16"
                  },
                  "nodeType": "YulIf",
                  "src": "6601:119:16"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "6730:117:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "6745:15:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6759:1:16",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "6749:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "6774:63:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6809:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "6820:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6805:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6805:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6829:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "6784:20:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6784:53:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "6774:6:16"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "6857:115:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "6872:16:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6886:2:16",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "6876:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "6902:60:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6934:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "6945:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6930:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6930:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6954:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bool",
                          "nodeType": "YulIdentifier",
                          "src": "6912:17:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6912:50:16"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "6902:6:16"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6553:9:16",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "6564:7:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6576:6:16",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "6584:6:16",
                "type": ""
              }
            ],
            "src": "6511:468:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7074:28:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7091:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7094:1:16",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "7084:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7084:12:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7084:12:16"
                }
              ]
            },
            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
            "nodeType": "YulFunctionDefinition",
            "src": "6985:117:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7197:28:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7214:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7217:1:16",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "7207:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7207:12:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7207:12:16"
                }
              ]
            },
            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
            "nodeType": "YulFunctionDefinition",
            "src": "7108:117:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7259:152:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7276:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7279:77:16",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7269:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7269:88:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7269:88:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7373:1:16",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7376:4:16",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7366:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7366:15:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7366:15:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7397:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7400:4:16",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "7390:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7390:15:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7390:15:16"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "7231:180:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7460:238:16",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7470:58:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "7492:6:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "7522:4:16"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "7500:21:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7500:27:16"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7488:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7488:40:16"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "7474:10:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7639:22:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "7641:16:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7641:18:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7641:18:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "7582:10:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7594:18:16",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "7579:2:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7579:34:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "7618:10:16"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "7630:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "7615:2:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7615:22:16"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "7576:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7576:62:16"
                  },
                  "nodeType": "YulIf",
                  "src": "7573:88:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7677:2:16",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "7681:10:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7670:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7670:22:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7670:22:16"
                }
              ]
            },
            "name": "finalize_allocation",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "7446:6:16",
                "type": ""
              },
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "7454:4:16",
                "type": ""
              }
            ],
            "src": "7417:281:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7745:88:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7755:30:16",
                  "value": {
                    "arguments": [],
                    "functionName": {
                      "name": "allocate_unbounded",
                      "nodeType": "YulIdentifier",
                      "src": "7765:18:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7765:20:16"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "7755:6:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "7814:6:16"
                      },
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "7822:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "finalize_allocation",
                      "nodeType": "YulIdentifier",
                      "src": "7794:19:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7794:33:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7794:33:16"
                }
              ]
            },
            "name": "allocate_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "7729:4:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "7738:6:16",
                "type": ""
              }
            ],
            "src": "7704:129:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7905:241:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8010:22:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "8012:16:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8012:18:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8012:18:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "7982:6:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7990:18:16",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "7979:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7979:30:16"
                  },
                  "nodeType": "YulIf",
                  "src": "7976:56:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8042:37:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "8072:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "round_up_to_mul_of_32",
                      "nodeType": "YulIdentifier",
                      "src": "8050:21:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8050:29:16"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "8042:4:16"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8116:23:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "8128:4:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8134:4:16",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8124:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8124:15:16"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "8116:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "array_allocation_size_t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "7889:6:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "7900:4:16",
                "type": ""
              }
            ],
            "src": "7839:307:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8203:103:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "8226:3:16"
                      },
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "8231:3:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "8236:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "calldatacopy",
                      "nodeType": "YulIdentifier",
                      "src": "8213:12:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8213:30:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8213:30:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "8284:3:16"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "8289:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8280:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8280:16:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8298:1:16",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8273:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8273:27:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8273:27:16"
                }
              ]
            },
            "name": "copy_calldata_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "8185:3:16",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "8190:3:16",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "8195:6:16",
                "type": ""
              }
            ],
            "src": "8152:154:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8395:327:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8405:74:16",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "8471:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "array_allocation_size_t_bytes_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "8430:40:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8430:48:16"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "8414:15:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8414:65:16"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "8405:5:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "8495:5:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "8502:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8488:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8488:21:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8488:21:16"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "8518:27:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "8533:5:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8540:4:16",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8529:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8529:16:16"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "8522:3:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8583:83:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                            "nodeType": "YulIdentifier",
                            "src": "8585:77:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8585:79:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8585:79:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "8564:3:16"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "8569:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8560:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8560:16:16"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "8578:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "8557:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8557:25:16"
                  },
                  "nodeType": "YulIf",
                  "src": "8554:112:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "8699:3:16"
                      },
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "8704:3:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "8709:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "copy_calldata_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "8675:23:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8675:41:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8675:41:16"
                }
              ]
            },
            "name": "abi_decode_available_length_t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "8368:3:16",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "8373:6:16",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "8381:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "8389:5:16",
                "type": ""
              }
            ],
            "src": "8312:410:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8802:277:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8851:83:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            "nodeType": "YulIdentifier",
                            "src": "8853:77:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8853:79:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8853:79:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "8830:6:16"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "8838:4:16",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "8826:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8826:17:16"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "8845:3:16"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "8822:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8822:27:16"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "8815:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8815:35:16"
                  },
                  "nodeType": "YulIf",
                  "src": "8812:122:16"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "8943:34:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "8970:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "8957:12:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8957:20:16"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "8947:6:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8986:87:16",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "9046:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9054:4:16",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9042:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9042:17:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "9061:6:16"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "9069:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_available_length_t_bytes_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "8995:46:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8995:78:16"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "8986:5:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "8780:6:16",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "8788:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "8796:5:16",
                "type": ""
              }
            ],
            "src": "8741:338:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9211:817:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9258:83:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "9260:77:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9260:79:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9260:79:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "9232:7:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9241:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "9228:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9228:23:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9253:3:16",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "9224:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9224:33:16"
                  },
                  "nodeType": "YulIf",
                  "src": "9221:120:16"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "9351:117:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "9366:15:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9380:1:16",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "9370:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "9395:63:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "9430:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "9441:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "9426:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9426:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "9450:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "9405:20:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9405:53:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "9395:6:16"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "9478:118:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "9493:16:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9507:2:16",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "9497:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "9523:63:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "9558:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "9569:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "9554:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9554:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "9578:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "9533:20:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9533:53:16"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "9523:6:16"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "9606:118:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "9621:16:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9635:2:16",
                        "type": "",
                        "value": "64"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "9625:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "9651:63:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "9686:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "9697:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "9682:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9682:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "9706:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "9661:20:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9661:53:16"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "9651:6:16"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "9734:287:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "9749:46:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "9780:9:16"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "9791:2:16",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "9776:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9776:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "9763:12:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9763:32:16"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "9753:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "9842:83:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "9844:77:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9844:79:16"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "9844:79:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "9814:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9822:18:16",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "9811:2:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9811:30:16"
                      },
                      "nodeType": "YulIf",
                      "src": "9808:117:16"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "9939:72:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "9983:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "9994:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "9979:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9979:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "10003:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bytes_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "9949:29:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9949:62:16"
                      },
                      "variableNames": [
                        {
                          "name": "value3",
                          "nodeType": "YulIdentifier",
                          "src": "9939:6:16"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9157:9:16",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "9168:7:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "9180:6:16",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "9188:6:16",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "9196:6:16",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "9204:6:16",
                "type": ""
              }
            ],
            "src": "9085:943:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10117:391:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10163:83:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "10165:77:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10165:79:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10165:79:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "10138:7:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10147:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "10134:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10134:23:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10159:2:16",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "10130:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10130:32:16"
                  },
                  "nodeType": "YulIf",
                  "src": "10127:119:16"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "10256:117:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "10271:15:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10285:1:16",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "10275:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "10300:63:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "10335:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "10346:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "10331:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10331:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "10355:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "10310:20:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10310:53:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "10300:6:16"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "10383:118:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "10398:16:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10412:2:16",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "10402:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "10428:63:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "10463:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "10474:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "10459:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10459:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "10483:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "10438:20:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10438:53:16"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "10428:6:16"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10079:9:16",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "10090:7:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "10102:6:16",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "10110:6:16",
                "type": ""
              }
            ],
            "src": "10034:474:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10581:241:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10686:22:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "10688:16:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10688:18:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10688:18:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "10658:6:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10666:18:16",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "10655:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10655:30:16"
                  },
                  "nodeType": "YulIf",
                  "src": "10652:56:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10718:37:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "10748:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "round_up_to_mul_of_32",
                      "nodeType": "YulIdentifier",
                      "src": "10726:21:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10726:29:16"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "10718:4:16"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10792:23:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "10804:4:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10810:4:16",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10800:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10800:15:16"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "10792:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "array_allocation_size_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "10565:6:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "10576:4:16",
                "type": ""
              }
            ],
            "src": "10514:308:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10912:328:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10922:75:16",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "10989:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "array_allocation_size_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "10947:41:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10947:49:16"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "10931:15:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10931:66:16"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "10922:5:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "11013:5:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "11020:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11006:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11006:21:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11006:21:16"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "11036:27:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "11051:5:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11058:4:16",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11047:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11047:16:16"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "11040:3:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11101:83:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                            "nodeType": "YulIdentifier",
                            "src": "11103:77:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11103:79:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11103:79:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "11082:3:16"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "11087:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11078:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11078:16:16"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "11096:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "11075:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11075:25:16"
                  },
                  "nodeType": "YulIf",
                  "src": "11072:112:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "11217:3:16"
                      },
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "11222:3:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "11227:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "copy_calldata_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "11193:23:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11193:41:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11193:41:16"
                }
              ]
            },
            "name": "abi_decode_available_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "10885:3:16",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "10890:6:16",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "10898:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "10906:5:16",
                "type": ""
              }
            ],
            "src": "10828:412:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11322:278:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11371:83:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            "nodeType": "YulIdentifier",
                            "src": "11373:77:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11373:79:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11373:79:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "11350:6:16"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "11358:4:16",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "11346:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11346:17:16"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "11365:3:16"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "11342:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11342:27:16"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "11335:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11335:35:16"
                  },
                  "nodeType": "YulIf",
                  "src": "11332:122:16"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "11463:34:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "11490:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "11477:12:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11477:20:16"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "11467:6:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11506:88:16",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "11567:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11575:4:16",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11563:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11563:17:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "11582:6:16"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "11590:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_available_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "11515:47:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11515:79:16"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "11506:5:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "11300:6:16",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "11308:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "11316:5:16",
                "type": ""
              }
            ],
            "src": "11260:340:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11699:561:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11745:83:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "11747:77:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11747:79:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11747:79:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "11720:7:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11729:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "11716:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11716:23:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11741:2:16",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "11712:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11712:32:16"
                  },
                  "nodeType": "YulIf",
                  "src": "11709:119:16"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "11838:117:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "11853:15:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11867:1:16",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "11857:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "11882:63:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "11917:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "11928:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "11913:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11913:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "11937:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "11892:20:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11892:53:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "11882:6:16"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "11965:288:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "11980:46:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "12011:9:16"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "12022:2:16",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "12007:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "12007:18:16"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "11994:12:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11994:32:16"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "11984:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "12073:83:16",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "12075:77:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12075:79:16"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "12075:79:16"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "12045:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12053:18:16",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "12042:2:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12042:30:16"
                      },
                      "nodeType": "YulIf",
                      "src": "12039:117:16"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "12170:73:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "12215:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "12226:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "12211:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "12211:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "12235:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "12180:30:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12180:63:16"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "12170:6:16"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_addresst_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "11661:9:16",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "11672:7:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "11684:6:16",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "11692:6:16",
                "type": ""
              }
            ],
            "src": "11606:654:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12294:152:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12311:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12314:77:16",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12304:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12304:88:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12304:88:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12408:1:16",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12411:4:16",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12401:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12401:15:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12401:15:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12432:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12435:4:16",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "12425:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12425:15:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12425:15:16"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "12266:180:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12503:269:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12513:22:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "12527:4:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12533:1:16",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "12523:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12523:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "12513:6:16"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "12544:38:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "12574:4:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12580:1:16",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "12570:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12570:12:16"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "12548:18:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12621:51:16",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "12635:27:16",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "12649:6:16"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12657:4:16",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "12645:3:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12645:17:16"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "12635:6:16"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "12601:18:16"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "12594:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12594:26:16"
                  },
                  "nodeType": "YulIf",
                  "src": "12591:81:16"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12724:42:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "12738:16:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12738:18:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12738:18:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "12688:18:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "12711:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12719:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "12708:2:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12708:14:16"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "12685:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12685:38:16"
                  },
                  "nodeType": "YulIf",
                  "src": "12682:84:16"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "12487:4:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "12496:6:16",
                "type": ""
              }
            ],
            "src": "12452:320:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12884:114:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "12906:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12914:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12902:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12902:14:16"
                      },
                      {
                        "hexValue": "4552433732313a20617070726f76616c20746f2063757272656e74206f776e65",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12918:34:16",
                        "type": "",
                        "value": "ERC721: approval to current owne"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12895:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12895:58:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12895:58:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "12974:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12982:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12970:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12970:15:16"
                      },
                      {
                        "hexValue": "72",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12987:3:16",
                        "type": "",
                        "value": "r"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12963:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12963:28:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12963:28:16"
                }
              ]
            },
            "name": "store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "12876:6:16",
                "type": ""
              }
            ],
            "src": "12778:220:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13150:220:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13160:74:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13226:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13231:2:16",
                        "type": "",
                        "value": "33"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13167:58:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13167:67:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "13160:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13332:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942",
                      "nodeType": "YulIdentifier",
                      "src": "13243:88:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13243:93:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13243:93:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13345:19:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13356:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13361:2:16",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13352:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13352:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "13345:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "13138:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "13146:3:16",
                "type": ""
              }
            ],
            "src": "13004:366:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13547:248:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13557:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13569:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13580:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13565:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13565:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13557:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13604:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13615:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13600:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13600:17:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "13623:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13629:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "13619:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13619:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13593:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13593:47:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13593:47:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13649:139:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "13783:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13657:124:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13657:131:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13649:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "13527:9:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13542:4:16",
                "type": ""
              }
            ],
            "src": "13376:419:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13907:143:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "13929:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13937:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13925:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13925:14:16"
                      },
                      {
                        "hexValue": "4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13941:34:16",
                        "type": "",
                        "value": "ERC721: approve caller is not to"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13918:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13918:58:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13918:58:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "13997:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14005:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13993:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13993:15:16"
                      },
                      {
                        "hexValue": "6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14010:32:16",
                        "type": "",
                        "value": "ken owner nor approved for all"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13986:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13986:57:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13986:57:16"
                }
              ]
            },
            "name": "store_literal_in_memory_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "13899:6:16",
                "type": ""
              }
            ],
            "src": "13801:249:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14202:220:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "14212:74:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14278:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14283:2:16",
                        "type": "",
                        "value": "62"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14219:58:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14219:67:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "14212:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14384:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304",
                      "nodeType": "YulIdentifier",
                      "src": "14295:88:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14295:93:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14295:93:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14397:19:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14408:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14413:2:16",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14404:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14404:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "14397:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "14190:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "14198:3:16",
                "type": ""
              }
            ],
            "src": "14056:366:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14599:248:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "14609:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14621:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14632:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14617:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14617:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14609:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14656:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14667:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14652:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14652:17:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "14675:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14681:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "14671:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14671:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14645:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14645:47:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14645:47:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14701:139:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "14835:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14709:124:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14709:131:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14701:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "14579:9:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14594:4:16",
                "type": ""
              }
            ],
            "src": "14428:419:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14959:127:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "14981:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14989:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14977:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14977:14:16"
                      },
                      {
                        "hexValue": "4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e65",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14993:34:16",
                        "type": "",
                        "value": "ERC721: caller is not token owne"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14970:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14970:58:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14970:58:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "15049:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15057:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15045:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15045:15:16"
                      },
                      {
                        "hexValue": "72206e6f7220617070726f766564",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15062:16:16",
                        "type": "",
                        "value": "r nor approved"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15038:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15038:41:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15038:41:16"
                }
              ]
            },
            "name": "store_literal_in_memory_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "14951:6:16",
                "type": ""
              }
            ],
            "src": "14853:233:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15238:220:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "15248:74:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "15314:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15319:2:16",
                        "type": "",
                        "value": "46"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "15255:58:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15255:67:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "15248:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "15420:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b",
                      "nodeType": "YulIdentifier",
                      "src": "15331:88:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15331:93:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15331:93:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15433:19:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "15444:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15449:2:16",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15440:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15440:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "15433:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "15226:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "15234:3:16",
                "type": ""
              }
            ],
            "src": "15092:366:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15635:248:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "15645:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15657:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15668:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15653:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15653:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15645:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15692:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15703:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15688:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15688:17:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "15711:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15717:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "15707:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15707:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15681:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15681:47:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15681:47:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15737:139:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15871:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "15745:124:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15745:131:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15737:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "15615:9:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "15630:4:16",
                "type": ""
              }
            ],
            "src": "15464:419:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15995:124:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "16017:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16025:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16013:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16013:14:16"
                      },
                      {
                        "hexValue": "455243373231456e756d657261626c653a206f776e657220696e646578206f75",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "16029:34:16",
                        "type": "",
                        "value": "ERC721Enumerable: owner index ou"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16006:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16006:58:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16006:58:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "16085:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16093:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16081:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16081:15:16"
                      },
                      {
                        "hexValue": "74206f6620626f756e6473",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "16098:13:16",
                        "type": "",
                        "value": "t of bounds"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16074:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16074:38:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16074:38:16"
                }
              ]
            },
            "name": "store_literal_in_memory_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "15987:6:16",
                "type": ""
              }
            ],
            "src": "15889:230:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16271:220:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "16281:74:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "16347:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16352:2:16",
                        "type": "",
                        "value": "43"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "16288:58:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16288:67:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "16281:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "16453:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c",
                      "nodeType": "YulIdentifier",
                      "src": "16364:88:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16364:93:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16364:93:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16466:19:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "16477:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16482:2:16",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16473:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16473:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "16466:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "16259:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "16267:3:16",
                "type": ""
              }
            ],
            "src": "16125:366:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16668:248:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "16678:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16690:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16701:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16686:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16686:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16678:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16725:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16736:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16721:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16721:17:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "16744:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16750:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "16740:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16740:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16714:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16714:47:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16714:47:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16770:139:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "16904:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "16778:124:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16778:131:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16770:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "16648:9:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "16663:4:16",
                "type": ""
              }
            ],
            "src": "16497:419:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17028:125:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "17050:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17058:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17046:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17046:14:16"
                      },
                      {
                        "hexValue": "455243373231456e756d657261626c653a20676c6f62616c20696e646578206f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "17062:34:16",
                        "type": "",
                        "value": "ERC721Enumerable: global index o"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17039:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17039:58:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17039:58:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "17118:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17126:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17114:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17114:15:16"
                      },
                      {
                        "hexValue": "7574206f6620626f756e6473",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "17131:14:16",
                        "type": "",
                        "value": "ut of bounds"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17107:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17107:39:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17107:39:16"
                }
              ]
            },
            "name": "store_literal_in_memory_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "17020:6:16",
                "type": ""
              }
            ],
            "src": "16922:231:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17305:220:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "17315:74:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "17381:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17386:2:16",
                        "type": "",
                        "value": "44"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "17322:58:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17322:67:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "17315:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "17487:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc",
                      "nodeType": "YulIdentifier",
                      "src": "17398:88:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17398:93:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17398:93:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17500:19:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "17511:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17516:2:16",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "17507:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17507:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "17500:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "17293:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "17301:3:16",
                "type": ""
              }
            ],
            "src": "17159:366:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17702:248:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "17712:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "17724:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17735:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "17720:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17720:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17712:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17759:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17770:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17755:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17755:17:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "17778:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17784:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "17774:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17774:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17748:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17748:47:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17748:47:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17804:139:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "17938:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "17812:124:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17812:131:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17804:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "17682:9:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "17697:4:16",
                "type": ""
              }
            ],
            "src": "17531:419:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17984:152:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18001:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18004:77:16",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17994:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17994:88:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17994:88:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18098:1:16",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18101:4:16",
                        "type": "",
                        "value": "0x32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "18091:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18091:15:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18091:15:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18122:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18125:4:16",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "18115:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18115:15:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18115:15:16"
                }
              ]
            },
            "name": "panic_error_0x32",
            "nodeType": "YulFunctionDefinition",
            "src": "17956:180:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "18248:68:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "18270:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "18278:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "18266:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18266:14:16"
                      },
                      {
                        "hexValue": "4552433732313a20696e76616c696420746f6b656e204944",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "18282:26:16",
                        "type": "",
                        "value": "ERC721: invalid token ID"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "18259:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18259:50:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18259:50:16"
                }
              ]
            },
            "name": "store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "18240:6:16",
                "type": ""
              }
            ],
            "src": "18142:174:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "18468:220:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "18478:74:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "18544:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18549:2:16",
                        "type": "",
                        "value": "24"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "18485:58:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18485:67:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "18478:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "18650:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f",
                      "nodeType": "YulIdentifier",
                      "src": "18561:88:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18561:93:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18561:93:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "18663:19:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "18674:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18679:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "18670:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18670:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "18663:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "18456:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "18464:3:16",
                "type": ""
              }
            ],
            "src": "18322:366:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "18865:248:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "18875:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "18887:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18898:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "18883:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18883:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "18875:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "18922:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "18933:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "18918:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18918:17:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "18941:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "18947:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "18937:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18937:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "18911:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18911:47:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18911:47:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "18967:139:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "19101:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "18975:124:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18975:131:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "18967:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "18845:9:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "18860:4:16",
                "type": ""
              }
            ],
            "src": "18694:419:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "19225:122:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "19247:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "19255:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "19243:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19243:14:16"
                      },
                      {
                        "hexValue": "4552433732313a2061646472657373207a65726f206973206e6f742061207661",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "19259:34:16",
                        "type": "",
                        "value": "ERC721: address zero is not a va"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "19236:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19236:58:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "19236:58:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "19315:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "19323:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "19311:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19311:15:16"
                      },
                      {
                        "hexValue": "6c6964206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "19328:11:16",
                        "type": "",
                        "value": "lid owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "19304:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19304:36:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "19304:36:16"
                }
              ]
            },
            "name": "store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "19217:6:16",
                "type": ""
              }
            ],
            "src": "19119:228:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "19499:220:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "19509:74:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "19575:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "19580:2:16",
                        "type": "",
                        "value": "41"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "19516:58:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19516:67:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "19509:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "19681:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159",
                      "nodeType": "YulIdentifier",
                      "src": "19592:88:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19592:93:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "19592:93:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "19694:19:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "19705:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "19710:2:16",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "19701:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19701:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "19694:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "19487:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "19495:3:16",
                "type": ""
              }
            ],
            "src": "19353:366:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "19896:248:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "19906:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "19918:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "19929:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "19914:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19914:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "19906:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "19953:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "19964:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "19949:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19949:17:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "19972:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "19978:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "19968:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19968:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "19942:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19942:47:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "19942:47:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "19998:139:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "20132:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "20006:124:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20006:131:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "19998:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "19876:9:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "19891:4:16",
                "type": ""
              }
            ],
            "src": "19725:419:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "20256:119:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "20278:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "20286:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "20274:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "20274:14:16"
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "20290:34:16",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "20267:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20267:58:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "20267:58:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "20346:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "20354:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "20342:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "20342:15:16"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "20359:8:16",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "20335:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20335:33:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "20335:33:16"
                }
              ]
            },
            "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "20248:6:16",
                "type": ""
              }
            ],
            "src": "20150:225:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "20527:220:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "20537:74:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "20603:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "20608:2:16",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "20544:58:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20544:67:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "20537:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "20709:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                      "nodeType": "YulIdentifier",
                      "src": "20620:88:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20620:93:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "20620:93:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "20722:19:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "20733:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "20738:2:16",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "20729:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20729:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "20722:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "20515:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "20523:3:16",
                "type": ""
              }
            ],
            "src": "20381:366:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "20924:248:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "20934:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "20946:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "20957:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "20942:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20942:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "20934:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "20981:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "20992:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "20977:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "20977:17:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "21000:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "21006:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "20996:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "20996:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "20970:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20970:47:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "20970:47:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "21026:139:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "21160:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "21034:124:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21034:131:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "21026:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "20904:9:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "20919:4:16",
                "type": ""
              }
            ],
            "src": "20753:419:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "21284:118:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "21306:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "21314:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "21302:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "21302:14:16"
                      },
                      {
                        "hexValue": "4552433732313a207472616e736665722066726f6d20696e636f727265637420",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "21318:34:16",
                        "type": "",
                        "value": "ERC721: transfer from incorrect "
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "21295:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21295:58:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "21295:58:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "21374:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "21382:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "21370:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "21370:15:16"
                      },
                      {
                        "hexValue": "6f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "21387:7:16",
                        "type": "",
                        "value": "owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "21363:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21363:32:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "21363:32:16"
                }
              ]
            },
            "name": "store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "21276:6:16",
                "type": ""
              }
            ],
            "src": "21178:224:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "21554:220:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "21564:74:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "21630:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "21635:2:16",
                        "type": "",
                        "value": "37"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "21571:58:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21571:67:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "21564:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "21736:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48",
                      "nodeType": "YulIdentifier",
                      "src": "21647:88:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21647:93:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "21647:93:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "21749:19:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "21760:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "21765:2:16",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "21756:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21756:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "21749:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "21542:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "21550:3:16",
                "type": ""
              }
            ],
            "src": "21408:366:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "21951:248:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "21961:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "21973:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "21984:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "21969:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21969:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "21961:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "22008:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "22019:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "22004:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "22004:17:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "22027:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "22033:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "22023:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "22023:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "21997:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21997:47:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "21997:47:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "22053:139:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "22187:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "22061:124:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22061:131:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "22053:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "21931:9:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "21946:4:16",
                "type": ""
              }
            ],
            "src": "21780:419:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "22311:117:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "22333:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "22341:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "22329:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "22329:14:16"
                      },
                      {
                        "hexValue": "4552433732313a207472616e7366657220746f20746865207a65726f20616464",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "22345:34:16",
                        "type": "",
                        "value": "ERC721: transfer to the zero add"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "22322:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22322:58:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "22322:58:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "22401:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "22409:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "22397:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "22397:15:16"
                      },
                      {
                        "hexValue": "72657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "22414:6:16",
                        "type": "",
                        "value": "ress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "22390:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22390:31:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "22390:31:16"
                }
              ]
            },
            "name": "store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "22303:6:16",
                "type": ""
              }
            ],
            "src": "22205:223:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "22580:220:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "22590:74:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "22656:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "22661:2:16",
                        "type": "",
                        "value": "36"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "22597:58:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22597:67:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "22590:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "22762:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4",
                      "nodeType": "YulIdentifier",
                      "src": "22673:88:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22673:93:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "22673:93:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "22775:19:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "22786:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "22791:2:16",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "22782:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22782:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "22775:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "22568:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "22576:3:16",
                "type": ""
              }
            ],
            "src": "22434:366:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "22977:248:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "22987:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "22999:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23010:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "22995:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22995:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "22987:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "23034:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "23045:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "23030:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "23030:17:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "23053:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "23059:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "23049:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "23049:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "23023:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23023:47:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "23023:47:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "23079:139:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "23213:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "23087:124:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23087:131:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "23079:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "22957:9:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "22972:4:16",
                "type": ""
              }
            ],
            "src": "22806:419:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23259:152:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23276:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23279:77:16",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "23269:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23269:88:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "23269:88:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23373:1:16",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23376:4:16",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "23366:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23366:15:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "23366:15:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23397:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23400:4:16",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "23390:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23390:15:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "23390:15:16"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "23231:180:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23462:146:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "23472:25:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "23495:1:16"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "23477:17:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23477:20:16"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "23472:1:16"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "23506:25:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "23529:1:16"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "23511:17:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23511:20:16"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "23506:1:16"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "23553:22:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "23555:16:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23555:18:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "23555:18:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "23547:1:16"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "23550:1:16"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "23544:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23544:8:16"
                  },
                  "nodeType": "YulIf",
                  "src": "23541:34:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "23585:17:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "23597:1:16"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "23600:1:16"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "23593:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23593:9:16"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "23585:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "checked_sub_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "23448:1:16",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "23451:1:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "23457:4:16",
                "type": ""
              }
            ],
            "src": "23417:191:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23658:261:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "23668:25:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "23691:1:16"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "23673:17:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23673:20:16"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "23668:1:16"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "23702:25:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "23725:1:16"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "23707:17:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23707:20:16"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "23702:1:16"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "23865:22:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "23867:16:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23867:18:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "23867:18:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "23786:1:16"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "23793:66:16",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "23861:1:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "23789:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "23789:74:16"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "23783:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23783:81:16"
                  },
                  "nodeType": "YulIf",
                  "src": "23780:107:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "23897:16:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "23908:1:16"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "23911:1:16"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "23904:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23904:9:16"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "23897:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "23645:1:16",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "23648:1:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "23654:3:16",
                "type": ""
              }
            ],
            "src": "23614:305:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "24031:76:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "24053:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "24061:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "24049:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "24049:14:16"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "24065:34:16",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "24042:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24042:58:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "24042:58:16"
                }
              ]
            },
            "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "24023:6:16",
                "type": ""
              }
            ],
            "src": "23925:182:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "24259:220:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "24269:74:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "24335:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "24340:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "24276:58:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24276:67:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "24269:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "24441:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                      "nodeType": "YulIdentifier",
                      "src": "24352:88:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24352:93:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "24352:93:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "24454:19:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "24465:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "24470:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "24461:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24461:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "24454:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "24247:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "24255:3:16",
                "type": ""
              }
            ],
            "src": "24113:366:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "24656:248:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "24666:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "24678:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "24689:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "24674:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24674:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "24666:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "24713:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "24724:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "24709:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "24709:17:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "24732:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "24738:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "24728:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "24728:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "24702:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24702:47:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "24702:47:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "24758:139:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "24892:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "24766:124:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24766:131:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "24758:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "24636:9:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "24651:4:16",
                "type": ""
              }
            ],
            "src": "24485:419:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25016:69:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "25038:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "25046:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "25034:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "25034:14:16"
                      },
                      {
                        "hexValue": "4552433732313a20617070726f766520746f2063616c6c6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "25050:27:16",
                        "type": "",
                        "value": "ERC721: approve to caller"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "25027:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25027:51:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25027:51:16"
                }
              ]
            },
            "name": "store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "25008:6:16",
                "type": ""
              }
            ],
            "src": "24910:175:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25237:220:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "25247:74:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "25313:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25318:2:16",
                        "type": "",
                        "value": "25"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "25254:58:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25254:67:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "25247:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "25419:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05",
                      "nodeType": "YulIdentifier",
                      "src": "25330:88:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25330:93:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25330:93:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "25432:19:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "25443:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25448:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "25439:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25439:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "25432:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "25225:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "25233:3:16",
                "type": ""
              }
            ],
            "src": "25091:366:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25634:248:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "25644:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "25656:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25667:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "25652:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25652:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "25644:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "25691:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "25702:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "25687:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "25687:17:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "25710:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "25716:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "25706:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "25706:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "25680:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25680:47:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25680:47:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "25736:139:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "25870:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "25744:124:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25744:131:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "25736:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "25614:9:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "25629:4:16",
                "type": ""
              }
            ],
            "src": "25463:419:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25994:131:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "26016:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "26024:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "26012:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "26012:14:16"
                      },
                      {
                        "hexValue": "4552433732313a207472616e7366657220746f206e6f6e204552433732315265",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "26028:34:16",
                        "type": "",
                        "value": "ERC721: transfer to non ERC721Re"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "26005:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26005:58:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "26005:58:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "26084:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "26092:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "26080:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "26080:15:16"
                      },
                      {
                        "hexValue": "63656976657220696d706c656d656e746572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "26097:20:16",
                        "type": "",
                        "value": "ceiver implementer"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "26073:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26073:45:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "26073:45:16"
                }
              ]
            },
            "name": "store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "25986:6:16",
                "type": ""
              }
            ],
            "src": "25888:237:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "26277:220:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "26287:74:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "26353:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26358:2:16",
                        "type": "",
                        "value": "50"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "26294:58:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26294:67:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "26287:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "26459:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e",
                      "nodeType": "YulIdentifier",
                      "src": "26370:88:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26370:93:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "26370:93:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "26472:19:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "26483:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26488:2:16",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "26479:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26479:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "26472:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "26265:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "26273:3:16",
                "type": ""
              }
            ],
            "src": "26131:366:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "26674:248:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "26684:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "26696:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26707:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "26692:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26692:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "26684:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "26731:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "26742:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "26727:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "26727:17:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "26750:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "26756:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "26746:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "26746:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "26720:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26720:47:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "26720:47:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "26776:139:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "26910:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "26784:124:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26784:131:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "26776:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "26654:9:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "26669:4:16",
                "type": ""
              }
            ],
            "src": "26503:419:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "27042:34:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "27052:18:16",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "27067:3:16"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "27052:11:16"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "27014:3:16",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "27019:6:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "27030:11:16",
                "type": ""
              }
            ],
            "src": "26928:148:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "27192:267:16",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "27202:53:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "27249:5:16"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "27216:32:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27216:39:16"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "27206:6:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "27264:96:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "27348:3:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "27353:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "27271:76:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27271:89:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "27264:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "27395:5:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "27402:4:16",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "27391:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "27391:16:16"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "27409:3:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "27414:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "27369:21:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27369:52:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "27369:52:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "27430:23:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "27441:3:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "27446:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "27437:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27437:16:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "27430:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "27173:5:16",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "27180:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "27188:3:16",
                "type": ""
              }
            ],
            "src": "27082:377:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "27649:251:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "27660:102:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "27749:6:16"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "27758:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "27667:81:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27667:95:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "27660:3:16"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "27772:102:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "27861:6:16"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "27870:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "27779:81:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27779:95:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "27772:3:16"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "27884:10:16",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "27891:3:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "27884:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "27620:3:16",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "27626:6:16",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "27634:6:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "27645:3:16",
                "type": ""
              }
            ],
            "src": "27465:435:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "28012:76:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "28034:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "28042:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "28030:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "28030:14:16"
                      },
                      {
                        "hexValue": "4552433732313a206d696e7420746f20746865207a65726f2061646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "28046:34:16",
                        "type": "",
                        "value": "ERC721: mint to the zero address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "28023:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "28023:58:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "28023:58:16"
                }
              ]
            },
            "name": "store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "28004:6:16",
                "type": ""
              }
            ],
            "src": "27906:182:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "28240:220:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "28250:74:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "28316:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "28321:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "28257:58:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "28257:67:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "28250:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "28422:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6",
                      "nodeType": "YulIdentifier",
                      "src": "28333:88:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "28333:93:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "28333:93:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "28435:19:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "28446:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "28451:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "28442:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "28442:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "28435:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "28228:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "28236:3:16",
                "type": ""
              }
            ],
            "src": "28094:366:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "28637:248:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "28647:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "28659:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "28670:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "28655:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "28655:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "28647:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "28694:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "28705:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "28690:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "28690:17:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "28713:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "28719:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "28709:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "28709:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "28683:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "28683:47:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "28683:47:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "28739:139:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "28873:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "28747:124:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "28747:131:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "28739:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "28617:9:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "28632:4:16",
                "type": ""
              }
            ],
            "src": "28466:419:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "28997:72:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "29019:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "29027:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "29015:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "29015:14:16"
                      },
                      {
                        "hexValue": "4552433732313a20746f6b656e20616c7265616479206d696e746564",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "29031:30:16",
                        "type": "",
                        "value": "ERC721: token already minted"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "29008:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "29008:54:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "29008:54:16"
                }
              ]
            },
            "name": "store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "28989:6:16",
                "type": ""
              }
            ],
            "src": "28891:178:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "29221:220:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "29231:74:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "29297:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "29302:2:16",
                        "type": "",
                        "value": "28"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "29238:58:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "29238:67:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "29231:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "29403:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57",
                      "nodeType": "YulIdentifier",
                      "src": "29314:88:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "29314:93:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "29314:93:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "29416:19:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "29427:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "29432:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "29423:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "29423:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "29416:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "29209:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "29217:3:16",
                "type": ""
              }
            ],
            "src": "29075:366:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "29618:248:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "29628:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "29640:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "29651:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "29636:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "29636:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "29628:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "29675:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "29686:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "29671:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "29671:17:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "29694:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "29700:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "29690:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "29690:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "29664:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "29664:47:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "29664:47:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "29720:139:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "29854:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "29728:124:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "29728:131:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "29720:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "29598:9:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "29613:4:16",
                "type": ""
              }
            ],
            "src": "29447:419:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "29978:127:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "30000:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "30008:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "29996:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "29996:14:16"
                      },
                      {
                        "hexValue": "45524337323155524953746f726167653a2055524920736574206f66206e6f6e",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "30012:34:16",
                        "type": "",
                        "value": "ERC721URIStorage: URI set of non"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "29989:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "29989:58:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "29989:58:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "30068:6:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "30076:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "30064:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "30064:15:16"
                      },
                      {
                        "hexValue": "6578697374656e7420746f6b656e",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "30081:16:16",
                        "type": "",
                        "value": "existent token"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "30057:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "30057:41:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "30057:41:16"
                }
              ]
            },
            "name": "store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "29970:6:16",
                "type": ""
              }
            ],
            "src": "29872:233:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "30257:220:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "30267:74:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "30333:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "30338:2:16",
                        "type": "",
                        "value": "46"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "30274:58:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "30274:67:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "30267:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "30439:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4",
                      "nodeType": "YulIdentifier",
                      "src": "30350:88:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "30350:93:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "30350:93:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "30452:19:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "30463:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "30468:2:16",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "30459:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "30459:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "30452:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "30245:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "30253:3:16",
                "type": ""
              }
            ],
            "src": "30111:366:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "30654:248:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "30664:26:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "30676:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "30687:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "30672:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "30672:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "30664:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "30711:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "30722:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "30707:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "30707:17:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "30730:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "30736:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "30726:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "30726:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "30700:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "30700:47:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "30700:47:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "30756:139:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "30890:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "30764:124:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "30764:131:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "30756:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4__to_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "30634:9:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "30649:4:16",
                "type": ""
              }
            ],
            "src": "30483:419:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "30962:87:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "30972:11:16",
                  "value": {
                    "name": "ptr",
                    "nodeType": "YulIdentifier",
                    "src": "30980:3:16"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "30972:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "31000:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "31003:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "30993:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "30993:14:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "30993:14:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "31016:26:16",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "31034:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "31037:4:16",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "keccak256",
                      "nodeType": "YulIdentifier",
                      "src": "31024:9:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31024:18:16"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "31016:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "array_dataslot_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "ptr",
                "nodeType": "YulTypedName",
                "src": "30949:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "30957:4:16",
                "type": ""
              }
            ],
            "src": "30908:141:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "31099:49:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "31109:33:16",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "31127:5:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "31134:2:16",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "31123:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "31123:14:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "31139:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "31119:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31119:23:16"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "31109:6:16"
                    }
                  ]
                }
              ]
            },
            "name": "divide_by_32_ceil",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "31082:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "31092:6:16",
                "type": ""
              }
            ],
            "src": "31055:93:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "31207:54:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "31217:37:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "bits",
                        "nodeType": "YulIdentifier",
                        "src": "31242:4:16"
                      },
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "31248:5:16"
                      }
                    ],
                    "functionName": {
                      "name": "shl",
                      "nodeType": "YulIdentifier",
                      "src": "31238:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31238:16:16"
                  },
                  "variableNames": [
                    {
                      "name": "newValue",
                      "nodeType": "YulIdentifier",
                      "src": "31217:8:16"
                    }
                  ]
                }
              ]
            },
            "name": "shift_left_dynamic",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "bits",
                "nodeType": "YulTypedName",
                "src": "31182:4:16",
                "type": ""
              },
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "31188:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "newValue",
                "nodeType": "YulTypedName",
                "src": "31198:8:16",
                "type": ""
              }
            ],
            "src": "31154:107:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "31343:317:16",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "31353:35:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBytes",
                        "nodeType": "YulIdentifier",
                        "src": "31374:10:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "31386:1:16",
                        "type": "",
                        "value": "8"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "31370:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31370:18:16"
                  },
                  "variables": [
                    {
                      "name": "shiftBits",
                      "nodeType": "YulTypedName",
                      "src": "31357:9:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "31397:109:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulIdentifier",
                        "src": "31428:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "31439:66:16",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "shift_left_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "31409:18:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31409:97:16"
                  },
                  "variables": [
                    {
                      "name": "mask",
                      "nodeType": "YulTypedName",
                      "src": "31401:4:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "31515:51:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulIdentifier",
                        "src": "31546:9:16"
                      },
                      {
                        "name": "toInsert",
                        "nodeType": "YulIdentifier",
                        "src": "31557:8:16"
                      }
                    ],
                    "functionName": {
                      "name": "shift_left_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "31527:18:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31527:39:16"
                  },
                  "variableNames": [
                    {
                      "name": "toInsert",
                      "nodeType": "YulIdentifier",
                      "src": "31515:8:16"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "31575:30:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "31588:5:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "mask",
                            "nodeType": "YulIdentifier",
                            "src": "31599:4:16"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "31595:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "31595:9:16"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "31584:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31584:21:16"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "31575:5:16"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "31614:40:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "31627:5:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "toInsert",
                            "nodeType": "YulIdentifier",
                            "src": "31638:8:16"
                          },
                          {
                            "name": "mask",
                            "nodeType": "YulIdentifier",
                            "src": "31648:4:16"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "31634:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "31634:19:16"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "31624:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31624:30:16"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "31614:6:16"
                    }
                  ]
                }
              ]
            },
            "name": "update_byte_slice_dynamic32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "31304:5:16",
                "type": ""
              },
              {
                "name": "shiftBytes",
                "nodeType": "YulTypedName",
                "src": "31311:10:16",
                "type": ""
              },
              {
                "name": "toInsert",
                "nodeType": "YulTypedName",
                "src": "31323:8:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "31336:6:16",
                "type": ""
              }
            ],
            "src": "31267:393:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "31698:28:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "31708:12:16",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "31715:5:16"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "31708:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "identity",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "31684:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "31694:3:16",
                "type": ""
              }
            ],
            "src": "31666:60:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "31792:82:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "31802:66:16",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "31860:5:16"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "31842:17:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "31842:24:16"
                          }
                        ],
                        "functionName": {
                          "name": "identity",
                          "nodeType": "YulIdentifier",
                          "src": "31833:8:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "31833:34:16"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "31815:17:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31815:53:16"
                  },
                  "variableNames": [
                    {
                      "name": "converted",
                      "nodeType": "YulIdentifier",
                      "src": "31802:9:16"
                    }
                  ]
                }
              ]
            },
            "name": "convert_t_uint256_to_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "31772:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "converted",
                "nodeType": "YulTypedName",
                "src": "31782:9:16",
                "type": ""
              }
            ],
            "src": "31732:142:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "31927:28:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "31937:12:16",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "31944:5:16"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "31937:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "prepare_store_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "31913:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "31923:3:16",
                "type": ""
              }
            ],
            "src": "31880:75:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "32037:193:16",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "32047:63:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value_0",
                        "nodeType": "YulIdentifier",
                        "src": "32102:7:16"
                      }
                    ],
                    "functionName": {
                      "name": "convert_t_uint256_to_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "32071:30:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "32071:39:16"
                  },
                  "variables": [
                    {
                      "name": "convertedValue_0",
                      "nodeType": "YulTypedName",
                      "src": "32051:16:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "32126:4:16"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "slot",
                                "nodeType": "YulIdentifier",
                                "src": "32166:4:16"
                              }
                            ],
                            "functionName": {
                              "name": "sload",
                              "nodeType": "YulIdentifier",
                              "src": "32160:5:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "32160:11:16"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "32173:6:16"
                          },
                          {
                            "arguments": [
                              {
                                "name": "convertedValue_0",
                                "nodeType": "YulIdentifier",
                                "src": "32205:16:16"
                              }
                            ],
                            "functionName": {
                              "name": "prepare_store_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "32181:23:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "32181:41:16"
                          }
                        ],
                        "functionName": {
                          "name": "update_byte_slice_dynamic32",
                          "nodeType": "YulIdentifier",
                          "src": "32132:27:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "32132:91:16"
                      }
                    ],
                    "functionName": {
                      "name": "sstore",
                      "nodeType": "YulIdentifier",
                      "src": "32119:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "32119:105:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "32119:105:16"
                }
              ]
            },
            "name": "update_storage_value_t_uint256_to_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "32014:4:16",
                "type": ""
              },
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "32020:6:16",
                "type": ""
              },
              {
                "name": "value_0",
                "nodeType": "YulTypedName",
                "src": "32028:7:16",
                "type": ""
              }
            ],
            "src": "31961:269:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "32285:24:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "32295:8:16",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "32302:1:16",
                    "type": "",
                    "value": "0"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "32295:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "zero_value_for_split_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "32281:3:16",
                "type": ""
              }
            ],
            "src": "32236:73:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "32368:136:16",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "32378:46:16",
                  "value": {
                    "arguments": [],
                    "functionName": {
                      "name": "zero_value_for_split_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "32392:30:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "32392:32:16"
                  },
                  "variables": [
                    {
                      "name": "zero_0",
                      "nodeType": "YulTypedName",
                      "src": "32382:6:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "32477:4:16"
                      },
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "32483:6:16"
                      },
                      {
                        "name": "zero_0",
                        "nodeType": "YulIdentifier",
                        "src": "32491:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "update_storage_value_t_uint256_to_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "32433:43:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "32433:65:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "32433:65:16"
                }
              ]
            },
            "name": "storage_set_to_zero_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "32354:4:16",
                "type": ""
              },
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "32360:6:16",
                "type": ""
              }
            ],
            "src": "32315:189:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "32560:136:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "32627:63:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "32671:5:16"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "32678:1:16",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "storage_set_to_zero_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "32641:29:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32641:39:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "32641:39:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "start",
                        "nodeType": "YulIdentifier",
                        "src": "32580:5:16"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "32587:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "32577:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "32577:14:16"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "32592:26:16",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "32594:22:16",
                        "value": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "32607:5:16"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "32614:1:16",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "32603:3:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32603:13:16"
                        },
                        "variableNames": [
                          {
                            "name": "start",
                            "nodeType": "YulIdentifier",
                            "src": "32594:5:16"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "32574:2:16",
                    "statements": []
                  },
                  "src": "32570:120:16"
                }
              ]
            },
            "name": "clear_storage_range_t_bytes1",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "start",
                "nodeType": "YulTypedName",
                "src": "32548:5:16",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "32555:3:16",
                "type": ""
              }
            ],
            "src": "32510:186:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "32781:464:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "32807:431:16",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "32821:54:16",
                        "value": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "32869:5:16"
                            }
                          ],
                          "functionName": {
                            "name": "array_dataslot_t_string_storage",
                            "nodeType": "YulIdentifier",
                            "src": "32837:31:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32837:38:16"
                        },
                        "variables": [
                          {
                            "name": "dataArea",
                            "nodeType": "YulTypedName",
                            "src": "32825:8:16",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "32888:63:16",
                        "value": {
                          "arguments": [
                            {
                              "name": "dataArea",
                              "nodeType": "YulIdentifier",
                              "src": "32911:8:16"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "startIndex",
                                  "nodeType": "YulIdentifier",
                                  "src": "32939:10:16"
                                }
                              ],
                              "functionName": {
                                "name": "divide_by_32_ceil",
                                "nodeType": "YulIdentifier",
                                "src": "32921:17:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "32921:29:16"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "32907:3:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32907:44:16"
                        },
                        "variables": [
                          {
                            "name": "deleteStart",
                            "nodeType": "YulTypedName",
                            "src": "32892:11:16",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "33108:27:16",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "33110:23:16",
                              "value": {
                                "name": "dataArea",
                                "nodeType": "YulIdentifier",
                                "src": "33125:8:16"
                              },
                              "variableNames": [
                                {
                                  "name": "deleteStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "33110:11:16"
                                }
                              ]
                            }
                          ]
                        },
                        "condition": {
                          "arguments": [
                            {
                              "name": "startIndex",
                              "nodeType": "YulIdentifier",
                              "src": "33092:10:16"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "33104:2:16",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "33089:2:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33089:18:16"
                        },
                        "nodeType": "YulIf",
                        "src": "33086:49:16"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "deleteStart",
                              "nodeType": "YulIdentifier",
                              "src": "33177:11:16"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "dataArea",
                                  "nodeType": "YulIdentifier",
                                  "src": "33194:8:16"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "len",
                                      "nodeType": "YulIdentifier",
                                      "src": "33222:3:16"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "divide_by_32_ceil",
                                    "nodeType": "YulIdentifier",
                                    "src": "33204:17:16"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "33204:22:16"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "33190:3:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "33190:37:16"
                            }
                          ],
                          "functionName": {
                            "name": "clear_storage_range_t_bytes1",
                            "nodeType": "YulIdentifier",
                            "src": "33148:28:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33148:80:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "33148:80:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "32798:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "32803:2:16",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "32795:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "32795:11:16"
                  },
                  "nodeType": "YulIf",
                  "src": "32792:446:16"
                }
              ]
            },
            "name": "clean_up_bytearray_end_slots_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "32757:5:16",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "32764:3:16",
                "type": ""
              },
              {
                "name": "startIndex",
                "nodeType": "YulTypedName",
                "src": "32769:10:16",
                "type": ""
              }
            ],
            "src": "32702:543:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "33314:54:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "33324:37:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "bits",
                        "nodeType": "YulIdentifier",
                        "src": "33349:4:16"
                      },
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "33355:5:16"
                      }
                    ],
                    "functionName": {
                      "name": "shr",
                      "nodeType": "YulIdentifier",
                      "src": "33345:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "33345:16:16"
                  },
                  "variableNames": [
                    {
                      "name": "newValue",
                      "nodeType": "YulIdentifier",
                      "src": "33324:8:16"
                    }
                  ]
                }
              ]
            },
            "name": "shift_right_unsigned_dynamic",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "bits",
                "nodeType": "YulTypedName",
                "src": "33289:4:16",
                "type": ""
              },
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "33295:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "newValue",
                "nodeType": "YulTypedName",
                "src": "33305:8:16",
                "type": ""
              }
            ],
            "src": "33251:117:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "33425:118:16",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "33435:68:16",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "33484:1:16",
                                "type": "",
                                "value": "8"
                              },
                              {
                                "name": "bytes",
                                "nodeType": "YulIdentifier",
                                "src": "33487:5:16"
                              }
                            ],
                            "functionName": {
                              "name": "mul",
                              "nodeType": "YulIdentifier",
                              "src": "33480:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "33480:13:16"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "33499:1:16",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "33495:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "33495:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "shift_right_unsigned_dynamic",
                          "nodeType": "YulIdentifier",
                          "src": "33451:28:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "33451:51:16"
                      }
                    ],
                    "functionName": {
                      "name": "not",
                      "nodeType": "YulIdentifier",
                      "src": "33447:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "33447:56:16"
                  },
                  "variables": [
                    {
                      "name": "mask",
                      "nodeType": "YulTypedName",
                      "src": "33439:4:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "33512:25:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "33526:4:16"
                      },
                      {
                        "name": "mask",
                        "nodeType": "YulIdentifier",
                        "src": "33532:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "33522:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "33522:15:16"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "33512:6:16"
                    }
                  ]
                }
              ]
            },
            "name": "mask_bytes_dynamic",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "33402:4:16",
                "type": ""
              },
              {
                "name": "bytes",
                "nodeType": "YulTypedName",
                "src": "33408:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "33418:6:16",
                "type": ""
              }
            ],
            "src": "33374:169:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "33629:214:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "33762:37:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "33789:4:16"
                      },
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "33795:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "mask_bytes_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "33770:18:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "33770:29:16"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "33762:4:16"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "33808:29:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "33819:4:16"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "33829:1:16",
                            "type": "",
                            "value": "2"
                          },
                          {
                            "name": "len",
                            "nodeType": "YulIdentifier",
                            "src": "33832:3:16"
                          }
                        ],
                        "functionName": {
                          "name": "mul",
                          "nodeType": "YulIdentifier",
                          "src": "33825:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "33825:11:16"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "33816:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "33816:21:16"
                  },
                  "variableNames": [
                    {
                      "name": "used",
                      "nodeType": "YulIdentifier",
                      "src": "33808:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "extract_used_part_and_set_length_of_short_byte_array",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "33610:4:16",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "33616:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "used",
                "nodeType": "YulTypedName",
                "src": "33624:4:16",
                "type": ""
              }
            ],
            "src": "33548:295:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "33940:1303:16",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "33951:51:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "33998:3:16"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "33965:32:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "33965:37:16"
                  },
                  "variables": [
                    {
                      "name": "newLen",
                      "nodeType": "YulTypedName",
                      "src": "33955:6:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "34087:22:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "34089:16:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34089:18:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "34089:18:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "34059:6:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "34067:18:16",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "34056:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "34056:30:16"
                  },
                  "nodeType": "YulIf",
                  "src": "34053:56:16"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "34119:52:16",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "slot",
                            "nodeType": "YulIdentifier",
                            "src": "34165:4:16"
                          }
                        ],
                        "functionName": {
                          "name": "sload",
                          "nodeType": "YulIdentifier",
                          "src": "34159:5:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "34159:11:16"
                      }
                    ],
                    "functionName": {
                      "name": "extract_byte_array_length",
                      "nodeType": "YulIdentifier",
                      "src": "34133:25:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "34133:38:16"
                  },
                  "variables": [
                    {
                      "name": "oldLen",
                      "nodeType": "YulTypedName",
                      "src": "34123:6:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "slot",
                        "nodeType": "YulIdentifier",
                        "src": "34264:4:16"
                      },
                      {
                        "name": "oldLen",
                        "nodeType": "YulIdentifier",
                        "src": "34270:6:16"
                      },
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "34278:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "clean_up_bytearray_end_slots_t_string_storage",
                      "nodeType": "YulIdentifier",
                      "src": "34218:45:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "34218:67:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "34218:67:16"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "34295:18:16",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "34312:1:16",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulTypedName",
                      "src": "34299:9:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "34323:17:16",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "34336:4:16",
                    "type": "",
                    "value": "0x20"
                  },
                  "variableNames": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulIdentifier",
                      "src": "34323:9:16"
                    }
                  ]
                },
                {
                  "cases": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "34387:611:16",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "34401:37:16",
                            "value": {
                              "arguments": [
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "34420:6:16"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "34432:4:16",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "34428:3:16"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "34428:9:16"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "34416:3:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "34416:22:16"
                            },
                            "variables": [
                              {
                                "name": "loopEnd",
                                "nodeType": "YulTypedName",
                                "src": "34405:7:16",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "34452:51:16",
                            "value": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "34498:4:16"
                                }
                              ],
                              "functionName": {
                                "name": "array_dataslot_t_string_storage",
                                "nodeType": "YulIdentifier",
                                "src": "34466:31:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "34466:37:16"
                            },
                            "variables": [
                              {
                                "name": "dstPtr",
                                "nodeType": "YulTypedName",
                                "src": "34456:6:16",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "34516:10:16",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "34525:1:16",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "i",
                                "nodeType": "YulTypedName",
                                "src": "34520:1:16",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "34584:163:16",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "34609:6:16"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "src",
                                                "nodeType": "YulIdentifier",
                                                "src": "34627:3:16"
                                              },
                                              {
                                                "name": "srcOffset",
                                                "nodeType": "YulIdentifier",
                                                "src": "34632:9:16"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nodeType": "YulIdentifier",
                                              "src": "34623:3:16"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "34623:19:16"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mload",
                                          "nodeType": "YulIdentifier",
                                          "src": "34617:5:16"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "34617:26:16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "34602:6:16"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "34602:42:16"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "34602:42:16"
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "34661:24:16",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "34675:6:16"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "34683:1:16",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "34671:3:16"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "34671:14:16"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "dstPtr",
                                      "nodeType": "YulIdentifier",
                                      "src": "34661:6:16"
                                    }
                                  ]
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "34702:31:16",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "34719:9:16"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "34730:2:16",
                                        "type": "",
                                        "value": "32"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "34715:3:16"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "34715:18:16"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "srcOffset",
                                      "nodeType": "YulIdentifier",
                                      "src": "34702:9:16"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "34550:1:16"
                                },
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "34553:7:16"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "34547:2:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "34547:14:16"
                            },
                            "nodeType": "YulForLoop",
                            "post": {
                              "nodeType": "YulBlock",
                              "src": "34562:21:16",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "34564:17:16",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "34573:1:16"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "34576:4:16",
                                        "type": "",
                                        "value": "0x20"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "34569:3:16"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "34569:12:16"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "34564:1:16"
                                    }
                                  ]
                                }
                              ]
                            },
                            "pre": {
                              "nodeType": "YulBlock",
                              "src": "34543:3:16",
                              "statements": []
                            },
                            "src": "34539:208:16"
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "34783:156:16",
                              "statements": [
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "34801:43:16",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "34828:3:16"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "34833:9:16"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "34824:3:16"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "34824:19:16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "34818:5:16"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "34818:26:16"
                                  },
                                  "variables": [
                                    {
                                      "name": "lastValue",
                                      "nodeType": "YulTypedName",
                                      "src": "34805:9:16",
                                      "type": ""
                                    }
                                  ]
                                },
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "34868:6:16"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "lastValue",
                                            "nodeType": "YulIdentifier",
                                            "src": "34895:9:16"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "name": "newLen",
                                                "nodeType": "YulIdentifier",
                                                "src": "34910:6:16"
                                              },
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "34918:4:16",
                                                "type": "",
                                                "value": "0x1f"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "and",
                                              "nodeType": "YulIdentifier",
                                              "src": "34906:3:16"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "34906:17:16"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mask_bytes_dynamic",
                                          "nodeType": "YulIdentifier",
                                          "src": "34876:18:16"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "34876:48:16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "34861:6:16"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "34861:64:16"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "34861:64:16"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "34766:7:16"
                                },
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "34775:6:16"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "34763:2:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "34763:19:16"
                            },
                            "nodeType": "YulIf",
                            "src": "34760:179:16"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "34959:4:16"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "newLen",
                                          "nodeType": "YulIdentifier",
                                          "src": "34973:6:16"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "34981:1:16",
                                          "type": "",
                                          "value": "2"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "34969:3:16"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "34969:14:16"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "34985:1:16",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "34965:3:16"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "34965:22:16"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "34952:6:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "34952:36:16"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "34952:36:16"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "34380:618:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "34385:1:16",
                        "type": "",
                        "value": "1"
                      }
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "35015:222:16",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "35029:14:16",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "35042:1:16",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "35033:5:16",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "35066:67:16",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "35084:35:16",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "35103:3:16"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "35108:9:16"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "35099:3:16"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "35099:19:16"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "35093:5:16"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "35093:26:16"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "35084:5:16"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "name": "newLen",
                              "nodeType": "YulIdentifier",
                              "src": "35059:6:16"
                            },
                            "nodeType": "YulIf",
                            "src": "35056:77:16"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "35153:4:16"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "35212:5:16"
                                    },
                                    {
                                      "name": "newLen",
                                      "nodeType": "YulIdentifier",
                                      "src": "35219:6:16"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "extract_used_part_and_set_length_of_short_byte_array",
                                    "nodeType": "YulIdentifier",
                                    "src": "35159:52:16"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "35159:67:16"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "35146:6:16"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "35146:81:16"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "35146:81:16"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "35007:230:16",
                      "value": "default"
                    }
                  ],
                  "expression": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "34360:6:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "34368:2:16",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "34357:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "34357:14:16"
                  },
                  "nodeType": "YulSwitch",
                  "src": "34350:887:16"
                }
              ]
            },
            "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "33929:4:16",
                "type": ""
              },
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "33935:3:16",
                "type": ""
              }
            ],
            "src": "33848:1395:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "35307:40:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "35318:22:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "35334:5:16"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "35328:5:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "35328:12:16"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "35318:6:16"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "35290:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "35300:6:16",
                "type": ""
              }
            ],
            "src": "35249:98:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "35448:73:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "35465:3:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "35470:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "35458:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "35458:19:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "35458:19:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "35486:29:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "35505:3:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "35510:4:16",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "35501:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "35501:14:16"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "35486:11:16"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "35420:3:16",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "35425:6:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "35436:11:16",
                "type": ""
              }
            ],
            "src": "35353:168:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "35617:270:16",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "35627:52:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "35673:5:16"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_bytes_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "35641:31:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "35641:38:16"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "35631:6:16",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "35688:77:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "35753:3:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "35758:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "35695:57:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "35695:70:16"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "35688:3:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "35800:5:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "35807:4:16",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "35796:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "35796:16:16"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "35814:3:16"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "35819:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "35774:21:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "35774:52:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "35774:52:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "35835:46:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "35846:3:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "35873:6:16"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "35851:21:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "35851:29:16"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "35842:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "35842:39:16"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "35835:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "35598:5:16",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "35605:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "35613:3:16",
                "type": ""
              }
            ],
            "src": "35527:360:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "36093:440:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "36103:27:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "36115:9:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "36126:3:16",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "36111:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36111:19:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "36103:4:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "36184:6:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "36197:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "36208:1:16",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "36193:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "36193:17:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "36140:43:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36140:71:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "36140:71:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "36265:6:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "36278:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "36289:2:16",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "36274:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "36274:18:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "36221:43:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36221:72:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "36221:72:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "36347:6:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "36360:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "36371:2:16",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "36356:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "36356:18:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "36303:43:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36303:72:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "36303:72:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "36396:9:16"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "36407:2:16",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "36392:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "36392:18:16"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "36416:4:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "36422:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "36412:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "36412:20:16"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "36385:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36385:48:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "36385:48:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "36442:84:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "36512:6:16"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "36521:4:16"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "36450:61:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36450:76:16"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "36442:4:16"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "36041:9:16",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "36053:6:16",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "36061:6:16",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "36069:6:16",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "36077:6:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "36088:4:16",
                "type": ""
              }
            ],
            "src": "35893:640:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "36601:79:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "36611:22:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "36626:6:16"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "36620:5:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36620:13:16"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "36611:5:16"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "36668:5:16"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_bytes4",
                      "nodeType": "YulIdentifier",
                      "src": "36642:25:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36642:32:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "36642:32:16"
                }
              ]
            },
            "name": "abi_decode_t_bytes4_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "36579:6:16",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "36587:3:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "36595:5:16",
                "type": ""
              }
            ],
            "src": "36539:141:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "36762:273:16",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "36808:83:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "36810:77:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "36810:79:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "36810:79:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "36783:7:16"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "36792:9:16"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "36779:3:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "36779:23:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "36804:2:16",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "36775:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36775:32:16"
                  },
                  "nodeType": "YulIf",
                  "src": "36772:119:16"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "36901:127:16",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "36916:15:16",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "36930:1:16",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "36920:6:16",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "36945:73:16",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "36990:9:16"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "37001:6:16"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "36986:3:16"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "36986:22:16"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "37010:7:16"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bytes4_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "36955:30:16"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "36955:63:16"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "36945:6:16"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_bytes4_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "36732:9:16",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "36743:7:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "36755:6:16",
                "type": ""
              }
            ],
            "src": "36686:349:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "37084:190:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "37094:33:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "37121:5:16"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "37103:17:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37103:24:16"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "37094:5:16"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "37217:22:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "37219:16:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "37219:18:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "37219:18:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "37142:5:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37149:66:16",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "37139:2:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37139:77:16"
                  },
                  "nodeType": "YulIf",
                  "src": "37136:103:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "37248:20:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "37259:5:16"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37266:1:16",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "37255:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37255:13:16"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "37248:3:16"
                    }
                  ]
                }
              ]
            },
            "name": "increment_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "37070:5:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "37080:3:16",
                "type": ""
              }
            ],
            "src": "37041:233:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "37308:152:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37325:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37328:77:16",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "37318:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37318:88:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "37318:88:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37422:1:16",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37425:4:16",
                        "type": "",
                        "value": "0x12"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "37415:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37415:15:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "37415:15:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37446:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37449:4:16",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "37439:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37439:15:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "37439:15:16"
                }
              ]
            },
            "name": "panic_error_0x12",
            "nodeType": "YulFunctionDefinition",
            "src": "37280:180:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "37508:143:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "37518:25:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "37541:1:16"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "37523:17:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37523:20:16"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "37518:1:16"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "37552:25:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "37575:1:16"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "37557:17:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37557:20:16"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "37552:1:16"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "37599:22:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "37601:16:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "37601:18:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "37601:18:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "37596:1:16"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "37589:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37589:9:16"
                  },
                  "nodeType": "YulIf",
                  "src": "37586:35:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "37631:14:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "37640:1:16"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "37643:1:16"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "37636:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37636:9:16"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "37631:1:16"
                    }
                  ]
                }
              ]
            },
            "name": "checked_div_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "37497:1:16",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "37500:1:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "37506:1:16",
                "type": ""
              }
            ],
            "src": "37466:185:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "37691:142:16",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "37701:25:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "37724:1:16"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "37706:17:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37706:20:16"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "37701:1:16"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "37735:25:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "37758:1:16"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "37740:17:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37740:20:16"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "37735:1:16"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "37782:22:16",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "37784:16:16"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "37784:18:16"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "37784:18:16"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "37779:1:16"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "37772:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37772:9:16"
                  },
                  "nodeType": "YulIf",
                  "src": "37769:35:16"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "37813:14:16",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "37822:1:16"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "37825:1:16"
                      }
                    ],
                    "functionName": {
                      "name": "mod",
                      "nodeType": "YulIdentifier",
                      "src": "37818:3:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37818:9:16"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "37813:1:16"
                    }
                  ]
                }
              ]
            },
            "name": "mod_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "37680:1:16",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "37683:1:16",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "37689:1:16",
                "type": ""
              }
            ],
            "src": "37657:176:16"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "37867:152:16",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37884:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37887:77:16",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "37877:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37877:88:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "37877:88:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37981:1:16",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37984:4:16",
                        "type": "",
                        "value": "0x31"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "37974:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37974:15:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "37974:15:16"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "38005:1:16",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "38008:4:16",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "37998:6:16"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37998:15:16"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "37998:15:16"
                }
              ]
            },
            "name": "panic_error_0x31",
            "nodeType": "YulFunctionDefinition",
            "src": "37839:180:16"
          }
        ]
      },
      "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_bytes4(value) -> cleaned {\n        cleaned := and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000)\n    }\n\n    function validator_revert_t_bytes4(value) {\n        if iszero(eq(value, cleanup_t_bytes4(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bytes4(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bool(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_tuple_t_addresst_bool(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_bool(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_bytes_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory(src, dst, length) {\n        calldatacopy(dst, src, length)\n        // clear end\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_bytes_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_bytes_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // bytes\n    function abi_decode_t_bytes_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_bytes_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3 {\n        if slt(sub(dataEnd, headStart), 128) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 96))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value3 := abi_decode_t_bytes_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_addresst_string_memory_ptr(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value1 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approval to current owne\")\n\n        mstore(add(memPtr, 32), \"r\")\n\n    }\n\n    function abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 33)\n        store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approve caller is not to\")\n\n        mstore(add(memPtr, 32), \"ken owner nor approved for all\")\n\n    }\n\n    function abi_encode_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 62)\n        store_literal_in_memory_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: caller is not token owne\")\n\n        mstore(add(memPtr, 32), \"r nor approved\")\n\n    }\n\n    function abi_encode_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 46)\n        store_literal_in_memory_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721Enumerable: owner index ou\")\n\n        mstore(add(memPtr, 32), \"t of bounds\")\n\n    }\n\n    function abi_encode_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 43)\n        store_literal_in_memory_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721Enumerable: global index o\")\n\n        mstore(add(memPtr, 32), \"ut of bounds\")\n\n    }\n\n    function abi_encode_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 44)\n        store_literal_in_memory_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x32() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n\n    function store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: invalid token ID\")\n\n    }\n\n    function abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 24)\n        store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: address zero is not a va\")\n\n        mstore(add(memPtr, 32), \"lid owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 41)\n        store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: new owner is the zero a\")\n\n        mstore(add(memPtr, 32), \"ddress\")\n\n    }\n\n    function abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer from incorrect \")\n\n        mstore(add(memPtr, 32), \"owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer to the zero add\")\n\n        mstore(add(memPtr, 32), \"ress\")\n\n    }\n\n    function abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n        store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: caller is not the owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approve to caller\")\n\n    }\n\n    function abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 25)\n        store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer to non ERC721Re\")\n\n        mstore(add(memPtr, 32), \"ceiver implementer\")\n\n    }\n\n    function abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 50)\n        store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length) -> updated_pos {\n        updated_pos := pos\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, length)\n    }\n\n    function abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed(pos , value1, value0) -> end {\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value0,  pos)\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value1,  pos)\n\n        end := pos\n    }\n\n    function store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: token already minted\")\n\n    }\n\n    function abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 28)\n        store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721URIStorage: URI set of non\")\n\n        mstore(add(memPtr, 32), \"existent token\")\n\n    }\n\n    function abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 46)\n        store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n    function array_length_t_bytes_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_bytes_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed(headStart , value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 128)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n        mstore(add(headStart, 96), sub(tail, headStart))\n        tail := abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value3,  tail)\n\n    }\n\n    function abi_decode_t_bytes4_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    function abi_decode_tuple_t_bytes4_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function checked_div_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n\n        r := div(x, y)\n    }\n\n    function mod_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n\n    function panic_error_0x31() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x31)\n        revert(0, 0x24)\n    }\n\n}\n",
      "id": 16,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "380:1239:14:-:0;;;534:46;;;;;;;;;;1390:113:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1464:5;1456;:13;;;;;;:::i;:::-;;1489:7;1479;:17;;;;;;:::i;:::-;;1390:113;;936:32:0;955:12;:10;;;:12;;:::i;:::-;936:18;;;:32;;:::i;:::-;380:1239:14;;640:96:9;693:7;719:10;712:17;;640:96;:::o;2433:187:0:-;2506:16;2525:6;;;;;;;;;;;2506:25;;2550:8;2541:6;;:17;;;;;;;;;;;;;;;;;;2604:8;2573:40;;2594:8;2573:40;;;;;;;;;;;;2496:124;2433:187;:::o;7:99:16:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:180::-;160:77;157:1;150:88;257:4;254:1;247:15;281:4;278:1;271:15;298:180;346:77;343:1;336:88;443:4;440:1;433:15;467:4;464:1;457:15;484:320;528:6;565:1;559:4;555:12;545:22;;612:1;606:4;602:12;633:18;623:81;;689:4;681:6;677:17;667:27;;623:81;751:2;743:6;740:14;720:18;717:38;714:84;;770:18;;:::i;:::-;714:84;535:269;484:320;;;:::o;810:141::-;859:4;882:3;874:11;;905:3;902:1;895:14;939:4;936:1;926:18;918:26;;810:141;;;:::o;957:93::-;994:6;1041:2;1036;1029:5;1025:14;1021:23;1011:33;;957:93;;;:::o;1056:107::-;1100:8;1150:5;1144:4;1140:16;1119:37;;1056:107;;;;:::o;1169:393::-;1238:6;1288:1;1276:10;1272:18;1311:97;1341:66;1330:9;1311:97;:::i;:::-;1429:39;1459:8;1448:9;1429:39;:::i;:::-;1417:51;;1501:4;1497:9;1490:5;1486:21;1477:30;;1550:4;1540:8;1536:19;1529:5;1526:30;1516:40;;1245:317;;1169:393;;;;;:::o;1568:77::-;1605:7;1634:5;1623:16;;1568:77;;;:::o;1651:60::-;1679:3;1700:5;1693:12;;1651:60;;;:::o;1717:142::-;1767:9;1800:53;1818:34;1827:24;1845:5;1827:24;:::i;:::-;1818:34;:::i;:::-;1800:53;:::i;:::-;1787:66;;1717:142;;;:::o;1865:75::-;1908:3;1929:5;1922:12;;1865:75;;;:::o;1946:269::-;2056:39;2087:7;2056:39;:::i;:::-;2117:91;2166:41;2190:16;2166:41;:::i;:::-;2158:6;2151:4;2145:11;2117:91;:::i;:::-;2111:4;2104:105;2022:193;1946:269;;;:::o;2221:73::-;2266:3;2221:73;:::o;2300:189::-;2377:32;;:::i;:::-;2418:65;2476:6;2468;2462:4;2418:65;:::i;:::-;2353:136;2300:189;;:::o;2495:186::-;2555:120;2572:3;2565:5;2562:14;2555:120;;;2626:39;2663:1;2656:5;2626:39;:::i;:::-;2599:1;2592:5;2588:13;2579:22;;2555:120;;;2495:186;;:::o;2687:543::-;2788:2;2783:3;2780:11;2777:446;;;2822:38;2854:5;2822:38;:::i;:::-;2906:29;2924:10;2906:29;:::i;:::-;2896:8;2892:44;3089:2;3077:10;3074:18;3071:49;;;3110:8;3095:23;;3071:49;3133:80;3189:22;3207:3;3189:22;:::i;:::-;3179:8;3175:37;3162:11;3133:80;:::i;:::-;2792:431;;2777:446;2687:543;;;:::o;3236:117::-;3290:8;3340:5;3334:4;3330:16;3309:37;;3236:117;;;;:::o;3359:169::-;3403:6;3436:51;3484:1;3480:6;3472:5;3469:1;3465:13;3436:51;:::i;:::-;3432:56;3517:4;3511;3507:15;3497:25;;3410:118;3359:169;;;;:::o;3533:295::-;3609:4;3755:29;3780:3;3774:4;3755:29;:::i;:::-;3747:37;;3817:3;3814:1;3810:11;3804:4;3801:21;3793:29;;3533:295;;;;:::o;3833:1395::-;3950:37;3983:3;3950:37;:::i;:::-;4052:18;4044:6;4041:30;4038:56;;;4074:18;;:::i;:::-;4038:56;4118:38;4150:4;4144:11;4118:38;:::i;:::-;4203:67;4263:6;4255;4249:4;4203:67;:::i;:::-;4297:1;4321:4;4308:17;;4353:2;4345:6;4342:14;4370:1;4365:618;;;;5027:1;5044:6;5041:77;;;5093:9;5088:3;5084:19;5078:26;5069:35;;5041:77;5144:67;5204:6;5197:5;5144:67;:::i;:::-;5138:4;5131:81;5000:222;4335:887;;4365:618;4417:4;4413:9;4405:6;4401:22;4451:37;4483:4;4451:37;:::i;:::-;4510:1;4524:208;4538:7;4535:1;4532:14;4524:208;;;4617:9;4612:3;4608:19;4602:26;4594:6;4587:42;4668:1;4660:6;4656:14;4646:24;;4715:2;4704:9;4700:18;4687:31;;4561:4;4558:1;4554:12;4549:17;;4524:208;;;4760:6;4751:7;4748:19;4745:179;;;4818:9;4813:3;4809:19;4803:26;4861:48;4903:4;4895:6;4891:17;4880:9;4861:48;:::i;:::-;4853:6;4846:64;4768:156;4745:179;4970:1;4966;4958:6;4954:14;4950:22;4944:4;4937:36;4372:611;;;4335:887;;3925:1303;;;3833:1395;;:::o;380:1239:14:-;;;;;;;",
  "deployedSourceMap": "380:1239:14:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;944:205;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2470:98:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3935:167;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3467:407;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1615:111:4;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4612:327:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1291:253:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5005:179:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1798:230:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2190:218:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1929:204;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1831:101:0;;;:::i;:::-;;1201:85;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2632:102:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4169:153;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5250:315;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1154:173:14;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4388:162:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1337:280:14;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2081:198:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;944:205:14;1079:4;1106:36;1130:11;1106:23;:36::i;:::-;1099:43;;944:205;;;:::o;2470:98:1:-;2524:13;2556:5;2549:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2470:98;:::o;3935:167::-;4011:7;4030:23;4045:7;4030:14;:23::i;:::-;4071:15;:24;4087:7;4071:24;;;;;;;;;;;;;;;;;;;;;4064:31;;3935:167;;;:::o;3467:407::-;3547:13;3563:23;3578:7;3563:14;:23::i;:::-;3547:39;;3610:5;3604:11;;:2;:11;;;3596:57;;;;;;;;;;;;:::i;:::-;;;;;;;;;3701:5;3685:21;;:12;:10;:12::i;:::-;:21;;;:62;;;;3710:37;3727:5;3734:12;:10;:12::i;:::-;3710:16;:37::i;:::-;3685:62;3664:171;;;;;;;;;;;;:::i;:::-;;;;;;;;;3846:21;3855:2;3859:7;3846:8;:21::i;:::-;3537:337;3467:407;;:::o;1615:111:4:-;1676:7;1702:10;:17;;;;1695:24;;1615:111;:::o;4612:327:1:-;4801:41;4820:12;:10;:12::i;:::-;4834:7;4801:18;:41::i;:::-;4793:100;;;;;;;;;;;;:::i;:::-;;;;;;;;;4904:28;4914:4;4920:2;4924:7;4904:9;:28::i;:::-;4612:327;;;:::o;1291:253:4:-;1388:7;1423:23;1440:5;1423:16;:23::i;:::-;1415:5;:31;1407:87;;;;;;;;;;;;:::i;:::-;;;;;;;;;1511:12;:19;1524:5;1511:19;;;;;;;;;;;;;;;:26;1531:5;1511:26;;;;;;;;;;;;1504:33;;1291:253;;;;:::o;5005:179:1:-;5138:39;5155:4;5161:2;5165:7;5138:39;;;;;;;;;;;;:16;:39::i;:::-;5005:179;;;:::o;1798:230:4:-;1873:7;1908:30;:28;:30::i;:::-;1900:5;:38;1892:95;;;;;;;;;;;;:::i;:::-;;;;;;;;;2004:10;2015:5;2004:17;;;;;;;;:::i;:::-;;;;;;;;;;1997:24;;1798:230;;;:::o;2190:218:1:-;2262:7;2281:13;2297:7;:16;2305:7;2297:16;;;;;;;;;;;;;;;;;;;;;2281:32;;2348:1;2331:19;;:5;:19;;;2323:56;;;;;;;;;;;;:::i;:::-;;;;;;;;;2396:5;2389:12;;;2190:218;;;:::o;1929:204::-;2001:7;2045:1;2028:19;;:5;:19;;;2020:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;2110:9;:16;2120:5;2110:16;;;;;;;;;;;;;;;;2103:23;;1929:204;;;:::o;1831:101:0:-;1094:13;:11;:13::i;:::-;1895:30:::1;1922:1;1895:18;:30::i;:::-;1831:101::o:0;1201:85::-;1247:7;1273:6;;;;;;;;;;;1266:13;;1201:85;:::o;2632:102:1:-;2688:13;2720:7;2713:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2632:102;:::o;4169:153::-;4263:52;4282:12;:10;:12::i;:::-;4296:8;4306;4263:18;:52::i;:::-;4169:153;;:::o;5250:315::-;5418:41;5437:12;:10;:12::i;:::-;5451:7;5418:18;:41::i;:::-;5410:100;;;;;;;;;;;;:::i;:::-;;;;;;;;;5520:38;5534:4;5540:2;5544:7;5553:4;5520:13;:38::i;:::-;5250:315;;;;:::o;1154:173:14:-;1265:13;1297:23;1312:7;1297:14;:23::i;:::-;1290:30;;1154:173;;;:::o;4388:162:1:-;4485:4;4508:18;:25;4527:5;4508:25;;;;;;;;;;;;;;;:35;4534:8;4508:35;;;;;;;;;;;;;;;;;;;;;;;;;4501:42;;4388:162;;;;:::o;1337:280:14:-;1413:7;1432:21;:9;:19;:21::i;:::-;1464:17;1484:19;:9;:17;:19::i;:::-;1464:39;;1513:27;1519:9;1530;1513:5;:27::i;:::-;1550:33;1563:9;1574:8;1550:12;:33::i;:::-;1601:9;1594:16;;;1337:280;;;;:::o;2081:198:0:-;1094:13;:11;:13::i;:::-;2189:1:::1;2169:22;;:8;:22;;::::0;2161:73:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;2244:28;2263:8;2244:18;:28::i;:::-;2081:198:::0;:::o;990:222:4:-;1092:4;1130:35;1115:50;;;:11;:50;;;;:90;;;;1169:36;1193:11;1169:23;:36::i;:::-;1115:90;1108:97;;990:222;;;:::o;11657:133:1:-;11738:16;11746:7;11738;:16::i;:::-;11730:53;;;;;;;;;;;;:::i;:::-;;;;;;;;;11657:133;:::o;640:96:9:-;693:7;719:10;712:17;;640:96;:::o;10959:171:1:-;11060:2;11033:15;:24;11049:7;11033:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;11115:7;11111:2;11077:46;;11086:23;11101:7;11086:14;:23::i;:::-;11077:46;;;;;;;;;;;;10959:171;;:::o;7317:261::-;7410:4;7426:13;7442:23;7457:7;7442:14;:23::i;:::-;7426:39;;7494:5;7483:16;;:7;:16;;;:52;;;;7503:32;7520:5;7527:7;7503:16;:32::i;:::-;7483:52;:87;;;;7563:7;7539:31;;:20;7551:7;7539:11;:20::i;:::-;:31;;;7483:87;7475:96;;;7317:261;;;;:::o;10242:605::-;10396:4;10369:31;;:23;10384:7;10369:14;:23::i;:::-;:31;;;10361:81;;;;;;;;;;;;:::i;:::-;;;;;;;;;10474:1;10460:16;;:2;:16;;;10452:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;10528:39;10549:4;10555:2;10559:7;10528:20;:39::i;:::-;10629:29;10646:1;10650:7;10629:8;:29::i;:::-;10688:1;10669:9;:15;10679:4;10669:15;;;;;;;;;;;;;;;;:20;;;;;;;:::i;:::-;;;;;;;;10716:1;10699:9;:13;10709:2;10699:13;;;;;;;;;;;;;;;;:18;;;;;;;:::i;:::-;;;;;;;;10746:2;10727:7;:16;10735:7;10727:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;10783:7;10779:2;10764:27;;10773:4;10764:27;;;;;;;;;;;;10802:38;10822:4;10828:2;10832:7;10802:19;:38::i;:::-;10242:605;;;:::o;1359:130:0:-;1433:12;:10;:12::i;:::-;1422:23;;:7;:5;:7::i;:::-;:23;;;1414:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1359:130::o;2433:187::-;2506:16;2525:6;;;;;;;;;;;2506:25;;2550:8;2541:6;;:17;;;;;;;;;;;;;;;;;;2604:8;2573:40;;2594:8;2573:40;;;;;;;;;;;;2496:124;2433:187;:::o;11266:307:1:-;11416:8;11407:17;;:5;:17;;;11399:55;;;;;;;;;;;;:::i;:::-;;;;;;;;;11502:8;11464:18;:25;11483:5;11464:25;;;;;;;;;;;;;;;:35;11490:8;11464:35;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;11547:8;11525:41;;11540:5;11525:41;;;11557:8;11525:41;;;;;;:::i;:::-;;;;;;;;11266:307;;;:::o;6426:305::-;6576:28;6586:4;6592:2;6596:7;6576:9;:28::i;:::-;6622:47;6645:4;6651:2;6655:7;6664:4;6622:22;:47::i;:::-;6614:110;;;;;;;;;;;;:::i;:::-;;;;;;;;;6426:305;;;;:::o;482:608:5:-;555:13;580:23;595:7;580:14;:23::i;:::-;614;640:10;:19;651:7;640:19;;;;;;;;;;;614:45;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;669:18;690:10;:8;:10::i;:::-;669:31;;795:1;779:4;773:18;:23;769:70;;819:9;812:16;;;;;;769:70;967:1;947:9;941:23;:27;937:106;;;1015:4;1021:9;998:33;;;;;;;;;:::i;:::-;;;;;;;;;;;;;984:48;;;;;;937:106;1060:23;1075:7;1060:14;:23::i;:::-;1053:30;;;;482:608;;;;:::o;945:123:10:-;1050:1;1032:7;:14;;;:19;;;;;;;;;;;945:123;:::o;827:112::-;892:7;918;:14;;;911:21;;827:112;;;:::o;8868:427:1:-;8961:1;8947:16;;:2;:16;;;8939:61;;;;;;;;;;;;:::i;:::-;;;;;;;;;9019:16;9027:7;9019;:16::i;:::-;9018:17;9010:58;;;;;;;;;;;;:::i;:::-;;;;;;;;;9079:45;9108:1;9112:2;9116:7;9079:20;:45::i;:::-;9152:1;9135:9;:13;9145:2;9135:13;;;;;;;;;;;;;;;;:18;;;;;;;:::i;:::-;;;;;;;;9182:2;9163:7;:16;9171:7;9163:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;9225:7;9221:2;9200:33;;9217:1;9200:33;;;;;;;;;;;;9244:44;9272:1;9276:2;9280:7;9244:19;:44::i;:::-;8868:427;;:::o;1237:214:5:-;1336:16;1344:7;1336;:16::i;:::-;1328:75;;;;;;;;;;;;:::i;:::-;;;;;;;;;1435:9;1413:10;:19;1424:7;1413:19;;;;;;;;;;;:31;;;;;;:::i;:::-;;1237:214;;:::o;1570:300:1:-;1672:4;1722:25;1707:40;;;:11;:40;;;;:104;;;;1778:33;1763:48;;;:11;:48;;;;1707:104;:156;;;;1827:36;1851:11;1827:23;:36::i;:::-;1707:156;1688:175;;1570:300;;;:::o;7034:125::-;7099:4;7150:1;7122:30;;:7;:16;7130:7;7122:16;;;;;;;;;;;;;;;;;;;;;:30;;;;7115:37;;7034:125;;;:::o;586:215:14:-;749:45;776:4;782:2;786:7;749:26;:45::i;:::-;586:215;;;:::o;14223:121:1:-;;;;:::o;12342:831::-;12491:4;12511:15;:2;:13;;;:15::i;:::-;12507:660;;;12562:2;12546:36;;;12583:12;:10;:12::i;:::-;12597:4;12603:7;12612:4;12546:71;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;12542:573;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12801:1;12784:6;:13;:18;12780:321;;12826:60;;;;;;;;;;:::i;:::-;;;;;;;;12780:321;13053:6;13047:13;13038:6;13034:2;13030:15;13023:38;12542:573;12677:41;;;12667:51;;;:6;:51;;;;12660:58;;;;;12507:660;13152:4;13145:11;;12342:831;;;;;;;:::o;3318:92::-;3369:13;3394:9;;;;;;;;;;;;;;3318:92;:::o;2800:276::-;2873:13;2898:23;2913:7;2898:14;:23::i;:::-;2932:21;2956:10;:8;:10::i;:::-;2932:34;;3007:1;2989:7;2983:21;:25;:86;;;;;;;;;;;;;;;;;3035:7;3044:18;:7;:16;:18::i;:::-;3018:45;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2983:86;2976:93;;;2800:276;;;:::o;829:155:12:-;914:4;952:25;937:40;;;:11;:40;;;;930:47;;829:155;;;:::o;2624:572:4:-;2763:45;2790:4;2796:2;2800:7;2763:26;:45::i;:::-;2839:1;2823:18;;:4;:18;;;2819:183;;2857:40;2889:7;2857:31;:40::i;:::-;2819:183;;;2926:2;2918:10;;:4;:10;;;2914:88;;2944:47;2977:4;2983:7;2944:32;:47::i;:::-;2914:88;2819:183;3029:1;3015:16;;:2;:16;;;3011:179;;3047:45;3084:7;3047:36;:45::i;:::-;3011:179;;;3119:4;3113:10;;:2;:10;;;3109:81;;3139:40;3167:2;3171:7;3139:27;:40::i;:::-;3109:81;3011:179;2624:572;;;:::o;1175:320:8:-;1235:4;1487:1;1465:7;:19;;;:23;1458:30;;1175:320;;;:::o;392:703:11:-;448:13;674:1;665:5;:10;661:51;;691:10;;;;;;;;;;;;;;;;;;;;;661:51;721:12;736:5;721:20;;751:14;775:75;790:1;782:4;:9;775:75;;807:8;;;;;:::i;:::-;;;;837:2;829:10;;;;;:::i;:::-;;;775:75;;;859:19;891:6;881:17;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;859:39;;908:150;924:1;915:5;:10;908:150;;951:1;941:11;;;;;:::i;:::-;;;1017:2;1009:5;:10;;;;:::i;:::-;996:2;:24;;;;:::i;:::-;983:39;;966:6;973;966:14;;;;;;;;:::i;:::-;;;;;:56;;;;;;;;;;;1045:2;1036:11;;;;;:::i;:::-;;;908:150;;;1081:6;1067:21;;;;;392:703;;;;:::o;13729:122:1:-;;;;:::o;3902:161:4:-;4005:10;:17;;;;3978:15;:24;3994:7;3978:24;;;;;;;;;;;:44;;;;4032:10;4048:7;4032:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3902:161;:::o;4680:970::-;4942:22;4992:1;4967:22;4984:4;4967:16;:22::i;:::-;:26;;;;:::i;:::-;4942:51;;5003:18;5024:17;:26;5042:7;5024:26;;;;;;;;;;;;5003:47;;5168:14;5154:10;:28;5150:323;;5198:19;5220:12;:18;5233:4;5220:18;;;;;;;;;;;;;;;:34;5239:14;5220:34;;;;;;;;;;;;5198:56;;5302:11;5269:12;:18;5282:4;5269:18;;;;;;;;;;;;;;;:30;5288:10;5269:30;;;;;;;;;;;:44;;;;5418:10;5385:17;:30;5403:11;5385:30;;;;;;;;;;;:43;;;;5184:289;5150:323;5566:17;:26;5584:7;5566:26;;;;;;;;;;;5559:33;;;5609:12;:18;5622:4;5609:18;;;;;;;;;;;;;;;:34;5628:14;5609:34;;;;;;;;;;;5602:41;;;4761:889;;4680:970;;:::o;5938:1061::-;6187:22;6232:1;6212:10;:17;;;;:21;;;;:::i;:::-;6187:46;;6243:18;6264:15;:24;6280:7;6264:24;;;;;;;;;;;;6243:45;;6610:19;6632:10;6643:14;6632:26;;;;;;;;:::i;:::-;;;;;;;;;;6610:48;;6694:11;6669:10;6680;6669:22;;;;;;;;:::i;:::-;;;;;;;;;:36;;;;6804:10;6773:15;:28;6789:11;6773:28;;;;;;;;;;;:41;;;;6942:15;:24;6958:7;6942:24;;;;;;;;;;;6935:31;;;6976:10;:16;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;6009:990;;;5938:1061;:::o;3490:217::-;3574:14;3591:20;3608:2;3591:16;:20::i;:::-;3574:37;;3648:7;3621:12;:16;3634:2;3621:16;;;;;;;;;;;;;;;:24;3638:6;3621:24;;;;;;;;;;;:34;;;;3694:6;3665:17;:26;3683:7;3665:26;;;;;;;;;;;:35;;;;3564:143;3490:217;;:::o;7:75:16:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:149;370:7;410:66;403:5;399:78;388:89;;334:149;;;:::o;489:120::-;561:23;578:5;561:23;:::i;:::-;554:5;551:34;541:62;;599:1;596;589:12;541:62;489:120;:::o;615:137::-;660:5;698:6;685:20;676:29;;714:32;740:5;714:32;:::i;:::-;615:137;;;;:::o;758:327::-;816:6;865:2;853:9;844:7;840:23;836:32;833:119;;;871:79;;:::i;:::-;833:119;991:1;1016:52;1060:7;1051:6;1040:9;1036:22;1016:52;:::i;:::-;1006:62;;962:116;758:327;;;;:::o;1091:90::-;1125:7;1168:5;1161:13;1154:21;1143:32;;1091:90;;;:::o;1187:109::-;1268:21;1283:5;1268:21;:::i;:::-;1263:3;1256:34;1187:109;;:::o;1302:210::-;1389:4;1427:2;1416:9;1412:18;1404:26;;1440:65;1502:1;1491:9;1487:17;1478:6;1440:65;:::i;:::-;1302:210;;;;:::o;1518:99::-;1570:6;1604:5;1598:12;1588:22;;1518:99;;;:::o;1623:169::-;1707:11;1741:6;1736:3;1729:19;1781:4;1776:3;1772:14;1757:29;;1623:169;;;;:::o;1798:307::-;1866:1;1876:113;1890:6;1887:1;1884:13;1876:113;;;1975:1;1970:3;1966:11;1960:18;1956:1;1951:3;1947:11;1940:39;1912:2;1909:1;1905:10;1900:15;;1876:113;;;2007:6;2004:1;2001:13;1998:101;;;2087:1;2078:6;2073:3;2069:16;2062:27;1998:101;1847:258;1798:307;;;:::o;2111:102::-;2152:6;2203:2;2199:7;2194:2;2187:5;2183:14;2179:28;2169:38;;2111:102;;;:::o;2219:364::-;2307:3;2335:39;2368:5;2335:39;:::i;:::-;2390:71;2454:6;2449:3;2390:71;:::i;:::-;2383:78;;2470:52;2515:6;2510:3;2503:4;2496:5;2492:16;2470:52;:::i;:::-;2547:29;2569:6;2547:29;:::i;:::-;2542:3;2538:39;2531:46;;2311:272;2219:364;;;;:::o;2589:313::-;2702:4;2740:2;2729:9;2725:18;2717:26;;2789:9;2783:4;2779:20;2775:1;2764:9;2760:17;2753:47;2817:78;2890:4;2881:6;2817:78;:::i;:::-;2809:86;;2589:313;;;;:::o;2908:77::-;2945:7;2974:5;2963:16;;2908:77;;;:::o;2991:122::-;3064:24;3082:5;3064:24;:::i;:::-;3057:5;3054:35;3044:63;;3103:1;3100;3093:12;3044:63;2991:122;:::o;3119:139::-;3165:5;3203:6;3190:20;3181:29;;3219:33;3246:5;3219:33;:::i;:::-;3119:139;;;;:::o;3264:329::-;3323:6;3372:2;3360:9;3351:7;3347:23;3343:32;3340:119;;;3378:79;;:::i;:::-;3340:119;3498:1;3523:53;3568:7;3559:6;3548:9;3544:22;3523:53;:::i;:::-;3513:63;;3469:117;3264:329;;;;:::o;3599:126::-;3636:7;3676:42;3669:5;3665:54;3654:65;;3599:126;;;:::o;3731:96::-;3768:7;3797:24;3815:5;3797:24;:::i;:::-;3786:35;;3731:96;;;:::o;3833:118::-;3920:24;3938:5;3920:24;:::i;:::-;3915:3;3908:37;3833:118;;:::o;3957:222::-;4050:4;4088:2;4077:9;4073:18;4065:26;;4101:71;4169:1;4158:9;4154:17;4145:6;4101:71;:::i;:::-;3957:222;;;;:::o;4185:122::-;4258:24;4276:5;4258:24;:::i;:::-;4251:5;4248:35;4238:63;;4297:1;4294;4287:12;4238:63;4185:122;:::o;4313:139::-;4359:5;4397:6;4384:20;4375:29;;4413:33;4440:5;4413:33;:::i;:::-;4313:139;;;;:::o;4458:474::-;4526:6;4534;4583:2;4571:9;4562:7;4558:23;4554:32;4551:119;;;4589:79;;:::i;:::-;4551:119;4709:1;4734:53;4779:7;4770:6;4759:9;4755:22;4734:53;:::i;:::-;4724:63;;4680:117;4836:2;4862:53;4907:7;4898:6;4887:9;4883:22;4862:53;:::i;:::-;4852:63;;4807:118;4458:474;;;;;:::o;4938:118::-;5025:24;5043:5;5025:24;:::i;:::-;5020:3;5013:37;4938:118;;:::o;5062:222::-;5155:4;5193:2;5182:9;5178:18;5170:26;;5206:71;5274:1;5263:9;5259:17;5250:6;5206:71;:::i;:::-;5062:222;;;;:::o;5290:619::-;5367:6;5375;5383;5432:2;5420:9;5411:7;5407:23;5403:32;5400:119;;;5438:79;;:::i;:::-;5400:119;5558:1;5583:53;5628:7;5619:6;5608:9;5604:22;5583:53;:::i;:::-;5573:63;;5529:117;5685:2;5711:53;5756:7;5747:6;5736:9;5732:22;5711:53;:::i;:::-;5701:63;;5656:118;5813:2;5839:53;5884:7;5875:6;5864:9;5860:22;5839:53;:::i;:::-;5829:63;;5784:118;5290:619;;;;;:::o;5915:329::-;5974:6;6023:2;6011:9;6002:7;5998:23;5994:32;5991:119;;;6029:79;;:::i;:::-;5991:119;6149:1;6174:53;6219:7;6210:6;6199:9;6195:22;6174:53;:::i;:::-;6164:63;;6120:117;5915:329;;;;:::o;6250:116::-;6320:21;6335:5;6320:21;:::i;:::-;6313:5;6310:32;6300:60;;6356:1;6353;6346:12;6300:60;6250:116;:::o;6372:133::-;6415:5;6453:6;6440:20;6431:29;;6469:30;6493:5;6469:30;:::i;:::-;6372:133;;;;:::o;6511:468::-;6576:6;6584;6633:2;6621:9;6612:7;6608:23;6604:32;6601:119;;;6639:79;;:::i;:::-;6601:119;6759:1;6784:53;6829:7;6820:6;6809:9;6805:22;6784:53;:::i;:::-;6774:63;;6730:117;6886:2;6912:50;6954:7;6945:6;6934:9;6930:22;6912:50;:::i;:::-;6902:60;;6857:115;6511:468;;;;;:::o;6985:117::-;7094:1;7091;7084:12;7108:117;7217:1;7214;7207:12;7231:180;7279:77;7276:1;7269:88;7376:4;7373:1;7366:15;7400:4;7397:1;7390:15;7417:281;7500:27;7522:4;7500:27;:::i;:::-;7492:6;7488:40;7630:6;7618:10;7615:22;7594:18;7582:10;7579:34;7576:62;7573:88;;;7641:18;;:::i;:::-;7573:88;7681:10;7677:2;7670:22;7460:238;7417:281;;:::o;7704:129::-;7738:6;7765:20;;:::i;:::-;7755:30;;7794:33;7822:4;7814:6;7794:33;:::i;:::-;7704:129;;;:::o;7839:307::-;7900:4;7990:18;7982:6;7979:30;7976:56;;;8012:18;;:::i;:::-;7976:56;8050:29;8072:6;8050:29;:::i;:::-;8042:37;;8134:4;8128;8124:15;8116:23;;7839:307;;;:::o;8152:154::-;8236:6;8231:3;8226;8213:30;8298:1;8289:6;8284:3;8280:16;8273:27;8152:154;;;:::o;8312:410::-;8389:5;8414:65;8430:48;8471:6;8430:48;:::i;:::-;8414:65;:::i;:::-;8405:74;;8502:6;8495:5;8488:21;8540:4;8533:5;8529:16;8578:3;8569:6;8564:3;8560:16;8557:25;8554:112;;;8585:79;;:::i;:::-;8554:112;8675:41;8709:6;8704:3;8699;8675:41;:::i;:::-;8395:327;8312:410;;;;;:::o;8741:338::-;8796:5;8845:3;8838:4;8830:6;8826:17;8822:27;8812:122;;8853:79;;:::i;:::-;8812:122;8970:6;8957:20;8995:78;9069:3;9061:6;9054:4;9046:6;9042:17;8995:78;:::i;:::-;8986:87;;8802:277;8741:338;;;;:::o;9085:943::-;9180:6;9188;9196;9204;9253:3;9241:9;9232:7;9228:23;9224:33;9221:120;;;9260:79;;:::i;:::-;9221:120;9380:1;9405:53;9450:7;9441:6;9430:9;9426:22;9405:53;:::i;:::-;9395:63;;9351:117;9507:2;9533:53;9578:7;9569:6;9558:9;9554:22;9533:53;:::i;:::-;9523:63;;9478:118;9635:2;9661:53;9706:7;9697:6;9686:9;9682:22;9661:53;:::i;:::-;9651:63;;9606:118;9791:2;9780:9;9776:18;9763:32;9822:18;9814:6;9811:30;9808:117;;;9844:79;;:::i;:::-;9808:117;9949:62;10003:7;9994:6;9983:9;9979:22;9949:62;:::i;:::-;9939:72;;9734:287;9085:943;;;;;;;:::o;10034:474::-;10102:6;10110;10159:2;10147:9;10138:7;10134:23;10130:32;10127:119;;;10165:79;;:::i;:::-;10127:119;10285:1;10310:53;10355:7;10346:6;10335:9;10331:22;10310:53;:::i;:::-;10300:63;;10256:117;10412:2;10438:53;10483:7;10474:6;10463:9;10459:22;10438:53;:::i;:::-;10428:63;;10383:118;10034:474;;;;;:::o;10514:308::-;10576:4;10666:18;10658:6;10655:30;10652:56;;;10688:18;;:::i;:::-;10652:56;10726:29;10748:6;10726:29;:::i;:::-;10718:37;;10810:4;10804;10800:15;10792:23;;10514:308;;;:::o;10828:412::-;10906:5;10931:66;10947:49;10989:6;10947:49;:::i;:::-;10931:66;:::i;:::-;10922:75;;11020:6;11013:5;11006:21;11058:4;11051:5;11047:16;11096:3;11087:6;11082:3;11078:16;11075:25;11072:112;;;11103:79;;:::i;:::-;11072:112;11193:41;11227:6;11222:3;11217;11193:41;:::i;:::-;10912:328;10828:412;;;;;:::o;11260:340::-;11316:5;11365:3;11358:4;11350:6;11346:17;11342:27;11332:122;;11373:79;;:::i;:::-;11332:122;11490:6;11477:20;11515:79;11590:3;11582:6;11575:4;11567:6;11563:17;11515:79;:::i;:::-;11506:88;;11322:278;11260:340;;;;:::o;11606:654::-;11684:6;11692;11741:2;11729:9;11720:7;11716:23;11712:32;11709:119;;;11747:79;;:::i;:::-;11709:119;11867:1;11892:53;11937:7;11928:6;11917:9;11913:22;11892:53;:::i;:::-;11882:63;;11838:117;12022:2;12011:9;12007:18;11994:32;12053:18;12045:6;12042:30;12039:117;;;12075:79;;:::i;:::-;12039:117;12180:63;12235:7;12226:6;12215:9;12211:22;12180:63;:::i;:::-;12170:73;;11965:288;11606:654;;;;;:::o;12266:180::-;12314:77;12311:1;12304:88;12411:4;12408:1;12401:15;12435:4;12432:1;12425:15;12452:320;12496:6;12533:1;12527:4;12523:12;12513:22;;12580:1;12574:4;12570:12;12601:18;12591:81;;12657:4;12649:6;12645:17;12635:27;;12591:81;12719:2;12711:6;12708:14;12688:18;12685:38;12682:84;;12738:18;;:::i;:::-;12682:84;12503:269;12452:320;;;:::o;12778:220::-;12918:34;12914:1;12906:6;12902:14;12895:58;12987:3;12982:2;12974:6;12970:15;12963:28;12778:220;:::o;13004:366::-;13146:3;13167:67;13231:2;13226:3;13167:67;:::i;:::-;13160:74;;13243:93;13332:3;13243:93;:::i;:::-;13361:2;13356:3;13352:12;13345:19;;13004:366;;;:::o;13376:419::-;13542:4;13580:2;13569:9;13565:18;13557:26;;13629:9;13623:4;13619:20;13615:1;13604:9;13600:17;13593:47;13657:131;13783:4;13657:131;:::i;:::-;13649:139;;13376:419;;;:::o;13801:249::-;13941:34;13937:1;13929:6;13925:14;13918:58;14010:32;14005:2;13997:6;13993:15;13986:57;13801:249;:::o;14056:366::-;14198:3;14219:67;14283:2;14278:3;14219:67;:::i;:::-;14212:74;;14295:93;14384:3;14295:93;:::i;:::-;14413:2;14408:3;14404:12;14397:19;;14056:366;;;:::o;14428:419::-;14594:4;14632:2;14621:9;14617:18;14609:26;;14681:9;14675:4;14671:20;14667:1;14656:9;14652:17;14645:47;14709:131;14835:4;14709:131;:::i;:::-;14701:139;;14428:419;;;:::o;14853:233::-;14993:34;14989:1;14981:6;14977:14;14970:58;15062:16;15057:2;15049:6;15045:15;15038:41;14853:233;:::o;15092:366::-;15234:3;15255:67;15319:2;15314:3;15255:67;:::i;:::-;15248:74;;15331:93;15420:3;15331:93;:::i;:::-;15449:2;15444:3;15440:12;15433:19;;15092:366;;;:::o;15464:419::-;15630:4;15668:2;15657:9;15653:18;15645:26;;15717:9;15711:4;15707:20;15703:1;15692:9;15688:17;15681:47;15745:131;15871:4;15745:131;:::i;:::-;15737:139;;15464:419;;;:::o;15889:230::-;16029:34;16025:1;16017:6;16013:14;16006:58;16098:13;16093:2;16085:6;16081:15;16074:38;15889:230;:::o;16125:366::-;16267:3;16288:67;16352:2;16347:3;16288:67;:::i;:::-;16281:74;;16364:93;16453:3;16364:93;:::i;:::-;16482:2;16477:3;16473:12;16466:19;;16125:366;;;:::o;16497:419::-;16663:4;16701:2;16690:9;16686:18;16678:26;;16750:9;16744:4;16740:20;16736:1;16725:9;16721:17;16714:47;16778:131;16904:4;16778:131;:::i;:::-;16770:139;;16497:419;;;:::o;16922:231::-;17062:34;17058:1;17050:6;17046:14;17039:58;17131:14;17126:2;17118:6;17114:15;17107:39;16922:231;:::o;17159:366::-;17301:3;17322:67;17386:2;17381:3;17322:67;:::i;:::-;17315:74;;17398:93;17487:3;17398:93;:::i;:::-;17516:2;17511:3;17507:12;17500:19;;17159:366;;;:::o;17531:419::-;17697:4;17735:2;17724:9;17720:18;17712:26;;17784:9;17778:4;17774:20;17770:1;17759:9;17755:17;17748:47;17812:131;17938:4;17812:131;:::i;:::-;17804:139;;17531:419;;;:::o;17956:180::-;18004:77;18001:1;17994:88;18101:4;18098:1;18091:15;18125:4;18122:1;18115:15;18142:174;18282:26;18278:1;18270:6;18266:14;18259:50;18142:174;:::o;18322:366::-;18464:3;18485:67;18549:2;18544:3;18485:67;:::i;:::-;18478:74;;18561:93;18650:3;18561:93;:::i;:::-;18679:2;18674:3;18670:12;18663:19;;18322:366;;;:::o;18694:419::-;18860:4;18898:2;18887:9;18883:18;18875:26;;18947:9;18941:4;18937:20;18933:1;18922:9;18918:17;18911:47;18975:131;19101:4;18975:131;:::i;:::-;18967:139;;18694:419;;;:::o;19119:228::-;19259:34;19255:1;19247:6;19243:14;19236:58;19328:11;19323:2;19315:6;19311:15;19304:36;19119:228;:::o;19353:366::-;19495:3;19516:67;19580:2;19575:3;19516:67;:::i;:::-;19509:74;;19592:93;19681:3;19592:93;:::i;:::-;19710:2;19705:3;19701:12;19694:19;;19353:366;;;:::o;19725:419::-;19891:4;19929:2;19918:9;19914:18;19906:26;;19978:9;19972:4;19968:20;19964:1;19953:9;19949:17;19942:47;20006:131;20132:4;20006:131;:::i;:::-;19998:139;;19725:419;;;:::o;20150:225::-;20290:34;20286:1;20278:6;20274:14;20267:58;20359:8;20354:2;20346:6;20342:15;20335:33;20150:225;:::o;20381:366::-;20523:3;20544:67;20608:2;20603:3;20544:67;:::i;:::-;20537:74;;20620:93;20709:3;20620:93;:::i;:::-;20738:2;20733:3;20729:12;20722:19;;20381:366;;;:::o;20753:419::-;20919:4;20957:2;20946:9;20942:18;20934:26;;21006:9;21000:4;20996:20;20992:1;20981:9;20977:17;20970:47;21034:131;21160:4;21034:131;:::i;:::-;21026:139;;20753:419;;;:::o;21178:224::-;21318:34;21314:1;21306:6;21302:14;21295:58;21387:7;21382:2;21374:6;21370:15;21363:32;21178:224;:::o;21408:366::-;21550:3;21571:67;21635:2;21630:3;21571:67;:::i;:::-;21564:74;;21647:93;21736:3;21647:93;:::i;:::-;21765:2;21760:3;21756:12;21749:19;;21408:366;;;:::o;21780:419::-;21946:4;21984:2;21973:9;21969:18;21961:26;;22033:9;22027:4;22023:20;22019:1;22008:9;22004:17;21997:47;22061:131;22187:4;22061:131;:::i;:::-;22053:139;;21780:419;;;:::o;22205:223::-;22345:34;22341:1;22333:6;22329:14;22322:58;22414:6;22409:2;22401:6;22397:15;22390:31;22205:223;:::o;22434:366::-;22576:3;22597:67;22661:2;22656:3;22597:67;:::i;:::-;22590:74;;22673:93;22762:3;22673:93;:::i;:::-;22791:2;22786:3;22782:12;22775:19;;22434:366;;;:::o;22806:419::-;22972:4;23010:2;22999:9;22995:18;22987:26;;23059:9;23053:4;23049:20;23045:1;23034:9;23030:17;23023:47;23087:131;23213:4;23087:131;:::i;:::-;23079:139;;22806:419;;;:::o;23231:180::-;23279:77;23276:1;23269:88;23376:4;23373:1;23366:15;23400:4;23397:1;23390:15;23417:191;23457:4;23477:20;23495:1;23477:20;:::i;:::-;23472:25;;23511:20;23529:1;23511:20;:::i;:::-;23506:25;;23550:1;23547;23544:8;23541:34;;;23555:18;;:::i;:::-;23541:34;23600:1;23597;23593:9;23585:17;;23417:191;;;;:::o;23614:305::-;23654:3;23673:20;23691:1;23673:20;:::i;:::-;23668:25;;23707:20;23725:1;23707:20;:::i;:::-;23702:25;;23861:1;23793:66;23789:74;23786:1;23783:81;23780:107;;;23867:18;;:::i;:::-;23780:107;23911:1;23908;23904:9;23897:16;;23614:305;;;;:::o;23925:182::-;24065:34;24061:1;24053:6;24049:14;24042:58;23925:182;:::o;24113:366::-;24255:3;24276:67;24340:2;24335:3;24276:67;:::i;:::-;24269:74;;24352:93;24441:3;24352:93;:::i;:::-;24470:2;24465:3;24461:12;24454:19;;24113:366;;;:::o;24485:419::-;24651:4;24689:2;24678:9;24674:18;24666:26;;24738:9;24732:4;24728:20;24724:1;24713:9;24709:17;24702:47;24766:131;24892:4;24766:131;:::i;:::-;24758:139;;24485:419;;;:::o;24910:175::-;25050:27;25046:1;25038:6;25034:14;25027:51;24910:175;:::o;25091:366::-;25233:3;25254:67;25318:2;25313:3;25254:67;:::i;:::-;25247:74;;25330:93;25419:3;25330:93;:::i;:::-;25448:2;25443:3;25439:12;25432:19;;25091:366;;;:::o;25463:419::-;25629:4;25667:2;25656:9;25652:18;25644:26;;25716:9;25710:4;25706:20;25702:1;25691:9;25687:17;25680:47;25744:131;25870:4;25744:131;:::i;:::-;25736:139;;25463:419;;;:::o;25888:237::-;26028:34;26024:1;26016:6;26012:14;26005:58;26097:20;26092:2;26084:6;26080:15;26073:45;25888:237;:::o;26131:366::-;26273:3;26294:67;26358:2;26353:3;26294:67;:::i;:::-;26287:74;;26370:93;26459:3;26370:93;:::i;:::-;26488:2;26483:3;26479:12;26472:19;;26131:366;;;:::o;26503:419::-;26669:4;26707:2;26696:9;26692:18;26684:26;;26756:9;26750:4;26746:20;26742:1;26731:9;26727:17;26720:47;26784:131;26910:4;26784:131;:::i;:::-;26776:139;;26503:419;;;:::o;26928:148::-;27030:11;27067:3;27052:18;;26928:148;;;;:::o;27082:377::-;27188:3;27216:39;27249:5;27216:39;:::i;:::-;27271:89;27353:6;27348:3;27271:89;:::i;:::-;27264:96;;27369:52;27414:6;27409:3;27402:4;27395:5;27391:16;27369:52;:::i;:::-;27446:6;27441:3;27437:16;27430:23;;27192:267;27082:377;;;;:::o;27465:435::-;27645:3;27667:95;27758:3;27749:6;27667:95;:::i;:::-;27660:102;;27779:95;27870:3;27861:6;27779:95;:::i;:::-;27772:102;;27891:3;27884:10;;27465:435;;;;;:::o;27906:182::-;28046:34;28042:1;28034:6;28030:14;28023:58;27906:182;:::o;28094:366::-;28236:3;28257:67;28321:2;28316:3;28257:67;:::i;:::-;28250:74;;28333:93;28422:3;28333:93;:::i;:::-;28451:2;28446:3;28442:12;28435:19;;28094:366;;;:::o;28466:419::-;28632:4;28670:2;28659:9;28655:18;28647:26;;28719:9;28713:4;28709:20;28705:1;28694:9;28690:17;28683:47;28747:131;28873:4;28747:131;:::i;:::-;28739:139;;28466:419;;;:::o;28891:178::-;29031:30;29027:1;29019:6;29015:14;29008:54;28891:178;:::o;29075:366::-;29217:3;29238:67;29302:2;29297:3;29238:67;:::i;:::-;29231:74;;29314:93;29403:3;29314:93;:::i;:::-;29432:2;29427:3;29423:12;29416:19;;29075:366;;;:::o;29447:419::-;29613:4;29651:2;29640:9;29636:18;29628:26;;29700:9;29694:4;29690:20;29686:1;29675:9;29671:17;29664:47;29728:131;29854:4;29728:131;:::i;:::-;29720:139;;29447:419;;;:::o;29872:233::-;30012:34;30008:1;30000:6;29996:14;29989:58;30081:16;30076:2;30068:6;30064:15;30057:41;29872:233;:::o;30111:366::-;30253:3;30274:67;30338:2;30333:3;30274:67;:::i;:::-;30267:74;;30350:93;30439:3;30350:93;:::i;:::-;30468:2;30463:3;30459:12;30452:19;;30111:366;;;:::o;30483:419::-;30649:4;30687:2;30676:9;30672:18;30664:26;;30736:9;30730:4;30726:20;30722:1;30711:9;30707:17;30700:47;30764:131;30890:4;30764:131;:::i;:::-;30756:139;;30483:419;;;:::o;30908:141::-;30957:4;30980:3;30972:11;;31003:3;31000:1;30993:14;31037:4;31034:1;31024:18;31016:26;;30908:141;;;:::o;31055:93::-;31092:6;31139:2;31134;31127:5;31123:14;31119:23;31109:33;;31055:93;;;:::o;31154:107::-;31198:8;31248:5;31242:4;31238:16;31217:37;;31154:107;;;;:::o;31267:393::-;31336:6;31386:1;31374:10;31370:18;31409:97;31439:66;31428:9;31409:97;:::i;:::-;31527:39;31557:8;31546:9;31527:39;:::i;:::-;31515:51;;31599:4;31595:9;31588:5;31584:21;31575:30;;31648:4;31638:8;31634:19;31627:5;31624:30;31614:40;;31343:317;;31267:393;;;;;:::o;31666:60::-;31694:3;31715:5;31708:12;;31666:60;;;:::o;31732:142::-;31782:9;31815:53;31833:34;31842:24;31860:5;31842:24;:::i;:::-;31833:34;:::i;:::-;31815:53;:::i;:::-;31802:66;;31732:142;;;:::o;31880:75::-;31923:3;31944:5;31937:12;;31880:75;;;:::o;31961:269::-;32071:39;32102:7;32071:39;:::i;:::-;32132:91;32181:41;32205:16;32181:41;:::i;:::-;32173:6;32166:4;32160:11;32132:91;:::i;:::-;32126:4;32119:105;32037:193;31961:269;;;:::o;32236:73::-;32281:3;32236:73;:::o;32315:189::-;32392:32;;:::i;:::-;32433:65;32491:6;32483;32477:4;32433:65;:::i;:::-;32368:136;32315:189;;:::o;32510:186::-;32570:120;32587:3;32580:5;32577:14;32570:120;;;32641:39;32678:1;32671:5;32641:39;:::i;:::-;32614:1;32607:5;32603:13;32594:22;;32570:120;;;32510:186;;:::o;32702:543::-;32803:2;32798:3;32795:11;32792:446;;;32837:38;32869:5;32837:38;:::i;:::-;32921:29;32939:10;32921:29;:::i;:::-;32911:8;32907:44;33104:2;33092:10;33089:18;33086:49;;;33125:8;33110:23;;33086:49;33148:80;33204:22;33222:3;33204:22;:::i;:::-;33194:8;33190:37;33177:11;33148:80;:::i;:::-;32807:431;;32792:446;32702:543;;;:::o;33251:117::-;33305:8;33355:5;33349:4;33345:16;33324:37;;33251:117;;;;:::o;33374:169::-;33418:6;33451:51;33499:1;33495:6;33487:5;33484:1;33480:13;33451:51;:::i;:::-;33447:56;33532:4;33526;33522:15;33512:25;;33425:118;33374:169;;;;:::o;33548:295::-;33624:4;33770:29;33795:3;33789:4;33770:29;:::i;:::-;33762:37;;33832:3;33829:1;33825:11;33819:4;33816:21;33808:29;;33548:295;;;;:::o;33848:1395::-;33965:37;33998:3;33965:37;:::i;:::-;34067:18;34059:6;34056:30;34053:56;;;34089:18;;:::i;:::-;34053:56;34133:38;34165:4;34159:11;34133:38;:::i;:::-;34218:67;34278:6;34270;34264:4;34218:67;:::i;:::-;34312:1;34336:4;34323:17;;34368:2;34360:6;34357:14;34385:1;34380:618;;;;35042:1;35059:6;35056:77;;;35108:9;35103:3;35099:19;35093:26;35084:35;;35056:77;35159:67;35219:6;35212:5;35159:67;:::i;:::-;35153:4;35146:81;35015:222;34350:887;;34380:618;34432:4;34428:9;34420:6;34416:22;34466:37;34498:4;34466:37;:::i;:::-;34525:1;34539:208;34553:7;34550:1;34547:14;34539:208;;;34632:9;34627:3;34623:19;34617:26;34609:6;34602:42;34683:1;34675:6;34671:14;34661:24;;34730:2;34719:9;34715:18;34702:31;;34576:4;34573:1;34569:12;34564:17;;34539:208;;;34775:6;34766:7;34763:19;34760:179;;;34833:9;34828:3;34824:19;34818:26;34876:48;34918:4;34910:6;34906:17;34895:9;34876:48;:::i;:::-;34868:6;34861:64;34783:156;34760:179;34985:1;34981;34973:6;34969:14;34965:22;34959:4;34952:36;34387:611;;;34350:887;;33940:1303;;;33848:1395;;:::o;35249:98::-;35300:6;35334:5;35328:12;35318:22;;35249:98;;;:::o;35353:168::-;35436:11;35470:6;35465:3;35458:19;35510:4;35505:3;35501:14;35486:29;;35353:168;;;;:::o;35527:360::-;35613:3;35641:38;35673:5;35641:38;:::i;:::-;35695:70;35758:6;35753:3;35695:70;:::i;:::-;35688:77;;35774:52;35819:6;35814:3;35807:4;35800:5;35796:16;35774:52;:::i;:::-;35851:29;35873:6;35851:29;:::i;:::-;35846:3;35842:39;35835:46;;35617:270;35527:360;;;;:::o;35893:640::-;36088:4;36126:3;36115:9;36111:19;36103:27;;36140:71;36208:1;36197:9;36193:17;36184:6;36140:71;:::i;:::-;36221:72;36289:2;36278:9;36274:18;36265:6;36221:72;:::i;:::-;36303;36371:2;36360:9;36356:18;36347:6;36303:72;:::i;:::-;36422:9;36416:4;36412:20;36407:2;36396:9;36392:18;36385:48;36450:76;36521:4;36512:6;36450:76;:::i;:::-;36442:84;;35893:640;;;;;;;:::o;36539:141::-;36595:5;36626:6;36620:13;36611:22;;36642:32;36668:5;36642:32;:::i;:::-;36539:141;;;;:::o;36686:349::-;36755:6;36804:2;36792:9;36783:7;36779:23;36775:32;36772:119;;;36810:79;;:::i;:::-;36772:119;36930:1;36955:63;37010:7;37001:6;36990:9;36986:22;36955:63;:::i;:::-;36945:73;;36901:127;36686:349;;;;:::o;37041:233::-;37080:3;37103:24;37121:5;37103:24;:::i;:::-;37094:33;;37149:66;37142:5;37139:77;37136:103;;37219:18;;:::i;:::-;37136:103;37266:1;37259:5;37255:13;37248:20;;37041:233;;;:::o;37280:180::-;37328:77;37325:1;37318:88;37425:4;37422:1;37415:15;37449:4;37446:1;37439:15;37466:185;37506:1;37523:20;37541:1;37523:20;:::i;:::-;37518:25;;37557:20;37575:1;37557:20;:::i;:::-;37552:25;;37596:1;37586:35;;37601:18;;:::i;:::-;37586:35;37643:1;37640;37636:9;37631:14;;37466:185;;;;:::o;37657:176::-;37689:1;37706:20;37724:1;37706:20;:::i;:::-;37701:25;;37740:20;37758:1;37740:20;:::i;:::-;37735:25;;37779:1;37769:35;;37784:18;;:::i;:::-;37769:35;37825:1;37822;37818:9;37813:14;;37657:176;;;;:::o;37839:180::-;37887:77;37884:1;37877:88;37984:4;37981:1;37974:15;38008:4;38005:1;37998:15",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.7;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol\";\nimport \"@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol\";\n\ncontract LeaSeaNFT is ERC721URIStorage, Ownable, ERC721Enumerable {\n    using Counters for Counters.Counter;\n    Counters.Counter private _tokenIds;\n\n    constructor() public ERC721(\"cozNFT\", \"NFT\"){}\n\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 tokenId\n    ) internal\n      override(ERC721, ERC721Enumerable) {\n        super._beforeTokenTransfer(from, to, tokenId);\n    }\n\n    function _burn(\n        uint256 tokenId\n    ) internal\n      override(ERC721, ERC721URIStorage) {\n        super._burn(tokenId);\n    }\n\n  function supportsInterface(bytes4 interfaceId)\n        public\n        view\n        override(ERC721, ERC721Enumerable)\n        returns (bool)\n    {\n        return super.supportsInterface(interfaceId);\n    }\n    function tokenURI(\n        uint256 tokenId\n    ) public view\n      override(ERC721, ERC721URIStorage) returns (string memory) {\n        return super.tokenURI(tokenId);\n    }\n    \n    function mintNFT(address recipient, string memory tokenURI) public returns (uint256) {\n        _tokenIds.increment();\n\n        uint256 newItemId = _tokenIds.current();\n        _mint(recipient, newItemId);\n        _setTokenURI(newItemId, tokenURI);\n\n        return newItemId;\n    }\n}",
  "sourcePath": "/Users/rokrokss/workspace/hyein/BEB-05-LeeSea/contract/contracts/LeeSeaNFT.sol",
  "ast": {
    "absolutePath": "project:/contracts/LeeSeaNFT.sol",
    "exportedSymbols": {
      "Address": [
        1929
      ],
      "Context": [
        1951
      ],
      "Counters": [
        2025
      ],
      "ERC165": [
        2275
      ],
      "ERC721": [
        979
      ],
      "ERC721Enumerable": [
        1451
      ],
      "ERC721URIStorage": [
        1576
      ],
      "IERC165": [
        2287
      ],
      "IERC721": [
        1095
      ],
      "IERC721Enumerable": [
        1607
      ],
      "IERC721Metadata": [
        1634
      ],
      "IERC721Receiver": [
        1113
      ],
      "LeaSeaNFT": [
        2417
      ],
      "Ownable": [
        112
      ],
      "Strings": [
        2251
      ]
    },
    "id": 2418,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2289,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:14"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 2290,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2418,
        "sourceUnit": 980,
        "src": "57:57:14",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
        "file": "@openzeppelin/contracts/utils/Counters.sol",
        "id": 2291,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2418,
        "sourceUnit": 2026,
        "src": "115:52:14",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 2292,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2418,
        "sourceUnit": 113,
        "src": "168:52:14",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
        "file": "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
        "id": 2293,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2418,
        "sourceUnit": 1577,
        "src": "221:78:14",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol",
        "file": "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol",
        "id": 2294,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2418,
        "sourceUnit": 1452,
        "src": "300:78:14",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 2295,
              "name": "ERC721URIStorage",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1576,
              "src": "402:16:14"
            },
            "id": 2296,
            "nodeType": "InheritanceSpecifier",
            "src": "402:16:14"
          },
          {
            "baseName": {
              "id": 2297,
              "name": "Ownable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 112,
              "src": "420:7:14"
            },
            "id": 2298,
            "nodeType": "InheritanceSpecifier",
            "src": "420:7:14"
          },
          {
            "baseName": {
              "id": 2299,
              "name": "ERC721Enumerable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1451,
              "src": "429:16:14"
            },
            "id": 2300,
            "nodeType": "InheritanceSpecifier",
            "src": "429:16:14"
          }
        ],
        "canonicalName": "LeaSeaNFT",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 2417,
        "linearizedBaseContracts": [
          2417,
          1451,
          1607,
          112,
          1576,
          979,
          1634,
          1095,
          2275,
          2287,
          1951
        ],
        "name": "LeaSeaNFT",
        "nameLocation": "389:9:14",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "global": false,
            "id": 2304,
            "libraryName": {
              "id": 2301,
              "name": "Counters",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2025,
              "src": "458:8:14"
            },
            "nodeType": "UsingForDirective",
            "src": "452:36:14",
            "typeName": {
              "id": 2303,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 2302,
                "name": "Counters.Counter",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 1957,
                "src": "471:16:14"
              },
              "referencedDeclaration": 1957,
              "src": "471:16:14",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$1957_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            }
          },
          {
            "constant": false,
            "id": 2307,
            "mutability": "mutable",
            "name": "_tokenIds",
            "nameLocation": "518:9:14",
            "nodeType": "VariableDeclaration",
            "scope": 2417,
            "src": "493:34:14",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Counter_$1957_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "id": 2306,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 2305,
                "name": "Counters.Counter",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 1957,
                "src": "493:16:14"
              },
              "referencedDeclaration": 1957,
              "src": "493:16:14",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$1957_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            },
            "visibility": "private"
          },
          {
            "body": {
              "id": 2314,
              "nodeType": "Block",
              "src": "578:2:14",
              "statements": []
            },
            "id": 2315,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "hexValue": "636f7a4e4654",
                    "id": 2310,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "562:8:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_f40ca1377b3a27d3fa25c983f926f9f4199a40896c807014b8bd267bdc0b3c1e",
                      "typeString": "literal_string \"cozNFT\""
                    },
                    "value": "cozNFT"
                  },
                  {
                    "hexValue": "4e4654",
                    "id": 2311,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "572:5:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_9c4138cd0a1311e4748f70d0fe3dc55f0f5f75e0f20db731225cbc3b8914016a",
                      "typeString": "literal_string \"NFT\""
                    },
                    "value": "NFT"
                  }
                ],
                "id": 2312,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 2309,
                  "name": "ERC721",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 979,
                  "src": "555:6:14"
                },
                "nodeType": "ModifierInvocation",
                "src": "555:23:14"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2308,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "545:2:14"
            },
            "returnParameters": {
              "id": 2313,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "578:0:14"
            },
            "scope": 2417,
            "src": "534:46:14",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              967,
              1289
            ],
            "body": {
              "id": 2335,
              "nodeType": "Block",
              "src": "739:62:14",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2330,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2317,
                        "src": "776:4:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2331,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2319,
                        "src": "782:2:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2332,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2321,
                        "src": "786:7:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 2327,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967271,
                        "src": "749:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_LeaSeaNFT_$2417_$",
                          "typeString": "type(contract super LeaSeaNFT)"
                        }
                      },
                      "id": 2329,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_beforeTokenTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1289,
                      "src": "749:26:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 2333,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "749:45:14",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2334,
                  "nodeType": "ExpressionStatement",
                  "src": "749:45:14"
                }
              ]
            },
            "id": 2336,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_beforeTokenTransfer",
            "nameLocation": "595:20:14",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 2325,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 2323,
                  "name": "ERC721",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 979,
                  "src": "713:6:14"
                },
                {
                  "id": 2324,
                  "name": "ERC721Enumerable",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1451,
                  "src": "721:16:14"
                }
              ],
              "src": "704:34:14"
            },
            "parameters": {
              "id": 2322,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2317,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "633:4:14",
                  "nodeType": "VariableDeclaration",
                  "scope": 2336,
                  "src": "625:12:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2316,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "625:7:14",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2319,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "655:2:14",
                  "nodeType": "VariableDeclaration",
                  "scope": 2336,
                  "src": "647:10:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2318,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "647:7:14",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2321,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "675:7:14",
                  "nodeType": "VariableDeclaration",
                  "scope": 2336,
                  "src": "667:15:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2320,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "667:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "615:73:14"
            },
            "returnParameters": {
              "id": 2326,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "739:0:14"
            },
            "scope": 2417,
            "src": "586:215:14",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              749,
              1575
            ],
            "body": {
              "id": 2350,
              "nodeType": "Block",
              "src": "903:37:14",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2347,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2338,
                        "src": "925:7:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 2344,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967271,
                        "src": "913:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_LeaSeaNFT_$2417_$",
                          "typeString": "type(contract super LeaSeaNFT)"
                        }
                      },
                      "id": 2346,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_burn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1575,
                      "src": "913:11:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 2348,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "913:20:14",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2349,
                  "nodeType": "ExpressionStatement",
                  "src": "913:20:14"
                }
              ]
            },
            "id": 2351,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_burn",
            "nameLocation": "816:5:14",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 2342,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 2340,
                  "name": "ERC721",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 979,
                  "src": "877:6:14"
                },
                {
                  "id": 2341,
                  "name": "ERC721URIStorage",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1576,
                  "src": "885:16:14"
                }
              ],
              "src": "868:34:14"
            },
            "parameters": {
              "id": 2339,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2338,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "839:7:14",
                  "nodeType": "VariableDeclaration",
                  "scope": 2351,
                  "src": "831:15:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2337,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "831:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "821:31:14"
            },
            "returnParameters": {
              "id": 2343,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "903:0:14"
            },
            "scope": 2417,
            "src": "807:133:14",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "internal"
          },
          {
            "baseFunctions": [
              206,
              1163
            ],
            "body": {
              "id": 2366,
              "nodeType": "Block",
              "src": "1089:60:14",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2363,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2353,
                        "src": "1130:11:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes4",
                          "typeString": "bytes4"
                        }
                      ],
                      "expression": {
                        "id": 2361,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967271,
                        "src": "1106:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_LeaSeaNFT_$2417_$",
                          "typeString": "type(contract super LeaSeaNFT)"
                        }
                      },
                      "id": 2362,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "supportsInterface",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1163,
                      "src": "1106:23:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                        "typeString": "function (bytes4) view returns (bool)"
                      }
                    },
                    "id": 2364,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1106:36:14",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 2360,
                  "id": 2365,
                  "nodeType": "Return",
                  "src": "1099:43:14"
                }
              ]
            },
            "functionSelector": "01ffc9a7",
            "id": 2367,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "953:17:14",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 2357,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 2355,
                  "name": "ERC721",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 979,
                  "src": "1036:6:14"
                },
                {
                  "id": 2356,
                  "name": "ERC721Enumerable",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1451,
                  "src": "1044:16:14"
                }
              ],
              "src": "1027:34:14"
            },
            "parameters": {
              "id": 2354,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2353,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "978:11:14",
                  "nodeType": "VariableDeclaration",
                  "scope": 2367,
                  "src": "971:18:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 2352,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "971:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "970:20:14"
            },
            "returnParameters": {
              "id": 2360,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2359,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2367,
                  "src": "1079:4:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2358,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1079:4:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1078:6:14"
            },
            "scope": 2417,
            "src": "944:205:14",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              317,
              1523
            ],
            "body": {
              "id": 2382,
              "nodeType": "Block",
              "src": "1280:47:14",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2379,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2369,
                        "src": "1312:7:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "id": 2377,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967271,
                        "src": "1297:5:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_LeaSeaNFT_$2417_$",
                          "typeString": "type(contract super LeaSeaNFT)"
                        }
                      },
                      "id": 2378,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "tokenURI",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1523,
                      "src": "1297:14:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) view returns (string memory)"
                      }
                    },
                    "id": 2380,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1297:23:14",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 2376,
                  "id": 2381,
                  "nodeType": "Return",
                  "src": "1290:30:14"
                }
              ]
            },
            "functionSelector": "c87b56dd",
            "id": 2383,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tokenURI",
            "nameLocation": "1163:8:14",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 2373,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 2371,
                  "name": "ERC721",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 979,
                  "src": "1230:6:14"
                },
                {
                  "id": 2372,
                  "name": "ERC721URIStorage",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1576,
                  "src": "1238:16:14"
                }
              ],
              "src": "1221:34:14"
            },
            "parameters": {
              "id": 2370,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2369,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "1189:7:14",
                  "nodeType": "VariableDeclaration",
                  "scope": 2383,
                  "src": "1181:15:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2368,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1181:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1171:31:14"
            },
            "returnParameters": {
              "id": 2376,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2375,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2383,
                  "src": "1265:13:14",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2374,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1265:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1264:15:14"
            },
            "scope": 2417,
            "src": "1154:173:14",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2415,
              "nodeType": "Block",
              "src": "1422:195:14",
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 2392,
                        "name": "_tokenIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2307,
                        "src": "1432:9:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$1957_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 2394,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "increment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1983,
                      "src": "1432:19:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$1957_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$1957_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer)"
                      }
                    },
                    "id": 2395,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1432:21:14",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2396,
                  "nodeType": "ExpressionStatement",
                  "src": "1432:21:14"
                },
                {
                  "assignments": [
                    2398
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2398,
                      "mutability": "mutable",
                      "name": "newItemId",
                      "nameLocation": "1472:9:14",
                      "nodeType": "VariableDeclaration",
                      "scope": 2415,
                      "src": "1464:17:14",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2397,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1464:7:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2402,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 2399,
                        "name": "_tokenIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2307,
                        "src": "1484:9:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$1957_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 2400,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1969,
                      "src": "1484:17:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$1957_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$1957_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 2401,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1484:19:14",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1464:39:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2404,
                        "name": "recipient",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2385,
                        "src": "1519:9:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2405,
                        "name": "newItemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2398,
                        "src": "1530:9:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 2403,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 689,
                      "src": "1513:5:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 2406,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1513:27:14",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2407,
                  "nodeType": "ExpressionStatement",
                  "src": "1513:27:14"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2409,
                        "name": "newItemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2398,
                        "src": "1563:9:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 2410,
                        "name": "tokenURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2387,
                        "src": "1574:8:14",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 2408,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1545,
                      "src": "1550:12:14",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 2411,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1550:33:14",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2412,
                  "nodeType": "ExpressionStatement",
                  "src": "1550:33:14"
                },
                {
                  "expression": {
                    "id": 2413,
                    "name": "newItemId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2398,
                    "src": "1601:9:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2391,
                  "id": 2414,
                  "nodeType": "Return",
                  "src": "1594:16:14"
                }
              ]
            },
            "functionSelector": "eacabe14",
            "id": 2416,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintNFT",
            "nameLocation": "1346:7:14",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2388,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2385,
                  "mutability": "mutable",
                  "name": "recipient",
                  "nameLocation": "1362:9:14",
                  "nodeType": "VariableDeclaration",
                  "scope": 2416,
                  "src": "1354:17:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2384,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1354:7:14",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 2387,
                  "mutability": "mutable",
                  "name": "tokenURI",
                  "nameLocation": "1387:8:14",
                  "nodeType": "VariableDeclaration",
                  "scope": 2416,
                  "src": "1373:22:14",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2386,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1373:6:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1353:43:14"
            },
            "returnParameters": {
              "id": 2391,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2390,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2416,
                  "src": "1413:7:14",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2389,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1413:7:14",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1412:9:14"
            },
            "scope": 2417,
            "src": "1337:280:14",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 2418,
        "src": "380:1239:14",
        "usedErrors": []
      }
    ],
    "src": "32:1587:14"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.15+commit.e14f2714.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.4.8",
  "updatedAt": "2022-08-15T20:18:26.811Z",
  "devdoc": {
    "kind": "dev",
    "methods": {
      "approve(address,uint256)": {
        "details": "See {IERC721-approve}."
      },
      "balanceOf(address)": {
        "details": "See {IERC721-balanceOf}."
      },
      "getApproved(uint256)": {
        "details": "See {IERC721-getApproved}."
      },
      "isApprovedForAll(address,address)": {
        "details": "See {IERC721-isApprovedForAll}."
      },
      "name()": {
        "details": "See {IERC721Metadata-name}."
      },
      "owner()": {
        "details": "Returns the address of the current owner."
      },
      "ownerOf(uint256)": {
        "details": "See {IERC721-ownerOf}."
      },
      "renounceOwnership()": {
        "details": "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "setApprovalForAll(address,bool)": {
        "details": "See {IERC721-setApprovalForAll}."
      },
      "symbol()": {
        "details": "See {IERC721Metadata-symbol}."
      },
      "tokenByIndex(uint256)": {
        "details": "See {IERC721Enumerable-tokenByIndex}."
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
      },
      "totalSupply()": {
        "details": "See {IERC721Enumerable-totalSupply}."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC721-transferFrom}."
      },
      "transferOwnership(address)": {
        "details": "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."
      }
    },
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
}

export default erc721AbiLocal;
