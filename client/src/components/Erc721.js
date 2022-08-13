import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

function Erc721({ erc721, idx }) {
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
                {tokenMetadata ?
                    <>
                        <img
                            src={tokenMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/")}
                            width={300}/>
                        <div className="name">Name: {tokenMetadata.name}</div>
                        <div className="price">Price: {tokenMetadata.properties.price} ETH</div>
                    </>:
                    <>
                        <img src={erc721.tokenURI} width={300} />
                        <div className="name">{erc721.name}</div>
                        <div className="nft">id: {erc721.tokenId}</div>
                    </>                   
                }
            </Link>
        </div>
    );
}

export default Erc721;
