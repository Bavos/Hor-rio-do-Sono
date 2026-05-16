import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type CinematicTitleProps = {
  children: React.ReactNode;
  top?: number;
  align?: 'left' | 'center';
  accent?: string;
  size?: number;
};

export const CinematicTitle: React.FC<CinematicTitleProps> = ({
  children,
  top = 1240,
  align = 'left',
  accent = '#67e8f9',
  size = 62,
}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const entrance = spring({frame, fps, config: {damping: 19, stiffness: 96}});
  const opacity = interpolate(frame, [0, 10, 98, 118], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <div
      style={{
        position: 'absolute',
        top,
        left: align === 'center' ? 70 : 78,
        right: align === 'center' ? 70 : 86,
        textAlign: align,
        opacity,
        transform: `translateY(${(1 - entrance) * 38}px) scale(${0.985 + entrance * 0.015})`,
        filter: 'drop-shadow(0 12px 34px rgba(0,0,0,0.52))',
      }}
    >
      <div
        style={{
          width: align === 'center' ? 160 : 126,
          height: 5,
          margin: align === 'center' ? '0 auto 24px' : '0 0 24px',
          borderRadius: 99,
          background: `linear-gradient(90deg, ${accent}, rgba(255,255,255,0.12))`,
          boxShadow: `0 0 34px ${accent}`,
        }}
      />
      <h1
        style={{
          margin: 0,
          color: '#f8fbff',
          fontSize: size,
          lineHeight: 1.04,
          letterSpacing: '-0.055em',
          fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          fontWeight: 850,
          textWrap: 'balance',
        }}
      >
        {children}
      </h1>
    </div>
  );
};

export const SceneBadge: React.FC<{label: string; timecode: string}> = ({label, timecode}) => (
  <div
    style={{
      position: 'absolute',
      top: 58,
      left: 64,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      color: 'rgba(226, 246, 255, 0.82)',
      fontFamily: 'Inter, ui-sans-serif, system-ui',
      fontSize: 18,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      zIndex: 20,
    }}
  >
    <span style={{width: 12, height: 12, borderRadius: 99, background: '#22d3ee', boxShadow: '0 0 28px #22d3ee'}} />
    <span>{label}</span>
    <span style={{opacity: 0.48}}>{timecode}</span>
  </div>
);
