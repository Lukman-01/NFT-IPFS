require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const ALCHEMY_HTTP_URL = process.env.ALCHEMY_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

if (!ALCHEMY_HTTP_URL || !PRIVATE_KEY) {
  throw new Error("ALCHEMY_HTTP_URL and PRIVATE_KEY must be defined in your .env file.");
}

module.exports = {
  solidity: "0.8.4",
  networks: {
    mumbai: {
      url: ALCHEMY_HTTP_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};