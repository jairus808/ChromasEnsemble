'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { navItems } from "../data/navigation";

export function SiteHeader() {
  const [headerScale, setHeaderScale] = useState(1);
  const [isCompact, setIsCompact] = useState(false);
  const [showWordmark, setShowWordmark] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const originalOverflowRef = useRef<string | null>(null);

  useEffect(() => {
    const updateScaleAndLayout = () => {
      const width = window.innerWidth;
      const normalized = Math.min(1, Math.max(0.6, width / 1280));
      setHeaderScale(Number(normalized.toFixed(3)));
      setIsCompact(width <= 720);
    };

    const handleScroll = () => {
      setShowWordmark(window.scrollY > 60);
    };

    updateScaleAndLayout();
    handleScroll();
    window.addEventListener("resize", updateScaleAndLayout);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", updateScaleAndLayout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (originalOverflowRef.current === null) {
      originalOverflowRef.current = document.body.style.overflow || "";
    }

    if (isNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflowRef.current ?? "";
    }

    return () => {
      document.body.style.overflow = originalOverflowRef.current ?? "";
    };
  }, [isNavOpen]);

  useEffect(() => {
    if (!isNavOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isNavOpen]);

  const toggleNav = () => setIsNavOpen((previous) => !previous);
  const closeNav = () => setIsNavOpen(false);

  const headerClasses = [
    "site-header sticky",
    isCompact ? "compact" : "",
    showWordmark ? "" : "brandless",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header
        className={headerClasses}
        style={{ "--header-scale": headerScale } as CSSProperties}
      >
        <div className="container">
          <div className={`brand emblem${showWordmark ? " hidden" : " visible"}`}>
            <Image
              src="/images/logo_transparent.png"
              alt="Chromas Ensemble emblem"
              width={64}
              height={64}
              priority
            />
          </div>
          <div className={`brand wordmark${showWordmark ? " visible" : " hidden"}`}>
            <span className="brand-mark">Chromas</span>
            <span className="brand-sub">Ensemble</span>
          </div>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={isNavOpen}
            aria-controls="primary-nav"
            onClick={toggleNav}
          >
            Menu
          </button>
        </div>
      </header>
      <nav
        id="primary-nav"
        className={`site-nav-overlay${isNavOpen ? " open" : ""}`}
        aria-hidden={!isNavOpen}
      >
        <div className="nav-overlay-inner">
          <button
            type="button"
            className="nav-overlay-close"
            onClick={closeNav}
            aria-label="Close navigation"
          >
            ×
          </button>
          <ul className="nav-overlay-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={closeNav}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
