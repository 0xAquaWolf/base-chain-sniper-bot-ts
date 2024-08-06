import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';

export const events = pgTable('events', {
  id: serial('id').primaryKey(),
  eventType: text('event_type').notNull(),
  data: text('data').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});