import React, { useState } from 'react';
import { CHAPTER_SUMMARIES, ALL_MCQ, ALL_ESSAYS } from '../data/allData';
import { Award, Share2, RotateCcw, CheckCircle2, BookOpen, HelpCircle, Copy, Check } from 'lucide-react';

interface StudentReportProps {
  studentName: string;
  setStudentName: (name: string) => void;
  studentClass: string;
  setStudentClass: (cls: string) => void;
  readModules: Record<string, boolean>;
  pgAnswers: Record<number, number>;
  essayAnswers: Record<number, string>;
  onResetAll: () => void;
  onShowToast: (msg: string) => void;
}

export const StudentReport: React.FC<StudentReportProps> = ({
  studentName,
  setStudentName,
  studentClass,
  setStudentClass,
  readModules,
  pgAnswers,
  essayAnswers,
  onResetAll,
  onShowToast
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [copied, setCopied] = useState(false);

  // Overall calculations
  const totalMCQ = ALL_MCQ.length; // 200
  let totalCorrect = 0;
  ALL_MCQ.forEach((q) => {
    if (pgAnswers[q.id] === q.correct) totalCorrect++;
  });
  const totalAnswered = Object.keys(pgAnswers).length;
  const overallScore = Math.round((totalCorrect / totalMCQ) * 100);

  const totalReadModules = Object.values(readModules).filter(Boolean).length;
  const totalEssaysAttempted = Object.values(essayAnswers).filter((t) => t.trim().length > 10).length;

  // Chapter-by-chapter statistics
  const chapterStats = CHAPTER_SUMMARIES.map((ch) => {
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

    const chModulesRead = ch.modules.filter((m) => !!readModules[m.id]).length;

    return {
      ...ch,
      answered: chAnswered,
      correct: chCorrect,
      score: chScore,
      modulesRead: chModulesRead
    };
  });

  const handleCopyReport = () => {
    const lines = [
      '📊 *LAPORAN HASIL BELAJAR MANDIRI EKONOMI SMA KELAS X*',
      `Nama Siswa: ${studentName || '-'}`,
      `Kelas / Absen: ${studentClass || '-'}`,
      `Tanggal: ${new Date().toLocaleDateString('id-ID', { dateStyle: 'long' })}`,
      '----------------------------------------',
      `🏆 *Nilai Total 200 Soal PG:* ${overallScore} / 100 (Benar ${totalCorrect} dari 200 Soal)`,
      `📚 *Materi Selesai Dipelajari:* ${totalReadModules} dari 21 Bagian`,
      `✍️ *Latihan Esai Dikerjakan:* ${totalEssaysAttempted} dari 80 Esai`,
      '----------------------------------------',
      '*Rincian Per Bab:*',
      ...chapterStats.map(
        (c) =>
          `• ${c.number}: Skor ${c.score} (Benar ${c.correct}/50 PG | Materi ${c.modulesRead}/${c.modulesCount})`
      ),
      '----------------------------------------',
      '✅ *Dihasilkan dari E-Modul Ekonomi Terpadu (Bab 1 - 4)*'
    ];

    navigator.clipboard.writeText(lines.join('\n')).then(() => {
      setCopied(true);
      onShowToast('Laporan berhasil disalin ke clipboard! Siap kirim via WhatsApp.');
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-emerald-950 rounded-3xl p-6 sm:p-8 text-white shadow-lg space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
              Evaluasi Mandiri Siswa
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight mt-1">
              📊 Rapor Capaian Belajar Ekonomi Terpadu
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Pantau progres belajar dari Bab 1 hingga Bab 4, dan kirimkan ringkasan hasilnya ke Bapak/Ibu Guru.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyReport}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-extrabold shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Tersalin!' : 'Salin Laporan WA'}</span>
            </button>
          </div>
        </div>

        {/* Student Identity Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
          <div>
            <label className="block text-xs font-bold text-slate-200 mb-1">
              Nama Lengkap Siswa:
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              placeholder="Contoh: Muhammad Fikri Pratama"
              className="w-full px-3 py-2 rounded-xl bg-white/20 border border-white/20 text-white placeholder-slate-400 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-200 mb-1">
              Kelas & Nomor Absen:
            </label>
            <input
              type="text"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              placeholder="Contoh: X-A / 18"
              className="w-full px-3 py-2 rounded-xl bg-white/20 border border-white/20 text-white placeholder-slate-400 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
        </div>
      </div>

      {/* Global Score Summary Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Skor Total (200 PG)</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 font-mono">
            {overallScore}<span className="text-sm font-normal text-slate-400">/100</span>
          </div>
          <div className="text-[11px] text-slate-500">Benar {totalCorrect} dari 200 Soal</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Soal PG Terjawab</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono">
            {totalAnswered}<span className="text-sm font-normal text-slate-400">/200</span>
          </div>
          <div className="text-[11px] text-slate-500">{Math.round((totalAnswered / 200) * 100)}% Kelengkapan</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Materi Selesai Dibaca</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 font-mono">
            {totalReadModules}<span className="text-sm font-normal text-slate-400">/21</span>
          </div>
          <div className="text-[11px] text-slate-500">{Math.round((totalReadModules / 21) * 100)}% Penguasaan</div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-1">
          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Latihan Esai Dicoba</div>
          <div className="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-400 font-mono">
            {totalEssaysAttempted}<span className="text-sm font-normal text-slate-400">/80</span>
          </div>
          <div className="text-[11px] text-slate-500">Uraian & Langkah Hitungan</div>
        </div>
      </div>

      {/* Chapter Performance Breakdown */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white">
          Rincian Nilai & Penguasaan Per Bab
        </h3>

        <div className="space-y-3">
          {chapterStats.map((c) => (
            <div
              key={c.id}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs font-extrabold uppercase px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-mono">
                    {c.number}
                  </span>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                    {c.title}
                  </h4>
                </div>
                <div className="text-[11px] text-slate-500 space-x-2">
                  <span>Materi: <strong>{c.modulesRead}/{c.modulesCount}</strong></span>
                  <span>·</span>
                  <span>Terjawab: <strong>{c.answered}/50</strong></span>
                  <span>·</span>
                  <span>Benar: <strong className="text-emerald-600">{c.correct}</strong></span>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-center shrink-0">
                <div className="w-28 h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 dark:bg-indigo-500 transition-all duration-300"
                    style={{ width: `${c.score}%` }}
                  />
                </div>
                <span className="font-mono font-extrabold text-sm text-indigo-600 dark:text-indigo-400 w-12 text-right">
                  {c.score}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer: Reset Progress */}
      <div className="flex items-center justify-between pt-2">
        <span className="text-xs text-slate-400">
          Progres belajar disimpan otomatis di browser HP siswa.
        </span>

        <button
          type="button"
          onClick={() => setShowConfirmReset(true)}
          className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-50 dark:bg-rose-950 text-rose-700 dark:text-rose-300 hover:bg-rose-100 transition cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5 inline mr-1" />
          Reset Seluruh Data Belajar
        </button>
      </div>

      {/* Confirmation Modal */}
      {showConfirmReset && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-sm w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
            <h4 className="font-display text-lg font-extrabold text-slate-900 dark:text-white">
              Konfirmasi Reset Data?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Seluruh jawaban 200 soal PG, catatan esai, dan checklist materi yang telah selesai dibaca akan dihapus. Anda dapat berlatih kembali dari nol.
            </p>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmReset(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold cursor-pointer"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  onResetAll();
                  setShowConfirmReset(false);
                }}
                className="px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold cursor-pointer"
              >
                Ya, Reset Semuanya
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
