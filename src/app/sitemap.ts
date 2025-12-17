import { MetadataRoute } from 'next';
import { getAllSubdomains } from '@/lib/subdomain-utils';
import { getAllImovelIds } from '@/subdomains/apartamentosavenda/lib/imoveis';

export default function sitemap(): MetadataRoute.Sitemap {
  const subdomains = getAllSubdomains();
  const routes: MetadataRoute.Sitemap = [];

  // Itera sobre cada subdomínio
  subdomains.forEach((config) => {
    const baseUrl = `https://${config.subdomain}.${config.baseDomain}`;
    
    // 1. Adiciona a página principal do subdomínio (lista de imóveis)
    routes.push({
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    });

    // 2. Se for o subdomínio de apartamentos, adiciona as rotas dos imóveis
    if (config.subdomain === 'apartamentosavenda') {
      const imovelIds = getAllImovelIds();
      imovelIds.forEach((id) => {
        routes.push({
          url: `${baseUrl}/imovel/${id}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.9,
        });
      });
    }
  });

  return routes;
}
