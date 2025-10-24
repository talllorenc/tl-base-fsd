"use client";

import { EmptyData, ErrorAxios, Spinner } from "@/components/ui";
import { buildApiParams } from "@/utils/buildApiParams";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import useUsersCreateQO from "../hooks/useUsersCreateQO";
import UserCard from "./UserCard";

const UsersList = () => {
  const searchParams = useSearchParams();
  const params = buildApiParams(searchParams);

  const {
    data: users,
    isLoading,
    isError,
    isPlaceholderData,
  } = useQuery(
    useUsersCreateQO(
      { page: 1, perPage: 9, ...params },
      {
        placeholderData: keepPreviousData,
      }
    )
  );

  if (isLoading) {
    return (
      <div className="mt-32 flex items-center justify-center">
        <Spinner size={48} />
      </div>
    );
  }

  if (isError) {
    return <ErrorAxios />;
  }

  if (!users?.data.length) {
    return <EmptyData text="No users" />;
  }

  return (
    <>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full ${
          isPlaceholderData && "animate-pulse"
        }`}
      >
        {users.data.map((item) => (
          <UserCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default UsersList;
