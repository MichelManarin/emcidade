// Este arquivo contém funções de dados que podem ser usadas tanto no servidor quanto no cliente
// Não use "use client" aqui para permitir uso no servidor (sitemap, etc)

import type { CategoryData } from "@/context/AppContext";

// Re-exportar tipos para uso externo
export type { BusinessData, CategoryData } from "@/context/AppContext";

// Lista de todas as combinações de negócios disponíveis
export const AVAILABLE_BUSINESSES = [
  { subdomain: "premoldado", city: "criciuma" },
];

// Lista de todas as categorias disponíveis
export const AVAILABLE_CATEGORIES = ["floricultura", "grafica", "pneus"];

// Função para obter todos os subdomínios disponíveis (server-safe)
export function getAllBusinesses(): Array<{ subdomain: string; city: string }> {
  return AVAILABLE_BUSINESSES.map(({ subdomain, city }) => ({
    subdomain: subdomain.charAt(0).toUpperCase() + subdomain.slice(1),
    city: city.charAt(0).toUpperCase() + city.slice(1),
  }));
}

// Função para obter todas as categorias disponíveis (server-safe)
export function getAllCategories(): string[] {
  return AVAILABLE_CATEGORIES;
}

// Função para obter dados de categoria (server-safe)
export function getCategoryData(categoryName: string): CategoryData | null {
  const categories: Record<string, CategoryData> = {
    floricultura: {
      name: "floricultura",
      title: "Floricultura em {city}",
      description: "Encontre as melhores floriculturas da região. Flores frescas, arranjos personalizados, plantas ornamentais e muito mais para tornar seus momentos especiais ainda mais bonitos.",
      icon: "🌸",
      color: "pink",
      gradientFrom: "from-pink-600",
      gradientTo: "to-rose-500",
      benefits: [
        "Flores frescas diariamente",
        "Arranjos personalizados para todas as ocasiões",
        "Plantas ornamentais e cuidados",
        "Entrega rápida e cuidadosa",
        "Consultoria para decoração de eventos"
      ],
      services: [
        {
          title: "Buquês e Arranjos",
          description: "Criações únicas e personalizadas para aniversários, casamentos, formaturas e datas especiais."
        },
        {
          title: "Plantas Ornamentais",
          description: "Variedade de plantas para decorar sua casa ou escritório, com dicas de cuidados."
        },
        {
          title: "Decoração de Eventos",
          description: "Serviço completo de decoração floral para casamentos, eventos corporativos e festas."
        },
        {
          title: "Jardins e Paisagismo",
          description: "Criação e manutenção de jardins residenciais e comerciais."
        }
      ],
      tips: [
        "Regue suas plantas pela manhã ou no final da tarde",
        "Use adubo orgânico para plantas mais saudáveis",
        "Escolha flores da estação para maior durabilidade",
        "Mantenha arranjos em água fresca trocando a cada 2 dias"
      ],
      whatsappMessage: "Olá! Tenho interesse em criar meu perfil de floricultura no Guia da Cidade."
    },
    grafica: {
      name: "grafica",
      title: "Gráficas em {city}",
      description: "Serviços gráficos completos para sua empresa. Impressão digital, materiais promocionais, papelaria personalizada e muito mais com qualidade e prazo de entrega.",
      icon: "🖨️",
      color: "blue",
      gradientFrom: "from-blue-600",
      gradientTo: "to-cyan-500",
      benefits: [
        "Impressão de alta qualidade",
        "Materiais promocionais personalizados",
        "Papelaria empresarial completa",
        "Projetos gráficos e design",
        "Entrega rápida e pontual"
      ],
      services: [
        {
          title: "Impressão Digital",
          description: "Cartões de visita, flyers, folders, banners e materiais promocionais em alta qualidade."
        },
        {
          title: "Papelaria Personalizada",
          description: "Timbrados, papel de carta, envelopes, pastas e materiais corporativos."
        },
        {
          title: "Design Gráfico",
          description: "Criação de logos, identidade visual e materiais gráficos profissionais."
        },
        {
          title: "Grande Formato",
          description: "Banners, adesivos, faixas, lonas e impressões em grandes dimensões."
        }
      ],
      tips: [
        "Sempre peça prova antes de imprimir em grande quantidade",
        "Verifique a resolução das imagens para melhor qualidade",
        "Escolha o papel adequado para cada tipo de impressão",
        "Consulte prazos de entrega com antecedência para eventos"
      ],
      whatsappMessage: "Olá! Tenho interesse em criar meu perfil de gráfica no Guia da Cidade."
    },
    pneus: {
      name: "pneus",
      title: "Pneus em {city}",
      description: "Encontre os melhores serviços de pneus da região. Troca, alinhamento, balanceamento, calibragem e venda de pneus das melhores marcas com garantia e qualidade.",
      icon: "🚗",
      color: "orange",
      gradientFrom: "from-orange-600",
      gradientTo: "to-red-500",
      benefits: [
        "Pneus das melhores marcas",
        "Serviço rápido e profissional",
        "Alinhamento e balanceamento",
        "Garantia em produtos e serviços",
        "Atendimento especializado"
      ],
      services: [
        {
          title: "Venda de Pneus",
          description: "Pneus novos e usados de todas as marcas e medidas, com as melhores condições de pagamento."
        },
        {
          title: "Alinhamento e Balanceamento",
          description: "Serviço completo de alinhamento, balanceamento e calibragem para seu veículo."
        },
        {
          title: "Troca de Pneus",
          description: "Serviço rápido e profissional de troca de pneus com equipamentos modernos."
        },
        {
          title: "Conserto de Pneus",
          description: "Reparos em pneus furados e serviços de remoldagem quando necessário."
        }
      ],
      tips: [
        "Verifique a calibragem dos pneus semanalmente",
        "Troque os pneus quando a profundidade do sulco estiver abaixo de 1,6mm",
        "Rotacione os pneus a cada 10.000 km para maior durabilidade",
        "Evite andar com pneus carecas - é perigoso e multado pelo Detran"
      ],
      whatsappMessage: "Olá! Tenho interesse em criar meu perfil de loja de pneus no Guia da Cidade."
    }
  };

  return categories[categoryName.toLowerCase()] || null;
}

