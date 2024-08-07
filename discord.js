import { Client, GatewayIntentBits, TextChannel } from 'discord.js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const TOKEN = process.env.BASE_TOKEN_SNIFFER;
const STAGING_CHANNEL_ID = process.env.STAGING_CHANNEL_ID;

if (!TOKEN) {
  console.error('BASE_TOKEN_SNIFFER is not set in the environment variables.');
  process.exit(1);
}

if (!STAGING_CHANNEL_ID) {
  console.error('STAGING_CHANNEL_ID is not set in the environment variables.');
  process.exit(1);
}

// Create a new client instance
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

// When the client is ready, run this code (only once)
client.once('ready', () => {
  console.log(`Logged in as ${client.user?.tag}!`);
  
  // Send a message to the staging channel
  const channel = client.channels.cache.get(STAGING_CHANNEL_ID);
  if (channel) {
    channel.send('Bot is now online and connected to the staging channel!');
  } else {
    console.error(`Could not find channel with ID ${STAGING_CHANNEL_ID}`);
  }
});

// Listen for messages
client.on('messageCreate', (message) => {
  if (message.channelId === STAGING_CHANNEL_ID) {
    if (message.content === '!ping') {
      message.reply('Pong!');
    }
  }
});

// Function to send a message to the staging channel
async function sendToStagingChannel(content) {
  const channel = client.channels.cache.get(STAGING_CHANNEL_ID);
  if (channel) {
    await channel.send(content);
  } else {
    console.error(`Could not find channel with ID ${STAGING_CHANNEL_ID}`);
  }
}

// Login to Discord with your client's token
client.login(TOKEN);

// Export the sendToStagingChannel function so it can be used in other parts of your application
export { sendToStagingChannel };