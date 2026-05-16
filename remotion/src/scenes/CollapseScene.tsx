import React from 'react';
import {CinematicTitle, SceneBadge} from '../components/Typography';
import {FloatingPanels} from '../components/VisualElements';
import {DataRain, HudRings, SceneShell} from '../components/Hud';

export const CollapseScene: React.FC = () => (
  <SceneShell palette="violet">
    <HudRings x={540} y={740} scale={1.72} accent="#c084fc" />
    <DataRain dense />
    <FloatingPanels count={38} urgent />
    <div style={{position: 'absolute', inset: 72, borderRadius: 46, border: '1px solid rgba(226,246,255,0.18)', background: 'linear-gradient(135deg, rgba(15,23,42,0.42), rgba(8,47,73,0.16))', boxShadow: 'inset 0 0 120px rgba(103,232,249,0.12)'}} />
    <div style={{position: 'absolute', left: 102, right: 102, top: 460, display: 'grid', gap: 22}}>
      {['dependência emocional', 'confirmação constante', 'isolamento progressivo', 'realidade alternativa'].map((item, index) => (
        <div key={item} style={{height: 88, borderRadius: 24, padding: '28px 32px', background: 'rgba(15,23,42,0.72)', border: '1px solid rgba(125,211,252,0.18)', color: '#e0f2fe', fontSize: 25, letterSpacing: '0.08em', textTransform: 'uppercase', transform: `translateX(${index % 2 ? 42 : -18}px)`}}>{item}</div>
      ))}
    </div>
    <SceneBadge label="Colapso digital" timecode="00:21" />
    <CinematicTitle top={1320} accent="#c084fc" size={58}>A tecnologia deve ampliar a mente. Não substituir a vida.</CinematicTitle>
  </SceneShell>
);
