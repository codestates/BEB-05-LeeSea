import Erc721 from "./Erc721";

function TokenList({ token }){
    return(
        <div className = "MyTokenList">
            <div className="col">
              <div className="card">
                <img src={token.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{token.name}</h5>
                    <p className="card-text">
                        <img width={10} src="https://static.opensea.io/general/ETH.svg" />
                        {token.price}
                    </p>
                </div>
              </div>
            </div>
        </div>
    );
}

export default TokenList;