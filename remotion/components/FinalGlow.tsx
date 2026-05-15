import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

export const FinalGlow: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [960, 1000, 1050], [0, 0.44, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 78%, rgba(137,245,188,.72), transparent 42%)', opacity }} />;
};
