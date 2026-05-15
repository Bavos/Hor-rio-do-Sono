import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { SceneLayout } from '../../components/SceneLayout';
import { messages } from '../../utils/timing';
import { scene02Styles } from './styles';

const sceneStart = 5;
const sceneMessages = messages.slice(3, 11).map((message) => ({ ...message, start: message.start - sceneStart }));

export const Scene02: React.FC = () => {
  const frame = useCurrentFrame();
  const translateY = interpolate(frame, [0, 600], [34, -86], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return <div style={{ transform: `translateY(${translateY}px)` }}><SceneLayout messages={sceneMessages} top={scene02Styles.top} compact={scene02Styles.compact} /></div>;
};
