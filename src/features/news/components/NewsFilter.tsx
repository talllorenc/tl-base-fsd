"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export const NewsFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam =
    (searchParams.get("category") as
      | "ANNOUNCEMENT"
      | "EVENT"
      | "UPDATE"
      | null) || null;

  const handleChangeSort = (
    category: "ANNOUNCEMENT" | "EVENT" | "UPDATE" | "ALL"
  ) => {
    const newCategoryParam = new URLSearchParams(searchParams);

    if (category === "ALL") {
      newCategoryParam.delete("category");
    } else {
      newCategoryParam.set("category", category);
    }

    if (categoryParam === category) {
      return;
    }

    router.replace(`?${newCategoryParam.toString()}`, { scroll: false });
  };
  return (
    <div className="w-full max-w-[180px]">
      <Select
        value={categoryParam ?? "ALL"}
        onValueChange={(value) =>
          handleChangeSort(value as "ANNOUNCEMENT" | "EVENT" | "UPDATE" | "ALL")
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ALL">All news</SelectItem>
          <SelectItem value="ANNOUNCEMENT">Announcement</SelectItem>
          <SelectItem value="EVENT">Event</SelectItem>
          <SelectItem value="UPDATE">Update</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
