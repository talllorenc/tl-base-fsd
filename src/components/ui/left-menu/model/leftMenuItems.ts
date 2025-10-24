import { Database, Info, Phone, Newspaper, Users } from "lucide-react";
import { LeftMenuItem } from "./types";
import { paths } from "@/config/paths";

export const leftMenuItems: LeftMenuItem[] = [
  {
    id: 1,
    title: "Data",
    href: paths.posts.getHref(),
    icon: Database,
  },
  {
    id: 2,
    title: "About",
    href: paths.about.getHref(),
    icon: Info,
  },
  {
    id: 3,
    title: "Contacts",
    href: paths.contacts.getHref(),
    icon: Phone,
  },
  {
    id: 4,
    title: "News",
    href: paths.news.getHref(),
    icon: Newspaper,
  },
  {
    id: 5,
    title: "Users",
    href: paths.users.getHref(),
    icon: Users,
  },
];