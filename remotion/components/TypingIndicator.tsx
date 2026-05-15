import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';

export const TypingIndicator: React.FC<{ side: 'left' | 'right'; visibleFrom: number; visibleUntil: number }> = ({ side, visibleFrom, visibleUntil }) => {
  const frame = useCurrentFrame();
  const opacityIn = interpolate(frame, [visibleFrom, visibleFrom + 7], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const opacityOut = interpolate(frame, [visibleUntil - 7, visibleUntil], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const opacity = Math.min(opacityIn, opacityOut);
  const dots = [0, 1, 2];

  return (
    <div style={{ display: 'flex', justifyContent: side === 'right' ? 'flex-end' : 'flex-start', opacity, marginBottom: 24 }}>
      <div style={{ width: 122, height: 58, borderRadius: 28, background: side === 'right' ? 'rgba(156,231,190,.86)' : 'rgba(226,234,230,.86)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, boxShadow: '0 16px 34px rgba(0,0,0,.20)' }}>
        {dots.map((dot) => (
          <span key={dot} style={{ width: 12, height: 12, borderRadius: '50%', background: '#21322c', opacity: interpolate(Math.sin((frame - dot * 5) / 5), [-1, 1], [0.3, 0.95]) }} />
        ))}
      </div>
    </div>
  );
};
