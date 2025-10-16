import React from "react";
import { leftMenuItems } from "../model/leftMenuItems";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const LeftMenuNavigation = () => {
  return (
    <div className="flex flex-col">
      <p className="uppercase text-sm font-semibold text-foregroundSecondary px-4">
        navigation
      </p>
      <nav className="flex flex-col gap-2 w-full mt-2">
        {leftMenuItems.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.id}
              href={link.href}
              className="flex items-center justify-between gap-2 px-4 py-2 border border-background rounded-xl hover:bg-backgroundSecondary hover:border-outline transition"
            >
              <div className="flex items-center gap-2">
                {Icon && <Icon className="w-5 h-5 text-muted-foreground" />}
                <span className="text-sm font-medium">{link.title}</span>
              </div>
              <ChevronRight className="w-5 h-5 text-foreground" />
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default LeftMenuNavigation;
