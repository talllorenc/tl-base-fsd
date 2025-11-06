import Link from "next/link";
import ThemeToggler from "../theme-toggler/ThemeToggler";
import { paths } from "@/config/paths";
import { LoginButton } from "@/features/auth/login/components";

const Header = () => {
  return (
    <header className="sticky top-4 w-full z-20">
      <div className="px-4">
        <div className="px-4 border border-outline backdrop-blur-md rounded-xl flex items-center justify-between h-[60px]">
          <div className="flex items-center gap-4 ">
            <Link href={paths.home.getHref()} className="flex gap-1">
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#CC2936] to-[#a21f42]">
                tl.b
              </p>
              <span className="font-bold text-md">v.1</span>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggler />
            <LoginButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
