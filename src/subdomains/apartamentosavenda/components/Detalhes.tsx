"use client";

import { useApartamentos } from '../context/ApartamentosContext';

export default function Detalhes() {
  const { apartamento } = useApartamentos();

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Sobre o Imóvel */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Sobre o Imóvel
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p className="text-lg leading-relaxed font-semibold text-gray-900">
                {apartamento.titulo}
              </p>
              <p className="text-lg leading-relaxed">
                {apartamento.descricao}
              </p>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mt-6">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Descrição Completa</h3>
                <p className="text-gray-700 leading-relaxed">
                  3 dormitórios sendo uma suíte (um dormitório transformado em closet), sacada integrada com bar/adega oculto, coifa industrial, microondas e forno embutido de inox, aquecimento a gás, piso vinílico, 3 ar condicionado split, rouparia na área íntima, lavabo transformado em sapateira/depósito oculto no painel ripado, sacada com ponto para churrasqueira a gás, uma vaga de garagem.
                </p>
              </div>
            </div>
          </div>

          {/* Características e Condomínio */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Características
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {apartamento.caracteristicas.map((caracteristica, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <span className="text-emerald-500 text-xl mt-0.5">✓</span>
                    <span className="text-sm font-medium text-gray-700 leading-relaxed">{caracteristica}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Áreas Comuns do Condomínio
              </h3>
              <p className="text-gray-700 mb-6">
                Todas as áreas comuns são mobiliadas, decoradas e equipadas:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎉</span>
                  <span className="font-semibold text-gray-800">2 Salões de Festas</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎮</span>
                  <span className="font-semibold text-gray-800">Sala de Jogos</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🧸</span>
                  <span className="font-semibold text-gray-800">Brinquedoteca</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💪</span>
                  <span className="font-semibold text-gray-800">Academia</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🛝</span>
                  <span className="font-semibold text-gray-800">Playground</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🏛️</span>
                  <span className="font-semibold text-gray-800">Hall de Entrada</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
