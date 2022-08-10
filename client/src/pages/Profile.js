import { useEffect, useState } from 'react'
import { setAccount } from "../redux/actions";  // redux
import { useSelector, useDispatch } from 'react-redux'; // redux
import Web3 from 'web3'
import '../components/styles/Profile.css'
import erc721Abi from '../erc721Abi'


function Profile({ }) {
  let contractAddr = '0x71e47c247998806ad3a38a99a52bf9b04bc6fa89'
  let [myTokenList, setMyTokenList] = useState(['An item', 'A second item', 'A third item', 'Afourth item', 'And a fifth one'])

  let accountState = useSelector((state) => state.accountReducer)
  let { account } = accountState

  const dispatch = useDispatch()

  let signout = () => {
      dispatch(setAccount(''))
  }
  // let getTokens = async () => {
  //   console.log(Web3.eth)
  //   let contract = await new Web3.eth.Contract(erc721Abi, contractAddr)
  //   console.log(contract)

  //   let name = await contract.methods.name().call()
  //   let symbol = await contract.methods.symbol().call()
  //   let totalSupply = await contract.methods.totalSupply().call()

  //   let arr = []
  //   for (let i = 1; i <= totalSupply; i++) arr.push(i)
  //   for (let tokenId of arr) {
  //     let tokenOwner = await contract.methods.ownerOf(tokenId).call()
  //     if (String(tokenOwner).toLowerCase() === account) {
  //       let tokenURI = await contract.methods.tokenURI(tokenId).call()
  //       setMyTokenList((prevState) => [...prevState, { name, symbol, tokenId, tokenURI }])
  //     }
  //   }

  // }

  useEffect(() => {
    // getTokens()
  }, [])

  return (
    <div className="Profile">
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

      {/* divide into 2 columns */}
      <div className="profile-contents row align-items-start">
        {/* column 1 */}
        <div className="profile-item col">
          <h5 className="profile-item-header">발행 목록</h5>
          <ul className="profile-item-list list-group list-group-flush">
            <hr className="profile-item-list-line" />
            {
              myTokenList.map((token) => {
                return <li className="list-group-item" key={token}>{ token }</li>
              })
            }
          </ul>
        </div>
        {/* column 2 */}
        <div className="profile-item col">
          <h5 className="profile-item-header">구매 목록</h5>
          <ul className="profile-item-list list-group list-group-flush">
          <hr className="profile-item-list-line" />
            {
              myTokenList.map((token) => {
                return <li className="list-group-item" key={token}>{ token }</li>
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile