import { useState } from 'react'
import { useSelector } from 'react-redux'
import '../components/styles/Create.css'
import erc721Abi from '../erc721Abi'

import { NFTStorage } from "nft.storage/dist/bundle.esm.min.js";
import { NFT_STORAGE_API_KEY as API_KEY } from '../global_variables'

function Create({ contractAddr, web3 }) {
    let [imgSrc, setImgSrc] = useState("https://cdn.pixabay.com/photo/2013/04/01/21/30/photo-99135_1280.png")
    let [fileBlob, setFileBlob] = useState("")
    let [name, setName] = useState("")
    let [desc, setDesc] = useState("")
    let [collection, setCollection] = useState("")
    let [price, setPrice] = useState("")
    let accountState = useSelector((state) => state.accountReducer)
    let { account } = accountState

    let handleChangeImgSrc = (target) => {
        console.log(target.files[0])
        let fileBlob = target.files[0]
        setFileBlob(fileBlob)
        // const reader = new FileReader();
        // reader.readAsDataURL(fileBlob);
        // return new Promise((resolve) => {
        //   reader.onload = () => {
        //     setImgSrc(reader.result);
        //     resolve();
        //   };
        // });
    }
    let handleChangeName = (value) => {
        setName(value)
    }
    let handleChangeDesc = (value) => {
        setDesc(value)
    }
    let handleChangeCollection = (value) => {
        setDesc(value)
    }
    let handleChangePrice = (value) => {
        setPrice(value)
    }
    let createNft = async () => {
        if (account === "" || imgSrc === "" || name === "") {
            alert("빈 값이 있습니다.")
        }
        else {
            try {
                let image = fileBlob
                let data = {
                    image,
                    name: name,
                    description: desc,
                    properties: {
                        collection: collection,
                        price: price
                    }
                }

                let client = new NFTStorage({ token: API_KEY })
                let metadata = await client.store(data)
                alert("IPFS에 데이터 저장 완료")

                let url = metadata.url.slice(7)
                let tokenURI = `https://ipfs.io/ipfs/${url}`

                let tokenContract = await new web3.eth.Contract(erc721Abi, contractAddr)
                let nft = await tokenContract.methods.mintNFT(account, tokenURI).send({
                    from: account,
                    gas: 1500000,
                    gasPrice: '3000000'
                })
                .on('receipt', (res) => {
                    console.log(res)
                    alert("민팅 완료")
                })
                console.log(nft)
            }
            catch (error) {
                console.log(error)
            }
        }
    }


    return (
      <div className="Create">
        <div className="create-header">
            <h2 className="create-header-title">Create New Item</h2>
        </div>
        
        {/* divide into 2 columns */}
        <div className="create-contents row align-items-start">
            {/* column 1 */}
            <div className="create-item file-area col">
                <label className="file-area-label">이미지를 업로드 해주세요.</label>
                <input className="file-area-input" type="file" accept="image/*" onChange={(e) => handleChangeImgSrc(e.target)} />
            </div>
            {/* column 2 */}
            <div className="create-item col">
                <label className="create-item-content form-label">아이템 이름*</label>
                <input type="text" className="form-control" placeholder="Item name" onChange={(e) => handleChangeName(e.target.value)} />
                <label className="create-item-content form-label">아이템 설명*</label>
                <input type="text" className="form-control" placeholder="Provide a detailed description of your item." onChange={(e) => handleChangeDesc(e.target.value)}/>
                <label className="create-item-content form-label">컬렉션 이름*</label>
                <input type="text" className="form-control" placeholder="Collection Name" onChange={(e) => handleChangeCollection(e.target.value)}/>
                <label  className="create-item-content form-label">판매 가격*</label>
                <input type="text" className="form-control" placeholder="name@example.com" onChange={(e) => handleChangePrice(e.target.value)}/>
                {/* <p className="create-item-content">아이템 이름*</p> */}
                <button type="button" className="btn btn-info" onClick={createNft}>만들기</button>
                <button type="button" className="btn btn-light">취소하기</button>   
            </div>


            {/* <div className="create-item"></div>
            <div className="create-item"></div>
            <div className="create-item"></div> */}
        </div>
      </div>
    );
  }
  
  export default Create