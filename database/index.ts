import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from '../schema.ts';

const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

// for query purposes
const queryClient = postgres(connectionString);
export const db = drizzle(queryClient, { schema });