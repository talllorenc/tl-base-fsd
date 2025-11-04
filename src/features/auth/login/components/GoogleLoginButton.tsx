"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui";
import Image from "next/image";

const GoogleLoginButton = () => {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="border border-outline w-full hover:bg-background/80"
    >
      <Image src="/auth/google.svg" alt="Google" width={20} height={20} />
      Sign in with Google
    </Button>
  );
};

export default GoogleLoginButton;
