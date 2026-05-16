# IA Conversacional: Riscos Psicológicos — Remotion

Projeto React + TypeScript + Remotion para renderizar automaticamente um vídeo vertical cinematográfico de exatamente 30 segundos sobre riscos psicológicos do uso excessivo de inteligência artificial conversacional.

## Resultado

- Composição: `MainComposition`
- Formato: 1080x1920 vertical
- FPS: 30
- Duração: 30 segundos exatos (`900` frames)
- Saída: `downloads/video-final.mp4`
- Áudio: nenhum
- Imagens binárias externas: nenhuma

## Estrutura

```text
backend/
frontend/
remotion/
automations/
prompts/
agents/
docs/
downloads/
temp/
scripts/
github/
.github/workflows/render.yml
.env
docker-compose.yml
README.md
package.json
```

## Cenas

1. 0s–4s — abertura futurista com cidade noturna, celular, notificações e pergunta de impacto.
2. 4s–8s — uso excessivo durante a madrugada com múltiplos chats e olhos cansados.
3. 8s–12s — perda de contato com a realidade com feeds digitais cobrindo a cena.
4. 12s–16s — cérebro holográfico, conexões neurais, estímulos e dados.
5. 16s–21s — chat hipnótico em tela dominante, sem marcas reais.
6. 21s–26s — colapso digital com excesso elegante de informações.
7. 26s–30s — fechamento humano com luz natural e uso consciente.

## Comandos

```bash
npm install
npm run build
npm run validate
npm run render
```

## GitHub Actions

O workflow obrigatório está em `.github/workflows/render.yml` e executa automaticamente em push na branch `main`, além de permitir execução manual. Ele renderiza com o comando:

```bash
npx remotion render remotion/src/index.ts MainComposition downloads/video-final.mp4 --codec=h264 --overwrite
```

O MP4 final é enviado como artifact chamado `video-remotion-final`, permitindo download direto do vídeo renderizado.

## Docker

```bash
docker compose up --build
```

O container instala dependências, valida o build TypeScript e renderiza `downloads/video-final.mp4`.
