import { Navigate, useParams, Link } from "react-router-dom";
import { TokenDetail } from "../pages";

function Erc721({ erc721List, navigate }) {
    return (
        <div className="erc721List">
            {erc721List.map((token, idx) => {
                return (
                    // <TokenDetail token={token} erc721List={erc721List} key={idx}/>                                        
                    <div className="erc721token" key={idx}>
                        <Link to={`/explore/${idx}`}>
                            Name: <span className="name">{token.name}</span>(
                            <span className="symbol">{token.symbol}</span>)

                            <div className="nft">id: {token.tokenId}</div>
                            <img src={token.tokenURI} width={300} />
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}

export default Erc721;
// onClick={() => { navigate(`/explore/${token.tokenId}`) }} 