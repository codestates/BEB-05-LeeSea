import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Web3 from 'web3';

import './App.css';
import { Home, Profile } from './pages';
import Navbar from './components/Navbar';

function App() {
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
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;