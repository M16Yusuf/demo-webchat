import { Coffee } from "lucide-react";
import { Link } from "react-router-dom";

import { formatRupiah } from "../data/products";

export function ProductArt({ product, className = "" }) {
  return (
    <div
      className={`grid place-items-center bg-gradient-to-br ${product.color} ${className}`}
    >
      <Coffee className="h-12 w-12 text-white/80" strokeWidth={1.5} />
    </div>
  );
}

export function ProductCard({ product }) {
  return (
    <Link
      to={`/produk/${product.slug}`}
      className="group overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <ProductArt product={product} className="aspect-[4/3]" />
      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
          {product.category}
        </p>
        <h3 className="mt-1 font-bold text-stone-900 group-hover:text-brand-700">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-stone-500">{product.notes.join(" · ")}</p>
        <p className="mt-3 font-bold text-brand-900">
          {formatRupiah(product.price)}
          <span className="text-sm font-normal text-stone-500"> / {product.unit}</span>
        </p>
      </div>
    </Link>
  );
}
