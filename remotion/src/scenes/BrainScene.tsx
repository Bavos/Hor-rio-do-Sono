import React from 'react';
import {CinematicTitle, SceneBadge} from '../components/Typography';
import {BrainHologram, FloatingPanels} from '../components/VisualElements';
import {HudRings, SceneShell} from '../components/Hud';

export const BrainScene: React.FC = () => (
  <SceneShell palette="violet">
    <HudRings x={540} y={650} scale={1.55} accent="#67e8f9" />
    <BrainHologram />
    <FloatingPanels count={18} />
    <div style={{position: 'absolute', left: 88, right: 88, top: 1010, height: 165, borderRadius: 32, background: 'linear-gradient(135deg, rgba(103,232,249,0.20), rgba(167,139,250,0.12))', border: '1px solid rgba(226,246,255,0.16)', boxShadow: '0 0 70px rgba(34,211,238,0.16)'}}>
      <div style={{height: 6, margin: 28, borderRadius: 99, background: 'linear-gradient(90deg, #67e8f9, #a78bfa, rgba(255,255,255,0.12))'}} />
      <div style={{margin: '0 28px', color: 'rgba(226,246,255,0.76)', fontSize: 18, letterSpacing: '0.16em', textTransform: 'uppercase'}}>circuitos de recompensa • memória • confirmação</div>
    </div>
    <SceneBadge label="Cérebro + IA" timecode="00:12" />
    <CinematicTitle top={1262} accent="#67e8f9" size={58}>A IA pode reforçar crenças e distorções psicológicas.</CinematicTitle>
  </SceneShell>
);
