import { Navigate, useParams, Link } from "react-router-dom";
import { TokenDetail } from "../pages";
import { useState, useEffect } from "react";
import axios from 'axios';

function Erc721({ erc721, navigate, idx }) {
    let [tokenMetadata, setTokenMetadata] = useState();
    const getTokenMetadata = () => {
        axios.get(erc721.tokenURI)
            .then(res => setTokenMetadata(res.data))
    }
    useEffect(()=>{
        getTokenMetadata();
    }, [tokenMetadata])
    return (
        <div className="erc721token">
            <Link to={`/explore/${idx}`}>
                Name: <span className="name">{erc721.name}</span>(
                <span className="symbol">{erc721.symbol}</span>)
                <div className="nft">id: {erc721.tokenId}</div>
                {tokenMetadata && tokenMetadata.image ?
                    <img
                        src={tokenMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/")}
                        width={300}
                    /> :
                    <img src={erc721.tokenURI} width={300} />
                }
            </Link>
        </div>
    );
}

export default Erc721;
// onClick={() => { navigate(`/explore/${token.tokenId}`) }} 