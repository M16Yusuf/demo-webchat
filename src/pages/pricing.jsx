import { Check } from "lucide-react";
import { Link } from "react-router-dom";

import { PLANS, formatRupiah } from "../data/products";

const FAQ = [
  {
    q: "Bisa berhenti langganan kapan saja?",
    a: "Bisa. Batalkan sebelum tanggal 25 dan pengiriman bulan berikutnya tidak akan diproses.",
  },
  {
    q: "Kapan kopi dikirim?",
    a: "Setiap tanggal 1–3, maksimal 3 hari setelah disangrai.",
  },
  {
    q: "Apakah bisa pilih origin sendiri?",
    a: "Paket Barista Rumahan bisa menukar satu origin per bulan lewat chat dengan tim kami.",
  },
];

export function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-brand-900">Langganan kopi bulanan</h1>
        <p className="mt-2 text-stone-600">
          Kopi segar datang sendiri setiap bulan. Hemat hingga 20% dari harga satuan.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PLANS.map((plan) => (
          <div
            key={plan.key}
            className={`flex flex-col rounded-3xl border p-6 ${
              plan.highlighted
                ? "border-brand-700 bg-brand-900 text-white shadow-xl"
                : "border-stone-200 bg-white"
            }`}
          >
            {plan.highlighted ? (
              <span className="mb-3 self-start rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold">
                Paling populer
              </span>
            ) : null}
            <h2 className="text-xl font-bold">{plan.name}</h2>
            <p className={plan.highlighted ? "text-brand-200" : "text-stone-500"}>
              {plan.description}
            </p>
            <p className="mt-4 text-3xl font-extrabold">
              {plan.price ? formatRupiah(plan.price) : "Hubungi kami"}
              <span className="text-base font-normal opacity-70">{plan.period}</span>
            </p>
            <ul className="mt-6 flex-1 space-y-2 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to={plan.price ? "/kontak" : "/kontak?topik=kedai"}
              className={`mt-6 rounded-full px-6 py-3 text-center font-semibold ${
                plan.highlighted
                  ? "bg-white text-brand-900 hover:bg-brand-100"
                  : "bg-brand-700 text-white hover:bg-brand-900"
              }`}
            >
              {plan.price ? "Mulai langganan" : "Ajukan penawaran"}
            </Link>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="text-2xl font-extrabold text-brand-900">Pertanyaan umum</h2>
        <div className="mt-4 divide-y divide-stone-200 rounded-2xl border border-stone-200">
          {FAQ.map((item) => (
            <details key={item.q} className="group p-5">
              <summary className="cursor-pointer font-semibold">{item.q}</summary>
              <p className="mt-2 text-sm text-stone-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
