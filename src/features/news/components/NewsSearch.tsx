import { Input } from "@/shared/ui";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

const NewsSearch = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const debounced = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }

    router.replace(`?${params.toString()}`, { scroll: false });
  }, 1000);

  useEffect(() => {
    return () => debounced.cancel?.();
  }, [debounced]);

  return (
    <div className="relative max-w-xs w-full">
      <Input
        placeholder="Search..."
        icon={Search}
        defaultValue={searchParams.get("search") ?? ""}
        onChange={(e) => debounced(e.target.value)}
      />
    </div>
  );
};

export default NewsSearch;
