import { Home } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { RegisterForm } from "../components";

const Register = () => {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="bg-backgroundSecondary p-2 border border-outline rounded-xl">
          <p className="font-bold text-cherry">TLB</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl">Create an account</h1>
          <p className="text-foregroundSecondary text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-medium text-cherry hover:text-cherry/80"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <div className="p-4 bg-backgroundSecondary border border-outline rounded-xl mt-8">
        {/* <RegisterForm /> */}
        <p className="text-2xl font-bold text-cherry uppercase text-center">Soon!</p>
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

export default Register;
