import { Coffee, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

import { Webchat } from "./webchat";

const NAV_ITEMS = [
  { to: "/", label: "Beranda", end: true },
  { to: "/produk", label: "Produk" },
  { to: "/harga", label: "Langganan" },
  { to: "/tentang", label: "Tentang" },
  { to: "/kontak", label: "Kontak" },
];

function navClassName({ isActive }) {
  return `rounded-full px-3 py-1.5 text-sm font-medium transition ${
    isActive
      ? "bg-brand-100 text-brand-900"
      : "text-stone-600 hover:text-brand-900"
  }`;
}

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-brand-900">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-700 text-white">
            <Coffee className="h-5 w-5" />
          </span>
          Sentosa Kopi
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={navClassName}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-stone-700 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-stone-200 px-4 py-3 md:hidden">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={navClassName}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <p className="font-extrabold text-white">Sentosa Kopi</p>
          <p className="mt-2 text-sm text-brand-200">
            Roastery kopi Nusantara sejak 2016. Disangrai setiap Senin & Kamis.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Kunjungi</p>
          <p className="mt-2 text-brand-200">
            Jl. Kemang Raya No. 21, Jakarta Selatan
            <br />
            Setiap hari 08.00–21.00 WIB
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-white">Hubungi</p>
          <p className="mt-2 text-brand-200">
            halo@sentosakopi.example
            <br />
            +62 812-0000-2121
          </p>
        </div>
      </div>
      <p className="border-t border-brand-700 py-4 text-center text-xs text-brand-200">
        Situs demo fiktif untuk pengujian Plasgos Webchat.
      </p>
    </footer>
  );
}

export function Layout() {
  const { pathname } = useLocation();

  // Block body: newer browsers return a Promise from scrollTo, which React
  // would treat as the effect's cleanup.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Webchat />
    </div>
  );
}
