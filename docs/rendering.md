# Renderização

A composição principal chama-se `MainComposition` e está registrada em `remotion/src/index.ts`.

## Especificações técnicas

- Resolução: 1080x1920
- Orientação: vertical
- FPS: 30
- Duração: 900 frames, exatamente 30 segundos
- Saída: `downloads/video-final.mp4`
- Codec: H.264
- Áudio: inexistente

## Render local

```bash
npm install
npm run build --if-present
npm run render
```

## Render no GitHub Actions

O arquivo `.github/workflows/render.yml` roda no push para `main` e por execução manual. O artifact gerado tem o nome `video-remotion-final`.
