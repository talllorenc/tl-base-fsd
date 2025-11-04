import { Button } from "@/components/ui";
import { Home } from "lucide-react";
import Link from "next/link";
import { GoogleLoginButton, LoginForm } from "../components";
import Image from "next/image";

const Login = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="bg-backgroundSecondary p-2 border border-outline rounded-xl">
          <p className="font-bold text-cherry">TLB</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl">Log in to continue</h1>
          <p className="text-foregroundSecondary text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-medium text-cherry hover:text-cherry/80"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4 bg-backgroundSecondary border border-outline rounded-xl mt-8">
        <GoogleLoginButton />

        <div className="flex items-center gap-2">
          <div className="flex-1 h-px bg-outline" />
          <span className="text-foregroundSecondary text-sm">or</span>
          <div className="flex-1 h-px bg-outline" />
        </div>

        <LoginForm />
      </div>
      <Button asChild className="w-full mt-8 bg-transparent">
        <Link href="/" className="text-foregroundSecondary">
          <Home />
          Go To Home Page
        </Link>
      </Button>
    </>
  );
};

export default Login;
