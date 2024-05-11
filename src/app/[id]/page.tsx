import ItemCard from "@/components/item-card";
import { ItemType, allItems } from "@/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page({ params: { id } }: { params: { id: ItemType } }) {
  const currentItems = allItems[id] || [];

  if (currentItems.length === 0) {
    return (
      <p className="text-sm text-muted-foreground my-10">
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
