import React, { useState } from 'react';
import { ModuleTopic, MCQQuestion, EssayQuestion } from '../types';
import { 
  BookOpen, Calculator, CheckCircle2, HelpCircle, 
  Search, ChevronDown, ChevronUp, RotateCcw, Eye, 
  EyeOff, Check, ArrowRight, Award, Zap, Sliders
} from 'lucide-react';

interface ChapterViewProps {
  babId: 1 | 2 | 3 | 4;
  title: string;
  subtitle: string;
  gradient: string;
  modules: ModuleTopic[];
  mcqList: MCQQuestion[];
  essayList: EssayQuestion[];
  readModules: Record<string, boolean>;
  onToggleReadModule: (id: string) => void;
  pgAnswers: Record<number, number>;
  onAnswerPG: (qId: number, optIdx: number) => void;
  onResetChapterPG: (babId: number) => void;
  essayAnswers: Record<number, string>;
  onSaveEssayAnswer: (qId: number, text: string) => void;
  renderChapterSimulator?: () => React.ReactNode;
}

export const ChapterView: React.FC<ChapterViewProps> = ({
  babId,
  title,
  subtitle,
  gradient,
  modules,
  mcqList,
  essayList,
  readModules,
  onToggleReadModule,
  pgAnswers,
  onAnswerPG,
  onResetChapterPG,
  essayAnswers,
  onSaveEssayAnswer,
  renderChapterSimulator
}) => {
  const [subTab, setSubTab] = useState<'materi' | 'simulasi' | 'pg' | 'esai'>('materi');
  const [openModuleIds, setOpenModuleIds] = useState<Record<string, boolean>>({
    [modules[0]?.id || '']: true
  });
  const [materiSearch, setMateriSearch] = useState('');
  
  // PG state
  const [pgStatusFilter, setPgStatusFilter] = useState<'all' | 'unanswered' | 'correct' | 'wrong'>('all');
  const [pgShowAllExp, setPgShowAllExp] = useState(false);
  const [showPgGrid, setShowPgGrid] = useState(false);

  // Essay state
  const [openEssayExp, setOpenEssayExp] = useState<Record<number, boolean>>({});
  const [essayShowAll, setEssayShowAll] = useState(false);

  // PG Score calculations
  const answeredCount = mcqList.filter((q) => pgAnswers[q.id] !== undefined).length;
  const correctCount = mcqList.filter((q) => pgAnswers[q.id] === q.correct).length;
  const wrongCount = answeredCount - correctCount;
  const chapterScore = Math.round((correctCount / mcqList.length) * 100);

  const toggleModule = (id: string) => {
    setOpenModuleIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAllModules = () => {
    const all: Record<string, boolean> = {};
    modules.forEach((m) => { all[m.id] = true; });
    setOpenModuleIds(all);
  };

  const collapseAllModules = () => {
    setOpenModuleIds({});
  };

  const filteredModules = modules.filter((m) => {
    if (!materiSearch) return true;
    const q = materiSearch.toLowerCase();
    return (
      m.title.toLowerCase().includes(q) ||
      m.subtitle.toLowerCase().includes(q) ||
      m.subtopics.some((s) => s.toLowerCase().includes(q))
    );
  });

  const filteredMCQ = mcqList.filter((q) => {
    const ans = pgAnswers[q.id];
    if (pgStatusFilter === 'unanswered' && ans !== undefined) return false;
    if (pgStatusFilter === 'correct' && ans !== q.correct) return false;
    if (pgStatusFilter === 'wrong' && (ans === undefined || ans === q.correct)) return false;
    return true;
  });

  const letters = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="space-y-6">
      
      {/* Chapter Banner */}
      <div className={`p-6 sm:p-8 rounded-3xl bg-gradient-to-r ${gradient} text-white shadow-lg space-y-2`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
            BAB {babId} • Silabus Ekonomi SMA
          </span>
          <span className="text-xs text-white/80">
            {modules.length} Bagian · 50 PG · 20 Esai
          </span>
        </div>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight">
          {title}
        </h2>
        <p className="text-white/90 text-xs sm:text-sm leading-relaxed max-w-3xl">
          {subtitle}
        </p>

        {/* Sub-tab Navigation */}
        <div className="flex flex-wrap items-center gap-1.5 pt-4">
          <button
            type="button"
            onClick={() => setSubTab('materi')}
            className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer flex items-center gap-1.5 ${
              subTab === 'materi'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>1. Materi ({modules.length} Bagian)</span>
          </button>

          {renderChapterSimulator && (
            <button
              type="button"
              onClick={() => setSubTab('simulasi')}
              className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer flex items-center gap-1.5 ${
                subTab === 'simulasi'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>2. Simulasi Interaktif</span>
            </button>
          )}

          <button
            type="button"
            onClick={() => setSubTab('pg')}
            className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer flex items-center gap-1.5 ${
              subTab === 'pg'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>3. Latihan 50 Soal PG</span>
          </button>

          <button
            type="button"
            onClick={() => setSubTab('esai')}
            className={`px-3.5 py-2 rounded-xl text-xs font-extrabold transition cursor-pointer flex items-center gap-1.5 ${
              subTab === 'esai'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
            }`}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>4. Latihan 20 Soal Esai</span>
          </button>
        </div>
      </div>

      {/* =========================================================
          SUB-TAB 1: MATERI LENGKAP
          ========================================================= */}
      {subTab === 'materi' && (
        <div className="space-y-5">
          {/* Search & Expand Controls */}
          <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={materiSearch}
                onChange={(e) => setMateriSearch(e.target.value)}
                placeholder={`Cari topik di Bab ${babId}...`}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={expandAllModules}
                className="px-3 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold hover:bg-indigo-100 transition cursor-pointer"
              >
                Buka Semua
              </button>
              <button
                type="button"
                onClick={collapseAllModules}
                className="px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-200 transition cursor-pointer"
              >
                Tutup Semua
              </button>
            </div>
          </div>

          {/* Module List Accordion */}
          <div className="space-y-4">
            {filteredModules.map((m) => {
              const isOpen = !!openModuleIds[m.id];
              const isRead = !!readModules[m.id];

              return (
                <article
                  key={m.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden transition"
                >
                  {/* Module Accordion Header */}
                  <div
                    onClick={() => toggleModule(m.id)}
                    className="p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800/50 transition"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-extrabold text-xs shrink-0 ${
                        isRead
                          ? 'bg-emerald-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}>
                        {isRead ? '✓' : m.number.replace('Bagian ', '')}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400">
                            {m.number}
                          </span>
                          <span className="text-slate-300 dark:text-slate-600">·</span>
                          <span className="text-[11px] text-slate-400">
                            {m.readTime}
                          </span>
                          {isRead && (
                            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                              · Sudah Dibaca
                            </span>
                          )}
                        </div>
                        <h3 className="font-display font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate">
                          {m.title}
                        </h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
                      >
                        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  {/* Module Content Body */}
                  {isOpen && (
                    <div className="p-4 sm:p-6 border-t border-slate-100 dark:border-slate-800 space-y-6">
                      {/* SVG Banner if available */}
                      {m.svgBanner && (
                        <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
                          <div dangerouslySetInnerHTML={{ __html: m.svgBanner }} />
                        </div>
                      )}

                      {/* Main HTML Content */}
                      <div 
                        className="leading-relaxed text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-4"
                        dangerouslySetInnerHTML={{ __html: m.contentHtml }} 
                      />

                      {/* Mark Read Button & Next practice */}
                      <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => onToggleReadModule(m.id)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 cursor-pointer ${
                            isRead
                              ? 'bg-emerald-600 text-white shadow-xs'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-50'
                          }`}
                        >
                          <Check className="w-4 h-4" />
                          <span>{isRead ? 'Sudah Dipelajari (Klik untuk Batal)' : 'Tandai Selesai Dipelajari'}</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => setSubTab('pg')}
                          className="px-3.5 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-bold hover:bg-indigo-100 transition cursor-pointer"
                        >
                          Latihan 50 Soal PG Bab {babId} &rarr;
                        </button>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================
          SUB-TAB 2: SIMULASI KHUSUS BAB
          ========================================================= */}
      {subTab === 'simulasi' && renderChapterSimulator && (
        <div className="space-y-5">
          {renderChapterSimulator()}
        </div>
      )}

      {/* =========================================================
          SUB-TAB 3: LATIHAN 50 SOAL PILIHAN GANDA
          ========================================================= */}
      {subTab === 'pg' && (
        <div className="space-y-5">
          {/* PG Scoreboard & Filter Toolbar */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                  Bank 50 Soal Pilihan Ganda: Bab {babId}
                </h3>
                <p className="text-xs text-slate-500">
                  Pilih opsi A, B, C, D, atau E untuk melihat hasil dan pembahasan otomatis.
                </p>
              </div>

              {/* Score Badges */}
              <div className="flex items-center gap-2">
                <div className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-center">
                  <div className="text-[10px] text-slate-400">Terjawab</div>
                  <div className="text-sm font-extrabold text-slate-900 dark:text-white font-mono">
                    {answeredCount}/50
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-center">
                  <div className="text-[10px] text-emerald-600">Benar</div>
                  <div className="text-sm font-extrabold text-emerald-700 dark:text-emerald-300 font-mono">
                    {correctCount}
                  </div>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-center">
                  <div className="text-[10px] text-rose-600">Salah</div>
                  <div className="text-sm font-extrabold text-rose-700 dark:text-rose-300 font-mono">
                    {wrongCount}
                  </div>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white text-center">
                  <div className="text-[10px] text-indigo-100">Nilai</div>
                  <div className="text-base font-extrabold font-mono">
                    {chapterScore}
                  </div>
                </div>
              </div>
            </div>

            {/* Filter buttons & Actions */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => setPgStatusFilter('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    pgStatusFilter === 'all'
                      ? 'bg-slate-900 text-white dark:bg-indigo-600'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  Semua (50)
                </button>
                <button
                  type="button"
                  onClick={() => setPgStatusFilter('unanswered')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    pgStatusFilter === 'unanswered'
                      ? 'bg-slate-900 text-white dark:bg-indigo-600'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  Belum ({50 - answeredCount})
                </button>
                <button
                  type="button"
                  onClick={() => setPgStatusFilter('correct')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    pgStatusFilter === 'correct'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  Benar ({correctCount})
                </button>
                <button
                  type="button"
                  onClick={() => setPgStatusFilter('wrong')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                    pgStatusFilter === 'wrong'
                      ? 'bg-rose-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  Salah ({wrongCount})
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPgShowAllExp(!pgShowAllExp)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 hover:bg-amber-100 transition cursor-pointer"
                >
                  {pgShowAllExp ? '🙈 Tutup Pembahasan' : '💡 Buka Semua Pembahasan'}
                </button>
                <button
                  type="button"
                  onClick={() => onResetChapterPG(babId)}
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 hover:bg-rose-100 transition cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5 inline mr-1" />
                  Reset
                </button>
              </div>
            </div>
          </div>

          {/* Question Cards List */}
          <div className="space-y-4">
            {filteredMCQ.map((q, idx) => {
              const userAns = pgAnswers[q.id];
              const isAnswered = userAns !== undefined;
              const isCorrect = userAns === q.correct;
              const showExp = isAnswered || pgShowAllExp;

              return (
                <div
                  key={q.id}
                  id={`q-${q.id}`}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-xl bg-slate-900 dark:bg-indigo-600 text-white text-xs font-mono font-extrabold">
                        Soal #{q.id}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        {q.topic}
                      </span>
                    </div>

                    {isAnswered && (
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold ${
                        isCorrect
                          ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                          : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'
                      }`}>
                        {isCorrect ? '✓ Benar' : '✕ Kurang Tepat'}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed whitespace-pre-line">
                    {q.question}
                  </p>

                  {/* Options */}
                  <div className="space-y-2">
                    {q.options.map((optText, optIdx) => {
                      let btnStyle = 'bg-slate-50 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-indigo-400';
                      let badgeStyle = 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600';

                      if (showExp) {
                        if (optIdx === q.correct) {
                          btnStyle = 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-500 text-emerald-950 dark:text-emerald-200 font-semibold';
                          badgeStyle = 'bg-emerald-600 text-white';
                        } else if (userAns === optIdx && optIdx !== q.correct) {
                          btnStyle = 'bg-rose-50 dark:bg-rose-950/60 border-rose-500 text-rose-950 dark:text-rose-200';
                          badgeStyle = 'bg-rose-600 text-white';
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => onAnswerPG(q.id, optIdx)}
                          className={`w-full text-left p-3 sm:p-3.5 rounded-2xl border transition flex items-start gap-3 cursor-pointer ${btnStyle}`}
                        >
                          <span className={`w-6 h-6 rounded-lg text-xs font-extrabold flex items-center justify-center shrink-0 mt-0.5 ${badgeStyle}`}>
                            {letters[optIdx]}
                          </span>
                          <span className="text-xs sm:text-sm leading-relaxed flex-1">
                            {optText}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation Block */}
                  {showExp && (
                    <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-slate-800/80 border border-amber-200 dark:border-slate-700 text-xs sm:text-sm space-y-1">
                      <div className="font-extrabold text-amber-900 dark:text-amber-300">
                        💡 Kunci Jawaban: {letters[q.correct]}
                      </div>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                        <strong>Pembahasan:</strong> {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* =========================================================
          SUB-TAB 4: LATIHAN 20 SOAL ESAI
          ========================================================= */}
      {subTab === 'esai' && (
        <div className="space-y-5">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                Lembar Latihan 20 Soal Esai: Bab {babId}
              </h3>
              <p className="text-xs text-slate-500">
                Ketik jawabanmu pada kolom untuk menguji penguasaan konsep, lalu buka pembahasan lengkapnya.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setEssayShowAll(!essayShowAll)}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition shadow-sm cursor-pointer whitespace-nowrap self-start sm:self-center"
            >
              {essayShowAll ? 'Tutup Semua Kunci Esai' : 'Buka Semua Kunci Esai'}
            </button>
          </div>

          <div className="space-y-4">
            {essayList.map((e) => {
              const studentText = essayAnswers[e.id] || '';
              const isOpen = essayShowAll || !!openEssayExp[e.id];
              const lowerText = studentText.toLowerCase();
              const matchedKw = e.keywords.filter((k) => lowerText.includes(k.toLowerCase()));

              return (
                <div
                  key={e.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-xl bg-amber-500 text-slate-950 text-xs font-mono font-extrabold">
                        Esai #{e.id}
                      </span>
                      <span className="text-xs font-bold text-slate-500">
                        {e.topic}
                      </span>
                    </div>

                    <span className={`text-xs font-bold ${
                      matchedKw.length > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'
                    }`}>
                      Kata Kunci Terdeteksi: {matchedKw.length}/{e.keywords.length}
                    </span>
                  </div>

                  <p className="text-xs sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed whitespace-pre-line">
                    {e.question}
                  </p>

                  {/* Student Answer Box */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-500 dark:text-slate-400 block">
                      ✏️ Tuliskan Uraian / Langkah Perhitunganmu di Sini:
                    </label>
                    <textarea
                      rows={3}
                      value={studentText}
                      onChange={(evt) => onSaveEssayAnswer(e.id, evt.target.value)}
                      placeholder="Ketik jawabanmu di sini untuk menguji pemahaman..."
                      className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />

                    {/* Keywords list */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-[11px] font-bold text-slate-400 mr-1">Kata Kunci:</span>
                        {e.keywords.map((kw, kwIdx) => {
                          const isHit = lowerText.includes(kw.toLowerCase());
                          return (
                            <span
                              key={kwIdx}
                              className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                                isHit
                                  ? 'bg-emerald-600 text-white'
                                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                              }`}
                            >
                              {isHit ? '✓ ' : ''}{kw}
                            </span>
                          );
                        })}
                      </div>

                      <button
                        type="button"
                        onClick={() => setOpenEssayExp((prev) => ({ ...prev, [e.id]: !prev[e.id] }))}
                        className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                          isOpen
                            ? 'bg-slate-800 text-white dark:bg-slate-700'
                            : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100'
                        }`}
                      >
                        {isOpen ? '🙈 Tutup Pembahasan' : '🔑 Lihat Kunci & Pembahasan'}
                      </button>
                    </div>
                  </div>

                  {/* Detailed Answer Reveal */}
                  {isOpen && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800/90 border border-indigo-200 dark:border-slate-700 space-y-2">
                      <div className="text-xs font-extrabold uppercase text-indigo-900 dark:text-indigo-300">
                        ✅ Kunci Jawaban & Pembahasan Lengkap:
                      </div>
                      <div 
                        className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed space-y-2"
                        dangerouslySetInnerHTML={{ __html: e.answer }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};
