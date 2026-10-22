"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { currentPages } from "@/config/site";
import { aboutNavigation } from "@/data/about-navigation";
import { MobileNavigation } from "./mobile-navigation";
import { ExternalLink } from "@/components/ui/external-link";
import "./about-navigation.css";

const navigation = [
  { href: currentPages.churches, label: "Iglesias" },
  { href: "/#comunidad", label: "Comunidad" },
  { href: currentPages.blog, label: "Blog" },
  { href: "/#recursos", label: "Recursos" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const isOpen = openPath === pathname;
  const aboutRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    function closeOnOutside(event: PointerEvent | FocusEvent) {
      if (!aboutRef.current?.contains(event.target as Node)) setOpenPath(null);
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setOpenPath(null);
      toggleRef.current?.focus();
    }

    function closeOnMobile(event: MediaQueryListEvent) {
      if (event.matches) return;
      if (aboutRef.current?.contains(document.activeElement)) {
        document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus();
      }
      setOpenPath(null);
    }

    const desktop = window.matchMedia("(min-width: 1024px)");
    desktop.addEventListener("change", closeOnMobile);
    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("focusin", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      desktop.removeEventListener("change", closeOnMobile);
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("focusin", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="institutional-bar">
        <div className="container institutional-bar-inner">
          <p>Iglesia de Dios en Colombia</p>
          <nav aria-label="Accesos institucionales">
            <Link href={currentPages.international}>Iglesia internacional</Link>
            <Link href={currentPages.calendar}>Calendario</Link>
            <ExternalLink href={currentPages.reports}>Reportes</ExternalLink>
          </nav>
        </div>
      </div>
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Iglesia de Dios en Colombia, inicio">
          <Image
            src="/images/logo-iglesia.png"
            width={204}
            height={52}
            alt="Iglesia de Dios en Colombia"
            preload
          />
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <div className="about-nav" ref={aboutRef}>
            <div className="about-nav-control">
              <Link href={currentPages.about} aria-current={pathname === currentPages.about ? "page" : undefined} onClick={() => setOpenPath(null)}>
                Quiénes somos
              </Link>
              <button
                ref={toggleRef}
                className="about-nav-toggle"
                type="button"
                aria-label={isOpen ? "Cerrar páginas de Quiénes somos" : "Mostrar páginas de Quiénes somos"}
                aria-expanded={isOpen}
                aria-controls="desktop-about-navigation"
                onClick={() => setOpenPath(isOpen ? null : pathname)}
                onKeyDown={(event) => {
                  if (event.key !== "ArrowDown") return;
                  event.preventDefault();
                  setOpenPath(pathname);
                  requestAnimationFrame(() => panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus());
                }}
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
            <div ref={panelRef} id="desktop-about-navigation" className="about-nav-panel" hidden={!isOpen}>
              {aboutNavigation.map((group) => (
                <div className="about-nav-group" key={group.title}>
                  <h2>{group.title}</h2>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setOpenPath(null)}>
                          <span>{item.label}</span>
                          <small>{item.description}</small>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/#contacto" className="button button-small button-outline header-contact">
          Hablemos
        </Link>
        <MobileNavigation key={pathname} items={navigation} />
      </div>
    </header>
  );
}
