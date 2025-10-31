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

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <DomainInfo />
      <div className="max-w-[1200px] mx-auto px-4 py-4 sm:px-6 sm:py-6">
        <Hero />

        <div className="grid grid-cols-[1.2fr_.8fr] gap-4 sm:gap-6 mt-4 sm:mt-6 max-[980px]:grid-cols-1">
          <div className="space-y-4 sm:space-y-6">
            <Gallery />
            <About />
            <Videos />
            <Links />
            <Reviews />
          </div>

          <aside className="space-y-4 sm:space-y-6">
            <div className="sm:sticky sm:top-6">
              <ContactCard />
            </div>
            <HoursCard />
            <MapCard />
            <FAQCard />
          </aside>
        </div>

        <footer className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-slate-200 text-slate-600 text-[12px] sm:text-[13px] text-center px-2">
          <p className="mb-1">
            © {new Date().getFullYear()} Nome da Empresa — Perfil oficial no Guia da Cidade.
          </p>
          <p>
            <a href="#" className="text-blue-700 hover:text-blue-800 hover:underline font-medium">Política de Privacidade</a> •{" "}
            <a href="#" className="text-blue-700 hover:text-blue-800 hover:underline font-medium">Termos</a>
          </p>
        </footer>
      </div>

      {/* JSON-LD LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Nome da Empresa",
            image: [
              "https://example.com/foto1.jpg",
              "https://example.com/foto2.jpg",
            ],
            "@id": "https://emcriciuma.com.br/empresa/nome-da-empresa",
            url: "https://emcriciuma.com.br/empresa/nome-da-empresa",
            telephone: "+55 48 3333-4444",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rua Exemplo, 123",
              addressLocality: "Criciúma",
              addressRegion: "SC",
              postalCode: "88800-000",
              addressCountry: "BR",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -28.6726,
              longitude: -49.3719,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday"],
                opens: "09:00",
                closes: "13:00",
              },
            ],
            sameAs: [
              "https://instagram.com/seu_perfil",
              "https://facebook.com/seu_perfil",
              "https://g.page/r/XXXXXXXX",
            ],
          }),
        }}
      />
    </div>
  );
}
