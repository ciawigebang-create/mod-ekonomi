export interface ModuleTopic {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  color: string;
  gradient: string;
  readTime: string;
  subtopics: string[];
  svgBanner?: string;
  contentHtml: string;
}

export interface MCQQuestion {
  id: number;
  babId: 1 | 2 | 3 | 4;
  babName: string;
  topic: string;
  level?: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface EssayQuestion {
  id: number;
  babId: 1 | 2 | 3 | 4;
  babName: string;
  topic: string;
  level?: string;
  question: string;
  keywords: string[];
  answer: string;
}

export interface Flashcard {
  term: string;
  category: string;
  def: string;
}

export interface UtilityType {
  id: string;
  name: string;
  badge: string;
  color: string;
  desc: string;
  examples: string;
  actor: string;
}

export interface SistemEkonomi {
  id: string;
  name: string;
  badge: string;
  color: string;
  ciri: string;
  positif: string;
  negatif: string;
  solusi: string;
}

export type ActiveTab = 'overview' | 'bab1' | 'bab2' | 'bab3' | 'bab4' | 'simulasi' | 'ujian' | 'rapor' | 'pdf';
