"use client";

import ItemCard from "@/components/item-card";
import { allItems } from "@/data";
import { TagId } from "@/data/tag";
import { Item } from "@/types/item";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const [currentItems, setCurrentItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tagsParam = searchParams.get("tags");
    const searchParamsTags = tagsParam ? tagsParam.split(",") : [];

    const currentItems = allItems.filter((item) => {
      if (searchParamsTags.length === 0) {
        return true;
      }
      return searchParamsTags.every((tag) => item.tags.includes(tag as TagId));
    });

    setCurrentItems(currentItems);
    setLoading(false);
  }, [searchParams]);

  if (loading) {
    return (
      <p className="text-sm text-muted-foreground my-10 text-center">
        ロード中...
      </p>
    ); // ロード中のメッセージを表示
  }

  if (currentItems.length === 0) {
    return (
      <p className="text-sm text-muted-foreground my-10 text-center">
        このページは存在しません
      </p>
    );
  }
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {currentItems.map((item) => (
        <ItemCard key={item.title} {...item} />
      ))}
    </div>
  );
}
