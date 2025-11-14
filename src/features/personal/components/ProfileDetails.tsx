"use client";

import { useQuery } from "@tanstack/react-query";
import { useGetProfileCreateQO } from "../hooks/useGetProfileCreateQO";
import { DateDisplay, ErrorAxios, SmoothImage, Spinner } from "@/components/ui";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { UserRoleBadge, UserVerifiedBadge } from "@/features/users/components";

const ProfileDetails = () => {
  const router = useRouter();
  const { data: user, isLoading, isError } = useQuery(useGetProfileCreateQO());

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
    router.replace("/404");
    return null;
  }

  return (
    <div className="grid md:grid-cols-[1fr_2fr] gap-4 w-full">
      <div className="flex flex-col items-center justify-center gap-4 p-4 bg-backgroundSecondary border border-outline rounded-xl w-full">
        <div className="flex flex-col items-center text-center">
          <p className="font-medium text-3xl">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-foregroundSecondary">{user.email}</p>
        </div>

        <div className="relative w-40 h-40 border border-outline rounded-full overflow-hidden shrink-0">
          {user.imagePath ? (
            <SmoothImage
              src={`${user.imagePath}`}
              alt={`Image for user: ${user.firstName} ${user.lastName}`}
              className="rounded-full object-cover"
            />
          ) : (
            <Image
              src="/users/no-user.png"
              width={160}
              height={160}
              className="object-cover rounded-full"
              alt={`Image for user: ${user.firstName} ${user.lastName}`}
            />
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 bg-backgroundSecondary border border-outline rounded-xl w-full">
        <h3>Bio & details</h3>

        <div className="grid sm:grid-cols-2 gap-8 mt-4">
          <div className="flex flex-col items-start border-b border-outline p-4">
            <p className="text-foregroundSecondary font-medium">
              Email Address
            </p>
            <p>{user.email}</p>
          </div>
          <div className="flex flex-col items-start border-b border-outline p-4">
            <p className="text-foregroundSecondary font-medium">Your Role</p>
            <UserRoleBadge role={user.role} />
          </div>

          <div className="flex flex-col items-start border-b border-outline p-4">
            <p className="text-foregroundSecondary font-medium">Is Verified</p>
            <UserVerifiedBadge isVerified={user.isVerified} />
          </div>
          <div className="flex flex-col items-start border-b border-outline p-4">
            <p className="text-foregroundSecondary font-medium">
              Registration Date
            </p>
            <DateDisplay
              date={user.registrationDate}
              withDateAgo={false}
              className="text-foreground"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
