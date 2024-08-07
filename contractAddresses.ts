import fs from 'fs';
import path from 'path';

export function getContractAddresses() {
  const filePath = path.join(__dirname, './contracts/addresses/uniswap_base_addys.json');
  const rawData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(rawData);
}