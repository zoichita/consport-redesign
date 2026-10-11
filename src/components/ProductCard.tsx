import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@/src/lib/icons";
import type { Product } from "@/src/data/site";

export default function ProductCard({ product, overlayItems }: { product: Product; overlayItems?: readonly string[] }) {
  if (overlayItems) {
    return <Link href={`/products/${product.slug}`} className="product-card homepage-product-card">
      <div className="product-media">
        <Image src={product.image} alt="" fill sizes="(max-width: 800px) 100vw, 33vw" />
        <div className="product-image-overlay">
          <h3>{product.title}</h3>
          <ul>{overlayItems.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
      </div>
    </Link>;
  }

  return <Link href={`/products/${product.slug}`} className="product-card">
    <div className="product-media"><Image src={product.image} alt="" fill sizes="(max-width: 800px) 100vw, 33vw" /><span>{product.eyebrow}</span></div>
    <div className="product-copy"><h3>{product.title}</h3><p>{product.description}</p><div className="product-link">Εξερευνήστε <ArrowUpRight width={17} height={17}/></div></div>
  </Link>;
}
