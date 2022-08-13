import { useEffect, useState} from 'react';
import { Route, Routes, useNavigate  } from "react-router-dom";
import Web3 from 'web3';

import './App.css';
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
    '0x2e03ef77518f0ddeb042ab3de778a64737a983ea'
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
          <Route path="/explore" element={<Explore erc721List={erc721List} setErc721List={setErc721List} web3={web3} account={account} contractList={contractList} navigate={navigate}/>} />
          <Route path="/explore/:idx" element={<TokenDetail erc721List={erc721List} setErc721List={setErc721List}/>} />
          <Route path="/create" element={<Create contractAddr={contractAddr} web3={web3} />} />
          <Route path="/profile" element={<Profile web3={web3} contractList={contractList} />} />
      </Routes>
    </div>
  );
}

export default App;