"use client";

import React from "react";
import { getTagLabel, mainTags } from "../lib/tag";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import SearchFilter from "./search-filter";
import { useTagParams } from "@/hooks/tag-params";

export default function Sidebar() {
  const { addTagSearchParams } = useTagParams();

  return (
    <div className="hidden lg:block w-64 border-r space-y-6 p-4">
      <div className="flex flex-col">
        {mainTags.map((tag) => (
          <Button key={tag} variant={"ghost"} asChild className="justify-start">
            <Link href={`?tags=${addTagSearchParams(tag)}`}>
              {getTagLabel(tag)}
            </Link>
          </Button>
        ))}
      </div>

      <SearchFilter />
    </div>
  );
}
