import { sendDiscordMessage } from '../discord/bot';
import { db } from '../database';
import { events } from '../database/schema';

export const processAlert = async (eventData: any) => {
  await db.insert(events).values({
    eventType: eventData.type,
    data: JSON.stringify(eventData),
  });

  sendDiscordMessage(`New event: ${eventData.type}`);
};