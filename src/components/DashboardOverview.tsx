import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { CHAPTER_SUMMARIES, ALL_MCQ, ALL_ESSAYS } from '../data/allData';
import { 
  BookOpen, Calculator, HelpCircle, Award, 
  Search, ArrowRight, CheckCircle2, Sparkles, 
  TrendingUp, Scale, Zap, Users, Play, Download, FileText
} from 'lucide-react';

interface DashboardOverviewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenExportModal: () => void;
  readModules: Record<string, boolean>;
  pgAnswers: Record<number, number>;
  essayAnswers: Record<number, string>;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  setActiveTab,
  onOpenExportModal,
  readModules,
  pgAnswers,
  essayAnswers,
  searchQuery,
  setSearchQuery
}) => {
  const [activeFilterBab, setActiveFilterBab] = useState<number | 'all'>('all');

  // Overall statistics
  const totalRead = Object.values(readModules).filter(Boolean).length;
  const totalAnsweredPG = Object.keys(pgAnswers).length;
  let correctPG = 0;
  ALL_MCQ.forEach((q) => {
    if (pgAnswers[q.id] === q.correct) correctPG++;
  });
  const overallScore = Math.round((correctPG / ALL_MCQ.length) * 100);

  // Filtered chapters for display
  const filteredChapters = CHAPTER_SUMMARIES.filter((ch) => {
    if (activeFilterBab !== 'all' && ch.id !== activeFilterBab) return false;
    if (!searchQuery) return true;
    const q = searchQuery.toLowerCase();
    return (
      ch.title.toLowerCase().includes(q) ||
      ch.shortDesc.toLowerCase().includes(q) ||
      ch.modules.some((m) => m.title.toLowerCase().includes(q) || m.subtitle.toLowerCase().includes(q))
    );
  });

  return (
    <div className="space-y-6">
      
      {/* 1. Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white p-5 sm:p-8 shadow-xl border border-indigo-900/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                E-Modul Ekonomi Terpadu • SMA Kelas X
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-xs text-indigo-200">
                4 Bab Silabus Lengkap
              </span>
              <span className="text-slate-400">·</span>
              <span className="text-xs text-emerald-300 font-semibold">
                📱 Responsif & Ramah HP
              </span>
            </div>

            <h1 className="font-display text-2xl sm:text-4xl font-extrabold leading-tight tracking-tight text-white">
              Pusat Belajar Mandiri Ekonomi: <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-emerald-300 to-cyan-300">
                Bab 1 hingga Bab 4 Lengkap
              </span>
            </h1>

            <p className="text-indigo-100 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Satu portal terintegrasi menggabungkan seluruh materi <strong>Bab 1 (Kelangkaan)</strong>, <strong>Bab 2 (Masalah & Sistem Ekonomi)</strong>, <strong>Bab 3 (Permintaan, Penawaran & Elastisitas)</strong>, dan <strong>Bab 4 (Perilaku Konsumen & Produsen)</strong>. Dilengkapi <strong>8 simulator interaktif</strong>, <strong>200 soal pilihan ganda</strong>, dan <strong>80 soal esai</strong> dengan pembahasan lengkap!
            </p>

            <div className="flex flex-wrap gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => setActiveTab('bab1')}
                className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
              >
                <span>Mulai Bab 1</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('simulasi')}
                className="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm backdrop-blur-sm border border-white/20 transition flex items-center gap-2 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-emerald-300" />
                <span>Lab 8 Simulator</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('ujian')}
                className="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm backdrop-blur-sm border border-white/20 transition flex items-center gap-2 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4 text-amber-300" />
                <span>200 Soal PG</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('pdf')}
                className="px-4 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-teal-200" />
                <span>Buku PDF Lengkap</span>
              </button>
              <button
                type="button"
                onClick={onOpenExportModal}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Salin untuk GitHub</span>
              </button>
            </div>
          </div>

          {/* Quick Summary Pill & Visual Gauge */}
          <div className="lg:col-span-4 bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/10 space-y-3">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Ringkasan Capaian Siswa
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                  {overallScore}<span className="text-sm font-normal text-slate-400">/100</span>
                </div>
                <div className="text-[11px] text-slate-300">Skor Keseluruhan (200 PG)</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-emerald-400 font-mono">
                  {totalAnsweredPG} / 200
                </div>
                <div className="text-[11px] text-slate-300">Soal PG Terjawab</div>
              </div>
            </div>

            {/* Overall Progress Bar */}
            <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-emerald-400 to-indigo-400 transition-all duration-500"
                style={{ width: `${Math.min(100, Math.round((totalAnsweredPG / 200) * 100))}%` }}
              />
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span>Materi Dibaca: <strong>{totalRead}/21</strong></span>
              <button
                type="button"
                onClick={() => setActiveTab('rapor')}
                className="text-amber-300 hover:underline font-bold flex items-center gap-1 cursor-pointer"
              >
                <span>Lihat Rapor</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Global Metric Cards (4 Pillars) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Materi Terstruktur</div>
            <div className="text-lg font-extrabold text-slate-900 dark:text-white">4 Bab / 21 Bagian</div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-lg shrink-0">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Simulasi Interaktif</div>
            <div className="text-lg font-extrabold text-slate-900 dark:text-white">8 Lab Simulator</div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-lg shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Bank Pilihan Ganda</div>
            <div className="text-lg font-extrabold text-slate-900 dark:text-white">200 Soal + Bahas</div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Latihan Uraian / HOTS</div>
            <div className="text-lg font-extrabold text-slate-900 dark:text-white">80 Soal Esai Kunci</div>
          </div>
        </div>
      </div>

      {/* 3. Global Search & Chapter Filter Tabs */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="🔍 Cari materi, konsep, soal (misal: Biaya Peluang, Circular Flow, Ekuilibrium, Isoquant, Gossen, Elastisitas)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                ✕ Hapus
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 shrink-0">
            <button
              type="button"
              onClick={() => setActiveFilterBab('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                activeFilterBab === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              Semua Bab (1 - 4)
            </button>
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setActiveFilterBab(num as number)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer whitespace-nowrap ${
                  activeFilterBab === num
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                Bab {num}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3.5. PDF Textbook Feature Banner */}
      <div className="p-5 rounded-3xl bg-gradient-to-r from-teal-900 via-slate-900 to-indigo-950 text-white border border-teal-800/60 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-300 shrink-0">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider bg-teal-500/30 text-teal-300 px-2.5 py-0.5 rounded-full border border-teal-400/40">
                Format PDF Utuh Siap Cetak & Baca
              </span>
            </div>
            <h3 className="font-serif font-extrabold text-base sm:text-lg text-white mt-0.5">
              Buku Lengkap E-Modul Ekonomi SMA (Bab 1 s.d. Bab 4)
            </h3>
            <p className="text-xs text-slate-300 mt-1 max-w-xl">
              Disertai Halaman Sampul, Daftar Isi Lengkap, 21 Sub-materi, Infografis Visual, Ikhtisar di Setiap Akhir Bab, 200 Soal PG, dan 80 Soal Esai beserta Kunci Jawaban.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('pdf')}
            className="px-4 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-extrabold text-xs transition shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Baca Buku PDF</span>
          </button>
          <a
            href="/E-Modul_Ekonomi_SMA_Kelas_X_Lengkap_Bab_1-4.pdf"
            download="E-Modul_Ekonomi_SMA_Kelas_X_Lengkap_Bab_1-4.pdf"
            className="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs transition border border-white/20 flex items-center gap-1.5 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Unduh (1.3 MB)</span>
          </a>
        </div>
      </div>

      {/* 4. Four Main Chapter Cards (High-Fidelity) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredChapters.map((ch) => {
          // Calculate chapter questions answered
          const startId = (ch.id - 1) * 50 + 1;
          const endId = ch.id * 50;
          let chAnswered = 0;
          let chCorrect = 0;
          for (let i = startId; i <= endId; i++) {
            if (pgAnswers[i] !== undefined) {
              chAnswered++;
              const qObj = ALL_MCQ.find((q) => q.id === i);
              if (qObj && pgAnswers[i] === qObj.correct) chCorrect++;
            }
          }
          const chScore = Math.round((chCorrect / 50) * 100);

          return (
            <div
              key={ch.id}
              className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Chapter Card Header */}
                <div className={`p-5 sm:p-6 bg-gradient-to-r ${ch.gradient} text-white`}>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-300">
                      {ch.number}
                    </span>
                    <span className="text-xs text-white/80 font-medium">
                      50 Soal PG · 20 Soal Esai
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl leading-tight">
                    {ch.title}
                  </h3>
                </div>

                {/* Chapter Card Body */}
                <div className="p-5 sm:p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {ch.shortDesc}
                  </p>

                  {/* Modules Subtopics Preview */}
                  <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-700 space-y-1.5">
                    <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
                      Rincian {ch.modulesCount} Bagian Materi:
                    </div>
                    <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                      {ch.modules.slice(0, 3).map((m) => (
                        <li key={m.id} className="truncate">
                          • <strong>{m.number}:</strong> {m.title}
                        </li>
                      ))}
                      {ch.modules.length > 3 && (
                        <li className="text-indigo-600 dark:text-indigo-400 font-semibold text-[11px]">
                          + {ch.modules.length - 3} bagian materi lainnya...
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Live Chapter Progress */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
                      <span>Progres Latihan 50 PG:</span>
                      <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">
                        {chAnswered}/50 ({chScore} poin)
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300"
                        style={{ width: `${Math.round((chAnswered / 50) * 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-4 sm:p-5 pt-0 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setActiveTab(ch.tabKey)}
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-extrabold transition flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Pelajari Materi Lengkap</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveTab(ch.tabKey)}
                    className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition cursor-pointer"
                  >
                    50 PG & 20 Esai &rarr;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 5. Quick Simulators Teaser Box */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-sky-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 rounded-3xl p-5 sm:p-6 border border-emerald-200 dark:border-slate-700 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xl shadow-md shrink-0">
            <Calculator className="w-6 h-6" />
          </div>
          <div>
            <h4 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
              Laboratorium 8 Simulator & Kurva Visual
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Biaya Peluang, Circular Flow 3 & 4 Sektor, 5 Sistem Ekonomi, Keseimbangan Pasar & Pajak/Subsidi, Elastisitas, Hukum Gossen I & II, dan Produksi Diminishing Returns.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setActiveTab('simulasi')}
          className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-extrabold shadow-sm transition whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
        >
          <span>Buka Lab Simulasi</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
