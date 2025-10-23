import { UserDetails } from "@/features/users/pages";
import React from "react";

const UserDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <UserDetails id={id} />;
};

export default UserDetailsPage;
