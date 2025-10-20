"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

const Breadcrumb = () => {
  const paths = usePathname();

  if (paths === "/") return null;

  const pathNames = paths.split("/").filter((path) => path);

  return (
    <nav className="w-full mb-8">
      <ol className="flex items-center gap-2 flex-wrap">
        <Link
          href="/"
          className="flex items-center gap-2 border border-outline bg-cherry rounded-xl py-1 px-2 text-white hover:opacity-70 duration-200 transition"
        >
          <Home className="w-4 h-4" />
          Home
          <ChevronRight className="w-4 h-4" />
        </Link>
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
