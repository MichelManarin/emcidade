import { MetadataRoute } from 'next'
import { getAllBusinesses, getAllCategories } from '@/data/businessData'

// Configure seu domínio base aqui (sem protocolo, será usado como base)
const DOMAIN_BASE = process.env.NEXT_PUBLIC_DOMAIN_BASE || 'emcidade.com.br'

// Lista de cidades disponíveis (ajuste conforme necessário)
const CITIES = ['criciuma']

function buildSubdomainUrl(subdomain: string, city: string): string {
  const cityLower = city.toLowerCase()
  const subdomainLower = subdomain.toLowerCase()
  // Formato: subdomain.emcity.com.br
  // Se DOMAIN_BASE é 'emcidade.com.br', extraímos apenas 'com.br'
  const domainSuffix = DOMAIN_BASE.includes('.') 
    ? DOMAIN_BASE.split('.').slice(-2).join('.') 
    : DOMAIN_BASE
  return `https://${subdomainLower}.em${cityLower}.${domainSuffix}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = []

  // Página home
  routes.push({
    url: `https://${DOMAIN_BASE}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
  })

  // Rotas de empresas (ex: premoldado.emcriciuma.com.br)
  const businesses = getAllBusinesses()
  businesses.forEach(({ subdomain, city }) => {
    routes.push({
      url: buildSubdomainUrl(subdomain, city),
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  // Rotas de categorias (ex: floricultura.emcriciuma.com.br)
  const categories = getAllCategories()
  CITIES.forEach(city => {
    categories.forEach(category => {
      routes.push({
        url: buildSubdomainUrl(category, city),
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })
    })
  })

  return routes
}

