import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // Remove a porta se existir (ex: localhost:3000)
  const hostnameWithoutPort = hostname.split(':')[0];
  
  // Extrai o subdomínio
  const subdomain = hostnameWithoutPort.split('.')[0];
  
  // Em desenvolvimento, também aceita query param
  const url = request.nextUrl.clone();
  const subdomainParam = url.searchParams.get('subdomain');
  
  const detectedSubdomain = subdomainParam || subdomain;
  
  // Lista de subdomínios válidos
  const validSubdomains = ['apartamentosavenda'];
  
  // Se for localhost sem subdomínio query param, verifica se é uma rota válida
  if (hostnameWithoutPort === 'localhost' || hostnameWithoutPort === '127.0.0.1') {
    // Se não tem subdomain query param E não é apartamentosavenda, retorna erro
    if (!subdomainParam && !validSubdomains.includes(subdomain)) {
      // Permite apenas rotas específicas sem subdomínio
      const path = url.pathname;
      
      // Se não for uma rota do Next.js (_next, api, etc), bloqueia
      if (!path.startsWith('/_next') && !path.startsWith('/api')) {
        // Redireciona para página com subdomínio válido
        url.searchParams.set('subdomain', 'apartamentosavenda');
        return NextResponse.redirect(url);
      }
    }
  }
  
  // Adiciona o subdomínio como header customizado para acessar no app
  const response = NextResponse.next();
  response.headers.set('x-subdomain', detectedSubdomain);
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
