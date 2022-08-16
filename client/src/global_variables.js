import NFT_GANACHE from "./abi/ganache/nft";
import MARKET_GANACHE from "./abi/ganache/market";
import NFT_RINKEBY from "./abi/rinkeby/nft";
import MARKET_RINKEBY from "./abi/rinkeby/market";

export const SKIP_PREFLIGHT_CHECK = process.env.REACT_APP_SKIP_PREFLIGHT_CHECK === 'true';
export const USE_GANACHE = process.env.REACT_APP_USE_GANACHE === 'true';
export const NFT_STORAGE_API_KEY = process.env.REACT_APP_NFT_STORAGE_API_KEY;
export const NFT_CONTRACT_ADDR = process.env.REACT_APP_NFT_CONTRACT_ADDR;
export const MARKET_CONTRACT_ADDR = process.env.REACT_APP_MARKET_CONTRACT_ADDR;

const getNFTContractABI = () => {
    if (USE_GANACHE) {
        return NFT_GANACHE["abi"];
    } else {
        return NFT_RINKEBY["abi"];
    }
}

const getMarketContractABI = () => {
    if (USE_GANACHE) {
        return MARKET_GANACHE["abi"];
    } else {
        return MARKET_RINKEBY["abi"];
    }
}

export const NFT_CONTRACT_ABI = getNFTContractABI();
export const MARKET_CONTRACT_ABI = getMarketContractABI();
