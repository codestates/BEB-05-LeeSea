import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { tokenActions } from '../redux/tokenSlice'
import { useSelector, useDispatch } from 'react-redux';


function TokenDetail() {
    const { tokenId } = useParams();
    const tokenMetadata = useSelector((state) => state.token.tokens[tokenId]);
    const account = useSelector((state) => state.account.address);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(tokenActions.fetchToken(tokenId));
    }, []);

    const buyNFT = () => {
        if (account) {
            console.log(account);
            dispatch(tokenActions.updateTokenOwner({tokenId, myAddress: account}));
        }
    };

    return tokenMetadata ? (        
        <div className="token-detail-page" >
            <img src={tokenMetadata.image} alt="" className="tokenDetailThumb" />
            <div className="tokenInfoArea">
                <h3 className="tokenName">{tokenMetadata.name}</h3>
                <div className="tokenDescArea">
                    <h4 className="tokenDesc">Description</h4>
                    <p className="tokenDescBody">{tokenMetadata.description}</p>
                </div>
                <button className="buyNFT detail-btn" onClick={buyNFT}>구매하기</button>
                <Link to="/explore"><button className="goToList detail-btn">목록으로</button></Link>
            </div>
        </div>
    ): null;
}

export default TokenDetail;
