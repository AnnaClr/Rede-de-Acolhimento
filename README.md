# Rede de Acolhimento

Aplicação demonstrativa construída com Next.js App Router, React e TypeScript. Os dados exibidos
são ilustrativos e não representam serviços ou organizações reais.

## Executar localmente

```bash
npm ci
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Rotas

- `/` — página inicial
- `/explore` — busca e filtros de espaços
- `/map` — mapa ilustrativo
- `/events` — agenda demonstrativa
- `/forum` — discussões comunitárias
- `/rights` — informações e direitos
- `/login`, `/signup` e `/recuperar-senha` — fluxos de autenticação demonstrativos
- `/health` e `/welcoming` — páginas em preparação

O App Router define cada rota com um `page.tsx` dentro de `app`. Os componentes compartilhados e
os componentes específicos das páginas ficam em `src/components`; os estilos das páginas ficam
em `app/<rota>/style.css`. A paleta de cores está isolada em `src/styles/palette.css`.

## Verificações

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Não utilize dados pessoais nem senhas reais no fluxo demonstrativo de autenticação.
