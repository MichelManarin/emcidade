"use client";

import Image from "next/image";
import { useAppContext } from "@/context/AppContext";

export default function Gallery() {
  const { data, loading } = useAppContext();

  if (loading || !data || !data.enabled.gallery || data.gallery.length === 0) return null;

  const mainImage = data.gallery[0];
  const sideImages = data.gallery.slice(1, 5);

  return (
    <section className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,.08)] overflow-hidden">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 px-4 sm:px-5 py-3.5 sm:py-4.5 border-b border-slate-200">
        <h2 className="font-bold tracking-wide text-slate-900 text-base sm:text-lg">Fotos</h2>
        <span className="text-slate-600 text-[11px] sm:text-[13px] hidden sm:inline">Arraste para salvar • Clique para ampliar</span>
        <span className="text-slate-600 text-[11px] sm:hidden">Toque para ampliar</span>
      </div>
      <div className="p-3 sm:p-5">
        <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr] gap-3">
          <a className="aspect-video rounded-xl sm:rounded-[14px] overflow-hidden border border-slate-200">
            <Image
              src={mainImage}
              alt="Foto principal"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </a>
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
            {sideImages.map((img, index) => (
              <a key={index} className="aspect-video rounded-xl sm:rounded-[14px] overflow-hidden border border-slate-200">
                <Image
                  src={img}
                  alt={`Foto ${index + 2}`}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                />
              </a>
            ))}
            {sideImages.length < 4 && Array.from({ length: 4 - sideImages.length }).map((_, index) => (
              <div key={`placeholder-${index}`} className="aspect-video rounded-xl sm:rounded-[14px] border border-slate-200 bg-slate-100" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
