"use client";

import { useAuth } from "@/app/providers/AuthProvider";
import { Button, SmoothImage } from "@/components/ui";
import Image from "next/image";
import { UserMenu } from "@/features/users/components";
import { useUserMenu } from "@/features/users/hooks/useUserMenu";

const LoginButton = () => {
  const user = useAuth();
  const { isOpen, toggle, menuRef, buttonRef } = useUserMenu();

  if (!user) {
    return (
      <Button asChild className="bg-cherry hover:bg-cherry/80 border-cherry">
        <a href="/login" className="text-white">
          Login
        </a>
      </Button>
    );
  }

  return (
    <div className="relative">
      <div
        ref={buttonRef}
        onClick={toggle}
        className="relative w-9 h-9 rounded-full overflow-hidden cursor-pointer shrink-0"
      >
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

      {isOpen && <UserMenu user={user} ref={menuRef} />}
    </div>
  );
};

export default LoginButton;
