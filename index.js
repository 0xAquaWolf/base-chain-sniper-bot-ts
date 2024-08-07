import { ethers } from 'ethers';
import { env } from './env.js';
import { getContractAddresses } from './contractAddresses.ts';
import { db } from "./database.js"
import {tokens, liquidityEvents} from "./schema.ts"

const provider = new ethers.providers.JsonRpcProvider('https://mainnet.base.org');
const addresses = getContractAddresses();

console.log({db})
/*
=========================================
= ABIs
=========================================
*/

// ABI fragments for the events we're interested in
const UNISWAP_FACTORY_ABI = [
  'event PairCreated(address indexed token0, address indexed token1, address pair, uint)'
];

const UNISWAP_ROUTER_ABI = [
  'event AddLiquidityETH(address indexed token, uint256 amountToken, uint256 amountETH, uint256 liquidity)',
  'event RemoveLiquidityETH(address indexed token, uint256 amountToken, uint256 amountETH, uint256 liquidity)'
];

const factory = new ethers.Contract(addresses.UniswapV2Factory, UNISWAP_FACTORY_ABI, provider);
const router = new ethers.Contract(addresses.UniswapV2Router, UNISWAP_ROUTER_ABI, provider);


/*
=========================================
= Utils
=========================================
*/

function basescanLink(addy) {
  return `https://basescan.org/address/${addy}`;
}

function basescanTxLink(hash) {
  return `https://basescan.org/tx/${hash}`;
}

function dexscreenerLink(addy) {
  return `https://dexscreener.com/base/${addy}`;
}

function getNewTokenAddress(token0, token1, wethAddress) {
  const wethToken = token0 === wethAddress ? "token0" : "token1";
  return wethToken === "token0" ? token1 : token0;
}

async function getDeployerInfo(ERC20_ADDY) {
  const url = `https://api.basescan.org/api?module=contract&action=getcontractcreation&contractaddresses=${ERC20_ADDY}&apikey=${env.BASESCAN_API_TOKEN}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        
        if (data.status === "1" && data.result && data.result.length > 0) {
            const deployerAddy = data.result[0].contractCreator;
            const deployerTxHash = data.result[0].txHash;
            return [deployerAddy, deployerTxHash];
        } else {
            console.log(`No deployer info found for ${ERC20_ADDY}`);
            return [null, null];
        }
    } catch (e) {
        console.error(`Error getting deployer info for ${ERC20_ADDY}: ${e}`);
        return [null, null];
  }
}


function convertBigNumberToFormattedNumbers(bigNumber, decimals = 18) {
  const formatted = ethers.utils.formatUnits(bigNumber, decimals);
  const wholeNumber = Math.floor(parseFloat(formatted));
  
  return {
    withCommas: wholeNumber.toLocaleString('en-US'),
    withoutCommas: wholeNumber.toString()
  };
}

/*
=========================================
= Debugging
=========================================
*/

const latestBlock = await provider.getBlockNumber()
console.log({latestBlock})

const filter = factory.filters.PairCreated
const events = await factory.queryFilter(filter, -1000)

const allEvents = events.map(async(event) => {
    console.log("DEBUG: BASE CHAIN SCANNER HAS STARTED 🚀🚀🚀")
    const newArgs = []
    event.args.map(x => newArgs.push(x))
    const [ token0, token1, pairAddress, totalPairs ] = newArgs

    let wethAddress = token0 === addresses.WETH ? "token0" : "token1"
    let newTokenAddress = wethAddress === "token0" ? token1 : token0
    console.log({newTokenAddress})
    console.log({token0, token1, pairAddress, totalPairs})
    const erc20abi = [
      "function name() view returns (string)",
      "function totalSupply() view returns (uint256)",
      "function decimals() view returns (uint8)",
      "function symbol() view returns (string)"
    ];
    const newERC20Token = new ethers.Contract(newTokenAddress, erc20abi, provider);
    // let [deployerAddy, deployerTxHash] = await getDeployerInfo(newTokenAddress) // [0] - Deployer addy | [1] - txHash

    // Fetch the transaction details
    const tx = await provider.getTransaction(event.transactionHash);
    
    // The 'from' address is the deployer
    const deployerAddy = tx.from;
    const deployerTxHash = tx.hash;

    console.log(deployerAddy,deployerTxHash)

    console.log({newTokenAddress})

    const decimals = await newERC20Token.decimals()
    const bigInittotalSupply = await newERC20Token.totalSupply()
    const totalSupply = convertBigNumberToFormattedNumbers(bigInittotalSupply, decimals)
    
      const tokenInfo = {
        address: newTokenAddress,
        name: await newERC20Token.name(),
        symbol: await newERC20Token.symbol(),
        decimals,
        deployerAddress: deployerAddy,
        totalSupply: totalSupply.withoutCommas,
        totalSupplyWithCommas: totalSupply.withCommas, // add to schema
        deployerTxHash: basescanTxLink(deployerTxHash),
        basescanTokenUrl: basescanLink(newTokenAddress),
        basescanDeployerUrl: basescanLink(deployerAddy),
        dexScreenerUrl: dexscreenerLink(newTokenAddress)
      }

    console.log({tokenInfo})

    const [ insertNewToken ] = await db.insert(tokens).values(tokenInfo).returning()
    console.log("====== Inserted New Token into the database ======")
    console.log(insertNewToken)
})

/*

fix deployer address
fix deployerTXHash
fix totalSupplyWithCommas

*/

/*
=========================================
= Start Script
=========================================
*/
/*
try {
    console.log("BASE CHAIN SCANNER HAS STARTED 🚀🚀🚀")

    factory.on('PairCreated', async (token0, token1, pair, totalPairs) => {
        let wethAddress = token0 === addresses.WETH ? "token0" : "token1"
        let newTokenAddress = wethAddress === "token0" ? token1 : token0

      const erc20abi = [
        "function name() view returns (string)",
        "function totalSupply() view returns (uint256)",
        "function decimals() view returns (uint8)",
        "function symbol() view returns (string)"
      ];
      const newERC20Token = new ethers.Contract(newTokenAddress, erc20abi, provider);
      let [deployerAddy, deployerTxHash] = await getDeployerInfo(newTokenAddress) // [0] - Deployer addy | [1] - txHash
      // console.log(deployerAddress,deployerTxHash)
      // console.log({newERC20Token})
      // ethers.utils.formatUnits(bigNumber, decimals) 
      console.log(`
===== NEW TOKEN CREATED ========
${basescanLink(newTokenAddress)}
================================        
        `)

      const decimals = await newERC20Token.decimals()
      const bigInittotalSupply = await newERC20Token.totalSupply()
      const totalSupply = convertBigNumberToFormattedNumbers(bigInittotalSupply, decimals)

      const tokenInfo = {
        address: newTokenAddress,
        name: await newERC20Token.name(),
        symbol: await newERC20Token.symbol(),
        decimals,
        totalSupply: totalSupply.withoutCommas,
        totalSupplyWithCommas: totalSupply.withCommas, // add to schema
        deployerTxHash: basescanTxLink(deployerTxHash),
        basescanTokenUrl: basescanLink(newTokenAddress),
        basescanDeployerUrl: basescanLink(deployerAddress),
        dexScreenerUrl: dexscreenerLink(newTokenAddress)
      }

      // TODO: save to the database

      console.log({tokenInfo})

      });
} catch (error) {
    console.error({error})    
}

*/