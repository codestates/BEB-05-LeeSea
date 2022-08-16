import { Link } from "react-router-dom";
import { useEffect } from "react";
import { tokenActions } from '../redux/tokenSlice'
import { useSelector, useDispatch } from 'react-redux';
import './styles/Erc721.css';


function Erc721({ tokenId }) {
    const tokenMetadata = useSelector((state) => state.token.tokens[tokenId]);
    const itemsOnSale = useSelector((state) => state.token.itemsOnSale);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(tokenActions.fetchToken(tokenId));
    }, [])
    const isItemOnSale = () => {
      for (const _tokenId in itemsOnSale) {
        if (_tokenId == tokenId) {
          return true;
        }
      }
      return false;
    }
    return tokenMetadata ? (
        <div className="erc721token">
            <Link to={`/BEB-05-LeeSea/explore/${tokenId}`}className="token-item">
                <img
                    src={tokenMetadata.image}
                    width={300}
                    className='token-thumb'/>
                <h4 className="name">{tokenMetadata.name}</h4>
                {isItemOnSale()? <div className="price">
                    <div className="price-img">
                        <img width={10} src="https://static.opensea.io/general/ETH.svg" />
                    </div>
                    <div className="price-text">
                        {itemsOnSale[tokenId].price}
                    </div>
                </div> : null}
            </Link>
        </div>
    ): null;
}

export default Erc721;
