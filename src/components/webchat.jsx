import { useEffect } from "react";

const WIDGET_ID = import.meta.env.VITE_WEBCHAT_WIDGET_ID?.trim();
const LOADER_URL =
  import.meta.env.VITE_WEBCHAT_LOADER_URL?.trim() ||
  "https://cdn.plasgoschat.com/loader/v1/loader.js";

// Same loader as the "HTML" snippet from plasgos-crm (tab Pemasangan):
// queue Plasgos(...) calls, inject loader.js after window load, then boot.
function bootWebchat(widgetId, loaderUrl) {
  const w = window;
  const d = document;
  if (w.Plasgos) return;

  const q = function () {
    q.q.push(arguments);
  };
  q.q = [];
  w.Plasgos = q;

  const load = () => {
    const s = d.createElement("script");
    s.async = true;
    s.src = loaderUrl;
    s.setAttribute("data-widget-id", widgetId);
    d.head.appendChild(s);
  };
  if (d.readyState === "complete") load();
  else w.addEventListener("load", load);

  w.Plasgos("boot", { widgetId });
}

export const isWebchatEnabled = Boolean(WIDGET_ID);

export function openWebchat() {
  window.Plasgos?.("open");
}

export function Webchat() {
  useEffect(() => {
    if (WIDGET_ID) bootWebchat(WIDGET_ID, LOADER_URL);
  }, []);

  if (WIDGET_ID || !import.meta.env.DEV) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-xs rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-xs text-amber-900 shadow">
      Webchat belum aktif — isi <code>VITE_WEBCHAT_WIDGET_ID</code> di{" "}
      <code>.env</code> lalu restart dev server.
    </div>
  );
}
