import { Link, useParams } from "react-router-dom";

function TokenDetail({ erc721List }) {

    const { idx } = useParams();
    console.log(erc721List)

    return (        
            <div key={idx}>
                <img src={erc721List[idx].tokenURI} alt="" className="tokenDetailThumb" />
                <div className="tokenInfoArea">
                    <h3 className="tokenName">{erc721List[idx].name}</h3>
                    <p className="tokenSymbol">{erc721List[idx].symbol}</p>
                    <div className="tokenDescArea">
                        <h4 className="tokenDesc">Description</h4>
                        <p className="tokenDescBody">여기에 디스크립션을 넣으면 되겠습니다</p>
                    </div>
                    <button className="buyNFT">구매하기</button>
                    <Link to="/explore"><button className="goToList">목록으로</button></Link>
                </div>
            </div>
        // <div>
        //     <img src="" alt="" className="tokenDetailThumb" />
        //     <div className="tokenInfoArea">
        //         <h3 className="tokenName">TokenName</h3>
        //         <p className="tokenOwner">tokenOwner</p>
        //         <div className="tokenDescArea">
        //             <h4 className="tokenDesc">Description</h4>
        //             <p className="tokenDescBody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis ea quia iste consectetur eaque commodi quod praesentium! Accusamus repudiandae rerum voluptatibus nulla ipsam numquam quasi, ratione vel officiis quibusdam!</p>
        //         </div>
        //         <button className="buyNFT">구매하기</button>
        //         <Link to="/explore"><button className="goToList">목록으로</button></Link>
        //     </div>
        // </div>      
    );
}

export default TokenDetail;