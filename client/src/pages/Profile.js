import { useEffect, useState } from 'react';
import { setAccount } from "../redux/actions";  // redux
import { useSelector, useDispatch } from 'react-redux'; // redux
import '../components/styles/Profile.css';
import erc721Abi from '../erc721Abi';
import MyTokenList from '../components/MyTokenList';
import axios from 'axios'

function Profile({contractAddr, web3}) {
  let [myTokenList, setMyTokenList] = useState([]);

  let accountState = useSelector((state) => state.accountReducer);
  let { account } = accountState;

  const dispatch = useDispatch()

  let signout = () => {
      dispatch(setAccount(''))
  }

  const getOwnedToken = async(erc721Addr) => {
    const tokenContract = await new web3.eth.Contract(
      erc721Abi,
      erc721Addr
    );
    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();
    
    let arr = [];
    for (let i = 1; i<=totalSupply; i++){
        arr.push(i);
    }

    for(let tokenId of arr){
        let tokenOwner = await tokenContract.methods
            .ownerOf(tokenId)
            .call();
        if (String(tokenOwner).toLowerCase()===account){
            let tokenURI = await tokenContract.methods
                .tokenURI(tokenId)
                .call();
            await axios.get(tokenURI)
              .then((res) => {
                let url = res.data.image.slice(7)
                let data = {
                  name: res.data.name,
                  desc: res.data.description,
                  collection: res.data.properties.collection || 'pepe',
                  price: res.data.properties.price,
                  image: `https://ipfs.io/ipfs/${url}`
                }
                console.log(data)
                return data
              })
              .then((data) => {
                setMyTokenList((prevState) => [...prevState, data])
                console.log(myTokenList)
              })
              .catch((err) => {
                console.log(err)
              })
        }
    }
  }
 
  
  const loadTokens = async () => {
    await getOwnedToken(contractAddr)
  }

  useEffect(() => {
    if(web3){
      loadTokens();
    }      
  }, [web3, contractAddr])

  return web3? (
    <div className="Profile">
      {/* 지갑 연결이 안 된 경우 */}
      <div className={account ? "hidden" : ""}>
        <div className="alert alert-danger" role="alert">
          Please connect to your wallet first.
        </div>
      </div>

      {/* 지갑 연결이 된 경우 */}
      <div className={!account ? "hidden" : ""}>
        <div className="profile-header">
          <div className="profile-header-1">
            <h2 className="profile-header-title">Profile</h2>
            <button type="button" className="logout-btn btn btn-outline-danger" onClick={signout}>로그아웃</button>
          </div>
          <div className="profile-header-2">
            <img className="profile-header-2-image" src="https://static.opensea.io/general/ETH.svg" />
            { account }
          </div>
        </div>

        <div className="profile-contents row align-items-start">
          <h5 className="profile-item-header">내 NFT 목록</h5>
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4">{myTokenList.map((token) => <MyTokenList token={token} key={token.name} />)}</div>
            <hr />
        </div>
      </div>
    </div>
  ): null;
}

export default Profile