import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles.css';

const App = () => (
  <main className="frontend-shell">
    <section>
      <p className="eyebrow">Remotion • 1080x1920 • 30 FPS</p>
      <h1>IA Conversacional: Risco Psicológico</h1>
      <p>
        Projeto preparado para renderização automática do documentário vertical
        <strong> MainComposition</strong> em MP4 pelo GitHub Actions.
      </p>
      <code>npm run render</code>
    </section>
  </main>
);

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(<App />);
}
