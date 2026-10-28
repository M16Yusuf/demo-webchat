import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "./components/layout";
import { AboutPage } from "./pages/about";
import { ContactPage } from "./pages/contact";
import { HomePage } from "./pages/home";
import { NotFoundPage } from "./pages/not-found";
import { PricingPage } from "./pages/pricing";
import { ProductDetailPage } from "./pages/product-detail";
import { ProductsPage } from "./pages/products";

export function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="produk" element={<ProductsPage />} />
          <Route path="produk/:slug" element={<ProductDetailPage />} />
          <Route path="harga" element={<PricingPage />} />
          <Route path="tentang" element={<AboutPage />} />
          <Route path="kontak" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
