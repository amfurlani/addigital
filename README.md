# Escritório Jurídico — V2

Projeto institucional em **Next.js + TypeScript**, preparado para publicação no GitHub/Vercel e para futura conexão com um CMS headless.

## O que existe nesta versão

- Home completa
- O Escritório
- Áreas de Atuação + páginas dinâmicas por área
- Equipe + perfis dinâmicos
- Experiência
- Conteúdo + artigos dinâmicos
- Avaliações no Google (estrutura editorial)
- Contato + endpoint `/api/contact`
- Política de Privacidade base
- Sitemap e robots.txt
- Metadata/SEO
- Layout responsivo
- Base de regras de compliance em `lib/compliance.ts`
- Dados centralizados em `lib/data.ts`, facilitando migração para Sanity, Strapi ou WordPress Headless

## Instalação

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Variáveis de ambiente

Copie `.env.example` para `.env.local`:

```bash
cp .env.example .env.local
```

Preencha:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `NEXT_PUBLIC_GOOGLE_REVIEWS_URL`
- `CONTACT_WEBHOOK_URL` (opcional, para envio real do formulário)

Sem `CONTACT_WEBHOOK_URL`, o formulário valida os dados e registra o payload no log do servidor, mas não entrega a mensagem externamente.

## Onde trocar os dados reais

- Nome, OAB, contatos e redes: `lib/site.ts`
- Áreas, equipe, artigos e avaliações: `lib/data.ts`
- Textos institucionais: arquivos dentro de `app/`

## Compliance

`lib/compliance.ts` contém verificações básicas para termos que devem ser revisados editorialmente, como promessa de resultado, percentuais de sucesso, valores recuperados, comparações e títulos de especialista.

Essas verificações são auxiliares e **não substituem revisão humana nem análise jurídica/ética antes da publicação**.

## Google Reviews

As avaliações em `lib/data.ts` são placeholders. Antes da publicação:

1. substitua pelos textos reais;
2. preserve o sentido e a origem;
3. não publique resultados de processos, valores ou informações confidenciais;
4. configure `NEXT_PUBLIC_GOOGLE_REVIEWS_URL`.

## CMS — próxima integração

A camada visual já consome estruturas simples de dados. Para migrar para um CMS, substitua os arrays em `lib/data.ts` por funções de consulta e mantenha as interfaces `Area`, `Lawyer` e `Article`.

## Deploy na Vercel

1. Suba o projeto para o GitHub.
2. Importe o repositório na Vercel.
3. Configure as variáveis de ambiente.
4. Adicione o domínio.
5. Rode o build de produção.

## Antes de publicar

- substituir todos os placeholders;
- revisar títulos acadêmicos e descrições profissionais;
- revisar avaliações;
- revisar Política de Privacidade conforme os fluxos reais;
- configurar entrega do formulário;
- cadastrar domínio/analytics apenas após revisar cookies e consentimento;
- fazer revisão final de compliance OAB.
