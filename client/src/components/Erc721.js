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
    return tokenMetadata ? (
        <div className="erc721token">
            <Link to={`/explore/${tokenId}`}>
                <img
                    src={tokenMetadata.image}
                    width={300}/>
                <div className="name">Name: {tokenMetadata.name}</div>
                <div className="price">Price: {tokenMetadata.price} ETH</div>
            </Link>
        </div>
    ): null;
}

export default Erc721;
