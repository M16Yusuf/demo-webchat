import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { isWebchatEnabled, openWebchat } from "../components/webchat";

const TOPICS = [
  { value: "pesanan", label: "Status pesanan" },
  { value: "langganan", label: "Langganan" },
  { value: "kedai", label: "Kemitraan kedai / grosir" },
  { value: "lainnya", label: "Lainnya" },
];

const CONTACTS = [
  { icon: MapPin, label: "Jl. Kemang Raya No. 21, Jakarta Selatan" },
  { icon: Clock, label: "Setiap hari 08.00–21.00 WIB" },
  { icon: Phone, label: "+62 812-0000-2121" },
  { icon: Mail, label: "halo@sentosakopi.example" },
];

export function ContactPage() {
  const [searchParams] = useSearchParams();
  const [sent, setSent] = useState(false);
  const defaultTopic =
    TOPICS.find((topic) => topic.value === searchParams.get("topik"))?.value ??
    TOPICS[0].value;

  return (
    <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2">
      <div>
        <h1 className="text-3xl font-extrabold text-brand-900">Hubungi kami</h1>
        <p className="mt-2 text-stone-600">
          Tim layanan pelanggan kami siap membantu. Untuk jawaban tercepat, gunakan
          chat di pojok kanan bawah.
        </p>
        {isWebchatEnabled ? (
          <button
            type="button"
            onClick={openWebchat}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-900"
          >
            <MessageCircle className="h-4 w-4" /> Chat dengan kami
          </button>
        ) : null}
        <ul className="mt-8 space-y-4">
          {CONTACTS.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-stone-700">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-700">
                <Icon className="h-5 w-5" />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>

      <form
        className="space-y-4 rounded-3xl border border-stone-200 p-6"
        onSubmit={(event) => {
          event.preventDefault();
          setSent(true);
        }}
      >
        <label className="block text-sm font-semibold">
          Nama
          <input
            required
            className="mt-1 block w-full rounded-xl border border-stone-300 px-3 py-2 font-normal"
          />
        </label>
        <label className="block text-sm font-semibold">
          Email
          <input
            required
            type="email"
            className="mt-1 block w-full rounded-xl border border-stone-300 px-3 py-2 font-normal"
          />
        </label>
        <label className="block text-sm font-semibold">
          Topik
          <select
            defaultValue={defaultTopic}
            className="mt-1 block w-full rounded-xl border border-stone-300 px-3 py-2 font-normal"
          >
            {TOPICS.map((topic) => (
              <option key={topic.value} value={topic.value}>
                {topic.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold">
          Pesan
          <textarea
            required
            rows={4}
            className="mt-1 block w-full rounded-xl border border-stone-300 px-3 py-2 font-normal"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-full bg-brand-700 px-6 py-3 font-semibold text-white hover:bg-brand-900"
        >
          Kirim pesan
        </button>
        {sent ? (
          <p className="text-sm text-emerald-700">
            Terima kasih! Pesan tercatat (demo, tidak dikirim ke mana pun).
          </p>
        ) : null}
      </form>
    </div>
  );
}
