"use client";

import { usePathname } from "next/navigation";

export const useRightMenuVisibility = () => {
  const pathname = usePathname() || "";
  const hiddenRoutes = ["/news", "/perosnal", "/admin"];
  const isHidden = hiddenRoutes.some((route) => pathname.startsWith(route));

  return { isVisible: !isHidden };
};
