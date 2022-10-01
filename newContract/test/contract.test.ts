import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
//import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
//import { token } from "../typechain-types/@openzeppelin/contracts";


describe("NewContract", function() {
    async function deployOneYearLockFixture() {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await ethers.getSigners();
    
        const NewContract = await ethers.getContractFactory("NewContract");
        const newcontract = await NewContract.deploy();
    
        return { newcontract, owner, otherAccount };
      }
      describe("Basic Info", function() {
        it("Shuld return collectname", async function() {
            const { newcontract } = await loadFixture(deployOneYearLockFixture);

            expect(await newcontract.name()).to.equal("AnyaNFT");
        });
        it("Should return collect symbol", async function () {
            const { newcontract } = await loadFixture(deployOneYearLockFixture);
      
            expect(await newcontract.symbol()).to.equal("SPY");
          });
        });

        describe("Mint", function () {
            it("Should Mint & check owner", async function () {
              const { newcontract, owner } = await loadFixture(deployOneYearLockFixture);
              await newcontract.NFT();

              const ownerAddress = await newcontract.ownerOf(0);
              expect(owner.address).to.equal(ownerAddress);
              console.log("ownerAddress is: ", ownerAddress);
            });
      });
});