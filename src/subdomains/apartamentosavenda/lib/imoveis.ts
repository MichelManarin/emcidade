/**
 * Biblioteca de funções para gerenciar imóveis
 * Útil para sitemap, SSG, e outras funcionalidades
 */

export interface ImovelBasico {
  id: string;
  titulo: string;
  preco: number;
}

/**
 * Retorna todos os IDs de imóveis disponíveis
 * Útil para gerar sitemap e rotas estáticas
 */
export function getAllImovelIds(): string[] {
  // TODO: Quando integrar com banco de dados, buscar daqui
  // Por enquanto, retorna os IDs hardcoded baseado no contexto
  return ['1']; // Adicione mais IDs conforme novos imóveis
}

/**
 * Retorna informações básicas de todos os imóveis
 * Útil para sitemap com informações adicionais
 */
export function getAllImoveisBasico(): ImovelBasico[] {
  return [
    {
      id: '1',
      titulo: 'IMÓVEL EXCLUSIVO - TODO MOBILIADO',
      preco: 930000,
    },
    // Adicione mais imóveis aqui conforme necessário
  ];
}

