# Diagnóstico: por que o workflow não funcionava

Este documento registra os problemas encontrados na revisão dos workflows e o ajuste aplicado.

## 1. Workflows do GitHub estavam no diretório errado para execução real

Os arquivos foram criados em `github/workflows/` porque essa estrutura havia sido solicitada no projeto. Porém, o GitHub Actions só executa workflows versionados em `.github/workflows/`.

**Impacto:** os arquivos YAML existiam no repositório, mas não apareciam na aba **Actions** e não eram disparados por `push`, `workflow_dispatch` ou `repository_dispatch`.

**Correção aplicada:** os workflows foram espelhados também para `.github/workflows/`, mantendo `github/workflows/` como documentação/estrutura solicitada e adicionando o caminho funcional do GitHub Actions.

## 2. O workflow N8N executava comandos sem garantir a pasta do projeto

O node **Execute Command** do N8N roda no diretório de trabalho do processo/container do N8N, não necessariamente na raiz do repositório. O comando anterior era:

```bash
npm run render && npm run render:still && npm run export
```

Se o N8N estivesse em outra pasta, o erro esperado seria semelhante a:

```text
npm ERR! enoent Could not read package.json
```

**Correção aplicada:** o comando agora entra explicitamente em `PROJECT_ROOT` antes de executar o pipeline:

```bash
cd "$PROJECT_ROOT" && npm run render && npm run render:still && npm run export
```

No workflow importado, `PROJECT_ROOT` tem fallback para `/app`, que é o caminho recomendado quando o repositório é montado em um container.

## 3. O gatilho Webhook depende de ativação e secret real no N8N

O arquivo JSON do workflow está com `active: false`, que é o comportamento seguro para importação. Depois de importar, é preciso ativar o workflow no N8N.

Além disso, o gatilho valida o header `x-render-secret` contra a variável ambiente `RENDER_WEBHOOK_SECRET`.

**Impacto:** se `RENDER_WEBHOOK_SECRET` não existir no ambiente do N8N, ou se o header não for enviado, o fluxo retorna `401` e não renderiza.

## 4. Renderização Remotion exige ambiente com Chrome/Chromium funcional

O Remotion precisa de Chromium/Chrome Headless e dependências de sistema compatíveis. Em ambientes sem Chromium instalado, ou sem acesso para baixar o Chrome Headless Shell, o render pode falhar antes de gerar o MP4.

**Sintoma comum:** erro de download do Chrome Headless Shell, dependências de sistema ausentes ou falhas de sandbox do Chromium.

## Checklist de funcionamento

1. Importar `automations/n8n-render-workflow.json` no N8N.
2. Montar o repositório no mesmo ambiente do N8N.
3. Configurar `PROJECT_ROOT` apontando para a raiz do projeto.
4. Configurar `RENDER_WEBHOOK_SECRET` com valor real.
5. Rodar `npm install` no projeto antes do primeiro render.
6. Ativar o workflow no N8N.
7. Chamar `POST /webhook/render-sono-cardio` com header `x-render-secret`.
8. Verificar se o ambiente possui Chrome/Chromium compatível para Remotion.
