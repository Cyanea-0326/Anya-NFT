import { ethers } from "hardhat";
//import settings from "./settings.json"
import { NFT } from "/Users/cyanea/Documents/erc721/newContract/contracts/NewContract.sol"
import { abi } from "/Users/cyanea/Documents/erc721/newContract/artifacts/contracts/NewContract.sol/NewContract.json";
import dotenv from 'dotenv';
dotenv.config();

mintTx();
async function mintTx() {
     try {
        const httpKey: string | undefined = process.env.http_key;
        const seacretKey = process.env.seacret_key || "";
        const contract_address = process.env.contract_address || "";
        const token_uri: string = "https://api.npoint.io/61b9f658512c586ed1cc";
        const provider = new ethers.providers.JsonRpcProvider(httpKey);
        const signer   = new ethers.Wallet(seacretKey, provider);
        const contract = new ethers.Contract(contract_address, abi, signer);

        const minting = await contract.NFT(signer.address, token_uri);
        await minting.wait();
        console.log("Minted NFT");
     } catch (error) {
        console.log(error);
     }
};