# Apartamentos em Criciúma - EmCriciúma.com.br

Plataforma de anúncios imobiliários focada em apartamentos à venda em Criciúma/SC, com design clean e otimização para SEO.

## 🏠 Funcionalidades

### ✅ **Sistema de Rotas Públicas**
Cada imóvel tem sua própria URL para compartilhamento e SEO:

```
/ ou ?subdomain=apartamentosavenda  →  Lista de imóveis
/imovel/1                           →  Detalhes do imóvel ID 1
/imovel/2                           →  Detalhes do imóvel ID 2
```

### ✅ **Página Inicial - Lista de Imóveis**
- Grid responsivo com cards de apartamentos
- Foto de destaque, preço e características
- Click para ver detalhes completos (navega para `/imovel/[id]`)
- URL compartilhável
- SEO otimizado para lista

### ✅ **Página de Detalhes - `/imovel/[id]`**
- **Hero com foto de fundo** - Imagem do imóvel em destaque
- **Galeria completa** - 36 fotos profissionais
- **Características detalhadas** - Todos os diferenciais
- **Contato direto** - WhatsApp e telefone
- **Botão voltar** - Retorna para a lista
- **URL única** - Cada imóvel tem sua rota pública
- **Meta tags dinâmicas** - SEO específico por imóvel

## 🏢 Imóvel Atual

**IMÓVEL EXCLUSIVO - TODO MOBILIADO**
- 💰 **R$ 930.000,00**
- 🛏️ **3 Dormitórios** (1 suíte + 1 closet)
- 🚗 **1 Vaga de Garagem**

**Corretora:** Patrícia Dorigon - CRECI 43317  
**Contato:** (48) 9981-5876

## 🚀 Como Usar

```bash
# Instalar dependências
npm install

# Iniciar desenvolvimento
npm run dev
```

### URLs de Acesso:

**Lista de imóveis:**
```
http://localhost:3000?subdomain=apartamentosavenda
```

**Imóvel específico:**
```
http://localhost:3000/imovel/1?subdomain=apartamentosavenda
```

## 📱 Fluxo de Navegação

1. **Página Inicial** (`/`) → Lista com todos os imóveis disponíveis
2. **Click no card** → Navega para `/imovel/[id]`
3. **URL muda** → Pode compartilhar link direto do imóvel
4. **Ver galeria** → 36 fotos em alta qualidade
5. **Contato** → WhatsApp direto com mensagem pré-formatada
6. **Botão voltar** → Retorna para `/` (lista)

## 🎨 Design

### Hero com Foto de Fundo (rota `/imovel/[id]`)
- ✅ Imagem de destaque do imóvel
- ✅ Overlay com informações principais
- ✅ Preço em destaque
- ✅ CTAs de contato
- ✅ Info da corretora

### Lista de Imóveis (rota `/`)
- ✅ Grid responsivo (1/2/3 colunas)
- ✅ Cards com hover effects
- ✅ Foto, preço e características
- ✅ Badge "Exclusivo"
- ✅ CTA "Ver Detalhes"

### Galeria Interativa
- ✅ Foto principal grande
- ✅ Miniaturas clicáveis
- ✅ Modal fullscreen
- ✅ Navegação com setas

## 🔍 SEO Otimizado

### URLs Amigáveis
```
✅ apartamentosavenda.emcriciuma.com.br
✅ apartamentosavenda.emcriciuma.com.br/imovel/1
✅ apartamentosavenda.emcriciuma.com.br/imovel/2
```

### Meta Tags por Página
- ✅ Lista: Title e description para busca geral
- ✅ Detalhes: Title e description específicos por imóvel
- ✅ Keywords estratégicas
- ✅ Open Graph para compartilhamento

### Schema.org
```json
{
  "@type": "RealEstateListing",
  "name": "IMÓVEL EXCLUSIVO - TODO MOBILIADO",
  "offers": {
    "price": "930000",
    "priceCurrency": "BRL"
  }
}
```

### Keywords Principais
- apartamento mobiliado criciuma
- apartamento a venda criciuma
- apartamento 3 quartos criciuma
- patricia dorigon creci 43317

## 📂 Estrutura

```
src/
├── app/
│   ├── page.tsx                    # Rota raiz (/)
│   ├── layout.tsx                  # Layout principal
│   └── imovel/
│       └── [id]/
│           ├── page.tsx            # Rota /imovel/[id]
│           └── layout.tsx          # Meta tags dinâmicas
│
└── subdomains/
    └── apartamentosavenda/
        ├── pages/
        │   ├── ListaPage.tsx       # Página da lista (/)
        │   └── DetalhesPage.tsx    # Página de detalhes (/imovel/[id])
        ├── components/
        │   ├── ListaImoveis.tsx    # Grid de imóveis
        │   ├── Hero.tsx            # Hero com foto de fundo
        │   ├── Galeria.tsx         # 36 fotos interativas
        │   ├── Detalhes.tsx        # Características
        │   └── Contato.tsx         # CTAs de contato
        ├── context/
        │   └── ApartamentosContext.tsx
        └── index.tsx               # Router do subdomínio
```

