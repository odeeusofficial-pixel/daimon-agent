#!/usr/bin/env node
/**
 * generate a new wallet for your daimon
 * prints the address (public) and private key (secret)
 */

const { ethers } = require("ethers");

const wallet = ethers.Wallet.createRandom();

console.log("\n  new daimon wallet\n");
console.log(`  address:     ${wallet.address}`);
console.log(`  private key: ${wallet.privateKey}`);
console.log("\n  → add the private key as DAIMON_WALLET_KEY in your repo secrets");
console.log(`  → fund ${wallet.address} with ~0.005 ETH on Base for gas\n`);
