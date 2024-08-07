import dotenv from 'dotenv';

dotenv.config();

export const env = {
  DISCORD_BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
  BASE_TOKEN_SNIFFER: process.env.BASE_TOKEN_SNIFFER,
  BASESCAN_API_TOKEN: process.env.BASESCAN_API_TOKEN,
  STAGING_CHANNEL_ID: process.env.STAGING_CHANNEL_ID,
  DEBUG: process.env.DEBUG === 'true',
  CUSTOM_START_BLOCK: parseInt(process.env.CUSTOM_START_BLOCK || '0'),
  DB_HOST: process.env.DB_HOST,
  DB_PORT: parseInt(process.env.DB_PORT),
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  UNISWAP_FACTORY_ADDRESS: process.env.UNISWAP_FACTORY_ADDRESS || '',
  UNISWAP_ROUTER_ADDRESS: process.env.UNISWAP_ROUTER_ADDRESS || '',
};