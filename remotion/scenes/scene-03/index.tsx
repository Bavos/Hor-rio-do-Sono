import React from 'react';
import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { SceneLayout } from '../../components/SceneLayout';
import { messages } from '../../utils/timing';
import { scene03Styles } from './styles';

const sceneStart = 25;
const sceneMessages = messages.slice(11, 13).map((message) => ({ ...message, start: message.start - sceneStart }));

export const Scene03: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const zoom = interpolate(spring({ frame, fps, config: { damping: 28, stiffness: 42 } }), [0, 1], [1, 1.045]);
  const glow = interpolate(frame, [0, 70, 170, 210], [0, 0.48, 0.48, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return (
    <div style={{ transform: `scale(${zoom})`, transformOrigin: '50% 58%' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 48%, rgba(155,231,192,.55), transparent 40%)', opacity: glow }} />
      <SceneLayout messages={sceneMessages} top={scene03Styles.top} compact={scene03Styles.compact} />
    </div>
  );
};
