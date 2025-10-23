"use client";

import Link from "next/link";
import { IUserItem } from "../types";
import { DateDisplay, SmoothImage } from "@/components/ui";
import Image from "next/image";
import UserRoleBadge from "./UserRoleBadge";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useUserByIdQO } from "../hooks/useUserByIdQO";

interface IUserCardProps {
  item: IUserItem;
}

const UserCard = ({ item }: IUserCardProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const userByIdCreateQO = useUserByIdQO(item.id);

  const handlePrefetch = () => {
    timeoutRef.current = setTimeout(() => {
      router.prefetch(`/users/${item.id}`);
      queryClient.prefetchQuery(userByIdCreateQO);
    }, 200);
  };

  const cancelPrefetch = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => cancelPrefetch();
  }, []);

  return (
    <Link
      href={`/users/${item.id}`}
      className="block border border-outline bg-backgroundSecondary rounded-xl p-6 hover:opacity-80 transition-opacity duration-200"
      onMouseEnter={handlePrefetch}
      onMouseLeave={cancelPrefetch}
      onFocus={handlePrefetch}
      onBlur={cancelPrefetch}
    >
      <div className="relative mx-auto w-32 h-32 border border-outline rounded-full overflow-hidden">
        {item.imagePath ? (
          <SmoothImage
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${item.imagePath}`}
            alt={`Image for user: ${item.firstName} ${item.lastName}`}
            className="rounded-full object-cover"
          />
        ) : (
          <Image
            src="/users/no-user.png"
            width={128}
            height={128}
            className="object-cover rounded-full"
            alt={`Image for user: ${item.firstName} ${item.lastName}`}
          />
        )}
      </div>

      <div className="flex flex-col items-center mt-4 text-center">
        <p className="line-clamp-1 font-medium">
          {item.firstName + " " + item.lastName}
        </p>
        <DateDisplay withDateAgo={false} date={item.registrationDate} />
        <UserRoleBadge role={item.role} className="mt-2" />
      </div>
    </Link>
  );
};

export default UserCard;
