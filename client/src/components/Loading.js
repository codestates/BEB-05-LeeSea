import Spinner from './images/spinner.gif';
import './styles/Loading.css'

const Loading = ({ isLoading }) => {
	return(
		<div className="Loading">
            <div className="loading-container">
                <div className="loading-text">
                    <div>잠시만 기다려 주세요</div>
                    <img src={Spinner} alt="spinner가 돌아간다" width="50%" />
                    {
                        isLoading === 1
                        ? <div>처리 중입니다...</div>
                        : ( isLoading === 2
                            ? <div>IPFS에 데이터 업로드를 완료했습니다!</div>
                            : <div>컨트랙트에서 데이터 처리 중입니다...</div>
                        )
                    }
                </div>
            </div>
		</div>
	);
 
}


export default Loading;