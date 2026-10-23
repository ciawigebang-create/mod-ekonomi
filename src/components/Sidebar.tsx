import React from 'react';
import { ActiveTab } from '../types';
import { CHAPTER_SUMMARIES } from '../data/allData';
import { 
  Home, BookOpen, Layers, Calculator, HelpCircle, 
  BarChart3, Download, X, CheckCircle, ChevronRight,
  TrendingUp, Users, Scale, Zap, FileText
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenExportModal: () => void;
  readModules: Record<string, boolean>;
  pgAnswers: Record<number, number>;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  activeTab,
  setActiveTab,
  onOpenExportModal,
  readModules,
  pgAnswers
}) => {
  const getChapterProgress = (babId: number) => {
    // 50 questions per bab
    const startId = (babId - 1) * 50 + 1;
    const endId = babId * 50;
    let answered = 0;
    for (let i = startId; i <= endId; i++) {
      if (pgAnswers[i] !== undefined) answered++;
    }
    return answered;
  };

  const navItems = [
    {
      id: 'overview' as ActiveTab,
      label: 'Dashboard Utama',
      sublabel: 'Rangkuman & Progres',
      icon: Home,
      color: 'text-indigo-600 dark:text-indigo-400'
    },
    {
      id: 'bab1' as ActiveTab,
      label: 'Bab 1: Kelangkaan',
      sublabel: 'Pengalokasian Sumber Daya',
      icon: Zap,
      color: 'text-emerald-600 dark:text-emerald-400',
      babId: 1
    },
    {
      id: 'bab2' as ActiveTab,
      label: 'Bab 2: Pokok Masalah',
      sublabel: 'Sistem Ekonomi & Circular Flow',
      icon: Scale,
      color: 'text-blue-600 dark:text-blue-400',
      babId: 2
    },
    {
      id: 'bab3' as ActiveTab,
      label: 'Bab 3: D, S & Elastisitas',
      sublabel: 'Keseimbangan Pasar & Kurva',
      icon: TrendingUp,
      color: 'text-sky-600 dark:text-sky-400',
      babId: 3
    },
    {
      id: 'bab4' as ActiveTab,
      label: 'Bab 4: Konsumen & Produsen',
      sublabel: 'Gossen, Produksi & Pasar Input',
      icon: Users,
      color: 'text-purple-600 dark:text-purple-400',
      babId: 4
    },
    {
      id: 'pdf' as ActiveTab,
      label: 'Buku PDF Lengkap',
      sublabel: 'Daftar Isi, Ikhtisar & Cetak A4',
      icon: FileText,
      color: 'text-emerald-600 dark:text-emerald-400'
    },
    {
      id: 'simulasi' as ActiveTab,
      label: 'Lab Simulasi Terpadu',
      sublabel: '8 Simulator & Kalkulator Visual',
      icon: Calculator,
      color: 'text-amber-600 dark:text-amber-400'
    },
    {
      id: 'ujian' as ActiveTab,
      label: 'Bank 200 PG & 80 Esai',
      sublabel: 'Evaluasi & Kunci Jawaban',
      icon: HelpCircle,
      color: 'text-rose-600 dark:text-rose-400'
    },
    {
      id: 'rapor' as ActiveTab,
      label: 'Rapor Capaian Siswa',
      sublabel: 'Statistik & Kirim ke Guru',
      icon: BarChart3,
      color: 'text-emerald-600 dark:text-emerald-400'
    }
  ];

  const handleSelect = (tab: ActiveTab) => {
    setActiveTab(tab);
    onClose();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          onClick={onClose}
          className="lg:hidden fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-sm transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 sm:w-80 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${isOpen ? 'shadow-2xl' : ''}`}
      >
        {/* Top Section */}
        <div className="flex flex-col h-full overflow-y-auto no-scrollbar">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-emerald-600 flex items-center justify-center text-white font-extrabold text-sm shadow">
                EK
              </div>
              <div>
                <span className="font-display font-bold text-sm text-slate-900 dark:text-white block">
                  Navigasi E-Modul
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  Ekonomi SMA Kelas X (4 Bab)
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="lg:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Tutup Sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links List */}
          <nav className="p-3 space-y-1">
            <div className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Menu Pembelajaran
            </div>

            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              const answered = item.babId ? getChapterProgress(item.babId) : null;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  className={`w-full text-left p-2.5 sm:p-3 rounded-2xl flex items-center justify-between gap-3 transition min-h-[48px] cursor-pointer ${
                    isActive
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold border border-indigo-200/80 dark:border-indigo-800 shadow-xs'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-medium'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive 
                        ? 'bg-indigo-600 text-white shadow-sm' 
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm truncate">
                        {item.label}
                      </div>
                      {item.sublabel && (
                        <div className="text-[10px] text-slate-400 dark:text-slate-500 truncate">
                          {item.sublabel}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    {answered !== null && (
                      <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400">
                        {answered}/50
                      </span>
                    )}
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${
                      isActive ? 'text-indigo-600 dark:text-indigo-400 translate-x-0.5' : 'text-slate-300 dark:text-slate-600'
                    }`} />
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Quick Info & GitHub Pages Banner */}
          <div className="p-3 mt-auto">
            <div className="rounded-2xl p-4 bg-gradient-to-br from-slate-900 to-indigo-950 text-white space-y-2.5 shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-white/20 text-emerald-300">
                  Siap Untuk Siswa
                </span>
                <span className="text-[11px] font-mono text-slate-300">100% Offline/HP</span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Salin seluruh kode HTML ini untuk langsung diunggah ke <strong>GitHub Pages</strong> agar siswa bisa belajar mandiri dari HP.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenExportModal();
                }}
                className="w-full py-2 px-3 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white text-xs font-bold transition flex items-center justify-center gap-1.5 shadow cursor-pointer min-h-[44px]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Salin Kode HTML GitHub</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Credit */}
        <div className="p-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 text-center">
          Modul Ekonomi SMA Kelas X • 4 Bab Lengkap
        </div>
      </aside>
    </>
  );
};
