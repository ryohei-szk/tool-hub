import { getTagLabel } from "@/app/lib/tag";
import { TagId } from "@/data/tag";
import Image from "next/image";
import Link from "next/link";

export default function ItemCard({
  title,
  tags,
  href,
  imageUrl,
}: {
  title: string;
  tags: TagId[];
  href: string;
  imageUrl: string;
}) {
  return (
    <div className="grid-rows-subgrid row-span-3 grid hover:shadow-lg transition duration-500 p-4 border relative rounded-md shadow-sm bg-card gap-0">
      <div className="aspect-video border rounded relative overflow-hidden">
        <Image src={imageUrl} fill objectFit="cover" alt="" />
      </div>
      <h2 className="font-sm font-semibold mt-2">
        <Link href={href} target="_blank">
          {title}
          <span className="absolute inset-0"></span>
        </Link>
      </h2>
      <div className="flex relative z-10 mt-2 gap-2 flex-wrap items-start">
        {tags.map((tagId) => (
          <Link
            key={tagId}
            href={`/${tagId}`}
            className="border whitespace-nowrap text-muted-foreground bg-muted rounded text-xs px-1.5 py-1"
          >
            {getTagLabel(tagId)}
          </Link>
        ))}
      </div>
    </div>
  );
}
