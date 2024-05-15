"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { getTagLabel, mainTags } from "../lib/tag";
import { useTagParams } from "@/hooks/tag-params";

export default function MobileNav() {
  const { addTagSearchParams } = useTagParams();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col">
          {mainTags.map((tag) => (
            <Button
              variant={"ghost"}
              key={tag}
              className="justify-start"
              asChild
            >
              <Link href={`?tags=${addTagSearchParams(tag)}`}>
                {getTagLabel(tag)}
              </Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
