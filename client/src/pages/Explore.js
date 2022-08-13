import { useEffect } from 'react';
import { tokenActions } from '../redux/tokenSlice'
import { useSelector, useDispatch } from 'react-redux';
import Erc721 from '../components/Erc721';


function Explore(){
    const totalSupply = useSelector((state) => state.token.totalSupply);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(tokenActions.setTotalSupply());
    }, [])
    return(
        <div className = "tokenlist">
            <div className="erc721List">
                {[...Array(totalSupply)].map((e, idx) => {
                    const tokenId = idx + 1;
                    return(
                        <Erc721 tokenId={tokenId} key={tokenId}/>
                    )
                })}
            </div>
        </div>
    );
}  
export default Explore;
