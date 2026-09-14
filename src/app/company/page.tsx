import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/src/components/ScrollReveal";
import SectionHeading from "@/src/components/SectionHeading";
import { ArrowUpRight } from "@/src/lib/icons";

export const metadata: Metadata = {
  title: "Η εταιρεία",
  description: "Το εταιρικό προφίλ, η τεχνογνωσία και η προσέγγιση ποιότητας της CONSPORT.",
};

export default function Company() {
  return <>
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumbs">Αρχική / Η εταιρεία</div>
        <h1>Η εταιρεία πίσω από τις επιφάνειες.</h1>
        <p>Η CONSPORT δραστηριοποιείται στον χώρο των εσωτερικών και εξωτερικών αθλητικών δαπέδων, με έμφαση στην ποιότητα υλικών, την εφαρμογή και την τεχνική εξειδίκευση.</p>
      </div>
    </section>

    <ScrollReveal>
      <section className="section">
        <div className="container">
          <div className="intro-grid">
            <p className="intro-lead">Κατασκευές γηπέδων 5×5, μπάσκετ, βόλεϊ, τένις και παιδικών χαρών με υλικά υψηλών προδιαγραφών.</p>
            <div className="intro-copy">
              <p>Η CONSPORT δραστηριοποιείται για περισσότερο από μία δεκαετία στην Ελλάδα, προμηθεύοντας και εφαρμόζοντας υλικά για αθλητικούς χώρους και παιδικές χαρές.</p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <ScrollReveal>
      <section className="section section-alt">
        <div className="container">
          <SectionHeading eyebrow="01 / Η εταιρεία" title="Τεχνογνωσία που φαίνεται στο έργο." />
          <div className="intro-grid">
            <p className="intro-lead">Μια εξειδικευμένη ελληνική εταιρεία με μακρόχρονη εμπειρία σε εσωτερικά και εξωτερικά αθλητικά δάπεδα.</p>
            <div className="intro-copy">
              <p>Η CONSPORT δραστηριοποιείται στην κατασκευή γηπέδων ποδοσφαίρου και τένις με συνθετικό χλοοτάπητα, γηπέδων μπάσκετ, βόλεϊ και τένις με ακρυλικά υλικά, καθώς και στην κατασκευή παιδικών χαρών και αθλητικών χώρων.</p>
              <p>Η προσέγγιση είναι τεχνική και πρακτική: σωστή επιλογή υλικών, εφαρμογή σύμφωνα με τις απαιτήσεις του έργου και εξειδικευμένο συνεργείο.</p>
            </div>
          </div>
          <div className="feature-line">
            <div className="feature-item"><strong>Εμπειρία</strong><span>Μακρόχρονη παρουσία στις αθλητικές κατασκευές.</span></div>
            <div className="feature-item"><strong>Τεχνογνωσία</strong><span>Εξειδικευμένη εφαρμογή συστημάτων αθλητικών επιφανειών.</span></div>
            <div className="feature-item"><strong>Αξιοπιστία</strong><span>Έμφαση στην ποιότητα υλικών και την ολοκλήρωση έργων.</span></div>
          </div>
        </div>
      </section>
    </ScrollReveal>

    <section className="section quality company-quality" id="quality">
      <div className="container quality-grid">
        <div>
          <div className="eyebrow">02 / Ποιότητα & ασφάλεια</div>
          <h2>Έλεγχος σε κάθε στάδιο.</h2>
          <p className="quality-copy">Η υφιστάμενη ιστοσελίδα αναφέρει πιστοποίηση ΕΛΟΤ EN ISO 9001:2008 και διαδικασίες που καλύπτουν διαχείριση, προμήθεια υλικών, υλοποίηση και παρακολούθηση έργων, πρόληψη αστοχιών και εσωτερική επιθεώρηση.</p>
        </div>
        <div className="cert-panel">
          <div className="big-mark">ISO</div>
          <div className="cert-badge">
            <strong>9001:2008</strong>
            <span>Πιστοποιητικό Συμμόρφωσης Ποιότητας σύμφωνα με το υφιστάμενο εταιρικό περιεχόμενο.</span>
          </div>
        </div>
      </div>
    </section>

    <section className="cta">
      <div className="container cta-grid">
        <div><h2>Θέλετε να δούμε το έργο σας;</h2></div>
        <Link href="/contact" className="button">Επικοινωνία <ArrowUpRight width={17} height={17} /></Link>
      </div>
    </section>
  </>;
}
