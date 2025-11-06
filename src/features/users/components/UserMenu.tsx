"use client";

import { Button, SmoothImage, Spinner } from "@/components/ui";
import { IUserItem } from "../types";
import Image from "next/image";
import Link from "next/link";
import { Settings, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import { useLogoutCreateQO } from "@/features/auth/logout/hooks/useLogoutCreateQO";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

interface IUserMenuProps {
  user: IUserItem;
}

const UserMenu = forwardRef<HTMLDivElement, IUserMenuProps>(({ user }, ref) => {
  const { mutate, isPending } = useLogoutCreateQO({
    onSuccess: () => {
      window.location.href = "/";
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data.message);
      }
    },
  });

  return (
    <motion.div
      ref={ref}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.1 }}
      className="absolute top-10 right-0 max-w-xs bg-backgroundSecondary border border-outline rounded-xl p-4"
    >
      <div className="flex items-center gap-4">
        <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
          {user.imagePath ? (
            <SmoothImage
              src={user.imagePath}
              alt={`${user.firstName} ${user.lastName}`}
              className="rounded-full object-cover"
            />
          ) : (
            <Image
              src="/users/no-user.png"
              width={36}
              height={36}
              alt={`${user.firstName} ${user.lastName}`}
              className="rounded-full object-cover"
            />
          )}
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium line-clamp-1">
            {user.firstName} {user.lastName}
          </p>
          <p className="text-sm text-foregroundSecondary line-clamp-1">
            {user.email}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full mt-4">
        <Button size="sm" asChild className="flex-1 hover:bg-background/80">
          <Link href="/personal">
            <Settings /> Manage account
          </Link>
        </Button>
        <Button
          disabled={isPending}
          size="sm"
          className="flex-1 hover:bg-background/80 text-destructive"
          onClick={() => mutate()}
        >
          {isPending ? <Spinner size="sm"/> : <LogOut />} Sign out
        </Button>
      </div>
    </motion.div>
  );
});

UserMenu.displayName = "UserMenu";

export default UserMenu;
