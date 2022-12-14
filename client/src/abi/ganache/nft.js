const NFT_GANACHE = {
  "contractName": "LeeSeaNFT",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "contractAddress",
          "type": "address"
        }
      ],
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
          "name": "_tokenId",
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
          "name": "_recipient",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_tokenURI",
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
  "metadata": "{\"compiler\":{\"version\":\"0.8.15+commit.e14f2714\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"contractAddress\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_recipient\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_tokenURI\",\"type\":\"string\"}],\"name\":\"mintNFT\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"owner()\":{\"details\":\"Returns the address of the current owner.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"renounceOwnership()\":{\"details\":\"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"},\"transferOwnership(address)\":{\"details\":\"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.\"}},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/LeeSeaNFT.sol\":\"LeeSeaNFT\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/Ownable.sol\":{\"keccak256\":\"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://40fb1b5102468f783961d0af743f91b9980cf66b50d1d12009f6bb1869cea4d2\",\"dweb:/ipfs/QmYqEbJML4jB1GHbzD4cUZDtJg5wVwNm3vDJq1GbyDus8y\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x0b606994df12f0ce35f6d2f6dcdde7e55e6899cdef7e00f180980caa81e3844e\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://4c827c981a552d1c76c96060e92f56b52bc20c6f9b4dbf911fe99ddbfb41f2ea\",\"dweb:/ipfs/QmW8xvJdzHrr8Ry34C7viBsgG2b8T1mL4BQWJ5CdfD9JLB\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0xed6a749c5373af398105ce6ee3ac4763aa450ea7285d268c85d9eeca809cdb1f\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://20a97f891d06f0fe91560ea1a142aaa26fdd22bed1b51606b7d48f670deeb50f\",\"dweb:/ipfs/QmTbCtZKChpaX5H2iRiTDMcSz29GSLCpTCDgJpcMR4wg8x\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6e75cf83beb757b8855791088546b8337e9d4684e169400c20d44a515353b708\",\"dweb:/ipfs/QmYvPafLfoquiDMEj7CKHtvbgHu7TJNPSVPSCjrtjV8HjV\"]},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol\":{\"keccak256\":\"0x0a79511df8151b10b0a0004d6a76ad956582d32824af4c0f4886bdbdfe5746e5\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://afbedcf17f31db719e6fdc56caa8f458799c5fa2eb94cb1e94ef18f89af85768\",\"dweb:/ipfs/QmVmqRdBfbgYThpZSoAJ5o9mnAMjx8mCHHjv3Rh8cQAAg3\"]},\"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol\":{\"keccak256\":\"0x5c3501c1b70fcfc64417e9da5cc6a3597191baa354781e508e1e14cc0e50a038\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://899c87a849a94c848818d0afede6961d2c87665af1dd23a5c983e78981a65691\",\"dweb:/ipfs/QmUeFDffQRDmX87FX3MRxN3bmpUxDTWpWLwPJzeAJ3yF6H\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol\":{\"keccak256\":\"0xd1556954440b31c97a142c6ba07d5cade45f96fafd52091d33a14ebe365aecbf\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://26fef835622b46a5ba08b3ef6b46a22e94b5f285d0f0fb66b703bd30217d2c34\",\"dweb:/ipfs/QmZ548qdwfL1qF7aXz3xh1GCdTiST81kGGuKRqVUfYmPZR\"]},\"@openzeppelin/contracts/token/ERC721/extensions/IERC721Metadata.sol\":{\"keccak256\":\"0x75b829ff2f26c14355d1cba20e16fe7b29ca58eb5fef665ede48bc0f9c6c74b9\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://a0a107160525724f9e1bbbab031defc2f298296dd9e331f16a6f7130cec32146\",\"dweb:/ipfs/QmemujxSd7gX8A9M8UwmNbz4Ms3U9FG9QfudUgxwvTmPWf\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xd6153ce99bcdcce22b124f755e72553295be6abcd63804cfdffceb188b8bef10\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://35c47bece3c03caaa07fab37dd2bb3413bfbca20db7bd9895024390e0a469487\",\"dweb:/ipfs/QmPGWT2x3QHcKxqe6gRmAkdakhbaRgx3DLzcakHz5M4eXG\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92\",\"dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0xf0018c2440fbe238dd3a8732fa8e17a0f9dce84d31451dc8a32f6d62b349c9f1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://59e1c62884d55b70f3ae5432b44bb3166ad71ae3acd19c57ab6ddc3c87c325ee\",\"dweb:/ipfs/QmezuXg5GK5oeA4F91EZhozBFekhq5TD966bHPH18cCqhu\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0xaf159a8b1923ad2a26d516089bceca9bdeaeacd04be50983ea00ba63070f08a3\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://6f2cf1c531122bc7ca96b8c8db6a60deae60441e5223065e792553d4849b5638\",\"dweb:/ipfs/QmPBdJmBBABMDCfyDjCbdxgiqRavgiSL88SYPGibgbPas9\"]},\"@openzeppelin/contracts/utils/introspection/ERC165.sol\":{\"keccak256\":\"0xd10975de010d89fd1c78dc5e8a9a7e7f496198085c151648f20cba166b32582b\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://fb0048dee081f6fffa5f74afc3fb328483c2a30504e94a0ddd2a5114d731ec4d\",\"dweb:/ipfs/QmZptt1nmYoA5SgjwnSgWqgUSDgm4q52Yos3xhnMv3MV43\"]},\"@openzeppelin/contracts/utils/introspection/IERC165.sol\":{\"keccak256\":\"0x447a5f3ddc18419d41ff92b3773fb86471b1db25773e07f877f548918a185bf1\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://be161e54f24e5c6fae81a12db1a8ae87bc5ae1b0ddc805d82a1440a68455088f\",\"dweb:/ipfs/QmP7C3CHdY9urF4dEMb9wmsp1wMxHF6nhA2yQE5SKiPAdy\"]},\"project:/contracts/LeeSeaNFT.sol\":{\"keccak256\":\"0x60b0571e402111ae40f19155a42b3444cc173fcac5ebcb6fc5ad2e70c8dd61a4\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://c68ff2329ff39622e90709dac082d6fdeef037b298da6925270fb11c024a1e27\",\"dweb:/ipfs/QmeLTqG24v5EhQPMFWKMmxTZL7u1mGRmBYQVA5wGTKDsxA\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162003bde38038062003bde833981810160405281019062000037919062000269565b6040518060400160405280600981526020017f6c65615365614e465400000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4e465400000000000000000000000000000000000000000000000000000000008152508160009081620000b4919062000515565b508060019081620000c6919062000515565b505050620000e9620000dd6200013160201b60201c565b6200013960201b60201c565b80600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050620005fc565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002318262000204565b9050919050565b620002438162000224565b81146200024f57600080fd5b50565b600081519050620002638162000238565b92915050565b600060208284031215620002825762000281620001ff565b5b6000620002928482850162000252565b91505092915050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200031d57607f821691505b602082108103620003335762000332620002d5565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200039d7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200035e565b620003a986836200035e565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003f6620003f0620003ea84620003c1565b620003cb565b620003c1565b9050919050565b6000819050919050565b6200041283620003d5565b6200042a6200042182620003fd565b8484546200036b565b825550505050565b600090565b6200044162000432565b6200044e81848462000407565b505050565b5b8181101562000476576200046a60008262000437565b60018101905062000454565b5050565b601f821115620004c5576200048f8162000339565b6200049a846200034e565b81016020851015620004aa578190505b620004c2620004b9856200034e565b83018262000453565b50505b505050565b600082821c905092915050565b6000620004ea60001984600802620004ca565b1980831691505092915050565b6000620005058383620004d7565b9150826002028217905092915050565b62000520826200029b565b67ffffffffffffffff8111156200053c576200053b620002a6565b5b62000548825462000304565b620005558282856200047a565b600060209050601f8311600181146200058d576000841562000578578287015190505b620005848582620004f7565b865550620005f4565b601f1984166200059d8662000339565b60005b82811015620005c757848901518255600182019150602085019450602081019050620005a0565b86831015620005e75784890151620005e3601f891682620004d7565b8355505b6001600288020188555050505b505050505050565b6135d2806200060c6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad578063b88d4fde11610071578063b88d4fde14610343578063c87b56dd1461035f578063e985e9c51461038f578063eacabe14146103bf578063f2fde38b146103ef5761012c565b806370a08231146102b1578063715018a6146102e15780638da5cb5b146102eb57806395d89b4114610309578063a22cb465146103275761012c565b806323b872dd116100f457806323b872dd146101e95780632f745c591461020557806342842e0e146102355780634f6ccce7146102515780636352211e146102815761012c565b806301ffc9a71461013157806306fdde0314610161578063081812fc1461017f578063095ea7b3146101af57806318160ddd146101cb575b600080fd5b61014b600480360381019061014691906120d5565b61040b565b604051610158919061211d565b60405180910390f35b61016961041d565b60405161017691906121d1565b60405180910390f35b61019960048036038101906101949190612229565b6104af565b6040516101a69190612297565b60405180910390f35b6101c960048036038101906101c491906122de565b6104f5565b005b6101d361060c565b6040516101e0919061232d565b60405180910390f35b61020360048036038101906101fe9190612348565b610619565b005b61021f600480360381019061021a91906122de565b610679565b60405161022c919061232d565b60405180910390f35b61024f600480360381019061024a9190612348565b61071e565b005b61026b60048036038101906102669190612229565b61073e565b604051610278919061232d565b60405180910390f35b61029b60048036038101906102969190612229565b6107af565b6040516102a89190612297565b60405180910390f35b6102cb60048036038101906102c6919061239b565b610860565b6040516102d8919061232d565b60405180910390f35b6102e9610917565b005b6102f361092b565b6040516103009190612297565b60405180910390f35b610311610955565b60405161031e91906121d1565b60405180910390f35b610341600480360381019061033c91906123f4565b6109e7565b005b61035d60048036038101906103589190612569565b6109fd565b005b61037960048036038101906103749190612229565b610a5f565b60405161038691906121d1565b60405180910390f35b6103a960048036038101906103a491906125ec565b610a71565b6040516103b6919061211d565b60405180910390f35b6103d960048036038101906103d491906126cd565b610b05565b6040516103e6919061232d565b60405180910390f35b6104096004803603810190610404919061239b565b610b6a565b005b600061041682610bed565b9050919050565b60606000805461042c90612758565b80601f016020809104026020016040519081016040528092919081815260200182805461045890612758565b80156104a55780601f1061047a576101008083540402835291602001916104a5565b820191906000526020600020905b81548152906001019060200180831161048857829003601f168201915b5050505050905090565b60006104ba82610c67565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610500826107af565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610570576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610567906127fb565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661058f610cb2565b73ffffffffffffffffffffffffffffffffffffffff1614806105be57506105bd816105b8610cb2565b610a71565b5b6105fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f49061288d565b60405180910390fd5b6106078383610cba565b505050565b6000600a80549050905090565b61062a610624610cb2565b82610d73565b610669576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106609061291f565b60405180910390fd5b610674838383610e08565b505050565b600061068483610860565b82106106c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106bc906129b1565b60405180910390fd5b600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b610739838383604051806020016040528060008152506109fd565b505050565b600061074861060c565b8210610789576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078090612a43565b60405180910390fd5b600a828154811061079d5761079c612a63565b5b90600052602060002001549050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610857576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084e90612ade565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c790612b70565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61091f61106e565b61092960006110ec565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461096490612758565b80601f016020809104026020016040519081016040528092919081815260200182805461099090612758565b80156109dd5780601f106109b2576101008083540402835291602001916109dd565b820191906000526020600020905b8154815290600101906020018083116109c057829003601f168201915b5050505050905090565b6109f96109f2610cb2565b83836111b2565b5050565b610a0e610a08610cb2565b83610d73565b610a4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a449061291f565b60405180910390fd5b610a598484848461131e565b50505050565b6060610a6a8261137a565b9050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000610b11600c61148c565b6000610b1d600c6114a2565b9050610b2984826114b0565b610b338184611689565b610b60600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660016109e7565b8091505092915050565b610b7261106e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610be1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd890612c02565b60405180910390fd5b610bea816110ec565b50565b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610c605750610c5f826116f6565b5b9050919050565b610c70816117d8565b610caf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ca690612ade565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610d2d836107af565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610d7f836107af565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610dc15750610dc08185610a71565b5b80610dff57508373ffffffffffffffffffffffffffffffffffffffff16610de7846104af565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610e28826107af565b73ffffffffffffffffffffffffffffffffffffffff1614610e7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7590612c94565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610eed576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee490612d26565b60405180910390fd5b610ef8838383611844565b610f03600082610cba565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f539190612d75565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610faa9190612da9565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611069838383611854565b505050565b611076610cb2565b73ffffffffffffffffffffffffffffffffffffffff1661109461092b565b73ffffffffffffffffffffffffffffffffffffffff16146110ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e190612e4b565b60405180910390fd5b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611220576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121790612eb7565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611311919061211d565b60405180910390a3505050565b611329848484610e08565b61133584848484611859565b611374576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136b90612f49565b60405180910390fd5b50505050565b606061138582610c67565b60006006600084815260200190815260200160002080546113a590612758565b80601f01602080910402602001604051908101604052809291908181526020018280546113d190612758565b801561141e5780601f106113f35761010080835404028352916020019161141e565b820191906000526020600020905b81548152906001019060200180831161140157829003601f168201915b50505050509050600061142f6119e0565b90506000815103611444578192505050611487565b600082511115611479578082604051602001611461929190612fa5565b60405160208183030381529060405292505050611487565b611482846119f7565b925050505b919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361151f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151690613015565b60405180910390fd5b611528816117d8565b15611568576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155f90613081565b60405180910390fd5b61157460008383611844565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115c49190612da9565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461168560008383611854565b5050565b611692826117d8565b6116d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116c890613113565b60405180910390fd5b806006600084815260200190815260200160002090816116f191906132df565b505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806117c157507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806117d157506117d082611a5f565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b61184f838383611ac9565b505050565b505050565b600061187a8473ffffffffffffffffffffffffffffffffffffffff16611bdb565b156119d3578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026118a3610cb2565b8786866040518563ffffffff1660e01b81526004016118c59493929190613406565b6020604051808303816000875af192505050801561190157506040513d601f19601f820116820180604052508101906118fe9190613467565b60015b611983573d8060008114611931576040519150601f19603f3d011682016040523d82523d6000602084013e611936565b606091505b50600081510361197b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161197290612f49565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506119d8565b600190505b949350505050565b606060405180602001604052806000815250905090565b6060611a0282610c67565b6000611a0c6119e0565b90506000815111611a2c5760405180602001604052806000815250611a57565b80611a3684611bfe565b604051602001611a47929190612fa5565b6040516020818303038152906040525b915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611ad4838383611d5e565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611b1657611b1181611d63565b611b55565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611b5457611b538382611dac565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611b9757611b9281611f19565b611bd6565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611bd557611bd48282611fea565b5b5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b606060008203611c45576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611d59565b600082905060005b60008214611c77578080611c6090613494565b915050600a82611c70919061350b565b9150611c4d565b60008167ffffffffffffffff811115611c9357611c9261243e565b5b6040519080825280601f01601f191660200182016040528015611cc55781602001600182028036833780820191505090505b5090505b60008514611d5257600182611cde9190612d75565b9150600a85611ced919061353c565b6030611cf99190612da9565b60f81b818381518110611d0f57611d0e612a63565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611d4b919061350b565b9450611cc9565b8093505050505b919050565b505050565b600a80549050600b600083815260200190815260200160002081905550600a81908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001611db984610860565b611dc39190612d75565b9050600060096000848152602001908152602001600020549050818114611ea8576000600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816009600083815260200190815260200160002081905550505b6009600084815260200190815260200160002060009055600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001600a80549050611f2d9190612d75565b90506000600b60008481526020019081526020016000205490506000600a8381548110611f5d57611f5c612a63565b5b9060005260206000200154905080600a8381548110611f7f57611f7e612a63565b5b906000526020600020018190555081600b600083815260200190815260200160002081905550600b600085815260200190815260200160002060009055600a805480611fce57611fcd61356d565b5b6001900381819060005260206000200160009055905550505050565b6000611ff583610860565b905081600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806009600084815260200190815260200160002081905550505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6120b28161207d565b81146120bd57600080fd5b50565b6000813590506120cf816120a9565b92915050565b6000602082840312156120eb576120ea612073565b5b60006120f9848285016120c0565b91505092915050565b60008115159050919050565b61211781612102565b82525050565b6000602082019050612132600083018461210e565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612172578082015181840152602081019050612157565b83811115612181576000848401525b50505050565b6000601f19601f8301169050919050565b60006121a382612138565b6121ad8185612143565b93506121bd818560208601612154565b6121c681612187565b840191505092915050565b600060208201905081810360008301526121eb8184612198565b905092915050565b6000819050919050565b612206816121f3565b811461221157600080fd5b50565b600081359050612223816121fd565b92915050565b60006020828403121561223f5761223e612073565b5b600061224d84828501612214565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061228182612256565b9050919050565b61229181612276565b82525050565b60006020820190506122ac6000830184612288565b92915050565b6122bb81612276565b81146122c657600080fd5b50565b6000813590506122d8816122b2565b92915050565b600080604083850312156122f5576122f4612073565b5b6000612303858286016122c9565b925050602061231485828601612214565b9150509250929050565b612327816121f3565b82525050565b6000602082019050612342600083018461231e565b92915050565b60008060006060848603121561236157612360612073565b5b600061236f868287016122c9565b9350506020612380868287016122c9565b925050604061239186828701612214565b9150509250925092565b6000602082840312156123b1576123b0612073565b5b60006123bf848285016122c9565b91505092915050565b6123d181612102565b81146123dc57600080fd5b50565b6000813590506123ee816123c8565b92915050565b6000806040838503121561240b5761240a612073565b5b6000612419858286016122c9565b925050602061242a858286016123df565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61247682612187565b810181811067ffffffffffffffff821117156124955761249461243e565b5b80604052505050565b60006124a8612069565b90506124b4828261246d565b919050565b600067ffffffffffffffff8211156124d4576124d361243e565b5b6124dd82612187565b9050602081019050919050565b82818337600083830152505050565b600061250c612507846124b9565b61249e565b90508281526020810184848401111561252857612527612439565b5b6125338482856124ea565b509392505050565b600082601f8301126125505761254f612434565b5b81356125608482602086016124f9565b91505092915050565b6000806000806080858703121561258357612582612073565b5b6000612591878288016122c9565b94505060206125a2878288016122c9565b93505060406125b387828801612214565b925050606085013567ffffffffffffffff8111156125d4576125d3612078565b5b6125e08782880161253b565b91505092959194509250565b6000806040838503121561260357612602612073565b5b6000612611858286016122c9565b9250506020612622858286016122c9565b9150509250929050565b600067ffffffffffffffff8211156126475761264661243e565b5b61265082612187565b9050602081019050919050565b600061267061266b8461262c565b61249e565b90508281526020810184848401111561268c5761268b612439565b5b6126978482856124ea565b509392505050565b600082601f8301126126b4576126b3612434565b5b81356126c484826020860161265d565b91505092915050565b600080604083850312156126e4576126e3612073565b5b60006126f2858286016122c9565b925050602083013567ffffffffffffffff81111561271357612712612078565b5b61271f8582860161269f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061277057607f821691505b60208210810361278357612782612729565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006127e5602183612143565b91506127f082612789565b604082019050919050565b60006020820190508181036000830152612814816127d8565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000612877603e83612143565b91506128828261281b565b604082019050919050565b600060208201905081810360008301526128a68161286a565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000612909602e83612143565b9150612914826128ad565b604082019050919050565b60006020820190508181036000830152612938816128fc565b9050919050565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b600061299b602b83612143565b91506129a68261293f565b604082019050919050565b600060208201905081810360008301526129ca8161298e565b9050919050565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b6000612a2d602c83612143565b9150612a38826129d1565b604082019050919050565b60006020820190508181036000830152612a5c81612a20565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612ac8601883612143565b9150612ad382612a92565b602082019050919050565b60006020820190508181036000830152612af781612abb565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612b5a602983612143565b9150612b6582612afe565b604082019050919050565b60006020820190508181036000830152612b8981612b4d565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612bec602683612143565b9150612bf782612b90565b604082019050919050565b60006020820190508181036000830152612c1b81612bdf565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612c7e602583612143565b9150612c8982612c22565b604082019050919050565b60006020820190508181036000830152612cad81612c71565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612d10602483612143565b9150612d1b82612cb4565b604082019050919050565b60006020820190508181036000830152612d3f81612d03565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612d80826121f3565b9150612d8b836121f3565b925082821015612d9e57612d9d612d46565b5b828203905092915050565b6000612db4826121f3565b9150612dbf836121f3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612df457612df3612d46565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612e35602083612143565b9150612e4082612dff565b602082019050919050565b60006020820190508181036000830152612e6481612e28565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612ea1601983612143565b9150612eac82612e6b565b602082019050919050565b60006020820190508181036000830152612ed081612e94565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612f33603283612143565b9150612f3e82612ed7565b604082019050919050565b60006020820190508181036000830152612f6281612f26565b9050919050565b600081905092915050565b6000612f7f82612138565b612f898185612f69565b9350612f99818560208601612154565b80840191505092915050565b6000612fb18285612f74565b9150612fbd8284612f74565b91508190509392505050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612fff602083612143565b915061300a82612fc9565b602082019050919050565b6000602082019050818103600083015261302e81612ff2565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b600061306b601c83612143565b915061307682613035565b602082019050919050565b6000602082019050818103600083015261309a8161305e565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b60006130fd602e83612143565b9150613108826130a1565b604082019050919050565b6000602082019050818103600083015261312c816130f0565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026131957fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613158565b61319f8683613158565b95508019841693508086168417925050509392505050565b6000819050919050565b60006131dc6131d76131d2846121f3565b6131b7565b6121f3565b9050919050565b6000819050919050565b6131f6836131c1565b61320a613202826131e3565b848454613165565b825550505050565b600090565b61321f613212565b61322a8184846131ed565b505050565b5b8181101561324e57613243600082613217565b600181019050613230565b5050565b601f8211156132935761326481613133565b61326d84613148565b8101602085101561327c578190505b61329061328885613148565b83018261322f565b50505b505050565b600082821c905092915050565b60006132b660001984600802613298565b1980831691505092915050565b60006132cf83836132a5565b9150826002028217905092915050565b6132e882612138565b67ffffffffffffffff8111156133015761330061243e565b5b61330b8254612758565b613316828285613252565b600060209050601f8311600181146133495760008415613337578287015190505b61334185826132c3565b8655506133a9565b601f19841661335786613133565b60005b8281101561337f5784890151825560018201915060208501945060208101905061335a565b8683101561339c5784890151613398601f8916826132a5565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600082825260208201905092915050565b60006133d8826133b1565b6133e281856133bc565b93506133f2818560208601612154565b6133fb81612187565b840191505092915050565b600060808201905061341b6000830187612288565b6134286020830186612288565b613435604083018561231e565b818103606083015261344781846133cd565b905095945050505050565b600081519050613461816120a9565b92915050565b60006020828403121561347d5761347c612073565b5b600061348b84828501613452565b91505092915050565b600061349f826121f3565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036134d1576134d0612d46565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000613516826121f3565b9150613521836121f3565b925082613531576135306134dc565b5b828204905092915050565b6000613547826121f3565b9150613552836121f3565b925082613562576135616134dc565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea264697066735822122070cf074ebb836d76842528399b22d718690c2f726c43660b719404ac7adab28964736f6c634300080f0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad578063b88d4fde11610071578063b88d4fde14610343578063c87b56dd1461035f578063e985e9c51461038f578063eacabe14146103bf578063f2fde38b146103ef5761012c565b806370a08231146102b1578063715018a6146102e15780638da5cb5b146102eb57806395d89b4114610309578063a22cb465146103275761012c565b806323b872dd116100f457806323b872dd146101e95780632f745c591461020557806342842e0e146102355780634f6ccce7146102515780636352211e146102815761012c565b806301ffc9a71461013157806306fdde0314610161578063081812fc1461017f578063095ea7b3146101af57806318160ddd146101cb575b600080fd5b61014b600480360381019061014691906120d5565b61040b565b604051610158919061211d565b60405180910390f35b61016961041d565b60405161017691906121d1565b60405180910390f35b61019960048036038101906101949190612229565b6104af565b6040516101a69190612297565b60405180910390f35b6101c960048036038101906101c491906122de565b6104f5565b005b6101d361060c565b6040516101e0919061232d565b60405180910390f35b61020360048036038101906101fe9190612348565b610619565b005b61021f600480360381019061021a91906122de565b610679565b60405161022c919061232d565b60405180910390f35b61024f600480360381019061024a9190612348565b61071e565b005b61026b60048036038101906102669190612229565b61073e565b604051610278919061232d565b60405180910390f35b61029b60048036038101906102969190612229565b6107af565b6040516102a89190612297565b60405180910390f35b6102cb60048036038101906102c6919061239b565b610860565b6040516102d8919061232d565b60405180910390f35b6102e9610917565b005b6102f361092b565b6040516103009190612297565b60405180910390f35b610311610955565b60405161031e91906121d1565b60405180910390f35b610341600480360381019061033c91906123f4565b6109e7565b005b61035d60048036038101906103589190612569565b6109fd565b005b61037960048036038101906103749190612229565b610a5f565b60405161038691906121d1565b60405180910390f35b6103a960048036038101906103a491906125ec565b610a71565b6040516103b6919061211d565b60405180910390f35b6103d960048036038101906103d491906126cd565b610b05565b6040516103e6919061232d565b60405180910390f35b6104096004803603810190610404919061239b565b610b6a565b005b600061041682610bed565b9050919050565b60606000805461042c90612758565b80601f016020809104026020016040519081016040528092919081815260200182805461045890612758565b80156104a55780601f1061047a576101008083540402835291602001916104a5565b820191906000526020600020905b81548152906001019060200180831161048857829003601f168201915b5050505050905090565b60006104ba82610c67565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610500826107af565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610570576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610567906127fb565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661058f610cb2565b73ffffffffffffffffffffffffffffffffffffffff1614806105be57506105bd816105b8610cb2565b610a71565b5b6105fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105f49061288d565b60405180910390fd5b6106078383610cba565b505050565b6000600a80549050905090565b61062a610624610cb2565b82610d73565b610669576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106609061291f565b60405180910390fd5b610674838383610e08565b505050565b600061068483610860565b82106106c5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106bc906129b1565b60405180910390fd5b600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002054905092915050565b610739838383604051806020016040528060008152506109fd565b505050565b600061074861060c565b8210610789576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078090612a43565b60405180910390fd5b600a828154811061079d5761079c612a63565b5b90600052602060002001549050919050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610857576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161084e90612ade565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c790612b70565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61091f61106e565b61092960006110ec565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b60606001805461096490612758565b80601f016020809104026020016040519081016040528092919081815260200182805461099090612758565b80156109dd5780601f106109b2576101008083540402835291602001916109dd565b820191906000526020600020905b8154815290600101906020018083116109c057829003601f168201915b5050505050905090565b6109f96109f2610cb2565b83836111b2565b5050565b610a0e610a08610cb2565b83610d73565b610a4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a449061291f565b60405180910390fd5b610a598484848461131e565b50505050565b6060610a6a8261137a565b9050919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000610b11600c61148c565b6000610b1d600c6114a2565b9050610b2984826114b0565b610b338184611689565b610b60600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660016109e7565b8091505092915050565b610b7261106e565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610be1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610bd890612c02565b60405180910390fd5b610bea816110ec565b50565b60007f780e9d63000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610c605750610c5f826116f6565b5b9050919050565b610c70816117d8565b610caf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ca690612ade565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610d2d836107af565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610d7f836107af565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610dc15750610dc08185610a71565b5b80610dff57508373ffffffffffffffffffffffffffffffffffffffff16610de7846104af565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610e28826107af565b73ffffffffffffffffffffffffffffffffffffffff1614610e7e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7590612c94565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610eed576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee490612d26565b60405180910390fd5b610ef8838383611844565b610f03600082610cba565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610f539190612d75565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610faa9190612da9565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611069838383611854565b505050565b611076610cb2565b73ffffffffffffffffffffffffffffffffffffffff1661109461092b565b73ffffffffffffffffffffffffffffffffffffffff16146110ea576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e190612e4b565b60405180910390fd5b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611220576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161121790612eb7565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611311919061211d565b60405180910390a3505050565b611329848484610e08565b61133584848484611859565b611374576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136b90612f49565b60405180910390fd5b50505050565b606061138582610c67565b60006006600084815260200190815260200160002080546113a590612758565b80601f01602080910402602001604051908101604052809291908181526020018280546113d190612758565b801561141e5780601f106113f35761010080835404028352916020019161141e565b820191906000526020600020905b81548152906001019060200180831161140157829003601f168201915b50505050509050600061142f6119e0565b90506000815103611444578192505050611487565b600082511115611479578082604051602001611461929190612fa5565b60405160208183030381529060405292505050611487565b611482846119f7565b925050505b919050565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361151f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151690613015565b60405180910390fd5b611528816117d8565b15611568576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161155f90613081565b60405180910390fd5b61157460008383611844565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546115c49190612da9565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461168560008383611854565b5050565b611692826117d8565b6116d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116c890613113565b60405180910390fd5b806006600084815260200190815260200160002090816116f191906132df565b505050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806117c157507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806117d157506117d082611a5f565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b61184f838383611ac9565b505050565b505050565b600061187a8473ffffffffffffffffffffffffffffffffffffffff16611bdb565b156119d3578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026118a3610cb2565b8786866040518563ffffffff1660e01b81526004016118c59493929190613406565b6020604051808303816000875af192505050801561190157506040513d601f19601f820116820180604052508101906118fe9190613467565b60015b611983573d8060008114611931576040519150601f19603f3d011682016040523d82523d6000602084013e611936565b606091505b50600081510361197b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161197290612f49565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506119d8565b600190505b949350505050565b606060405180602001604052806000815250905090565b6060611a0282610c67565b6000611a0c6119e0565b90506000815111611a2c5760405180602001604052806000815250611a57565b80611a3684611bfe565b604051602001611a47929190612fa5565b6040516020818303038152906040525b915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b611ad4838383611d5e565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611b1657611b1181611d63565b611b55565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614611b5457611b538382611dac565b5b5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611b9757611b9281611f19565b611bd6565b8273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614611bd557611bd48282611fea565b5b5b505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b606060008203611c45576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611d59565b600082905060005b60008214611c77578080611c6090613494565b915050600a82611c70919061350b565b9150611c4d565b60008167ffffffffffffffff811115611c9357611c9261243e565b5b6040519080825280601f01601f191660200182016040528015611cc55781602001600182028036833780820191505090505b5090505b60008514611d5257600182611cde9190612d75565b9150600a85611ced919061353c565b6030611cf99190612da9565b60f81b818381518110611d0f57611d0e612a63565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611d4b919061350b565b9450611cc9565b8093505050505b919050565b505050565b600a80549050600b600083815260200190815260200160002081905550600a81908060018154018082558091505060019003906000526020600020016000909190919091505550565b60006001611db984610860565b611dc39190612d75565b9050600060096000848152602001908152602001600020549050818114611ea8576000600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002054905080600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600084815260200190815260200160002081905550816009600083815260200190815260200160002081905550505b6009600084815260200190815260200160002060009055600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008381526020019081526020016000206000905550505050565b60006001600a80549050611f2d9190612d75565b90506000600b60008481526020019081526020016000205490506000600a8381548110611f5d57611f5c612a63565b5b9060005260206000200154905080600a8381548110611f7f57611f7e612a63565b5b906000526020600020018190555081600b600083815260200190815260200160002081905550600b600085815260200190815260200160002060009055600a805480611fce57611fcd61356d565b5b6001900381819060005260206000200160009055905550505050565b6000611ff583610860565b905081600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002081905550806009600084815260200190815260200160002081905550505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6120b28161207d565b81146120bd57600080fd5b50565b6000813590506120cf816120a9565b92915050565b6000602082840312156120eb576120ea612073565b5b60006120f9848285016120c0565b91505092915050565b60008115159050919050565b61211781612102565b82525050565b6000602082019050612132600083018461210e565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015612172578082015181840152602081019050612157565b83811115612181576000848401525b50505050565b6000601f19601f8301169050919050565b60006121a382612138565b6121ad8185612143565b93506121bd818560208601612154565b6121c681612187565b840191505092915050565b600060208201905081810360008301526121eb8184612198565b905092915050565b6000819050919050565b612206816121f3565b811461221157600080fd5b50565b600081359050612223816121fd565b92915050565b60006020828403121561223f5761223e612073565b5b600061224d84828501612214565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061228182612256565b9050919050565b61229181612276565b82525050565b60006020820190506122ac6000830184612288565b92915050565b6122bb81612276565b81146122c657600080fd5b50565b6000813590506122d8816122b2565b92915050565b600080604083850312156122f5576122f4612073565b5b6000612303858286016122c9565b925050602061231485828601612214565b9150509250929050565b612327816121f3565b82525050565b6000602082019050612342600083018461231e565b92915050565b60008060006060848603121561236157612360612073565b5b600061236f868287016122c9565b9350506020612380868287016122c9565b925050604061239186828701612214565b9150509250925092565b6000602082840312156123b1576123b0612073565b5b60006123bf848285016122c9565b91505092915050565b6123d181612102565b81146123dc57600080fd5b50565b6000813590506123ee816123c8565b92915050565b6000806040838503121561240b5761240a612073565b5b6000612419858286016122c9565b925050602061242a858286016123df565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61247682612187565b810181811067ffffffffffffffff821117156124955761249461243e565b5b80604052505050565b60006124a8612069565b90506124b4828261246d565b919050565b600067ffffffffffffffff8211156124d4576124d361243e565b5b6124dd82612187565b9050602081019050919050565b82818337600083830152505050565b600061250c612507846124b9565b61249e565b90508281526020810184848401111561252857612527612439565b5b6125338482856124ea565b509392505050565b600082601f8301126125505761254f612434565b5b81356125608482602086016124f9565b91505092915050565b6000806000806080858703121561258357612582612073565b5b6000612591878288016122c9565b94505060206125a2878288016122c9565b93505060406125b387828801612214565b925050606085013567ffffffffffffffff8111156125d4576125d3612078565b5b6125e08782880161253b565b91505092959194509250565b6000806040838503121561260357612602612073565b5b6000612611858286016122c9565b9250506020612622858286016122c9565b9150509250929050565b600067ffffffffffffffff8211156126475761264661243e565b5b61265082612187565b9050602081019050919050565b600061267061266b8461262c565b61249e565b90508281526020810184848401111561268c5761268b612439565b5b6126978482856124ea565b509392505050565b600082601f8301126126b4576126b3612434565b5b81356126c484826020860161265d565b91505092915050565b600080604083850312156126e4576126e3612073565b5b60006126f2858286016122c9565b925050602083013567ffffffffffffffff81111561271357612712612078565b5b61271f8582860161269f565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061277057607f821691505b60208210810361278357612782612729565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b60006127e5602183612143565b91506127f082612789565b604082019050919050565b60006020820190508181036000830152612814816127d8565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b6000612877603e83612143565b91506128828261281b565b604082019050919050565b600060208201905081810360008301526128a68161286a565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b6000612909602e83612143565b9150612914826128ad565b604082019050919050565b60006020820190508181036000830152612938816128fc565b9050919050565b7f455243373231456e756d657261626c653a206f776e657220696e646578206f7560008201527f74206f6620626f756e6473000000000000000000000000000000000000000000602082015250565b600061299b602b83612143565b91506129a68261293f565b604082019050919050565b600060208201905081810360008301526129ca8161298e565b9050919050565b7f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60008201527f7574206f6620626f756e64730000000000000000000000000000000000000000602082015250565b6000612a2d602c83612143565b9150612a38826129d1565b604082019050919050565b60006020820190508181036000830152612a5c81612a20565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612ac8601883612143565b9150612ad382612a92565b602082019050919050565b60006020820190508181036000830152612af781612abb565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b6000612b5a602983612143565b9150612b6582612afe565b604082019050919050565b60006020820190508181036000830152612b8981612b4d565b9050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b6000612bec602683612143565b9150612bf782612b90565b604082019050919050565b60006020820190508181036000830152612c1b81612bdf565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b6000612c7e602583612143565b9150612c8982612c22565b604082019050919050565b60006020820190508181036000830152612cad81612c71565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000612d10602483612143565b9150612d1b82612cb4565b604082019050919050565b60006020820190508181036000830152612d3f81612d03565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612d80826121f3565b9150612d8b836121f3565b925082821015612d9e57612d9d612d46565b5b828203905092915050565b6000612db4826121f3565b9150612dbf836121f3565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115612df457612df3612d46565b5b828201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000612e35602083612143565b9150612e4082612dff565b602082019050919050565b60006020820190508181036000830152612e6481612e28565b9050919050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612ea1601983612143565b9150612eac82612e6b565b602082019050919050565b60006020820190508181036000830152612ed081612e94565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612f33603283612143565b9150612f3e82612ed7565b604082019050919050565b60006020820190508181036000830152612f6281612f26565b9050919050565b600081905092915050565b6000612f7f82612138565b612f898185612f69565b9350612f99818560208601612154565b80840191505092915050565b6000612fb18285612f74565b9150612fbd8284612f74565b91508190509392505050565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612fff602083612143565b915061300a82612fc9565b602082019050919050565b6000602082019050818103600083015261302e81612ff2565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b600061306b601c83612143565b915061307682613035565b602082019050919050565b6000602082019050818103600083015261309a8161305e565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b60006130fd602e83612143565b9150613108826130a1565b604082019050919050565b6000602082019050818103600083015261312c816130f0565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026131957fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82613158565b61319f8683613158565b95508019841693508086168417925050509392505050565b6000819050919050565b60006131dc6131d76131d2846121f3565b6131b7565b6121f3565b9050919050565b6000819050919050565b6131f6836131c1565b61320a613202826131e3565b848454613165565b825550505050565b600090565b61321f613212565b61322a8184846131ed565b505050565b5b8181101561324e57613243600082613217565b600181019050613230565b5050565b601f8211156132935761326481613133565b61326d84613148565b8101602085101561327c578190505b61329061328885613148565b83018261322f565b50505b505050565b600082821c905092915050565b60006132b660001984600802613298565b1980831691505092915050565b60006132cf83836132a5565b9150826002028217905092915050565b6132e882612138565b67ffffffffffffffff8111156133015761330061243e565b5b61330b8254612758565b613316828285613252565b600060209050601f8311600181146133495760008415613337578287015190505b61334185826132c3565b8655506133a9565b601f19841661335786613133565b60005b8281101561337f5784890151825560018201915060208501945060208101905061335a565b8683101561339c5784890151613398601f8916826132a5565b8355505b6001600288020188555050505b505050505050565b600081519050919050565b600082825260208201905092915050565b60006133d8826133b1565b6133e281856133bc565b93506133f2818560208601612154565b6133fb81612187565b840191505092915050565b600060808201905061341b6000830187612288565b6134286020830186612288565b613435604083018561231e565b818103606083015261344781846133cd565b905095945050505050565b600081519050613461816120a9565b92915050565b60006020828403121561347d5761347c612073565b5b600061348b84828501613452565b91505092915050565b600061349f826121f3565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036134d1576134d0612d46565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000613516826121f3565b9150613521836121f3565b925082613531576135306134dc565b5b828204905092915050565b6000613547826121f3565b9150613552836121f3565b925082613562576135616134dc565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fdfea264697066735822122070cf074ebb836d76842528399b22d718690c2f726c43660b719404ac7adab28964736f6c634300080f0033",
  "immutableReferences": {},
  "generatedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:6426:17",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "47:35:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "57:19:17",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "73:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "67:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "67:9:17"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "57:6:17"
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
                "src": "40:6:17",
                "type": ""
              }
            ],
            "src": "7:75:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "177:28:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "194:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "197:1:17",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "187:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "187:12:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "187:12:17"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "88:117:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "300:28:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "317:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "320:1:17",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "310:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "310:12:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "310:12:17"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "211:117:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "379:81:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "389:65:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "404:5:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "411:42:17",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "400:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "400:54:17"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "389:7:17"
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
                "src": "361:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "371:7:17",
                "type": ""
              }
            ],
            "src": "334:126:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "511:51:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "521:35:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "550:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "532:17:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "532:24:17"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "521:7:17"
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
                "src": "493:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "503:7:17",
                "type": ""
              }
            ],
            "src": "466:96:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "611:79:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "668:16:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "677:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "680:1:17",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "670:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "670:12:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "670:12:17"
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
                            "src": "634:5:17"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "659:5:17"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "641:17:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "641:24:17"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "631:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "631:35:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "624:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "624:43:17"
                  },
                  "nodeType": "YulIf",
                  "src": "621:63:17"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "604:5:17",
                "type": ""
              }
            ],
            "src": "568:122:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "759:80:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "769:22:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "784:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "778:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "778:13:17"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "769:5:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "827:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "800:26:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "800:33:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "800:33:17"
                }
              ]
            },
            "name": "abi_decode_t_address_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "737:6:17",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "745:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "753:5:17",
                "type": ""
              }
            ],
            "src": "696:143:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "922:274:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "968:83:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "970:77:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "970:79:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "970:79:17"
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
                            "src": "943:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "952:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "939:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "939:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "964:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "935:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "935:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "932:119:17"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "1061:128:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "1076:15:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1090:1:17",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "1080:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1105:74:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1151:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1162:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1147:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1147:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1171:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "1115:31:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1115:64:17"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1105:6:17"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_address_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "892:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "903:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "915:6:17",
                "type": ""
              }
            ],
            "src": "845:351:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1261:40:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1272:22:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1288:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1282:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1282:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "1272:6:17"
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
                "src": "1244:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1254:6:17",
                "type": ""
              }
            ],
            "src": "1202:99:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1335:152:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1352:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1355:77:17",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1345:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1345:88:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1345:88:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1449:1:17",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1452:4:17",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1442:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1442:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1442:15:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1473:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1476:4:17",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "1466:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1466:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1466:15:17"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "1307:180:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1521:152:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1538:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1541:77:17",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1531:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1531:88:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1531:88:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1635:1:17",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1638:4:17",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1628:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1628:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1628:15:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1659:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1662:4:17",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "1652:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1652:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1652:15:17"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "1493:180:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1730:269:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1740:22:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "1754:4:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1760:1:17",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "1750:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1750:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "1740:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1771:38:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "1801:4:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1807:1:17",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "1797:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1797:12:17"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "1775:18:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1848:51:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1862:27:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "1876:6:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1884:4:17",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "1872:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1872:17:17"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "1862:6:17"
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
                        "src": "1828:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "1821:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1821:26:17"
                  },
                  "nodeType": "YulIf",
                  "src": "1818:81:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1951:42:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "1965:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1965:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1965:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "1915:18:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "1938:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1946:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "1935:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1935:14:17"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "1912:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1912:38:17"
                  },
                  "nodeType": "YulIf",
                  "src": "1909:84:17"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "1714:4:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1723:6:17",
                "type": ""
              }
            ],
            "src": "1679:320:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2059:87:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2069:11:17",
                  "value": {
                    "name": "ptr",
                    "nodeType": "YulIdentifier",
                    "src": "2077:3:17"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "2069:4:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2097:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "2100:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2090:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2090:14:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2090:14:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2113:26:17",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2131:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2134:4:17",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "keccak256",
                      "nodeType": "YulIdentifier",
                      "src": "2121:9:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2121:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "2113:4:17"
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
                "src": "2046:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "2054:4:17",
                "type": ""
              }
            ],
            "src": "2005:141:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2196:49:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2206:33:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2224:5:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2231:2:17",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2220:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2220:14:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2236:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "2216:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2216:23:17"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "2206:6:17"
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
                "src": "2179:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "2189:6:17",
                "type": ""
              }
            ],
            "src": "2152:93:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2304:54:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2314:37:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "bits",
                        "nodeType": "YulIdentifier",
                        "src": "2339:4:17"
                      },
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2345:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "shl",
                      "nodeType": "YulIdentifier",
                      "src": "2335:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2335:16:17"
                  },
                  "variableNames": [
                    {
                      "name": "newValue",
                      "nodeType": "YulIdentifier",
                      "src": "2314:8:17"
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
                "src": "2279:4:17",
                "type": ""
              },
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "2285:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "newValue",
                "nodeType": "YulTypedName",
                "src": "2295:8:17",
                "type": ""
              }
            ],
            "src": "2251:107:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2440:317:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2450:35:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBytes",
                        "nodeType": "YulIdentifier",
                        "src": "2471:10:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2483:1:17",
                        "type": "",
                        "value": "8"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "2467:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2467:18:17"
                  },
                  "variables": [
                    {
                      "name": "shiftBits",
                      "nodeType": "YulTypedName",
                      "src": "2454:9:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2494:109:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulIdentifier",
                        "src": "2525:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2536:66:17",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "shift_left_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "2506:18:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2506:97:17"
                  },
                  "variables": [
                    {
                      "name": "mask",
                      "nodeType": "YulTypedName",
                      "src": "2498:4:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2612:51:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulIdentifier",
                        "src": "2643:9:17"
                      },
                      {
                        "name": "toInsert",
                        "nodeType": "YulIdentifier",
                        "src": "2654:8:17"
                      }
                    ],
                    "functionName": {
                      "name": "shift_left_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "2624:18:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2624:39:17"
                  },
                  "variableNames": [
                    {
                      "name": "toInsert",
                      "nodeType": "YulIdentifier",
                      "src": "2612:8:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2672:30:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2685:5:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "mask",
                            "nodeType": "YulIdentifier",
                            "src": "2696:4:17"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "2692:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2692:9:17"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "2681:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2681:21:17"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "2672:5:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2711:40:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2724:5:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "toInsert",
                            "nodeType": "YulIdentifier",
                            "src": "2735:8:17"
                          },
                          {
                            "name": "mask",
                            "nodeType": "YulIdentifier",
                            "src": "2745:4:17"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "2731:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2731:19:17"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "2721:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2721:30:17"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "2711:6:17"
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
                "src": "2401:5:17",
                "type": ""
              },
              {
                "name": "shiftBytes",
                "nodeType": "YulTypedName",
                "src": "2408:10:17",
                "type": ""
              },
              {
                "name": "toInsert",
                "nodeType": "YulTypedName",
                "src": "2420:8:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "2433:6:17",
                "type": ""
              }
            ],
            "src": "2364:393:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2808:32:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2818:16:17",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "2829:5:17"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "2818:7:17"
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
                "src": "2790:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "2800:7:17",
                "type": ""
              }
            ],
            "src": "2763:77:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2878:28:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2888:12:17",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "2895:5:17"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "2888:3:17"
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
                "src": "2864:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "2874:3:17",
                "type": ""
              }
            ],
            "src": "2846:60:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2972:82:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2982:66:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "3040:5:17"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "3022:17:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3022:24:17"
                          }
                        ],
                        "functionName": {
                          "name": "identity",
                          "nodeType": "YulIdentifier",
                          "src": "3013:8:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3013:34:17"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "2995:17:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2995:53:17"
                  },
                  "variableNames": [
                    {
                      "name": "converted",
                      "nodeType": "YulIdentifier",
                      "src": "2982:9:17"
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
                "src": "2952:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "converted",
                "nodeType": "YulTypedName",
                "src": "2962:9:17",
                "type": ""
              }
            ],
            "src": "2912:142:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3107:28:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3117:12:17",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "3124:5:17"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "3117:3:17"
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
                "src": "3093:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "3103:3:17",
                "type": ""
              }
            ],
            "src": "3060:75:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3217:193:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3227:63:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value_0",
                        "nodeType": "YulIdentifier",
                        "src": "3282:7:17"
                      }
                    ],
                    "functionName": {
                      "name": "convert_t_uint256_to_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "3251:30:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3251:39:17"
                  },
                  "variables": [
                    {
                      "name": "convertedValue_0",
                      "nodeType": "YulTypedName",
                      "src": "3231:16:17",
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
                        "src": "3306:4:17"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "slot",
                                "nodeType": "YulIdentifier",
                                "src": "3346:4:17"
                              }
                            ],
                            "functionName": {
                              "name": "sload",
                              "nodeType": "YulIdentifier",
                              "src": "3340:5:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3340:11:17"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "3353:6:17"
                          },
                          {
                            "arguments": [
                              {
                                "name": "convertedValue_0",
                                "nodeType": "YulIdentifier",
                                "src": "3385:16:17"
                              }
                            ],
                            "functionName": {
                              "name": "prepare_store_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "3361:23:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3361:41:17"
                          }
                        ],
                        "functionName": {
                          "name": "update_byte_slice_dynamic32",
                          "nodeType": "YulIdentifier",
                          "src": "3312:27:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3312:91:17"
                      }
                    ],
                    "functionName": {
                      "name": "sstore",
                      "nodeType": "YulIdentifier",
                      "src": "3299:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3299:105:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3299:105:17"
                }
              ]
            },
            "name": "update_storage_value_t_uint256_to_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "3194:4:17",
                "type": ""
              },
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "3200:6:17",
                "type": ""
              },
              {
                "name": "value_0",
                "nodeType": "YulTypedName",
                "src": "3208:7:17",
                "type": ""
              }
            ],
            "src": "3141:269:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3465:24:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3475:8:17",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "3482:1:17",
                    "type": "",
                    "value": "0"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "3475:3:17"
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
                "src": "3461:3:17",
                "type": ""
              }
            ],
            "src": "3416:73:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3548:136:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3558:46:17",
                  "value": {
                    "arguments": [],
                    "functionName": {
                      "name": "zero_value_for_split_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "3572:30:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3572:32:17"
                  },
                  "variables": [
                    {
                      "name": "zero_0",
                      "nodeType": "YulTypedName",
                      "src": "3562:6:17",
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
                        "src": "3657:4:17"
                      },
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "3663:6:17"
                      },
                      {
                        "name": "zero_0",
                        "nodeType": "YulIdentifier",
                        "src": "3671:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "update_storage_value_t_uint256_to_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "3613:43:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3613:65:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3613:65:17"
                }
              ]
            },
            "name": "storage_set_to_zero_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "3534:4:17",
                "type": ""
              },
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "3540:6:17",
                "type": ""
              }
            ],
            "src": "3495:189:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3740:136:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3807:63:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "3851:5:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3858:1:17",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "storage_set_to_zero_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "3821:29:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3821:39:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3821:39:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "start",
                        "nodeType": "YulIdentifier",
                        "src": "3760:5:17"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "3767:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "3757:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3757:14:17"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "3772:26:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "3774:22:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "3787:5:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3794:1:17",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "3783:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3783:13:17"
                        },
                        "variableNames": [
                          {
                            "name": "start",
                            "nodeType": "YulIdentifier",
                            "src": "3774:5:17"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "3754:2:17",
                    "statements": []
                  },
                  "src": "3750:120:17"
                }
              ]
            },
            "name": "clear_storage_range_t_bytes1",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "start",
                "nodeType": "YulTypedName",
                "src": "3728:5:17",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "3735:3:17",
                "type": ""
              }
            ],
            "src": "3690:186:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3961:464:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3987:431:17",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "4001:54:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "4049:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "array_dataslot_t_string_storage",
                            "nodeType": "YulIdentifier",
                            "src": "4017:31:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4017:38:17"
                        },
                        "variables": [
                          {
                            "name": "dataArea",
                            "nodeType": "YulTypedName",
                            "src": "4005:8:17",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "4068:63:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "dataArea",
                              "nodeType": "YulIdentifier",
                              "src": "4091:8:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "startIndex",
                                  "nodeType": "YulIdentifier",
                                  "src": "4119:10:17"
                                }
                              ],
                              "functionName": {
                                "name": "divide_by_32_ceil",
                                "nodeType": "YulIdentifier",
                                "src": "4101:17:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4101:29:17"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "4087:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4087:44:17"
                        },
                        "variables": [
                          {
                            "name": "deleteStart",
                            "nodeType": "YulTypedName",
                            "src": "4072:11:17",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "4288:27:17",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "4290:23:17",
                              "value": {
                                "name": "dataArea",
                                "nodeType": "YulIdentifier",
                                "src": "4305:8:17"
                              },
                              "variableNames": [
                                {
                                  "name": "deleteStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "4290:11:17"
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
                              "src": "4272:10:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4284:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "4269:2:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4269:18:17"
                        },
                        "nodeType": "YulIf",
                        "src": "4266:49:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "deleteStart",
                              "nodeType": "YulIdentifier",
                              "src": "4357:11:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "dataArea",
                                  "nodeType": "YulIdentifier",
                                  "src": "4374:8:17"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "len",
                                      "nodeType": "YulIdentifier",
                                      "src": "4402:3:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "divide_by_32_ceil",
                                    "nodeType": "YulIdentifier",
                                    "src": "4384:17:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "4384:22:17"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "4370:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "4370:37:17"
                            }
                          ],
                          "functionName": {
                            "name": "clear_storage_range_t_bytes1",
                            "nodeType": "YulIdentifier",
                            "src": "4328:28:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4328:80:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4328:80:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "3978:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3983:2:17",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "3975:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3975:11:17"
                  },
                  "nodeType": "YulIf",
                  "src": "3972:446:17"
                }
              ]
            },
            "name": "clean_up_bytearray_end_slots_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "3937:5:17",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "3944:3:17",
                "type": ""
              },
              {
                "name": "startIndex",
                "nodeType": "YulTypedName",
                "src": "3949:10:17",
                "type": ""
              }
            ],
            "src": "3882:543:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4494:54:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4504:37:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "bits",
                        "nodeType": "YulIdentifier",
                        "src": "4529:4:17"
                      },
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4535:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "shr",
                      "nodeType": "YulIdentifier",
                      "src": "4525:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4525:16:17"
                  },
                  "variableNames": [
                    {
                      "name": "newValue",
                      "nodeType": "YulIdentifier",
                      "src": "4504:8:17"
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
                "src": "4469:4:17",
                "type": ""
              },
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4475:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "newValue",
                "nodeType": "YulTypedName",
                "src": "4485:8:17",
                "type": ""
              }
            ],
            "src": "4431:117:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4605:118:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4615:68:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4664:1:17",
                                "type": "",
                                "value": "8"
                              },
                              {
                                "name": "bytes",
                                "nodeType": "YulIdentifier",
                                "src": "4667:5:17"
                              }
                            ],
                            "functionName": {
                              "name": "mul",
                              "nodeType": "YulIdentifier",
                              "src": "4660:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4660:13:17"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4679:1:17",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "4675:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4675:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "shift_right_unsigned_dynamic",
                          "nodeType": "YulIdentifier",
                          "src": "4631:28:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4631:51:17"
                      }
                    ],
                    "functionName": {
                      "name": "not",
                      "nodeType": "YulIdentifier",
                      "src": "4627:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4627:56:17"
                  },
                  "variables": [
                    {
                      "name": "mask",
                      "nodeType": "YulTypedName",
                      "src": "4619:4:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4692:25:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "4706:4:17"
                      },
                      {
                        "name": "mask",
                        "nodeType": "YulIdentifier",
                        "src": "4712:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "4702:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4702:15:17"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "4692:6:17"
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
                "src": "4582:4:17",
                "type": ""
              },
              {
                "name": "bytes",
                "nodeType": "YulTypedName",
                "src": "4588:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "4598:6:17",
                "type": ""
              }
            ],
            "src": "4554:169:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4809:214:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4942:37:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "4969:4:17"
                      },
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "4975:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "mask_bytes_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "4950:18:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4950:29:17"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "4942:4:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4988:29:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "4999:4:17"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5009:1:17",
                            "type": "",
                            "value": "2"
                          },
                          {
                            "name": "len",
                            "nodeType": "YulIdentifier",
                            "src": "5012:3:17"
                          }
                        ],
                        "functionName": {
                          "name": "mul",
                          "nodeType": "YulIdentifier",
                          "src": "5005:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5005:11:17"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "4996:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4996:21:17"
                  },
                  "variableNames": [
                    {
                      "name": "used",
                      "nodeType": "YulIdentifier",
                      "src": "4988:4:17"
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
                "src": "4790:4:17",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "4796:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "used",
                "nodeType": "YulTypedName",
                "src": "4804:4:17",
                "type": ""
              }
            ],
            "src": "4728:295:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5120:1303:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5131:51:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "5178:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "5145:32:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5145:37:17"
                  },
                  "variables": [
                    {
                      "name": "newLen",
                      "nodeType": "YulTypedName",
                      "src": "5135:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5267:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "5269:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5269:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5269:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "5239:6:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5247:18:17",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "5236:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5236:30:17"
                  },
                  "nodeType": "YulIf",
                  "src": "5233:56:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5299:52:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "slot",
                            "nodeType": "YulIdentifier",
                            "src": "5345:4:17"
                          }
                        ],
                        "functionName": {
                          "name": "sload",
                          "nodeType": "YulIdentifier",
                          "src": "5339:5:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5339:11:17"
                      }
                    ],
                    "functionName": {
                      "name": "extract_byte_array_length",
                      "nodeType": "YulIdentifier",
                      "src": "5313:25:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5313:38:17"
                  },
                  "variables": [
                    {
                      "name": "oldLen",
                      "nodeType": "YulTypedName",
                      "src": "5303:6:17",
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
                        "src": "5444:4:17"
                      },
                      {
                        "name": "oldLen",
                        "nodeType": "YulIdentifier",
                        "src": "5450:6:17"
                      },
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "5458:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "clean_up_bytearray_end_slots_t_string_storage",
                      "nodeType": "YulIdentifier",
                      "src": "5398:45:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5398:67:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5398:67:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5475:18:17",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "5492:1:17",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulTypedName",
                      "src": "5479:9:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5503:17:17",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "5516:4:17",
                    "type": "",
                    "value": "0x20"
                  },
                  "variableNames": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulIdentifier",
                      "src": "5503:9:17"
                    }
                  ]
                },
                {
                  "cases": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "5567:611:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "5581:37:17",
                            "value": {
                              "arguments": [
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "5600:6:17"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "5612:4:17",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "5608:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "5608:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "5596:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5596:22:17"
                            },
                            "variables": [
                              {
                                "name": "loopEnd",
                                "nodeType": "YulTypedName",
                                "src": "5585:7:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "5632:51:17",
                            "value": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "5678:4:17"
                                }
                              ],
                              "functionName": {
                                "name": "array_dataslot_t_string_storage",
                                "nodeType": "YulIdentifier",
                                "src": "5646:31:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5646:37:17"
                            },
                            "variables": [
                              {
                                "name": "dstPtr",
                                "nodeType": "YulTypedName",
                                "src": "5636:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "5696:10:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "5705:1:17",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "i",
                                "nodeType": "YulTypedName",
                                "src": "5700:1:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "5764:163:17",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "5789:6:17"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "src",
                                                "nodeType": "YulIdentifier",
                                                "src": "5807:3:17"
                                              },
                                              {
                                                "name": "srcOffset",
                                                "nodeType": "YulIdentifier",
                                                "src": "5812:9:17"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nodeType": "YulIdentifier",
                                              "src": "5803:3:17"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "5803:19:17"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mload",
                                          "nodeType": "YulIdentifier",
                                          "src": "5797:5:17"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "5797:26:17"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "5782:6:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "5782:42:17"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "5782:42:17"
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "5841:24:17",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "5855:6:17"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "5863:1:17",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "5851:3:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "5851:14:17"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "dstPtr",
                                      "nodeType": "YulIdentifier",
                                      "src": "5841:6:17"
                                    }
                                  ]
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "5882:31:17",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "5899:9:17"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "5910:2:17",
                                        "type": "",
                                        "value": "32"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "5895:3:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "5895:18:17"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "srcOffset",
                                      "nodeType": "YulIdentifier",
                                      "src": "5882:9:17"
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
                                  "src": "5730:1:17"
                                },
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "5733:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "5727:2:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5727:14:17"
                            },
                            "nodeType": "YulForLoop",
                            "post": {
                              "nodeType": "YulBlock",
                              "src": "5742:21:17",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "5744:17:17",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "5753:1:17"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "5756:4:17",
                                        "type": "",
                                        "value": "0x20"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "5749:3:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "5749:12:17"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "5744:1:17"
                                    }
                                  ]
                                }
                              ]
                            },
                            "pre": {
                              "nodeType": "YulBlock",
                              "src": "5723:3:17",
                              "statements": []
                            },
                            "src": "5719:208:17"
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "5963:156:17",
                              "statements": [
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "5981:43:17",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "6008:3:17"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "6013:9:17"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "6004:3:17"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "6004:19:17"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "5998:5:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "5998:26:17"
                                  },
                                  "variables": [
                                    {
                                      "name": "lastValue",
                                      "nodeType": "YulTypedName",
                                      "src": "5985:9:17",
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
                                        "src": "6048:6:17"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "lastValue",
                                            "nodeType": "YulIdentifier",
                                            "src": "6075:9:17"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "name": "newLen",
                                                "nodeType": "YulIdentifier",
                                                "src": "6090:6:17"
                                              },
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "6098:4:17",
                                                "type": "",
                                                "value": "0x1f"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "and",
                                              "nodeType": "YulIdentifier",
                                              "src": "6086:3:17"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "6086:17:17"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mask_bytes_dynamic",
                                          "nodeType": "YulIdentifier",
                                          "src": "6056:18:17"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "6056:48:17"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "6041:6:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "6041:64:17"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "6041:64:17"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "5946:7:17"
                                },
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "5955:6:17"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "5943:2:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5943:19:17"
                            },
                            "nodeType": "YulIf",
                            "src": "5940:179:17"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "6139:4:17"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "newLen",
                                          "nodeType": "YulIdentifier",
                                          "src": "6153:6:17"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "6161:1:17",
                                          "type": "",
                                          "value": "2"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "6149:3:17"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "6149:14:17"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "6165:1:17",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "6145:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "6145:22:17"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "6132:6:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6132:36:17"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "6132:36:17"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "5560:618:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5565:1:17",
                        "type": "",
                        "value": "1"
                      }
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "6195:222:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "6209:14:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6222:1:17",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "6213:5:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "6246:67:17",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "6264:35:17",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "6283:3:17"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "6288:9:17"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "6279:3:17"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "6279:19:17"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "6273:5:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "6273:26:17"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "6264:5:17"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "name": "newLen",
                              "nodeType": "YulIdentifier",
                              "src": "6239:6:17"
                            },
                            "nodeType": "YulIf",
                            "src": "6236:77:17"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "6333:4:17"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "6392:5:17"
                                    },
                                    {
                                      "name": "newLen",
                                      "nodeType": "YulIdentifier",
                                      "src": "6399:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "extract_used_part_and_set_length_of_short_byte_array",
                                    "nodeType": "YulIdentifier",
                                    "src": "6339:52:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "6339:67:17"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "6326:6:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6326:81:17"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "6326:81:17"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "6187:230:17",
                      "value": "default"
                    }
                  ],
                  "expression": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "5540:6:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5548:2:17",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "5537:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5537:14:17"
                  },
                  "nodeType": "YulSwitch",
                  "src": "5530:887:17"
                }
              ]
            },
            "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "5109:4:17",
                "type": ""
              },
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "5115:3:17",
                "type": ""
              }
            ],
            "src": "5028:1395:17"
          }
        ]
      },
      "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_address_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n}\n",
      "id": 17,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:38022:17",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "47:35:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "57:19:17",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "73:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "67:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "67:9:17"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "57:6:17"
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
                "src": "40:6:17",
                "type": ""
              }
            ],
            "src": "7:75:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "177:28:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "194:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "197:1:17",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "187:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "187:12:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "187:12:17"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "88:117:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "300:28:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "317:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "320:1:17",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "310:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "310:12:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "310:12:17"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "211:117:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "378:105:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "388:89:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "403:5:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "410:66:17",
                        "type": "",
                        "value": "0xffffffff00000000000000000000000000000000000000000000000000000000"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "399:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "399:78:17"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "388:7:17"
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
                "src": "360:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "370:7:17",
                "type": ""
              }
            ],
            "src": "334:149:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "531:78:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "587:16:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "596:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "599:1:17",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "589:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "589:12:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "589:12:17"
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
                            "src": "554:5:17"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "578:5:17"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_bytes4",
                              "nodeType": "YulIdentifier",
                              "src": "561:16:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "561:23:17"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "551:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "551:34:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "544:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "544:42:17"
                  },
                  "nodeType": "YulIf",
                  "src": "541:62:17"
                }
              ]
            },
            "name": "validator_revert_t_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "524:5:17",
                "type": ""
              }
            ],
            "src": "489:120:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "666:86:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "676:29:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "698:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "685:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "685:20:17"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "676:5:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "740:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_bytes4",
                      "nodeType": "YulIdentifier",
                      "src": "714:25:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "714:32:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "714:32:17"
                }
              ]
            },
            "name": "abi_decode_t_bytes4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "644:6:17",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "652:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "660:5:17",
                "type": ""
              }
            ],
            "src": "615:137:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "823:262:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "869:83:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "871:77:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "871:79:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "871:79:17"
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
                            "src": "844:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "853:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "840:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "840:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "865:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "836:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "836:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "833:119:17"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "962:116:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "977:15:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "991:1:17",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "981:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "1006:62:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "1040:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "1051:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "1036:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "1036:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "1060:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bytes4",
                          "nodeType": "YulIdentifier",
                          "src": "1016:19:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1016:52:17"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "1006:6:17"
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
                "src": "793:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "804:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "816:6:17",
                "type": ""
              }
            ],
            "src": "758:327:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1133:48:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1143:32:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1168:5:17"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "1161:6:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1161:13:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "1154:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1154:21:17"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "1143:7:17"
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
                "src": "1115:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "1125:7:17",
                "type": ""
              }
            ],
            "src": "1091:90:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1246:50:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1263:3:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1283:5:17"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_bool",
                          "nodeType": "YulIdentifier",
                          "src": "1268:14:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1268:21:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1256:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1256:34:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1256:34:17"
                }
              ]
            },
            "name": "abi_encode_t_bool_to_t_bool_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1234:5:17",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1241:3:17",
                "type": ""
              }
            ],
            "src": "1187:109:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1394:118:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1404:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "1416:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1427:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1412:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1412:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "1404:4:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "1478:6:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "1491:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1502:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1487:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1487:17:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bool_to_t_bool_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "1440:37:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1440:65:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1440:65:17"
                }
              ]
            },
            "name": "abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "1366:9:17",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "1378:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "1389:4:17",
                "type": ""
              }
            ],
            "src": "1302:210:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1577:40:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1588:22:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1604:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1598:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1598:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "1588:6:17"
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
                "src": "1560:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1570:6:17",
                "type": ""
              }
            ],
            "src": "1518:99:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1719:73:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1736:3:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1741:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1729:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1729:19:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1729:19:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1757:29:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1776:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1781:4:17",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1772:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1772:14:17"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "1757:11:17"
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
                "src": "1691:3:17",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1696:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "1707:11:17",
                "type": ""
              }
            ],
            "src": "1623:169:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1847:258:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1857:10:17",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "1866:1:17",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "1861:1:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1926:63:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "1951:3:17"
                                },
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "1956:1:17"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1947:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1947:11:17"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
                                      "nodeType": "YulIdentifier",
                                      "src": "1970:3:17"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "1975:1:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1966:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1966:11:17"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "1960:5:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1960:18:17"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1940:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1940:39:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1940:39:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "1887:1:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1890:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "1884:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1884:13:17"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "1898:19:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1900:15:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "1909:1:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1912:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1905:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1905:10:17"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "1900:1:17"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "1880:3:17",
                    "statements": []
                  },
                  "src": "1876:113:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "2023:76:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "2073:3:17"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "2078:6:17"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "2069:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "2069:16:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "2087:1:17",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "2062:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "2062:27:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "2062:27:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "2004:1:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2007:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "2001:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2001:13:17"
                  },
                  "nodeType": "YulIf",
                  "src": "1998:101:17"
                }
              ]
            },
            "name": "copy_memory_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "1829:3:17",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "1834:3:17",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1839:6:17",
                "type": ""
              }
            ],
            "src": "1798:307:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2159:54:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2169:38:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2187:5:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2194:2:17",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2183:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2183:14:17"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2203:2:17",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "2199:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2199:7:17"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "2179:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2179:28:17"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "2169:6:17"
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
                "src": "2142:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "2152:6:17",
                "type": ""
              }
            ],
            "src": "2111:102:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2311:272:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "2321:53:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "2368:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "2335:32:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2335:39:17"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "2325:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2383:78:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2449:3:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2454:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2390:58:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2390:71:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "2383:3:17"
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
                            "src": "2496:5:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2503:4:17",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2492:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2492:16:17"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2510:3:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2515:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "2470:21:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2470:52:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2470:52:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2531:46:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2542:3:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2569:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "2547:21:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2547:29:17"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2538:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2538:39:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "2531:3:17"
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
                "src": "2292:5:17",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "2299:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "2307:3:17",
                "type": ""
              }
            ],
            "src": "2219:364:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2707:195:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2717:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2729:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2740:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2725:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2725:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2717:4:17"
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
                            "src": "2764:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2775:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2760:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2760:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2783:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2789:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2779:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2779:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2753:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2753:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2753:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2809:86:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2881:6:17"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2890:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2817:63:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2817:78:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2809:4:17"
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
                "src": "2679:9:17",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2691:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2702:4:17",
                "type": ""
              }
            ],
            "src": "2589:313:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2953:32:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2963:16:17",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "2974:5:17"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "2963:7:17"
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
                "src": "2935:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "2945:7:17",
                "type": ""
              }
            ],
            "src": "2908:77:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3034:79:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3091:16:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3100:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "3103:1:17",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "3093:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3093:12:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3093:12:17"
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
                            "src": "3057:5:17"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "3082:5:17"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "3064:17:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3064:24:17"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "3054:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3054:35:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "3047:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3047:43:17"
                  },
                  "nodeType": "YulIf",
                  "src": "3044:63:17"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3027:5:17",
                "type": ""
              }
            ],
            "src": "2991:122:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3171:87:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3181:29:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "3203:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "3190:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3190:20:17"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "3181:5:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3246:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "3219:26:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3219:33:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3219:33:17"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "3149:6:17",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "3157:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3165:5:17",
                "type": ""
              }
            ],
            "src": "3119:139:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3330:263:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3376:83:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "3378:77:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3378:79:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3378:79:17"
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
                            "src": "3351:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3360:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "3347:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3347:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3372:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "3343:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3343:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "3340:119:17"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "3469:117:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "3484:15:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3498:1:17",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "3488:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "3513:63:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "3548:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "3559:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "3544:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "3544:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "3568:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "3523:20:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3523:53:17"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "3513:6:17"
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
                "src": "3300:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "3311:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "3323:6:17",
                "type": ""
              }
            ],
            "src": "3264:329:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3644:81:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3654:65:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3669:5:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3676:42:17",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "3665:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3665:54:17"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "3654:7:17"
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
                "src": "3626:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "3636:7:17",
                "type": ""
              }
            ],
            "src": "3599:126:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3776:51:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3786:35:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "3815:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint160",
                      "nodeType": "YulIdentifier",
                      "src": "3797:17:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3797:24:17"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "3786:7:17"
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
                "src": "3758:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "3768:7:17",
                "type": ""
              }
            ],
            "src": "3731:96:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3898:53:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "3915:3:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "3938:5:17"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "3920:17:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3920:24:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3908:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3908:37:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3908:37:17"
                }
              ]
            },
            "name": "abi_encode_t_address_to_t_address_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "3886:5:17",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "3893:3:17",
                "type": ""
              }
            ],
            "src": "3833:118:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4055:124:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4065:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "4077:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4088:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4073:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4073:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "4065:4:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "4145:6:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4158:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "4169:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4154:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4154:17:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "4101:43:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4101:71:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4101:71:17"
                }
              ]
            },
            "name": "abi_encode_tuple_t_address__to_t_address__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "4027:9:17",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4039:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "4050:4:17",
                "type": ""
              }
            ],
            "src": "3957:222:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4228:79:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4285:16:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4294:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "4297:1:17",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "4287:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4287:12:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4287:12:17"
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
                            "src": "4251:5:17"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "4276:5:17"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_address",
                              "nodeType": "YulIdentifier",
                              "src": "4258:17:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4258:24:17"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "4248:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4248:35:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "4241:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4241:43:17"
                  },
                  "nodeType": "YulIf",
                  "src": "4238:63:17"
                }
              ]
            },
            "name": "validator_revert_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4221:5:17",
                "type": ""
              }
            ],
            "src": "4185:122:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4365:87:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4375:29:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "4397:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "4384:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4384:20:17"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "4375:5:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "4440:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_address",
                      "nodeType": "YulIdentifier",
                      "src": "4413:26:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4413:33:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4413:33:17"
                }
              ]
            },
            "name": "abi_decode_t_address",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "4343:6:17",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "4351:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4359:5:17",
                "type": ""
              }
            ],
            "src": "4313:139:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4541:391:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4587:83:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "4589:77:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4589:79:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4589:79:17"
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
                            "src": "4562:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "4571:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "4558:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4558:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4583:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "4554:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4554:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "4551:119:17"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4680:117:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4695:15:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4709:1:17",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4699:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4724:63:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4759:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4770:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4755:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4755:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4779:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "4734:20:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4734:53:17"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "4724:6:17"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "4807:118:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "4822:16:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4836:2:17",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "4826:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "4852:63:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "4887:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4898:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4883:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4883:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "4907:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "4862:20:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4862:53:17"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "4852:6:17"
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
                "src": "4503:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "4514:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "4526:6:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "4534:6:17",
                "type": ""
              }
            ],
            "src": "4458:474:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5003:53:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "5020:3:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "5043:5:17"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "5025:17:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5025:24:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "5013:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5013:37:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5013:37:17"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "4991:5:17",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "4998:3:17",
                "type": ""
              }
            ],
            "src": "4938:118:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5160:124:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "5170:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "5182:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5193:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "5178:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5178:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "5170:4:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "5250:6:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5263:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5274:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5259:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5259:17:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "5206:43:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5206:71:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "5206:71:17"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5132:9:17",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5144:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "5155:4:17",
                "type": ""
              }
            ],
            "src": "5062:222:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5390:519:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5436:83:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "5438:77:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5438:79:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5438:79:17"
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
                            "src": "5411:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5420:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5407:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5407:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5432:2:17",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5403:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5403:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "5400:119:17"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5529:117:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5544:15:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5558:1:17",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5548:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5573:63:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5608:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5619:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5604:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5604:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5628:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "5583:20:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5583:53:17"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5573:6:17"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5656:118:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5671:16:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5685:2:17",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5675:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5701:63:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5736:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5747:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5732:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5732:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5756:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "5711:20:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5711:53:17"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "5701:6:17"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5784:118:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5799:16:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5813:2:17",
                        "type": "",
                        "value": "64"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5803:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5829:63:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5864:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5875:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5860:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5860:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5884:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "5839:20:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5839:53:17"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "5829:6:17"
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
                "src": "5344:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5355:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5367:6:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "5375:6:17",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "5383:6:17",
                "type": ""
              }
            ],
            "src": "5290:619:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5981:263:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6027:83:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "6029:77:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6029:79:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6029:79:17"
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
                            "src": "6002:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6011:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5998:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5998:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6023:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5994:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5994:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "5991:119:17"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "6120:117:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "6135:15:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6149:1:17",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "6139:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "6164:63:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6199:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "6210:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6195:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6195:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6219:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "6174:20:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6174:53:17"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "6164:6:17"
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
                "src": "5951:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5962:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5974:6:17",
                "type": ""
              }
            ],
            "src": "5915:329:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6290:76:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6344:16:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6353:1:17",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "6356:1:17",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "6346:6:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6346:12:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6346:12:17"
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
                            "src": "6313:5:17"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "6335:5:17"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_bool",
                              "nodeType": "YulIdentifier",
                              "src": "6320:14:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6320:21:17"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "6310:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6310:32:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "6303:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6303:40:17"
                  },
                  "nodeType": "YulIf",
                  "src": "6300:60:17"
                }
              ]
            },
            "name": "validator_revert_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6283:5:17",
                "type": ""
              }
            ],
            "src": "6250:116:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6421:84:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "6431:29:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "6453:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "6440:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6440:20:17"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "6431:5:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "6493:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_bool",
                      "nodeType": "YulIdentifier",
                      "src": "6469:23:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6469:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "6469:30:17"
                }
              ]
            },
            "name": "abi_decode_t_bool",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "6399:6:17",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "6407:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "6415:5:17",
                "type": ""
              }
            ],
            "src": "6372:133:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6591:388:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6637:83:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "6639:77:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6639:79:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6639:79:17"
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
                            "src": "6612:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6621:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6608:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6608:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6633:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "6604:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6604:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "6601:119:17"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "6730:117:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "6745:15:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6759:1:17",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "6749:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "6774:63:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6809:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "6820:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6805:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6805:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6829:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "6784:20:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6784:53:17"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "6774:6:17"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "6857:115:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "6872:16:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6886:2:17",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "6876:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "6902:60:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6934:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "6945:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6930:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6930:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6954:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bool",
                          "nodeType": "YulIdentifier",
                          "src": "6912:17:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6912:50:17"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "6902:6:17"
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
                "src": "6553:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "6564:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6576:6:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "6584:6:17",
                "type": ""
              }
            ],
            "src": "6511:468:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7074:28:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7091:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7094:1:17",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "7084:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7084:12:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7084:12:17"
                }
              ]
            },
            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
            "nodeType": "YulFunctionDefinition",
            "src": "6985:117:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7197:28:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7214:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7217:1:17",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "7207:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7207:12:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7207:12:17"
                }
              ]
            },
            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
            "nodeType": "YulFunctionDefinition",
            "src": "7108:117:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7259:152:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7276:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7279:77:17",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7269:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7269:88:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7269:88:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7373:1:17",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7376:4:17",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7366:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7366:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7366:15:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7397:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7400:4:17",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "7390:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7390:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7390:15:17"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "7231:180:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7460:238:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "7470:58:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "7492:6:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "7522:4:17"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "7500:21:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7500:27:17"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "7488:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7488:40:17"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "7474:10:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7639:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "7641:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7641:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7641:18:17"
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
                            "src": "7582:10:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7594:18:17",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "7579:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7579:34:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "7618:10:17"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "7630:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "7615:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7615:22:17"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "7576:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7576:62:17"
                  },
                  "nodeType": "YulIf",
                  "src": "7573:88:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7677:2:17",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "7681:10:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "7670:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7670:22:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7670:22:17"
                }
              ]
            },
            "name": "finalize_allocation",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "7446:6:17",
                "type": ""
              },
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "7454:4:17",
                "type": ""
              }
            ],
            "src": "7417:281:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7745:88:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "7755:30:17",
                  "value": {
                    "arguments": [],
                    "functionName": {
                      "name": "allocate_unbounded",
                      "nodeType": "YulIdentifier",
                      "src": "7765:18:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7765:20:17"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "7755:6:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "7814:6:17"
                      },
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "7822:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "finalize_allocation",
                      "nodeType": "YulIdentifier",
                      "src": "7794:19:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7794:33:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "7794:33:17"
                }
              ]
            },
            "name": "allocate_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "7729:4:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "7738:6:17",
                "type": ""
              }
            ],
            "src": "7704:129:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7905:241:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8010:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "8012:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8012:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8012:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "7982:6:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7990:18:17",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "7979:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7979:30:17"
                  },
                  "nodeType": "YulIf",
                  "src": "7976:56:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8042:37:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "8072:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "round_up_to_mul_of_32",
                      "nodeType": "YulIdentifier",
                      "src": "8050:21:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8050:29:17"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "8042:4:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8116:23:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "8128:4:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8134:4:17",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8124:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8124:15:17"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "8116:4:17"
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
                "src": "7889:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "7900:4:17",
                "type": ""
              }
            ],
            "src": "7839:307:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8203:103:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "8226:3:17"
                      },
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "8231:3:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "8236:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldatacopy",
                      "nodeType": "YulIdentifier",
                      "src": "8213:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8213:30:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8213:30:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "8284:3:17"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "8289:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8280:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8280:16:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8298:1:17",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8273:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8273:27:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8273:27:17"
                }
              ]
            },
            "name": "copy_calldata_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "8185:3:17",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "8190:3:17",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "8195:6:17",
                "type": ""
              }
            ],
            "src": "8152:154:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8395:327:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8405:74:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "8471:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "array_allocation_size_t_bytes_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "8430:40:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8430:48:17"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "8414:15:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8414:65:17"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "8405:5:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "8495:5:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "8502:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8488:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8488:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8488:21:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "8518:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "8533:5:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8540:4:17",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8529:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8529:16:17"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "8522:3:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8583:83:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                            "nodeType": "YulIdentifier",
                            "src": "8585:77:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8585:79:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8585:79:17"
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
                            "src": "8564:3:17"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "8569:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "8560:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8560:16:17"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "8578:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "8557:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8557:25:17"
                  },
                  "nodeType": "YulIf",
                  "src": "8554:112:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "8699:3:17"
                      },
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "8704:3:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "8709:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "copy_calldata_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "8675:23:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8675:41:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8675:41:17"
                }
              ]
            },
            "name": "abi_decode_available_length_t_bytes_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "8368:3:17",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "8373:6:17",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "8381:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "8389:5:17",
                "type": ""
              }
            ],
            "src": "8312:410:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8802:277:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "8851:83:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            "nodeType": "YulIdentifier",
                            "src": "8853:77:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "8853:79:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "8853:79:17"
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
                                "src": "8830:6:17"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "8838:4:17",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "8826:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "8826:17:17"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "8845:3:17"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "8822:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8822:27:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "8815:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8815:35:17"
                  },
                  "nodeType": "YulIf",
                  "src": "8812:122:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "8943:34:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "8970:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "8957:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8957:20:17"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "8947:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8986:87:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "9046:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9054:4:17",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9042:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9042:17:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "9061:6:17"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "9069:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_available_length_t_bytes_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "8995:46:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8995:78:17"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "8986:5:17"
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
                "src": "8780:6:17",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "8788:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "8796:5:17",
                "type": ""
              }
            ],
            "src": "8741:338:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9211:817:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9258:83:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "9260:77:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9260:79:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "9260:79:17"
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
                            "src": "9232:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9241:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "9228:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9228:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9253:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "9224:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9224:33:17"
                  },
                  "nodeType": "YulIf",
                  "src": "9221:120:17"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "9351:117:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "9366:15:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9380:1:17",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "9370:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "9395:63:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "9430:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "9441:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "9426:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9426:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "9450:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "9405:20:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9405:53:17"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "9395:6:17"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "9478:118:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "9493:16:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9507:2:17",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "9497:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "9523:63:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "9558:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "9569:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "9554:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9554:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "9578:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "9533:20:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9533:53:17"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "9523:6:17"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "9606:118:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "9621:16:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9635:2:17",
                        "type": "",
                        "value": "64"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "9625:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "9651:63:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "9686:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "9697:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "9682:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9682:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "9706:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "9661:20:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9661:53:17"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "9651:6:17"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "9734:287:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "9749:46:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "9780:9:17"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "9791:2:17",
                                "type": "",
                                "value": "96"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "9776:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9776:18:17"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "9763:12:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9763:32:17"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "9753:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "9842:83:17",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "9844:77:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "9844:79:17"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "9844:79:17"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "9814:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9822:18:17",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "9811:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9811:30:17"
                      },
                      "nodeType": "YulIf",
                      "src": "9808:117:17"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "9939:72:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "9983:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "9994:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "9979:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "9979:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "10003:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bytes_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "9949:29:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9949:62:17"
                      },
                      "variableNames": [
                        {
                          "name": "value3",
                          "nodeType": "YulIdentifier",
                          "src": "9939:6:17"
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
                "src": "9157:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "9168:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "9180:6:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "9188:6:17",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "9196:6:17",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "9204:6:17",
                "type": ""
              }
            ],
            "src": "9085:943:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10117:391:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10163:83:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "10165:77:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10165:79:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10165:79:17"
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
                            "src": "10138:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10147:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "10134:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10134:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10159:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "10130:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10130:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "10127:119:17"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "10256:117:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "10271:15:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10285:1:17",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "10275:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "10300:63:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "10335:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "10346:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "10331:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10331:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "10355:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "10310:20:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10310:53:17"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "10300:6:17"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "10383:118:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "10398:16:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10412:2:17",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "10402:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "10428:63:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "10463:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "10474:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "10459:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "10459:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "10483:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "10438:20:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10438:53:17"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "10428:6:17"
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
                "src": "10079:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "10090:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "10102:6:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "10110:6:17",
                "type": ""
              }
            ],
            "src": "10034:474:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10581:241:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10686:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "10688:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10688:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10688:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "10658:6:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10666:18:17",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "10655:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10655:30:17"
                  },
                  "nodeType": "YulIf",
                  "src": "10652:56:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10718:37:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "10748:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "round_up_to_mul_of_32",
                      "nodeType": "YulIdentifier",
                      "src": "10726:21:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10726:29:17"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "10718:4:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "10792:23:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "10804:4:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10810:4:17",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10800:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10800:15:17"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "10792:4:17"
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
                "src": "10565:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "10576:4:17",
                "type": ""
              }
            ],
            "src": "10514:308:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10912:328:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10922:75:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "10989:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "array_allocation_size_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "10947:41:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10947:49:17"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "10931:15:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10931:66:17"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "10922:5:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "11013:5:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "11020:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11006:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11006:21:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11006:21:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "11036:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "11051:5:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11058:4:17",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11047:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11047:16:17"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "11040:3:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11101:83:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                            "nodeType": "YulIdentifier",
                            "src": "11103:77:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11103:79:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11103:79:17"
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
                            "src": "11082:3:17"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "11087:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11078:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11078:16:17"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "11096:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "11075:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11075:25:17"
                  },
                  "nodeType": "YulIf",
                  "src": "11072:112:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "11217:3:17"
                      },
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "11222:3:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "11227:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "copy_calldata_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "11193:23:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11193:41:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11193:41:17"
                }
              ]
            },
            "name": "abi_decode_available_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "10885:3:17",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "10890:6:17",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "10898:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "10906:5:17",
                "type": ""
              }
            ],
            "src": "10828:412:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11322:278:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11371:83:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            "nodeType": "YulIdentifier",
                            "src": "11373:77:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11373:79:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11373:79:17"
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
                                "src": "11350:6:17"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "11358:4:17",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "11346:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11346:17:17"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "11365:3:17"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "11342:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11342:27:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "11335:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11335:35:17"
                  },
                  "nodeType": "YulIf",
                  "src": "11332:122:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "11463:34:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "11490:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "11477:12:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11477:20:17"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "11467:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11506:88:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "11567:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11575:4:17",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "11563:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11563:17:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "11582:6:17"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "11590:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_available_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "11515:47:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11515:79:17"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "11506:5:17"
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
                "src": "11300:6:17",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "11308:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "11316:5:17",
                "type": ""
              }
            ],
            "src": "11260:340:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11699:561:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11745:83:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "11747:77:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11747:79:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11747:79:17"
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
                            "src": "11720:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11729:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "11716:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11716:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11741:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "11712:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11712:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "11709:119:17"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "11838:117:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "11853:15:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11867:1:17",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "11857:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "11882:63:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "11917:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "11928:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "11913:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11913:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "11937:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_address",
                          "nodeType": "YulIdentifier",
                          "src": "11892:20:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11892:53:17"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "11882:6:17"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "11965:288:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "11980:46:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "12011:9:17"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "12022:2:17",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "12007:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "12007:18:17"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "11994:12:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11994:32:17"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "11984:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "12073:83:17",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "12075:77:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "12075:79:17"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "12075:79:17"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "12045:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12053:18:17",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "12042:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12042:30:17"
                      },
                      "nodeType": "YulIf",
                      "src": "12039:117:17"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "12170:73:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "12215:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "12226:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "12211:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "12211:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "12235:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "12180:30:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12180:63:17"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "12170:6:17"
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
                "src": "11661:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "11672:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "11684:6:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "11692:6:17",
                "type": ""
              }
            ],
            "src": "11606:654:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12294:152:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12311:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12314:77:17",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12304:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12304:88:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12304:88:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12408:1:17",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12411:4:17",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12401:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12401:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12401:15:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12432:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12435:4:17",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "12425:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12425:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12425:15:17"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "12266:180:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12503:269:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12513:22:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "12527:4:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12533:1:17",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "12523:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12523:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "12513:6:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "12544:38:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "12574:4:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12580:1:17",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "12570:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12570:12:17"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "12548:18:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12621:51:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "12635:27:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "12649:6:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "12657:4:17",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "12645:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12645:17:17"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "12635:6:17"
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
                        "src": "12601:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "12594:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12594:26:17"
                  },
                  "nodeType": "YulIf",
                  "src": "12591:81:17"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "12724:42:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "12738:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "12738:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "12738:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "12688:18:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "12711:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12719:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "12708:2:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12708:14:17"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "12685:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12685:38:17"
                  },
                  "nodeType": "YulIf",
                  "src": "12682:84:17"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "12487:4:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "12496:6:17",
                "type": ""
              }
            ],
            "src": "12452:320:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12884:114:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "12906:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12914:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12902:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12902:14:17"
                      },
                      {
                        "hexValue": "4552433732313a20617070726f76616c20746f2063757272656e74206f776e65",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12918:34:17",
                        "type": "",
                        "value": "ERC721: approval to current owne"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12895:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12895:58:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12895:58:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "12974:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12982:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12970:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12970:15:17"
                      },
                      {
                        "hexValue": "72",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "12987:3:17",
                        "type": "",
                        "value": "r"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12963:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12963:28:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12963:28:17"
                }
              ]
            },
            "name": "store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "12876:6:17",
                "type": ""
              }
            ],
            "src": "12778:220:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13150:220:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13160:74:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13226:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13231:2:17",
                        "type": "",
                        "value": "33"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13167:58:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13167:67:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "13160:3:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13332:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942",
                      "nodeType": "YulIdentifier",
                      "src": "13243:88:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13243:93:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13243:93:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13345:19:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "13356:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13361:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13352:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13352:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "13345:3:17"
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
                "src": "13138:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "13146:3:17",
                "type": ""
              }
            ],
            "src": "13004:366:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13547:248:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "13557:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "13569:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "13580:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "13565:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13565:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13557:4:17"
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
                            "src": "13604:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13615:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13600:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13600:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "13623:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "13629:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "13619:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13619:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13593:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13593:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13593:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "13649:139:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "13783:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "13657:124:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13657:131:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "13649:4:17"
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
                "src": "13527:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "13542:4:17",
                "type": ""
              }
            ],
            "src": "13376:419:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "13907:143:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "13929:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "13937:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13925:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13925:14:17"
                      },
                      {
                        "hexValue": "4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "13941:34:17",
                        "type": "",
                        "value": "ERC721: approve caller is not to"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13918:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13918:58:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13918:58:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "13997:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14005:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "13993:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "13993:15:17"
                      },
                      {
                        "hexValue": "6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14010:32:17",
                        "type": "",
                        "value": "ken owner nor approved for all"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "13986:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "13986:57:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "13986:57:17"
                }
              ]
            },
            "name": "store_literal_in_memory_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "13899:6:17",
                "type": ""
              }
            ],
            "src": "13801:249:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14202:220:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "14212:74:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14278:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14283:2:17",
                        "type": "",
                        "value": "62"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14219:58:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14219:67:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "14212:3:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14384:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304",
                      "nodeType": "YulIdentifier",
                      "src": "14295:88:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14295:93:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14295:93:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14397:19:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "14408:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14413:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14404:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14404:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "14397:3:17"
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
                "src": "14190:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "14198:3:17",
                "type": ""
              }
            ],
            "src": "14056:366:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14599:248:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "14609:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "14621:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "14632:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "14617:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14617:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14609:4:17"
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
                            "src": "14656:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14667:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14652:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14652:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "14675:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "14681:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "14671:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14671:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14645:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14645:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14645:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "14701:139:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "14835:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "14709:124:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14709:131:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "14701:4:17"
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
                "src": "14579:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "14594:4:17",
                "type": ""
              }
            ],
            "src": "14428:419:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "14959:127:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "14981:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "14989:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "14977:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "14977:14:17"
                      },
                      {
                        "hexValue": "4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e65",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "14993:34:17",
                        "type": "",
                        "value": "ERC721: caller is not token owne"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "14970:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "14970:58:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "14970:58:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "15049:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15057:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15045:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15045:15:17"
                      },
                      {
                        "hexValue": "72206e6f7220617070726f766564",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "15062:16:17",
                        "type": "",
                        "value": "r nor approved"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15038:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15038:41:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15038:41:17"
                }
              ]
            },
            "name": "store_literal_in_memory_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "14951:6:17",
                "type": ""
              }
            ],
            "src": "14853:233:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15238:220:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "15248:74:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "15314:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15319:2:17",
                        "type": "",
                        "value": "46"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "15255:58:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15255:67:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "15248:3:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "15420:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b",
                      "nodeType": "YulIdentifier",
                      "src": "15331:88:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15331:93:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15331:93:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15433:19:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "15444:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15449:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15440:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15440:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "15433:3:17"
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
                "src": "15226:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "15234:3:17",
                "type": ""
              }
            ],
            "src": "15092:366:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15635:248:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "15645:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "15657:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "15668:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "15653:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15653:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15645:4:17"
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
                            "src": "15692:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "15703:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "15688:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15688:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "15711:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "15717:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "15707:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "15707:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "15681:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15681:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "15681:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "15737:139:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "15871:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "15745:124:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "15745:131:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "15737:4:17"
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
                "src": "15615:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "15630:4:17",
                "type": ""
              }
            ],
            "src": "15464:419:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "15995:124:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "16017:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16025:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16013:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16013:14:17"
                      },
                      {
                        "hexValue": "455243373231456e756d657261626c653a206f776e657220696e646578206f75",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "16029:34:17",
                        "type": "",
                        "value": "ERC721Enumerable: owner index ou"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16006:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16006:58:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16006:58:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "16085:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16093:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16081:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16081:15:17"
                      },
                      {
                        "hexValue": "74206f6620626f756e6473",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "16098:13:17",
                        "type": "",
                        "value": "t of bounds"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16074:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16074:38:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16074:38:17"
                }
              ]
            },
            "name": "store_literal_in_memory_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "15987:6:17",
                "type": ""
              }
            ],
            "src": "15889:230:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16271:220:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "16281:74:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "16347:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16352:2:17",
                        "type": "",
                        "value": "43"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "16288:58:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16288:67:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "16281:3:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "16453:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c",
                      "nodeType": "YulIdentifier",
                      "src": "16364:88:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16364:93:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16364:93:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16466:19:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "16477:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16482:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16473:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16473:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "16466:3:17"
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
                "src": "16259:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "16267:3:17",
                "type": ""
              }
            ],
            "src": "16125:366:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "16668:248:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "16678:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "16690:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "16701:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "16686:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16686:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16678:4:17"
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
                            "src": "16725:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "16736:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "16721:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16721:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "16744:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "16750:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "16740:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "16740:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "16714:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16714:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "16714:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "16770:139:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "16904:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "16778:124:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "16778:131:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "16770:4:17"
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
                "src": "16648:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "16663:4:17",
                "type": ""
              }
            ],
            "src": "16497:419:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17028:125:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "17050:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17058:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17046:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17046:14:17"
                      },
                      {
                        "hexValue": "455243373231456e756d657261626c653a20676c6f62616c20696e646578206f",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "17062:34:17",
                        "type": "",
                        "value": "ERC721Enumerable: global index o"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17039:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17039:58:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17039:58:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "17118:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17126:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17114:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17114:15:17"
                      },
                      {
                        "hexValue": "7574206f6620626f756e6473",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "17131:14:17",
                        "type": "",
                        "value": "ut of bounds"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17107:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17107:39:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17107:39:17"
                }
              ]
            },
            "name": "store_literal_in_memory_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "17020:6:17",
                "type": ""
              }
            ],
            "src": "16922:231:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17305:220:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "17315:74:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "17381:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17386:2:17",
                        "type": "",
                        "value": "44"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "17322:58:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17322:67:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "17315:3:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "17487:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc",
                      "nodeType": "YulIdentifier",
                      "src": "17398:88:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17398:93:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17398:93:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17500:19:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "17511:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17516:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "17507:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17507:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "17500:3:17"
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
                "src": "17293:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "17301:3:17",
                "type": ""
              }
            ],
            "src": "17159:366:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17702:248:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "17712:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "17724:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "17735:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "17720:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17720:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17712:4:17"
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
                            "src": "17759:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "17770:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "17755:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17755:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "17778:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "17784:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "17774:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "17774:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17748:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17748:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17748:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "17804:139:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "17938:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "17812:124:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17812:131:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "17804:4:17"
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
                "src": "17682:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "17697:4:17",
                "type": ""
              }
            ],
            "src": "17531:419:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "17984:152:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18001:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18004:77:17",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "17994:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "17994:88:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "17994:88:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18098:1:17",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18101:4:17",
                        "type": "",
                        "value": "0x32"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "18091:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18091:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18091:15:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18122:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18125:4:17",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "18115:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18115:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18115:15:17"
                }
              ]
            },
            "name": "panic_error_0x32",
            "nodeType": "YulFunctionDefinition",
            "src": "17956:180:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "18248:68:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "18270:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "18278:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "18266:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18266:14:17"
                      },
                      {
                        "hexValue": "4552433732313a20696e76616c696420746f6b656e204944",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "18282:26:17",
                        "type": "",
                        "value": "ERC721: invalid token ID"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "18259:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18259:50:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18259:50:17"
                }
              ]
            },
            "name": "store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "18240:6:17",
                "type": ""
              }
            ],
            "src": "18142:174:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "18468:220:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "18478:74:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "18544:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18549:2:17",
                        "type": "",
                        "value": "24"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "18485:58:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18485:67:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "18478:3:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "18650:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f",
                      "nodeType": "YulIdentifier",
                      "src": "18561:88:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18561:93:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18561:93:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "18663:19:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "18674:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18679:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "18670:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18670:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "18663:3:17"
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
                "src": "18456:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "18464:3:17",
                "type": ""
              }
            ],
            "src": "18322:366:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "18865:248:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "18875:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "18887:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "18898:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "18883:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18883:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "18875:4:17"
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
                            "src": "18922:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "18933:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "18918:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18918:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "18941:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "18947:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "18937:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "18937:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "18911:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18911:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "18911:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "18967:139:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "19101:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "18975:124:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "18975:131:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "18967:4:17"
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
                "src": "18845:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "18860:4:17",
                "type": ""
              }
            ],
            "src": "18694:419:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "19225:122:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "19247:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "19255:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "19243:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19243:14:17"
                      },
                      {
                        "hexValue": "4552433732313a2061646472657373207a65726f206973206e6f742061207661",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "19259:34:17",
                        "type": "",
                        "value": "ERC721: address zero is not a va"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "19236:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19236:58:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "19236:58:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "19315:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "19323:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "19311:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19311:15:17"
                      },
                      {
                        "hexValue": "6c6964206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "19328:11:17",
                        "type": "",
                        "value": "lid owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "19304:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19304:36:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "19304:36:17"
                }
              ]
            },
            "name": "store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "19217:6:17",
                "type": ""
              }
            ],
            "src": "19119:228:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "19499:220:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "19509:74:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "19575:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "19580:2:17",
                        "type": "",
                        "value": "41"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "19516:58:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19516:67:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "19509:3:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "19681:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159",
                      "nodeType": "YulIdentifier",
                      "src": "19592:88:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19592:93:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "19592:93:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "19694:19:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "19705:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "19710:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "19701:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19701:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "19694:3:17"
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
                "src": "19487:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "19495:3:17",
                "type": ""
              }
            ],
            "src": "19353:366:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "19896:248:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "19906:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "19918:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "19929:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "19914:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19914:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "19906:4:17"
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
                            "src": "19953:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "19964:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "19949:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19949:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "19972:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "19978:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "19968:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "19968:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "19942:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "19942:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "19942:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "19998:139:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "20132:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "20006:124:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20006:131:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "19998:4:17"
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
                "src": "19876:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "19891:4:17",
                "type": ""
              }
            ],
            "src": "19725:419:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "20256:119:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "20278:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "20286:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "20274:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "20274:14:17"
                      },
                      {
                        "hexValue": "4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "20290:34:17",
                        "type": "",
                        "value": "Ownable: new owner is the zero a"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "20267:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20267:58:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "20267:58:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "20346:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "20354:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "20342:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "20342:15:17"
                      },
                      {
                        "hexValue": "646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "20359:8:17",
                        "type": "",
                        "value": "ddress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "20335:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20335:33:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "20335:33:17"
                }
              ]
            },
            "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "20248:6:17",
                "type": ""
              }
            ],
            "src": "20150:225:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "20527:220:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "20537:74:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "20603:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "20608:2:17",
                        "type": "",
                        "value": "38"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "20544:58:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20544:67:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "20537:3:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "20709:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe",
                      "nodeType": "YulIdentifier",
                      "src": "20620:88:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20620:93:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "20620:93:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "20722:19:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "20733:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "20738:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "20729:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20729:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "20722:3:17"
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
                "src": "20515:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "20523:3:17",
                "type": ""
              }
            ],
            "src": "20381:366:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "20924:248:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "20934:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "20946:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "20957:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "20942:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20942:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "20934:4:17"
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
                            "src": "20981:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "20992:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "20977:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "20977:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "21000:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "21006:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "20996:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "20996:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "20970:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "20970:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "20970:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "21026:139:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "21160:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "21034:124:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21034:131:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "21026:4:17"
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
                "src": "20904:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "20919:4:17",
                "type": ""
              }
            ],
            "src": "20753:419:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "21284:118:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "21306:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "21314:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "21302:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "21302:14:17"
                      },
                      {
                        "hexValue": "4552433732313a207472616e736665722066726f6d20696e636f727265637420",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "21318:34:17",
                        "type": "",
                        "value": "ERC721: transfer from incorrect "
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "21295:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21295:58:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "21295:58:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "21374:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "21382:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "21370:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "21370:15:17"
                      },
                      {
                        "hexValue": "6f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "21387:7:17",
                        "type": "",
                        "value": "owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "21363:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21363:32:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "21363:32:17"
                }
              ]
            },
            "name": "store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "21276:6:17",
                "type": ""
              }
            ],
            "src": "21178:224:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "21554:220:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "21564:74:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "21630:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "21635:2:17",
                        "type": "",
                        "value": "37"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "21571:58:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21571:67:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "21564:3:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "21736:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48",
                      "nodeType": "YulIdentifier",
                      "src": "21647:88:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21647:93:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "21647:93:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "21749:19:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "21760:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "21765:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "21756:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21756:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "21749:3:17"
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
                "src": "21542:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "21550:3:17",
                "type": ""
              }
            ],
            "src": "21408:366:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "21951:248:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "21961:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "21973:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "21984:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "21969:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21969:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "21961:4:17"
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
                            "src": "22008:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "22019:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "22004:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "22004:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "22027:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "22033:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "22023:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "22023:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "21997:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "21997:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "21997:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "22053:139:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "22187:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "22061:124:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22061:131:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "22053:4:17"
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
                "src": "21931:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "21946:4:17",
                "type": ""
              }
            ],
            "src": "21780:419:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "22311:117:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "22333:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "22341:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "22329:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "22329:14:17"
                      },
                      {
                        "hexValue": "4552433732313a207472616e7366657220746f20746865207a65726f20616464",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "22345:34:17",
                        "type": "",
                        "value": "ERC721: transfer to the zero add"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "22322:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22322:58:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "22322:58:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "22401:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "22409:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "22397:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "22397:15:17"
                      },
                      {
                        "hexValue": "72657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "22414:6:17",
                        "type": "",
                        "value": "ress"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "22390:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22390:31:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "22390:31:17"
                }
              ]
            },
            "name": "store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "22303:6:17",
                "type": ""
              }
            ],
            "src": "22205:223:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "22580:220:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "22590:74:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "22656:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "22661:2:17",
                        "type": "",
                        "value": "36"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "22597:58:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22597:67:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "22590:3:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "22762:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4",
                      "nodeType": "YulIdentifier",
                      "src": "22673:88:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22673:93:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "22673:93:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "22775:19:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "22786:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "22791:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "22782:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22782:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "22775:3:17"
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
                "src": "22568:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "22576:3:17",
                "type": ""
              }
            ],
            "src": "22434:366:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "22977:248:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "22987:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "22999:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23010:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "22995:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "22995:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "22987:4:17"
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
                            "src": "23034:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "23045:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "23030:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "23030:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "23053:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "23059:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "23049:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "23049:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "23023:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23023:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "23023:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "23079:139:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "23213:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "23087:124:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23087:131:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "23079:4:17"
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
                "src": "22957:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "22972:4:17",
                "type": ""
              }
            ],
            "src": "22806:419:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23259:152:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23276:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23279:77:17",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "23269:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23269:88:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "23269:88:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23373:1:17",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23376:4:17",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "23366:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23366:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "23366:15:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23397:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "23400:4:17",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "23390:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23390:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "23390:15:17"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "23231:180:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23462:146:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "23472:25:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "23495:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "23477:17:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23477:20:17"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "23472:1:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "23506:25:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "23529:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "23511:17:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23511:20:17"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "23506:1:17"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "23553:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "23555:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23555:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "23555:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "23547:1:17"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "23550:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "23544:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23544:8:17"
                  },
                  "nodeType": "YulIf",
                  "src": "23541:34:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "23585:17:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "23597:1:17"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "23600:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "sub",
                      "nodeType": "YulIdentifier",
                      "src": "23593:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23593:9:17"
                  },
                  "variableNames": [
                    {
                      "name": "diff",
                      "nodeType": "YulIdentifier",
                      "src": "23585:4:17"
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
                "src": "23448:1:17",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "23451:1:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "diff",
                "nodeType": "YulTypedName",
                "src": "23457:4:17",
                "type": ""
              }
            ],
            "src": "23417:191:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "23658:261:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "23668:25:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "23691:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "23673:17:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23673:20:17"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "23668:1:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "23702:25:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "23725:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "23707:17:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23707:20:17"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "23702:1:17"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "23865:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "23867:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "23867:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "23867:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "23786:1:17"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "23793:66:17",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "23861:1:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "23789:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "23789:74:17"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "23783:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23783:81:17"
                  },
                  "nodeType": "YulIf",
                  "src": "23780:107:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "23897:16:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "23908:1:17"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "23911:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "23904:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "23904:9:17"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "23897:3:17"
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
                "src": "23645:1:17",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "23648:1:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "23654:3:17",
                "type": ""
              }
            ],
            "src": "23614:305:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "24031:76:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "24053:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "24061:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "24049:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "24049:14:17"
                      },
                      {
                        "hexValue": "4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "24065:34:17",
                        "type": "",
                        "value": "Ownable: caller is not the owner"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "24042:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24042:58:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "24042:58:17"
                }
              ]
            },
            "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "24023:6:17",
                "type": ""
              }
            ],
            "src": "23925:182:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "24259:220:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "24269:74:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "24335:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "24340:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "24276:58:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24276:67:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "24269:3:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "24441:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe",
                      "nodeType": "YulIdentifier",
                      "src": "24352:88:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24352:93:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "24352:93:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "24454:19:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "24465:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "24470:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "24461:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24461:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "24454:3:17"
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
                "src": "24247:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "24255:3:17",
                "type": ""
              }
            ],
            "src": "24113:366:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "24656:248:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "24666:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "24678:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "24689:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "24674:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24674:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "24666:4:17"
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
                            "src": "24713:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "24724:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "24709:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "24709:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "24732:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "24738:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "24728:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "24728:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "24702:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24702:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "24702:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "24758:139:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "24892:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "24766:124:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "24766:131:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "24758:4:17"
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
                "src": "24636:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "24651:4:17",
                "type": ""
              }
            ],
            "src": "24485:419:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25016:69:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "25038:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "25046:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "25034:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "25034:14:17"
                      },
                      {
                        "hexValue": "4552433732313a20617070726f766520746f2063616c6c6572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "25050:27:17",
                        "type": "",
                        "value": "ERC721: approve to caller"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "25027:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25027:51:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25027:51:17"
                }
              ]
            },
            "name": "store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "25008:6:17",
                "type": ""
              }
            ],
            "src": "24910:175:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25237:220:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "25247:74:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "25313:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25318:2:17",
                        "type": "",
                        "value": "25"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "25254:58:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25254:67:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "25247:3:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "25419:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05",
                      "nodeType": "YulIdentifier",
                      "src": "25330:88:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25330:93:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25330:93:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "25432:19:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "25443:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25448:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "25439:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25439:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "25432:3:17"
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
                "src": "25225:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "25233:3:17",
                "type": ""
              }
            ],
            "src": "25091:366:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25634:248:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "25644:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "25656:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "25667:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "25652:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25652:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "25644:4:17"
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
                            "src": "25691:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "25702:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "25687:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "25687:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "25710:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "25716:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "25706:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "25706:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "25680:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25680:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "25680:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "25736:139:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "25870:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "25744:124:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "25744:131:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "25736:4:17"
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
                "src": "25614:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "25629:4:17",
                "type": ""
              }
            ],
            "src": "25463:419:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "25994:131:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "26016:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "26024:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "26012:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "26012:14:17"
                      },
                      {
                        "hexValue": "4552433732313a207472616e7366657220746f206e6f6e204552433732315265",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "26028:34:17",
                        "type": "",
                        "value": "ERC721: transfer to non ERC721Re"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "26005:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26005:58:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "26005:58:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "26084:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "26092:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "26080:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "26080:15:17"
                      },
                      {
                        "hexValue": "63656976657220696d706c656d656e746572",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "26097:20:17",
                        "type": "",
                        "value": "ceiver implementer"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "26073:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26073:45:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "26073:45:17"
                }
              ]
            },
            "name": "store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "25986:6:17",
                "type": ""
              }
            ],
            "src": "25888:237:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "26277:220:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "26287:74:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "26353:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26358:2:17",
                        "type": "",
                        "value": "50"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "26294:58:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26294:67:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "26287:3:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "26459:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e",
                      "nodeType": "YulIdentifier",
                      "src": "26370:88:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26370:93:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "26370:93:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "26472:19:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "26483:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26488:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "26479:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26479:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "26472:3:17"
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
                "src": "26265:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "26273:3:17",
                "type": ""
              }
            ],
            "src": "26131:366:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "26674:248:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "26684:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "26696:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "26707:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "26692:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26692:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "26684:4:17"
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
                            "src": "26731:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "26742:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "26727:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "26727:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "26750:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "26756:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "26746:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "26746:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "26720:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26720:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "26720:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "26776:139:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "26910:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "26784:124:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "26784:131:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "26776:4:17"
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
                "src": "26654:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "26669:4:17",
                "type": ""
              }
            ],
            "src": "26503:419:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "27042:34:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "27052:18:17",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "27067:3:17"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "27052:11:17"
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
                "src": "27014:3:17",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "27019:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "27030:11:17",
                "type": ""
              }
            ],
            "src": "26928:148:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "27192:267:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "27202:53:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "27249:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "27216:32:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27216:39:17"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "27206:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "27264:96:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "27348:3:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "27353:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "27271:76:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27271:89:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "27264:3:17"
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
                            "src": "27395:5:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "27402:4:17",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "27391:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "27391:16:17"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "27409:3:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "27414:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "27369:21:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27369:52:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "27369:52:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "27430:23:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "27441:3:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "27446:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "27437:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27437:16:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "27430:3:17"
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
                "src": "27173:5:17",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "27180:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "27188:3:17",
                "type": ""
              }
            ],
            "src": "27082:377:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "27649:251:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "27660:102:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "27749:6:17"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "27758:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "27667:81:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27667:95:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "27660:3:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "27772:102:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "27861:6:17"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "27870:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "27779:81:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "27779:95:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "27772:3:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "27884:10:17",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "27891:3:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "27884:3:17"
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
                "src": "27620:3:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "27626:6:17",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "27634:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "27645:3:17",
                "type": ""
              }
            ],
            "src": "27465:435:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "28012:76:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "28034:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "28042:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "28030:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "28030:14:17"
                      },
                      {
                        "hexValue": "4552433732313a206d696e7420746f20746865207a65726f2061646472657373",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "28046:34:17",
                        "type": "",
                        "value": "ERC721: mint to the zero address"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "28023:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "28023:58:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "28023:58:17"
                }
              ]
            },
            "name": "store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "28004:6:17",
                "type": ""
              }
            ],
            "src": "27906:182:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "28240:220:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "28250:74:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "28316:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "28321:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "28257:58:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "28257:67:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "28250:3:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "28422:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6",
                      "nodeType": "YulIdentifier",
                      "src": "28333:88:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "28333:93:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "28333:93:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "28435:19:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "28446:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "28451:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "28442:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "28442:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "28435:3:17"
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
                "src": "28228:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "28236:3:17",
                "type": ""
              }
            ],
            "src": "28094:366:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "28637:248:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "28647:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "28659:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "28670:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "28655:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "28655:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "28647:4:17"
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
                            "src": "28694:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "28705:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "28690:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "28690:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "28713:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "28719:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "28709:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "28709:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "28683:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "28683:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "28683:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "28739:139:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "28873:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "28747:124:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "28747:131:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "28739:4:17"
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
                "src": "28617:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "28632:4:17",
                "type": ""
              }
            ],
            "src": "28466:419:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "28997:72:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "29019:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "29027:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "29015:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "29015:14:17"
                      },
                      {
                        "hexValue": "4552433732313a20746f6b656e20616c7265616479206d696e746564",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "29031:30:17",
                        "type": "",
                        "value": "ERC721: token already minted"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "29008:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "29008:54:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "29008:54:17"
                }
              ]
            },
            "name": "store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "28989:6:17",
                "type": ""
              }
            ],
            "src": "28891:178:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "29221:220:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "29231:74:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "29297:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "29302:2:17",
                        "type": "",
                        "value": "28"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "29238:58:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "29238:67:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "29231:3:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "29403:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57",
                      "nodeType": "YulIdentifier",
                      "src": "29314:88:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "29314:93:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "29314:93:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "29416:19:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "29427:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "29432:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "29423:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "29423:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "29416:3:17"
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
                "src": "29209:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "29217:3:17",
                "type": ""
              }
            ],
            "src": "29075:366:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "29618:248:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "29628:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "29640:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "29651:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "29636:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "29636:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "29628:4:17"
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
                            "src": "29675:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "29686:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "29671:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "29671:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "29694:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "29700:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "29690:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "29690:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "29664:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "29664:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "29664:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "29720:139:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "29854:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "29728:124:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "29728:131:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "29720:4:17"
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
                "src": "29598:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "29613:4:17",
                "type": ""
              }
            ],
            "src": "29447:419:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "29978:127:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "30000:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "30008:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "29996:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "29996:14:17"
                      },
                      {
                        "hexValue": "45524337323155524953746f726167653a2055524920736574206f66206e6f6e",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "30012:34:17",
                        "type": "",
                        "value": "ERC721URIStorage: URI set of non"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "29989:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "29989:58:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "29989:58:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "30068:6:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "30076:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "30064:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "30064:15:17"
                      },
                      {
                        "hexValue": "6578697374656e7420746f6b656e",
                        "kind": "string",
                        "nodeType": "YulLiteral",
                        "src": "30081:16:17",
                        "type": "",
                        "value": "existent token"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "30057:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "30057:41:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "30057:41:17"
                }
              ]
            },
            "name": "store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "29970:6:17",
                "type": ""
              }
            ],
            "src": "29872:233:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "30257:220:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "30267:74:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "30333:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "30338:2:17",
                        "type": "",
                        "value": "46"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "30274:58:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "30274:67:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "30267:3:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "30439:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4",
                      "nodeType": "YulIdentifier",
                      "src": "30350:88:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "30350:93:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "30350:93:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "30452:19:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "30463:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "30468:2:17",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "30459:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "30459:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "30452:3:17"
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
                "src": "30245:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "30253:3:17",
                "type": ""
              }
            ],
            "src": "30111:366:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "30654:248:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "30664:26:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "30676:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "30687:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "30672:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "30672:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "30664:4:17"
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
                            "src": "30711:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "30722:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "30707:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "30707:17:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "30730:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "30736:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "30726:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "30726:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "30700:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "30700:47:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "30700:47:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "30756:139:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "30890:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "30764:124:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "30764:131:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "30756:4:17"
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
                "src": "30634:9:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "30649:4:17",
                "type": ""
              }
            ],
            "src": "30483:419:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "30962:87:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "30972:11:17",
                  "value": {
                    "name": "ptr",
                    "nodeType": "YulIdentifier",
                    "src": "30980:3:17"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "30972:4:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "31000:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "31003:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "30993:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "30993:14:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "30993:14:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "31016:26:17",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "31034:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "31037:4:17",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "keccak256",
                      "nodeType": "YulIdentifier",
                      "src": "31024:9:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31024:18:17"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "31016:4:17"
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
                "src": "30949:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "30957:4:17",
                "type": ""
              }
            ],
            "src": "30908:141:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "31099:49:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "31109:33:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "31127:5:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "31134:2:17",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "31123:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "31123:14:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "31139:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "31119:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31119:23:17"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "31109:6:17"
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
                "src": "31082:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "31092:6:17",
                "type": ""
              }
            ],
            "src": "31055:93:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "31207:54:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "31217:37:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "bits",
                        "nodeType": "YulIdentifier",
                        "src": "31242:4:17"
                      },
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "31248:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "shl",
                      "nodeType": "YulIdentifier",
                      "src": "31238:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31238:16:17"
                  },
                  "variableNames": [
                    {
                      "name": "newValue",
                      "nodeType": "YulIdentifier",
                      "src": "31217:8:17"
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
                "src": "31182:4:17",
                "type": ""
              },
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "31188:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "newValue",
                "nodeType": "YulTypedName",
                "src": "31198:8:17",
                "type": ""
              }
            ],
            "src": "31154:107:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "31343:317:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "31353:35:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBytes",
                        "nodeType": "YulIdentifier",
                        "src": "31374:10:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "31386:1:17",
                        "type": "",
                        "value": "8"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "31370:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31370:18:17"
                  },
                  "variables": [
                    {
                      "name": "shiftBits",
                      "nodeType": "YulTypedName",
                      "src": "31357:9:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "31397:109:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulIdentifier",
                        "src": "31428:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "31439:66:17",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "shift_left_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "31409:18:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31409:97:17"
                  },
                  "variables": [
                    {
                      "name": "mask",
                      "nodeType": "YulTypedName",
                      "src": "31401:4:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "31515:51:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "shiftBits",
                        "nodeType": "YulIdentifier",
                        "src": "31546:9:17"
                      },
                      {
                        "name": "toInsert",
                        "nodeType": "YulIdentifier",
                        "src": "31557:8:17"
                      }
                    ],
                    "functionName": {
                      "name": "shift_left_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "31527:18:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31527:39:17"
                  },
                  "variableNames": [
                    {
                      "name": "toInsert",
                      "nodeType": "YulIdentifier",
                      "src": "31515:8:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "31575:30:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "31588:5:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "mask",
                            "nodeType": "YulIdentifier",
                            "src": "31599:4:17"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "31595:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "31595:9:17"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "31584:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31584:21:17"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "31575:5:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "31614:40:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "31627:5:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "toInsert",
                            "nodeType": "YulIdentifier",
                            "src": "31638:8:17"
                          },
                          {
                            "name": "mask",
                            "nodeType": "YulIdentifier",
                            "src": "31648:4:17"
                          }
                        ],
                        "functionName": {
                          "name": "and",
                          "nodeType": "YulIdentifier",
                          "src": "31634:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "31634:19:17"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "31624:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31624:30:17"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "31614:6:17"
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
                "src": "31304:5:17",
                "type": ""
              },
              {
                "name": "shiftBytes",
                "nodeType": "YulTypedName",
                "src": "31311:10:17",
                "type": ""
              },
              {
                "name": "toInsert",
                "nodeType": "YulTypedName",
                "src": "31323:8:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "31336:6:17",
                "type": ""
              }
            ],
            "src": "31267:393:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "31698:28:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "31708:12:17",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "31715:5:17"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "31708:3:17"
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
                "src": "31684:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "31694:3:17",
                "type": ""
              }
            ],
            "src": "31666:60:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "31792:82:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "31802:66:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "31860:5:17"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "31842:17:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "31842:24:17"
                          }
                        ],
                        "functionName": {
                          "name": "identity",
                          "nodeType": "YulIdentifier",
                          "src": "31833:8:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "31833:34:17"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "31815:17:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "31815:53:17"
                  },
                  "variableNames": [
                    {
                      "name": "converted",
                      "nodeType": "YulIdentifier",
                      "src": "31802:9:17"
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
                "src": "31772:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "converted",
                "nodeType": "YulTypedName",
                "src": "31782:9:17",
                "type": ""
              }
            ],
            "src": "31732:142:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "31927:28:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "31937:12:17",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "31944:5:17"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "31937:3:17"
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
                "src": "31913:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "31923:3:17",
                "type": ""
              }
            ],
            "src": "31880:75:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "32037:193:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "32047:63:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value_0",
                        "nodeType": "YulIdentifier",
                        "src": "32102:7:17"
                      }
                    ],
                    "functionName": {
                      "name": "convert_t_uint256_to_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "32071:30:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "32071:39:17"
                  },
                  "variables": [
                    {
                      "name": "convertedValue_0",
                      "nodeType": "YulTypedName",
                      "src": "32051:16:17",
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
                        "src": "32126:4:17"
                      },
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "slot",
                                "nodeType": "YulIdentifier",
                                "src": "32166:4:17"
                              }
                            ],
                            "functionName": {
                              "name": "sload",
                              "nodeType": "YulIdentifier",
                              "src": "32160:5:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "32160:11:17"
                          },
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "32173:6:17"
                          },
                          {
                            "arguments": [
                              {
                                "name": "convertedValue_0",
                                "nodeType": "YulIdentifier",
                                "src": "32205:16:17"
                              }
                            ],
                            "functionName": {
                              "name": "prepare_store_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "32181:23:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "32181:41:17"
                          }
                        ],
                        "functionName": {
                          "name": "update_byte_slice_dynamic32",
                          "nodeType": "YulIdentifier",
                          "src": "32132:27:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "32132:91:17"
                      }
                    ],
                    "functionName": {
                      "name": "sstore",
                      "nodeType": "YulIdentifier",
                      "src": "32119:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "32119:105:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "32119:105:17"
                }
              ]
            },
            "name": "update_storage_value_t_uint256_to_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "32014:4:17",
                "type": ""
              },
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "32020:6:17",
                "type": ""
              },
              {
                "name": "value_0",
                "nodeType": "YulTypedName",
                "src": "32028:7:17",
                "type": ""
              }
            ],
            "src": "31961:269:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "32285:24:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "32295:8:17",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "32302:1:17",
                    "type": "",
                    "value": "0"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "32295:3:17"
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
                "src": "32281:3:17",
                "type": ""
              }
            ],
            "src": "32236:73:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "32368:136:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "32378:46:17",
                  "value": {
                    "arguments": [],
                    "functionName": {
                      "name": "zero_value_for_split_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "32392:30:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "32392:32:17"
                  },
                  "variables": [
                    {
                      "name": "zero_0",
                      "nodeType": "YulTypedName",
                      "src": "32382:6:17",
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
                        "src": "32477:4:17"
                      },
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "32483:6:17"
                      },
                      {
                        "name": "zero_0",
                        "nodeType": "YulIdentifier",
                        "src": "32491:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "update_storage_value_t_uint256_to_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "32433:43:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "32433:65:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "32433:65:17"
                }
              ]
            },
            "name": "storage_set_to_zero_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "32354:4:17",
                "type": ""
              },
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "32360:6:17",
                "type": ""
              }
            ],
            "src": "32315:189:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "32560:136:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "32627:63:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "32671:5:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "32678:1:17",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "storage_set_to_zero_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "32641:29:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32641:39:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "32641:39:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "start",
                        "nodeType": "YulIdentifier",
                        "src": "32580:5:17"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "32587:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "32577:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "32577:14:17"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "32592:26:17",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "32594:22:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "start",
                              "nodeType": "YulIdentifier",
                              "src": "32607:5:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "32614:1:17",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "32603:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32603:13:17"
                        },
                        "variableNames": [
                          {
                            "name": "start",
                            "nodeType": "YulIdentifier",
                            "src": "32594:5:17"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "32574:2:17",
                    "statements": []
                  },
                  "src": "32570:120:17"
                }
              ]
            },
            "name": "clear_storage_range_t_bytes1",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "start",
                "nodeType": "YulTypedName",
                "src": "32548:5:17",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "32555:3:17",
                "type": ""
              }
            ],
            "src": "32510:186:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "32781:464:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "32807:431:17",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "32821:54:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "array",
                              "nodeType": "YulIdentifier",
                              "src": "32869:5:17"
                            }
                          ],
                          "functionName": {
                            "name": "array_dataslot_t_string_storage",
                            "nodeType": "YulIdentifier",
                            "src": "32837:31:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32837:38:17"
                        },
                        "variables": [
                          {
                            "name": "dataArea",
                            "nodeType": "YulTypedName",
                            "src": "32825:8:17",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "32888:63:17",
                        "value": {
                          "arguments": [
                            {
                              "name": "dataArea",
                              "nodeType": "YulIdentifier",
                              "src": "32911:8:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "startIndex",
                                  "nodeType": "YulIdentifier",
                                  "src": "32939:10:17"
                                }
                              ],
                              "functionName": {
                                "name": "divide_by_32_ceil",
                                "nodeType": "YulIdentifier",
                                "src": "32921:17:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "32921:29:17"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "32907:3:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "32907:44:17"
                        },
                        "variables": [
                          {
                            "name": "deleteStart",
                            "nodeType": "YulTypedName",
                            "src": "32892:11:17",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "body": {
                          "nodeType": "YulBlock",
                          "src": "33108:27:17",
                          "statements": [
                            {
                              "nodeType": "YulAssignment",
                              "src": "33110:23:17",
                              "value": {
                                "name": "dataArea",
                                "nodeType": "YulIdentifier",
                                "src": "33125:8:17"
                              },
                              "variableNames": [
                                {
                                  "name": "deleteStart",
                                  "nodeType": "YulIdentifier",
                                  "src": "33110:11:17"
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
                              "src": "33092:10:17"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "33104:2:17",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "lt",
                            "nodeType": "YulIdentifier",
                            "src": "33089:2:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33089:18:17"
                        },
                        "nodeType": "YulIf",
                        "src": "33086:49:17"
                      },
                      {
                        "expression": {
                          "arguments": [
                            {
                              "name": "deleteStart",
                              "nodeType": "YulIdentifier",
                              "src": "33177:11:17"
                            },
                            {
                              "arguments": [
                                {
                                  "name": "dataArea",
                                  "nodeType": "YulIdentifier",
                                  "src": "33194:8:17"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "len",
                                      "nodeType": "YulIdentifier",
                                      "src": "33222:3:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "divide_by_32_ceil",
                                    "nodeType": "YulIdentifier",
                                    "src": "33204:17:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "33204:22:17"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "33190:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "33190:37:17"
                            }
                          ],
                          "functionName": {
                            "name": "clear_storage_range_t_bytes1",
                            "nodeType": "YulIdentifier",
                            "src": "33148:28:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "33148:80:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "33148:80:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "32798:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "32803:2:17",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "32795:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "32795:11:17"
                  },
                  "nodeType": "YulIf",
                  "src": "32792:446:17"
                }
              ]
            },
            "name": "clean_up_bytearray_end_slots_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "32757:5:17",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "32764:3:17",
                "type": ""
              },
              {
                "name": "startIndex",
                "nodeType": "YulTypedName",
                "src": "32769:10:17",
                "type": ""
              }
            ],
            "src": "32702:543:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "33314:54:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "33324:37:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "bits",
                        "nodeType": "YulIdentifier",
                        "src": "33349:4:17"
                      },
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "33355:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "shr",
                      "nodeType": "YulIdentifier",
                      "src": "33345:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "33345:16:17"
                  },
                  "variableNames": [
                    {
                      "name": "newValue",
                      "nodeType": "YulIdentifier",
                      "src": "33324:8:17"
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
                "src": "33289:4:17",
                "type": ""
              },
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "33295:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "newValue",
                "nodeType": "YulTypedName",
                "src": "33305:8:17",
                "type": ""
              }
            ],
            "src": "33251:117:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "33425:118:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "33435:68:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "33484:1:17",
                                "type": "",
                                "value": "8"
                              },
                              {
                                "name": "bytes",
                                "nodeType": "YulIdentifier",
                                "src": "33487:5:17"
                              }
                            ],
                            "functionName": {
                              "name": "mul",
                              "nodeType": "YulIdentifier",
                              "src": "33480:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "33480:13:17"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "33499:1:17",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "not",
                              "nodeType": "YulIdentifier",
                              "src": "33495:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "33495:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "shift_right_unsigned_dynamic",
                          "nodeType": "YulIdentifier",
                          "src": "33451:28:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "33451:51:17"
                      }
                    ],
                    "functionName": {
                      "name": "not",
                      "nodeType": "YulIdentifier",
                      "src": "33447:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "33447:56:17"
                  },
                  "variables": [
                    {
                      "name": "mask",
                      "nodeType": "YulTypedName",
                      "src": "33439:4:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "33512:25:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "33526:4:17"
                      },
                      {
                        "name": "mask",
                        "nodeType": "YulIdentifier",
                        "src": "33532:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "33522:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "33522:15:17"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "33512:6:17"
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
                "src": "33402:4:17",
                "type": ""
              },
              {
                "name": "bytes",
                "nodeType": "YulTypedName",
                "src": "33408:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "33418:6:17",
                "type": ""
              }
            ],
            "src": "33374:169:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "33629:214:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "33762:37:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "33789:4:17"
                      },
                      {
                        "name": "len",
                        "nodeType": "YulIdentifier",
                        "src": "33795:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "mask_bytes_dynamic",
                      "nodeType": "YulIdentifier",
                      "src": "33770:18:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "33770:29:17"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "33762:4:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "33808:29:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "33819:4:17"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "33829:1:17",
                            "type": "",
                            "value": "2"
                          },
                          {
                            "name": "len",
                            "nodeType": "YulIdentifier",
                            "src": "33832:3:17"
                          }
                        ],
                        "functionName": {
                          "name": "mul",
                          "nodeType": "YulIdentifier",
                          "src": "33825:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "33825:11:17"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "33816:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "33816:21:17"
                  },
                  "variableNames": [
                    {
                      "name": "used",
                      "nodeType": "YulIdentifier",
                      "src": "33808:4:17"
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
                "src": "33610:4:17",
                "type": ""
              },
              {
                "name": "len",
                "nodeType": "YulTypedName",
                "src": "33616:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "used",
                "nodeType": "YulTypedName",
                "src": "33624:4:17",
                "type": ""
              }
            ],
            "src": "33548:295:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "33940:1303:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "33951:51:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "33998:3:17"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "33965:32:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "33965:37:17"
                  },
                  "variables": [
                    {
                      "name": "newLen",
                      "nodeType": "YulTypedName",
                      "src": "33955:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "34087:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "34089:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "34089:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "34089:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "34059:6:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "34067:18:17",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "34056:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "34056:30:17"
                  },
                  "nodeType": "YulIf",
                  "src": "34053:56:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "34119:52:17",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "slot",
                            "nodeType": "YulIdentifier",
                            "src": "34165:4:17"
                          }
                        ],
                        "functionName": {
                          "name": "sload",
                          "nodeType": "YulIdentifier",
                          "src": "34159:5:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "34159:11:17"
                      }
                    ],
                    "functionName": {
                      "name": "extract_byte_array_length",
                      "nodeType": "YulIdentifier",
                      "src": "34133:25:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "34133:38:17"
                  },
                  "variables": [
                    {
                      "name": "oldLen",
                      "nodeType": "YulTypedName",
                      "src": "34123:6:17",
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
                        "src": "34264:4:17"
                      },
                      {
                        "name": "oldLen",
                        "nodeType": "YulIdentifier",
                        "src": "34270:6:17"
                      },
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "34278:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "clean_up_bytearray_end_slots_t_string_storage",
                      "nodeType": "YulIdentifier",
                      "src": "34218:45:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "34218:67:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "34218:67:17"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "34295:18:17",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "34312:1:17",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulTypedName",
                      "src": "34299:9:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "34323:17:17",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "34336:4:17",
                    "type": "",
                    "value": "0x20"
                  },
                  "variableNames": [
                    {
                      "name": "srcOffset",
                      "nodeType": "YulIdentifier",
                      "src": "34323:9:17"
                    }
                  ]
                },
                {
                  "cases": [
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "34387:611:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "34401:37:17",
                            "value": {
                              "arguments": [
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "34420:6:17"
                                },
                                {
                                  "arguments": [
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "34432:4:17",
                                      "type": "",
                                      "value": "0x1f"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "not",
                                    "nodeType": "YulIdentifier",
                                    "src": "34428:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "34428:9:17"
                                }
                              ],
                              "functionName": {
                                "name": "and",
                                "nodeType": "YulIdentifier",
                                "src": "34416:3:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "34416:22:17"
                            },
                            "variables": [
                              {
                                "name": "loopEnd",
                                "nodeType": "YulTypedName",
                                "src": "34405:7:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "34452:51:17",
                            "value": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "34498:4:17"
                                }
                              ],
                              "functionName": {
                                "name": "array_dataslot_t_string_storage",
                                "nodeType": "YulIdentifier",
                                "src": "34466:31:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "34466:37:17"
                            },
                            "variables": [
                              {
                                "name": "dstPtr",
                                "nodeType": "YulTypedName",
                                "src": "34456:6:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "34516:10:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "34525:1:17",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "i",
                                "nodeType": "YulTypedName",
                                "src": "34520:1:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "34584:163:17",
                              "statements": [
                                {
                                  "expression": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "34609:6:17"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "arguments": [
                                              {
                                                "name": "src",
                                                "nodeType": "YulIdentifier",
                                                "src": "34627:3:17"
                                              },
                                              {
                                                "name": "srcOffset",
                                                "nodeType": "YulIdentifier",
                                                "src": "34632:9:17"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "add",
                                              "nodeType": "YulIdentifier",
                                              "src": "34623:3:17"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "34623:19:17"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mload",
                                          "nodeType": "YulIdentifier",
                                          "src": "34617:5:17"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "34617:26:17"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "34602:6:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "34602:42:17"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "34602:42:17"
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "34661:24:17",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "dstPtr",
                                        "nodeType": "YulIdentifier",
                                        "src": "34675:6:17"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "34683:1:17",
                                        "type": "",
                                        "value": "1"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "34671:3:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "34671:14:17"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "dstPtr",
                                      "nodeType": "YulIdentifier",
                                      "src": "34661:6:17"
                                    }
                                  ]
                                },
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "34702:31:17",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "srcOffset",
                                        "nodeType": "YulIdentifier",
                                        "src": "34719:9:17"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "34730:2:17",
                                        "type": "",
                                        "value": "32"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "34715:3:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "34715:18:17"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "srcOffset",
                                      "nodeType": "YulIdentifier",
                                      "src": "34702:9:17"
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
                                  "src": "34550:1:17"
                                },
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "34553:7:17"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "34547:2:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "34547:14:17"
                            },
                            "nodeType": "YulForLoop",
                            "post": {
                              "nodeType": "YulBlock",
                              "src": "34562:21:17",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "34564:17:17",
                                  "value": {
                                    "arguments": [
                                      {
                                        "name": "i",
                                        "nodeType": "YulIdentifier",
                                        "src": "34573:1:17"
                                      },
                                      {
                                        "kind": "number",
                                        "nodeType": "YulLiteral",
                                        "src": "34576:4:17",
                                        "type": "",
                                        "value": "0x20"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "add",
                                      "nodeType": "YulIdentifier",
                                      "src": "34569:3:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "34569:12:17"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "34564:1:17"
                                    }
                                  ]
                                }
                              ]
                            },
                            "pre": {
                              "nodeType": "YulBlock",
                              "src": "34543:3:17",
                              "statements": []
                            },
                            "src": "34539:208:17"
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "34783:156:17",
                              "statements": [
                                {
                                  "nodeType": "YulVariableDeclaration",
                                  "src": "34801:43:17",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "34828:3:17"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "34833:9:17"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "34824:3:17"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "34824:19:17"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "34818:5:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "34818:26:17"
                                  },
                                  "variables": [
                                    {
                                      "name": "lastValue",
                                      "nodeType": "YulTypedName",
                                      "src": "34805:9:17",
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
                                        "src": "34868:6:17"
                                      },
                                      {
                                        "arguments": [
                                          {
                                            "name": "lastValue",
                                            "nodeType": "YulIdentifier",
                                            "src": "34895:9:17"
                                          },
                                          {
                                            "arguments": [
                                              {
                                                "name": "newLen",
                                                "nodeType": "YulIdentifier",
                                                "src": "34910:6:17"
                                              },
                                              {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "34918:4:17",
                                                "type": "",
                                                "value": "0x1f"
                                              }
                                            ],
                                            "functionName": {
                                              "name": "and",
                                              "nodeType": "YulIdentifier",
                                              "src": "34906:3:17"
                                            },
                                            "nodeType": "YulFunctionCall",
                                            "src": "34906:17:17"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "mask_bytes_dynamic",
                                          "nodeType": "YulIdentifier",
                                          "src": "34876:18:17"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "34876:48:17"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "sstore",
                                      "nodeType": "YulIdentifier",
                                      "src": "34861:6:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "34861:64:17"
                                  },
                                  "nodeType": "YulExpressionStatement",
                                  "src": "34861:64:17"
                                }
                              ]
                            },
                            "condition": {
                              "arguments": [
                                {
                                  "name": "loopEnd",
                                  "nodeType": "YulIdentifier",
                                  "src": "34766:7:17"
                                },
                                {
                                  "name": "newLen",
                                  "nodeType": "YulIdentifier",
                                  "src": "34775:6:17"
                                }
                              ],
                              "functionName": {
                                "name": "lt",
                                "nodeType": "YulIdentifier",
                                "src": "34763:2:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "34763:19:17"
                            },
                            "nodeType": "YulIf",
                            "src": "34760:179:17"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "34959:4:17"
                                },
                                {
                                  "arguments": [
                                    {
                                      "arguments": [
                                        {
                                          "name": "newLen",
                                          "nodeType": "YulIdentifier",
                                          "src": "34973:6:17"
                                        },
                                        {
                                          "kind": "number",
                                          "nodeType": "YulLiteral",
                                          "src": "34981:1:17",
                                          "type": "",
                                          "value": "2"
                                        }
                                      ],
                                      "functionName": {
                                        "name": "mul",
                                        "nodeType": "YulIdentifier",
                                        "src": "34969:3:17"
                                      },
                                      "nodeType": "YulFunctionCall",
                                      "src": "34969:14:17"
                                    },
                                    {
                                      "kind": "number",
                                      "nodeType": "YulLiteral",
                                      "src": "34985:1:17",
                                      "type": "",
                                      "value": "1"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "34965:3:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "34965:22:17"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "34952:6:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "34952:36:17"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "34952:36:17"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "34380:618:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "34385:1:17",
                        "type": "",
                        "value": "1"
                      }
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "35015:222:17",
                        "statements": [
                          {
                            "nodeType": "YulVariableDeclaration",
                            "src": "35029:14:17",
                            "value": {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "35042:1:17",
                              "type": "",
                              "value": "0"
                            },
                            "variables": [
                              {
                                "name": "value",
                                "nodeType": "YulTypedName",
                                "src": "35033:5:17",
                                "type": ""
                              }
                            ]
                          },
                          {
                            "body": {
                              "nodeType": "YulBlock",
                              "src": "35066:67:17",
                              "statements": [
                                {
                                  "nodeType": "YulAssignment",
                                  "src": "35084:35:17",
                                  "value": {
                                    "arguments": [
                                      {
                                        "arguments": [
                                          {
                                            "name": "src",
                                            "nodeType": "YulIdentifier",
                                            "src": "35103:3:17"
                                          },
                                          {
                                            "name": "srcOffset",
                                            "nodeType": "YulIdentifier",
                                            "src": "35108:9:17"
                                          }
                                        ],
                                        "functionName": {
                                          "name": "add",
                                          "nodeType": "YulIdentifier",
                                          "src": "35099:3:17"
                                        },
                                        "nodeType": "YulFunctionCall",
                                        "src": "35099:19:17"
                                      }
                                    ],
                                    "functionName": {
                                      "name": "mload",
                                      "nodeType": "YulIdentifier",
                                      "src": "35093:5:17"
                                    },
                                    "nodeType": "YulFunctionCall",
                                    "src": "35093:26:17"
                                  },
                                  "variableNames": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "35084:5:17"
                                    }
                                  ]
                                }
                              ]
                            },
                            "condition": {
                              "name": "newLen",
                              "nodeType": "YulIdentifier",
                              "src": "35059:6:17"
                            },
                            "nodeType": "YulIf",
                            "src": "35056:77:17"
                          },
                          {
                            "expression": {
                              "arguments": [
                                {
                                  "name": "slot",
                                  "nodeType": "YulIdentifier",
                                  "src": "35153:4:17"
                                },
                                {
                                  "arguments": [
                                    {
                                      "name": "value",
                                      "nodeType": "YulIdentifier",
                                      "src": "35212:5:17"
                                    },
                                    {
                                      "name": "newLen",
                                      "nodeType": "YulIdentifier",
                                      "src": "35219:6:17"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "extract_used_part_and_set_length_of_short_byte_array",
                                    "nodeType": "YulIdentifier",
                                    "src": "35159:52:17"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "35159:67:17"
                                }
                              ],
                              "functionName": {
                                "name": "sstore",
                                "nodeType": "YulIdentifier",
                                "src": "35146:6:17"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "35146:81:17"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "35146:81:17"
                          }
                        ]
                      },
                      "nodeType": "YulCase",
                      "src": "35007:230:17",
                      "value": "default"
                    }
                  ],
                  "expression": {
                    "arguments": [
                      {
                        "name": "newLen",
                        "nodeType": "YulIdentifier",
                        "src": "34360:6:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "34368:2:17",
                        "type": "",
                        "value": "31"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "34357:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "34357:14:17"
                  },
                  "nodeType": "YulSwitch",
                  "src": "34350:887:17"
                }
              ]
            },
            "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "slot",
                "nodeType": "YulTypedName",
                "src": "33929:4:17",
                "type": ""
              },
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "33935:3:17",
                "type": ""
              }
            ],
            "src": "33848:1395:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "35307:40:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "35318:22:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "35334:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "35328:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "35328:12:17"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "35318:6:17"
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
                "src": "35290:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "35300:6:17",
                "type": ""
              }
            ],
            "src": "35249:98:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "35448:73:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "35465:3:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "35470:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "35458:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "35458:19:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "35458:19:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "35486:29:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "35505:3:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "35510:4:17",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "35501:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "35501:14:17"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "35486:11:17"
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
                "src": "35420:3:17",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "35425:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "35436:11:17",
                "type": ""
              }
            ],
            "src": "35353:168:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "35617:270:17",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "35627:52:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "35673:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_bytes_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "35641:31:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "35641:38:17"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "35631:6:17",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "35688:77:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "35753:3:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "35758:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "35695:57:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "35695:70:17"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "35688:3:17"
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
                            "src": "35800:5:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "35807:4:17",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "35796:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "35796:16:17"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "35814:3:17"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "35819:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "35774:21:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "35774:52:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "35774:52:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "35835:46:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "35846:3:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "35873:6:17"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "35851:21:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "35851:29:17"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "35842:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "35842:39:17"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "35835:3:17"
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
                "src": "35598:5:17",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "35605:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "35613:3:17",
                "type": ""
              }
            ],
            "src": "35527:360:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "36093:440:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "36103:27:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "36115:9:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "36126:3:17",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "36111:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36111:19:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "36103:4:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "36184:6:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "36197:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "36208:1:17",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "36193:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "36193:17:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "36140:43:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36140:71:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "36140:71:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "36265:6:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "36278:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "36289:2:17",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "36274:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "36274:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_address_to_t_address_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "36221:43:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36221:72:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "36221:72:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "36347:6:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "36360:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "36371:2:17",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "36356:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "36356:18:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "36303:43:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36303:72:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "36303:72:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "36396:9:17"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "36407:2:17",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "36392:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "36392:18:17"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "36416:4:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "36422:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "36412:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "36412:20:17"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "36385:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36385:48:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "36385:48:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "36442:84:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "36512:6:17"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "36521:4:17"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "36450:61:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36450:76:17"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "36442:4:17"
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
                "src": "36041:9:17",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "36053:6:17",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "36061:6:17",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "36069:6:17",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "36077:6:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "36088:4:17",
                "type": ""
              }
            ],
            "src": "35893:640:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "36601:79:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "36611:22:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "36626:6:17"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "36620:5:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36620:13:17"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "36611:5:17"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "36668:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_bytes4",
                      "nodeType": "YulIdentifier",
                      "src": "36642:25:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36642:32:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "36642:32:17"
                }
              ]
            },
            "name": "abi_decode_t_bytes4_fromMemory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "36579:6:17",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "36587:3:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "36595:5:17",
                "type": ""
              }
            ],
            "src": "36539:141:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "36762:273:17",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "36808:83:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "36810:77:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "36810:79:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "36810:79:17"
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
                            "src": "36783:7:17"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "36792:9:17"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "36779:3:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "36779:23:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "36804:2:17",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "36775:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "36775:32:17"
                  },
                  "nodeType": "YulIf",
                  "src": "36772:119:17"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "36901:127:17",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "36916:15:17",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "36930:1:17",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "36920:6:17",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "36945:73:17",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "36990:9:17"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "37001:6:17"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "36986:3:17"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "36986:22:17"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "37010:7:17"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_bytes4_fromMemory",
                          "nodeType": "YulIdentifier",
                          "src": "36955:30:17"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "36955:63:17"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "36945:6:17"
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
                "src": "36732:9:17",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "36743:7:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "36755:6:17",
                "type": ""
              }
            ],
            "src": "36686:349:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "37084:190:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "37094:33:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "37121:5:17"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "37103:17:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37103:24:17"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "37094:5:17"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "37217:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "37219:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "37219:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "37219:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "37142:5:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37149:66:17",
                        "type": "",
                        "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "37139:2:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37139:77:17"
                  },
                  "nodeType": "YulIf",
                  "src": "37136:103:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "37248:20:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "37259:5:17"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37266:1:17",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "37255:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37255:13:17"
                  },
                  "variableNames": [
                    {
                      "name": "ret",
                      "nodeType": "YulIdentifier",
                      "src": "37248:3:17"
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
                "src": "37070:5:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "ret",
                "nodeType": "YulTypedName",
                "src": "37080:3:17",
                "type": ""
              }
            ],
            "src": "37041:233:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "37308:152:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37325:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37328:77:17",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "37318:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37318:88:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "37318:88:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37422:1:17",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37425:4:17",
                        "type": "",
                        "value": "0x12"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "37415:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37415:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "37415:15:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37446:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37449:4:17",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "37439:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37439:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "37439:15:17"
                }
              ]
            },
            "name": "panic_error_0x12",
            "nodeType": "YulFunctionDefinition",
            "src": "37280:180:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "37508:143:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "37518:25:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "37541:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "37523:17:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37523:20:17"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "37518:1:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "37552:25:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "37575:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "37557:17:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37557:20:17"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "37552:1:17"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "37599:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "37601:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "37601:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "37601:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "37596:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "37589:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37589:9:17"
                  },
                  "nodeType": "YulIf",
                  "src": "37586:35:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "37631:14:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "37640:1:17"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "37643:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "37636:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37636:9:17"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "37631:1:17"
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
                "src": "37497:1:17",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "37500:1:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "37506:1:17",
                "type": ""
              }
            ],
            "src": "37466:185:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "37691:142:17",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "37701:25:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "37724:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "37706:17:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37706:20:17"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "37701:1:17"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "37735:25:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "37758:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "37740:17:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37740:20:17"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "37735:1:17"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "37782:22:17",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x12",
                            "nodeType": "YulIdentifier",
                            "src": "37784:16:17"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "37784:18:17"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "37784:18:17"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "37779:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "37772:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37772:9:17"
                  },
                  "nodeType": "YulIf",
                  "src": "37769:35:17"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "37813:14:17",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "37822:1:17"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "37825:1:17"
                      }
                    ],
                    "functionName": {
                      "name": "mod",
                      "nodeType": "YulIdentifier",
                      "src": "37818:3:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37818:9:17"
                  },
                  "variableNames": [
                    {
                      "name": "r",
                      "nodeType": "YulIdentifier",
                      "src": "37813:1:17"
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
                "src": "37680:1:17",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "37683:1:17",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "r",
                "nodeType": "YulTypedName",
                "src": "37689:1:17",
                "type": ""
              }
            ],
            "src": "37657:176:17"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "37867:152:17",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37884:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37887:77:17",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "37877:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37877:88:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "37877:88:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37981:1:17",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "37984:4:17",
                        "type": "",
                        "value": "0x31"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "37974:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37974:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "37974:15:17"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "38005:1:17",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "38008:4:17",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "37998:6:17"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "37998:15:17"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "37998:15:17"
                }
              ]
            },
            "name": "panic_error_0x31",
            "nodeType": "YulFunctionDefinition",
            "src": "37839:180:17"
          }
        ]
      },
      "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_bytes4(value) -> cleaned {\n        cleaned := and(value, 0xffffffff00000000000000000000000000000000000000000000000000000000)\n    }\n\n    function validator_revert_t_bytes4(value) {\n        if iszero(eq(value, cleanup_t_bytes4(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bytes4(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    function abi_decode_tuple_t_bytes4(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_bool(value) -> cleaned {\n        cleaned := iszero(iszero(value))\n    }\n\n    function abi_encode_t_bool_to_t_bool_fromStack(value, pos) {\n        mstore(pos, cleanup_t_bool(value))\n    }\n\n    function abi_encode_tuple_t_bool__to_t_bool__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_bool_to_t_bool_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address__to_t_address__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_address(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function validator_revert_t_bool(value) {\n        if iszero(eq(value, cleanup_t_bool(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_bool(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_bool(value)\n    }\n\n    function abi_decode_tuple_t_addresst_bool(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_bool(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_bytes_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory(src, dst, length) {\n        calldatacopy(dst, src, length)\n        // clear end\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_bytes_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_bytes_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // bytes\n    function abi_decode_t_bytes_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_bytes_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_addresst_addresst_uint256t_bytes_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3 {\n        if slt(sub(dataEnd, headStart), 128) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 96))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value3 := abi_decode_t_bytes_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_address(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_addresst_string_memory_ptr(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value1 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approval to current owne\")\n\n        mstore(add(memPtr, 32), \"r\")\n\n    }\n\n    function abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 33)\n        store_literal_in_memory_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b51b4875eede07862961e8f9365c6749f5fe55c6ee5d7a9e42b6912ad0b15942_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approve caller is not to\")\n\n        mstore(add(memPtr, 32), \"ken owner nor approved for all\")\n\n    }\n\n    function abi_encode_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 62)\n        store_literal_in_memory_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8a333355a81806ed720720a526142c1e97d1086371f6be2b18561203134ef304_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: caller is not token owne\")\n\n        mstore(add(memPtr, 32), \"r nor approved\")\n\n    }\n\n    function abi_encode_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 46)\n        store_literal_in_memory_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_eb80b9f25203511adb7b7660e6222669e088cedd0909cd81ed7470e34dcd010b_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721Enumerable: owner index ou\")\n\n        mstore(add(memPtr, 32), \"t of bounds\")\n\n    }\n\n    function abi_encode_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 43)\n        store_literal_in_memory_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1d7f5dcf03a65f41ee49b0ab593e3851cfbe3fd7da53b6cf4eddd83c7df5734c_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721Enumerable: global index o\")\n\n        mstore(add(memPtr, 32), \"ut of bounds\")\n\n    }\n\n    function abi_encode_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 44)\n        store_literal_in_memory_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_d269a4e9f5820dcdb69ea21f528512eb9b927c8d846d48aa51c9219f461d4dcc_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x32() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x32)\n        revert(0, 0x24)\n    }\n\n    function store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: invalid token ID\")\n\n    }\n\n    function abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 24)\n        store_literal_in_memory_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_b08d2b0fec7cc108ab049809a8beb42779d969a49299d0c317c907d9db22974f_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: address zero is not a va\")\n\n        mstore(add(memPtr, 32), \"lid owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 41)\n        store_literal_in_memory_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_6d05c90094f31cfeb8f0eb86f0a513af3f7f8992991fbde41b08aa7960677159_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: new owner is the zero a\")\n\n        mstore(add(memPtr, 32), \"ddress\")\n\n    }\n\n    function abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 38)\n        store_literal_in_memory_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_245f15ff17f551913a7a18385165551503906a406f905ac1c2437281a7cd0cfe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer from incorrect \")\n\n        mstore(add(memPtr, 32), \"owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 37)\n        store_literal_in_memory_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_277f8ee9d5b4fc3c4149386f24de0fc1bbc63a8210e2197bfd1c0376a2ac5f48_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer to the zero add\")\n\n        mstore(add(memPtr, 32), \"ress\")\n\n    }\n\n    function abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 36)\n        store_literal_in_memory_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_455fea98ea03c32d7dd1a6f1426917d80529bf47b3ccbde74e7206e889e709f4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_sub_t_uint256(x, y) -> diff {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        if lt(x, y) { panic_error_0x11() }\n\n        diff := sub(x, y)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(memPtr) {\n\n        mstore(add(memPtr, 0), \"Ownable: caller is not the owner\")\n\n    }\n\n    function abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_9924ebdf1add33d25d4ef888e16131f0a5687b0580a36c21b5c301a6c462effe_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: approve to caller\")\n\n    }\n\n    function abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 25)\n        store_literal_in_memory_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_45fe4329685be5ecd250fd0e6a25aea0ea4d0e30fb6a73c118b95749e6d70d05_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: transfer to non ERC721Re\")\n\n        mstore(add(memPtr, 32), \"ceiver implementer\")\n\n    }\n\n    function abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 50)\n        store_literal_in_memory_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_1e766a06da43a53d0f4c380e06e5a342e14d5af1bf8501996c844905530ca84e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length) -> updated_pos {\n        updated_pos := pos\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_nonPadded_inplace_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, length)\n    }\n\n    function abi_encode_tuple_packed_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_string_memory_ptr__nonPadded_inplace_fromStack_reversed(pos , value1, value0) -> end {\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value0,  pos)\n\n        pos := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_nonPadded_inplace_fromStack(value1,  pos)\n\n        end := pos\n    }\n\n    function store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 32)\n        store_literal_in_memory_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_8a66f4bb6512ffbfcc3db9b42318eb65f26ac15163eaa9a1e5cfa7bee9d1c7c6_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721: token already minted\")\n\n    }\n\n    function abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 28)\n        store_literal_in_memory_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_2a63ce106ef95058ed21fd07c42a10f11dc5c32ac13a4e847923f7759f635d57_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC721URIStorage: URI set of non\")\n\n        mstore(add(memPtr, 32), \"existent token\")\n\n    }\n\n    function abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 46)\n        store_literal_in_memory_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4(pos)\n        end := add(pos, 64)\n    }\n\n    function abi_encode_tuple_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_7521de1f20ce4d7bb86b61090bad73a87315a1f4baff36cc352901c7777280c4_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n    function array_length_t_bytes_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_bytes_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_bytes_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_address_t_address_t_uint256_t_bytes_memory_ptr__to_t_address_t_address_t_uint256_t_bytes_memory_ptr__fromStack_reversed(headStart , value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 128)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_address_to_t_address_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n        mstore(add(headStart, 96), sub(tail, headStart))\n        tail := abi_encode_t_bytes_memory_ptr_to_t_bytes_memory_ptr_fromStack(value3,  tail)\n\n    }\n\n    function abi_decode_t_bytes4_fromMemory(offset, end) -> value {\n        value := mload(offset)\n        validator_revert_t_bytes4(value)\n    }\n\n    function abi_decode_tuple_t_bytes4_fromMemory(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_bytes4_fromMemory(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function panic_error_0x12() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x12)\n        revert(0, 0x24)\n    }\n\n    function checked_div_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n\n        r := div(x, y)\n    }\n\n    function mod_t_uint256(x, y) -> r {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        if iszero(y) { panic_error_0x12() }\n        r := mod(x, y)\n    }\n\n    function panic_error_0x31() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x31)\n        revert(0, 0x24)\n    }\n\n}\n",
      "id": 17,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "380:1454:15:-:0;;;570:119;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1390:113:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1464:5;1456;:13;;;;;;:::i;:::-;;1489:7;1479;:17;;;;;;:::i;:::-;;1390:113;;936:32:0;955:12;:10;;;:12;;:::i;:::-;936:18;;;:32;;:::i;:::-;667:15:15::1;643:21;;:39;;;;;;;;;;;;;;;;;;570:119:::0;380:1454;;640:96:9;693:7;719:10;712:17;;640:96;:::o;2433:187:0:-;2506:16;2525:6;;;;;;;;;;;2506:25;;2550:8;2541:6;;:17;;;;;;;;;;;;;;;;;;2604:8;2573:40;;2594:8;2573:40;;;;;;;;;;;;2496:124;2433:187;:::o;88:117:17:-;197:1;194;187:12;334:126;371:7;411:42;404:5;400:54;389:65;;334:126;;;:::o;466:96::-;503:7;532:24;550:5;532:24;:::i;:::-;521:35;;466:96;;;:::o;568:122::-;641:24;659:5;641:24;:::i;:::-;634:5;631:35;621:63;;680:1;677;670:12;621:63;568:122;:::o;696:143::-;753:5;784:6;778:13;769:22;;800:33;827:5;800:33;:::i;:::-;696:143;;;;:::o;845:351::-;915:6;964:2;952:9;943:7;939:23;935:32;932:119;;;970:79;;:::i;:::-;932:119;1090:1;1115:64;1171:7;1162:6;1151:9;1147:22;1115:64;:::i;:::-;1105:74;;1061:128;845:351;;;;:::o;1202:99::-;1254:6;1288:5;1282:12;1272:22;;1202:99;;;:::o;1307:180::-;1355:77;1352:1;1345:88;1452:4;1449:1;1442:15;1476:4;1473:1;1466:15;1493:180;1541:77;1538:1;1531:88;1638:4;1635:1;1628:15;1662:4;1659:1;1652:15;1679:320;1723:6;1760:1;1754:4;1750:12;1740:22;;1807:1;1801:4;1797:12;1828:18;1818:81;;1884:4;1876:6;1872:17;1862:27;;1818:81;1946:2;1938:6;1935:14;1915:18;1912:38;1909:84;;1965:18;;:::i;:::-;1909:84;1730:269;1679:320;;;:::o;2005:141::-;2054:4;2077:3;2069:11;;2100:3;2097:1;2090:14;2134:4;2131:1;2121:18;2113:26;;2005:141;;;:::o;2152:93::-;2189:6;2236:2;2231;2224:5;2220:14;2216:23;2206:33;;2152:93;;;:::o;2251:107::-;2295:8;2345:5;2339:4;2335:16;2314:37;;2251:107;;;;:::o;2364:393::-;2433:6;2483:1;2471:10;2467:18;2506:97;2536:66;2525:9;2506:97;:::i;:::-;2624:39;2654:8;2643:9;2624:39;:::i;:::-;2612:51;;2696:4;2692:9;2685:5;2681:21;2672:30;;2745:4;2735:8;2731:19;2724:5;2721:30;2711:40;;2440:317;;2364:393;;;;;:::o;2763:77::-;2800:7;2829:5;2818:16;;2763:77;;;:::o;2846:60::-;2874:3;2895:5;2888:12;;2846:60;;;:::o;2912:142::-;2962:9;2995:53;3013:34;3022:24;3040:5;3022:24;:::i;:::-;3013:34;:::i;:::-;2995:53;:::i;:::-;2982:66;;2912:142;;;:::o;3060:75::-;3103:3;3124:5;3117:12;;3060:75;;;:::o;3141:269::-;3251:39;3282:7;3251:39;:::i;:::-;3312:91;3361:41;3385:16;3361:41;:::i;:::-;3353:6;3346:4;3340:11;3312:91;:::i;:::-;3306:4;3299:105;3217:193;3141:269;;;:::o;3416:73::-;3461:3;3416:73;:::o;3495:189::-;3572:32;;:::i;:::-;3613:65;3671:6;3663;3657:4;3613:65;:::i;:::-;3548:136;3495:189;;:::o;3690:186::-;3750:120;3767:3;3760:5;3757:14;3750:120;;;3821:39;3858:1;3851:5;3821:39;:::i;:::-;3794:1;3787:5;3783:13;3774:22;;3750:120;;;3690:186;;:::o;3882:543::-;3983:2;3978:3;3975:11;3972:446;;;4017:38;4049:5;4017:38;:::i;:::-;4101:29;4119:10;4101:29;:::i;:::-;4091:8;4087:44;4284:2;4272:10;4269:18;4266:49;;;4305:8;4290:23;;4266:49;4328:80;4384:22;4402:3;4384:22;:::i;:::-;4374:8;4370:37;4357:11;4328:80;:::i;:::-;3987:431;;3972:446;3882:543;;;:::o;4431:117::-;4485:8;4535:5;4529:4;4525:16;4504:37;;4431:117;;;;:::o;4554:169::-;4598:6;4631:51;4679:1;4675:6;4667:5;4664:1;4660:13;4631:51;:::i;:::-;4627:56;4712:4;4706;4702:15;4692:25;;4605:118;4554:169;;;;:::o;4728:295::-;4804:4;4950:29;4975:3;4969:4;4950:29;:::i;:::-;4942:37;;5012:3;5009:1;5005:11;4999:4;4996:21;4988:29;;4728:295;;;;:::o;5028:1395::-;5145:37;5178:3;5145:37;:::i;:::-;5247:18;5239:6;5236:30;5233:56;;;5269:18;;:::i;:::-;5233:56;5313:38;5345:4;5339:11;5313:38;:::i;:::-;5398:67;5458:6;5450;5444:4;5398:67;:::i;:::-;5492:1;5516:4;5503:17;;5548:2;5540:6;5537:14;5565:1;5560:618;;;;6222:1;6239:6;6236:77;;;6288:9;6283:3;6279:19;6273:26;6264:35;;6236:77;6339:67;6399:6;6392:5;6339:67;:::i;:::-;6333:4;6326:81;6195:222;5530:887;;5560:618;5612:4;5608:9;5600:6;5596:22;5646:37;5678:4;5646:37;:::i;:::-;5705:1;5719:208;5733:7;5730:1;5727:14;5719:208;;;5812:9;5807:3;5803:19;5797:26;5789:6;5782:42;5863:1;5855:6;5851:14;5841:24;;5910:2;5899:9;5895:18;5882:31;;5756:4;5753:1;5749:12;5744:17;;5719:208;;;5955:6;5946:7;5943:19;5940:179;;;6013:9;6008:3;6004:19;5998:26;6056:48;6098:4;6090:6;6086:17;6075:9;6056:48;:::i;:::-;6048:6;6041:64;5963:156;5940:179;6165:1;6161;6153:6;6149:14;6145:22;6139:4;6132:36;5567:611;;;5530:887;;5120:1303;;;5028:1395;;:::o;380:1454:15:-;;;;;;;",
  "deployedSourceMap": "380:1454:15:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1055:205;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2470:98:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3935:167;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;3467:407;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1615:111:4;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4612:327:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1291:253:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;5005:179:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1798:230:4;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2190:218:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1929:204;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1831:101:0;;;:::i;:::-;;1201:85;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2632:102:1;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4169:153;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;5250:315;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1266:175:15;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;4388:162:1;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1451:381:15;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;2081:198:0;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1055:205:15;1190:4;1217:36;1241:11;1217:23;:36::i;:::-;1210:43;;1055:205;;;:::o;2470:98:1:-;2524:13;2556:5;2549:12;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2470:98;:::o;3935:167::-;4011:7;4030:23;4045:7;4030:14;:23::i;:::-;4071:15;:24;4087:7;4071:24;;;;;;;;;;;;;;;;;;;;;4064:31;;3935:167;;;:::o;3467:407::-;3547:13;3563:23;3578:7;3563:14;:23::i;:::-;3547:39;;3610:5;3604:11;;:2;:11;;;3596:57;;;;;;;;;;;;:::i;:::-;;;;;;;;;3701:5;3685:21;;:12;:10;:12::i;:::-;:21;;;:62;;;;3710:37;3727:5;3734:12;:10;:12::i;:::-;3710:16;:37::i;:::-;3685:62;3664:171;;;;;;;;;;;;:::i;:::-;;;;;;;;;3846:21;3855:2;3859:7;3846:8;:21::i;:::-;3537:337;3467:407;;:::o;1615:111:4:-;1676:7;1702:10;:17;;;;1695:24;;1615:111;:::o;4612:327:1:-;4801:41;4820:12;:10;:12::i;:::-;4834:7;4801:18;:41::i;:::-;4793:100;;;;;;;;;;;;:::i;:::-;;;;;;;;;4904:28;4914:4;4920:2;4924:7;4904:9;:28::i;:::-;4612:327;;;:::o;1291:253:4:-;1388:7;1423:23;1440:5;1423:16;:23::i;:::-;1415:5;:31;1407:87;;;;;;;;;;;;:::i;:::-;;;;;;;;;1511:12;:19;1524:5;1511:19;;;;;;;;;;;;;;;:26;1531:5;1511:26;;;;;;;;;;;;1504:33;;1291:253;;;;:::o;5005:179:1:-;5138:39;5155:4;5161:2;5165:7;5138:39;;;;;;;;;;;;:16;:39::i;:::-;5005:179;;;:::o;1798:230:4:-;1873:7;1908:30;:28;:30::i;:::-;1900:5;:38;1892:95;;;;;;;;;;;;:::i;:::-;;;;;;;;;2004:10;2015:5;2004:17;;;;;;;;:::i;:::-;;;;;;;;;;1997:24;;1798:230;;;:::o;2190:218:1:-;2262:7;2281:13;2297:7;:16;2305:7;2297:16;;;;;;;;;;;;;;;;;;;;;2281:32;;2348:1;2331:19;;:5;:19;;;2323:56;;;;;;;;;;;;:::i;:::-;;;;;;;;;2396:5;2389:12;;;2190:218;;;:::o;1929:204::-;2001:7;2045:1;2028:19;;:5;:19;;;2020:73;;;;;;;;;;;;:::i;:::-;;;;;;;;;2110:9;:16;2120:5;2110:16;;;;;;;;;;;;;;;;2103:23;;1929:204;;;:::o;1831:101:0:-;1094:13;:11;:13::i;:::-;1895:30:::1;1922:1;1895:18;:30::i;:::-;1831:101::o:0;1201:85::-;1247:7;1273:6;;;;;;;;;;;1266:13;;1201:85;:::o;2632:102:1:-;2688:13;2720:7;2713:14;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2632:102;:::o;4169:153::-;4263:52;4282:12;:10;:12::i;:::-;4296:8;4306;4263:18;:52::i;:::-;4169:153;;:::o;5250:315::-;5418:41;5437:12;:10;:12::i;:::-;5451:7;5418:18;:41::i;:::-;5410:100;;;;;;;;;;;;:::i;:::-;;;;;;;;;5520:38;5534:4;5540:2;5544:7;5553:4;5520:13;:38::i;:::-;5250:315;;;;:::o;1266:175:15:-;1378:13;1410:24;1425:8;1410:14;:24::i;:::-;1403:31;;1266:175;;;:::o;4388:162:1:-;4485:4;4508:18;:25;4527:5;4508:25;;;;;;;;;;;;;;;:35;4534:8;4508:35;;;;;;;;;;;;;;;;;;;;;;;;;4501:42;;4388:162;;;;:::o;1451:381:15:-;1529:7;1548:21;:9;:19;:21::i;:::-;1580:17;1600:19;:9;:17;:19::i;:::-;1580:39;;1629:28;1635:10;1647:9;1629:5;:28::i;:::-;1667:34;1680:9;1691;1667:12;:34::i;:::-;1711:46;1729:21;;;;;;;;;;;1752:4;1711:17;:46::i;:::-;1816:9;1809:16;;;1451:381;;;;:::o;2081:198:0:-;1094:13;:11;:13::i;:::-;2189:1:::1;2169:22;;:8;:22;;::::0;2161:73:::1;;;;;;;;;;;;:::i;:::-;;;;;;;;;2244:28;2263:8;2244:18;:28::i;:::-;2081:198:::0;:::o;990:222:4:-;1092:4;1130:35;1115:50;;;:11;:50;;;;:90;;;;1169:36;1193:11;1169:23;:36::i;:::-;1115:90;1108:97;;990:222;;;:::o;11657:133:1:-;11738:16;11746:7;11738;:16::i;:::-;11730:53;;;;;;;;;;;;:::i;:::-;;;;;;;;;11657:133;:::o;640:96:9:-;693:7;719:10;712:17;;640:96;:::o;10959:171:1:-;11060:2;11033:15;:24;11049:7;11033:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;11115:7;11111:2;11077:46;;11086:23;11101:7;11086:14;:23::i;:::-;11077:46;;;;;;;;;;;;10959:171;;:::o;7317:261::-;7410:4;7426:13;7442:23;7457:7;7442:14;:23::i;:::-;7426:39;;7494:5;7483:16;;:7;:16;;;:52;;;;7503:32;7520:5;7527:7;7503:16;:32::i;:::-;7483:52;:87;;;;7563:7;7539:31;;:20;7551:7;7539:11;:20::i;:::-;:31;;;7483:87;7475:96;;;7317:261;;;;:::o;10242:605::-;10396:4;10369:31;;:23;10384:7;10369:14;:23::i;:::-;:31;;;10361:81;;;;;;;;;;;;:::i;:::-;;;;;;;;;10474:1;10460:16;;:2;:16;;;10452:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;10528:39;10549:4;10555:2;10559:7;10528:20;:39::i;:::-;10629:29;10646:1;10650:7;10629:8;:29::i;:::-;10688:1;10669:9;:15;10679:4;10669:15;;;;;;;;;;;;;;;;:20;;;;;;;:::i;:::-;;;;;;;;10716:1;10699:9;:13;10709:2;10699:13;;;;;;;;;;;;;;;;:18;;;;;;;:::i;:::-;;;;;;;;10746:2;10727:7;:16;10735:7;10727:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;10783:7;10779:2;10764:27;;10773:4;10764:27;;;;;;;;;;;;10802:38;10822:4;10828:2;10832:7;10802:19;:38::i;:::-;10242:605;;;:::o;1359:130:0:-;1433:12;:10;:12::i;:::-;1422:23;;:7;:5;:7::i;:::-;:23;;;1414:68;;;;;;;;;;;;:::i;:::-;;;;;;;;;1359:130::o;2433:187::-;2506:16;2525:6;;;;;;;;;;;2506:25;;2550:8;2541:6;;:17;;;;;;;;;;;;;;;;;;2604:8;2573:40;;2594:8;2573:40;;;;;;;;;;;;2496:124;2433:187;:::o;11266:307:1:-;11416:8;11407:17;;:5;:17;;;11399:55;;;;;;;;;;;;:::i;:::-;;;;;;;;;11502:8;11464:18;:25;11483:5;11464:25;;;;;;;;;;;;;;;:35;11490:8;11464:35;;;;;;;;;;;;;;;;:46;;;;;;;;;;;;;;;;;;11547:8;11525:41;;11540:5;11525:41;;;11557:8;11525:41;;;;;;:::i;:::-;;;;;;;;11266:307;;;:::o;6426:305::-;6576:28;6586:4;6592:2;6596:7;6576:9;:28::i;:::-;6622:47;6645:4;6651:2;6655:7;6664:4;6622:22;:47::i;:::-;6614:110;;;;;;;;;;;;:::i;:::-;;;;;;;;;6426:305;;;;:::o;482:608:5:-;555:13;580:23;595:7;580:14;:23::i;:::-;614;640:10;:19;651:7;640:19;;;;;;;;;;;614:45;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;669:18;690:10;:8;:10::i;:::-;669:31;;795:1;779:4;773:18;:23;769:70;;819:9;812:16;;;;;;769:70;967:1;947:9;941:23;:27;937:106;;;1015:4;1021:9;998:33;;;;;;;;;:::i;:::-;;;;;;;;;;;;;984:48;;;;;;937:106;1060:23;1075:7;1060:14;:23::i;:::-;1053:30;;;;482:608;;;;:::o;945:123:10:-;1050:1;1032:7;:14;;;:19;;;;;;;;;;;945:123;:::o;827:112::-;892:7;918;:14;;;911:21;;827:112;;;:::o;8868:427:1:-;8961:1;8947:16;;:2;:16;;;8939:61;;;;;;;;;;;;:::i;:::-;;;;;;;;;9019:16;9027:7;9019;:16::i;:::-;9018:17;9010:58;;;;;;;;;;;;:::i;:::-;;;;;;;;;9079:45;9108:1;9112:2;9116:7;9079:20;:45::i;:::-;9152:1;9135:9;:13;9145:2;9135:13;;;;;;;;;;;;;;;;:18;;;;;;;:::i;:::-;;;;;;;;9182:2;9163:7;:16;9171:7;9163:16;;;;;;;;;;;;:21;;;;;;;;;;;;;;;;;;9225:7;9221:2;9200:33;;9217:1;9200:33;;;;;;;;;;;;9244:44;9272:1;9276:2;9280:7;9244:19;:44::i;:::-;8868:427;;:::o;1237:214:5:-;1336:16;1344:7;1336;:16::i;:::-;1328:75;;;;;;;;;;;;:::i;:::-;;;;;;;;;1435:9;1413:10;:19;1424:7;1413:19;;;;;;;;;;;:31;;;;;;:::i;:::-;;1237:214;;:::o;1570:300:1:-;1672:4;1722:25;1707:40;;;:11;:40;;;;:104;;;;1778:33;1763:48;;;:11;:48;;;;1707:104;:156;;;;1827:36;1851:11;1827:23;:36::i;:::-;1707:156;1688:175;;1570:300;;;:::o;7034:125::-;7099:4;7150:1;7122:30;;:7;:16;7130:7;7122:16;;;;;;;;;;;;;;;;;;;;;:30;;;;7115:37;;7034:125;;;:::o;695:215:15:-;858:45;885:4;891:2;895:7;858:26;:45::i;:::-;695:215;;;:::o;14223:121:1:-;;;;:::o;12342:831::-;12491:4;12511:15;:2;:13;;;:15::i;:::-;12507:660;;;12562:2;12546:36;;;12583:12;:10;:12::i;:::-;12597:4;12603:7;12612:4;12546:71;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;12542:573;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12801:1;12784:6;:13;:18;12780:321;;12826:60;;;;;;;;;;:::i;:::-;;;;;;;;12780:321;13053:6;13047:13;13038:6;13034:2;13030:15;13023:38;12542:573;12677:41;;;12667:51;;;:6;:51;;;;12660:58;;;;;12507:660;13152:4;13145:11;;12342:831;;;;;;;:::o;3318:92::-;3369:13;3394:9;;;;;;;;;;;;;;3318:92;:::o;2800:276::-;2873:13;2898:23;2913:7;2898:14;:23::i;:::-;2932:21;2956:10;:8;:10::i;:::-;2932:34;;3007:1;2989:7;2983:21;:25;:86;;;;;;;;;;;;;;;;;3035:7;3044:18;:7;:16;:18::i;:::-;3018:45;;;;;;;;;:::i;:::-;;;;;;;;;;;;;2983:86;2976:93;;;2800:276;;;:::o;829:155:12:-;914:4;952:25;937:40;;;:11;:40;;;;930:47;;829:155;;;:::o;2624:572:4:-;2763:45;2790:4;2796:2;2800:7;2763:26;:45::i;:::-;2839:1;2823:18;;:4;:18;;;2819:183;;2857:40;2889:7;2857:31;:40::i;:::-;2819:183;;;2926:2;2918:10;;:4;:10;;;2914:88;;2944:47;2977:4;2983:7;2944:32;:47::i;:::-;2914:88;2819:183;3029:1;3015:16;;:2;:16;;;3011:179;;3047:45;3084:7;3047:36;:45::i;:::-;3011:179;;;3119:4;3113:10;;:2;:10;;;3109:81;;3139:40;3167:2;3171:7;3139:27;:40::i;:::-;3109:81;3011:179;2624:572;;;:::o;1175:320:8:-;1235:4;1487:1;1465:7;:19;;;:23;1458:30;;1175:320;;;:::o;392:703:11:-;448:13;674:1;665:5;:10;661:51;;691:10;;;;;;;;;;;;;;;;;;;;;661:51;721:12;736:5;721:20;;751:14;775:75;790:1;782:4;:9;775:75;;807:8;;;;;:::i;:::-;;;;837:2;829:10;;;;;:::i;:::-;;;775:75;;;859:19;891:6;881:17;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;859:39;;908:150;924:1;915:5;:10;908:150;;951:1;941:11;;;;;:::i;:::-;;;1017:2;1009:5;:10;;;;:::i;:::-;996:2;:24;;;;:::i;:::-;983:39;;966:6;973;966:14;;;;;;;;:::i;:::-;;;;;:56;;;;;;;;;;;1045:2;1036:11;;;;;:::i;:::-;;;908:150;;;1081:6;1067:21;;;;;392:703;;;;:::o;13729:122:1:-;;;;:::o;3902:161:4:-;4005:10;:17;;;;3978:15;:24;3994:7;3978:24;;;;;;;;;;;:44;;;;4032:10;4048:7;4032:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3902:161;:::o;4680:970::-;4942:22;4992:1;4967:22;4984:4;4967:16;:22::i;:::-;:26;;;;:::i;:::-;4942:51;;5003:18;5024:17;:26;5042:7;5024:26;;;;;;;;;;;;5003:47;;5168:14;5154:10;:28;5150:323;;5198:19;5220:12;:18;5233:4;5220:18;;;;;;;;;;;;;;;:34;5239:14;5220:34;;;;;;;;;;;;5198:56;;5302:11;5269:12;:18;5282:4;5269:18;;;;;;;;;;;;;;;:30;5288:10;5269:30;;;;;;;;;;;:44;;;;5418:10;5385:17;:30;5403:11;5385:30;;;;;;;;;;;:43;;;;5184:289;5150:323;5566:17;:26;5584:7;5566:26;;;;;;;;;;;5559:33;;;5609:12;:18;5622:4;5609:18;;;;;;;;;;;;;;;:34;5628:14;5609:34;;;;;;;;;;;5602:41;;;4761:889;;4680:970;;:::o;5938:1061::-;6187:22;6232:1;6212:10;:17;;;;:21;;;;:::i;:::-;6187:46;;6243:18;6264:15;:24;6280:7;6264:24;;;;;;;;;;;;6243:45;;6610:19;6632:10;6643:14;6632:26;;;;;;;;:::i;:::-;;;;;;;;;;6610:48;;6694:11;6669:10;6680;6669:22;;;;;;;;:::i;:::-;;;;;;;;;:36;;;;6804:10;6773:15;:28;6789:11;6773:28;;;;;;;;;;;:41;;;;6942:15;:24;6958:7;6942:24;;;;;;;;;;;6935:31;;;6976:10;:16;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;6009:990;;;5938:1061;:::o;3490:217::-;3574:14;3591:20;3608:2;3591:16;:20::i;:::-;3574:37;;3648:7;3621:12;:16;3634:2;3621:16;;;;;;;;;;;;;;;:24;3638:6;3621:24;;;;;;;;;;;:34;;;;3694:6;3665:17;:26;3683:7;3665:26;;;;;;;;;;;:35;;;;3564:143;3490:217;;:::o;7:75:17:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:149;370:7;410:66;403:5;399:78;388:89;;334:149;;;:::o;489:120::-;561:23;578:5;561:23;:::i;:::-;554:5;551:34;541:62;;599:1;596;589:12;541:62;489:120;:::o;615:137::-;660:5;698:6;685:20;676:29;;714:32;740:5;714:32;:::i;:::-;615:137;;;;:::o;758:327::-;816:6;865:2;853:9;844:7;840:23;836:32;833:119;;;871:79;;:::i;:::-;833:119;991:1;1016:52;1060:7;1051:6;1040:9;1036:22;1016:52;:::i;:::-;1006:62;;962:116;758:327;;;;:::o;1091:90::-;1125:7;1168:5;1161:13;1154:21;1143:32;;1091:90;;;:::o;1187:109::-;1268:21;1283:5;1268:21;:::i;:::-;1263:3;1256:34;1187:109;;:::o;1302:210::-;1389:4;1427:2;1416:9;1412:18;1404:26;;1440:65;1502:1;1491:9;1487:17;1478:6;1440:65;:::i;:::-;1302:210;;;;:::o;1518:99::-;1570:6;1604:5;1598:12;1588:22;;1518:99;;;:::o;1623:169::-;1707:11;1741:6;1736:3;1729:19;1781:4;1776:3;1772:14;1757:29;;1623:169;;;;:::o;1798:307::-;1866:1;1876:113;1890:6;1887:1;1884:13;1876:113;;;1975:1;1970:3;1966:11;1960:18;1956:1;1951:3;1947:11;1940:39;1912:2;1909:1;1905:10;1900:15;;1876:113;;;2007:6;2004:1;2001:13;1998:101;;;2087:1;2078:6;2073:3;2069:16;2062:27;1998:101;1847:258;1798:307;;;:::o;2111:102::-;2152:6;2203:2;2199:7;2194:2;2187:5;2183:14;2179:28;2169:38;;2111:102;;;:::o;2219:364::-;2307:3;2335:39;2368:5;2335:39;:::i;:::-;2390:71;2454:6;2449:3;2390:71;:::i;:::-;2383:78;;2470:52;2515:6;2510:3;2503:4;2496:5;2492:16;2470:52;:::i;:::-;2547:29;2569:6;2547:29;:::i;:::-;2542:3;2538:39;2531:46;;2311:272;2219:364;;;;:::o;2589:313::-;2702:4;2740:2;2729:9;2725:18;2717:26;;2789:9;2783:4;2779:20;2775:1;2764:9;2760:17;2753:47;2817:78;2890:4;2881:6;2817:78;:::i;:::-;2809:86;;2589:313;;;;:::o;2908:77::-;2945:7;2974:5;2963:16;;2908:77;;;:::o;2991:122::-;3064:24;3082:5;3064:24;:::i;:::-;3057:5;3054:35;3044:63;;3103:1;3100;3093:12;3044:63;2991:122;:::o;3119:139::-;3165:5;3203:6;3190:20;3181:29;;3219:33;3246:5;3219:33;:::i;:::-;3119:139;;;;:::o;3264:329::-;3323:6;3372:2;3360:9;3351:7;3347:23;3343:32;3340:119;;;3378:79;;:::i;:::-;3340:119;3498:1;3523:53;3568:7;3559:6;3548:9;3544:22;3523:53;:::i;:::-;3513:63;;3469:117;3264:329;;;;:::o;3599:126::-;3636:7;3676:42;3669:5;3665:54;3654:65;;3599:126;;;:::o;3731:96::-;3768:7;3797:24;3815:5;3797:24;:::i;:::-;3786:35;;3731:96;;;:::o;3833:118::-;3920:24;3938:5;3920:24;:::i;:::-;3915:3;3908:37;3833:118;;:::o;3957:222::-;4050:4;4088:2;4077:9;4073:18;4065:26;;4101:71;4169:1;4158:9;4154:17;4145:6;4101:71;:::i;:::-;3957:222;;;;:::o;4185:122::-;4258:24;4276:5;4258:24;:::i;:::-;4251:5;4248:35;4238:63;;4297:1;4294;4287:12;4238:63;4185:122;:::o;4313:139::-;4359:5;4397:6;4384:20;4375:29;;4413:33;4440:5;4413:33;:::i;:::-;4313:139;;;;:::o;4458:474::-;4526:6;4534;4583:2;4571:9;4562:7;4558:23;4554:32;4551:119;;;4589:79;;:::i;:::-;4551:119;4709:1;4734:53;4779:7;4770:6;4759:9;4755:22;4734:53;:::i;:::-;4724:63;;4680:117;4836:2;4862:53;4907:7;4898:6;4887:9;4883:22;4862:53;:::i;:::-;4852:63;;4807:118;4458:474;;;;;:::o;4938:118::-;5025:24;5043:5;5025:24;:::i;:::-;5020:3;5013:37;4938:118;;:::o;5062:222::-;5155:4;5193:2;5182:9;5178:18;5170:26;;5206:71;5274:1;5263:9;5259:17;5250:6;5206:71;:::i;:::-;5062:222;;;;:::o;5290:619::-;5367:6;5375;5383;5432:2;5420:9;5411:7;5407:23;5403:32;5400:119;;;5438:79;;:::i;:::-;5400:119;5558:1;5583:53;5628:7;5619:6;5608:9;5604:22;5583:53;:::i;:::-;5573:63;;5529:117;5685:2;5711:53;5756:7;5747:6;5736:9;5732:22;5711:53;:::i;:::-;5701:63;;5656:118;5813:2;5839:53;5884:7;5875:6;5864:9;5860:22;5839:53;:::i;:::-;5829:63;;5784:118;5290:619;;;;;:::o;5915:329::-;5974:6;6023:2;6011:9;6002:7;5998:23;5994:32;5991:119;;;6029:79;;:::i;:::-;5991:119;6149:1;6174:53;6219:7;6210:6;6199:9;6195:22;6174:53;:::i;:::-;6164:63;;6120:117;5915:329;;;;:::o;6250:116::-;6320:21;6335:5;6320:21;:::i;:::-;6313:5;6310:32;6300:60;;6356:1;6353;6346:12;6300:60;6250:116;:::o;6372:133::-;6415:5;6453:6;6440:20;6431:29;;6469:30;6493:5;6469:30;:::i;:::-;6372:133;;;;:::o;6511:468::-;6576:6;6584;6633:2;6621:9;6612:7;6608:23;6604:32;6601:119;;;6639:79;;:::i;:::-;6601:119;6759:1;6784:53;6829:7;6820:6;6809:9;6805:22;6784:53;:::i;:::-;6774:63;;6730:117;6886:2;6912:50;6954:7;6945:6;6934:9;6930:22;6912:50;:::i;:::-;6902:60;;6857:115;6511:468;;;;;:::o;6985:117::-;7094:1;7091;7084:12;7108:117;7217:1;7214;7207:12;7231:180;7279:77;7276:1;7269:88;7376:4;7373:1;7366:15;7400:4;7397:1;7390:15;7417:281;7500:27;7522:4;7500:27;:::i;:::-;7492:6;7488:40;7630:6;7618:10;7615:22;7594:18;7582:10;7579:34;7576:62;7573:88;;;7641:18;;:::i;:::-;7573:88;7681:10;7677:2;7670:22;7460:238;7417:281;;:::o;7704:129::-;7738:6;7765:20;;:::i;:::-;7755:30;;7794:33;7822:4;7814:6;7794:33;:::i;:::-;7704:129;;;:::o;7839:307::-;7900:4;7990:18;7982:6;7979:30;7976:56;;;8012:18;;:::i;:::-;7976:56;8050:29;8072:6;8050:29;:::i;:::-;8042:37;;8134:4;8128;8124:15;8116:23;;7839:307;;;:::o;8152:154::-;8236:6;8231:3;8226;8213:30;8298:1;8289:6;8284:3;8280:16;8273:27;8152:154;;;:::o;8312:410::-;8389:5;8414:65;8430:48;8471:6;8430:48;:::i;:::-;8414:65;:::i;:::-;8405:74;;8502:6;8495:5;8488:21;8540:4;8533:5;8529:16;8578:3;8569:6;8564:3;8560:16;8557:25;8554:112;;;8585:79;;:::i;:::-;8554:112;8675:41;8709:6;8704:3;8699;8675:41;:::i;:::-;8395:327;8312:410;;;;;:::o;8741:338::-;8796:5;8845:3;8838:4;8830:6;8826:17;8822:27;8812:122;;8853:79;;:::i;:::-;8812:122;8970:6;8957:20;8995:78;9069:3;9061:6;9054:4;9046:6;9042:17;8995:78;:::i;:::-;8986:87;;8802:277;8741:338;;;;:::o;9085:943::-;9180:6;9188;9196;9204;9253:3;9241:9;9232:7;9228:23;9224:33;9221:120;;;9260:79;;:::i;:::-;9221:120;9380:1;9405:53;9450:7;9441:6;9430:9;9426:22;9405:53;:::i;:::-;9395:63;;9351:117;9507:2;9533:53;9578:7;9569:6;9558:9;9554:22;9533:53;:::i;:::-;9523:63;;9478:118;9635:2;9661:53;9706:7;9697:6;9686:9;9682:22;9661:53;:::i;:::-;9651:63;;9606:118;9791:2;9780:9;9776:18;9763:32;9822:18;9814:6;9811:30;9808:117;;;9844:79;;:::i;:::-;9808:117;9949:62;10003:7;9994:6;9983:9;9979:22;9949:62;:::i;:::-;9939:72;;9734:287;9085:943;;;;;;;:::o;10034:474::-;10102:6;10110;10159:2;10147:9;10138:7;10134:23;10130:32;10127:119;;;10165:79;;:::i;:::-;10127:119;10285:1;10310:53;10355:7;10346:6;10335:9;10331:22;10310:53;:::i;:::-;10300:63;;10256:117;10412:2;10438:53;10483:7;10474:6;10463:9;10459:22;10438:53;:::i;:::-;10428:63;;10383:118;10034:474;;;;;:::o;10514:308::-;10576:4;10666:18;10658:6;10655:30;10652:56;;;10688:18;;:::i;:::-;10652:56;10726:29;10748:6;10726:29;:::i;:::-;10718:37;;10810:4;10804;10800:15;10792:23;;10514:308;;;:::o;10828:412::-;10906:5;10931:66;10947:49;10989:6;10947:49;:::i;:::-;10931:66;:::i;:::-;10922:75;;11020:6;11013:5;11006:21;11058:4;11051:5;11047:16;11096:3;11087:6;11082:3;11078:16;11075:25;11072:112;;;11103:79;;:::i;:::-;11072:112;11193:41;11227:6;11222:3;11217;11193:41;:::i;:::-;10912:328;10828:412;;;;;:::o;11260:340::-;11316:5;11365:3;11358:4;11350:6;11346:17;11342:27;11332:122;;11373:79;;:::i;:::-;11332:122;11490:6;11477:20;11515:79;11590:3;11582:6;11575:4;11567:6;11563:17;11515:79;:::i;:::-;11506:88;;11322:278;11260:340;;;;:::o;11606:654::-;11684:6;11692;11741:2;11729:9;11720:7;11716:23;11712:32;11709:119;;;11747:79;;:::i;:::-;11709:119;11867:1;11892:53;11937:7;11928:6;11917:9;11913:22;11892:53;:::i;:::-;11882:63;;11838:117;12022:2;12011:9;12007:18;11994:32;12053:18;12045:6;12042:30;12039:117;;;12075:79;;:::i;:::-;12039:117;12180:63;12235:7;12226:6;12215:9;12211:22;12180:63;:::i;:::-;12170:73;;11965:288;11606:654;;;;;:::o;12266:180::-;12314:77;12311:1;12304:88;12411:4;12408:1;12401:15;12435:4;12432:1;12425:15;12452:320;12496:6;12533:1;12527:4;12523:12;12513:22;;12580:1;12574:4;12570:12;12601:18;12591:81;;12657:4;12649:6;12645:17;12635:27;;12591:81;12719:2;12711:6;12708:14;12688:18;12685:38;12682:84;;12738:18;;:::i;:::-;12682:84;12503:269;12452:320;;;:::o;12778:220::-;12918:34;12914:1;12906:6;12902:14;12895:58;12987:3;12982:2;12974:6;12970:15;12963:28;12778:220;:::o;13004:366::-;13146:3;13167:67;13231:2;13226:3;13167:67;:::i;:::-;13160:74;;13243:93;13332:3;13243:93;:::i;:::-;13361:2;13356:3;13352:12;13345:19;;13004:366;;;:::o;13376:419::-;13542:4;13580:2;13569:9;13565:18;13557:26;;13629:9;13623:4;13619:20;13615:1;13604:9;13600:17;13593:47;13657:131;13783:4;13657:131;:::i;:::-;13649:139;;13376:419;;;:::o;13801:249::-;13941:34;13937:1;13929:6;13925:14;13918:58;14010:32;14005:2;13997:6;13993:15;13986:57;13801:249;:::o;14056:366::-;14198:3;14219:67;14283:2;14278:3;14219:67;:::i;:::-;14212:74;;14295:93;14384:3;14295:93;:::i;:::-;14413:2;14408:3;14404:12;14397:19;;14056:366;;;:::o;14428:419::-;14594:4;14632:2;14621:9;14617:18;14609:26;;14681:9;14675:4;14671:20;14667:1;14656:9;14652:17;14645:47;14709:131;14835:4;14709:131;:::i;:::-;14701:139;;14428:419;;;:::o;14853:233::-;14993:34;14989:1;14981:6;14977:14;14970:58;15062:16;15057:2;15049:6;15045:15;15038:41;14853:233;:::o;15092:366::-;15234:3;15255:67;15319:2;15314:3;15255:67;:::i;:::-;15248:74;;15331:93;15420:3;15331:93;:::i;:::-;15449:2;15444:3;15440:12;15433:19;;15092:366;;;:::o;15464:419::-;15630:4;15668:2;15657:9;15653:18;15645:26;;15717:9;15711:4;15707:20;15703:1;15692:9;15688:17;15681:47;15745:131;15871:4;15745:131;:::i;:::-;15737:139;;15464:419;;;:::o;15889:230::-;16029:34;16025:1;16017:6;16013:14;16006:58;16098:13;16093:2;16085:6;16081:15;16074:38;15889:230;:::o;16125:366::-;16267:3;16288:67;16352:2;16347:3;16288:67;:::i;:::-;16281:74;;16364:93;16453:3;16364:93;:::i;:::-;16482:2;16477:3;16473:12;16466:19;;16125:366;;;:::o;16497:419::-;16663:4;16701:2;16690:9;16686:18;16678:26;;16750:9;16744:4;16740:20;16736:1;16725:9;16721:17;16714:47;16778:131;16904:4;16778:131;:::i;:::-;16770:139;;16497:419;;;:::o;16922:231::-;17062:34;17058:1;17050:6;17046:14;17039:58;17131:14;17126:2;17118:6;17114:15;17107:39;16922:231;:::o;17159:366::-;17301:3;17322:67;17386:2;17381:3;17322:67;:::i;:::-;17315:74;;17398:93;17487:3;17398:93;:::i;:::-;17516:2;17511:3;17507:12;17500:19;;17159:366;;;:::o;17531:419::-;17697:4;17735:2;17724:9;17720:18;17712:26;;17784:9;17778:4;17774:20;17770:1;17759:9;17755:17;17748:47;17812:131;17938:4;17812:131;:::i;:::-;17804:139;;17531:419;;;:::o;17956:180::-;18004:77;18001:1;17994:88;18101:4;18098:1;18091:15;18125:4;18122:1;18115:15;18142:174;18282:26;18278:1;18270:6;18266:14;18259:50;18142:174;:::o;18322:366::-;18464:3;18485:67;18549:2;18544:3;18485:67;:::i;:::-;18478:74;;18561:93;18650:3;18561:93;:::i;:::-;18679:2;18674:3;18670:12;18663:19;;18322:366;;;:::o;18694:419::-;18860:4;18898:2;18887:9;18883:18;18875:26;;18947:9;18941:4;18937:20;18933:1;18922:9;18918:17;18911:47;18975:131;19101:4;18975:131;:::i;:::-;18967:139;;18694:419;;;:::o;19119:228::-;19259:34;19255:1;19247:6;19243:14;19236:58;19328:11;19323:2;19315:6;19311:15;19304:36;19119:228;:::o;19353:366::-;19495:3;19516:67;19580:2;19575:3;19516:67;:::i;:::-;19509:74;;19592:93;19681:3;19592:93;:::i;:::-;19710:2;19705:3;19701:12;19694:19;;19353:366;;;:::o;19725:419::-;19891:4;19929:2;19918:9;19914:18;19906:26;;19978:9;19972:4;19968:20;19964:1;19953:9;19949:17;19942:47;20006:131;20132:4;20006:131;:::i;:::-;19998:139;;19725:419;;;:::o;20150:225::-;20290:34;20286:1;20278:6;20274:14;20267:58;20359:8;20354:2;20346:6;20342:15;20335:33;20150:225;:::o;20381:366::-;20523:3;20544:67;20608:2;20603:3;20544:67;:::i;:::-;20537:74;;20620:93;20709:3;20620:93;:::i;:::-;20738:2;20733:3;20729:12;20722:19;;20381:366;;;:::o;20753:419::-;20919:4;20957:2;20946:9;20942:18;20934:26;;21006:9;21000:4;20996:20;20992:1;20981:9;20977:17;20970:47;21034:131;21160:4;21034:131;:::i;:::-;21026:139;;20753:419;;;:::o;21178:224::-;21318:34;21314:1;21306:6;21302:14;21295:58;21387:7;21382:2;21374:6;21370:15;21363:32;21178:224;:::o;21408:366::-;21550:3;21571:67;21635:2;21630:3;21571:67;:::i;:::-;21564:74;;21647:93;21736:3;21647:93;:::i;:::-;21765:2;21760:3;21756:12;21749:19;;21408:366;;;:::o;21780:419::-;21946:4;21984:2;21973:9;21969:18;21961:26;;22033:9;22027:4;22023:20;22019:1;22008:9;22004:17;21997:47;22061:131;22187:4;22061:131;:::i;:::-;22053:139;;21780:419;;;:::o;22205:223::-;22345:34;22341:1;22333:6;22329:14;22322:58;22414:6;22409:2;22401:6;22397:15;22390:31;22205:223;:::o;22434:366::-;22576:3;22597:67;22661:2;22656:3;22597:67;:::i;:::-;22590:74;;22673:93;22762:3;22673:93;:::i;:::-;22791:2;22786:3;22782:12;22775:19;;22434:366;;;:::o;22806:419::-;22972:4;23010:2;22999:9;22995:18;22987:26;;23059:9;23053:4;23049:20;23045:1;23034:9;23030:17;23023:47;23087:131;23213:4;23087:131;:::i;:::-;23079:139;;22806:419;;;:::o;23231:180::-;23279:77;23276:1;23269:88;23376:4;23373:1;23366:15;23400:4;23397:1;23390:15;23417:191;23457:4;23477:20;23495:1;23477:20;:::i;:::-;23472:25;;23511:20;23529:1;23511:20;:::i;:::-;23506:25;;23550:1;23547;23544:8;23541:34;;;23555:18;;:::i;:::-;23541:34;23600:1;23597;23593:9;23585:17;;23417:191;;;;:::o;23614:305::-;23654:3;23673:20;23691:1;23673:20;:::i;:::-;23668:25;;23707:20;23725:1;23707:20;:::i;:::-;23702:25;;23861:1;23793:66;23789:74;23786:1;23783:81;23780:107;;;23867:18;;:::i;:::-;23780:107;23911:1;23908;23904:9;23897:16;;23614:305;;;;:::o;23925:182::-;24065:34;24061:1;24053:6;24049:14;24042:58;23925:182;:::o;24113:366::-;24255:3;24276:67;24340:2;24335:3;24276:67;:::i;:::-;24269:74;;24352:93;24441:3;24352:93;:::i;:::-;24470:2;24465:3;24461:12;24454:19;;24113:366;;;:::o;24485:419::-;24651:4;24689:2;24678:9;24674:18;24666:26;;24738:9;24732:4;24728:20;24724:1;24713:9;24709:17;24702:47;24766:131;24892:4;24766:131;:::i;:::-;24758:139;;24485:419;;;:::o;24910:175::-;25050:27;25046:1;25038:6;25034:14;25027:51;24910:175;:::o;25091:366::-;25233:3;25254:67;25318:2;25313:3;25254:67;:::i;:::-;25247:74;;25330:93;25419:3;25330:93;:::i;:::-;25448:2;25443:3;25439:12;25432:19;;25091:366;;;:::o;25463:419::-;25629:4;25667:2;25656:9;25652:18;25644:26;;25716:9;25710:4;25706:20;25702:1;25691:9;25687:17;25680:47;25744:131;25870:4;25744:131;:::i;:::-;25736:139;;25463:419;;;:::o;25888:237::-;26028:34;26024:1;26016:6;26012:14;26005:58;26097:20;26092:2;26084:6;26080:15;26073:45;25888:237;:::o;26131:366::-;26273:3;26294:67;26358:2;26353:3;26294:67;:::i;:::-;26287:74;;26370:93;26459:3;26370:93;:::i;:::-;26488:2;26483:3;26479:12;26472:19;;26131:366;;;:::o;26503:419::-;26669:4;26707:2;26696:9;26692:18;26684:26;;26756:9;26750:4;26746:20;26742:1;26731:9;26727:17;26720:47;26784:131;26910:4;26784:131;:::i;:::-;26776:139;;26503:419;;;:::o;26928:148::-;27030:11;27067:3;27052:18;;26928:148;;;;:::o;27082:377::-;27188:3;27216:39;27249:5;27216:39;:::i;:::-;27271:89;27353:6;27348:3;27271:89;:::i;:::-;27264:96;;27369:52;27414:6;27409:3;27402:4;27395:5;27391:16;27369:52;:::i;:::-;27446:6;27441:3;27437:16;27430:23;;27192:267;27082:377;;;;:::o;27465:435::-;27645:3;27667:95;27758:3;27749:6;27667:95;:::i;:::-;27660:102;;27779:95;27870:3;27861:6;27779:95;:::i;:::-;27772:102;;27891:3;27884:10;;27465:435;;;;;:::o;27906:182::-;28046:34;28042:1;28034:6;28030:14;28023:58;27906:182;:::o;28094:366::-;28236:3;28257:67;28321:2;28316:3;28257:67;:::i;:::-;28250:74;;28333:93;28422:3;28333:93;:::i;:::-;28451:2;28446:3;28442:12;28435:19;;28094:366;;;:::o;28466:419::-;28632:4;28670:2;28659:9;28655:18;28647:26;;28719:9;28713:4;28709:20;28705:1;28694:9;28690:17;28683:47;28747:131;28873:4;28747:131;:::i;:::-;28739:139;;28466:419;;;:::o;28891:178::-;29031:30;29027:1;29019:6;29015:14;29008:54;28891:178;:::o;29075:366::-;29217:3;29238:67;29302:2;29297:3;29238:67;:::i;:::-;29231:74;;29314:93;29403:3;29314:93;:::i;:::-;29432:2;29427:3;29423:12;29416:19;;29075:366;;;:::o;29447:419::-;29613:4;29651:2;29640:9;29636:18;29628:26;;29700:9;29694:4;29690:20;29686:1;29675:9;29671:17;29664:47;29728:131;29854:4;29728:131;:::i;:::-;29720:139;;29447:419;;;:::o;29872:233::-;30012:34;30008:1;30000:6;29996:14;29989:58;30081:16;30076:2;30068:6;30064:15;30057:41;29872:233;:::o;30111:366::-;30253:3;30274:67;30338:2;30333:3;30274:67;:::i;:::-;30267:74;;30350:93;30439:3;30350:93;:::i;:::-;30468:2;30463:3;30459:12;30452:19;;30111:366;;;:::o;30483:419::-;30649:4;30687:2;30676:9;30672:18;30664:26;;30736:9;30730:4;30726:20;30722:1;30711:9;30707:17;30700:47;30764:131;30890:4;30764:131;:::i;:::-;30756:139;;30483:419;;;:::o;30908:141::-;30957:4;30980:3;30972:11;;31003:3;31000:1;30993:14;31037:4;31034:1;31024:18;31016:26;;30908:141;;;:::o;31055:93::-;31092:6;31139:2;31134;31127:5;31123:14;31119:23;31109:33;;31055:93;;;:::o;31154:107::-;31198:8;31248:5;31242:4;31238:16;31217:37;;31154:107;;;;:::o;31267:393::-;31336:6;31386:1;31374:10;31370:18;31409:97;31439:66;31428:9;31409:97;:::i;:::-;31527:39;31557:8;31546:9;31527:39;:::i;:::-;31515:51;;31599:4;31595:9;31588:5;31584:21;31575:30;;31648:4;31638:8;31634:19;31627:5;31624:30;31614:40;;31343:317;;31267:393;;;;;:::o;31666:60::-;31694:3;31715:5;31708:12;;31666:60;;;:::o;31732:142::-;31782:9;31815:53;31833:34;31842:24;31860:5;31842:24;:::i;:::-;31833:34;:::i;:::-;31815:53;:::i;:::-;31802:66;;31732:142;;;:::o;31880:75::-;31923:3;31944:5;31937:12;;31880:75;;;:::o;31961:269::-;32071:39;32102:7;32071:39;:::i;:::-;32132:91;32181:41;32205:16;32181:41;:::i;:::-;32173:6;32166:4;32160:11;32132:91;:::i;:::-;32126:4;32119:105;32037:193;31961:269;;;:::o;32236:73::-;32281:3;32236:73;:::o;32315:189::-;32392:32;;:::i;:::-;32433:65;32491:6;32483;32477:4;32433:65;:::i;:::-;32368:136;32315:189;;:::o;32510:186::-;32570:120;32587:3;32580:5;32577:14;32570:120;;;32641:39;32678:1;32671:5;32641:39;:::i;:::-;32614:1;32607:5;32603:13;32594:22;;32570:120;;;32510:186;;:::o;32702:543::-;32803:2;32798:3;32795:11;32792:446;;;32837:38;32869:5;32837:38;:::i;:::-;32921:29;32939:10;32921:29;:::i;:::-;32911:8;32907:44;33104:2;33092:10;33089:18;33086:49;;;33125:8;33110:23;;33086:49;33148:80;33204:22;33222:3;33204:22;:::i;:::-;33194:8;33190:37;33177:11;33148:80;:::i;:::-;32807:431;;32792:446;32702:543;;;:::o;33251:117::-;33305:8;33355:5;33349:4;33345:16;33324:37;;33251:117;;;;:::o;33374:169::-;33418:6;33451:51;33499:1;33495:6;33487:5;33484:1;33480:13;33451:51;:::i;:::-;33447:56;33532:4;33526;33522:15;33512:25;;33425:118;33374:169;;;;:::o;33548:295::-;33624:4;33770:29;33795:3;33789:4;33770:29;:::i;:::-;33762:37;;33832:3;33829:1;33825:11;33819:4;33816:21;33808:29;;33548:295;;;;:::o;33848:1395::-;33965:37;33998:3;33965:37;:::i;:::-;34067:18;34059:6;34056:30;34053:56;;;34089:18;;:::i;:::-;34053:56;34133:38;34165:4;34159:11;34133:38;:::i;:::-;34218:67;34278:6;34270;34264:4;34218:67;:::i;:::-;34312:1;34336:4;34323:17;;34368:2;34360:6;34357:14;34385:1;34380:618;;;;35042:1;35059:6;35056:77;;;35108:9;35103:3;35099:19;35093:26;35084:35;;35056:77;35159:67;35219:6;35212:5;35159:67;:::i;:::-;35153:4;35146:81;35015:222;34350:887;;34380:618;34432:4;34428:9;34420:6;34416:22;34466:37;34498:4;34466:37;:::i;:::-;34525:1;34539:208;34553:7;34550:1;34547:14;34539:208;;;34632:9;34627:3;34623:19;34617:26;34609:6;34602:42;34683:1;34675:6;34671:14;34661:24;;34730:2;34719:9;34715:18;34702:31;;34576:4;34573:1;34569:12;34564:17;;34539:208;;;34775:6;34766:7;34763:19;34760:179;;;34833:9;34828:3;34824:19;34818:26;34876:48;34918:4;34910:6;34906:17;34895:9;34876:48;:::i;:::-;34868:6;34861:64;34783:156;34760:179;34985:1;34981;34973:6;34969:14;34965:22;34959:4;34952:36;34387:611;;;34350:887;;33940:1303;;;33848:1395;;:::o;35249:98::-;35300:6;35334:5;35328:12;35318:22;;35249:98;;;:::o;35353:168::-;35436:11;35470:6;35465:3;35458:19;35510:4;35505:3;35501:14;35486:29;;35353:168;;;;:::o;35527:360::-;35613:3;35641:38;35673:5;35641:38;:::i;:::-;35695:70;35758:6;35753:3;35695:70;:::i;:::-;35688:77;;35774:52;35819:6;35814:3;35807:4;35800:5;35796:16;35774:52;:::i;:::-;35851:29;35873:6;35851:29;:::i;:::-;35846:3;35842:39;35835:46;;35617:270;35527:360;;;;:::o;35893:640::-;36088:4;36126:3;36115:9;36111:19;36103:27;;36140:71;36208:1;36197:9;36193:17;36184:6;36140:71;:::i;:::-;36221:72;36289:2;36278:9;36274:18;36265:6;36221:72;:::i;:::-;36303;36371:2;36360:9;36356:18;36347:6;36303:72;:::i;:::-;36422:9;36416:4;36412:20;36407:2;36396:9;36392:18;36385:48;36450:76;36521:4;36512:6;36450:76;:::i;:::-;36442:84;;35893:640;;;;;;;:::o;36539:141::-;36595:5;36626:6;36620:13;36611:22;;36642:32;36668:5;36642:32;:::i;:::-;36539:141;;;;:::o;36686:349::-;36755:6;36804:2;36792:9;36783:7;36779:23;36775:32;36772:119;;;36810:79;;:::i;:::-;36772:119;36930:1;36955:63;37010:7;37001:6;36990:9;36986:22;36955:63;:::i;:::-;36945:73;;36901:127;36686:349;;;;:::o;37041:233::-;37080:3;37103:24;37121:5;37103:24;:::i;:::-;37094:33;;37149:66;37142:5;37139:77;37136:103;;37219:18;;:::i;:::-;37136:103;37266:1;37259:5;37255:13;37248:20;;37041:233;;;:::o;37280:180::-;37328:77;37325:1;37318:88;37425:4;37422:1;37415:15;37449:4;37446:1;37439:15;37466:185;37506:1;37523:20;37541:1;37523:20;:::i;:::-;37518:25;;37557:20;37575:1;37557:20;:::i;:::-;37552:25;;37596:1;37586:35;;37601:18;;:::i;:::-;37586:35;37643:1;37640;37636:9;37631:14;;37466:185;;;;:::o;37657:176::-;37689:1;37706:20;37724:1;37706:20;:::i;:::-;37701:25;;37740:20;37758:1;37740:20;:::i;:::-;37735:25;;37779:1;37769:35;;37784:18;;:::i;:::-;37769:35;37825:1;37822;37818:9;37813:14;;37657:176;;;;:::o;37839:180::-;37887:77;37884:1;37877:88;37984:4;37981:1;37974:15;38008:4;38005:1;37998:15",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.7;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol\";\nimport \"@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol\";\n\ncontract LeeSeaNFT is ERC721URIStorage, Ownable, ERC721Enumerable {\n    using Counters for Counters.Counter;\n    Counters.Counter private _tokenIds;\n\n    address marketContractAddress;\n\n    constructor(address contractAddress) ERC721(\"LeeSeaNFT\", \"NFT\"){\n        marketContractAddress = contractAddress;\n    }\n\n    function _beforeTokenTransfer(\n        address from,\n        address to,\n        uint256 tokenId\n    ) internal\n      override(ERC721, ERC721Enumerable) {\n        super._beforeTokenTransfer(from, to, tokenId);\n    }\n\n    function _burn(\n        uint256 tokenId\n    ) internal\n      override(ERC721, ERC721URIStorage) {\n        super._burn(tokenId);\n    }\n\n    function supportsInterface(bytes4 interfaceId)\n        public\n        view\n        override(ERC721, ERC721Enumerable)\n        returns (bool)\n    {\n        return super.supportsInterface(interfaceId);\n    }\n\n    function tokenURI(\n        uint256 _tokenId\n    ) public view\n      override(ERC721, ERC721URIStorage) returns (string memory) {\n        return super.tokenURI(_tokenId);\n    }\n    \n    function mintNFT(address _recipient, string memory _tokenURI) public returns (uint256) {\n        _tokenIds.increment();\n\n        uint256 newItemId = _tokenIds.current();\n        _mint(_recipient, newItemId);\n        _setTokenURI(newItemId, _tokenURI);\n        setApprovalForAll(marketContractAddress, true); //grant transaction permission to market\n\n        return newItemId;\n    }\n}",
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
      "LeeSeaNFT": [
        2957
      ],
      "Ownable": [
        112
      ],
      "Strings": [
        2251
      ]
    },
    "id": 2958,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 2816,
        "literals": [
          "solidity",
          "^",
          "0.8",
          ".7"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:23:15"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 2817,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2958,
        "sourceUnit": 980,
        "src": "57:57:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
        "file": "@openzeppelin/contracts/utils/Counters.sol",
        "id": 2818,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2958,
        "sourceUnit": 2026,
        "src": "115:52:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
        "file": "@openzeppelin/contracts/access/Ownable.sol",
        "id": 2819,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2958,
        "sourceUnit": 113,
        "src": "168:52:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
        "file": "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol",
        "id": 2820,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2958,
        "sourceUnit": 1577,
        "src": "221:78:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol",
        "file": "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol",
        "id": 2821,
        "nameLocation": "-1:-1:-1",
        "nodeType": "ImportDirective",
        "scope": 2958,
        "sourceUnit": 1452,
        "src": "300:78:15",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "baseName": {
              "id": 2822,
              "name": "ERC721URIStorage",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1576,
              "src": "402:16:15"
            },
            "id": 2823,
            "nodeType": "InheritanceSpecifier",
            "src": "402:16:15"
          },
          {
            "baseName": {
              "id": 2824,
              "name": "Ownable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 112,
              "src": "420:7:15"
            },
            "id": 2825,
            "nodeType": "InheritanceSpecifier",
            "src": "420:7:15"
          },
          {
            "baseName": {
              "id": 2826,
              "name": "ERC721Enumerable",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 1451,
              "src": "429:16:15"
            },
            "id": 2827,
            "nodeType": "InheritanceSpecifier",
            "src": "429:16:15"
          }
        ],
        "canonicalName": "LeeSeaNFT",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 2957,
        "linearizedBaseContracts": [
          2957,
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
        "name": "LeeSeaNFT",
        "nameLocation": "389:9:15",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "global": false,
            "id": 2831,
            "libraryName": {
              "id": 2828,
              "name": "Counters",
              "nodeType": "IdentifierPath",
              "referencedDeclaration": 2025,
              "src": "458:8:15"
            },
            "nodeType": "UsingForDirective",
            "src": "452:36:15",
            "typeName": {
              "id": 2830,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 2829,
                "name": "Counters.Counter",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 1957,
                "src": "471:16:15"
              },
              "referencedDeclaration": 1957,
              "src": "471:16:15",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$1957_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            }
          },
          {
            "constant": false,
            "id": 2834,
            "mutability": "mutable",
            "name": "_tokenIds",
            "nameLocation": "518:9:15",
            "nodeType": "VariableDeclaration",
            "scope": 2957,
            "src": "493:34:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Counter_$1957_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "id": 2833,
              "nodeType": "UserDefinedTypeName",
              "pathNode": {
                "id": 2832,
                "name": "Counters.Counter",
                "nodeType": "IdentifierPath",
                "referencedDeclaration": 1957,
                "src": "493:16:15"
              },
              "referencedDeclaration": 1957,
              "src": "493:16:15",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$1957_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            },
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 2836,
            "mutability": "mutable",
            "name": "marketContractAddress",
            "nameLocation": "542:21:15",
            "nodeType": "VariableDeclaration",
            "scope": 2957,
            "src": "534:29:15",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 2835,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "534:7:15",
              "stateMutability": "nonpayable",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "visibility": "internal"
          },
          {
            "body": {
              "id": 2849,
              "nodeType": "Block",
              "src": "633:56:15",
              "statements": [
                {
                  "expression": {
                    "id": 2847,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "id": 2845,
                      "name": "marketContractAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2836,
                      "src": "643:21:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 2846,
                      "name": "contractAddress",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2838,
                      "src": "667:15:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "643:39:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 2848,
                  "nodeType": "ExpressionStatement",
                  "src": "643:39:15"
                }
              ]
            },
            "id": 2850,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "hexValue": "6c65615365614e4654",
                    "id": 2841,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "614:11:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_cc16fb8b745b7d4ddf028d91d833040adea752f6c61606912ca062162aef8d64",
                      "typeString": "literal_string \"LeeSeaNFT\""
                    },
                    "value": "LeeSeaNFT"
                  },
                  {
                    "hexValue": "4e4654",
                    "id": 2842,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "627:5:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_9c4138cd0a1311e4748f70d0fe3dc55f0f5f75e0f20db731225cbc3b8914016a",
                      "typeString": "literal_string \"NFT\""
                    },
                    "value": "NFT"
                  }
                ],
                "id": 2843,
                "kind": "baseConstructorSpecifier",
                "modifierName": {
                  "id": 2840,
                  "name": "ERC721",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 979,
                  "src": "607:6:15"
                },
                "nodeType": "ModifierInvocation",
                "src": "607:26:15"
              }
            ],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2839,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2838,
                  "mutability": "mutable",
                  "name": "contractAddress",
                  "nameLocation": "590:15:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2850,
                  "src": "582:23:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2837,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "582:7:15",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "581:25:15"
            },
            "returnParameters": {
              "id": 2844,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "633:0:15"
            },
            "scope": 2957,
            "src": "570:119:15",
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
              "id": 2870,
              "nodeType": "Block",
              "src": "848:62:15",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2865,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2852,
                        "src": "885:4:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2866,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2854,
                        "src": "891:2:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2867,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2856,
                        "src": "895:7:15",
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
                        "id": 2862,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967271,
                        "src": "858:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_LeeSeaNFT_$2957_$",
                          "typeString": "type(contract super LeeSeaNFT)"
                        }
                      },
                      "id": 2864,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_beforeTokenTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1289,
                      "src": "858:26:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 2868,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "858:45:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2869,
                  "nodeType": "ExpressionStatement",
                  "src": "858:45:15"
                }
              ]
            },
            "id": 2871,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_beforeTokenTransfer",
            "nameLocation": "704:20:15",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 2860,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 2858,
                  "name": "ERC721",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 979,
                  "src": "822:6:15"
                },
                {
                  "id": 2859,
                  "name": "ERC721Enumerable",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1451,
                  "src": "830:16:15"
                }
              ],
              "src": "813:34:15"
            },
            "parameters": {
              "id": 2857,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2852,
                  "mutability": "mutable",
                  "name": "from",
                  "nameLocation": "742:4:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2871,
                  "src": "734:12:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2851,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "734:7:15",
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
                  "id": 2854,
                  "mutability": "mutable",
                  "name": "to",
                  "nameLocation": "764:2:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2871,
                  "src": "756:10:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2853,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "756:7:15",
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
                  "id": 2856,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "784:7:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2871,
                  "src": "776:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2855,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "776:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "724:73:15"
            },
            "returnParameters": {
              "id": 2861,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "848:0:15"
            },
            "scope": 2957,
            "src": "695:215:15",
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
              "id": 2885,
              "nodeType": "Block",
              "src": "1012:37:15",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2882,
                        "name": "tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2873,
                        "src": "1034:7:15",
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
                        "id": 2879,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967271,
                        "src": "1022:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_LeeSeaNFT_$2957_$",
                          "typeString": "type(contract super LeeSeaNFT)"
                        }
                      },
                      "id": 2881,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_burn",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1575,
                      "src": "1022:11:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 2883,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1022:20:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2884,
                  "nodeType": "ExpressionStatement",
                  "src": "1022:20:15"
                }
              ]
            },
            "id": 2886,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_burn",
            "nameLocation": "925:5:15",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 2877,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 2875,
                  "name": "ERC721",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 979,
                  "src": "986:6:15"
                },
                {
                  "id": 2876,
                  "name": "ERC721URIStorage",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1576,
                  "src": "994:16:15"
                }
              ],
              "src": "977:34:15"
            },
            "parameters": {
              "id": 2874,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2873,
                  "mutability": "mutable",
                  "name": "tokenId",
                  "nameLocation": "948:7:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2886,
                  "src": "940:15:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2872,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "940:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "930:31:15"
            },
            "returnParameters": {
              "id": 2878,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1012:0:15"
            },
            "scope": 2957,
            "src": "916:133:15",
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
              "id": 2901,
              "nodeType": "Block",
              "src": "1200:60:15",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2898,
                        "name": "interfaceId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2888,
                        "src": "1241:11:15",
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
                        "id": 2896,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967271,
                        "src": "1217:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_LeeSeaNFT_$2957_$",
                          "typeString": "type(contract super LeeSeaNFT)"
                        }
                      },
                      "id": 2897,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "supportsInterface",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1163,
                      "src": "1217:23:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_bytes4_$returns$_t_bool_$",
                        "typeString": "function (bytes4) view returns (bool)"
                      }
                    },
                    "id": 2899,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1217:36:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 2895,
                  "id": 2900,
                  "nodeType": "Return",
                  "src": "1210:43:15"
                }
              ]
            },
            "functionSelector": "01ffc9a7",
            "id": 2902,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "supportsInterface",
            "nameLocation": "1064:17:15",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 2892,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 2890,
                  "name": "ERC721",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 979,
                  "src": "1147:6:15"
                },
                {
                  "id": 2891,
                  "name": "ERC721Enumerable",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1451,
                  "src": "1155:16:15"
                }
              ],
              "src": "1138:34:15"
            },
            "parameters": {
              "id": 2889,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2888,
                  "mutability": "mutable",
                  "name": "interfaceId",
                  "nameLocation": "1089:11:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2902,
                  "src": "1082:18:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes4",
                    "typeString": "bytes4"
                  },
                  "typeName": {
                    "id": 2887,
                    "name": "bytes4",
                    "nodeType": "ElementaryTypeName",
                    "src": "1082:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bytes4",
                      "typeString": "bytes4"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1081:20:15"
            },
            "returnParameters": {
              "id": 2895,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2894,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2902,
                  "src": "1190:4:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 2893,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1190:4:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1189:6:15"
            },
            "scope": 2957,
            "src": "1055:205:15",
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
              "id": 2917,
              "nodeType": "Block",
              "src": "1393:48:15",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2914,
                        "name": "_tokenId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2904,
                        "src": "1425:8:15",
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
                        "id": 2912,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 4294967271,
                        "src": "1410:5:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_super$_LeeSeaNFT_$2957_$",
                          "typeString": "type(contract super LeeSeaNFT)"
                        }
                      },
                      "id": 2913,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "tokenURI",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1523,
                      "src": "1410:14:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_uint256_$returns$_t_string_memory_ptr_$",
                        "typeString": "function (uint256) view returns (string memory)"
                      }
                    },
                    "id": 2915,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1410:24:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  "functionReturnParameters": 2911,
                  "id": 2916,
                  "nodeType": "Return",
                  "src": "1403:31:15"
                }
              ]
            },
            "functionSelector": "c87b56dd",
            "id": 2918,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "tokenURI",
            "nameLocation": "1275:8:15",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 2908,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "id": 2906,
                  "name": "ERC721",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 979,
                  "src": "1343:6:15"
                },
                {
                  "id": 2907,
                  "name": "ERC721URIStorage",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 1576,
                  "src": "1351:16:15"
                }
              ],
              "src": "1334:34:15"
            },
            "parameters": {
              "id": 2905,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2904,
                  "mutability": "mutable",
                  "name": "_tokenId",
                  "nameLocation": "1301:8:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2918,
                  "src": "1293:16:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2903,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1293:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1283:32:15"
            },
            "returnParameters": {
              "id": 2911,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2910,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2918,
                  "src": "1378:13:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2909,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1378:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1377:15:15"
            },
            "scope": 2957,
            "src": "1266:175:15",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 2955,
              "nodeType": "Block",
              "src": "1538:294:15",
              "statements": [
                {
                  "expression": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 2927,
                        "name": "_tokenIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2834,
                        "src": "1548:9:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$1957_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 2929,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "increment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1983,
                      "src": "1548:19:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$1957_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$1957_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer)"
                      }
                    },
                    "id": 2930,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1548:21:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2931,
                  "nodeType": "ExpressionStatement",
                  "src": "1548:21:15"
                },
                {
                  "assignments": [
                    2933
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 2933,
                      "mutability": "mutable",
                      "name": "newItemId",
                      "nameLocation": "1588:9:15",
                      "nodeType": "VariableDeclaration",
                      "scope": 2955,
                      "src": "1580:17:15",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 2932,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1580:7:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 2937,
                  "initialValue": {
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "id": 2934,
                        "name": "_tokenIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2834,
                        "src": "1600:9:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$1957_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 2935,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1969,
                      "src": "1600:17:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$1957_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$1957_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 2936,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1600:19:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1580:39:15"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2939,
                        "name": "_recipient",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2920,
                        "src": "1635:10:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "id": 2940,
                        "name": "newItemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2933,
                        "src": "1647:9:15",
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
                      "id": 2938,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 689,
                      "src": "1629:5:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 2941,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1629:28:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2942,
                  "nodeType": "ExpressionStatement",
                  "src": "1629:28:15"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2944,
                        "name": "newItemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2933,
                        "src": "1680:9:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 2945,
                        "name": "_tokenURI",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2922,
                        "src": "1691:9:15",
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
                      "id": 2943,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1545,
                      "src": "1667:12:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 2946,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1667:34:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2947,
                  "nodeType": "ExpressionStatement",
                  "src": "1667:34:15"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 2949,
                        "name": "marketContractAddress",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 2836,
                        "src": "1729:21:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "hexValue": "74727565",
                        "id": 2950,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "bool",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1752:4:15",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        "value": "true"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 2948,
                      "name": "setApprovalForAll",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 404,
                      "src": "1711:17:15",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_bool_$returns$__$",
                        "typeString": "function (address,bool)"
                      }
                    },
                    "id": 2951,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1711:46:15",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 2952,
                  "nodeType": "ExpressionStatement",
                  "src": "1711:46:15"
                },
                {
                  "expression": {
                    "id": 2953,
                    "name": "newItemId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 2933,
                    "src": "1816:9:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 2926,
                  "id": 2954,
                  "nodeType": "Return",
                  "src": "1809:16:15"
                }
              ]
            },
            "functionSelector": "eacabe14",
            "id": 2956,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintNFT",
            "nameLocation": "1460:7:15",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 2923,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2920,
                  "mutability": "mutable",
                  "name": "_recipient",
                  "nameLocation": "1476:10:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2956,
                  "src": "1468:18:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 2919,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1468:7:15",
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
                  "id": 2922,
                  "mutability": "mutable",
                  "name": "_tokenURI",
                  "nameLocation": "1502:9:15",
                  "nodeType": "VariableDeclaration",
                  "scope": 2956,
                  "src": "1488:23:15",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 2921,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1488:6:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1467:45:15"
            },
            "returnParameters": {
              "id": 2926,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 2925,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 2956,
                  "src": "1529:7:15",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 2924,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1529:7:15",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1528:9:15"
            },
            "scope": 2957,
            "src": "1451:381:15",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 2958,
        "src": "380:1454:15",
        "usedErrors": []
      }
    ],
    "src": "32:1802:15"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.15+commit.e14f2714.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.4.8",
  "updatedAt": "2022-08-16T05:38:54.155Z",
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
export default NFT_GANACHE;
