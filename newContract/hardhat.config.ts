import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import dotenv from 'dotenv';
dotenv.config();
const httpKey: string | undefined = process.env.http_key;
const seacretKey: string = process.env.seacret_key;

const config: HardhatUserConfig = {
  solidity: "0.8.16",
  networks: {
    goerli: {
      url: httpKey,
      accounts: [seacretKey],
    },
  },
};

export default config;


