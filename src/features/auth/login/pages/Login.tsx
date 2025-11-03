import { Button } from "@/components/ui";
import { LoginForm } from "../components";
import { Home } from "lucide-react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <h1>Log in to continue</h1>
      <div className="p-4 bg-backgroundSecondary border border-outline rounded-xl mt-8">
        <LoginForm />
        <p className="text-foregroundSecondary mt-4">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-medium text-cherry hover:text-cherry/80"
          >
            Register
          </Link>
        </p>
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
