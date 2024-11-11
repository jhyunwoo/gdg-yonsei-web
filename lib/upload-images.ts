export default async function uploadImages(folderId: string, images: File[]) {
  const imagesData = [];

  for (let i = 0; i < images.length; i += 1) {
    imagesData.push({
      name: images[i].name,
      type: images[i].type,
    });
  }

  const requestImagesUploadUrl = await fetch("/api/images", {
    method: "POST",
    body: JSON.stringify({
      folderId: folderId,
      files: imagesData,
    }),
  });
  const imagesUploadUrl = (await requestImagesUploadUrl.json()) as string[];
  for (const url of imagesUploadUrl) {
    await fetch(url, {
      method: "PUT",
      body: images[imagesUploadUrl.indexOf(url)],
    });
  }
  return imagesData;
}
