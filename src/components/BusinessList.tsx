"use client";

import { getAllBusinesses } from "@/context/AppContext";
import BusinessCard from "./BusinessCard";

export default function BusinessList() {
  const businesses = getAllBusinesses();

  if (businesses.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white flex items-center justify-center">
        <div className="text-center py-12 px-4">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <p className="text-slate-600 font-medium">Nenhum negócio disponível no momento.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Profissional */}
      <header className="relative overflow-hidden bg-slate-900 text-white">
        {/* Padrão decorativo sutil */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-semibold text-white/90">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Guia Completo da Cidade
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 tracking-tight leading-[1.1]">
              Encontre os melhores
              <span className="block text-blue-400 mt-3 sm:mt-4">negócios da região</span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl font-light mb-8">
              Conectamos você com empresas confiáveis, verificadas e bem avaliadas. Descubra serviços, produtos e profissionais de qualidade em um só lugar.
            </p>

            {/* Botão de Cadastro */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#cadastro"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Cadastre seu negócio
              </a>
              <a
                href="#cadastro"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold transition-all duration-300 text-base sm:text-lg"
              >
                Saiba mais
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Lista de negócios */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Cabeçalho da seção */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
                Explore nossos parceiros
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-medium">
                {businesses.length} {businesses.length === 1 ? "empresa verificada" : "empresas verificadas"} prontas para te atender
              </p>
            </div>
          </div>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {businesses.map((business, index) => (
            <BusinessCard
              key={index}
              subdomain={business.subdomain}
              city={business.city}
              data={business.data}
            />
          ))}
        </div>

        {/* Seção de Cadastro */}
        <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-8 sm:p-12 lg:p-16 border border-blue-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-600 text-white mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Faça parte do nosso guia
            </h3>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Cadastre seu negócio e aumente sua visibilidade. Conecte-se com clientes locais e faça sua empresa crescer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#cadastro"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Cadastrar meu negócio
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold border-2 border-slate-200 hover:border-slate-300 transition-all duration-300 text-lg shadow-sm"
              >
                Entrar em contato
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Profissional */}
      <footer className="mt-20 pt-12 sm:pt-16 pb-8 border-t border-slate-200/60 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div>
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">Sobre</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Plataforma confiável para encontrar os melhores negócios e serviços da sua região.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Política de Privacidade</a>
                </li>
                <li>
                  <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors">Termos de Uso</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-4">Contato</h3>
              <p className="text-slate-600 text-sm">
                Entre em contato conosco para mais informações.
              </p>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200/60">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm font-medium">
                © {new Date().getFullYear()} Guia da Cidade. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-1 text-slate-400 text-xs">
                <span>Feito com</span>
                <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                <span>para você</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
