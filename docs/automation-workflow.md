# Workflow e gatilho de renderização

Este projeto inclui o workflow N8N `automations/n8n-render-workflow.json` para acionar a renderização do vídeo Remotion por webhook.

## Objetivo do workflow

Receber uma requisição HTTP autorizada, normalizar o payload, validar o gatilho, executar o pipeline de renderização e responder com os caminhos dos artifacts gerados.

## Gatilho

- **Tipo:** Webhook N8N
- **Método:** `POST`
- **Path:** `/webhook/render-sono-cardio`
- **Header obrigatório:** `x-render-secret`
- **Variável ambiente no N8N:** `RENDER_WEBHOOK_SECRET`
- **Diretório do projeto:** `PROJECT_ROOT` apontando para a raiz do repositório montado no ambiente do N8N

## Segurança

O workflow não armazena secrets reais no repositório. O valor real de `RENDER_WEBHOOK_SECRET` deve ser configurado no ambiente do N8N ou no provedor de deploy. Também configure `PROJECT_ROOT` para que o node Execute Command encontre o `package.json`.

A validação compara o header recebido com a variável ambiente antes de executar qualquer comando de renderização.

## Payload recomendado

```json
{
  "requestId": "sono-cardio-001",
  "compositionId": "SleepTimingCommercial",
  "outputPath": "downloads/videos/sleep-timing-commercial.mp4"
}
```

## Exemplo de chamada

```bash
curl -X POST "$N8N_BASE_URL/webhook/render-sono-cardio" \
  -H "Content-Type: application/json" \
  -H "x-render-secret: $RENDER_WEBHOOK_SECRET" \
  -d '{"requestId":"sono-cardio-001","compositionId":"SleepTimingCommercial"}'
```

## Nodes principais

1. **Gatilho Webhook - Render:** recebe a requisição HTTP.
2. **Normalizar payload:** define `requestId`, `compositionId`, `outputPath`, `renderCommand` e `providedSecret`.
3. **Validar gatilho:** bloqueia chamadas sem secret configurado ou com header inválido.
4. **Renderizar Remotion:** entra em `PROJECT_ROOT` e executa `npm run render && npm run render:still && npm run export`.
5. **Responder sucesso / não autorizado:** devolve JSON padronizado para o cliente.

## Resposta de sucesso

```json
{
  "ok": true,
  "requestId": "sono-cardio-001",
  "compositionId": "SleepTimingCommercial",
  "outputPath": "downloads/videos/sleep-timing-commercial.mp4",
  "artifacts": [
    "downloads/videos/sleep-timing-commercial.mp4",
    "downloads/thumbnails/thumbnail.png",
    "downloads/exports/manifest.json"
  ],
  "message": "Renderização concluída e exportada."
}
```

## Resposta não autorizada

```json
{
  "ok": false,
  "error": "unauthorized_trigger",
  "message": "Gatilho rejeitado. Configure RENDER_WEBHOOK_SECRET no N8N e envie o header x-render-secret correto."
}
```

## Diagnóstico de falhas

Se o workflow não aparecer no GitHub Actions, confirme que os YAMLs estão em `.github/workflows/`. Se o N8N disparar mas não renderizar, valide `PROJECT_ROOT`, `RENDER_WEBHOOK_SECRET`, instalação de dependências e disponibilidade de Chrome/Chromium para o Remotion. Veja também `docs/workflow-diagnostics.md`.
