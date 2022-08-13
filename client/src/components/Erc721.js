import { Link } from "react-router-dom";
import { useEffect } from "react";
import { tokenActions } from '../redux/tokenSlice'
import { useSelector, useDispatch } from 'react-redux';


function Erc721({ tokenId }) {
    const tokenMetadata = useSelector((state) => state.token.tokens[tokenId]);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(tokenActions.fetchToken(tokenId));
    }, [])
    return (
        <div className="erc721token">
            <Link to={`/explore/${tokenId}`}>
                {tokenMetadata ?
                    <>
                        <img
                            src={tokenMetadata.image.replace("ipfs://", "https://ipfs.io/ipfs/")}
                            width={300}/>
                        <div className="name">Name: {tokenMetadata.name}</div>
                        <div className="price">Price: {tokenMetadata.price} ETH</div>
                    </>: null                
                }
            </Link>
        </div>
    );
}

export default Erc721;
