import { Navigate, useParams, Link } from "react-router-dom";
import { TokenDetail } from "../pages";
import { useState, useEffect } from "react";

function Erc721({ erc721, navigate, idx }) {
    return (
        <div className="erc721token">
            <Link to={`/explore/${idx}`}>
                Name: <span className="name">{erc721.name}</span>(
                <span className="symbol">{erc721.symbol}</span>)
                <div className="nft">id: {erc721.tokenId}</div>
                <img src={erc721.tokenURI} width={300} />
            </Link>
        </div>
    );
}

export default Erc721;
// onClick={() => { navigate(`/explore/${token.tokenId}`) }} 