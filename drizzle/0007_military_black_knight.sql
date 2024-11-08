ALTER TABLE "user" ALTER COLUMN "role" SET DEFAULT 'unverified';--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "role" SET NOT NULL;