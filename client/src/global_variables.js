// 환경변수
import erc721Abi from "./erc721Abi";
import erc721AbiLocal from "./erc721AbiLocal";

export const SKIP_PREFLIGHT_CHECK = process.env.REACT_APP_SKIP_PREFLIGHT_CHECK === 'true';
export const USE_GANACHE = process.env.REACT_APP_USE_GANACHE === 'true';
export const NFT_STORAGE_API_KEY = process.env.REACT_APP_NFT_STORAGE_API_KEY;
export const CONTRACT_ADDR = process.env.REACT_APP_CONTRACT_ADDR;

const getContractABI = () => {
    if (USE_GANACHE) {
        return erc721AbiLocal["abi"];
    } else {
        return erc721Abi
    }
}

export const CONTRACT_ABI = getContractABI();
