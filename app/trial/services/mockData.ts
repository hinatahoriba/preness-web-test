import { ExamRecord, SectionType, UserProfile, WeaknessPoint } from '../types';

export const mockUser: UserProfile = {
  id: 'u_12345',
  name: '佐藤 健太',
  email: 'kenta.sato@example.com',
  birthDate: '2001-05-15',
  plan: 'Free Trial',
  trialEndDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days left
  nextExamDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(), // 14 days left
  
  targetScore: 550,
  university: '東京国際大学',
  department: '経済学部',
  learningPurposes: ['大学の授業要件', '留学'],
  externalScores: {
    toeflItp: 480,
    toeic: 750,
    // toeflIbt and ielts are undefined to test empty state
  }
};

export const mockHistory: ExamRecord[] = [
  {
    id: 'ex_001',
    date: '2024-10-01',
    type: 'Mock',
    status: 'Completed',
    totalScore: 480,
    sectionScores: {
      [SectionType.LISTENING]: 45,
      [SectionType.STRUCTURE]: 48,
      [SectionType.READING]: 42,
    },
    durationMinutes: 110,
  },
  {
    id: 'ex_002',
    date: '2024-10-15',
    type: 'Mock',
    status: 'Completed',
    totalScore: 510,
    sectionScores: {
      [SectionType.LISTENING]: 48,
      [SectionType.STRUCTURE]: 50,
      [SectionType.READING]: 46,
    },
    durationMinutes: 115,
  },
  {
    id: 'ex_003',
    date: '2024-11-01',
    type: 'Mock',
    status: 'Completed',
    totalScore: 533,
    sectionScores: {
      [SectionType.LISTENING]: 52,
      [SectionType.STRUCTURE]: 51,
      [SectionType.READING]: 50,
    },
    durationMinutes: 112,
  },
];

export const mockWeaknesses: WeaknessPoint[] = [
  { category: 'Long Conversation', accuracy: 85, section: SectionType.LISTENING },
  { category: 'Short Talk (Detail)', accuracy: 60, section: SectionType.LISTENING },
  { category: 'S/V Agreement', accuracy: 90, section: SectionType.STRUCTURE },
  { category: 'Inversion (倒置)', accuracy: 45, section: SectionType.STRUCTURE },
  { category: 'Main Idea', accuracy: 80, section: SectionType.READING },
  { category: 'Inference', accuracy: 55, section: SectionType.READING },
];

export const mockQuestionDetails = [
  { id: 'q1', category: 'S/V Agreement', correct: true, timeSpentSeconds: 20, timeThresholdSeconds: 40 },
  { id: 'q2', category: 'Inversion', correct: false, timeSpentSeconds: 85, timeThresholdSeconds: 40 }, // Warning!
  { id: 'q3', category: 'Vocabulary', correct: true, timeSpentSeconds: 15, timeThresholdSeconds: 30 },
  { id: 'q4', category: 'Parallelism', correct: false, timeSpentSeconds: 60, timeThresholdSeconds: 45 }, // Warning!
  { id: 'q5', category: 'Pronoun Ref', correct: true, timeSpentSeconds: 25, timeThresholdSeconds: 40 },
];