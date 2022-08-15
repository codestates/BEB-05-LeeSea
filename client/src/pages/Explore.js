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
        }
    }, [account])
    return(
        <div className = "tokenlist">
            <h2 className="explore-title">Explore</h2>
            <p className="explore-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ipsa vitae fugiat, ullam similique quisquam magni, eveniet maxime earum dolor vero minus est laudantium ducimus quia sed amet aspernatur ipsum!</p>
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
