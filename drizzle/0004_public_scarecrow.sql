ALTER TABLE "sessions" RENAME COLUMN "createdAt" TO "date";--> statement-breakpoint
ALTER TABLE "sessions" DROP COLUMN IF EXISTS "editedAt";