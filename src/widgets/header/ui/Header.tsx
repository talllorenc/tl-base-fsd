import { Button } from "@/shared/ui/button/Button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-4 w-full z-20 px-4">
      <div className="border border-outline backdrop-blur-md  rounded-xl flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex gap-1">
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#CC2936] to-[#a21f42]">
              tl.b
            </p>
            <span className="font-bold text-md">v.1</span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild className="bg-cherry hover:bg-cherry/70">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
