import { TagId } from "@/data/tag";

export type Item = {
  title: string;
  imageUrl: string;
  tags: TagId[];
  href: string;
};
