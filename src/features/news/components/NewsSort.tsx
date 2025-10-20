"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ArrowUpDown } from "lucide-react";

export const NewsSort = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sortParam = (searchParams.get("order") as "asc" | "desc") || "desc";

  const handleChangeSort = (sort: "asc" | "desc") => {
    const newSortParam = new URLSearchParams(searchParams);
    if (sortParam === sort) {
      return;
    }

    newSortParam.set("order", sort);
    router.replace(`?${newSortParam.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center bg-tableHeader border border-outline px-3 py-2 rounded-xl w-fit h-9">
      <ArrowUpDown className="mr-2 text-foregroundSecondary" width={16} />
      <div className="flex items-center ">
        <button
          onClick={() => handleChangeSort("desc")}
          type="button"
          className={`px-2 py-1 rounded-xl text-sm cursor-pointer border border-tableHeader  ${
            sortParam === "desc" && "bg-background"
          }`}
        >
          Newest
        </button>
        <button
          onClick={() => handleChangeSort("asc")}
          type="button"
          className={`px-2 py-1 rounded-xl text-sm cursor-pointer border border-tableHeader  ${
            sortParam === "asc" && "bg-background"
          }`}
        >
          Oldest
        </button>
      </div>
    </div>
  );
};

export default NewsSort;
