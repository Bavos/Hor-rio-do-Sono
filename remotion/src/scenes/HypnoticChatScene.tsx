import React from 'react';
import {CinematicTitle, SceneBadge} from '../components/Typography';
import {FloatingPanels, HumanSilhouette, PhoneScreen} from '../components/VisualElements';
import {HudRings, SceneShell} from '../components/Hud';

export const HypnoticChatScene: React.FC = () => (
  <SceneShell palette="amber">
    <HudRings x={560} y={820} scale={1.28} accent="#fbbf24" />
    <HumanSilhouette left={36} top={590} scale={0.86} glow="#fbbf24" tired />
    <PhoneScreen left={178} top={390} scale={1.68} intense />
    <FloatingPanels count={24} urgent />
    <div style={{position: 'absolute', left: 0, right: 0, top: 0, height: 1920, background: 'linear-gradient(100deg, transparent, rgba(251,191,36,0.12), transparent 56%)', mixBlendMode: 'screen'}} />
    <SceneBadge label="Chat hipnótico" timecode="00:16" />
    <CinematicTitle top={1340} accent="#fbbf24" size={62}>Quanto maior o isolamento, maior o risco.</CinematicTitle>
  </SceneShell>
);
