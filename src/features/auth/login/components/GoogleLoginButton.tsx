"use client";

import { Button } from "@/components/ui";
import Image from "next/image";
import authService from "../api/api";

const GoogleLoginButton = () => {
  const handleLogin = () => {
    authService.loginGoogle();
  };
  
  return (
    <Button
      onClick={handleLogin}
      className="border border-outline w-full hover:bg-background/80"
    >
      <Image src="/auth/google.svg" alt="Google" width={20} height={20} />
      Sign in with Google
    </Button>
  );
};

export default GoogleLoginButton;
