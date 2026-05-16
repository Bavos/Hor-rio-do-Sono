import {existsSync, readFileSync} from 'node:fs';

const required = [
  'backend',
  'frontend',
  'remotion',
  'automations',
  'prompts',
  'agents',
  'docs',
  'downloads',
  'temp',
  'scripts',
  'github',
  '.github/workflows/render.yml',
  '.env',
  'docker-compose.yml',
  'README.md',
  'package.json',
  'tsconfig.json',
  'remotion.config.ts',
  'remotion/src/index.ts',
];

const missing = required.filter((path) => !existsSync(path));
if (missing.length > 0) {
  console.error(`Arquivos ou diretórios ausentes: ${missing.join(', ')}`);
  process.exit(1);
}

const workflow = readFileSync('.github/workflows/render.yml', 'utf8');
const command = 'npx remotion render remotion/src/index.ts MainComposition downloads/video-final.mp4 --codec=h264 --overwrite';
if (!workflow.includes(command)) {
  console.error('Workflow não contém o comando obrigatório de renderização.');
  process.exit(1);
}

const composition = readFileSync('remotion/src/MainComposition.tsx', 'utf8');
for (const expected of ['durationInFrames: VIDEO.durationInFrames', 'width: VIDEO.width', 'height: VIDEO.height', 'fps: VIDEO.fps']) {
  if (!composition.includes(expected)) {
    console.error(`Configuração da composição não encontrada: ${expected}`);
    process.exit(1);
  }
}

console.log('Projeto validado: estrutura, workflow e composição MainComposition estão corretos.');
