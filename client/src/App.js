import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Web3 from 'web3';

import './App.css';
import Navbar from './components/Navbar';
import { Home, Profile, Explore } from './pages';
import { useSelector } from 'react-redux'; // redux


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
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;