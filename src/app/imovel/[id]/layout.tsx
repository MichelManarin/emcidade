import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  // Aqui você pode buscar dados do imóvel para criar meta tags dinâmicas
  const id = params.id;
  
  // Por enquanto, meta tags genéricas. Você pode melhorar buscando dados reais
  return {
    title: 'Imóvel Exclusivo Mobiliado em Criciúma | EmCriciúma',
    description: 'Apartamento exclusivo todo mobiliado em Criciúma. 3 dormitórios, suíte, sacada com bar/adega, 3 ar condicionado split e muito mais.',
    keywords: ['apartamento mobiliado criciuma', 'apartamento venda criciuma', 'imovel criciuma'],
  };
}

export default function ImovelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

