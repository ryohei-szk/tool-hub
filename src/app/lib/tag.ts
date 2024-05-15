import { allTags } from "@/data/tag";

export const mainTags: string[] = ["illust", "photo", "icon"];

export const getTagLabel = (tagId: string): string => {
  return allTags.find((tag) => tag.id === tagId)?.label ?? "";
};
