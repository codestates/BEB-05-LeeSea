import { Link } from "react-router-dom";
import './styles/Navbar.css';
import Web3 from 'web3'

function Navbar({ account, setAccount }) {
    let connectWallet = async () => {
        let accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        })
        setAccount(accounts[0])
    }
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    {/* logo */}
                    <Link to="/" className="navbar-brand">
                        <img src="https://ipfs.io/ipfs/QmYU1BhbqiNreJN5T6L7LUBHtHtYiWWjeh5RhkgapEsK7Q?filename=QmYU1BhbqiNreJN5T6L7LUBHtHtYiWWjeh5RhkgapEsK7Q" alt="" width="30" height="24" className="logo d-inline-block align-text-top" />
                        LeeSea
                    </Link>
                    {/* items */}
                    <div>
                        <Link to="/" className="nav-item">Home</Link>
                        <Link to="/" className="nav-item">Explore</Link>
                        <Link to="/" className="nav-item">Create</Link>
                        <Link to="/profile" className="nav-item">Profile</Link>
                        {
                            account
                            ? <button type="button" className="connect-wallet-btn btn btn-primary" disabled>지갑 연결 완료</button>
                            : <button type="button" className="connect-wallet-btn btn btn-primary" onClick={connectWallet}>Wallet</button>
                        }
                        
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar