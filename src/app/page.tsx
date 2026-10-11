import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/src/components/ScrollReveal";
import SectionHeading from "@/src/components/SectionHeading";
import ProductCard from "@/src/components/ProductCard";
import ProjectCard from "@/src/components/ProjectCard";
import HeroSlider from "@/src/components/HeroSlider";
import CertificationTicker from "@/src/components/CertificationTicker";
import { products, projects, news } from "@/src/data/site";
import { ArrowUpRight, Layers, MapPin, Ruler, Shield } from "@/src/lib/icons";

export default function Home() {
  const selectedProjects = [projects[1], projects[2], projects[0]];
  const productOverlayItems = [
    ["ΓΗΠΕΔΑ ΠΟΔΟΣΦΑΙΡΟΥ", "ΓΗΠΕΔΑ ΤΕΝΙΣ"],
    ["ΓΗΠΕΔΑ ΜΠΑΣΚΕΤ", "ΓΗΠΕΔΑ ΤΕΝΙΣ", "ΓΗΠΕΔΑ ΒΟΛΕΪ", "ΓΗΠΕΔΑ ΧΑΝΤΜΠΟΛ", "ΔΙΑΔΡΟΜΟΙ ΣΤΙΒΟΥ"],
    ["ΠΑΙΔΙΚΕΣ ΧΑΡΕΣ", "ΔΙΑΚΟΣΜΗΤΙΚΟΙ ΧΛΟΟΤΑΠΗΤΕΣ", "ΑΘΛΗΤΙΚΟΣ ΕΞΟΠΛΙΣΜΟΣ", "ΥΛΙΚΑ ΚΑΙ ΣΥΝΤΗΡΗΣΗ ΓΗΠΕΔΩΝ"],
  ] as const;

  return <>
    <section className="hero">
      <HeroSlider />
      <div className="hero-overlay" />
      <div className="hero-content">
        <div className="eyebrow">Αθλητικές επιφάνειες / Ελλάδα</div>
        <h1 className="hero-direction-heading">
          <span className="hero-direction-main">ΤΡΕΙΣ ΚΑΤΕΥΘΥΝΣΕΙΣ</span>
          <span className="hero-direction-categories">
            <span>ΣΥΝΘΕΤΙΚΟΙ ΧΛΟΟΤΑΠΗΤΕΣ</span>
            <span>ΕΛΑΣΤΙΚΟΙ ΤΑΠΗΤΕΣ</span>
            <span>ΑΛΛΑ ΠΡΟΪΟΝΤΑ/ΥΠΗΡΕΣΙΕΣ</span>
          </span>
        </h1>
        <p className="hero-copy">Η CONSPORT εξειδικεύεται στην κατασκευή αθλητικών έργων, συνθετικών χλοοταπήτων, ελαστικών δαπέδων και ολοκληρωμένων λύσεων για αθλητικούς χώρους και παιδικές χαρές.</p>
        <div className="hero-actions">
          <Link href="/projects" className="button button-light">Δείτε τα έργα <ArrowUpRight width={17} height={17} /></Link>
          <Link href="/contact" className="button button-outline">Ζητήστε προσφορά <ArrowUpRight width={17} height={17} /></Link>
        </div>
      </div>
      <CertificationTicker />
    </section>

    <div className="home-shell">
      <aside className="home-info-rail" aria-label="Στοιχεία CONSPORT">
        <article className="home-info-card"><MapPin width={20} height={20} /><span>Εδραιωμένη Παρουσία στην Ελλάδα</span></article>
        <article className="home-info-card"><Ruler width={20} height={20} /><span>1.000+ Έργα</span></article>
        <article className="home-info-card"><MapPin width={20} height={20} /><span>Παρουσία σε Όλα τα Βαλκάνια</span></article>
        <article className="home-info-card"><Shield width={20} height={20} /><span>ISO Certified</span></article>
        <article className="home-info-card"><Layers width={20} height={20} /><span>Eco-Friendly</span></article>
      </aside>

      <div className="home-main-flow">
        <ScrollReveal>
          <section className="section">
            <div className="container">
              <SectionHeading eyebrow="01 / Επιλεγμένα έργα" title="Από την ιδέα στην τελική επιφάνεια." href="/projects" linkLabel="Δείτε όλα τα έργα" />
              <div className="projects-grid homepage-selected-projects">
                {selectedProjects.map(project => <ProjectCard key={project.slug} project={project} />)}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="section section-alt">
            <div className="container">
              <SectionHeading eyebrow="02 / Προϊόντα & υπηρεσίες" title="Τρεις κατευθύνσεις. Μία τεχνική ομάδα." description="Η νέα δομή συγκεντρώνει όλο το portfolio σε μία καθαρή εμπειρία, χωρίς να χάνεται η λεπτομέρεια των επιμέρους λύσεων." href="/products" linkLabel="Όλα τα προϊόντα" />
              <div className="product-grid">{products.map((product, index) => <ProductCard key={product.slug} product={product} overlayItems={productOverlayItems[index]} />)}</div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="section section-alt">
            <div className="container">
              <SectionHeading eyebrow="03 / Νέα" title="Από το έργο, στην ενημέρωση." href="/news" linkLabel="Όλα τα νέα" />
              <div className="news-grid">
                {news.slice(0, 3).map(item => <Link href={`/news/${item.slug}`} className="news-card" key={item.slug}>
                  <div className="news-media"><Image src={item.image} alt={item.title} fill sizes="(max-width: 800px) 100vw, 33vw" /></div>
                  <div className="news-meta">{item.date}</div>
                  <h3>{item.title}</h3>
                  <p>{item.excerpt}</p>
                </Link>)}
              </div>
            </div>
          </section>
        </ScrollReveal>

      </div>
    </div>

    <section className="cta">
      <div className="container cta-grid">
        <div>
          <div className="eyebrow" style={{ color: "#fff" }}>04 / Επικοινωνία</div>
          <h2>Σχεδιάζετε ένα νέο έργο;</h2>
          <p>Μιλήστε με την ομάδα της CONSPORT για την κατάλληλη λύση αθλητικής επιφάνειας.</p>
        </div>
        <Link href="/contact" className="button">Επικοινωνήστε μαζί μας <ArrowUpRight width={17} height={17} /></Link>
      </div>
    </section>
  </>;
}
