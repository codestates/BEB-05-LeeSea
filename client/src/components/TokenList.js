import Erc721 from "./Erc721";

function TokenList({erc721List, navigate}){
    return(
        <div className = "tokenlist">
            <div className="erc721List">
                {erc721List.map((erc721, idx) => {
                    return(
                        < Erc721 erc721={erc721} navigate={navigate} idx={idx} key={idx}/>
                    )                    
                })}
            </div>
        </div>
    );
}

export default TokenList;