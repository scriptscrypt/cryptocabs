import {ethers} from "ethers"

import {varContractAbi} from "./ContractABI"

export const varContractAddress = "0xAc40c9C8dADE7B9CF37aEBb49Ab49485eBD3510d"

export const globalProvider = new ethers.providers.Web3Provider(window.ethereum)
export const globalSigner = globalProvider.getSigner() 
export const globalContract = new ethers.Contract( varContractAddress , varContractAbi , globalSigner )

export const globalWeb3StorageToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDFBNjFFNEZlMkQ0QTk4QTQwOTdiRjg1OWY3NEJGNTk5YTRmYjA2MEQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjkyMTM2NTIzNzEsIm5hbWUiOiJTcmlUZXN0In0.sH2BlsftEZGQkNlkEca0AKL82M6UqkSR3c4QRqyoelE"

