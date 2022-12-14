import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // redux
// import '../components/styles/Profile.css';
import MyToken from '../components/MyToken';
import { accountActions } from '../redux/accountSlice';
import { tokenActions } from '../redux/tokenSlice'


function Profile() {
  const tokenContract = useSelector((state) => state.token.tokenContract);
  const myTokenIds = useSelector((state) => state.token.myTokenIds);
  const itemsOnSale = useSelector((state) => state.token.itemsOnSale);
  const account = useSelector((state) => state.account.address);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(tokenActions.setTokenContract());
    if (account) {
      dispatch(tokenActions.setMyTokenIds(account));
      dispatch(tokenActions.fetchItemsOnSale());
    }
  }, [tokenContract, account])

  const signout = () => {
      dispatch(accountActions.setAccount(''))
  }

  const mergeMyTokens = () => {
    let arr = myTokenIds.slice();
    for (const _tokenId in itemsOnSale) {
      if (itemsOnSale[_tokenId].seller == account) {
        arr.push(_tokenId);
      }
    }
    return arr;
  }

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
            <button type="button" className="logout-btn" onClick={signout}>로그아웃</button>
          </div>
          <div className="profile-header-2">
            <img className="profile-header-2-image" src="https://static.opensea.io/general/ETH.svg" />
            <p className="account-address">{account}</p>
          </div>
        </div>

        <div className="profile-contents">
          <h5 className="profile-item-header">내 NFT 목록</h5>
            <div className="profile-items">
              {mergeMyTokens().map((tokenId) => <MyToken tokenId={tokenId} key={tokenId} />)}
            </div>
        </div>
      </div>
    </div>
  ): null;
}

export default Profile