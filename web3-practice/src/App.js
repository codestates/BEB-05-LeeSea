import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import { Home, Profile } from './pages';
import { useEffect, useState } from 'react';
import Web3 from 'web3';

function App() {
  let [account, setAccount] = useState("")
  let [web3, setWeb3] = useState()

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
      <Navbar account={account} setAccount={setAccount} />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;