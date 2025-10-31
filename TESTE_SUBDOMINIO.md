# Como testar subdomínios em localhost

Existem duas formas de testar subdomínios em desenvolvimento local:

## Opção 1: Usar Query Parameters (Mais Fácil) ⚡

Simplesmente adicione os parâmetros na URL:

```
http://localhost:3000/?subdomain=premoldado&city=criciuma
```

**Vantagens:**
- ✅ Não precisa configurar nada
- ✅ Funciona imediatamente
- ✅ Pode testar diferentes combinações facilmente

**Como usar:**
1. Inicie o servidor: `npm run dev`
2. Acesse: `http://localhost:3000/?subdomain=premoldado&city=criciuma`
3. Os dados de "Premoldados em Criciúma" serão carregados automaticamente

## Opção 2: Configurar arquivo hosts (Mais realista) 🎯

Esta opção simula um domínio real com subdomínio:

### Windows:

1. Abra o Bloco de Notas **como Administrador**
2. Abra o arquivo: `C:\Windows\System32\drivers\etc\hosts`
3. Adicione estas linhas no final:

```
127.0.0.1 premoldado.emcriciuma.localhost
127.0.0.1 advogado.emcriciuma.localhost
```

4. Salve o arquivo
5. Reinicie o servidor Next.js: `npm run dev`
6. Acesse: `http://premoldado.emcriciuma.localhost:3000`

### Mac/Linux:

1. Abra o terminal
2. Edite o arquivo hosts:
   ```bash
   sudo nano /etc/hosts
   ```
3. Adicione estas linhas:
   ```
   127.0.0.1 premoldado.emcriciuma.localhost
   127.0.0.1 advogado.emcriciuma.localhost
   ```
4. Salve (Ctrl+O, Enter, Ctrl+X)
5. Acesse: `http://premoldado.emcriciuma.localhost:3000`

**Nota:** O Next.js precisa ser configurado para aceitar esse hostname. Se necessário, adicione no `next.config.ts`:

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... outras configurações
}

module.exports = nextConfig
```

## Testando diferentes subdomínios

### Via Query Params:
- Premoldados: `?subdomain=premoldado&city=criciuma`
- Advogados: `?subdomain=advogado&city=criciuma`
- Padrão (sem subdomínio): não passar parâmetros

### Via hosts:
Crie entradas diferentes no arquivo hosts para cada subdomínio que quiser testar.

## Recomendação

Para desenvolvimento rápido, use a **Opção 1** (query params). 
Para testar mais próximo do ambiente real, use a **Opção 2** (hosts).

