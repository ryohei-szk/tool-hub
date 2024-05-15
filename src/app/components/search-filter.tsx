"use client";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTagParams } from "@/hooks/tag-params";
import { useRouter } from "next/navigation";

export default function SearchFilter() {
  const { addTagSearchParams, removeTagSearchParams } = useTagParams();
  const router = useRouter();
  return (
    <div>
      <h2 className="font-semibold text-muted-foreground mb-4 text-sm">
        絞り込み
      </h2>

      <div className="flex items-center space-x-2">
        <Switch
          onCheckedChange={(v) =>
            v
              ? router.replace(`?tags=${addTagSearchParams("free", true)}`)
              : router.replace(`?tags=${removeTagSearchParams("free")}`)
          }
          id="free"
        />
        <Label htmlFor="free">商用利用可能</Label>
      </div>
    </div>
  );
}
