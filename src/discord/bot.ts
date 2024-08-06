import { Client, IntentsBitField } from 'discord.js';
import { env } from '../config/env';

const client = new Client({
  intents: [IntentsBitField.Flags.Guilds, IntentsBitField.Flags.GuildMessages],
});

client.once('ready', () => {
  console.log('Discord bot is ready!');
});

export const startDiscordBot = () => {
  client.login(env.DISCORD_BOT_TOKEN);
};

export const sendDiscordMessage = (message: string) => {
  const channel = client.channels.cache.get(env.STAGING_CHANNEL_ID);
  if (channel?.isTextBased()) {
    channel.send(message);
  }
};