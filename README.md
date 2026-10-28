# webchat-demo-site

Situs company profile fiktif (**Sentosa Kopi**) untuk menguji widget Web Chat dari plasgos-crm.

## Jalankan

```bash
pnpm install
cp .env.example .env   # isi VITE_WEBCHAT_WIDGET_ID bila widget sudah siap
pnpm dev               # http://localhost:5180
```

Port dikunci di 5180 supaya origin widget tetap `http://localhost:5180`.

## Halaman

| Path | Isi | Berguna untuk |
| --- | --- | --- |
| `/` | Beranda | — |
| `/produk`, `/produk/:slug` | Katalog & detail produk | rule proaktif `page.path contains /produk` |
| `/harga` | Paket langganan + FAQ | rule proaktif `page.path contains /harga` |
| `/tentang` | Profil perusahaan | — |
| `/kontak` | Form kontak (dummy) | — |

## Integrasi webchat

1. Di plasgos-crm: Connected Channels → Web Chat → buat widget.
2. Tab **Domain**: tambahkan `http://localhost:5180`.
3. Tab **Pemasangan**: salin `widget_id` (dan `loader_url` bila beda dari default) ke `.env`.
4. Restart `pnpm dev`.

`src/components/webchat.jsx` memasang loader yang sama dengan snippet **HTML** dari tab Pemasangan
(antrian `Plasgos(...)`, `loader.js` dengan `data-widget-id`, lalu `Plasgos("boot", { widgetId })`).
Tanpa `VITE_WEBCHAT_WIDGET_ID`, situs tetap jalan dan menampilkan badge peringatan (hanya di mode dev).
