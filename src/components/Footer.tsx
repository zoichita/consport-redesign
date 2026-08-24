import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, ArrowUpRight } from "@/src/lib/icons";
import { navigation, products, site } from "@/src/data/site";

export default function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-brand">
        <Image src="/images/consport-logo.jpg" alt="CONSPORT" width={210} height={65} className="footer-logo" />
        <p>{site.strapline}</p>
        <Link href="/contact" className="text-link">Μιλήστε μαζί μας <ArrowUpRight width={16} height={16}/></Link>
      </div>
      <div><div className="footer-label">Πλοήγηση</div><div className="footer-links">{navigation.map(n => <Link key={n.href} href={n.href}>{n.label}</Link>)}</div></div>
      <div><div className="footer-label">Προϊόντα / Υπηρεσίες</div><div className="footer-links">{products.map(p => <Link key={p.slug} href={`/products/${p.slug}`}>{p.title}</Link>)}</div></div>
      <div><div className="footer-label">Επικοινωνία</div><div className="footer-contact"><a href={`tel:${site.phone.replace(/\s/g, "")}`}><Phone width={17} height={17}/>{site.phone}</a><a href={`mailto:${site.email}`}><Mail width={17} height={17}/>{site.email}</a><span><MapPin width={17} height={17}/>{site.address}</span></div></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} CONSPORT. Με επιφύλαξη παντός δικαιώματος.</span><div><Link href="/privacy">Πολιτική Απορρήτου</Link><Link href="/cookies">Cookies</Link></div></div>
  </footer>;
}
