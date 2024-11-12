export default function preprocessingTags(
  tags: string[] | null | undefined,
): string[] {
  if (!tags) {
    return [];
  }

  const processedTags: string[] = [];
  for (let tag of tags) {
    tag = tag.replaceAll(" ", "");
    if (tag !== "") {
      processedTags.push(tag);
    }
  }
  return processedTags;
}
