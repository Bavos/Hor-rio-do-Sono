import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { SceneLayout } from '../../components/SceneLayout';
import { messages } from '../../utils/timing';
import { scene04Styles } from './styles';

const sceneStart = 32;
const sceneMessages = messages.slice(13).map((message) => ({ ...message, start: message.start - sceneStart }));

export const Scene04: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 12, 70, 105], [0, 1, 1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  return <div style={{ opacity }}><SceneLayout messages={sceneMessages} top={scene04Styles.top} compact={scene04Styles.compact} /></div>;
};