## 🔗 Como Funcionam as Rotas

### ⚠️ Proteção de Subdomínio

**Apenas o subdomínio `apartamentosavenda` tem acesso às páginas:**
- ✅ `?subdomain=apartamentosavenda` → Mostra imóveis
- ❌ Qualquer outro subdomínio → **404 Not Found**
- ❌ Sem subdomínio → **Redireciona para apartamentosavenda**

### 1. Usuário acessa a home
```
URL: http://localhost:3000?subdomain=apartamentosavenda
Renderiza: ListaPage (mostra todos os imóveis)

URL: http://localhost:3000?subdomain=outro
Resultado: 404 - Subdomínio não existe
```

### 2. Usuário clica em "Ver Detalhes"
```
URL muda para: http://localhost:3000/imovel/1?subdomain=apartamentosavenda
Renderiza: DetalhesPage com ID=1

URL: http://localhost:3000/imovel/1?subdomain=outro
Resultado: 404 - Subdomínio não existe
```

### 3. Usuário pode compartilhar
```
Link: apartamentosavenda.emcriciuma.com.br/imovel/1
Abre diretamente: Detalhes do imóvel #1
SEO: Google indexa cada imóvel separadamente

Link: outrosubdominio.emcriciuma.com.br
Resultado: 404 - Apenas apartamentosavenda existe
```

## ➕ Como Adicionar Mais Imóveis

Edite: `src/subdomains/apartamentosavenda/context/ApartamentosContext.tsx`

```typescript
const todosApartamentos: Apartamento[] = [
  apartamentoExclusivo, // ID: 1 → /imovel/1
  {
    id: '2',              // ID: 2 → /imovel/2
    titulo: 'Novo Apartamento...',
    preco: 500000,
    // ... dados do novo imóvel
  },
];
```

Cada imóvel terá automaticamente:
- ✅ Card na lista principal
- ✅ Rota pública: `/imovel/[id]`
- ✅ URL compartilhável
- ✅ Meta tags específicas

## 🎯 Conversão

### CTAs Estratégicos
1. **Página de Lista** - "Ver Detalhes" (navega para rota pública)
2. **Hero** - WhatsApp direto com mensagem pré-formatada
3. **Galeria** - Engajamento visual
4. **Contato** - WhatsApp + Telefone

### Mensagem WhatsApp Automática
```
Olá Patrícia! Tenho interesse no imóvel exclusivo 
todo mobiliado de R$ 930.000,00. Gostaria de mais informações.
```

## 📊 Performance

- ✅ Next.js 15 com App Router
- ✅ Rotas dinâmicas [id]
- ✅ Imagens otimizadas (Next Image)
- ✅ Lazy loading automático
- ✅ Mobile-first design
- ✅ Transições suaves
- ✅ URLs amigáveis para SEO

## 🌐 Produção

### URLs Finais:
```
Lista:    apartamentosavenda.emcriciuma.com.br
Imóvel 1: apartamentosavenda.emcriciuma.com.br/imovel/1
Imóvel 2: apartamentosavenda.emcriciuma.com.br/imovel/2
```

## 📝 Checklist

- [x] Lista de imóveis responsiva
- [x] Rotas públicas para cada imóvel
- [x] Hero com foto de fundo
- [x] Galeria completa (36 fotos)
- [x] Detalhes do imóvel
- [x] Contato WhatsApp
- [x] Botão voltar com navegação
- [x] SEO otimizado
- [x] URLs compartilháveis
- [x] Schema.org
- [x] Mobile responsive
- [ ] Sitemap dinâmico
- [ ] Google Analytics
- [ ] Facebook Pixel
- [ ] Tour virtual 360°

## 🔧 Compartilhamento

Cada imóvel pode ser compartilhado diretamente:

```javascript
// Link direto para compartilhar
const linkImovel = `https://apartamentosavenda.emcriciuma.com.br/imovel/1`;

// WhatsApp
const whatsappLink = `https://wa.me/554899815876?text=Olha esse imóvel: ${linkImovel}`;

// Facebook, Instagram, etc
// Usa as meta tags Open Graph automaticamente
```

## 📄 Licença

© 2025 EmCriciúma.com.br - Todos os direitos reservados
