"use client";

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getSubdomainFromHost } from '@/lib/subdomain-utils';
import ApartamentosAVendaApp from '@/subdomains/apartamentosavenda';

export default function ImovelPage() {
  const params = useParams();
  const [subdomain, setSubdomain] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const host = window.location.host;
      const detectedSubdomain = getSubdomainFromHost(host);
      setSubdomain(detectedSubdomain);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  // Validação: só mostra apartamentosavenda se for o subdomínio correto
  if (subdomain === 'apartamentosavenda') {
    return <ApartamentosAVendaApp />;
  }

  // Se não for um subdomínio válido, retorna 404
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md px-4">
        <div className="text-9xl font-bold text-gray-300 mb-4">404</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Página não encontrada
        </h1>
        <p className="text-gray-600 mb-8">
          O subdomínio que você está tentando acessar não existe ou não está disponível.
        </p>
        <a
          href="http://localhost:3000?subdomain=apartamentosavenda"
          className="inline-block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-xl transition-colors"
        >
          Ver Apartamentos Disponíveis
        </a>
      </div>
    </div>
  );
}
