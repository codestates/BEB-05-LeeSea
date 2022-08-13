import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // redux
import '../components/styles/Profile.css';
import MyToken from '../components/MyToken';
import axios from 'axios';
import { accountActions } from '../redux/accountSlice';
import { tokenActions } from '../redux/tokenSlice'


function Profile() {
  const tokenContract = useSelector((state) => state.token.tokenContract);
  const myTokenIds = useSelector((state) => state.token.myTokenIds);
  const [myTokenList, setMyTokenList] = useState([]);
  const account = useSelector((state) => state.account.address);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(tokenActions.setTokenContract());
    if (account) {
      dispatch(tokenActions.setMyTokenIds(account));
    }
    // if (myTokenIds) {
    //   // loadTokens();
    // }
  }, [tokenContract, account])

  const signout = () => {
      dispatch(accountActions.setAccount(''))
  }

  // const getOwnedToken = async() => {
  //   const totalSupply = await tokenContract.methods.totalSupply().call();
    
  //   let arr = [];
  //   for (let i = 1; i<=totalSupply; i++){
  //       arr.push(i);
  //   }

  //   for(const tokenId of arr){
  //     const tokenOwner = await tokenContract.methods
  //           .ownerOf(tokenId)
  //           .call();
  //       if (String(tokenOwner).toLowerCase()===account){
  //         const tokenURI = await tokenContract.methods
  //               .tokenURI(tokenId)
  //               .call();
  //           await axios.get(tokenURI)
  //             .then((res) => {
  //               const url = res.data.image.slice(7)
  //               const data = {
  //                 name: res.data.name,
  //                 desc: res.data.description,
  //                 collection: res.data.properties.collection || 'pepe',
  //                 price: res.data.properties.price,
  //                 image: `https://ipfs.io/ipfs/${url}`
  //               }
  //               console.log(data)
  //               return data
  //             })
  //             .then((data) => {
  //               setMyTokenList((prevState) => [...prevState, data])
  //               console.log(myTokenList)
  //             })
  //             .catch((err) => {
  //               console.log(err)
  //             })
  //       }
  //   }
  // }
 
  
  // const loadTokens = async () => {
  //   await getOwnedToken()
  // }

  return tokenContract? (
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
            <div className="row row-cols-1 row-cols-md-3 g-4">
              {myTokenIds.map((tokenId) => <MyToken tokenId={tokenId} key={tokenId} />)}
            </div>
            <hr />
        </div>
      </div>
    </div>
  ): null;
}

export default Profile