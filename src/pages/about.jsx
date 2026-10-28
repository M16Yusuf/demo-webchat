const STATS = [
  { value: "2016", label: "Berdiri di Kemang" },
  { value: "14", label: "Kelompok tani mitra" },
  { value: "38 rb+", label: "Pelanggan" },
  { value: "120+", label: "Kedai mitra" },
];

const TEAM = [
  { name: "Raka Pratama", role: "Pendiri & Head Roaster" },
  { name: "Dinda Lestari", role: "Q Grader" },
  { name: "Bimo Saputra", role: "Kemitraan Kedai" },
  { name: "Sari Wulandari", role: "Layanan Pelanggan" },
];

export function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-extrabold text-brand-900">Tentang Sentosa Kopi</h1>
        <p className="mt-4 text-lg text-stone-600">
          Sentosa Kopi berawal dari mesin sangrai 1 kg di garasi rumah. Kini kami
          menyangrai lebih dari 3 ton kopi per bulan untuk peminum kopi rumahan dan
          lebih dari 120 kedai di seluruh Indonesia.
        </p>
        <p className="mt-4 text-stone-600">
          Kami percaya kopi enak dimulai dari petani yang sejahtera. Karena itu
          kami membeli langsung dari kelompok tani, membayar di atas harga pasar,
          dan mengajak mereka mencicipi hasil sangrai kami.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="rounded-2xl bg-brand-50 p-6">
            <p className="text-3xl font-extrabold text-brand-700">{stat.value}</p>
            <p className="mt-1 text-sm text-stone-600">{stat.label}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-extrabold text-brand-900">Tim kami</h2>
      <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
        {TEAM.map((person) => (
          <div key={person.name} className="text-center">
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-brand-200 text-2xl font-bold text-brand-900">
              {person.name
                .split(" ")
                .map((part) => part[0])
                .join("")}
            </div>
            <p className="mt-3 font-semibold">{person.name}</p>
            <p className="text-sm text-stone-500">{person.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
