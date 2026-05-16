import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {CinematicTitle, SceneBadge} from '../components/Typography';
import {DawnWindow, HumanSilhouette, PhoneScreen} from '../components/VisualElements';
import {ParticleField, SceneShell} from '../components/Hud';

export const ClosingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const closePhone = interpolate(frame, [0, 72, 120], [1, 0.62, 0.42], {extrapolateRight: 'clamp'});
  return (
    <SceneShell palette="dawn">
      <DawnWindow />
      <ParticleField intensity={28} color="#f8fafc" />
      <HumanSilhouette left={332} top={610} scale={1} glow="#bae6fd" />
      <div style={{opacity: closePhone, transform: `translateY(${interpolate(frame, [0, 92], [0, 155], {extrapolateRight: 'clamp'})}px)`}}>
        <PhoneScreen left={346} top={1020} scale={0.88} />
      </div>
      <SceneBadge label="Retorno humano" timecode="00:26" />
      <CinematicTitle top={1185} align="center" accent="#f8fafc" size={76}>Use IA com consciência.</CinematicTitle>
      <div style={{position: 'absolute', left: 112, right: 112, top: 1458, textAlign: 'center', color: 'rgba(248,250,252,0.82)', fontSize: 34, lineHeight: 1.22, letterSpacing: '-0.02em', fontFamily: 'Inter, ui-sans-serif, system-ui', fontWeight: 650}}>Ferramenta poderosa. Não realidade alternativa.</div>
    </SceneShell>
  );
};
