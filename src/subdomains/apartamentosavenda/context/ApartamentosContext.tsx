"use client";

import React, { createContext, useContext, ReactNode } from 'react';
import { Apartamento } from '../types';

interface ApartamentosContextType {
  apartamento: Apartamento;
  apartamentos: Apartamento[];
  getApartamentoById: (id: string) => Apartamento | undefined;
}

const ApartamentosContext = createContext<ApartamentosContextType | undefined>(undefined);

// Imóvel exclusivo mobiliado
const apartamentoExclusivo: Apartamento = {
  id: '1',
  titulo: 'IMÓVEL EXCLUSIVO - TODO MOBILIADO',
  descricao: 'Conforto e elegância descrevem esse apartamento. Totalmente mobiliado, exceto as camas e TV\'s. Ambientes planejados, pensados no conforto e praticidade!',
  preco: 930000,
  quartos: 3,
  banheiros: 1, // Não especificado na descrição, assumindo 1 pela suíte
  vagas: 1,
  area: 0, // Não informado na descrição
  endereco: {
    rua: '',
    bairro: '',
    cidade: 'Criciúma',
    estado: 'SC',
    cep: '',
  },
  fotos: [
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.20 (1).jpeg', // FOTO DESTAQUE
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.19.jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.19 (1).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.19 (2).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.20.jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.20 (2).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.20 (3).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.20 (4).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.20 (5).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.21.jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.21 (1).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.21 (2).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.21 (3).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.21 (4).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.21 (5).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.22.jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.22 (1).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.22 (2).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.22 (3).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.22 (4).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.22 (5).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.23.jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.23 (1).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.23 (2).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.23 (3).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.23 (4).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.23 (5).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.24.jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.24 (1).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.24 (2).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.24 (3).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.24 (4).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.24 (5).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.25.jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.25 (1).jpeg',
    '/apartamento/WhatsApp Image 2025-12-11 at 17.04.25 (2).jpeg',
  ],
  caracteristicas: [
    'Totalmente mobiliado, exceto as camas e TV\'s',
    '3 dormitórios sendo uma suíte (um transformado em closet)',
    'Sacada integrada com bar/adega oculto',
    '3 ar condicionado split',
    'Aquecimento a gás',
    'Uma vaga de garagem',
  ],
  tipo: 'usado',
  dataPublicacao: '2025-12-17',
  contato: {
    nome: 'Patrícia Dorigon',
    telefone: '(48) 9981-5876',
    email: 'contato@emcriciuma.com.br',
    whatsapp: '554899815876',
  },
};

// Array com todos os apartamentos (preparado para adicionar mais)
const todosApartamentos: Apartamento[] = [apartamentoExclusivo];

export function ApartamentosProvider({ children }: { children: ReactNode }) {
  const getApartamentoById = (id: string) => {
    return todosApartamentos.find(apt => apt.id === id);
  };

  return (
    <ApartamentosContext.Provider
      value={{
        apartamento: apartamentoExclusivo,
        apartamentos: todosApartamentos,
        getApartamentoById,
      }}
    >
      {children}
    </ApartamentosContext.Provider>
  );
}

export function useApartamentos() {
  const context = useContext(ApartamentosContext);
  if (context === undefined) {
    throw new Error('useApartamentos deve ser usado dentro de ApartamentosProvider');
  }
  return context;
}
