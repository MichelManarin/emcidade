"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ApartamentosProvider } from './context/ApartamentosContext';
import ListaPage from './pages/ListaPage';
import DetalhesPage from './pages/DetalhesPage';

export default function ApartamentosAVendaApp() {
  const pathname = usePathname();
  const [apartamentoId, setApartamentoId] = useState<string | null>(null);

  useEffect(() => {
    // Detecta se está na rota de detalhes: /imovel/[id]
    if (pathname?.startsWith('/imovel/')) {
      const id = pathname.split('/imovel/')[1];
      setApartamentoId(id);
    } else {
      setApartamentoId(null);
    }
  }, [pathname]);

  return (
    <ApartamentosProvider>
      {apartamentoId ? (
        <DetalhesPage apartamentoId={apartamentoId} />
      ) : (
        <ListaPage />
      )}
    </ApartamentosProvider>
  );
}
