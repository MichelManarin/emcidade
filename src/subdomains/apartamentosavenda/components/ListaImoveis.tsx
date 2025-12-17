"use client";

import Image from 'next/image';
import { Apartamento } from '../types';

interface ListaImoveisProps {
  apartamentos: Apartamento[];
  onSelectApartamento: (id: string) => void;
}

export default function ListaImoveis({ apartamentos, onSelectApartamento }: ListaImoveisProps) {
  const formatarPreco = (preco: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 0,
    }).format(preco);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Apartamentos em Criciúma à Venda
          </h1>
          <p className="text-xl text-gray-600">
            Encontrados <span className="font-bold text-emerald-600">{apartamentos.length}</span> {apartamentos.length === 1 ? 'imóvel' : 'imóveis'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apartamentos.map((apartamento) => (
            <div
              key={apartamento.id}
              onClick={() => onSelectApartamento(apartamento.id)}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
            >
              {/* Imagem Principal */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={apartamento.fotos[0]}
                  alt={apartamento.titulo}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                  EXCLUSIVO
                </div>

                {/* Preço Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <div className="text-white text-2xl font-bold">
                    {formatarPreco(apartamento.preco)}
                  </div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {apartamento.titulo}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {apartamento.descricao}
                </p>

                {/* Características */}
                <div className="flex items-center justify-between text-gray-700 mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl">🛏️</span>
                    <span className="font-semibold">{apartamento.quartos}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl">🚗</span>
                    <span className="font-semibold">{apartamento.vagas}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xl">📍</span>
                    <span className="font-semibold">{apartamento.endereco.cidade}</span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2">
                  <span>Ver Detalhes</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
