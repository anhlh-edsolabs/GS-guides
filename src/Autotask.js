const axios = require('axios');
const { ethers } = require("ethers");
const {
    DefenderRelaySigner,
    DefenderRelayProvider,
} = require("defender-relay-client/lib/ethers");

const implSlot = "0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc";

const proxy = "Your contract address";
const apiKey = "Your block explorer API key (polygon)";

// Entrypoint for the Autotask
exports.handler = async function (event) {
    // Initialize defender relayer provider and signer
    const provider = new DefenderRelayProvider(event);
    const signer = new DefenderRelaySigner(event, provider, { speed: "fast" });

    // Get implementation address
    let implData = await provider.getStorageAt(proxy, implSlot);
    let implementationAddress = ethers.utils.hexStripZeros(implData);

    const url = `https://api-testnet.polygonscan.com/api?module=contract&action=getabi&address=${implementationAddress}&apikey=${apiKey}`;

    // Get contract ABI
    const res = await axios.get(url);
    const ABI = JSON.parse(res.data.result);

    // Create contract instance from the signer and use it to send a tx
    const contract = new ethers.Contract(proxy, ABI, signer);

    let numberOfSubscriptions = await contract.getNumberOfActiveSubscriptions();
    if(numberOfSubscriptions > 0) {
        const tx = await contract.autoClaim();
        console.log(`Called execute in ${tx.hash}`);
        return { tx: tx.hash };
    }
};