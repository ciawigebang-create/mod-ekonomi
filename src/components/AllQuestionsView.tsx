import React, { useState } from 'react';
import { MCQQuestion, EssayQuestion } from '../types';
import { ALL_MCQ, ALL_ESSAYS } from '../data/allData';
import { CheckCircle2, RotateCcw, Search, Eye, Filter, HelpCircle, Check, X } from 'lucide-react';

interface AllQuestionsViewProps {
  pgAnswers: Record<number, number>;
  onAnswerPG: (qId: number, optIdx: number) => void;
  onResetAllPG: () => void;
  essayAnswers: Record<number, string>;
  onSaveEssayAnswer: (qId: number, text: string) => void;
}

export const AllQuestionsView: React.FC<AllQuestionsViewProps> = ({
  pgAnswers,
  onAnswerPG,
  onResetAllPG,
  essayAnswers,
  onSaveEssayAnswer
}) => {
  const [examType, setExamType] = useState<'pg' | 'esai'>('pg');
  const [selectedBab, setSelectedBab] = useState<number | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'unanswered' | 'correct' | 'wrong'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllExplanations, setShowAllExplanations] = useState(false);
  const [showNumberGrid, setShowNumberGrid] = useState(false);
  const [openEssayIds, setOpenEssayIds] = useState<Record<number, boolean>>({});

  // Calculations
  const totalMCQ = ALL_MCQ.length; // 200
  const answeredCount = Object.keys(pgAnswers).length;
  let correctCount = 0;
  ALL_MCQ.forEach((q) => {
    if (pgAnswers[q.id] === q.correct) correctCount++;
  });
  const wrongCount = answeredCount - correctCount;
  const totalScore = Math.round((correctCount / totalMCQ) * 100);

  // Filtered MCQs
  const filteredMCQ = ALL_MCQ.filter((q) => {
    if (selectedBab !== 'all' && q.babId !== selectedBab) return false;
    const ans = pgAnswers[q.id];
    if (selectedStatus === 'unanswered' && ans !== undefined) return false;
    if (selectedStatus === 'correct' && ans !== q.correct) return false;
    if (selectedStatus === 'wrong' && (ans === undefined || ans === q.correct)) return false;
    if (searchQuery) {
      const s = searchQuery.toLowerCase();
      return q.question.toLowerCase().includes(s) || q.explanation.toLowerCase().includes(s) || q.topic.toLowerCase().includes(s);
    }
    return true;
  });

  // Filtered Essays
  const filteredEssays = ALL_ESSAYS.filter((e) => {
    if (selectedBab !== 'all' && e.babId !== selectedBab) return false;
    if (searchQuery) {
      const s = searchQuery.toLowerCase();
      return e.question.toLowerCase().includes(s) || e.topic.toLowerCase().includes(s) || e.answer.toLowerCase().includes(s);
    }
    return true;
  });

  const letters = ['A', 'B', 'C', 'D', 'E'];

  return (
    <div className="space-y-6">
      
      {/* Header Card */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                Bank Soal Terpadu • 4 Bab
              </span>
              <span className="text-slate-300">·</span>
              <span className="text-xs text-slate-500">200 Soal PG & 80 Soal Esai</span>
            </div>
            <h2 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Evaluasi Mandiri & Bank Soal Ekonomi Lengkap
            </h2>
          </div>

          {/* Score Counter Strip */}
          <div className="flex items-center gap-2">
            <div className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-center">
              <div className="text-[10px] text-slate-500">Terjawab</div>
              <div className="text-sm font-extrabold text-slate-900 dark:text-white font-mono">
                {answeredCount}/200
              </div>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-center">
              <div className="text-[10px] text-emerald-600">Benar</div>
              <div className="text-sm font-extrabold text-emerald-700 dark:text-emerald-300 font-mono">
                {correctCount}
              </div>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-rose-50 dark:bg-rose-950/60 text-center">
              <div className="text-[10px] text-rose-600">Salah</div>
              <div className="text-sm font-extrabold text-rose-700 dark:text-rose-300 font-mono">
                {wrongCount}
              </div>
            </div>
            <div className="px-4 py-1.5 rounded-xl bg-indigo-600 text-white text-center">
              <div className="text-[10px] text-indigo-100">Nilai Akhir</div>
              <div className="text-base font-extrabold font-mono">
                {totalScore}
              </div>
            </div>
          </div>
        </div>

        {/* Exam Type Tabs & Filters */}
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl self-start">
            <button
              type="button"
              onClick={() => setExamType('pg')}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold transition cursor-pointer ${
                examType === 'pg'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              200 Soal Pilihan Ganda
            </button>
            <button
              type="button"
              onClick={() => setExamType('esai')}
              className={`px-4 py-2 rounded-lg text-xs font-extrabold transition cursor-pointer ${
                examType === 'esai'
                  ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
              }`}
            >
              80 Soal Esai & Pembahasan
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setShowNumberGrid(!showNumberGrid)}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 transition cursor-pointer"
            >
              🔢 Peta Nomor (1-200)
            </button>
            <button
              type="button"
              onClick={() => setShowAllExplanations(!showAllExplanations)}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 hover:bg-amber-100 transition cursor-pointer"
            >
              {showAllExplanations ? '🙈 Tutup Pembahasan' : '💡 Buka Semua Pembahasan'}
            </button>
            <button
              type="button"
              onClick={onResetAllPG}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 hover:bg-rose-100 transition cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5 inline mr-1" />
              Reset Jawaban
            </button>
          </div>
        </div>

        {/* Filter Toolbar */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-2 items-center">
          <div className="sm:col-span-3">
            <select
              value={selectedBab}
              onChange={(e) => setSelectedBab(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="w-full px-3 py-2 rounded-xl text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none"
            >
              <option value="all">Semua Bab (1 - 4)</option>
              <option value="1">Bab 1: Kelangkaan & Sumber Daya</option>
              <option value="2">Bab 2: Pokok Masalah & Sistem</option>
              <option value="3">Bab 3: Permintaan, Penawaran, Elastisitas</option>
              <option value="4">Bab 4: Perilaku Konsumen & Produsen</option>
            </select>
          </div>

          {examType === 'pg' && (
            <div className="sm:col-span-3">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl text-xs font-bold bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none"
              >
                <option value="all">Semua Status Soal</option>
                <option value="unanswered">Belum Dijawab</option>
                <option value="correct">Jawaban Benar</option>
                <option value="wrong">Jawaban Salah</option>
              </select>
            </div>
          )}

          <div className={examType === 'pg' ? "sm:col-span-6" : "sm:col-span-9"}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="🔍 Cari kata kunci soal atau konsep..."
              className="w-full px-3 py-2 rounded-xl text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Number Jump Grid (1..200) */}
        {showNumberGrid && examType === 'pg' && (
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <div className="text-xs font-bold text-slate-500">
              Klik nomor untuk melompat langsung ke soal:
            </div>
            <div className="grid grid-cols-10 sm:grid-cols-20 gap-1 max-h-48 overflow-y-auto p-1 bg-slate-50 dark:bg-slate-800 rounded-xl">
              {ALL_MCQ.map((q) => {
                const ans = pgAnswers[q.id];
                let bg = 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300';
                if (ans !== undefined) {
                  bg = ans === q.correct ? 'bg-emerald-600 text-white' : 'bg-rose-600 text-white';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => {
                      const el = document.getElementById(`exam-q-${q.id}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`py-1 rounded text-[10px] font-mono font-bold transition ${bg}`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* =======================================================
          VIEW 1: PILIHAN GANDA (200 SOAL)
          ======================================================= */}
      {examType === 'pg' && (
        <div className="space-y-4">
          {filteredMCQ.map((q) => {
            const userAns = pgAnswers[q.id];
            const isAnswered = userAns !== undefined;
            const isCorrect = userAns === q.correct;
            const showExp = isAnswered || showAllExplanations;

            return (
              <div
                key={q.id}
                id={`exam-q-${q.id}`}
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-xl bg-slate-900 dark:bg-indigo-600 text-white font-mono font-extrabold text-xs">
                      Soal #{q.id}
                    </span>
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      {q.babName}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-slate-500">
                      {q.topic}
                    </span>
                  </div>

                  {isAnswered && (
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold ${
                      isCorrect
                        ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                        : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'
                    }`}>
                      {isCorrect ? '✓ Benar' : '✕ Salah'}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed whitespace-pre-line">
                  {q.question}
                </p>

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
                        className={`w-full text-left p-3 rounded-2xl border transition flex items-start gap-3 cursor-pointer ${btnStyle}`}
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

                {showExp && (
                  <div className="p-4 rounded-2xl bg-amber-50/80 dark:bg-slate-800/80 border border-amber-200 dark:border-slate-700 text-xs sm:text-sm space-y-1">
                    <div className="font-extrabold text-amber-900 dark:text-amber-300">
                      💡 Kunci: {letters[q.correct]}
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
      )}

      {/* =======================================================
          VIEW 2: SOAL ESAI (80 SOAL)
          ======================================================= */}
      {examType === 'esai' && (
        <div className="space-y-4">
          {filteredEssays.map((e) => {
            const studentText = essayAnswers[e.id] || '';
            const isOpen = showAllExplanations || !!openEssayIds[e.id];
            const lower = studentText.toLowerCase();
            const matchedKw = e.keywords.filter((k) => lower.includes(k.toLowerCase()));

            return (
              <div
                key={e.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-xl bg-amber-500 text-slate-950 font-mono font-extrabold text-xs">
                      Esai #{e.id}
                    </span>
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      {e.babName}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-slate-500">{e.topic}</span>
                  </div>

                  <span className={`text-xs font-bold ${
                    matchedKw.length > 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'
                  }`}>
                    Kata Kunci: {matchedKw.length}/{e.keywords.length}
                  </span>
                </div>

                <p className="text-xs sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed whitespace-pre-line">
                  {e.question}
                </p>

                <div className="space-y-1.5">
                  <textarea
                    rows={3}
                    value={studentText}
                    onChange={(evt) => onSaveEssayAnswer(e.id, evt.target.value)}
                    placeholder="Tuliskan jawaban latihanmu di sini..."
                    className="w-full p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                    <div className="flex flex-wrap items-center gap-1">
                      {e.keywords.map((kw, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                          {kw}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => setOpenEssayIds((prev) => ({ ...prev, [e.id]: !prev[e.id] }))}
                      className="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 hover:bg-indigo-100 transition cursor-pointer"
                    >
                      {isOpen ? '🙈 Tutup Pembahasan' : '🔑 Buka Pembahasan'}
                    </button>
                  </div>
                </div>

                {isOpen && (
                  <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-emerald-50 dark:from-slate-800 dark:to-slate-800/90 border border-indigo-200 dark:border-slate-700 space-y-2">
                    <div className="text-xs font-extrabold uppercase text-indigo-900 dark:text-indigo-300">
                      ✅ Kunci Jawaban Lengkap:
                    </div>
                    <div
                      className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: e.answer }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
