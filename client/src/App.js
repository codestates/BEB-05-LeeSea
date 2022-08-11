import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Web3 from 'web3';

import './App.css';
import Navbar from './components/Navbar';
import { Home, Profile, Create, Explore } from './pages';
import { useSelector } from 'react-redux'; // redux

let contractAddr = '0x71e47c247998806ad3a38a99a52bf9b04bc6fa89'

function App() {
  let [web3, setWeb3] = useState()
  let accountState = useSelector((state) => state.accountReducer)
  let { account } = accountState


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
          <Route path="/explore" element={<Explore web3={web3} account={account}/>} />
          <Route path="/create" element={<Create contractAddr={contractAddr} web3={web3} />} />
          <Route path="/profile" element={<Profile web3={web3} />} />
      </Routes>
    </div>
  );
}

export default App;