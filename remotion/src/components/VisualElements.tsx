import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

const range = (count: number) => Array.from({length: count}, (_, index) => index);

export const FuturisticCity: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{position: 'absolute', inset: 0, overflow: 'hidden'}}>
      {range(34).map((building) => {
        const width = 34 + (building % 6) * 18;
        const height = 280 + ((building * 83) % 760);
        const left = -20 + building * 35;
        const hue = building % 3 === 0 ? '#22d3ee' : building % 3 === 1 ? '#a78bfa' : '#38bdf8';
        return (
          <div
            key={building}
            style={{
              position: 'absolute',
              left,
              bottom: 260 - (building % 4) * 22,
              width,
              height,
              border: '1px solid rgba(255,255,255,0.08)',
              background: `linear-gradient(180deg, ${hue}20, rgba(2,6,23,0.92))`,
              boxShadow: `0 0 34px ${hue}22`,
              transform: `translateY(${Math.sin(frame / 35 + building) * 11}px)`,
            }}
          >
            {range(14).map((win) => (
              <span
                key={win}
                style={{
                  position: 'absolute',
                  left: 7 + (win % 3) * (width / 3.6),
                  top: 24 + Math.floor(win / 3) * 58,
                  width: Math.max(5, width / 6),
                  height: 18,
                  borderRadius: 4,
                  background: hue,
                  opacity: ((frame + win * 17 + building * 9) % 90) > 34 ? 0.58 : 0.12,
                  boxShadow: `0 0 18px ${hue}`,
                }}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export const HumanSilhouette: React.FC<{left?: number; top?: number; scale?: number; glow?: string; tired?: boolean}> = ({left = 374, top = 600, scale = 1, glow = '#67e8f9', tired = false}) => {
  const frame = useCurrentFrame();
  return (
    <div style={{position: 'absolute', left, top, transform: `scale(${scale}) translateY(${Math.sin(frame / 46) * 5}px)`}}>
      <div
        style={{
          position: 'absolute',
          left: 98,
          top: 0,
          width: 196,
          height: 228,
          borderRadius: '46% 46% 42% 42%',
          background: 'linear-gradient(145deg, #172033, #050816 70%)',
          boxShadow: `inset -28px -18px 60px rgba(0,0,0,0.78), 0 0 90px ${glow}66`,
        }}
      >
        <span style={{position: 'absolute', left: 52, top: 92, width: 42, height: tired ? 5 : 10, borderRadius: 99, background: glow, boxShadow: `0 0 24px ${glow}`}} />
        <span style={{position: 'absolute', right: 52, top: 92, width: 42, height: tired ? 5 : 10, borderRadius: 99, background: glow, boxShadow: `0 0 24px ${glow}`}} />
        <span style={{position: 'absolute', left: 48, right: 48, bottom: 52, height: 2, background: 'rgba(255,255,255,0.22)'}} />
      </div>
      <div
        style={{
          position: 'absolute',
          left: 30,
          top: 214,
          width: 330,
          height: 500,
          borderRadius: '46% 46% 16% 16%',
          background: 'linear-gradient(160deg, #111827, #020617)',
          boxShadow: '0 40px 120px rgba(0,0,0,0.65)',
        }}
      />
    </div>
  );
};

export const PhoneScreen: React.FC<{left?: number; top?: number; scale?: number; intense?: boolean}> = ({left = 346, top = 930, scale = 1, intense = false}) => {
  const frame = useCurrentFrame();
  const messages = ['Você ainda está aí?', 'Analise meus pensamentos', 'Isso parece real?', 'Conte comigo sempre', 'Nova resposta gerada', 'Sinal emocional detectado'];
  return (
    <div
      style={{
        position: 'absolute',
        left,
        top,
        width: 390,
        height: 710,
        borderRadius: 54,
        transform: `scale(${scale}) rotate(${Math.sin(frame / 80) * 1.4}deg)`,
        background: 'linear-gradient(145deg, #0f172a, #020617)',
        border: '4px solid rgba(226,246,255,0.18)',
        boxShadow: '0 0 80px rgba(34,211,238,0.58), inset 0 0 50px rgba(103,232,249,0.13)',
        overflow: 'hidden',
      }}
    >
      <div style={{position: 'absolute', inset: 18, borderRadius: 38, background: 'linear-gradient(180deg, rgba(8,47,73,0.88), rgba(15,23,42,0.96))', overflow: 'hidden'}}>
        <div style={{height: 74, padding: '22px 26px', color: '#dffafe', fontSize: 18, letterSpacing: '0.14em', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.12)'}}>Assistente IA</div>
        {range(intense ? 12 : 8).map((item) => {
          const y = 104 + item * (intense ? 43 : 61) - ((frame * (intense ? 2.8 : 1.4) + item * 12) % (intense ? 80 : 55));
          const mine = item % 3 === 0;
          return (
            <div
              key={item}
              style={{
                position: 'absolute',
                left: mine ? 118 : 28,
                top: y,
                width: mine ? 205 : 284,
                minHeight: intense ? 30 : 44,
                borderRadius: mine ? '18px 18px 6px 18px' : '18px 18px 18px 6px',
                padding: intense ? '9px 14px' : '13px 17px',
                color: mine ? '#02111f' : '#e0f2fe',
                background: mine ? 'linear-gradient(135deg, #67e8f9, #a7f3d0)' : 'rgba(15, 23, 42, 0.82)',
                border: mine ? 'none' : '1px solid rgba(125,211,252,0.20)',
                fontSize: intense ? 13 : 15,
                lineHeight: 1.25,
                boxShadow: '0 14px 34px rgba(0,0,0,0.22)',
              }}
            >
              {messages[item % messages.length]}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const FloatingPanels: React.FC<{count?: number; urgent?: boolean}> = ({count = 12, urgent = false}) => {
  const frame = useCurrentFrame();
  return (
    <>
      {range(count).map((panel) => {
        const left = 36 + ((panel * 179) % 930);
        const top = 150 + ((panel * 241) % 1320);
        const opacity = urgent ? 0.58 : 0.38;
        return (
          <div
            key={panel}
            style={{
              position: 'absolute',
              left,
              top,
              width: 170 + (panel % 5) * 44,
              height: 74 + (panel % 4) * 20,
              borderRadius: 22,
              padding: 18,
              background: 'linear-gradient(135deg, rgba(8,47,73,0.72), rgba(49,46,129,0.54))',
              border: '1px solid rgba(186,230,253,0.22)',
              color: 'rgba(240,249,255,0.9)',
              fontSize: 13,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              opacity,
              transform: `translate3d(${Math.sin(frame / 24 + panel) * (urgent ? 28 : 16)}px, ${Math.cos(frame / 31 + panel) * 22}px, 0) rotate(${Math.sin(frame / 60 + panel) * 4}deg)`,
              boxShadow: '0 18px 60px rgba(34,211,238,0.18)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {panel % 2 === 0 ? 'notificação • resposta nova' : 'feed emocional • conexão ativa'}
            <div style={{height: 5, marginTop: 14, borderRadius: 99, background: `linear-gradient(90deg, #67e8f9 ${30 + ((frame + panel * 7) % 60)}%, rgba(255,255,255,0.10) 0)`}} />
          </div>
        );
      })}
    </>
  );
};

export const BrainHologram: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <div style={{position: 'absolute', left: 130, top: 390, width: 820, height: 780, opacity: 0.92}}>
      <div
        style={{
          position: 'absolute',
          left: 90,
          top: 90,
          width: 640,
          height: 480,
          borderRadius: '49% 51% 45% 55% / 58% 44% 56% 42%',
          border: '3px solid rgba(103,232,249,0.72)',
          background: 'radial-gradient(circle at 38% 38%, rgba(103,232,249,0.32), rgba(59,130,246,0.13) 44%, transparent 68%)',
          boxShadow: '0 0 110px rgba(34,211,238,0.50), inset 0 0 80px rgba(167,139,250,0.24)',
          transform: `rotate(${Math.sin(frame / 70) * 3}deg) scale(${1 + Math.sin(frame / 42) * 0.015})`,
        }}
      />
      {range(34).map((node) => {
        const left = 140 + ((node * 97) % 540);
        const top = 138 + ((node * 151) % 360);
        return (
          <React.Fragment key={node}>
            <span
              style={{
                position: 'absolute',
                left,
                top,
                width: 10 + (node % 4) * 3,
                height: 10 + (node % 4) * 3,
                borderRadius: 99,
                background: node % 3 ? '#67e8f9' : '#c084fc',
                boxShadow: '0 0 28px currentColor',
                transform: `scale(${0.8 + Math.sin(frame / 10 + node) * 0.28})`,
              }}
            />
            <span
              style={{
                position: 'absolute',
                left,
                top,
                width: 130 + (node % 5) * 22,
                height: 2,
                background: 'linear-gradient(90deg, rgba(103,232,249,0.65), transparent)',
                transformOrigin: '0 50%',
                transform: `rotate(${(node * 43 + frame * 0.4) % 360}deg)`,
                opacity: 0.34,
              }}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export const DawnWindow: React.FC = () => {
  const frame = useCurrentFrame();
  const warm = interpolate(frame, [0, 120], [0.25, 0.9], {extrapolateRight: 'clamp'});
  return (
    <div style={{position: 'absolute', inset: 0, background: `linear-gradient(180deg, rgba(14,165,233,${0.15 * warm}), rgba(248,250,252,${0.12 * warm}) 46%, rgba(15,23,42,0.88))`}}>
      <div style={{position: 'absolute', left: 95, top: 190, width: 890, height: 920, borderRadius: 36, background: 'linear-gradient(145deg, rgba(224,242,254,0.20), rgba(14,116,144,0.08))', border: '1px solid rgba(255,255,255,0.18)', boxShadow: '0 0 140px rgba(251,191,36,0.14)'}} />
      <div style={{position: 'absolute', left: 122, top: 220, width: 386, height: 860, background: 'linear-gradient(90deg, rgba(255,255,255,0.34), rgba(255,255,255,0.06))'}} />
      <div style={{position: 'absolute', right: 122, top: 220, width: 386, height: 860, background: 'linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.28))'}} />
      <div style={{position: 'absolute', left: 95, top: 635, width: 890, height: 18, background: 'rgba(255,255,255,0.22)'}} />
    </div>
  );
};
