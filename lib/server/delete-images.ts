import createR2Client from "@/lib/server/create-r2-client";
import { DeleteObjectsCommand, ListObjectsV2Command } from "@aws-sdk/client-s3";

export async function deleteImages(folder: string) {
  const r2 = createR2Client();
  const listedObjects = await r2.send(
    new ListObjectsV2Command({ Bucket: "gdgoc-yonsei", Prefix: folder }),
  );
  if (!listedObjects.Contents || listedObjects.Contents.length === 0) {
    console.log("No objects to delete");
    return;
  }

  const deleteParams = {
    Bucket: "gdgoc-yonsei",
    Delete: {
      Objects: listedObjects.Contents.map((item) => ({ Key: item.Key })),
    },
  };

  // 객체 삭제
  await r2.send(new DeleteObjectsCommand(deleteParams));
}
