# Wlciav01 — WLC.IA

Agente ia

## Aplicação

Uma interface responsiva de chat com histórico local, criação de conversas, sugestões iniciais e um núcleo de inteligência local (v0.1). A conexão com modelo externo é opcional e configurável.

## Estrutura

- `index.html`: interface e metadados.
- `src/styles.css`: design system e layout responsivo.
- `src/app.js`: interface, histórico, armazenamento local e integração opcional.
- `src/intelligence.js`: núcleo local, reconhecimento básico de intenções, conhecimento inicial e respostas transparentes para capacidades em desenvolvimento.
- `public/favicon.svg`: ícone da aplicação.

## Conectar uma IA

Abra Configurações no chat e informe um endpoint HTTP que aceite POST com `{ messages, project, system }` e retorne JSON com `reply`, `content`, `message` ou `choices[0].message.content`. O token, quando informado, é enviado como Bearer. Configure um endpoint confiável e compatível com CORS.

Sem endpoint, o chat usa o núcleo local de inteligência: ele responde a interações comuns e perguntas conhecidas sobre o WLC.IA e declara suas limitações quando não tem conhecimento suficiente. Esse núcleo não é um modelo generativo amplo e não deve ser confundido com uma IA conectada. O token é armazenado no localStorage deste navegador. Para produção, prefira um backend próprio que gerencie credenciais.

## Executar localmente

Requer Node.js 20+. Instale e execute: `npm install`, `npm run dev`. Para gerar arquivos de produção: `npm run build`; use `npm run preview` para visualizar o build. Também é possível abrir `index.html` em um servidor estático.

## Configuração

Não há segredos no código. A configuração da conexão é feita pelo usuário na interface.
