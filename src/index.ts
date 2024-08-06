import { startDiscordBot } from './discord/bot';
import { listenToEvents } from './blockchain/events';
import { processAlert } from './alerts';

const main = () => {
  startDiscordBot();
  listenToEvents((event) => {
    processAlert(event);
  });
};

main();