"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import { SunMedium, MoonStar } from "lucide-react";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const isActive = (currentTheme: string) => currentTheme === theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Spinner />;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center justify-center border border-outline h-9 w-9 rounded-xl bg-backgroundSecondary hover:bg-foreground hover:text-background transition-none cursor-pointer`}
    >
      {isActive("light") ? <MoonStar /> : <SunMedium />}
    </button>
  );
};

export default ThemeToggler;
