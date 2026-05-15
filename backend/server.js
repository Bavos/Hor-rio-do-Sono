import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
const port = Number(process.env.PORT ?? 3333);

app.use(helmet());
app.use(express.json({ limit: '1mb' }));
app.use(morgan('combined'));

app.get('/health', (_request, response) => {
  response.json({ status: 'ok', service: 'sono-cardio-video', timestamp: new Date().toISOString() });
});

app.get('/api/video-spec', (_request, response) => {
  response.json({
    compositionId: process.env.REMOTION_COMPOSITION_ID ?? 'SleepTimingCommercial',
    width: 1080,
    height: 1920,
    fps: 30,
    durationSeconds: 35,
    audio: false,
    topic: 'Associação observacional entre início do sono entre 22h e 23h e menor risco cardiovascular.'
  });
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
