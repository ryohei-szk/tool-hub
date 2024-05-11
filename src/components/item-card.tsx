import { Tag } from "@/types/tag";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ItemCard({
  title,
  tags,
  href,
  imageUrl,
}: {
  title: string;
  tags: Tag[];
  href: string;
  imageUrl: string;
}) {
  return (
    <div className="hover:shadow-lg transition duration-500 aspect-video p-4 border relative rounded-md shadow-sm bg-card">
      <div className="aspect-video border rounded relative overflow-hidden">
        <Image src={imageUrl} fill objectFit="cover" alt="" />
      </div>
      <h2 className="font-sm font-semibold mt-2">
        <Link href={href} target="_blank">
          {title}
          <span className="absolute inset-0"></span>
        </Link>
      </h2>
      <div className="flex relative z-10 mt-2 gap-2 flex-wrap">
        {tags.map((tag) => (
          <Link
            key={tag.id}
            href={`/${tag.id}`}
            className="border whitespace-nowrap text-muted-foreground bg-muted rounded text-xs px-1.5 py-1"
          >
            {tag.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
