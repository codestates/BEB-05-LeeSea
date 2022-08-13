import Erc721 from "./Erc721";

function TokenList({erc721List}){
    return(
        <div className = "tokenlist">
            <div className="erc721List">
                {erc721List.map((erc721, idx) => {
                    return(
                        < Erc721 erc721={erc721} idx={idx} key={idx}/>
                    )                    
                })}
            </div>
        </div>
    );
}

export default TokenList;