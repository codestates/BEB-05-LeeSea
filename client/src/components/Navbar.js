import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'; // redux
import './styles/Navbar.css';
import { accountActions } from "../redux/accountSlice";

function Navbar({ }) {
    const account = useSelector((state) => state.account.address);
    const dispatch = useDispatch()

    const connectWallet = async () => {
        dispatch(accountActions.fetchAccount());
        console.log(account);
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
                    <div className="navbar-items">
                        <Link to="/" className="nav-item">Home</Link>
                        <Link to="/explore" className="nav-item">Explore</Link>
                        <Link to="/create" className="nav-item">Create</Link>
                        <Link to="/profile" className="nav-item">Profile</Link>
                        {
                            account
                            ? <img className="connect-wallet-img" src="https://seeklogo.com/images/M/metamask-logo-09EDE53DBD-seeklogo.com.png" />
                            : <button type="button" className="connect-wallet-btn btn btn-primary" onClick={connectWallet}>Wallet</button>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar