"use client";

import { useApartamentos } from '../context/ApartamentosContext';

export default function Contato() {
  const { apartamento } = useApartamentos();

  const formatarPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    }).format(preco);
  };

  const abrirWhatsApp = () => {
    const mensagem = encodeURIComponent(
      `Olá Patrícia! Tenho interesse no imóvel exclusivo todo mobiliado de ${formatarPreco(apartamento.preco)}. Gostaria de agendar uma visita.`
    );
    window.open(`https://wa.me/554899815876?text=${mensagem}`, '_blank');
  };

  const ligarAgora = () => {
    window.location.href = `tel:${apartamento.contato.telefone}`;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Interessado? Entre em Contato!
        </h2>
        <p className="text-xl text-emerald-100 mb-8">
          Agende sua visita e conheça pessoalmente este imóvel exclusivo
        </p>

        {/* Card da Corretora */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 mb-8">
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center text-3xl font-bold mb-4">
              PD
            </div>
            <h3 className="text-2xl font-bold mb-1">{apartamento.contato.nome}</h3>
            <p className="text-emerald-200">Corretora de Imóveis</p>
            <p className="text-emerald-200">CRECI 43317</p>
          </div>

          <div className="space-y-3 text-left max-w-sm mx-auto mb-8">
            <div className="flex items-center gap-3 text-white">
              <span className="text-2xl">📱</span>
              <span className="font-semibold">{apartamento.contato.telefone}</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <span className="text-2xl">💰</span>
              <span className="font-semibold">{formatarPreco(apartamento.preco)}</span>
            </div>
            <div className="flex items-center gap-3 text-white">
              <span className="text-2xl">📍</span>
              <span className="font-semibold">Criciúma, Santa Catarina</span>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={abrirWhatsApp}
              className="group px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-emerald-500/50 hover:scale-105 flex items-center justify-center gap-2"
            >
              <span className="text-2xl">💬</span>
              <span>WhatsApp</span>
            </button>
            <button
              onClick={ligarAgora}
              className="px-8 py-4 bg-white text-emerald-700 hover:bg-gray-100 font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:scale-105 flex items-center justify-center gap-2"
            >
              <span className="text-2xl">📞</span>
              <span>Ligar Agora</span>
            </button>
          </div>
        </div>

        <p className="text-sm text-emerald-200">
          Atendimento personalizado • Visitas agendadas • Financiamento disponível
        </p>
      </div>
    </section>
  );
}

