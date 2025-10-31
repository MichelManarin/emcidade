"use client";

import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

export default function Hero() {
  const { data, loading } = useAppContext();

  if (loading || !data) return null;

  const ratingStars = "★".repeat(Math.floor(data.business.rating));
  const ratingDecimal = data.business.rating % 1 >= 0.5 ? "½" : "";

  return (
    <header className="relative isolate overflow-hidden rounded-xl sm:rounded-[22px] bg-gradient-to-b from-slate-50 to-blue-50 shadow-[0_10px_30px_rgba(0,0,0,.08)]">
      <div className="relative z-10 grid gap-3 sm:gap-5 p-4 sm:p-6 lg:p-9">
        <nav className="flex gap-1.5 sm:gap-2.5 items-center text-slate-600 text-xs sm:text-[13px] flex-wrap" aria-label="breadcrumb">
          <a href="#" className="opacity-90 hover:opacity-100 text-slate-700">Guia da Cidade</a>
          <span>›</span>
          <a href="#" className="opacity-90 hover:opacity-100 text-slate-700">{data.business.city}</a>
          <span>›</span>
          <span className="text-slate-800 font-medium">Perfil</span>
        </nav>

        <div className="grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-4 sm:gap-5 items-start sm:items-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-[16px] sm:rounded-[20px] overflow-hidden border border-slate-200 shadow-[0_6px_20px_rgba(0,0,0,.05)] mx-auto sm:mx-0">
            <Image
              src={data.business.logo}
              alt={`Logo ${data.business.name}`}
              width={82}
              height={82}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h1 className="text-2xl sm:text-[clamp(26px,4vw,40px)] font-extrabold tracking-tight leading-tight text-slate-900">
              {data.business.name}
            </h1>
            <div className="text-xs sm:text-sm text-slate-700">
              {data.business.category} • {data.business.city}, {data.business.state} • <span className="text-amber-500" aria-label={`Avaliação ${data.business.rating}`}>{ratingStars}{ratingDecimal}</span> <span className="font-semibold text-slate-900">{data.business.rating}</span> <span className="text-slate-600">({data.business.reviewCount})</span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center sm:justify-start">
              {data.business.badges.map((badge, index) => (
                <span key={index} className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 border border-slate-200 rounded-full bg-white/80 backdrop-blur-sm text-[11px] sm:text-[12px] text-slate-700 font-medium">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-600"></span>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/${data.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4 py-2.5 sm:py-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white shadow-[0_6px_20px_rgba(37,99,235,.3)] font-semibold transition-all duration-200 hover:shadow-[0_8px_25px_rgba(37,99,235,.4)] text-sm sm:text-base"
              aria-label="Chamar no WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" className="sm:w-5 sm:h-5" fill="currentColor" aria-hidden="true">
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.14 1.6 5.95L0 24l6.33-1.66a11.87 11.87 0 0 0 5.72 1.46h.01c6.55 0 11.88-5.33 11.88-11.88a11.84 11.84 0 0 0-3.42-8.44Zm-8.47 18.2a9.8 9.8 0 0 1-5-.14l-.36-.14-3.76.98 1-3.66-.24-.38a9.86 9.86 0 0 1-1.53-5.28C2.16 6.46 6.62 2 12.05 2c2.63 0 5.11 1.02 6.98 2.9a9.8 9.8 0 0 1 2.88 6.99c0 5.43-4.45 9.8-9.86 9.8Zm5.72-7.36c-.31-.16-1.84-.9-2.13-1-.28-.1-.49-.16-.69.16-.2.32-.79 1-.97 1.2-.18.21-.36.24-.67.08-.31-.16-1.29-.47-2.46-1.5-.91-.8-1.52-1.78-1.7-2.09-.18-.3-.02-.47.14-.63.14-.14.31-.36.46-.54.15-.18.2-.31.3-.52.1-.21.06-.39-.02-.55-.08-.16-.69-1.66-.95-2.28-.25-.6-.5-.52-.69-.53l-.59-.01c-.2 0-.52.08-.79.39s-1.04 1.02-1.04 2.5 1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.1 4.49.71.31 1.27.5 1.7.64.71.23 1.35.2 1.85.12.57-.08 1.84-.75 2.11-1.46.26-.71.26-1.32.18-1.45-.08-.12-.28-.2-.59-.36Z"/>
              </svg>
              WhatsApp
            </a>
            <a
              href={`tel:${data.contact.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 sm:gap-2.5 px-4 py-2.5 sm:py-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 shadow-[0_6px_20px_rgba(0,0,0,.05)] font-semibold transition-all duration-200 text-sm sm:text-base"
              aria-label="Ligar por telefone"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" className="sm:w-5 sm:h-5" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.3.56 3.58.56a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.85 21.01 3 13.16 3 3.5a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.28.19 2.47.56 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z"/>
              </svg>
              Ligar agora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
