export const FPS = 30;
export const secondsToFrames = (seconds: number) => Math.round(seconds * FPS);

export type ChatMessage = {
  id: string;
  speaker: 'person1' | 'person2';
  text: string;
  start: number;
  duration: number;
  highlight?: boolean;
};

export const messages: ChatMessage[] = [
  { id: 'm01', speaker: 'person1', text: 'Você viu isso?', start: 0.4, duration: 2.4 },
  { id: 'm02', speaker: 'person2', text: 'O quê?', start: 1.8, duration: 2.2 },
  { id: 'm03', speaker: 'person1', text: 'Tem um horário de sono que chamou atenção dos cientistas.', start: 3.0, duration: 4.4 },
  { id: 'm04', speaker: 'person2', text: 'Horário de sono?', start: 5.4, duration: 2.4 },
  { id: 'm05', speaker: 'person1', text: 'Sim. Um estudo com mais de 88 mil pessoas analisou o horário em que elas dormiam.', start: 7.0, duration: 5.4 },
  { id: 'm06', speaker: 'person2', text: 'E o que descobriram?', start: 10.8, duration: 2.7 },
  { id: 'm07', speaker: 'person1', text: 'Quem pegava no sono entre 22h e 23h teve menor associação com risco cardiovascular.', start: 12.6, duration: 5.4 },
  { id: 'm08', speaker: 'person2', text: 'Sério?', start: 16.7, duration: 2.1 },
  { id: 'm09', speaker: 'person1', text: 'Sim. Mas atenção: é associação, não promessa milagrosa.', start: 18.0, duration: 4.2 },
  { id: 'm10', speaker: 'person2', text: 'Então não é só dormir cedo?', start: 21.0, duration: 3.2 },
  { id: 'm11', speaker: 'person1', text: 'Exato. Rotina, qualidade do sono e hábitos de vida continuam importando.', start: 23.0, duration: 4.8 },
  { id: 'm12', speaker: 'person2', text: 'Então talvez o horário do sono importe mais do que a gente imagina…', start: 25.2, duration: 5.4, highlight: true },
  { id: 'm13', speaker: 'person1', text: 'Principalmente quando respeita o ritmo natural do corpo.', start: 28.4, duration: 4.4, highlight: true },
  { id: 'm14', speaker: 'person1', text: 'Hoje à noite, observe seu horário de sono.', start: 32.0, duration: 2.3 },
  { id: 'm15', speaker: 'person2', text: 'Seu coração pode agradecer.', start: 33.5, duration: 1.5 }
];
