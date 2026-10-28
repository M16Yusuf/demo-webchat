import { useState } from "react";

import { ProductCard } from "../components/product-card";
import { PRODUCTS } from "../data/products";

const CATEGORIES = ["Semua", ...new Set(PRODUCTS.map((product) => product.category))];

export function ProductsPage() {
  const [category, setCategory] = useState("Semua");
  const items =
    category === "Semua"
      ? PRODUCTS
      : PRODUCTS.filter((product) => product.category === category);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-extrabold text-brand-900">Produk</h1>
      <p className="mt-2 text-stone-600">
        Biji kopi disangrai sesuai pesanan. Bisa digiling sesuai alat seduhmu.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {CATEGORIES.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ${
              category === item
                ? "bg-brand-700 text-white"
                : "bg-stone-100 text-stone-700 hover:bg-stone-200"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
