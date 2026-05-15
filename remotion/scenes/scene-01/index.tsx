import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { SceneLayout } from '../../components/SceneLayout';
import { messages } from '../../utils/timing';
import { scene01Styles } from './styles';

export const Scene01: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 14, 140, 150], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return <div style={{ opacity }}><SceneLayout messages={messages.slice(0, 3)} top={scene01Styles.top} compact={scene01Styles.compact} /></div>;
};
