"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { useRouter, useSearchParams } from "next/navigation";

const UsersFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const roleParam =
    (searchParams.get("role") as "USER" | "ADMIN" | "TESTER" | null) || null;

  const handleChangeSort = (role: "USER" | "ADMIN" | "TESTER" | "ALL") => {
    const newRoleParam = new URLSearchParams(searchParams);

    if (role === "ALL") {
      newRoleParam.delete("role");
    } else {
      newRoleParam.set("role", role);
    }

    if (roleParam === role) {
      return;
    }

    router.replace(`?${newRoleParam.toString()}`, { scroll: false });
  };
  return (
    <div className="w-full max-w-[180px]">
      <Select
        value={roleParam ?? "ALL"}
        onValueChange={(value) =>
          handleChangeSort(value as "USER" | "ADMIN" | "TESTER" | "ALL")
        }
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Filter by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ALL">All Users</SelectItem>
          <SelectItem value="USER">User</SelectItem>
          <SelectItem value="ADMIN">Admin</SelectItem>
          <SelectItem value="TESTER">Tester</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default UsersFilter;
