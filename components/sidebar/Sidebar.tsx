"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faUser,
  faThLarge,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { icon: faHouseUser, label: "Home", href: "/" },
  { icon: faUser, label: "About", href: "/about-daniel-mbedobe" },
  { icon: faThLarge, label: "Work", href: "/portfolio" },
  { icon: faEnvelope, label: "Contact", href: "/contact" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 lg:top-1/2 lg:right-[30px] lg:bottom-auto lg:translate-y-[-50%] z-50 w-full lg:w-auto">
      <ul className="flex items-center w-full gap-4 p-4 bg-orange-300 rounded-none shadow-lg lg:flex-col lg:gap-6 lg:rounded-full">
        {navItems.map((item, i) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={i}
              href={item.href}
              title={item.label}
              className={`flex-1 text-xl text-center md:text-2xl transition ${
                isActive ? "text-orange-500" : "text-black hover:text-red-300"
              }`}
            >
              <FontAwesomeIcon icon={item.icon} />
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
