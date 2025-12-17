"use client";

import { useRouter } from 'next/navigation';
import { useApartamentos } from '../context/ApartamentosContext';
import Hero from '../components/Hero';
import Galeria from '../components/Galeria';
import Detalhes from '../components/Detalhes';
import Contato from '../components/Contato';

interface DetalhesPageProps {
  apartamentoId: string;
}

export default function DetalhesPage({ apartamentoId }: DetalhesPageProps) {
  const router = useRouter();
  const { getApartamentoById } = useApartamentos();
  
  const apartamento = getApartamentoById(apartamentoId);

  if (!apartamento) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Imóvel não encontrado</h1>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors"
          >
            Ver todos os imóveis
          </button>
        </div>
      </div>
    );
  }

  const handleVoltarLista = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Botão Voltar */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={handleVoltarLista}
          className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
        >
          <span>←</span>
          <span>Voltar</span>
        </button>
      </div>

      <Hero apartamentoId={apartamentoId} />
      <Galeria />
      <Detalhes />
      <Contato />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2 font-semibold">
            Apartamento Exclusivo Mobiliado em Criciúma - SC
          </p>
          <p className="text-sm text-gray-400 mb-4">
            © {new Date().getFullYear()} EmCriciúma.com.br - Todos os direitos reservados
          </p>
          <p className="text-xs text-gray-500">
            Patrícia Dorigon - CRECI 43317 - Corretora de Imóveis
          </p>
        </div>
      </footer>
    </div>
  );
}

