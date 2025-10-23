import { Database, Info, Phone, Newspaper, Users } from "lucide-react";
import { LeftMenuItem } from "./types";

export const leftMenuItems: LeftMenuItem[] = [
  {
    id: 1,
    title: "Data",
    href: "/posts",
    icon: Database,
  },
  {
    id: 2,
    title: "About",
    href: "/about",
    icon: Info,
  },
  {
    id: 3,
    title: "Contacts",
    href: "/contacts",
    icon: Phone,
  },
  {
    id: 4,
    title: "News",
    href: "/news",
    icon: Newspaper,
  },
  {
    id: 5,
    title: "Users",
    href: "/users",
    icon: Users,
  },
];