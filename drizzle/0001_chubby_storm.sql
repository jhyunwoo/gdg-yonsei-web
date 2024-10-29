CREATE TYPE "public"."role" AS ENUM('member', 'core', 'lead');--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "generation" integer;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "part" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "role" "role" DEFAULT 'member';--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "githubId" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "linkedinId" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "instagramId" text;