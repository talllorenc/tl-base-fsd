"use client";

import { ShareButton } from "@/components/ui";
import { UserDetailsContent } from "../components";
import { usePathname } from "next/navigation";

interface IUserDetailsProps {
  id: string;
}

const UserDetails = ({ id }: IUserDetailsProps) => {
  const pathName = usePathname();
  const URL = `${process.env.NEXT_PUBLIC_CLIENT_URL}${pathName}`;

  return (
    <>
      <div className="flex items-center justify-between">
        <h1>User Profile</h1>
        <ShareButton url={URL} />
      </div>

      <div className="mt-8">
        <UserDetailsContent id={id} />
      </div>
    </>
  );
};

export default UserDetails;
