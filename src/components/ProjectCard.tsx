import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "@/src/lib/icons";
import type { Project } from "@/src/data/site";

export default function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return <Link href={`/projects/${project.slug}`} className={`project-card ${featured ? "project-card-featured" : ""}`}>
    <div className="project-media"><Image src={project.image} alt={project.title} fill sizes="(max-width: 800px) 100vw, 50vw" /><div className="project-overlay"><span>Δείτε το έργο <ArrowUpRight width={18} height={18}/></span></div><span className="project-tag">{project.tag}</span></div>
    <div className="project-copy"><div><div className="project-category">{project.category}</div><h3>{project.title}</h3><div className="project-location"><MapPin width={14} height={14}/>{project.location}</div></div><ArrowUpRight width={20} height={20} className="project-arrow"/></div>
  </Link>;
}
