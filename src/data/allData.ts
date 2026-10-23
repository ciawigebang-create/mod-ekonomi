import { BAB1_MODULES, BAB1_UTILITY_TYPES, BAB1_FLASHCARDS } from './bab1Data';
import { BAB1_MCQ, BAB1_ESSAYS } from './bab1Questions';
import { BAB2_MODULES, BAB2_SISTEM_EKONOMI, BAB2_FLASHCARDS } from './bab2Data';
import { BAB2_MCQ, BAB2_ESSAYS } from './bab2Questions';
import { BAB3_MODULES } from './bab3Data';
import { BAB3_MCQ, BAB3_ESSAYS } from './bab3Questions';
import { BAB4_MODULES, BAB4_GOSSEN_DATA } from './bab4Data';
import { BAB4_MCQ, BAB4_ESSAYS } from './bab4Questions';
import { MCQQuestion, EssayQuestion, ModuleTopic } from '../types';

export {
  BAB1_MODULES, BAB1_UTILITY_TYPES, BAB1_FLASHCARDS, BAB1_MCQ, BAB1_ESSAYS,
  BAB2_MODULES, BAB2_SISTEM_EKONOMI, BAB2_FLASHCARDS, BAB2_MCQ, BAB2_ESSAYS,
  BAB3_MODULES, BAB3_MCQ, BAB3_ESSAYS,
  BAB4_MODULES, BAB4_GOSSEN_DATA, BAB4_MCQ, BAB4_ESSAYS
};

export const ALL_MCQ: MCQQuestion[] = [
  ...BAB1_MCQ,
  ...BAB2_MCQ,
  ...BAB3_MCQ,
  ...BAB4_MCQ
];

export const ALL_ESSAYS: EssayQuestion[] = [
  ...BAB1_ESSAYS,
  ...BAB2_ESSAYS,
  ...BAB3_ESSAYS,
  ...BAB4_ESSAYS
];

export interface ChapterSummary {
  id: 1 | 2 | 3 | 4;
  tabKey: 'bab1' | 'bab2' | 'bab3' | 'bab4';
  number: string;
  title: string;
  shortDesc: string;
  themeColor: string;
  gradient: string;
  badgeBg: string;
  modulesCount: number;
  mcqCount: number;
  essayCount: number;
  simulators: string[];
  modules: ModuleTopic[];
}

export const CHAPTER_SUMMARIES: ChapterSummary[] = [
  {
    id: 1,
    tabKey: 'bab1',
    number: "BAB 1",
    title: "Kelangkaan & Pengalokasian Sumber Daya",
    shortDesc: "Konsep inti kelangkaan (scarcity), perhitungan biaya peluang (opportunity cost), macam kebutuhan & faktor penentu, nilai guna (utility), dan alokasi SDM, SDA, serta Modal.",
    themeColor: "emerald",
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    badgeBg: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
    modulesCount: BAB1_MODULES.length,
    mcqCount: BAB1_MCQ.length,
    essayCount: BAB1_ESSAYS.length,
    simulators: ["Kalkulator Biaya Peluang", "Explorer 4 Nilai Guna", "16 Kartu Pintar Flashcards"],
    modules: BAB1_MODULES
  },
  {
    id: 2,
    tabKey: 'bab2',
    number: "BAB 2",
    title: "Pokok Permasalahan & Sistem Ekonomi",
    shortDesc: "Masalah ekonomi Klasik & Modern (What, How, Who, For Whom), kesempatan kerja, peran 4 Pelaku Ekonomi, Circular Flow 3 & 4 Sektor, serta analisis 5 Sistem Ekonomi.",
    themeColor: "indigo",
    gradient: "from-indigo-600 via-blue-600 to-cyan-700",
    badgeBg: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300",
    modulesCount: BAB2_MODULES.length,
    mcqCount: BAB2_MCQ.length,
    essayCount: BAB2_ESSAYS.length,
    simulators: ["Simulator Circular Flow 3 & 4 Sektor", "Komparator 5 Sistem Ekonomi", "16 Flashcards"],
    modules: BAB2_MODULES
  },
  {
    id: 3,
    tabKey: 'bab3',
    number: "BAB 3",
    title: "Permintaan, Penawaran & Elastisitas",
    shortDesc: "Hukum permintaan & penawaran, fungsi matematis kurva, terbentuknya harga keseimbangan pasar (ekuilibrium), surplus penawaran/permintaan, dan 5 jenis elastisitas (Ed & Es).",
    themeColor: "sky",
    gradient: "from-sky-600 via-blue-600 to-indigo-600",
    badgeBg: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300",
    modulesCount: BAB3_MODULES.length,
    mcqCount: BAB3_MCQ.length,
    essayCount: BAB3_ESSAYS.length,
    simulators: ["Kalkulator Fungsi 2 Titik", "Kalkulator Ekuilibrium Pajak/Subsidi", "Simulator Slider Surplus", "Galeri 5 Kurva Elastisitas"],
    modules: BAB3_MODULES
  },
  {
    id: 4,
    tabKey: 'bab4',
    number: "BAB 4",
    title: "Perilaku Konsumen dan Produsen",
    shortDesc: "Teori kepuasan (Hukum Gossen I & II), perilaku konsumsi rasional vs irasional, fungsi produksi & The Law of Diminishing Returns, kurva Isoquant, POAC etika bisnis, dan pasar faktor produksi.",
    themeColor: "purple",
    gradient: "from-purple-600 via-fuchsia-600 to-rose-600",
    badgeBg: "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300",
    modulesCount: BAB4_MODULES.length,
    mcqCount: BAB4_MCQ.length,
    essayCount: BAB4_ESSAYS.length,
    simulators: ["Simulator Gossen I (TU & MU)", "Kalkulator Produksi (TP, MP, AP)", "Visualizer Kurva Isoquant & Pasar Input"],
    modules: BAB4_MODULES
  }
];
