function Erc721({erc721List}) {
    return(
        <div className = "erc721List">
            {erc721List.map((token, idx)=> {
                return (
                    <div className="erc721token" key={idx}>
                        Name: <span className="name">{token.name}</span>(
                            <span className="symbol">{token.symbol}</span>)
                            
                            <div className="nft">id: {token.tokenId}</div>
                            <img src = {token.tokenURI} width = {300} />                        
                    </div>
                );
            })}
        </div>
    );
}

export default Erc721;