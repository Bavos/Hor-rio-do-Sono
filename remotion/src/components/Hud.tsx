import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

const range = (count: number) => Array.from({length: count}, (_, index) => index);

export const ParticleField: React.FC<{intensity?: number; color?: string}> = ({intensity = 70, color = '#67e8f9'}) => {
  const frame = useCurrentFrame();

  return (
    <AbsoluteFill style={{overflow: 'hidden', pointerEvents: 'none'}}>
      {range(intensity).map((item) => {
        const x = (item * 137) % 1080;
        const y = (item * 271 + frame * (0.45 + (item % 7) * 0.09)) % 1920;
        const size = 2 + (item % 5);
        const opacity = 0.16 + ((item * 17) % 48) / 100;
        return (
          <div
            key={item}
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: size,
              height: size,
              borderRadius: 99,
              background: color,
              opacity,
              boxShadow: `0 0 ${10 + size * 4}px ${color}`,
              transform: `translateX(${Math.sin((frame + item) / 18) * 16}px)`,
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};

export const DataRain: React.FC<{dense?: boolean}> = ({dense = true}) => {
  const frame = useCurrentFrame();
  const columns = dense ? 18 : 10;

  return (
    <AbsoluteFill style={{opacity: 0.28, mixBlendMode: 'screen'}}>
      {range(columns).map((column) => (
        <div
          key={column}
          style={{
            position: 'absolute',
            left: 18 + column * 62,
            top: -200 + ((frame * (1.8 + (column % 5) * 0.27) + column * 94) % 2240),
            color: column % 3 === 0 ? '#a78bfa' : '#67e8f9',
            fontSize: 14 + (column % 4) * 2,
            letterSpacing: '0.24em',
            fontFamily: 'SFMono-Regular, Consolas, monospace',
            writingMode: 'vertical-rl',
            textShadow: '0 0 18px currentColor',
          }}
        >
          {column % 2 === 0 ? 'IA•MEMÓRIA•SINAL•ECO•REALIDADE' : 'CHAT•DADO•REFLEXO•PULSO•MENTE'}
        </div>
      ))}
    </AbsoluteFill>
  );
};

export const HolographicGrid: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        backgroundImage:
          'linear-gradient(rgba(103,232,249,0.13) 1px, transparent 1px), linear-gradient(90deg, rgba(167,139,250,0.12) 1px, transparent 1px)',
        backgroundSize: '54px 54px',
        transform: `perspective(780px) rotateX(61deg) translateY(${620 + Math.sin(frame / 30) * 16}px) scale(1.7)`,
        transformOrigin: '50% 100%',
        opacity: 0.38,
        maskImage: 'linear-gradient(to top, black, transparent 72%)',
      }}
    />
  );
};

export const ScanLines: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill
      style={{
        background: `repeating-linear-gradient(0deg, rgba(255,255,255,0.025) 0 1px, transparent 1px 6px)`,
        opacity: 0.34,
        transform: `translateY(${frame % 6}px)`,
        mixBlendMode: 'overlay',
      }}
    />
  );
};

export const HudRings: React.FC<{x?: number; y?: number; scale?: number; accent?: string}> = ({x = 540, y = 860, scale = 1, accent = '#67e8f9'}) => {
  const frame = useCurrentFrame();
  return (
    <div style={{position: 'absolute', left: x, top: y, transform: `translate(-50%, -50%) scale(${scale})`, opacity: 0.54}}>
      {range(5).map((ring) => (
        <div
          key={ring}
          style={{
            position: 'absolute',
            left: -170 - ring * 42,
            top: -170 - ring * 42,
            width: 340 + ring * 84,
            height: 340 + ring * 84,
            borderRadius: '50%',
            border: `${2 - ring * 0.18}px solid ${ring % 2 ? 'rgba(167,139,250,0.34)' : 'rgba(103,232,249,0.40)'}`,
            clipPath: ring % 2 ? 'polygon(0 0, 100% 0, 100% 58%, 0 88%)' : 'polygon(0 18%, 100% 0, 100% 100%, 0 72%)',
            transform: `rotate(${frame * (ring % 2 ? -0.55 : 0.7) + ring * 18}deg)`,
            boxShadow: `0 0 28px ${accent}`,
          }}
        />
      ))}
    </div>
  );
};

export const SceneShell: React.FC<{children: React.ReactNode; palette?: 'blue' | 'violet' | 'amber' | 'dawn'}> = ({children, palette = 'blue'}) => {
  const frame = useCurrentFrame();
  const {durationInFrames} = useVideoConfig();
  const fade = interpolate(frame, [0, 16, durationInFrames - 16, durationInFrames], [0, 1, 1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const colors = {
    blue: ['#020617', '#06283d', '#0e7490'],
    violet: ['#070214', '#2e1065', '#0891b2'],
    amber: ['#09090b', '#1f2937', '#f59e0b'],
    dawn: ['#09111f', '#164e63', '#f8fafc'],
  }[palette];

  return (
    <AbsoluteFill style={{opacity: fade, overflow: 'hidden', background: colors[0]}}>
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 24% 18%, ${colors[2]}66, transparent 34%), radial-gradient(circle at 78% 34%, #a78bfa55, transparent 31%), linear-gradient(160deg, ${colors[0]}, ${colors[1]} 54%, #020617)`,
          transform: `scale(${1.02 + frame * 0.00028}) translate(${Math.sin(frame / 42) * 10}px, ${Math.cos(frame / 55) * 10}px)`,
        }}
      />
      <HolographicGrid />
      <DataRain dense />
      <ParticleField intensity={84} color={palette === 'amber' ? '#fbbf24' : '#67e8f9'} />
      {children}
      <ScanLines />
      <AbsoluteFill
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 42%, rgba(0,0,0,0.46) 100%)',
          pointerEvents: 'none',
        }}
      />
    </AbsoluteFill>
  );
};
