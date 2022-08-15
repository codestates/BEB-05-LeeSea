import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";
import Web3 from 'web3';

import Navbar from './components/Navbar';
import { Home, Profile, Create, Explore, TokenDetail } from './pages';
import { useSelector } from 'react-redux'; // redux
import { CONTRACT_ADDR as contractAddr } from './global_variables';

function App() {
  let navigate = useNavigate();
  let [web3, setWeb3] = useState();
  let accountState = useSelector((state) => state.accountReducer);
  let { account } = accountState;
  const [erc721List, setErc721List] = useState([]);

  const [contractList, setContractList] = useState([
    '0x2e03ef77518f0ddeb042ab3de778a64737a983ea', // 새로운 주소
    '0x71e47c247998806ad3a38a99a52bf9b04bc6fa89',
    '0x29Db1FF7966634D1d526225387a5F372294C0A6c'
  ]);


  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      try {
        let web = new Web3(window.ethereum)
        setWeb3(web)
      }
      catch (err) { console.log(err) }
    }
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore erc721List={erc721List} setErc721List={setErc721List} web3={web3} account={account} contractList={contractList} navigate={navigate} />} />
        <Route path="/explore/:idx" element={<TokenDetail erc721List={erc721List} setErc721List={setErc721List} />} />
        <Route path="/create" element={<Create contractAddr={contractAddr} navigate={navigate} web3={web3} />} />
        <Route path="/profile" element={<Profile contractList={contractList} navigate={navigate} web3={web3} />} />
      </Routes>
      <footer className='site-footer'>
        <p className='site-footer-text'>Project Team LeeSEA 🚀 </p>
      </footer>
    </div>
  );
}

export default App;