"use client";

import Image from 'next/image';
import { useApartamentos } from '../context/ApartamentosContext';

interface HeroProps {
  apartamentoId?: string;
}

export default function Hero({ apartamentoId }: HeroProps) {
  const { apartamento: apartamentoUnico } = useApartamentos();
  
  const apartamento = apartamentoUnico;

  if (!apartamento) return null;

  const formatarPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    }).format(preco);
  };

  const abrirWhatsApp = () => {
    const mensagem = encodeURIComponent(
      `Olá Patrícia! Tenho interesse no imóvel exclusivo todo mobiliado de R$ 930.000,00. Gostaria de mais informações.`
    );
    window.open(`https://wa.me/554899815876?text=${mensagem}`, '_blank');
  };

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden">
      {/* Imagem de Fundo */}
      <div className="absolute inset-0">
        <Image
          src={apartamento.fotos[0]}
          alt={apartamento.titulo}
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/70 to-slate-900/90"></div>
      </div>

      {/* Conteúdo */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-emerald-300 text-sm font-semibold">{apartamento.titulo}</span>
          </div>

          {/* Título */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Conforto e elegância descrevem esse apartamento
          </h1>

          {/* Descrição */}
          <p className="text-xl text-slate-300 mb-8">
            {apartamento.descricao}
          </p>

          {/* Características Principais */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20">
              <span className="text-3xl">🛏️</span>
              <div>
                <div className="text-sm text-slate-400">Dormitórios</div>
                <div className="text-xl font-bold">{apartamento.quartos}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20">
              <span className="text-3xl">🚗</span>
              <div>
                <div className="text-sm text-slate-400">Vaga</div>
                <div className="text-xl font-bold">{apartamento.vagas}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-3 rounded-xl border border-white/20">
              <span className="text-3xl">🏠</span>
              <div>
                <div className="text-sm text-slate-400">Localização</div>
                <div className="text-xl font-bold">{apartamento.endereco.cidade}</div>
              </div>
            </div>
          </div>

          {/* Preço e CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="bg-white/10 backdrop-blur-md px-8 py-4 rounded-2xl border border-white/20">
              <div className="text-sm text-emerald-300 mb-1">Valor</div>
              <div className="text-4xl font-bold text-white">
                {formatarPreco(apartamento.preco)}
              </div>
            </div>

            <button
              onClick={abrirWhatsApp}
              className="group px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 hover:scale-105 flex items-center gap-2"
            >
              <span className="text-2xl">💬</span>
              <span>Falar com a Corretora</span>
            </button>
          </div>

          {/* Info Corretora */}
          <div className="mt-10 pt-6 border-t border-white/20 flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-xl font-bold">
              PD
            </div>
            <div>
              <p className="font-semibold text-white">{apartamento.contato.nome}</p>
              <p className="text-sm text-slate-400">Corretora imobiliária</p>
              <p className="text-sm text-slate-400">CRECI 43317 • {apartamento.contato.telefone}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
