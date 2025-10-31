"use client";

import { useAppContext } from "@/context/AppContext";

export default function Videos() {
  const { data, loading } = useAppContext();

  if (loading || !data || !data.enabled.videos || data.videos.length === 0) return null;

  return (
    <section className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,.08)] overflow-hidden">
      <div className="flex justify-between items-center px-4 sm:px-5 py-3.5 sm:py-4.5 border-b border-slate-200">
        <h2 className="font-bold tracking-wide text-slate-900 text-base sm:text-lg">Vídeos</h2>
      </div>
      <div className="p-3 sm:p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {data.videos.map((video, index) => (
            <div key={index} className="relative border border-slate-200 rounded-xl sm:rounded-[14px] overflow-hidden aspect-video bg-black">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
