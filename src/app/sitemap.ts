import type { MetadataRoute } from "next";
import { products, projects, news } from "@/src/data/site";
export default function sitemap(): MetadataRoute.Sitemap { const base="https://www.consport.gr"; return ["/","/company","/products","/projects","/news","/contact","/privacy","/cookies",...products.map(p=>`/products/${p.slug}`),...projects.map(p=>`/projects/${p.slug}`),...news.map(n=>`/news/${n.slug}`)].map(path=>({url:`${base}${path}`,lastModified:new Date()})); }
