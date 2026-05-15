import React from 'react';
import { ChatBubble } from './ChatBubble';
import { TypingIndicator } from './TypingIndicator';
import { secondsToFrames, type ChatMessage } from '../utils/timing';

export const SceneLayout: React.FC<{ messages: ChatMessage[]; top?: number; compact?: boolean }> = ({ messages, top = 260, compact }) => {
  const typingFrame = Math.max(0, secondsToFrames(messages[0]?.start ?? 0) - 18);
  return (
    <div style={{ position: 'absolute', left: 92, right: 92, top }}>
      <TypingIndicator side={messages[0]?.speaker === 'person1' ? 'right' : 'left'} visibleFrom={typingFrame} visibleUntil={typingFrame + 18} />
      {messages.map((message) => <ChatBubble key={message.id} message={message} compact={compact} />)}
    </div>
  );
};
