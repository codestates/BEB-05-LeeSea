import Erc721 from "./Erc721";

function TokenList({ token }) {
  return (
    <div className="MyTokenList">
        <div className="card">
          <img src={token.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{token.name}</h5>
            <p className="card-text">
              <img className="card-text-icon" width={10} src="https://static.opensea.io/general/ETH.svg" />
              <p className="card-token-price">{token.price}</p>
            </p>
          </div>
        </div>      
    </div>
  );
}

export default TokenList;