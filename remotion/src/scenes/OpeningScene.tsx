import React from 'react';
import {CinematicTitle, SceneBadge} from '../components/Typography';
import {FuturisticCity, FloatingPanels, HumanSilhouette, PhoneScreen} from '../components/VisualElements';
import {HudRings, SceneShell} from '../components/Hud';

export const OpeningScene: React.FC = () => (
  <SceneShell palette="blue">
    <FuturisticCity />
    <HudRings x={540} y={760} scale={0.92} />
    <HumanSilhouette left={355} top={610} scale={0.92} glow="#67e8f9" />
    <PhoneScreen left={360} top={1010} scale={0.88} />
    <FloatingPanels count={16} />
    <SceneBadge label="Abertura" timecode="00:00" />
    <CinematicTitle top={1248} accent="#67e8f9" size={58}>E se a inteligência artificial começasse a substituir a realidade?</CinematicTitle>
  </SceneShell>
);
