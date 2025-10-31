export default function Links() {
  const links = [
    {
      href: "https://seudominio.com",
      label: "Site oficial",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M3 12a5 5 0 0 1 5-5h4v2H8a3 3 0 0 0 0 6h4v2H8a5 5 0 0 1-5-5Zm8-3h5a5 5 0 0 1 0 10h-5v-2h5a3 3 0 0 0 0-6h-5V9Zm-1 2h4v2H10v-2Z"/>
        </svg>
      ),
    },
    {
      href: "https://instagram.com/seu_perfil",
      label: "Instagram",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7Zm6.5-.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/>
        </svg>
      ),
    },
    {
      href: "https://facebook.com/seu_perfil",
      label: "Facebook",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M13 22v-8h3l1-4h-4V7.5c0-1.03.34-1.5 1.5-1.5H17V2.1c-.26-.03-1.17-.1-2.23-.1-2.2 0-3.77 1.35-3.77 3.83V10H8v4h3v8h2Z"/>
        </svg>
      ),
    },
    {
      href: "https://g.page/r/XXXXXXXX",
      label: "Google Maps / Avaliações",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"/>
        </svg>
      ),
    },
    {
      href: "https://wa.me/5548999999999",
      label: "WhatsApp",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.14 1.6 5.95L0 24l6.33-1.66a11.87 11.87 0 0 0 5.72 1.46h.01c6.55 0 11.88-5.33 11.88-11.88a11.84 11.84 0 0 0-3.42-8.44Z"/>
        </svg>
      ),
    },
    {
      href: "https://linktr.ee/seu_perfil",
      label: "Linktree / Catálogo",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12 2 2 12h6v10h8V12h6L12 2Z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,.08)] overflow-hidden">
      <div className="flex justify-between items-center px-4 sm:px-5 py-3.5 sm:py-4.5 border-b border-slate-200">
        <h2 className="font-bold tracking-wide text-slate-900 text-base sm:text-lg">Links & Redes</h2>
      </div>
      <div className="p-3 sm:p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3.5 border border-slate-200 rounded-xl sm:rounded-[14px] bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 transition-colors text-sm sm:text-base"
            >
              <span className="text-slate-500 shrink-0">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

