# Agente de renderização

Responsabilidade: validar a composição `MainComposition`, executar o render MP4 e publicar o artifact final.

## Checklist operacional

1. Confirmar Node.js 20 ou superior.
2. Executar `npm install`.
3. Executar `npm run build --if-present`.
4. Criar `downloads/` quando necessário.
5. Executar `npx remotion render remotion/src/index.ts MainComposition downloads/video-final.mp4 --codec=h264 --overwrite`.
6. Disponibilizar `downloads/video-final.mp4` como artifact `video-remotion-final`.
