import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
const port = Number(process.env.PORT ?? 3333);

app.use(helmet());
app.use(express.json({limit: '1mb'}));
app.use(morgan('tiny'));

app.get('/health', (_request, response) => {
  response.json({
    ok: true,
    service: 'ia-conversacional-riscos-remotion',
    compositionId: process.env.REMOTION_COMPOSITION_ID ?? 'MainComposition',
    output: process.env.VIDEO_OUTPUT_PATH ?? 'downloads/video-final.mp4',
  });
});

app.get('/render-config', (_request, response) => {
  response.json({
    composition: 'MainComposition',
    width: 1080,
    height: 1920,
    fps: 30,
    durationSeconds: 30,
    output: 'downloads/video-final.mp4',
    audio: false,
    externalBinaryImages: false,
  });
});

app.listen(port, () => {
  console.log(`Render metadata API running on http://localhost:${port}`);
});
