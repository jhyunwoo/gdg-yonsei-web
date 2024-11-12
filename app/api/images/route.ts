import validateUserAccess from "@/lib/server/validate-user-access";
import { NextResponse } from "next/server";
import createR2Client from "@/lib/server/create-r2-client";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function POST(request: Request) {
  const checkPermission = await validateUserAccess(["core", "lead", "member"]);
  if (!checkPermission)
    return NextResponse.json({ error: "Permission Denied" }, { status: 403 });

  const body = (await request.json()) as {
    folderId: string;
    files: { name: string; type: string }[];
    type: string;
  };

  const r2 = createR2Client();

  const signedUrls = [];

  for (let i = 0; i < body.files.length; i += 1) {
    const fileKey = body.type + "/" + body.folderId + "/" + body.files[i].name;

    const command = new PutObjectCommand({
      Bucket: "gdgoc-yonsei",
      Key: fileKey,
      ContentType: body.files[i].type,
    });

    const signedUrl = await getSignedUrl(r2, command, { expiresIn: 3600 });
    signedUrls.push(signedUrl);
  }

  return NextResponse.json(signedUrls);
}
