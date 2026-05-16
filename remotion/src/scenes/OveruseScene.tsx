import React from 'react';
import {CinematicTitle, SceneBadge} from '../components/Typography';
import {FloatingPanels, HumanSilhouette, PhoneScreen} from '../components/VisualElements';
import {HudRings, SceneShell} from '../components/Hud';

export const OveruseScene: React.FC = () => (
  <SceneShell palette="violet">
    <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 57%, rgba(14,165,233,0.36), transparent 28%)'}} />
    <HudRings x={544} y={820} scale={1.1} accent="#a78bfa" />
    <HumanSilhouette left={318} top={540} scale={1.05} glow="#a78bfa" tired />
    <PhoneScreen left={322} top={990} scale={1.02} intense />
    <FloatingPanels count={22} urgent />
    <SceneBadge label="Uso excessivo" timecode="00:04" />
    <CinematicTitle top={1260} accent="#a78bfa" size={57}>Alguns usuários passaram horas conversando com IA todos os dias.</CinematicTitle>
  </SceneShell>
);
