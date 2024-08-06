-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE IF NOT EXISTS "tokens" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"symbol" varchar(50) NOT NULL,
	"total_supply" numeric NOT NULL,
	"decimals" integer NOT NULL,
	"deployer_address" varchar(255) NOT NULL,
	"deployer_tx_hash" varchar(255) NOT NULL,
	"basescan_token_url" text NOT NULL,
	"basescan_deployer_url" text NOT NULL,
	"dexscreener_url" text NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "liquidity_events" (
	"id" serial PRIMARY KEY NOT NULL,
	"event_type" varchar(20) NOT NULL,
	"token_name" varchar(255) NOT NULL,
	"token_symbol" varchar(50) NOT NULL,
	"eth_amount" numeric,
	"token_amount" numeric,
	"liquidity" numeric,
	"token_min" numeric NOT NULL,
	"eth_min" numeric NOT NULL,
	"to_address" varchar(255) NOT NULL,
	"deadline" timestamp NOT NULL,
	"tx_hash" varchar(255) NOT NULL,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

*/