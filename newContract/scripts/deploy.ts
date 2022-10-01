import { ethers } from "hardhat";
import { NewContract, NewContract__factory } from "../typechain-types";
import { NFT } from "/contracts/NewContract";

async function main() {
    const Mint: NewContract__factory = await ethers.getContractFactory("NewContract");
    const mint: NewContract = (await Mint.deploy());

    await mint.deployed();
    console.log("newContract deployed to:", mint.address);
    /*
    const minting = await mint.NFT();
    await minting.wait();
    console.log("Minted NFT");
    */

};

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
