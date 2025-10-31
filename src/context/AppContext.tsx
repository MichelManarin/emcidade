"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

// Tipos para os dados da aplicação
export interface BusinessData {
  enabled: {
    hero: boolean;
    gallery: boolean;
    about: boolean;
    videos: boolean;
    links: boolean;
    reviews: boolean;
    contactCard: boolean;
    hoursCard: boolean;
    mapCard: boolean;
    faqCard: boolean;
  };
  business: {
    name: string;
    category: string;
    logo: string;
    description: string;
    rating: number;
    reviewCount: number;
    city: string;
    state: string;
    badges: string[];
  };
  contact: {
    whatsapp: string;
    phone: string;
    email: string;
    responseTime?: string;
  };
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  hours: Array<{
    day: string;
    time: string;
    open: boolean;
  }>;
  about: {
    mainText: string;
    tags: string[];
    services: Array<{
      title: string;
      description: string;
    }>;
  };
  gallery: string[];
  videos: Array<{
    id: string;
    title: string;
  }>;
  links: Array<{
    href: string;
    label: string;
    icon: string;
    nofollow?: boolean;
  }>;
  reviews: Array<{
    author: string;
    stars: number;
    text: string;
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  schema: {
    telephone: string;
    priceRange?: string;
    sameAs: string[];
  };
}

interface AppContextType {
  subdomain: string;
  city: string;
  data: BusinessData | null;
  loading: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [subdomain, setSubdomain] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [data, setData] = useState<BusinessData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      const urlParams = new URLSearchParams(window.location.search);
      
      // Em desenvolvimento, permite usar query params como fallback
      const isDevelopment = hostname === "localhost" || hostname === "127.0.0.1" || hostname.startsWith("localhost:");
      const subdomainFromQuery = urlParams.get("subdomain");
      const cityFromQuery = urlParams.get("city");

      let sub = "";
      let cityName = "";

      // Tentar extrair do hostname primeiro
      const parts = hostname.split(".");
      if (parts.length >= 3) {
        sub = parts[0];
        const cityPart = parts[1];

        cityName = cityPart;
        if (cityPart.startsWith("em")) {
          cityName = cityPart.substring(2);
        }
        cityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
      }
      
      // Em desenvolvimento, usar query params como fallback se hostname não tiver subdomínio
      if (isDevelopment && (!sub || sub === "localhost" || sub === "127") && subdomainFromQuery && cityFromQuery) {
        sub = subdomainFromQuery;
        cityName = cityFromQuery.charAt(0).toUpperCase() + cityFromQuery.slice(1);
      }

