import erc721Abi from "../erc721Abi";
import { useEffect } from 'react';
import TokenList from '../components/TokenList';

function Explore({web3, account, contractAddr, erc721List, setErc721List}){

    const addNewErc721Token = async(erc721Addr) => {
        const tokenContract = await new web3.eth.Contract(
            erc721Abi,
            erc721Addr
        );
        const name = await tokenContract.methods.name().call();
        const symbol = await tokenContract.methods.symbol().call();
        const totalSupply = await tokenContract.methods.totalSupply().call();
        
        let arr = [];
        for (let i = 1; i<=totalSupply; i++) {
            arr.push(i);
        }

        for (let tokenId of arr) {
            let tokenURI = await tokenContract.methods
                .tokenURI(tokenId)
                .call();
            setErc721List((prevState)=>{
                return [...prevState, { name, symbol, tokenId, tokenURI}];
            })
        }
    }

    const loadTokens = async () => {
        await addNewErc721Token(contractAddr)
    }

    useEffect(() => {
        if(web3){
            setErc721List([]);
            loadTokens();
        }
    }, [web3, contractAddr])

    return web3 ? (
        <TokenList erc721List={erc721List} />
    ) : null
}  
export default Explore