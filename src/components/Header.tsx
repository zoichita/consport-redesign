"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, MenuIcon, XIcon, ArrowUpRight } from "@/src/lib/icons";
import { navigation, site } from "@/src/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const scrolledRef = useRef(false);
  const scrollFrame = useRef<number | null>(null);

  useEffect(() => {
    const updateScrolledState = () => {
      scrollFrame.current = null;
      const threshold = scrolledRef.current ? 16 : 32;
      const nextScrolled = window.scrollY > threshold;
      if (nextScrolled !== scrolledRef.current) {
        scrolledRef.current = nextScrolled;
        setScrolled(nextScrolled);
      }
    };
    const onScroll = () => {
      if (scrollFrame.current === null) scrollFrame.current = window.requestAnimationFrame(updateScrolledState);
    };
    updateScrolledState();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollFrame.current !== null) window.cancelAnimationFrame(scrollFrame.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link href="/" className="brand" aria-label="CONSPORT — Αρχική">
          <Image src="/images/consport-logo-outlined.png" alt="CONSPORT" width={220} height={68} priority className="brand-logo" />
        </Link>

        <nav className="desktop-nav" aria-label="Κύρια πλοήγηση">
          {navigation.map((item) => (
            <div key={item.label} className="nav-item" onMouseEnter={() => item.children && setOpen(item.label)} onMouseLeave={() => setOpen(null)}>
              <Link href={item.href} className="nav-link">
                <span>{item.label}</span>{item.children && <ChevronDown className="nav-chevron" width={14} height={14} />}
              </Link>
              {item.children && open === item.label && (
                <div className="nav-dropdown">
                  {item.children.map((child) => <Link key={child.href} href={child.href} className="dropdown-link">{child.label}<ArrowUpRight width={14} height={14} /></Link>)}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="header-actions">
          <Link href="/contact" className="header-cta">Ζητήστε προσφορά <ArrowUpRight width={15} height={15} /></Link>
          <button className="menu-button" aria-label={mobileOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <XIcon width={23} height={23} /> : <MenuIcon width={23} height={23} />}
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${mobileOpen ? "is-open" : ""}`} aria-hidden={!mobileOpen}>
        <div className="mobile-panel-inner">
          <div className="mobile-kicker">CONSPORT / NAVIGATION</div>
          {navigation.map((item) => (
            <div key={item.label} className="mobile-nav-group">
              <Link href={item.href} onClick={() => setMobileOpen(false)} className="mobile-main-link">{item.label}<ArrowUpRight width={18} height={18} /></Link>
              {item.children && <div className="mobile-subnav">{item.children.map(child => <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}>{child.label}</Link>)}</div>}
            </div>
          ))}
          <div className="mobile-contact-line"><span>{site.phone}</span><span>{site.email}</span></div>
        </div>
      </div>
    </header>
  );
}
