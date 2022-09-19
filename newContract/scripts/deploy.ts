import { ethers } from "hardhat";
import { NewContract, NewContract__factory } from "../typechain-types";
import { NFT } from "../contracts/NewContract";

async function main() {
    const Mint: NewContract__factory = await ethers.getContractFactory("NewContract");
    const mint: NewContract = (await Mint.deploy());

    await mint.deployed();
    console.log("newContract deployed to:", mint.address);

    //　NFTのMintと待機
    const minting: any = await mint.NFT();
    await minting.wait();
    console.log("Minted NFT");

};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

/*
// run.js
const main = async () => {
    // コントラクトがコンパイルします
    // コントラクトを扱うために必要なファイルが `artifacts` ディレクトリの直下に生成されます。
    const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
    // Hardhat がローカルの Ethereum ネットワークを作成します。
    const nftContract = await nftContractFactory.deploy();
    // コントラクトが Mint され、ローカルのブロックチェーンにデプロイされるまで待ちます。
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
  };
*/