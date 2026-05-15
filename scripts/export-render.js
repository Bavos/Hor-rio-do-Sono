import { copyFile, mkdir, stat, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const videoPath = path.resolve('downloads/videos/sleep-timing-commercial.mp4');
const exportDir = path.resolve('downloads/exports');
const manifestPath = path.join(exportDir, 'manifest.json');
const exportVideoPath = path.join(exportDir, 'sleep-timing-commercial.mp4');

try {
  await mkdir(exportDir, { recursive: true });
  await stat(videoPath);
  await copyFile(videoPath, exportVideoPath);
  const hash = createHash('sha256').update(readFileSync(exportVideoPath)).digest('hex');
  await writeFile(manifestPath, JSON.stringify({ file: 'sleep-timing-commercial.mp4', sha256: hash, generatedAt: new Date().toISOString() }, null, 2));
  console.log(`Export created at ${exportVideoPath}`);
} catch (error) {
  console.error('Export failed. Render the video first with npm run render.', error instanceof Error ? error.message : error);
  process.exit(1);
}
