"use client";

import { useAppContext } from "@/context/AppContext";

export default function DomainInfo() {
  const { subdomain, city, loading } = useAppContext();

  if (loading || !subdomain || !city) return null;

  return (
    <div className="w-full bg-slate-100 border-b border-slate-200 py-2">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-xs sm:text-sm text-slate-700">
          <span className="font-medium">Subdomínio:</span> {subdomain} • <span className="font-medium">Cidade:</span> {city}
        </div>
      </div>
    </div>
  );
}

