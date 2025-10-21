"use client";

import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { INewsMeta } from "../types";

interface INewsPaginationProps {
    meta: INewsMeta;
}

export const NewsPagination = ({meta} : INewsPaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paginationParam = Number(searchParams.get("page")) || 1;

  const handleNextPage = () => {
    const newPaginationParam = new URLSearchParams(searchParams);
    newPaginationParam.set("page", String(paginationParam + 1));
    router.replace(`?${newPaginationParam.toString()}`, { scroll: false });
  };

  const handlePrevPage = () => {
    const newPaginationParam = new URLSearchParams(searchParams);
    newPaginationParam.set("page", String(Math.max(paginationParam - 1, 1)));
    router.replace(`?${newPaginationParam.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center gap-4 max-w-sm mx-auto">
      <Button onClick={handlePrevPage}>
        <ChevronLeft />
        Previous
      </Button>
      <p>
        <span>1</span>/<span>2</span>
      </p>
      <Button onClick={handleNextPage}>
        Next
        <ChevronRight />
      </Button>
    </div>
  );
};
