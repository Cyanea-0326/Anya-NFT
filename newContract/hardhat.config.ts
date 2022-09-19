import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.16",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/RUhD_kE_n-J5Dz6U7__Bx-5Ufzliuwkx",
      accounts: ["42fa3986e3bce8b5b4e8f879099ee21505ad24ca1a879b9e4196b5f8d919fa1f"],
    },
  },
};

export default config;
