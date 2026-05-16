export const VIDEO = {
  width: 1080,
  height: 1920,
  fps: 30,
  durationInFrames: 900,
};

export const SOURCES = ['G1 Tecnologia', 'The Verge', 'OpenAI', 'O Povo'];

export const SCENES = [
  {id: 'opening', start: 0, duration: 120},
  {id: 'overuse', start: 120, duration: 120},
  {id: 'reality', start: 240, duration: 120},
  {id: 'brain', start: 360, duration: 120},
  {id: 'hypnotic', start: 480, duration: 150},
  {id: 'collapse', start: 630, duration: 150},
  {id: 'closing', start: 780, duration: 120},
] as const;
