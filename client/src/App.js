import { useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom";
import Web3 from 'web3';

import './App.css';
import Navbar from './components/Navbar';
import { Home, Profile, Create, Explore, TokenDetail } from './pages';
import { CONTRACT_ADDR as contractAddr } from './global_variables';

function App() {
  const [web3, setWeb3] = useState();

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web = new Web3(window.ethereum)
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
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:tokenId" element={<TokenDetail />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile contractAddr={contractAddr} web3={web3} />} />
      </Routes>
    </div>
  );
}

export default App;