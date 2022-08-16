import { useEffect } from 'react';
import { tokenActions } from '../redux/tokenSlice'
import { useSelector, useDispatch } from 'react-redux';
import Erc721 from '../components/Erc721';


function Explore(){
    const totalSupply = useSelector((state) => state.token.totalSupply);
    const account = useSelector((state) => state.account.address);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(tokenActions.setTotalSupply());
        if (account) {
          dispatch(tokenActions.setMyTokenIds(account));
          dispatch(tokenActions.fetchItemsOnSale());
        }
    }, [account])
    return(
        <div className = "tokenlist">
            <h2 className="explore-title">Explore</h2>
            <p className="explore-description">Discover, Buy, and Sell NFT art works.</p>
            <div className="erc721List">
                {[...Array(totalSupply)].map((_, idx) => {
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
