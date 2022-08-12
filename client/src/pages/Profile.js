import { useEffect, useState } from 'react';
import { setAccount } from "../redux/actions";  // redux
import { useSelector, useDispatch } from 'react-redux'; // redux
import '../components/styles/Profile.css';
import erc721Abi from '../erc721Abi';
import TokenList from '../components/TokenList';


function Profile({contractList, navigate, web3}) {
  let [myTokenList, setMyTokenList] = useState(['An item', 'A second item', 'A third item', 'Afourth item', 'And a fifth one']);
  const [ownedTokenList, setOwnedTokenList] = useState([]);

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
            setOwnedTokenList((prevState)=>{
                return [...prevState, { name, symbol, tokenId, tokenURI}];
            })
        }
    }
  }
 
  
  const loadTokens = async () => {
    for (let addr of contractList) {
        await getOwnedToken(addr)
      }
  }

  useEffect(() => {
    if(web3){
      loadTokens();
    }      
  }, [web3, contractList])

  return web3? (
    <div className="Profile">
      {/* 지갑 연결이 안 된 경우 */}
      <div className={account ? "hidden" : ""}>
        <div class="alert alert-danger" role="alert">
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
          <h5 className="profile-item-header">NFT 목록</h5>
          <ul className="profile-item-list list-group list-group-flush">
          <hr className="profile-item-list-line" />
          <TokenList erc721List = {ownedTokenList} />
          </ul>
        </div>
      </div>

    </div>
  ): null;
}

export default Profile