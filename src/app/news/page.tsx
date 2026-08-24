import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { news } from "@/src/data/site";
export const metadata: Metadata = { title: "Νέα", description: "Νέα και ενημερώσεις από τα έργα και τις εφαρμογές της CONSPORT." };
export default function News(){return <><section className="page-hero"><div className="container"><div className="breadcrumbs">Αρχική / Νέα</div><h1>Νέα από το έργο.</h1><p>Ενημερώσεις, εφαρμογές και πρόσφατες κατασκευές από το αρχείο περιεχομένου της CONSPORT.</p></div></section><section className="section"><div className="container"><div className="news-grid">{news.map(n=><Link className="news-card" href={`/news/${n.slug}`} key={n.slug}><div className="news-media"><Image src={n.image} alt={n.title} fill sizes="(max-width: 800px) 100vw, 33vw"/></div><div className="news-meta">{n.date}</div><h3>{n.title}</h3><p>{n.excerpt}</p></Link>)}</div></div></section></>}
