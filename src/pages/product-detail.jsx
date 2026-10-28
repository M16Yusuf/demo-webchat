import { ArrowLeft, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import { ProductArt } from "../components/product-card";
import { PRODUCTS, formatRupiah } from "../data/products";
import { NotFoundPage } from "./not-found";

const GRIND_OPTIONS = ["Biji utuh", "Espresso", "V60 / Pour-over", "French press"];

export function ProductDetailPage() {
  const { slug } = useParams();
  const product = PRODUCTS.find((item) => item.slug === slug);
  const [quantity, setQuantity] = useState(1);
  const [grind, setGrind] = useState(GRIND_OPTIONS[0]);
  const [added, setAdded] = useState(false);

  if (!product) return <NotFoundPage />;

  const isBean = product.category === "Biji Kopi";

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <Link
        to="/produk"
        className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Kembali ke produk
      </Link>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <ProductArt product={product} className="aspect-square rounded-3xl" />

        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {product.category}
          </p>
          <h1 className="mt-1 text-3xl font-extrabold text-brand-900">{product.name}</h1>
          <p className="mt-3 text-2xl font-bold">
            {formatRupiah(product.price)}
            <span className="text-base font-normal text-stone-500"> / {product.unit}</span>
          </p>
          <p className="mt-4 text-stone-600">{product.description}</p>

          <dl className="mt-6 grid grid-cols-2 gap-4 rounded-2xl bg-brand-50 p-4 text-sm">
            <div>
              <dt className="text-stone-500">{isBean ? "Asal" : "Bahan"}</dt>
              <dd className="font-semibold">{product.origin}</dd>
            </div>
            {product.roast ? (
              <div>
                <dt className="text-stone-500">Tingkat sangrai</dt>
                <dd className="font-semibold">{product.roast}</dd>
              </div>
            ) : null}
            <div className="col-span-2">
              <dt className="text-stone-500">{isBean ? "Catatan rasa" : "Isi"}</dt>
              <dd className="font-semibold">{product.notes.join(", ")}</dd>
            </div>
          </dl>

          {isBean ? (
            <label className="mt-6 block text-sm font-semibold">
              Gilingan
              <select
                value={grind}
                onChange={(event) => setGrind(event.target.value)}
                className="mt-1 block w-full rounded-xl border border-stone-300 px-3 py-2 font-normal"
              >
                {GRIND_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </label>
          ) : null}

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center rounded-full border border-stone-300">
              <button
                type="button"
                className="p-3"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                aria-label="Kurangi"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center font-semibold">{quantity}</span>
              <button
                type="button"
                className="p-3"
                onClick={() => setQuantity((value) => value + 1)}
                aria-label="Tambah"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button
              type="button"
              onClick={() => setAdded(true)}
              className="flex-1 rounded-full bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-900"
            >
              Tambah ke keranjang
            </button>
          </div>
          {added ? (
            <p className="mt-3 text-sm text-emerald-700">
              {quantity} × {product.name} masuk keranjang (demo, tidak ada checkout).
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
