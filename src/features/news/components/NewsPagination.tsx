"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { IMeta } from "@/types/api";
import { Button } from "@/components/ui";

const NewsPagination = ({ meta }: { meta: IMeta }) => {
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

  if (meta.totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex items-center gap-4 max-w-sm mx-auto">
      <Button onClick={handlePrevPage} disabled={paginationParam <= 1}>
        <ChevronLeft />
        Previous
      </Button>
      <p>
        <span>{meta.page}</span>/<span>{meta.totalPages}</span>
      </p>
      <Button
        onClick={handleNextPage}
        disabled={paginationParam >= meta.totalPages}
      >
        Next
        <ChevronRight />
      </Button>
    </div>
  );
};

export default NewsPagination;
