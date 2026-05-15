import React from 'react';
import { interpolate, useCurrentFrame } from 'remotion';
import { useMessageAnimation } from '../hooks/useMessageAnimation';
import type { ChatMessage } from '../utils/timing';

export const ChatBubble: React.FC<{ message: ChatMessage; compact?: boolean }> = ({ message, compact = false }) => {
  const frame = useCurrentFrame();
  const animation = useMessageAnimation(message.start);
  const isPerson1 = message.speaker === 'person1';
  const pulse = message.highlight ? interpolate(Math.sin(frame / 8), [-1, 1], [0.22, 0.48]) : 0.18;

  return (
    <div style={{ display: 'flex', justifyContent: isPerson1 ? 'flex-end' : 'flex-start', opacity: animation.opacity, transform: animation.transform, marginBottom: compact ? 18 : 26 }}>
      <div
        style={{
          maxWidth: message.highlight ? 770 : 720,
          borderRadius: isPerson1 ? '34px 34px 8px 34px' : '34px 34px 34px 8px',
          padding: compact ? '23px 30px' : '28px 34px',
          background: isPerson1
            ? 'linear-gradient(135deg, #b9f7d1 0%, #7ee5ab 100%)'
            : 'linear-gradient(135deg, #e5ece8 0%, #cbd6d0 100%)',
          color: isPerson1 ? '#092016' : '#14201c',
          fontSize: compact ? 31 : 34,
          lineHeight: 1.16,
          fontWeight: 600,
          letterSpacing: -0.55,
          boxShadow: message.highlight
            ? `0 0 58px rgba(145, 255, 193, ${pulse}), 0 24px 50px rgba(0,0,0,.26)`
            : '0 20px 42px rgba(0,0,0,.24)',
          border: message.highlight ? '2px solid rgba(235,255,242,.58)' : '1px solid rgba(255,255,255,.28)'
        }}
      >
        {message.text}
      </div>
    </div>
  );
};