      if (sub && cityName) {
        setSubdomain(sub.charAt(0).toUpperCase() + sub.slice(1));
        setCity(cityName);

        // Carregar dados baseado no subdomínio + cidade
        const businessData = getBusinessData(sub.toLowerCase(), cityName.toLowerCase());
        
        // Verifica se encontrou dados válidos (não é o padrão vazio)
        const key = `${sub.toLowerCase()}-${cityName.toLowerCase()}`;
        const isValidBusiness = businessData.business.name !== "Nome da Empresa";
        
        if (isValidBusiness) {
          setData(businessData);
        }
      }
      setLoading(false);
    }
  }, []);

  return (
    <AppContext.Provider value={{ subdomain, city, data, loading }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

// Função para obter todos os subdomínios disponíveis
export function getAllBusinesses(): Array<{ subdomain: string; city: string; data: BusinessData }> {
  const businesses: Array<{ subdomain: string; city: string; data: BusinessData }> = [];
  
  // Lista de todas as combinações disponíveis
  const availableBusinesses = [
    { subdomain: "premoldado", city: "criciuma" },
  ];

  availableBusinesses.forEach(({ subdomain, city }) => {
    const data = getBusinessData(subdomain, city);
    businesses.push({
      subdomain: subdomain.charAt(0).toUpperCase() + subdomain.slice(1),
      city: city.charAt(0).toUpperCase() + city.slice(1),
      data,
    });
  });

  return businesses;
}

// Função para carregar dados baseado no subdomínio e cidade
function getBusinessData(subdomain: string, city: string): BusinessData {
  const key = `${subdomain.toLowerCase()}-${city.toLowerCase()}`;

  // Dados pré-configurados
  const configs: Record<string, BusinessData> = {
    "premoldado-criciuma": {
      enabled: {
        hero: true,
        gallery: true,
        about: true,
        videos: true,
        links: true,
        reviews: true,
        contactCard: true,
        hoursCard: true,
        mapCard: true,
        faqCard: true,
      },
      business: {
        name: "Premoldados em Criciúma - Premolde",
        category: "Construção Civil",
        logo: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=512&auto=format&fit=crop",
        description: "Especialistas em elementos pré-moldados de concreto para construção civil em Criciúma e região.",
        rating: 5,
        reviewCount: 12,
        city: "Criciúma",
        state: "SC",
        badges: ["Obras em toda região", "Aceita Pix"],
      },
      contact: {
        whatsapp: "5548999123456",
        phone: "+5548333312345",
        email: "contato@premoldadoscriciuma.com.br",
        responseTime: "~20 min",
      },
      address: {
        street: "Rua dos Premoldados, 450",
        city: "Criciúma",
        state: "SC",
        zipCode: "88805-000",
        coordinates: {
          lat: -28.6726,
          lng: -49.3719,
        },
      },
      hours: [
        { day: "Segunda", time: "07:30 – 18:30", open: true },
        { day: "Terça", time: "07:30 – 18:30", open: true },
        { day: "Quarta", time: "07:30 – 18:30", open: true },
        { day: "Quinta", time: "07:30 – 18:30", open: true },
        { day: "Sexta", time: "07:30 – 18:30", open: true },
        { day: "Sabádo", time: "Fechado", open: false },
        { day: "Domingo", time: "Fechado", open: false },
      ],
      about: {
        mainText: "Com mais de uma década de experiência em projetos estruturais e construção civil, Leonardo combina conhecimento técnico avançado com visão inovadora para entregar soluções que superam expectativas em toda Santa Catarina. Especialista em galpões industriais e estruturas de grande porte, conduz cada projeto com precisão técnica e comprometimento com a excelência, garantindo segurança, durabilidade e eficiência em todas as obras.",
        tags: [
          "Orçamento gratuito",
          "Obras em toda região",
        ],
        services: [
          {
            title: "Vigas Pré-moldadas",
            description: "Vigas de concreto armado pré-fabricadas em diversos tamanhos e especificações técnicas para estruturas residenciais e comerciais.",
          },
          {
            title: "Lajes Pré-moldadas",
            description: "Sistema de lajes pré-moldadas que oferecem rapidez na execução, redução de custos e excelente desempenho estrutural.",
          },
          {
            title: "Pilares e Painéis",
            description: "Elementos estruturais pré-moldados conforme projeto, garantindo precisão dimensional e qualidade no acabamento.",
          },
          {
            title: "Consultoria Técnica",
            description: "Suporte técnico para elaboração de projetos, especificações e cálculo estrutural de elementos pré-moldados.",
          },
        ],
      },
      gallery: [
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1920&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504307651254-35680f2df4ea?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop",
      ],
      videos: [
      ],
      links: [
        {
          href: "https://premolde.com",
          label: "Site oficial Premolde",
          icon: "website",
          nofollow: true,
        },
        {
          href: "https://instagram.com/premoldepremoldados/",
          label: "Instagram",
          icon: "instagram",
        },
        {
          href: "https://share.google/WGsvhPx2ollSGrYhx",
          label: "Google Maps / Avaliações",
          icon: "maps",
        },
        {
          href: "https://wa.me/5548996986266",
          label: "WhatsApp",
          icon: "whatsapp",
        },
      ],
      reviews: [
        {
          author: "Tiago T",
          stars: 5,
          text: "A empresa realmente é muito boa. Atendimento excepcional, sempre pronto pra tirar as dúvidas… e a obra muito bem executada. Pra mim nota 10",
        },
        {
          author: "Rodrigo Borges",
          stars: 5,
          text: "Empresa séria, trabalho executado com qualidade e com os melhores materiais do mercado.",
        },
        {
          author: "Dario Casali",
          stars: 5,
          text: "Super recomendo Serviço de alta qualidade",
        },
      ],
      faqs: [
        
      ],
      schema: {
        telephone: "+55 48 3333-1234",
        priceRange: "$$",
        sameAs: [
          "https://instagram.com/premoldadoscriciuma",
          "https://facebook.com/premoldadoscriciuma",
          "https://g.page/r/premoldados-criciuma",
        ],
      },
    },
  };

  // Retorna dados específicos ou dados padrão
  return configs[key] || getDefaultData();
}

function getDefaultData(): BusinessData {
  return {
    enabled: {
      hero: true,
      gallery: true,
      about: true,
      videos: true,
      links: true,
      reviews: true,
      contactCard: true,
      hoursCard: true,
      mapCard: true,
      faqCard: true,
    },
    business: {
      name: "Nome da Empresa",
      category: "Categoria",
      logo: "https://images.unsplash.com/photo-1549921296-3b4a841d6dc5?q=80&w=512&auto=format&fit=crop",
      description: "Descrição da empresa",
      rating: 4.9,
      reviewCount: 213,
      city: "Criciúma",
      state: "SC",
      badges: ["Atende em toda região sul", "Aceita Pix"],
    },
    contact: {
      whatsapp: "5548999999999",
      phone: "+554833334444",
      email: "contato@seudominio.com",
    },
    address: {
      street: "Rua Exemplo, 123",
      city: "Criciúma",
      state: "SC",
      zipCode: "88800-000",
      coordinates: {
        lat: -28.6726,
        lng: -49.3719,
      },
    },
    hours: [
      { day: "Segunda", time: "08:00 – 18:00", open: true },
      { day: "Terça", time: "08:00 – 18:00", open: true },
      { day: "Quarta", time: "08:00 – 18:00", open: true },
      { day: "Quinta", time: "08:00 – 18:00", open: true },
      { day: "Sexta", time: "08:00 – 18:00", open: true },
      { day: "Sábado", time: "09:00 – 13:00", open: true },
      { day: "Domingo", time: "Fechado", open: false },
    ],
    about: {
      mainText: "Descrição da empresa",
      tags: ["Tag 1", "Tag 2"],
      services: [],
    },
    gallery: [],
    videos: [],
    links: [],
    reviews: [],
    faqs: [],
    schema: {
      telephone: "+55 48 3333-4444",
      sameAs: [],
    },
  };
}

