export const site = {
  name: "CONSPORT",
  strapline: "Κατασκευές Αθλητικών Έργων & Εμπορία Αθλητικών Ειδών",
  phone: "+30 2310 688 930",
  mobile: "+30 6988 130 628",
  email: "info@consport.gr",
  address: "Αφροδίτης 6, Νέα Ευκαρπία, Τ.Κ. 56429, Θεσσαλονίκη",
  colors: {
    green: "#106939",
    greenDark: "#0b4f2b",
    greenSoft: "#eaf4ee",
    orange: "#e3813f",
    ink: "#14201a",
    paper: "#f7f8f5"
  }
} as const;

export type NavigationItem = {
  label: string;
  href: string;
  children?: readonly {
    label: string;
    href: string;
  }[];
};

export const navigation: readonly NavigationItem[] = [
  { label: "Η εταιρεία", href: "/company", children: [
    { label: "Ποιοι είμαστε", href: "/company" },
    { label: "Ποιότητα & ασφάλεια", href: "/company#quality" }
  ]},
  { label: "Προϊόντα/Υπηρεσίες", href: "/products", children: [
    { label: "Συνθετικοί χλοοτάπητες", href: "/products/synthetic-turfs" },
    { label: "Ελαστικοί τάπητες", href: "/products/elastic-flooring" },
    { label: "Άλλα Προϊόντα-Υπηρεσίες", href: "/products/other-services" }
  ]},
  { label: "Έργα", href: "/projects" },
  { label: "Νέα", href: "/news" },
  { label: "Επικοινωνία", href: "/contact" }
];

export const products = [
  {
    slug: "synthetic-turfs",
    title: "Συνθετικοί χλοοτάπητες",
    eyebrow: "01 / Χλοοτάπητας",
    description: "Λύσεις συνθετικού χλοοτάπητα για γήπεδα ποδοσφαίρου και τένις, με επιλογές FIFA και ITF όπου εφαρμόζεται.",
    image: "/images/products/synthetic-turf.svg",
    subcategories: [
      "Οικολογικός συνθετικός χλοοτάπητας",
      "Συνθετικός χλοοτάπητας ποδοσφαίρου — Monofilament",
      "Συνθετικός χλοοτάπητας ποδοσφαίρου — Fibrillated",
      "Γήπεδα τένις με συνθετικό χλοοτάπητα"
    ]
  },
  {
    slug: "elastic-flooring",
    title: "Ελαστικοί τάπητες",
    eyebrow: "02 / Αθλητικά δάπεδα",
    description: "Ακρυλικά και πολυουρεθανικά συστήματα για μπάσκετ, βόλεϊ, τένις, χάντμπολ και διαδρόμους στίβου.",
    image: "/images/products/elastic-flooring.svg",
    subcategories: [
      "Ακρυλικά γήπεδα 2–3mm",
      "Ακρυλικά γήπεδα 4–10mm",
      "Πολυουρεθανικά γήπεδα 8–12mm",
      "Κατασκευή διαδρόμων στίβου"
    ]
  },
  {
    slug: "other-services",
    title: "Άλλα Προϊόντα-Υπηρεσίες",
    eyebrow: "03 / Συμπληρωματικές λύσεις",
    description: "Παιδικές χαρές, διακοσμητικοί χλοοτάπητες, αθλητικός εξοπλισμός, υλικά γηπέδων και συντήρηση.",
    image: "/images/products/other-services.svg",
    subcategories: [
      "Παιδικές χαρές",
      "Διακοσμητικοί χλοοτάπητες",
      "Αθλητικός εξοπλισμός",
      "Υλικά γηπέδων",
      "Συντήρηση γηπέδων"
    ]
  }
] as const;

export type Product = (typeof products)[number];

