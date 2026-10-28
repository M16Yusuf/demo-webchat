import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-6xl font-extrabold text-brand-200">404</p>
      <h1 className="mt-4 text-2xl font-extrabold text-brand-900">Halaman tidak ditemukan</h1>
      <Link
        to="/"
        className="mt-6 inline-block rounded-full bg-brand-700 px-6 py-3 font-semibold text-white"
      >
        Ke beranda
      </Link>
    </div>
  );
}
