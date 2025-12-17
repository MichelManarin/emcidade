export interface Apartamento {
  id: string;
  titulo: string;
  descricao: string;
  preco: number;
  quartos: number;
  banheiros: number;
  vagas: number;
  area: number; // m²
  endereco: {
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
  };
  fotos: string[];
  caracteristicas: string[];
  tipo: 'novo' | 'usado';
  dataPublicacao: string;
  contato: {
    nome: string;
    telefone: string;
    email: string;
    whatsapp: string;
  };
}

export interface FiltrosBusca {
  precoMin?: number;
  precoMax?: number;
  quartos?: number;
  banheiros?: number;
  vagas?: number;
  bairros?: string[];
  tipo?: 'novo' | 'usado' | 'todos';
  ordenacao?: 'preco-asc' | 'preco-desc' | 'recente' | 'area-asc' | 'area-desc';
}