export const projects = [
  {
    slug: "football-training-centre",
    title: "Προπονητικό κέντρο ΠΑΕ ΠΑΟΚ",
    category: "Ποδόσφαιρο",
    tag: "FIFA",
    image: "/images/projects/football.svg",
    description: "Κατασκευή γηπέδου ποδοσφαίρου με συνθετικό χλοοτάπητα 60mm, FIFA 2 STAR, δίχρωμο monofilament, με αθλητικό εξοπλισμό.",
    details: ["Συνθετικός χλοοτάπητας 60mm", "FIFA 2 STAR", "Monofilament", "Αθλητικός εξοπλισμός"]
  },
  {
    slug: "outdoor-basketball",
    title: "Ανοικτό γήπεδο μπάσκετ",
    category: "Μπάσκετ",
    tag: "Ακρυλικά",
    image: "/images/projects/basketball.svg",
    description: "Αθλητικό δάπεδο εξωτερικού χώρου με ακρυλικά υλικά και ολοκληρωμένες διαγραμμίσεις.",
    details: ["Ακρυλικό σύστημα", "Εξωτερικός χώρος", "Διαγραμμίσεις γηπέδου"]
  },
  {
    slug: "tennis-and-track",
    title: "Τένις & στίβος",
    category: "Τένις / Στίβος",
    tag: "ITF",
    image: "/images/projects/tennis.svg",
    description: "Κατασκευή 2 γηπέδων τένις και ενός στίβου με πιστοποιημένα υλικά και προδιαγραφές ITF.",
    details: ["2 γήπεδα τένις", "Διάδρομος στίβου", "Προδιαγραφές ITF"]
  },
  {
    slug: "football-fields",
    title: "Γήπεδα ποδοσφαίρου",
    category: "Ποδόσφαιρο",
    tag: "55mm",
    image: "/images/projects/salamina.svg",
    description: "Εξ ολοκλήρου κατασκευή γηπέδων με αντικραδασμικό υπόστρωμα 8mm και συνθετικό χλοοτάπητα 55mm.",
    details: ["Αντικραδασμικό 8mm", "Χλοοτάπητας 55mm", "Monofilament"]
  },
  {
    slug: "tennis-courts",
    title: "Γήπεδα τένις",
    category: "Τένις",
    tag: "2.000m²",
    image: "/images/projects/tennis-blue.svg",
    description: "Κατασκευή τριών γηπέδων τένις εξωτερικού χώρου με ακρυλικά υλικά.",
    details: ["3 γήπεδα", "2.000m² συνολικά", "Ακρυλικά υλικά"]
  },
  {
    slug: "football-pitch-11x11",
    title: "Γήπεδο 11×11",
    category: "Ποδόσφαιρο",
    tag: "6.500m²",
    image: "/images/projects/large-field.svg",
    description: "Κατασκευή γηπέδου 11×11, 6.500m², με συνθετικό χλοοτάπητα 60mm και προδιαγραφές FIFA.",
    details: ["11×11", "6.500m²", "Χλοοτάπητας 60mm", "Προδιαγραφές FIFA"]
  },
  {
    slug: "indoor-basketball",
    title: "Κλειστό γήπεδο μπάσκετ",
    category: "Μπάσκετ",
    tag: "SBR",
    image: "/images/projects/indoor.svg",
    description: "Αντικραδασμικό ρολό SBR 6mm και ακρυλικά υλικά γηπέδων σε κλειστό γυμναστήριο.",
    details: ["SBR 6mm", "Ακρυλικά υλικά", "Κλειστό γυμναστήριο"]
  },
  {
    slug: "acrylic-basketball",
    title: "Γήπεδο μπάσκετ",
    category: "Μπάσκετ",
    tag: "677m²",
    image: "/images/projects/track.svg",
    description: "Ακρυλική τελική επιφάνεια πάνω σε αντικραδασμικό ρολό 4mm, συνολικής επιφάνειας 677m².",
    details: ["677m²", "Αντικραδασμικό 4mm", "Ακρυλικό σύστημα"]
  }
] as const;

export type Project = (typeof projects)[number];

export const news = [
  {
    slug: "tennis-maintenance",
    title: "Βαφή και συντήρηση γηπέδων τένις",
    excerpt: "Εξειδικευμένες εργασίες συντήρησης και ανανέωσης αθλητικών επιφανειών.",
    date: "Νέα",
    image: "/images/projects/tennis-blue.svg"
  },
  {
    slug: "larisa-basketball-volleyball",
    title: "Κατασκευή γηπέδων μπάσκετ & βόλεϊ στη Λάρισα",
    excerpt: "Υψηλής ποιότητας ελαστικά ακρυλικά υλικά για σύγχρονες αθλητικές επιφάνειες.",
    date: "Νέα",
    image: "/images/projects/basketball.svg"
  },
  {
    slug: "asprovalta-tennis",
    title: "Κατασκευή γηπέδων τένις στην Ασπροβάλτα",
    excerpt: "Γήπεδα με υλικά υψηλής ποιότητας και προδιαγραφές ITF.",
    date: "Νέα",
    image: "/images/projects/tennis.svg"
  },
  {
    slug: "thalassia-football",
    title: "Κατασκευή γηπέδου ποδοσφαίρου στη Θαλασσιά Ξάνθης",
    excerpt: "Σύγχρονη επιφάνεια ποδοσφαίρου με συνθετικό χλοοτάπητα.",
    date: "Νέα",
    image: "/images/projects/football.svg"
  },
  {
    slug: "polichni-tennis",
    title: "Κατασκευή γηπέδου τένις στην Πολίχνη Θεσσαλονίκης",
    excerpt: "Νέα αθλητική επιφάνεια για γήπεδο τένις.",
    date: "Νέα",
    image: "/images/projects/tennis-blue.svg"
  },
  {
    slug: "tefaa-football",
    title: "Γήπεδο ποδοσφαίρου στα ΤΕΦΑΑ Θεσσαλονίκης",
    excerpt: "Κατασκευή γηπέδου με συνθετικό χλοοτάπητα τελευταίας γενιάς.",
    date: "Νέα",
    image: "/images/projects/large-field.svg"
  }
] as const;

export const officialSidebar = {
  news: {
    id: "sidebar-news",
    title: "Εφαρμογή και κατασκευή κόμβου με διακοσμητικό συνθετικό χλοοτάπητα",
    image: "/images/sidebar/latest-news.jpg",
    href: "/news",
    moreLabel: "Περισσότερα..."
  },
  latestProject: {
    id: "sidebar-project",
    title: "Κατασκευή γηπεδου ποδοσφαίρου με οικολογικό συνθετικο χλοοτάπητα υψηλης ποιότητας",
    image: "/images/sidebar/latest-project.jpg",
    href: "/projects",
    moreLabel: "Περισσότερα..."
  },
  projects: {
    label: "Δείτε περισσότερα έργα >>",
    href: "/projects"
  },
  facebook: {
    href: "https://www.facebook.com/pages/Consport/414688311964972"
  },
  certifications: {
    href: "/company#quality",
    image: "/images/sidebar/certifications.png"
  }
} as const;
