import React from 'react';
import { Composition } from 'remotion';
import { SleepTimingCommercial } from './compositions/SleepTimingCommercial';

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="SleepTimingCommercial"
      component={SleepTimingCommercial}
      durationInFrames={1050}
      fps={30}
      width={1080}
      height={1920}
      defaultProps={{}}
    />
  );
};
