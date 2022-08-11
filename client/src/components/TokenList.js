import Erc721 from "./Erc721";

function TokenList({erc721List, navigate}){
    return(
        <div className = "tokenlist">            
            < Erc721 erc721List = {erc721List} navigate={navigate}/>
        </div>
    );
}

export default TokenList;