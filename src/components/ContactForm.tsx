"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight } from "@/src/lib/icons";
import { site } from "@/src/data/site";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) { setError("Συμπληρώστε τα υποχρεωτικά πεδία."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("Συμπληρώστε ένα έγκυρο email."); return; }
    const subject = encodeURIComponent(String(data.get("subject") || "Νέο αίτημα επικοινωνίας από το consport.gr"));
    const body = encodeURIComponent(`Ονοματεπώνυμο: ${name}\nEmail: ${email}\nΤηλέφωνο: ${String(data.get("phone") || "")}\n\n${message}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  }
  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-grid"><label>Ονοματεπώνυμο *<input name="name" required autoComplete="name" /></label><label>Email *<input name="email" type="email" required autoComplete="email" /></label><label>Τηλέφωνο<input name="phone" type="tel" autoComplete="tel" /></label><label>Θέμα *<input name="subject" required /></label></div>
    <label>Μήνυμα *<textarea name="message" rows={7} required /></label>
    <div className="form-footer"><span>Με την αποστολή θα ανοίξει το προεπιλεγμένο email σας.</span><button type="submit" className="button button-dark">Αποστολή <ArrowUpRight width={17} height={17}/></button></div>
    {error && <p className="form-error" role="alert">{error}</p>}
    {sent && <p className="form-success" role="status">Το αίτημα δημιουργήθηκε. Ελέγξτε το email σας για την αποστολή.</p>}
  </form>;
}
