import { ArrowRight, Flame, Leaf, Truck } from "lucide-react";
import { Link } from "react-router-dom";

import { ProductCard } from "../components/product-card";
import { PRODUCTS } from "../data/products";

const VALUES = [
  {
    icon: Leaf,
    title: "Langsung dari petani",
    text: "Kami membeli dari 14 kelompok tani di 6 provinsi dengan harga di atas pasar.",
  },
  {
    icon: Flame,
    title: "Sangrai segar",
    text: "Disangrai dua kali seminggu, dikirim maksimal 3 hari setelah sangrai.",
  },
  {
    icon: Truck,
    title: "Kirim ke seluruh Indonesia",
    text: "Gratis ongkir Jabodetabek untuk pembelian di atas Rp150.000.",
  },
];

export function HomePage() {
  return (
    <>
      <section className="bg-brand-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <p className="inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">
              Panen baru: Gayo Wine Process
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-brand-900 sm:text-5xl">
              Kopi Nusantara, disangrai segar untuk rumahmu.
            </h1>
            <p className="mt-4 text-lg text-stone-600">
              Biji kopi single origin dan alat seduh pilihan, dari kebun petani
              lokal langsung ke cangkirmu.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/produk"
                className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-900"
              >
                Lihat produk <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/harga"
                className="rounded-full border border-brand-700 px-6 py-3 font-semibold text-brand-700 hover:bg-brand-100"
              >
                Langganan bulanan
              </Link>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-500 to-brand-900">
            <div className="absolute inset-10 rounded-full border-[18px] border-white/15" />
            <div className="absolute inset-24 rounded-full bg-brand-900/60" />
            <p className="absolute bottom-6 left-6 text-sm font-semibold text-white/80">
              Roastery Kemang · sejak 2016
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-3">
        {VALUES.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-stone-200 p-6">
            <Icon className="h-6 w-6 text-brand-600" />
            <h3 className="mt-3 font-bold">{title}</h3>
            <p className="mt-1 text-sm text-stone-600">{text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-extrabold text-brand-900">Terlaris bulan ini</h2>
          <Link to="/produk" className="text-sm font-semibold text-brand-700 hover:underline">
            Semua produk
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.slice(0, 3).map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}
