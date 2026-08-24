import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.consport.gr"),
  title: { default: "CONSPORT | Κατασκευές Αθλητικών Έργων", template: "%s | CONSPORT" },
  description: "Κατασκευές αθλητικών έργων, συνθετικοί χλοοτάπητες, ελαστικοί τάπητες, παιδικές χαρές και αθλητικός εξοπλισμός από την CONSPORT.",
  openGraph: { title: "CONSPORT | Κατασκευές Αθλητικών Έργων", description: "Αθλητικές επιφάνειες, συνθετικοί χλοοτάπητες και ολοκληρωμένες λύσεις αθλητικών έργων.", locale: "el_GR", type: "website" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="el"><body><a className="skip-link" href="#main">Μετάβαση στο περιεχόμενο</a><Header/><main id="main">{children}</main><Footer/></body></html>;
}
