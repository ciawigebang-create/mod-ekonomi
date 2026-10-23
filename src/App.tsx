import React, { useState, useEffect } from 'react';
import { ActiveTab } from './types';
import { 
  CHAPTER_SUMMARIES, 
  BAB1_MCQ, BAB1_ESSAYS,
  BAB2_MCQ, BAB2_ESSAYS,
  BAB3_MCQ, BAB3_ESSAYS,
  BAB4_MCQ, BAB4_ESSAYS,
  ALL_MCQ
} from './data/allData';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { DashboardOverview } from './components/DashboardOverview';
import { ChapterView } from './components/ChapterView';
import { SimulatorsHub } from './components/SimulatorsHub';
import { AllQuestionsView } from './components/AllQuestionsView';
import { StudentReport } from './components/StudentReport';
import { GitHubExportModal } from './components/GitHubExportModal';
import { PdfView } from './components/PdfView';

const STORAGE_KEY = 'ekonomi_sma_dashboard_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  
  // Theme & Font
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_dark`);
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  const [fontScale, setFontScale] = useState<'sm' | 'md' | 'lg'>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_font`);
      return (saved as 'sm' | 'md' | 'lg') || 'md';
    } catch {
      return 'md';
    }
  });

  // Learning Progress
  const [readModules, setReadModules] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_read_modules`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [pgAnswers, setPgAnswers] = useState<Record<number, number>>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_pg_answers`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [essayAnswers, setEssayAnswers] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_essay_answers`);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [studentName, setStudentName] = useState<string>(() => {
    try {
      return localStorage.getItem(`${STORAGE_KEY}_student_name`) || '';
    } catch {
      return '';
    }
  });

  const [studentClass, setStudentClass] = useState<string>(() => {
    try {
      return localStorage.getItem(`${STORAGE_KEY}_student_class`) || '';
    } catch {
      return '';
    }
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync Dark Mode to DOM
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem(`${STORAGE_KEY}_dark`, JSON.stringify(darkMode));
  }, [darkMode]);

  // Sync Font Scale to DOM
  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_font`, fontScale);
  }, [fontScale]);

  // Sync State to LocalStorage
  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_read_modules`, JSON.stringify(readModules));
  }, [readModules]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_pg_answers`, JSON.stringify(pgAnswers));
  }, [pgAnswers]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_essay_answers`, JSON.stringify(essayAnswers));
  }, [essayAnswers]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_student_name`, studentName);
  }, [studentName]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_student_class`, studentClass);
  }, [studentClass]);

  // Toast Timer
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleToggleReadModule = (id: string) => {
    setReadModules((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      showToast(next[id] ? 'Bagian materi ditandai selesai!' : 'Status baca dibatalkan');
      return next;
    });
  };

  const handleAnswerPG = (qId: number, optIdx: number) => {
    setPgAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleResetChapterPG = (babId: number) => {
    const startId = (babId - 1) * 50 + 1;
    const endId = babId * 50;
    setPgAnswers((prev) => {
      const next = { ...prev };
      for (let i = startId; i <= endId; i++) {
        delete next[i];
      }
      return next;
    });
    showToast(`Jawaban 50 soal PG Bab ${babId} berhasil direset.`);
  };

  const handleResetAllPG = () => {
    setPgAnswers({});
    showToast('Seluruh jawaban 200 soal PG berhasil direset.');
  };

  const handleResetAllData = () => {
    setReadModules({});
    setPgAnswers({});
    setEssayAnswers({});
    showToast('Seluruh progres belajar berhasil direset.');
  };

  const handleSaveEssayAnswer = (qId: number, text: string) => {
    setEssayAnswers((prev) => ({ ...prev, [qId]: text }));
  };

  const handleChangeFontScale = () => {
    const order: Array<'sm' | 'md' | 'lg'> = ['sm', 'md', 'lg'];
    const nextIdx = (order.indexOf(fontScale) + 1) % order.length;
    setFontScale(order[nextIdx]);
    showToast(`Ukuran teks diubah: ${order[nextIdx].toUpperCase()}`);
  };

  // Font scale root style
  const fontClass = fontScale === 'sm' ? 'text-[92%]' : fontScale === 'lg' ? 'text-[108%]' : '';

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200 ${fontClass}`}>
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 max-w-sm bg-slate-900 text-white dark:bg-white dark:text-slate-950 px-4 py-3 rounded-2xl shadow-xl text-xs font-bold border border-slate-700 animate-fade-in flex items-center gap-2">
          <span>✨</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Sidebar Navigation */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        readModules={readModules}
        pgAnswers={pgAnswers}
      />

      {/* Main Content Area with Desktop Sidebar offset */}
      <div className="lg:pl-72 transition-all duration-300">
        {/* Top Header */}
        <Header
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onOpenSidebar={() => setIsSidebarOpen(true)}
          onOpenExportModal={() => setIsExportModalOpen(true)}
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(!darkMode)}
          fontScale={fontScale}
          onChangeFontScale={handleChangeFontScale}
          answeredCount={Object.keys(pgAnswers).length}
          totalQuestions={ALL_MCQ.length}
        />

        <main className="max-w-6xl mx-auto px-3 sm:px-6 pt-5 pb-24 lg:pb-12">
          
          {/* TAB 1: OVERVIEW DASHBOARD */}
          {activeTab === 'overview' && (
            <DashboardOverview
              setActiveTab={setActiveTab}
              onOpenExportModal={() => setIsExportModalOpen(true)}
              readModules={readModules}
              pgAnswers={pgAnswers}
              essayAnswers={essayAnswers}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          )}

          {/* TAB 2: BAB 1 */}
          {activeTab === 'bab1' && (
            <ChapterView
              babId={1}
              title={CHAPTER_SUMMARIES[0].title}
              subtitle={CHAPTER_SUMMARIES[0].shortDesc}
              gradient={CHAPTER_SUMMARIES[0].gradient}
              modules={CHAPTER_SUMMARIES[0].modules}
              mcqList={BAB1_MCQ}
              essayList={BAB1_ESSAYS}
              readModules={readModules}
              onToggleReadModule={handleToggleReadModule}
              pgAnswers={pgAnswers}
              onAnswerPG={handleAnswerPG}
              onResetChapterPG={handleResetChapterPG}
              essayAnswers={essayAnswers}
              onSaveEssayAnswer={handleSaveEssayAnswer}
              renderChapterSimulator={() => <SimulatorsHub />}
            />
          )}

          {/* TAB 3: BAB 2 */}
          {activeTab === 'bab2' && (
            <ChapterView
              babId={2}
              title={CHAPTER_SUMMARIES[1].title}
              subtitle={CHAPTER_SUMMARIES[1].shortDesc}
              gradient={CHAPTER_SUMMARIES[1].gradient}
              modules={CHAPTER_SUMMARIES[1].modules}
              mcqList={BAB2_MCQ}
              essayList={BAB2_ESSAYS}
              readModules={readModules}
              onToggleReadModule={handleToggleReadModule}
              pgAnswers={pgAnswers}
              onAnswerPG={handleAnswerPG}
              onResetChapterPG={handleResetChapterPG}
              essayAnswers={essayAnswers}
              onSaveEssayAnswer={handleSaveEssayAnswer}
              renderChapterSimulator={() => <SimulatorsHub />}
            />
          )}

          {/* TAB 4: BAB 3 */}
          {activeTab === 'bab3' && (
            <ChapterView
              babId={3}
              title={CHAPTER_SUMMARIES[2].title}
              subtitle={CHAPTER_SUMMARIES[2].shortDesc}
              gradient={CHAPTER_SUMMARIES[2].gradient}
              modules={CHAPTER_SUMMARIES[2].modules}
              mcqList={BAB3_MCQ}
              essayList={BAB3_ESSAYS}
              readModules={readModules}
              onToggleReadModule={handleToggleReadModule}
              pgAnswers={pgAnswers}
              onAnswerPG={handleAnswerPG}
              onResetChapterPG={handleResetChapterPG}
              essayAnswers={essayAnswers}
              onSaveEssayAnswer={handleSaveEssayAnswer}
              renderChapterSimulator={() => <SimulatorsHub />}
            />
          )}

          {/* TAB 5: BAB 4 */}
          {activeTab === 'bab4' && (
            <ChapterView
              babId={4}
              title={CHAPTER_SUMMARIES[3].title}
              subtitle={CHAPTER_SUMMARIES[3].shortDesc}
              gradient={CHAPTER_SUMMARIES[3].gradient}
              modules={CHAPTER_SUMMARIES[3].modules}
              mcqList={BAB4_MCQ}
              essayList={BAB4_ESSAYS}
              readModules={readModules}
              onToggleReadModule={handleToggleReadModule}
              pgAnswers={pgAnswers}
              onAnswerPG={handleAnswerPG}
              onResetChapterPG={handleResetChapterPG}
              essayAnswers={essayAnswers}
              onSaveEssayAnswer={handleSaveEssayAnswer}
              renderChapterSimulator={() => <SimulatorsHub />}
            />
          )}

          {/* TAB: BUKU PDF LENGKAP */}
          {activeTab === 'pdf' && (
            <PdfView setActiveTab={setActiveTab} />
          )}

          {/* TAB 6: SIMULATOR HUB */}
          {activeTab === 'simulasi' && <SimulatorsHub />}

          {/* TAB 7: ALL QUESTIONS (200 PG & 80 ESAI) */}
          {activeTab === 'ujian' && (
            <AllQuestionsView
              pgAnswers={pgAnswers}
              onAnswerPG={handleAnswerPG}
              onResetAllPG={handleResetAllPG}
              essayAnswers={essayAnswers}
              onSaveEssayAnswer={handleSaveEssayAnswer}
            />
          )}

          {/* TAB 8: STUDENT REPORT */}
          {activeTab === 'rapor' && (
            <StudentReport
              studentName={studentName}
              setStudentName={setStudentName}
              studentClass={studentClass}
              setStudentClass={setStudentClass}
              readModules={readModules}
              pgAnswers={pgAnswers}
              essayAnswers={essayAnswers}
              onResetAll={handleResetAllData}
              onShowToast={showToast}
            />
          )}

        </main>
      </div>

      {/* Mobile Bottom Navigation (<lg) */}
      <MobileBottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenChapterMenu={() => setIsSidebarOpen(true)}
      />

      {/* GitHub Pages 1-Click Export Modal */}
      <GitHubExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        onShowToast={showToast}
      />

    </div>
  );
}
