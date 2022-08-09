import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Web3 from 'web3';

import './App.css';
import { Home, Profile } from './pages';
import Navbar from './components/Navbar';


// import { connect } from "react-redux"
// import { setAccount } from "./redux/actions"

// // state를 가져와주는 함수
// const mapStateToProps = (state) => {
//   return {
//     account: state.account,
//   }
// }

// // dispatch(데이터 변경)하는 함수
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setAccount: (account) => dispatch(setAccount(account))
//   }
// }


function App() {
  // function App({ account, setAccount }) {
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
          <Route path="/profile" element={<Profile account={account}/>} />
      </Routes>
    </div>
  );
}

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;