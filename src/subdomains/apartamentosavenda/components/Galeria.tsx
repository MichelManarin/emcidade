"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useApartamentos } from '../context/ApartamentosContext';

export default function Galeria() {
  const { apartamento } = useApartamentos();
  const [fotoSelecionada, setFotoSelecionada] = useState(0);
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <section id="fotos" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Conheça Cada Detalhe
          </h2>
          <p className="text-lg text-gray-600">
            {apartamento.fotos.length} fotos em alta qualidade
          </p>
        </div>

        {/* Foto Principal */}
        <div 
          className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden mb-6 cursor-pointer group"
          onClick={() => setModalAberto(true)}
        >
          <Image
            src={apartamento.fotos[fotoSelecionada]}
            alt={`Foto ${fotoSelecionada + 1} do apartamento`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
            <span className="font-semibold">{fotoSelecionada + 1}</span>
            <span className="text-gray-300"> / {apartamento.fotos.length}</span>
          </div>
        </div>

        {/* Miniaturas */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {apartamento.fotos.map((foto, index) => (
            <button
              key={index}
              onClick={() => setFotoSelecionada(index)}
              className={`relative h-20 md:h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                fotoSelecionada === index
                  ? 'ring-4 ring-emerald-500 scale-105'
                  : 'ring-2 ring-gray-200 hover:ring-gray-400 opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={foto}
                alt={`Miniatura ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Modal de Visualização */}
        {modalAberto && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setModalAberto(false)}
          >
            <button
              onClick={() => setModalAberto(false)}
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 z-10"
            >
              ×
            </button>
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                setFotoSelecionada((prev) => (prev === 0 ? apartamento.fotos.length - 1 : prev - 1));
              }}
              className="absolute left-4 text-white text-5xl hover:text-gray-300 z-10"
            >
              ‹
            </button>

            <div className="relative w-full h-full max-w-6xl max-h-[90vh]">
              <Image
                src={apartamento.fotos[fotoSelecionada]}
                alt={`Foto ${fotoSelecionada + 1}`}
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setFotoSelecionada((prev) => (prev === apartamento.fotos.length - 1 ? 0 : prev + 1));
              }}
              className="absolute right-4 text-white text-5xl hover:text-gray-300 z-10"
            >
              ›
            </button>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm text-white px-6 py-3 rounded-full">
              <span className="font-semibold text-lg">{fotoSelecionada + 1}</span>
              <span className="text-gray-300"> / {apartamento.fotos.length}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

