import { Item } from "@/types/item";

export const allItems: Item[] = [
  {
    title: "いらすとやいらすとやいらすとや",
    imageUrl:
      "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/0f095e5108e4d5ee99e7ab3404f70874?_a=AQAEuiZ",
    tags: ["illust", "no-license-required", "photo", "icon"],
    href: "https://www.irasutoya.com/",
  },
  {
    title: "いらすとや2",
    imageUrl:
      "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/0f095e5108e4d5ee99e7ab3404f70874?_a=AQAEuiZ",
    tags: ["illust", "free"],
    href: "https://www.irasutoya.com/",
  },
  {
    title: "写真クラブ",
    imageUrl:
      "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/0f095e5108e4d5ee99e7ab3404f70874?_a=AQAEuiZ",
    tags: ["photo", "no-license-required"],
    href: "https://www.irasutoya.com/",
  },
  {
    title: "あいこん倶楽部",
    imageUrl:
      "https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/0f095e5108e4d5ee99e7ab3404f70874?_a=AQAEuiZ",
    tags: ["icon", "no-license-required"],
    href: "https://www.irasutoya.com/",
  },
] as const;
