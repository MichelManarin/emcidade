"use client";

import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Videos from "@/components/Videos";
import Links from "@/components/Links";
import Reviews from "@/components/Reviews";
import ContactCard from "@/components/ContactCard";
import HoursCard from "@/components/HoursCard";
import MapCard from "@/components/MapCard";
import FAQCard from "@/components/FAQCard";
import DomainInfo from "@/components/DomainInfo";
import { useAppContext } from "@/context/AppContext";

export default function Home() {
  const { data, loading } = useAppContext();

  const getDayOfWeek = (day: string): string[] => {
    const mapping: Record<string, string> = {
      "Segunda": "Monday",
      "Terça": "Tuesday",
      "Quarta": "Wednesday",
      "Quinta": "Thursday",
      "Sexta": "Friday",
      "Sábado": "Saturday",
      "Domingo": "Sunday",
    };
    return [mapping[day] || day];
  };

  const getOpeningHours = () => {
    if (!data) return [];
    
    const hoursByDay: Record<string, { opens: string; closes: string }> = {};
    
    data.hours.forEach((hour) => {
      if (hour.open && hour.time !== "Fechado") {
        const [opens, closes] = hour.time.split(" – ");
        if (opens && closes) {
          hoursByDay[hour.day] = { opens, closes };
        }
      }
    });

    const grouped: Record<string, { opens: string; closes: string }> = {};
    Object.keys(hoursByDay).forEach((day) => {
      const schedule = hoursByDay[day];
      const key = `${schedule.opens}-${schedule.closes}`;
      if (!grouped[key]) {
        grouped[key] = schedule;
      }
    });

    const result: Array<{ "@type": string; dayOfWeek: string[]; opens: string; closes: string }> = [];
    
    Object.entries(grouped).forEach(([, schedule]) => {
      const days: string[] = [];
      Object.keys(hoursByDay).forEach((day) => {
        if (hoursByDay[day].opens === schedule.opens && hoursByDay[day].closes === schedule.closes) {
          days.push(...getDayOfWeek(day));
        }
      });
      if (days.length > 0) {
        result.push({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: days,
          opens: schedule.opens,
          closes: schedule.closes,
        });
      }
    });

    return result;
  };

  const schemaData = data ? {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.business.name,
    image: data.gallery.length > 0 ? data.gallery : [data.business.logo],
    "@id": typeof window !== "undefined" ? window.location.href : "",
    url: typeof window !== "undefined" ? window.location.href : "",
    telephone: data.schema.telephone,
    ...(data.schema.priceRange && { priceRange: data.schema.priceRange }),
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.street,
      addressLocality: data.address.city,
      addressRegion: data.address.state,
      postalCode: data.address.zipCode,
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.address.coordinates.lat,
      longitude: data.address.coordinates.lng,
    },
    openingHoursSpecification: getOpeningHours(),
    ...(data.schema.sameAs.length > 0 && { sameAs: data.schema.sameAs }),
  } : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <DomainInfo />
      <div className="max-w-[1200px] mx-auto px-4 py-4 sm:px-6 sm:py-6">
        {!loading && data?.enabled.hero && <Hero />}

        <div className="grid grid-cols-[1.2fr_.8fr] gap-4 sm:gap-6 mt-4 sm:mt-6 max-[980px]:grid-cols-1">
          <div className="space-y-4 sm:space-y-6">
            {!loading && data?.enabled.gallery && <Gallery />}
            {!loading && data?.enabled.about && <About />}
            {!loading && data?.enabled.videos && <Videos />}
            {!loading && data?.enabled.links && <Links />}
            {!loading && data?.enabled.reviews && <Reviews />}
          </div>

          <aside className="space-y-4 sm:space-y-6">
            {!loading && data?.enabled.contactCard && <ContactCard />}
            {!loading && data?.enabled.hoursCard && <HoursCard />}
            {!loading && data?.enabled.mapCard && <MapCard />}
            {!loading && data?.enabled.faqCard && <FAQCard />}
          </aside>
        </div>

        <footer className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-slate-200 text-slate-600 text-[12px] sm:text-[13px] text-center px-2">
          <p className="mb-1">
            © {new Date().getFullYear()} {data?.business.name || "Nome da Empresa"} — Perfil oficial no Guia da Cidade.
          </p>
          <p>
            <a href="#" className="text-blue-700 hover:text-blue-800 hover:underline font-medium">Política de Privacidade</a> •{" "}
            <a href="#" className="text-blue-700 hover:text-blue-800 hover:underline font-medium">Termos</a>
          </p>
        </footer>
      </div>

      {/* JSON-LD LocalBusiness Schema */}
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      )}
    </div>
  );
}
