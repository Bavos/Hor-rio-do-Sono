# Sono e Saúde Cardiovascular — Remotion Commercial

Projeto completo para gerar um vídeo comercial vertical, estilo conversa de WhatsApp premium, sobre um estudo observacional que associou dormir entre **22h e 23h** a menor risco cardiovascular.

O vídeo foi desenhado para redes sociais com linguagem curiosa, comercial e responsável: não afirma cura, não promete prevenção garantida e não diz que dormir nesse horário elimina risco cardíaco.

## Estrutura

```text
project-root/
├── backend/              # API Node.js/Express para healthcheck e metadados do vídeo
├── frontend/             # React + Tailwind com preview do player Remotion
├── remotion/             # Compositions, cenas, componentes, hooks e utilitários do vídeo
├── automations/          # Workflow N8N para renderização programática
├── prompts/              # Briefs e prompts operacionais
├── agents/               # Documentação para agentes de IA/automação
├── docs/                 # Fontes científicas internas e documentação técnica
├── downloads/            # Saídas finais: videos, thumbnails e exports
├── temp/                 # Arquivos temporários
├── scripts/              # Scripts auxiliares de exportação
├── github/workflows/     # Workflows de CI/CD solicitados
├── .env                  # Variáveis ambiente não sensíveis de exemplo
├── docker-compose.yml    # Deploy local em Docker
├── README.md             # Documentação principal
└── package.json          # Scripts e dependências
```

## Especificações do vídeo

- **Composição:** `SleepTimingCommercial`
- **Formato:** 1080x1920 vertical
- **Duração:** 35 segundos
- **FPS:** 30
- **Áudio:** sem narrador, sem música e sem som
- **Estilo:** WhatsApp moderno premium, fundo escuro sofisticado e balões diferenciados por pessoa
- **Tom:** curiosidade de saúde baseada em estudo observacional

## Instalação

```bash
npm install
```

## Desenvolvimento

Preview web com React + Tailwind:

```bash
npm run dev
```

Backend Node.js:

```bash
npm run backend:dev
```

Remotion Studio:

```bash
npm run remotion:studio
```

## Renderização

Gerar MP4 final em `downloads/videos/`:

```bash
npm run render
```

Gerar thumbnail em `downloads/thumbnails/`:

```bash
npm run render:still
```

Exportar cópia final e manifesto SHA-256 para `downloads/exports/`:

```bash
npm run export
```

Pipeline completo recomendado:

```bash
npm run render && npm run render:still && npm run export
```

## Qualidade e CI

```bash
npm run lint
npm run typecheck
npm run build
npm run ci
```

Os workflows em `github/workflows/` executam instalação de dependências, lint, typecheck, renderização Remotion, exportação MP4 e upload de artifacts.

> Observação: se este projeto for usado diretamente no GitHub Actions, mova ou espelhe `github/workflows/` para `.github/workflows/`, caso o provedor exija o caminho padrão do GitHub.

## Variáveis ambiente

As variáveis estão em `.env` como valores não sensíveis de desenvolvimento:

| Variável | Uso |
| --- | --- |
| `NODE_ENV` | Ambiente de execução |
| `PORT` | Porta do backend Express |
| `PUBLIC_APP_NAME` | Nome público do projeto |
| `REMOTION_COMPOSITION_ID` | ID da composição Remotion |
| `REMOTION_OUTPUT` | Caminho esperado para o MP4 final |
| `RENDER_WEBHOOK_SECRET` | Secret usado pelo gatilho Webhook do N8N; configurar valor real apenas no ambiente de execução |

Nunca salve tokens, chaves de API ou credenciais reais no repositório. Use secrets do provedor de CI/CD em produção.

## Automação N8N

O arquivo `automations/n8n-render-workflow.json` contém um fluxo com gatilho explícito para renderização:

1. **Gatilho Webhook POST** em `/webhook/render-sono-cardio`.
2. Normalização de payload com `requestId`, `compositionId` e `outputPath`.
3. Validação do header `x-render-secret` contra `RENDER_WEBHOOK_SECRET`.
4. Execução do comando `npm run render && npm run render:still && npm run export`.
5. Resposta JSON de sucesso ou erro não autorizado.

A documentação completa do gatilho, payload e exemplo de `curl` está em `docs/automation-workflow.md`. Em produção, recomenda-se isolar a renderização em fila, validar payloads, registrar logs e limitar permissões do worker.

## Fontes científicas usadas

As fontes estão documentadas internamente em `docs/sources.md` e não aparecem no vídeo:

1. **European Heart Journal – Digital Health** — “Accelerometer-derived sleep onset timing and cardiovascular disease incidence: a UK Biobank cohort study”.
2. **British Heart Foundation** — análise pública reforçando associação e ausência de prova de causa e efeito.

## Aviso de responsabilidade

Este conteúdo é exclusivamente informativo e educativo. Ele não substitui orientação médica, diagnóstico, tratamento ou acompanhamento individualizado com profissional de saúde. O estudo citado é observacional e indica associação, não causalidade nem prevenção garantida.

## Deploy com Docker

```bash
docker compose up app
```

O serviço sobe o backend em `http://localhost:3333` e disponibiliza `/health` e `/api/video-spec`.
