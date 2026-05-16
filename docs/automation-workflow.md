# Automação do workflow

O pipeline oficial é o GitHub Actions `.github/workflows/render.yml`. Ele roda em push para `main` e por `workflow_dispatch`, instala Node.js 20, executa `npm install`, valida o build, renderiza o MP4 final e publica o artifact `video-remotion-final`.
