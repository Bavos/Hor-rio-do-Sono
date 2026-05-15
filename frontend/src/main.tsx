import React from 'react';
import { createRoot } from 'react-dom/client';
import { Player } from '@remotion/player';
import { SleepTimingCommercial } from '../../remotion/compositions/SleepTimingCommercial';
import './styles.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <main className="min-h-screen bg-ink text-slate-100">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center gap-8 px-6 py-12 lg:flex-row">
        <div className="max-w-xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-mint/70">Remotion Commercial</p>
          <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">Vídeo vertical premium sobre sono e saúde cardiovascular.</h1>
          <p className="text-lg leading-8 text-slate-300">Conversa estilo WhatsApp, sem áudio, com linguagem responsável: curiosidade científica baseada em estudo observacional, sem prometer cura ou prevenção garantida.</p>
          <div className="rounded-2xl border border-mint/20 bg-premium/70 p-5 text-sm text-slate-300 shadow-2xl">Render final: <code>downloads/videos/sleep-timing-commercial.mp4</code></div>
        </div>
        <div className="w-full max-w-[360px] overflow-hidden rounded-[2rem] border border-mint/20 shadow-[0_0_80px_rgba(86,226,164,.22)]">
          <Player component={SleepTimingCommercial} durationInFrames={1050} fps={30} compositionWidth={1080} compositionHeight={1920} controls style={{ width: '100%', aspectRatio: '9 / 16' }} />
        </div>
      </section>
    </main>
  </React.StrictMode>
);
