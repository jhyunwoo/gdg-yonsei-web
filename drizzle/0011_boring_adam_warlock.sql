ALTER TABLE "projectsMembers" DROP CONSTRAINT "projectsMembers_projectId_projects_id_fk";
--> statement-breakpoint
ALTER TABLE "projectsMembers" DROP CONSTRAINT "projectsMembers_userId_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projectsMembers" ADD CONSTRAINT "projectsMembers_projectId_projects_id_fk" FOREIGN KEY ("projectId") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "projectsMembers" ADD CONSTRAINT "projectsMembers_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
