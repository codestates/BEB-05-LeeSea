import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { tokenActions } from '../redux/tokenSlice'
import { useSelector, useDispatch } from 'react-redux';


function TokenDetail() {
    const { tokenId } = useParams();
    const tokenMetadata = useSelector((state) => state.token.tokens[tokenId]);
    const dispatch = useDispatch()
    useEffect(() => {
        console.log(tokenId);
        dispatch(tokenActions.fetchToken(tokenId));
    }, [])

    return tokenMetadata ? (        
        <div>
            <img src={tokenMetadata.image} alt="" className="tokenDetailThumb" />
            <div className="tokenInfoArea">
                <h3 className="tokenName">{tokenMetadata.name}</h3>
                <div className="tokenDescArea">
                    <h4 className="tokenDesc">Description</h4>
                    <p className="tokenDescBody">{tokenMetadata.description}</p>
                </div>
                <button className="buyNFT">구매하기</button>
                <Link to="/explore"><button className="goToList">목록으로</button></Link>
            </div>
        </div>
    ): null;
}

export default TokenDetail;
