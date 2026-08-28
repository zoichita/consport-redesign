import Link from "next/link";
import ScrollReveal from "@/src/components/ScrollReveal";
import SectionHeading from "@/src/components/SectionHeading";
import ProductCard from "@/src/components/ProductCard";
import ProjectCard from "@/src/components/ProjectCard";
import { products, projects, news } from "@/src/data/site";
import { ArrowUpRight, Layers, Ruler, Shield } from "@/src/lib/icons";
import Image from "next/image";
import HeroSlider from "@/src/components/HeroSlider";
import CertificationTicker from "@/src/components/CertificationTicker";

export default function Home() {
  return <>
    <section className="hero">
      <HeroSlider/><div className="hero-overlay"/>
      <div className="hero-content">
        <div className="eyebrow">Αθλητικές επιφάνειες / Ελλάδα</div>
        <h1>Χτίζουμε τις επιφάνειες όπου <em>η απόδοση</em> συναντά την ασφάλεια.</h1>
        <p className="hero-copy">Η CONSPORT εξειδικεύεται στην κατασκευή αθλητικών έργων, συνθετικών χλοοταπήτων, ελαστικών δαπέδων και ολοκληρωμένων λύσεων για αθλητικούς χώρους και παιδικές χαρές.</p>
        <div className="hero-actions"><Link href="/projects" className="button button-light">Δείτε τα έργα <ArrowUpRight width={17} height={17}/></Link><Link href="/contact" className="button button-outline">Ζητήστε προσφορά <ArrowUpRight width={17} height={17}/></Link></div>
        <CertificationTicker />
      </div>
    </section>

    <ScrollReveal><section className="section"><div className="container"><SectionHeading eyebrow="01 / Η εταιρεία" title="Τεχνογνωσία που φαίνεται στο έργο." href="/company" linkLabel="Γνωρίστε την CONSPORT"/><div className="intro-grid"><p className="intro-lead">Μια εξειδικευμένη ελληνική εταιρεία με μακρόχρονη εμπειρία σε εσωτερικά και εξωτερικά αθλητικά δάπεδα.</p><div className="intro-copy"><p>Η CONSPORT δραστηριοποιείται στην κατασκευή γηπέδων ποδοσφαίρου και τένις με συνθετικό χλοοτάπητα, γηπέδων μπάσκετ, βόλεϊ και τένις με ακρυλικά υλικά, καθώς και στην κατασκευή παιδικών χαρών και αθλητικών χώρων.</p><p>Η προσέγγιση είναι τεχνική και πρακτική: σωστή επιλογή υλικών, εφαρμογή σύμφωνα με τις απαιτήσεις του έργου και εξειδικευμένο συνεργείο.</p></div></div><div className="feature-line"><div className="feature-item"><strong>Εμπειρία</strong><span>Μακρόχρονη παρουσία στις αθλητικές κατασκευές.</span></div><div className="feature-item"><strong>Τεχνογνωσία</strong><span>Εξειδικευμένη εφαρμογή συστημάτων αθλητικών επιφανειών.</span></div><div className="feature-item"><strong>Αξιοπιστία</strong><span>Έμφαση στην ποιότητα υλικών και την ολοκλήρωση έργων.</span></div></div></div></section></ScrollReveal>

    <ScrollReveal><section className="section section-alt"><div className="container"><SectionHeading eyebrow="02 / Προϊόντα & υπηρεσίες" title="Τρεις κατευθύνσεις. Μία τεχνική ομάδα." description="Η νέα δομή συγκεντρώνει όλο το portfolio σε μία καθαρή εμπειρία, χωρίς να χάνεται η λεπτομέρεια των επιμέρους λύσεων." href="/products" linkLabel="Όλα τα προϊόντα"/><div className="product-grid">{products.map(p => <ProductCard key={p.slug} product={p}/>)}</div></div></section></ScrollReveal>

    <ScrollReveal><section className="section quality" id="quality"><div className="container quality-grid"><div><div className="eyebrow">03 / Ποιότητα & ασφάλεια</div><h2>Η ποιότητα δεν είναι υπόσχεση. Είναι διαδικασία.</h2><p className="quality-copy">Η CONSPORT έχει αναφερθεί από την ίδια την εταιρεία ως πιστοποιημένη κατά ΕΛΟΤ EN ISO 9001:2008, με έμφαση στη διαχείριση, προμήθεια υλικών, υλοποίηση και παρακολούθηση έργων και στη συνεχή βελτίωση των διαδικασιών.</p><div className="quality-list"><div className="quality-row"><Shield width={28} height={28} className="quality-icon"/><div><strong>Ποιότητα</strong><span>Συστηματική διαχείριση και έλεγχος των διαδικασιών του έργου.</span></div></div><div className="quality-row"><Ruler width={28} height={28} className="quality-icon"/><div><strong>Τεχνικές προδιαγραφές</strong><span>Επιλογές με διεθνείς ταξινομήσεις FIFA / ITF όπου εφαρμόζεται.</span></div></div><div className="quality-row"><Layers width={28} height={28} className="quality-icon"/><div><strong>Ασφάλεια</strong><span>Συστήματα ελαστικών επιφανειών και δαπέδων με στόχο την ασφαλή χρήση.</span></div></div></div></div><div className="cert-panel"><div className="big-mark">01</div><div className="cert-badge"><strong>ISO 9001:2008</strong><span>Πιστοποιητικό Συμμόρφωσης Ποιότητας σύμφωνα με το περιεχόμενο της υφιστάμενης ιστοσελίδας.</span></div></div></div></section></ScrollReveal>

    <ScrollReveal><section className="section"><div className="container"><SectionHeading eyebrow="04 / Επιλεγμένα έργα" title="Από την ιδέα στην τελική επιφάνεια." href="/projects" linkLabel="Δείτε όλα τα έργα"/><div className="projects-grid">{projects.slice(0,5).map((p,i) => <ProjectCard key={p.slug} project={p} featured={i===0}/>)}</div></div></section></ScrollReveal>

    <ScrollReveal><section className="section section-alt"><div className="container"><SectionHeading eyebrow="05 / Νέα" title="Από το έργο, στην ενημέρωση." href="/news" linkLabel="Όλα τα νέα"/><div className="news-grid">{news.slice(0,3).map(n => <Link href={`/news/${n.slug}`} className="news-card" key={n.slug}><div className="news-media"><Image src={n.image} alt={n.title} fill sizes="(max-width: 800px) 100vw, 33vw"/></div><div className="news-meta">{n.date}</div><h3>{n.title}</h3><p>{n.excerpt}</p></Link>)}</div></div></section></ScrollReveal>

    <section className="cta"><div className="container cta-grid"><div><div className="eyebrow" style={{color:"#fff"}}>06 / Επικοινωνία</div><h2>Σχεδιάζετε ένα νέο έργο;</h2><p>Μιλήστε με την ομάδα της CONSPORT για την κατάλληλη λύση αθλητικής επιφάνειας.</p></div><Link href="/contact" className="button">Επικοινωνήστε μαζί μας <ArrowUpRight width={17} height={17}/></Link></div></section>
  </>;
}
