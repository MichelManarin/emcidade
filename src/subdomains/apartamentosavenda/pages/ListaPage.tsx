"use client";

import { useRouter } from 'next/navigation';
import { useApartamentos } from '../context/ApartamentosContext';
import ListaImoveis from '../components/ListaImoveis';

export default function ListaPage() {
  const router = useRouter();
  const { apartamentos } = useApartamentos();

  const handleSelectApartamento = (id: string) => {
    // Navega para a rota do imóvel
    router.push(`/imovel/${id}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <ListaImoveis 
        apartamentos={apartamentos}
        onSelectApartamento={handleSelectApartamento}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="mb-2 font-semibold">
            Apartamentos em Criciúma - SC
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

