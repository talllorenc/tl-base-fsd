import Link from "next/link";
import { leftMenuItems } from "../model/leftMenuItems";

const LeftMenu = () => {
  return (
    <aside>
      <nav className="flex flex-col gap-2">
        {leftMenuItems.map((link) => (
          <Link key={link.id} href={link.href}>
            {link.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default LeftMenu;
