"use client";
import { useMemo, useState } from "react";
import type { Project } from "@/src/data/site";
import ProjectCard from "./ProjectCard";

export default function ProjectFilter({ projects }: { projects: readonly Project[] }) {
  const categories = ["Όλα", ...Array.from(new Set(projects.map(p => p.category)))];
  const [active, setActive] = useState("Όλα");
  const filtered = useMemo(() => active === "Όλα" ? projects : projects.filter(p => p.category === active), [active, projects]);
  return <>
    <div className="filter-bar" role="tablist" aria-label="Φίλτρο έργων">{categories.map(c => <button key={c} className={active === c ? "active" : ""} onClick={() => setActive(c)} role="tab" aria-selected={active === c}>{c}</button>)}</div>
    <div className="projects-grid">{filtered.map((p, i) => <ProjectCard key={p.slug} project={p} featured={i === 0} />)}</div>
  </>;
}
