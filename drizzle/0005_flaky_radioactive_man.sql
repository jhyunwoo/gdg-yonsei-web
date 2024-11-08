CREATE TABLE IF NOT EXISTS "projects" (
	"id" uuid DEFAULT gen_random_uuid(),
	"title" text NOT NULL,
	"description" text,
	"defaultImage" text NOT NULL,
	"images" jsonb DEFAULT '[]'::jsonb,
	"github" text,
	"participants" jsonb DEFAULT '[]'::jsonb,
	"createdAt" timestamp NOT NULL,
	"editedAt" timestamp DEFAULT now() NOT NULL,
	"authorId" text NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projects" ADD CONSTRAINT "projects_authorId_user_id_fk" FOREIGN KEY ("authorId") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
