import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { tokenActions } from '../redux/tokenSlice'
import { useSelector, useDispatch } from 'react-redux';


function MyToken({ tokenId }){
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
    <div className = "MyToken">
      <Link to={`/BEB-05-LeeSea/explore/${tokenId}`}>
      <div className="col">
        <div className="card">
          <img src={tokenMetadata.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{tokenMetadata.name}</h5>
              {isItemOnSale()? <p className="card-text">
                <img width={10} src="https://static.opensea.io/general/ETH.svg" />
                {itemsOnSale[tokenId].price}
              </p>: null}
          </div>
        </div>
      </div>
      </Link>
    </div>
  ): null;
}

export default MyToken;