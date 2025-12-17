import { SUBDOMAINS, DEFAULT_SUBDOMAIN, SubdomainConfig } from './subdomain-config';

/**
 * Extrai o subdomínio da URL atual
 * Suporta ambientes de desenvolvimento (localhost) e produção
 */
export function getSubdomainFromHost(host: string): string | null {
  // Remove a porta se existir (ex: localhost:3000)
  const hostname = host.split(':')[0];
  
  // Em desenvolvimento, aceita query param ?subdomain=xxx
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const subdomainParam = params.get('subdomain');
      if (subdomainParam) return subdomainParam;
    }
    return DEFAULT_SUBDOMAIN;
  }

  // Em produção, extrai o subdomínio
  // Formato esperado: apartamentosavenda.emcriciuma.com.br
  const parts = hostname.split('.');
  
  // Se tiver pelo menos 3 partes (subdomain.emcriciuma.com.br)
  if (parts.length >= 3) {
    const subdomain = parts[0];
    
    // Verifica se o subdomínio está configurado
    if (SUBDOMAINS[subdomain]) {
      return subdomain;
    }
  }
  
  // Se não encontrar subdomínio válido, retorna null
  return null;
}

/**
 * Retorna a configuração do subdomínio atual
 */
export function getSubdomainConfig(subdomain: string | null): SubdomainConfig | null {
  if (!subdomain) return null;
  return SUBDOMAINS[subdomain] || null;
}

/**
 * Verifica se um subdomínio é válido
 */
export function isValidSubdomain(subdomain: string): boolean {
  return subdomain in SUBDOMAINS;
}

/**
 * Lista todos os subdomínios configurados
 */
export function getAllSubdomains(): SubdomainConfig[] {
  return Object.values(SUBDOMAINS);
}

/**
 * Gera URL completa para um subdomínio
 */
export function getSubdomainUrl(subdomain: string): string {
  const config = SUBDOMAINS[subdomain];
  if (!config) return '/';
  
  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return `http://localhost:3000?subdomain=${subdomain}`;
    }
  }
  
  return `https://${subdomain}.${config.baseDomain}`;
}

