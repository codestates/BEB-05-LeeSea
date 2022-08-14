import Erc721 from "./Erc721";

function TokenList({erc721List, navigate}){
    return(
        <div className = "tokenlist">
            <h2 className="explore-title">Explore</h2>
            <p className="explore-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ipsa vitae fugiat, ullam similique quisquam magni, eveniet maxime earum dolor vero minus est laudantium ducimus quia sed amet aspernatur ipsum!</p>
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