import erc721Abi from "../erc721Abi"
import { useState } from 'react';
import TokenList from '../components/TokenList';

function Explore({web3, account}){
    const [newErc721Addr, setNewErc721Addr] = useState();
    const [erc721List, setErc721List] = useState([]);

    const addNewErc721Token = async() => {
        const tokenContract = await new web3.eth.Contract(
            erc721Abi,
            newErc721Addr
        );
        const name = await tokenContract.methods.name().call();
        const symbol = await tokenContract.methods.symbol().call();
        const totalSupply = await tokenContract.methods.totalSupply().call();
        
        let arr = [];
        for (let i = 1; i<=totalSupply; i++){
            arr.push(i);
        }

        for(let tokenId of arr){
            let tokenOwner = await tokenContract.methods
                .ownerOf(tokenId)
                .call();
            if (String(tokenOwner).toLowerCase()===account){
                let tokenURI = await tokenContract.methods
                    .tokenURI(tokenId)
                    .call();
                setErc721List((prevState)=>{
                    return [...prevState, { name, symbol, tokenId, tokenURI}];
                })
            }
        }

    }

    return (
        <><div className="newErc721">
            <input
                type="text"
                onChange={(e) => {
                    setNewErc721Addr(e.target.value); //update newErc721Addr
                } }
            ></input>
        </div><button onClick={addNewErc721Token}>add new erc721</button>        
        <TokenList erc721List = {erc721List} />
        </>
    )
}  
export default Explore