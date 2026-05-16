import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {SourceBug} from './components/Sources';
import {VIDEO} from './constants';
import {OpeningScene} from './scenes/OpeningScene';
import {OveruseScene} from './scenes/OveruseScene';
import {RealityLossScene} from './scenes/RealityLossScene';
import {BrainScene} from './scenes/BrainScene';
import {HypnoticChatScene} from './scenes/HypnoticChatScene';
import {CollapseScene} from './scenes/CollapseScene';
import {ClosingScene} from './scenes/ClosingScene';

export const MainComposition: React.FC = () => (
  <AbsoluteFill style={{backgroundColor: '#020617'}}>
    <Sequence from={0} durationInFrames={120}><OpeningScene /></Sequence>
    <Sequence from={120} durationInFrames={120}><OveruseScene /></Sequence>
    <Sequence from={240} durationInFrames={120}><RealityLossScene /></Sequence>
    <Sequence from={360} durationInFrames={120}><BrainScene /></Sequence>
    <Sequence from={480} durationInFrames={150}><HypnoticChatScene /></Sequence>
    <Sequence from={630} durationInFrames={150}><CollapseScene /></Sequence>
    <Sequence from={780} durationInFrames={120}><ClosingScene /></Sequence>
    <SourceBug />
  </AbsoluteFill>
);

export const compositionConfig = {
  id: 'MainComposition',
  width: VIDEO.width,
  height: VIDEO.height,
  fps: VIDEO.fps,
  durationInFrames: VIDEO.durationInFrames,
};
