import { ethers } from "hardhat";

async function mintTx() {
    //mintしたいNFTコレクションのアドレスを指定
    const contracts_address: string = "";
    
    const signer: string = "";


    //　NFTのMintと待機
    // スクリプト分ける
    const minting = await mint.NFT();
    await minting.wait();
    console.log("Minted NFT");


};


mintTx().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});