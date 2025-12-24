export enum SectionType {
  LISTENING = 'Listening',
  STRUCTURE = 'Structure',
  READING = 'Reading'
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  birthDate: string;
  plan: 'Free Trial' | 'Subscription' | 'Expired';
  trialEndDate: string; // ISO Date string
  nextExamDate: string | null; // ISO Date string
  
  // New fields
  targetScore: number;
  university?: string;
  department?: string;
  learningPurposes: string[]; // Selected purposes
  externalScores: {
    toeflItp?: number;
    toeflIbt?: number;
    toeic?: number;
    ielts?: number;
  };
}

export interface ExamRecord {
  id: string;
  date: string;
  type: 'Mock' | 'Section';
  status: 'Completed' | 'Incomplete';
  totalScore: number;
  sectionScores: {
    [key in SectionType]: number;
  };
  durationMinutes: number;
}

export interface QuestionAnalysis {
  id: string;
  category: string; // e.g., "Long Conversation", "S/V Agreement"
  correct: boolean;
  timeSpentSeconds: number;
  timeThresholdSeconds: number; // Logic for warning
}

export interface WeaknessPoint {
  category: string;
  accuracy: number; // 0-100
  section: SectionType;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: any;
  path: string;
}