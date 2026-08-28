"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { officialSidebar } from "@/src/data/site";
import { ArrowUpRight } from "@/src/lib/icons";

export default function NewsFloatingPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  const cancelClose = () => {
    if (closeTimer.current !== undefined) window.clearTimeout(closeTimer.current);
  };

  const openPanel = () => {
    cancelClose();
    setIsOpen(true);
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = window.setTimeout(() => setIsOpen(false), 120);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (isOpen && panelRef.current && !panelRef.current.contains(event.target as Node)) setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
      cancelClose();
    };
  }, [isOpen]);

  return (
    <aside ref={panelRef} className={`news-floating ${isOpen ? "is-open" : ""}`} aria-label="Πλευρικό πάνελ ενημερώσεων">
      <button
        type="button"
        className="news-floating-tab"
        aria-label={isOpen ? "Κλείσιμο Νέων" : "Άνοιγμα Νέων"}
        aria-controls="news-floating-content"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(open => !open)}
        onMouseEnter={openPanel}
        onMouseLeave={scheduleClose}
        onFocus={openPanel}
      >
        ΝΕΑ
      </button>

      <section
        id="news-floating-content"
        className="news-floating-content"
        aria-hidden={!isOpen}
        inert={!isOpen}
        onMouseEnter={openPanel}
        onMouseLeave={scheduleClose}
      >
        <div className="news-floating-heading"><span>CONSPORT</span><h2>Νέα</h2><button type="button" onClick={() => setIsOpen(false)} aria-label="Κλείσιμο πάνελ Νέων">×</button></div>

        <SidebarFeature title="Νέα" item={officialSidebar.news} onNavigate={() => setIsOpen(false)} />
        <SidebarFeature title="Τελευταία έργα" item={officialSidebar.latestProject} onNavigate={() => setIsOpen(false)} />

        <Link href={officialSidebar.projects.href} className="news-floating-more" onClick={() => setIsOpen(false)}>
          {officialSidebar.projects.label} <ArrowUpRight width={15} height={15} />
        </Link>

        <section className="news-floating-social" aria-labelledby="facebook-heading">
          <h3 id="facebook-heading">Δείτε μας στο Facebook</h3>
          <a href={officialSidebar.facebook.href} target="_blank" rel="noreferrer">CONSPORT στο Facebook <ArrowUpRight width={15} height={15} /></a>
        </section>

        <section className="news-floating-certifications" aria-labelledby="certifications-heading">
          <h3 id="certifications-heading">Πιστοποιήσεις</h3>
          <Link href={officialSidebar.certifications.href} onClick={() => setIsOpen(false)}>
            <Image src={officialSidebar.certifications.image} alt="Πιστοποιήσεις CONSPORT" width={219} height={125} sizes="(max-width: 820px) 78vw, 360px" />
          </Link>
        </section>
      </section>
    </aside>
  );
}

type SidebarItem = typeof officialSidebar.news | typeof officialSidebar.latestProject;

function SidebarFeature({ title, item, onNavigate }: { title: string; item: SidebarItem; onNavigate: () => void }) {
  return (
    <section className="news-floating-section" aria-labelledby={`${item.id}-heading`}>
      <h3 id={`${item.id}-heading`}>{title}</h3>
      <Link href={item.href} className="news-floating-item" onClick={onNavigate}>
        <div className="news-floating-image"><Image src={item.image} alt="" fill sizes="(max-width: 820px) 78vw, 360px" /></div>
        <strong>{item.title}</strong>
        <span>{item.moreLabel} <ArrowUpRight width={14} height={14} /></span>
      </Link>
    </section>
  );
}
