import { useState } from 'react'
import { useSelector } from 'react-redux'
import '../components/styles/Create.css'
import erc721Abi from '../erc721Abi'
import { NFTStorage } from "nft.storage/dist/bundle.esm.min.js";
import { NFT_STORAGE_API_KEY as API_KEY } from '../global_variables'
import Loading from '../components/Loading';

function Create({ contractAddr, web3 }) {
    let [fileBlob, setFileBlob] = useState("")
    let [name, setName] = useState("")
    let [desc, setDesc] = useState("")
    let [collection, setCollection] = useState("")
    let [price, setPrice] = useState("")
    const account = useSelector((state) => state.account.address);
    let [isNotValidated, setIsNotValidated] = useState(false)
    let [isLoading, setIsLoading] = useState(false)

    let handleChangeImgSrc = (target) => {
        console.log(target.files[0])
        let fileBlob = target.files[0]
        setFileBlob(fileBlob)
    }
    let handleChangeName = (value) => {
        setName(value)
    }
    let handleChangeDesc = (value) => {
        setDesc(value)
    }
    let handleChangeCollection = (value) => {
        setCollection(value)
    }
    let handleChangePrice = (value) => {
        setPrice(value)
    }
    let createNft = async () => {
        if (fileBlob === "") setIsNotValidated(1)
        else if (name === "") setIsNotValidated(2)
        else if (desc === "") setIsNotValidated(3)
        else if (collection === "") setIsNotValidated(4)
        else if (price === "") setIsNotValidated(5)
        else if (isNaN(price)) setIsNotValidated(6)
        else {
            setIsLoading(1)
            setIsNotValidated(false)
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
                setIsLoading(2)

                let url = metadata.url.slice(7)
                let tokenURI = `https://ipfs.io/ipfs/${url}`
                console.log(tokenURI)

                let tokenContract = await new web3.eth.Contract(erc721Abi, contractAddr)
                setIsLoading(3)
                let nft = await tokenContract.methods.mintNFT(account, tokenURI).send({
                    from: account,
                    gas: 1500000,
                    gasPrice: '3000000'
                })
                .on('receipt', (res) => {
                    console.log(res)
                    // window.location.reload()
                })
            }
            catch (error) {
                console.log(error)
            }
        }
        setIsLoading(false)
    }

    return (
      <div className="Create">
        {/* 지갑 연결이 안 된 경우 */}
        <div className={account ? "hidden" : ""}>
            <div className="alert alert-danger" role="alert">
                Please connect to your wallet first.
            </div>
        </div>

        {/* Loading Spinner */}
        <div className={!isLoading ? "hidden" : ""}>
            <Loading isLoading={isLoading} />
        </div>

        {/* 지갑 연결이 된 경우 */}
        <div className={!account ? "hidden" : ""}>
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
                <div className="create-item col">
                    <label className="create-item-content form-label">아이템 이름*</label>
                    <input type="text" className="form-control" placeholder="Item name" onChange={(e) => handleChangeName(e.target.value)} />
                    <label className="create-item-content form-label">아이템 설명*</label>
                    <input type="text" className="form-control" placeholder="Provide a detailed description of your item." onChange={(e) => handleChangeDesc(e.target.value)}/>
                    <label className="create-item-content form-label">컬렉션 이름*</label>
                    <input type="text" className="form-control" placeholder="Collection Name" onChange={(e) => handleChangeCollection(e.target.value)}/>
                    <label  className="create-item-content form-label">판매 가격*</label>
                    <input type="text" className="form-control" placeholder="Ether Price (ex. 0.5Eth => 0.5)" onChange={(e) => handleChangePrice(e.target.value)}/>
                </div>
            </div>

            {/* 유효성 검사 문구 */}
            <div className={!isNotValidated ? "validation-content" : ""}>
                {
                    isNotValidated === 1
                    ? <p className="validation-text"> 이미지 파일을 업로드하세요.</p>
                    : ( isNotValidated === 2
                        ? <p className="validation-text">아이템 이름을 입력하세요.</p>
                        : ( isNotValidated === 3
                            ? <p className="validation-text">아이템 설명을 입력하세요.</p>
                            : ( isNotValidated === 4
                                ? <p className="validation-text">컬렉션 이름을 입력하세요.</p>
                                : ( isNotValidated === 5
                                    ? <p className="validation-text">가격을 입력하세요.</p>
                                    : <p className="validation-text">가격은 숫자여야 합니다.</p>
                                )
                            )
                        )
                    )
                }
            </div>
            {/* 하단 버튼 */}
            <div className="create-btns">
                <button type="button" className="create-btn btn-create btn" onClick={createNft}>만들기</button>
                <button type="button" className="create-btn btn-cancel btn">취소하기</button>   
            </div>
        </div>
      </div>
    );
  }
  
  export default Create