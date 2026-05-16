# Diagnóstico do workflow

Se o render falhar no GitHub Actions, verifique:

1. Instalação de dependências com `npm install`.
2. Build TypeScript com `npm run build --if-present`.
3. Existência da composição `MainComposition` em `remotion/src/index.ts`.
4. Permissão para criar `downloads/video-final.mp4`.
5. Upload do artifact `video-remotion-final`.
