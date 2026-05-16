import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CinematicTitle, SceneBadge} from '../components/Typography';
import {FloatingPanels, FuturisticCity, HumanSilhouette, PhoneScreen} from '../components/VisualElements';
import {HudRings, SceneShell} from '../components/Hud';

export const RealityLossScene: React.FC = () => {
  const frame = useCurrentFrame();
  const blur = interpolate(frame, [0, 80], [1, 8], {extrapolateRight: 'clamp'});
  return (
    <SceneShell palette="blue">
      <div style={{filter: `blur(${blur}px)`, opacity: 0.42}}><FuturisticCity /></div>
      <HudRings x={518} y={790} scale={1.22} />
      <HumanSilhouette left={270} top={525} scale={1.12} glow="#38bdf8" tired />
      <PhoneScreen left={252} top={910} scale={1.32} intense />
      <FloatingPanels count={26} urgent />
      <SceneBadge label="Realidade filtrada" timecode="00:08" />
      <CinematicTitle top={1264} accent="#38bdf8" size={58}>Especialistas alertam para dependência emocional e delírios.</CinematicTitle>
    </SceneShell>
  );
};
