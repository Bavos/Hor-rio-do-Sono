import React from 'react';
import { AbsoluteFill, Sequence, interpolate, useCurrentFrame } from 'remotion';
import { PhoneFrame } from '../components/PhoneFrame';
import { FinalGlow } from '../components/FinalGlow';
import { Scene01 } from '../scenes/scene-01';
import { Scene02 } from '../scenes/scene-02';
import { Scene03 } from '../scenes/scene-03';
import { Scene04 } from '../scenes/scene-04';

export const SleepTimingCommercial: React.FC = () => {
  const frame = useCurrentFrame();
  const vignette = interpolate(frame, [0, 1050], [0.18, 0.32]);

  return (
    <AbsoluteFill>
      <PhoneFrame>
        <Sequence from={0} durationInFrames={150}><Scene01 /></Sequence>
        <Sequence from={150} durationInFrames={600}><Scene02 /></Sequence>
        <Sequence from={750} durationInFrames={210}><Scene03 /></Sequence>
        <Sequence from={960} durationInFrames={90}><Scene04 /></Sequence>
        <FinalGlow />
        <div style={{ position: 'absolute', inset: 0, boxShadow: `inset 0 0 220px rgba(0,0,0,${vignette})`, pointerEvents: 'none' }} />
      </PhoneFrame>
    </AbsoluteFill>
  );
};
