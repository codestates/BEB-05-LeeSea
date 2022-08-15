import Erc721 from "../components/Erc721";
import { Link, useParams } from "react-router-dom";

function TokenDetail({ erc721List }) {

    let lorem =`
    우리의 인간의 그들에게 아름다우냐? 가치를 황금시대를 트고, 아름다우냐? 없으면, 이것이야말로 우리 웅대한 있는 인생의 인간이 사막이다. 천자만홍이 가치를 그들의 황금시대의 용기가 청춘에서만 수 것이다. 하여도 품으며, 광야에서 귀는 그러므로 약동하다. 피가 인간의 같이, 맺어, 인생의 찾아다녀도, 주며, 것이다. 그러므로 얼마나 모래뿐일 아니다. 피는 열락의 꾸며 위하여 따뜻한 쓸쓸한 것이다. 목숨이 위하여 얼음 우리 그리하였는가?	
	`

    let { idx } = useParams();
    console.log(erc721List)

    return (        
            <div className="token-Detail-page" key={idx}>
                <img src={erc721List[idx].tokenURI} alt="" className="tokenDetailThumb" />
                <div className="tokenInfoArea">
                    <h3 className="tokenName">{erc721List[idx].name}</h3>
                    <p className="tokenSymbol">{erc721List[idx].symbol}</p>
                    <div className="tokenDescArea">
                        <h4 className="tokenDesc">Description</h4>
                        <p className="tokenDescBody">{lorem}</p>
                    </div>
                    <button className="buyNFT detail-btn">구매하기</button>
                    <Link to="/explore"><button className="goToList detail-btn">목록으로</button></Link>
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