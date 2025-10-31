"use client";

import { useAppContext } from "@/context/AppContext";

export default function MapCard() {
  const { data, loading } = useAppContext();

  if (loading || !data || !data.enabled.mapCard) return null;

  const { lat, lng } = data.address.coordinates;
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3515.317496982046!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1spt-BR!2sbr!4v1610000000000&q=${lat},${lng}`;

  return (
    <div className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,.08)] overflow-hidden">
      <div className="flex justify-between items-center px-4 sm:px-5 py-3.5 sm:py-4.5 border-b border-slate-200">
        <h2 className="font-bold tracking-wide text-slate-900 text-base sm:text-lg">Como chegar</h2>
      </div>
      <div className="p-0">
        <iframe
          title="Mapa"
          src={mapUrl}
          width="100%"
          height="240"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full sm:h-[280px] h-[240px]"
        />
      </div>
    </div>
  );
}
