import { useState } from 'react'
import { useSelector } from 'react-redux'
// import { NFTStorage, File } from 'nft.storage'
import '../components/styles/Create.css'
import erc721Abi from '../erc721Abi'

// const client = new NFTStorage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEY4MzIwNDEyNjNCNzIxNGFkMTgzODRkODUyZTlCMkE1RjI3ODk5YjUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY2MDE4NTk3NDM3MCwibmFtZSI6IkxlZVNlYSJ9.KOH4TtUpzAbdRpuKyfg8XYon-kOR87GVp65lEtPfj4E' })

function Create({ contractAddr, web3 }) {
    let [imgSrc, setImgSrc] = useState("https://cdn.pixabay.com/photo/2013/04/01/21/30/photo-99135_1280.png")
    let [fileBlob, setFileBlob] = useState("")
    let [name, setName] = useState("lip pepe")
    let [desc, setDesc] = useState("lip pepe is cute.")
    let [price, setPrice] = useState("0.1")
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
    let handleChangePrice = (value) => {
        setDesc(value)
    }
    let createNft = async () => {
        if (account === "" || imgSrc === "" || name === "") {
            alert("빈 값이 있습니다.")
        }
        else {
            try {
                // let metadata = await client.store({
                //     name: name,
                //     description: desc,
                // })
                // console.log(metadata.url)

                // let url = `https://ipfs.infura.io/ipfs/${file.path}`
                // setImgSrc(url)
                // let metaData = {
                //     name: name,
                //     description: desc,
                //     price: price,
                //     image: url,
                // }
                // let { data } = await client.add(JSON.stringify(metaData))
                // let tokenURI = `https://ipfs.infura.io/ipfs/${data.path}`

                // let tokenContract = await new web3.eth.Contract(erc721Abi, contractAddr)

                // let nft = await tokenContract.methods.mintNFT(account, tokenURI).send({from: account})
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