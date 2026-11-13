"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/portfolio" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/about-daniel-mbedobe" },
  { label: "Contact", href: "/contact" },
];

export default function Topbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesVisible, setServicesVisible] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  // usePathname() does not include the URL hash. Track whether the Services
  // section occupies the reading area so its nav entry can be highlighted.
  useEffect(() => {
    if (pathname !== "/") return;
    const section = document.getElementById("services");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setServicesVisible(entry.isIntersecting),
      { rootMargin: "-76px 0px -55% 0px", threshold: 0 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [pathname]);

  // Close any open mobile menu if the visitor changes routes (including Back).
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Closing a menu with Escape returns focus to the menu button.
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const itemIsActive = (href: string) =>
    href === "/#services" ? pathname === "/" && servicesVisible :
    href === "/" ? pathname === "/" && !servicesVisible : pathname === href;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/90 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] w-full max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
        <Link href="/" aria-label="Daniel Mbedobe – Home" className="inline-flex shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700">
          <Image src="/logo.webp" alt="dkmbedobe" width={160} height={40} priority className="h-auto w-[140px] sm:w-[155px]" />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => {
            const active = itemIsActive(item.href);
            return (
              <Link key={item.href} href={item.href} aria-current={active ? (item.href === "/#services" ? "location" : "page") : undefined}
                className={`rounded-sm text-sm font-medium transition-colors hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700 ${active ? "text-orange-700" : "text-slate-600"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className="ml-auto hidden min-h-10 shrink-0 items-center rounded-lg bg-orange-600 px-5 text-sm font-semibold text-white transition-colors hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-700 sm:inline-flex lg:ml-0">
          Discuss a project <span className="ml-2" aria-hidden="true">↗</span>
        </Link>

        <button ref={menuButton} type="button" onClick={() => setMenuOpen((open) => !open)}
          aria-controls="mobile-site-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-900 transition-colors hover:border-orange-300 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 lg:hidden">
          {menuOpen ? (
            <svg aria-hidden="true" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
          ) : (
            <svg aria-hidden="true" width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          )}
        </button>
      </div>
      <nav id="mobile-site-navigation" aria-label="Mobile navigation" hidden={!menuOpen} className="border-t border-slate-100 bg-white px-5 py-3 shadow-md lg:!hidden">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 sm:px-3">
          {navigation.map((item) => {
            const active = itemIsActive(item.href);
            return (
              <Link key={item.href} href={item.href} aria-current={active ? (item.href === "/#services" ? "location" : "page") : undefined}
                onClick={() => setMenuOpen(false)}
                className={`rounded-lg px-3 py-3 text-sm font-semibold transition-colors hover:bg-orange-50 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-orange-700 ${active ? "bg-orange-50 text-orange-700" : "text-slate-700"}`}>
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-2 rounded-lg bg-orange-600 px-4 py-3 text-center text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 sm:hidden">
            Discuss a project
          </Link>
        </div>
      </nav>
    </header>
  );
}
