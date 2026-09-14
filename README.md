# Site institucional — Escritório de Advocacia

Starter em Next.js + TypeScript para o site institucional planejado.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Personalização obrigatória

Antes de publicar:
- substituir `NOME`, OAB, e-mail, telefone e links sociais;
- substituir textos demonstrativos e nomes da equipe;
- revisar todas as áreas de atuação;
- conectar o formulário a um serviço/backend seguro;
- substituir as avaliações demonstrativas por avaliações reais e espontâneas, preservando a origem;
- criar Política de Privacidade e demais documentos necessários;
- revisar conteúdo e publicidade conforme as regras aplicáveis da OAB antes da publicação.

## Estrutura

- `app/page.tsx`: página principal e conteúdo.
- `app/globals.css`: identidade visual e responsividade.
- `app/layout.tsx`: metadata e layout global.
- `public/`: imagens e ativos estáticos.

## Observação de compliance

O conteúdo de demonstração não deve ser tratado como autorização para publicar resultados, promessas, listas de clientes, logos de clientes ou depoimentos produzidos. Faça a revisão jurídica do conteúdo final antes do lançamento.
