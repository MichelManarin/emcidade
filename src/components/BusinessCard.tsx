"use client";

import Image from "next/image";
import { BusinessData } from "@/context/AppContext";

interface BusinessCardProps {
  subdomain: string;
  city: string;
  data: BusinessData;
}

export default function BusinessCard({ subdomain, city, data }: BusinessCardProps) {
  const ratingStars = "★".repeat(Math.floor(data.business.rating));
  
  const getUrl = () => {
    if (typeof window !== "undefined") {
      const isDevelopment = window.location.hostname === "localhost" || 
                            window.location.hostname === "127.0.0.1" || 
                            window.location.hostname.startsWith("localhost:");
      
      if (isDevelopment) {
        return `/?subdomain=${subdomain.toLowerCase()}&city=${city.toLowerCase()}`;
      }
      return `https://${subdomain.toLowerCase()}.em${city.toLowerCase()}.com.br`;
    }
    return "#";
  };

  return (
    <a
      href={getUrl()}
      className="group relative block bg-white border border-slate-200/60 rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,.12)] transition-all duration-500 overflow-hidden hover:-translate-y-2"
    >
      {/* Imagem de destaque */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-white">
        {data.gallery && data.gallery.length > 0 ? (
          <>
            <Image
              src={data.gallery[0]}
              alt={data.business.name}
              width={800}
              height={400}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
            <svg className="w-20 h-20 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Badge de cidade/subdomínio */}
        <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/20 shadow-lg text-xs font-semibold text-slate-700 tracking-wide">
          <span className="text-slate-500 font-normal">{subdomain}</span>
          <span className="mx-1.5 text-slate-300">•</span>
          <span className="text-slate-700">{city}</span>
        </div>

        {/* Rating badge no canto */}
        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-white/20 shadow-lg">
          <div className="flex items-center gap-1">
            <span className="text-amber-500 text-sm leading-none">{ratingStars}</span>
            <span className="font-bold text-slate-900 text-sm leading-none ml-0.5">{data.business.rating}</span>
          </div>
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start gap-4 mb-4">
          {/* Logo */}
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border-2 border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,.08)] flex-shrink-0 group-hover:shadow-[0_8px_20px_rgba(0,0,0,.15)] transition-shadow duration-300">
            <Image
              src={data.business.logo}
              alt={`Logo ${data.business.name}`}
              width={72}
              height={72}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Informações principais */}
          <div className="flex-1 min-w-0 pt-0.5">
            <h3 className="font-extrabold text-slate-900 text-lg sm:text-xl mb-1.5 group-hover:text-blue-600 transition-colors duration-300 leading-tight line-clamp-2 tracking-tight">
              {data.business.name}
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{data.business.category}</span>
              <span className="text-slate-300">•</span>
              <span className="text-xs text-slate-500">{data.business.city}, {data.business.state}</span>
            </div>
            
            {/* Rating detalhado */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="text-amber-500 text-base font-bold leading-none">{ratingStars}</span>
                <span className="font-bold text-slate-900 text-sm leading-none ml-1">{data.business.rating}</span>
              </div>
              <span className="text-slate-400 text-xs">•</span>
              <span className="text-slate-500 text-xs font-medium">{data.business.reviewCount} avaliações</span>
            </div>
          </div>
        </div>

        {/* Descrição */}
        <p className="text-sm text-slate-600 line-clamp-2 mb-5 leading-relaxed font-medium">
          {data.business.description}
        </p>

        {/* Badges */}
        {data.business.badges && data.business.badges.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5">
            {data.business.badges.slice(0, 3).map((badge, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-lg border border-slate-200/60 bg-gradient-to-br from-slate-50 to-white text-xs text-slate-700 font-semibold shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        )}

        {/* Footer do card com CTA */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-medium">{data.business.city}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
            <span>Ver perfil</span>
            <svg className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Efeito hover sutil */}
      <div className="absolute inset-0 ring-2 ring-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </a>
  );
}
