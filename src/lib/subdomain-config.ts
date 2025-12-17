/**
 * Configuração central de subdomínios
 * Adicione novos subdomínios aqui conforme necessário
 */

export interface SubdomainConfig {
  key: string;
  subdomain: string;
  title: string;
  description: string;
  keywords: string[];
  baseDomain: string;
}

export const SUBDOMAINS: Record<string, SubdomainConfig> = {
  apartamentosavenda: {
    key: 'apartamentosavenda',
    subdomain: 'apartamentosavenda',
    title: 'Apartamentos à Venda em Criciúma | Imóveis Exclusivos',
    description: 'Encontre apartamentos exclusivos à venda em Criciúma. Imóveis mobiliados com 3 dormitórios, suíte, sacada e muito mais. Entre em contato: (48) 9981-5876',
    keywords: [
      'apartamento mobiliado criciuma',
      'apartamento a venda criciuma',
      'apartamento 3 quartos criciuma',
      'apartamento com suite criciuma',
      'imovel mobiliado criciuma',
      'comprar apartamento criciuma',
      'apartamento planejado criciuma',
      'apartamento alto padrao criciuma',
      'patricia dorigon creci 43317',
      'imoveis criciuma sc',
    ],
    baseDomain: 'emcriciuma.com.br',
  },
};

export const DEFAULT_SUBDOMAIN = 'apartamentosavenda';
