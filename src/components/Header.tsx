import React from 'react';
import { ActiveTab } from '../types';
import { 
  Menu, Sun, Moon, Sparkles, Download, 
  CheckCircle2, BookOpen, Calculator, Award, FileText 
} from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenSidebar: () => void;
  onOpenExportModal: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
  fontScale: 'sm' | 'md' | 'lg';
  onChangeFontScale: () => void;
  answeredCount: number;
  totalQuestions: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenSidebar,
  onOpenExportModal,
  darkMode,
  onToggleDarkMode,
  fontScale,
  onChangeFontScale,
  answeredCount,
  totalQuestions
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-3 sm:gap-6">
          
          {/* Zone 1: Brand Wordmark (Mobile Hamburger & Desktop Breadcrumb) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenSidebar}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition min-h-[44px] min-w-[44px] flex items-center justify-center shrink-0 cursor-pointer"
              aria-label="Buka Menu Sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className="lg:hidden flex items-center gap-2 text-left group focus:outline-none shrink-0 cursor-pointer"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-emerald-600 flex items-center justify-center text-white font-extrabold text-xs shadow-sm shrink-0">
                EK
              </div>
              <span className="font-display font-extrabold text-sm text-slate-900 dark:text-white truncate block">
                E-Modul Ekonomi
              </span>
            </button>

            {/* Desktop Active Context Badge */}
            <div className="hidden lg:flex items-center gap-2 text-xs font-bold shrink-0">
              <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
                {activeTab === 'overview' && 'Dashboard Utama'}
                {activeTab === 'bab1' && 'Bab 1: Kelangkaan'}
                {activeTab === 'bab2' && 'Bab 2: Pokok Masalah'}
                {activeTab === 'bab3' && 'Bab 3: Permintaan & Penawaran'}
                {activeTab === 'bab4' && 'Bab 4: Perilaku Konsumen'}
                {activeTab === 'simulasi' && 'Lab 8 Simulator'}
                {activeTab === 'ujian' && 'Bank 200 PG & Esai'}
                {activeTab === 'rapor' && 'Rapor Belajar Siswa'}
                {activeTab === 'pdf' && 'Buku PDF Lengkap'}
              </span>
            </div>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 text-xs xl:text-sm font-semibold text-slate-600 dark:text-slate-300 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('overview')}
              className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
                activeTab === 'overview'
                  ? 'text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 dark:border-indigo-400'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Dashboard
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('bab1')}
              className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
                activeTab.startsWith('bab')
                  ? 'text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 dark:border-indigo-400'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Materi 4 Bab
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('pdf')}
              className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
                activeTab === 'pdf'
                  ? 'text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 dark:border-indigo-400'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Buku PDF
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('simulasi')}
              className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
                activeTab === 'simulasi'
                  ? 'text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 dark:border-indigo-400'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Lab Simulasi
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('ujian')}
              className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
                activeTab === 'ujian'
                  ? 'text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 dark:border-indigo-400'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Bank Soal
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('rapor')}
              className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
                activeTab === 'rapor'
                  ? 'text-indigo-600 dark:text-indigo-400 font-bold border-b-2 border-indigo-600 dark:border-indigo-400'
                  : 'hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Rapor
            </button>
          </nav>

          {/* Zone 3: Actions & Accessibility Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Live Progress Indicator */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              <span>PG: <strong className="font-mono text-emerald-600 dark:text-emerald-400">{answeredCount}/{totalQuestions}</strong></span>
            </div>

            {/* Font Size Adjuster for Mobile Accessibility */}
            <button
              type="button"
              onClick={onChangeFontScale}
              title="Ubah Ukuran Teks (Ramah HP)"
              className="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            >
              Aa {fontScale === 'sm' ? 'S' : fontScale === 'lg' ? 'L' : 'M'}
            </button>

            {/* Dark Mode Toggle */}
            <button
              type="button"
              onClick={onToggleDarkMode}
              title="Mode Gelap / Terang"
              className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-amber-300 border border-slate-200 dark:border-slate-700 transition cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Toggle Tema Gelap Terang"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Direct PDF Download Button */}
            <a
              href="/E-Modul_Ekonomi_SMA_Kelas_X_Lengkap_Bab_1-4.pdf"
              download="E-Modul_Ekonomi_SMA_Kelas_X_Lengkap_Bab_1-4.pdf"
              title="Unduh Buku PDF Lengkap (1.3 MB)"
              className="hidden md:flex px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold items-center gap-1.5 transition shadow-sm cursor-pointer min-h-[44px]"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Buku PDF</span>
            </a>

            {/* GitHub Pages 1-Click Export Button */}
            <button
              type="button"
              onClick={onOpenExportModal}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-sm cursor-pointer min-h-[44px]"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Siap GitHub (1 Klik)</span>
              <span className="sm:hidden">GitHub</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
