import React from 'react';
import {Composition} from 'remotion';
import {MainComposition, compositionConfig} from './MainComposition';

export const RemotionRoot: React.FC = () => (
  <Composition
    id={compositionConfig.id}
    component={MainComposition}
    durationInFrames={compositionConfig.durationInFrames}
    fps={compositionConfig.fps}
    width={compositionConfig.width}
    height={compositionConfig.height}
    defaultProps={{}}
  />
);
