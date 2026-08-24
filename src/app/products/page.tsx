import type { Metadata } from "next";
import ScrollReveal from "@/src/components/ScrollReveal";
import SectionHeading from "@/src/components/SectionHeading";
import ProductCard from "@/src/components/ProductCard";
import { products } from "@/src/data/site";
export const metadata: Metadata = { title: "Προϊόντα / Υπηρεσίες", description: "Συνθετικοί χλοοτάπητες, ελαστικοί τάπητες και άλλες λύσεις της CONSPORT." };
export default function Products(){return <><section className="page-hero"><div className="container"><div className="breadcrumbs">Αρχική / Προϊόντα & Υπηρεσίες</div><h1>Λύσεις για κάθε αθλητική επιφάνεια.</h1><p>Η νέα δομή συγκεντρώνει το portfolio της CONSPORT σε τρεις ξεκάθαρες κατευθύνσεις, διατηρώντας τις επιμέρους εφαρμογές και τεχνικές πληροφορίες.</p></div></section><ScrollReveal><section className="section"><div className="container"><SectionHeading eyebrow="01 / Portfolio" title="Επιλέξτε την κατεύθυνση που χρειάζεστε."/><div className="product-grid">{products.map(p => <ProductCard key={p.slug} product={p}/>)}</div></div></section></ScrollReveal></>}
