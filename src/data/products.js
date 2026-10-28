export const PRODUCTS = [
  {
    slug: "gayo-wine",
    name: "Aceh Gayo Wine Process",
    category: "Biji Kopi",
    price: 145000,
    unit: "200 g",
    origin: "Takengon, Aceh",
    notes: ["Anggur merah", "Cokelat hitam", "Rempah"],
    roast: "Medium",
    color: "from-rose-900 to-brand-700",
    description:
      "Diproses fermentasi panjang sehingga rasa buahnya keluar kuat. Cocok untuk V60 dan Aeropress.",
  },
  {
    slug: "toraja-sapan",
    name: "Toraja Sapan",
    category: "Biji Kopi",
    price: 125000,
    unit: "200 g",
    origin: "Tana Toraja, Sulawesi Selatan",
    notes: ["Karamel", "Kacang", "Body tebal"],
    roast: "Medium-Dark",
    color: "from-amber-900 to-brand-900",
    description:
      "Body tebal dengan rasa manis karamel. Andalan untuk espresso dan kopi susu.",
  },
  {
    slug: "kintamani-natural",
    name: "Bali Kintamani Natural",
    category: "Biji Kopi",
    price: 135000,
    unit: "200 g",
    origin: "Kintamani, Bali",
    notes: ["Jeruk", "Gula aren", "Segar"],
    roast: "Light",
    color: "from-orange-700 to-brand-600",
    description:
      "Asam segar khas jeruk dengan akhir manis. Paling enak diseduh dingin (cold brew).",
  },
  {
    slug: "house-blend",
    name: "Sentosa House Blend",
    category: "Biji Kopi",
    price: 98000,
    unit: "250 g",
    origin: "Jawa Barat & Flores",
    notes: ["Cokelat susu", "Seimbang"],
    roast: "Medium-Dark",
    color: "from-stone-800 to-brand-700",
    description:
      "Campuran harian kami. Konsisten untuk mesin espresso rumahan dan kedai.",
  },
  {
    slug: "v60-starter-kit",
    name: "V60 Starter Kit",
    category: "Alat Seduh",
    price: 385000,
    unit: "1 set",
    origin: "Paket",
    notes: ["Dripper", "Server 600 ml", "Filter 100 lembar"],
    roast: null,
    color: "from-slate-700 to-slate-900",
    description:
      "Semua yang dibutuhkan untuk mulai menyeduh manual di rumah, plus panduan seduh.",
  },
  {
    slug: "gooseneck-kettle",
    name: "Gooseneck Kettle 1 L",
    category: "Alat Seduh",
    price: 289000,
    unit: "1 pcs",
    origin: "Stainless steel",
    notes: ["Leher angsa", "Termometer", "Kompor & induksi"],
    roast: null,
    color: "from-zinc-600 to-zinc-900",
    description:
      "Aliran air stabil untuk pour-over. Dilengkapi termometer di tutup.",
  },
];

export const PLANS = [
  {
    key: "ngopi",
    name: "Ngopi",
    price: 119000,
    period: "/bulan",
    description: "Untuk peminum kopi rumahan.",
    features: [
      "1 × 200 g biji kopi pilihan",
      "Gratis ongkir Jabodetabek",
      "Kartu catatan rasa",
    ],
    highlighted: false,
  },
  {
    key: "barista",
    name: "Barista Rumahan",
    price: 229000,
    period: "/bulan",
    description: "Dua origin berbeda tiap bulan.",
    features: [
      "2 × 200 g biji kopi",
      "Gratis ongkir seluruh Indonesia",
      "Diskon 10% alat seduh",
      "Akses kelas seduh online",
    ],
    highlighted: true,
  },
  {
    key: "kedai",
    name: "Kedai",
    price: null,
    period: "",
    description: "Untuk kafe, kantor, dan reseller.",
    features: [
      "Mulai 5 kg per bulan",
      "Harga grosir & profil sangrai khusus",
      "Pelatihan barista",
      "Account manager",
    ],
    highlighted: false,
  },
];

export function formatRupiah(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}
