import { pgTable, serial, varchar, numeric, integer, text, timestamp } from "drizzle-orm/pg-core"

export const tokens = pgTable("tokens", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }).notNull(),
	symbol: varchar("symbol", { length: 50 }).notNull(),
	totalSupply: numeric("total_supply").notNull(),
	decimals: integer("decimals").notNull(),
	deployerAddress: varchar("deployer_address", { length: 255 }).notNull(),
	deployerTxHash: varchar("deployer_tx_hash", { length: 255 }).notNull(),
	basescanTokenUrl: text("basescan_token_url").notNull(),
	basescanDeployerUrl: text("basescan_deployer_url").notNull(),
	dexscreenerUrl: text("dexscreener_url").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
});

export const liquidityEvents = pgTable("liquidity_events", {
	id: serial("id").primaryKey().notNull(),
	eventType: varchar("event_type", { length: 20 }).notNull(),
	tokenName: varchar("token_name", { length: 255 }).notNull(),
	tokenSymbol: varchar("token_symbol", { length: 50 }).notNull(),
	ethAmount: numeric("eth_amount"),
	tokenAmount: numeric("token_amount"),
	liquidity: numeric("liquidity"),
	tokenMin: numeric("token_min").notNull(),
	ethMin: numeric("eth_min").notNull(),
	toAddress: varchar("to_address", { length: 255 }).notNull(),
	deadline: timestamp("deadline", { mode: 'string' }).notNull(),
	txHash: varchar("tx_hash", { length: 255 }).notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
});