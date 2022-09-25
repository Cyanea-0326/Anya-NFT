import dotenv from "dotenv";
dotenv.config();

const apikey: string | undefined = process.env.http_key;
const seacretkey: string | undefined = process.env.seacret_key;

console.log(apikey);
console.log(seacretkey);
