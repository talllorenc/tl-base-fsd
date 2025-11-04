"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { paths } from "@/config/paths";
import { Button } from "../button/Button";

const Breadcrumb = () => {
  const pathName = usePathname();

  if (pathName === "/") return null;

  const pathNames = pathName.split("/").filter((path) => path);

  return (
    <nav className="w-full mb-8">
      <ol className="flex items-center gap-2 flex-wrap">
        <Button asChild className="bg-cherry hover:bg-cherry/80 border-cherry">
          <Link href={paths.home.getHref()} className="text-white">
            <Home/>
            Home
            <ChevronRight/>
          </Link>
        </Button>

        {pathNames.map((path, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const itemLink = path[0].toUpperCase() + path.slice(1);
          const isLast = index === pathNames.length - 1;

          return (
            <li
              key={href}
              className="flex items-center gap-2 max-w-[200px] text-foregroundSecondary overflow-hidden"
            >
              {isLast ? (
                <span className="truncate whitespace-nowrap block text-cherry underline">
                  {itemLink}
                </span>
              ) : (
                <Link
                  href={href}
                  className="truncate whitespace-nowrap block hover:underline hover:text-cherry duration-200 transition-colors"
                >
                  {itemLink}
                </Link>
              )}
              {!isLast && <span>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
