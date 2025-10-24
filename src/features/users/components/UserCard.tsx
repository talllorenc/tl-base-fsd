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
import { paths } from "@/config/paths";

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
      href={paths.usersDetails.getHref(item.id)}
      className="block border border-outline bg-backgroundSecondary rounded-xl p-6 hover:opacity-80 transition-opacity duration-200 gap-4"
      onMouseEnter={handlePrefetch}
      onMouseLeave={cancelPrefetch}
      onFocus={handlePrefetch}
      onBlur={cancelPrefetch}
    >
      <div className="relative w-24 h-24 border border-outline rounded-full overflow-hidden mx-auto">
        {item.imagePath ? (
          <SmoothImage
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${item.imagePath}`}
            alt={`Image for user: ${item.firstName} ${item.lastName}`}
            className="rounded-full object-cover"
          />
        ) : (
          <Image
            src="/users/no-user.png"
            width={96}
            height={96}
            className="object-cover rounded-full"
            alt={`Image for user: ${item.firstName} ${item.lastName}`}
          />
        )}
      </div>

      <div className="flex flex-col gap-1 items-center justify-center text-center mt-4">
        <p className="line-clamp-1 font-medium">
          {item.firstName + " " + item.lastName}
        </p>
        <DateDisplay withDateAgo={false} date={item.registrationDate} />
        <UserRoleBadge role={item.role} />
      </div>
    </Link>
  );
};

export default UserCard;
