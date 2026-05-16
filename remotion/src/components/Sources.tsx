import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';
import {SOURCES} from '../constants';

export const SourceBug: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [12, 36, 850, 890], [0, 0.42, 0.42, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <div
      style={{
        position: 'absolute',
        left: 54,
        bottom: 54,
        zIndex: 60,
        opacity,
        color: 'rgba(226, 246, 255, 0.74)',
        fontSize: 16,
        lineHeight: 1.45,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        fontFamily: 'Inter, ui-sans-serif, system-ui',
      }}
    >
      <div style={{opacity: 0.62, marginBottom: 7}}>Fontes consultadas</div>
      <div>{SOURCES.join('  •  ')}</div>
    </div>
  );
};
