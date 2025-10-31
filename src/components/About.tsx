"use client";

import { useAppContext } from "@/context/AppContext";

export default function About() {
  const { data, loading } = useAppContext();

  if (loading || !data || !data.enabled.about) return null;

  return (
    <section className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,.08)] overflow-hidden">
      <div className="flex justify-between items-center px-4 sm:px-5 py-3.5 sm:py-4.5 border-b border-slate-200">
        <h2 className="font-bold tracking-wide text-slate-900 text-base sm:text-lg">Sobre</h2>
      </div>
      <div className="p-3 sm:p-5 grid gap-3 sm:gap-3.5">
        <p className="text-[15.5px] text-slate-800 leading-relaxed">
          A <strong className="text-slate-900">{data.business.name}</strong> {data.about.mainText.replace(/^A\s+/, "").replace(data.business.name, "").trim()}
        </p>

        {data.about.tags.length > 0 && (
          <div className="flex flex-wrap gap-2.5">
            {data.about.tags.map((tag, index) => (
              <span key={index} className="px-3 py-2 rounded-full border border-slate-200 text-[12px] text-slate-700 bg-slate-50 font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}

        {data.about.services.length > 0 && (
          <div className="grid gap-3.5 mt-2.5">
            {data.about.services.map((service, index) => (
              <div key={index} className="flex gap-3 items-start p-3.5 border border-slate-200 rounded-[14px] bg-white">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-slate-400">
                  <path d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm1 14.5h-2V17h2v-.5Zm0-9h-2v7h2v-7Z"/>
                </svg>
                <div>
                  <h4 className="m-0 mb-1 font-semibold text-slate-900">{service.title}</h4>
                  <p className="m-0 text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
