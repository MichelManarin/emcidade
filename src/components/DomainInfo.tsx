"use client";

import { useEffect, useState } from "react";

export default function DomainInfo() {
  const [domainInfo, setDomainInfo] = useState<{ subdomain: string; city: string } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      
      const parts = hostname.split(".");
      
      if (parts.length >= 3) {
        const subdomain = parts[0];
        const cityPart = parts[1]; 
        
        let city = cityPart;
        if (cityPart.startsWith("em")) {
          city = cityPart.substring(2);
        }
        
        city = city.charAt(0).toUpperCase() + city.slice(1);
        
        setDomainInfo({
          subdomain: subdomain.charAt(0).toUpperCase() + subdomain.slice(1),
          city: city
        });
      }
    }
  }, []);

  if (!domainInfo) return null;

  return (
    <div className="w-full bg-slate-100 border-b border-slate-200 py-2">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="text-xs sm:text-sm text-slate-700">
          <span className="font-medium">Subdomínio:</span> {domainInfo.subdomain} • <span className="font-medium">Cidade:</span> {domainInfo.city}
        </div>
      </div>
    </div>
  );
}

