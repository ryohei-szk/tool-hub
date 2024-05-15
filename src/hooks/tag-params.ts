import { mainTags } from "@/app/lib/tag";
import { useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";

export const useTagParams = () => {
  const searchParams = useSearchParams();
  const defaultTags = useMemo(
    () => searchParams.get("tags")?.split(",").filter(Boolean) ?? [],
    [searchParams]
  );

  const addTagSearchParams = useCallback(
    (newTag: string, keepMainTag?: boolean) => {
      const src = keepMainTag
        ? defaultTags
        : defaultTags.filter((tag) => !mainTags.includes(tag));

      if (src.includes(newTag)) {
        return src.join(",");
      } else {
        return [...src, newTag].join(",");
      }
    },
    [defaultTags]
  );

  const removeTagSearchParams = useCallback(
    (newTag: string) => {
      return defaultTags.filter((tag) => tag !== newTag).join(",");
    },
    [defaultTags]
  );

  return {
    addTagSearchParams,
    removeTagSearchParams,
  };
};
