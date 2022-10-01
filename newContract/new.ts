import dotenv from "dotenv";
dotenv.config();

const apikey: string | undefined = process.env.http_key;
const seacretkey: string | undefined = process.env.seacret_key;
const contract_address: string | undefined = process.env.contract_address;

console.log(apikey);
console.log(seacretkey);
console.log(contract_address);
