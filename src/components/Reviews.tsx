"use client";

import { useAppContext } from "@/context/AppContext";

export default function Reviews() {
  const { data, loading } = useAppContext();

  if (loading || !data || !data.enabled.reviews || data.reviews.length === 0) return null;

  return (
    <section className="bg-white border border-slate-200 rounded-xl sm:rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,.08)] overflow-hidden">
      <div className="flex justify-between items-center px-4 sm:px-5 py-3.5 sm:py-4.5 border-b border-slate-200">
        <h2 className="font-bold tracking-wide text-slate-900 text-base sm:text-lg">Avaliações recentes</h2>
      </div>
      <div className="p-3 sm:p-5 grid gap-2.5 sm:gap-3">
        {data.reviews.map((review, index) => (
          <article key={index} className="grid gap-2 p-3 sm:p-3.5 border border-slate-200 rounded-xl sm:rounded-[14px] bg-white">
            <strong className="text-slate-900">{review.author}</strong>
            <div className="text-amber-500" aria-label={`${review.stars} estrelas`}>
              {"★".repeat(review.stars)}{"☆".repeat(5 - review.stars)}
            </div>
            <p className="m-0 text-slate-600">{review.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
