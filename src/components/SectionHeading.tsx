import Link from "next/link";
import { ArrowRight } from "@/src/lib/icons";

export default function SectionHeading({ eyebrow, title, description, href, linkLabel }: { eyebrow: string; title: string; description?: string; href?: string; linkLabel?: string }) {
  return <div className="section-heading">
    <div><div className="eyebrow">{eyebrow}</div><h2>{title}</h2></div>
    <div className="section-heading-side">{description && <p>{description}</p>}{href && <Link href={href} className="text-link">{linkLabel || "Δείτε περισσότερα"}<ArrowRight width={17} height={17}/></Link>}</div>
  </div>;
}
