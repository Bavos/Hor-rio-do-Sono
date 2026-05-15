import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

export const PhoneFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();
  const sheen = interpolate(frame % 180, [0, 90, 180], [0.08, 0.2, 0.08]);

  return (
    <AbsoluteFill
      style={{
        background:
          'radial-gradient(circle at 20% 0%, rgba(87, 171, 133, 0.24), transparent 34%), linear-gradient(160deg, #07100e 0%, #0d1816 48%, #12231f 100%)',
        fontFamily: 'Inter, SF Pro Display, Poppins, system-ui, sans-serif',
        color: '#edf8f2',
        overflow: 'hidden'
      }}
    >
      <div style={{ position: 'absolute', inset: 0, opacity: 0.24, backgroundImage: 'linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />
      <div style={{ position: 'absolute', inset: 70, borderRadius: 72, border: '1px solid rgba(170, 244, 207, 0.16)', boxShadow: `0 0 80px rgba(111, 230, 178, ${sheen}) inset, 0 40px 120px rgba(0,0,0,.42)` }} />
      <div style={{ position: 'absolute', top: 102, left: 92, right: 92, height: 118, borderRadius: 44, background: 'rgba(10, 24, 21, 0.82)', border: '1px solid rgba(195, 255, 224, 0.14)', display: 'flex', alignItems: 'center', padding: '0 42px', gap: 24 }}>
        <div style={{ width: 56, height: 56, borderRadius: 18, background: 'linear-gradient(135deg, #86e6b8, #3aa972)', boxShadow: '0 0 32px rgba(134,230,184,.35)' }} />
        <div>
          <div style={{ fontSize: 31, fontWeight: 600, letterSpacing: -0.7 }}>Conversa privada</div>
          <div style={{ fontSize: 20, color: 'rgba(237,248,242,.58)', marginTop: 4 }}>online agora</div>
        </div>
      </div>
      {children}
    </AbsoluteFill>
  );
};
