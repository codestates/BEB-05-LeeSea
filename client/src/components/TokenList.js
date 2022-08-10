import Erc721 from "./Erc721";

function TokenList({erc721List}){
    return(
        <div className = "tokenlist">
            < Erc721 erc721List = {erc721List} />
        </div>
    );
}

export default TokenList;