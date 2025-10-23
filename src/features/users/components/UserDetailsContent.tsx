"use client";

import { useQuery } from "@tanstack/react-query";
import { useUserByIdQO } from "../hooks/useUserByIdQO";
import { DateDisplay, ErrorAxios, SmoothImage, Spinner } from "@/components/ui";
import Image from "next/image";
import UserRoleBadge from "./UserRoleBadge";
import { Info } from "lucide-react";

interface IUserDetailContentProps {
  id: string;
}

const UserDetailsContent = ({ id }: IUserDetailContentProps) => {
  const { data: user, isLoading, isError } = useQuery(useUserByIdQO(id));

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

  if (!user) {
    return <ErrorAxios />;
  }

  return (
    <>
      <div className="flex items-center gap-4 p-4 bg-backgroundSecondary border border-outline rounded-xl max-w-xl">
        <div className="relative w-32 h-32 border border-outline rounded-full overflow-hidden shrink-0">
          {user.imagePath ? (
            <SmoothImage
              src={`${process.env.NEXT_PUBLIC_SERVER_URL}${user.imagePath}`}
              alt={`Image for user: ${user.firstName} ${user.lastName}`}
              className="rounded-full object-cover"
            />
          ) : (
            <Image
              src="/users/no-user.png"
              width={128}
              height={128}
              className="object-cover rounded-full"
              alt={`Image for user: ${user.firstName} ${user.lastName}`}
            />
          )}
        </div>

        <div className="flex flex-col gap-2 min-w-0">
          <h2 className="line-clamp-2 break-words">
            {user.firstName + " " + user.lastName}
          </h2>
          <UserRoleBadge role={user.role} />
        </div>
      </div>

      <div className="p-4 mt-8 bg-backgroundSecondary border border-outline rounded-xl max-w-xl">
        <div className="flex items-center gap-2">
          <Info
            size={36}
            className="shrink-0 text-infoForeground bg-infoBackground border border-infoBorder p-1 rounded-xl"
          />
          <h3>Details</h3>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="text-foregroundSecondary">Registration Date</p>
          <DateDisplay
            withDateAgo={false}
            withIcon={false}
            date={user.registrationDate}
            className="text-md text-foreground"
          />
        </div>

        <div className="flex items-center justify-between mt-2">
          <p className="text-foregroundSecondary">Last Update</p>
          <DateDisplay
            withStartDate={false}
            withIcon={false}
            date={user.updateDate}
            className="text-md text-foreground"
          />
        </div>

        <div className="flex items-center justify-between mt-2">
          <p className="text-foregroundSecondary">Member</p>
          <DateDisplay
            withStartDate={false}
            withIcon={false}
            date={user.registrationDate}
            className="text-md text-foreground"
          />
        </div>

        <div className="flex items-center justify-between mt-2">
          <p className="text-foregroundSecondary">Posts Created</p>
          <p>0</p>
        </div>
      </div>
    </>
  );
};

export default UserDetailsContent;
