"use client";
import Image from "next/image";
import { useState } from "react";
import { XIcon, ArrowUpRight } from "@/src/lib/icons";

export default function LightboxGallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState<number | null>(null);
  return <>
    <div className="gallery-grid">{images.map((src, i) => <button key={src} className="gallery-item" onClick={() => setActive(i)} aria-label={`Άνοιγμα εικόνας ${i + 1}`}><Image src={src} alt={`${title} — εικόνα ${i + 1}`} fill sizes="(max-width: 800px) 100vw, 33vw" /><span><ArrowUpRight width={18} height={18}/></span></button>)}</div>
    {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Προβολή εικόνας" onClick={() => setActive(null)}><button className="lightbox-close" onClick={() => setActive(null)} aria-label="Κλείσιμο"><XIcon width={24} height={24}/></button><div className="lightbox-image" onClick={e => e.stopPropagation()}><Image src={images[active]} alt={`${title} — εικόνα ${active + 1}`} fill sizes="100vw" /></div></div>}
  </>;
}
