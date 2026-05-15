import { interpolate, spring, useCurrentFrame, useVideoConfig } from 'remotion';
import { secondsToFrames } from '../utils/timing';

export const useMessageAnimation = (startSeconds: number) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const localFrame = frame - secondsToFrames(startSeconds);
  const progress = spring({ frame: localFrame, fps, config: { damping: 18, stiffness: 120, mass: 0.65 } });
  const opacity = interpolate(localFrame, [0, 10], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });
  const translateY = interpolate(progress, [0, 1], [34, 0]);
  const scale = interpolate(progress, [0, 1], [0.965, 1]);

  return { opacity, transform: `translateY(${translateY}px) scale(${scale})` };
};
