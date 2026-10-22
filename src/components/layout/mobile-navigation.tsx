"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { currentPages } from "@/config/site";
import { aboutNavigation } from "@/data/about-navigation";

type NavigationItem = {
  href: string;
  label: string;
};

type MobileNavigationProps = {
  items: readonly NavigationItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const aboutToggleRef = useRef<HTMLButtonElement>(null);
  const aboutRef = useRef<HTMLLIElement>(null);
  const navigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");

    function closeOnDesktop(event: MediaQueryListEvent) {
      if (!event.matches) return;

      const activeElement = document.activeElement;
      const hadMobileFocus =
        navigationRef.current?.contains(activeElement) ||
        activeElement === toggleRef.current;

      setIsOpen(false);
      setIsAboutOpen(false);

      if (hadMobileFocus) {
        document.querySelector<HTMLAnchorElement>(".desktop-nav a")?.focus();
      }
    }

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (isAboutOpen && aboutRef.current?.contains(document.activeElement)) {
        setIsAboutOpen(false);
        aboutToggleRef.current?.focus();
        return;
      }
      setIsOpen(false);
      setIsAboutOpen(false);
      toggleRef.current?.focus();
    }

    function closeOnOutside(event: PointerEvent | FocusEvent) {
      const target = event.target as Node;
      if (navigationRef.current?.contains(target) || toggleRef.current?.contains(target)) return;
      setIsOpen(false);
      setIsAboutOpen(false);
    }

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("focusin", closeOnOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("focusin", closeOnOutside);
    };
  }, [isOpen, isAboutOpen]);

  function closeNavigation() {
    setIsOpen(false);
    setIsAboutOpen(false);
  }

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        className="menu-toggle"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => {
          if (isOpen) closeNavigation();
          else setIsOpen(true);
        }}
      >
        <svg
          aria-hidden="true"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        >
          {isOpen ? (
            <path d="m6 6 12 12M6 18 18 6" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      <nav
        ref={navigationRef}
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Navegación móvil"
        hidden={!isOpen}
      >
        <ul>
          <li className="mobile-about" ref={aboutRef}>
            <div className="mobile-about-control">
              <Link href={currentPages.about} aria-current={pathname === currentPages.about ? "page" : undefined} onClick={closeNavigation}>
                Quiénes somos
              </Link>
              <button
                ref={aboutToggleRef}
                className="about-nav-toggle"
                type="button"
                aria-label={isAboutOpen ? "Cerrar páginas de Quiénes somos" : "Mostrar páginas de Quiénes somos"}
                aria-expanded={isAboutOpen}
                aria-controls="mobile-about-navigation"
                onClick={() => setIsAboutOpen((open) => !open)}
              >
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
            <div id="mobile-about-navigation" className="mobile-about-groups" hidden={!isAboutOpen}>
              {aboutNavigation.map((group) => (
                <div className="mobile-about-group" key={group.title}>
                  <h2>{group.title}</h2>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={closeNavigation}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </li>
          {[...items, { href: "/#contacto", label: "Hablemos" }].map((item) => (
            <li key={item.href}>
              <Link href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={closeNavigation}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
