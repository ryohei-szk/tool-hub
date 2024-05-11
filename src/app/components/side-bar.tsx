import React from "react";
import { TAGS } from "../lib/tag";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="hidden lg:block w-64 border-r">
      <div className="flex flex-col p-4">
        {TAGS.map((tag) => (
          <Button
            key={tag.id}
            variant={"ghost"}
            asChild
            className="justify-start"
          >
            <Link href={`/${tag.id}`}>{tag.label}</Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
