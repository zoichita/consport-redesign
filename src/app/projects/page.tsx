import type { Metadata } from "next";
import ProjectFilter from "@/src/components/ProjectFilter";
import { projects } from "@/src/data/site";
export const metadata: Metadata = { title: "Έργα", description: "Επιλεγμένα έργα CONSPORT σε αθλητικές εγκαταστάσεις και αθλητικές επιφάνειες." };
export default function Projects(){return <><section className="page-hero"><div className="container"><div className="breadcrumbs">Αρχική / Έργα</div><h1>Έργα που μιλούν με εικόνες.</h1><p>Ένα οπτικό portfolio αθλητικών εγκαταστάσεων, με έμφαση στην επιφάνεια, τη λεπτομέρεια και το τελικό αποτέλεσμα.</p></div></section><section className="section"><div className="container"><ProjectFilter projects={projects}/></div></section></>}
