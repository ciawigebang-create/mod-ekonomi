import React from 'react';
import { ActiveTab } from '../types';
import { Home, BookOpen, Calculator, CheckSquare, BarChart2 } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenChapterMenu: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  setActiveTab,
  onOpenChapterMenu
}) => {
  const isChapterTab = activeTab.startsWith('bab');

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-lg px-1 py-1 transition-colors">
      <div className="grid grid-cols-5 gap-0.5 max-w-md mx-auto items-center h-14">
        
        {/* 1. Beranda */}
        <button
          type="button"
          onClick={() => setActiveTab('overview')}
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition min-h-[44px] cursor-pointer ${
            activeTab === 'overview'
              ? 'text-indigo-600 dark:text-indigo-400 font-extrabold'
              : 'text-slate-500 dark:text-slate-400 font-medium'
          }`}
        >
          <Home className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-tight">Beranda</span>
        </button>

        {/* 2. Bab Materi */}
        <button
          type="button"
          onClick={onOpenChapterMenu}
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition min-h-[44px] cursor-pointer ${
            isChapterTab
              ? 'text-indigo-600 dark:text-indigo-400 font-extrabold'
              : 'text-slate-500 dark:text-slate-400 font-medium'
          }`}
        >
          <BookOpen className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-tight">Materi 4 Bab</span>
        </button>

        {/* 3. Lab Simulasi */}
        <button
          type="button"
          onClick={() => setActiveTab('simulasi')}
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition min-h-[44px] cursor-pointer ${
            activeTab === 'simulasi'
              ? 'text-indigo-600 dark:text-indigo-400 font-extrabold'
              : 'text-slate-500 dark:text-slate-400 font-medium'
          }`}
        >
          <Calculator className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-tight">Simulasi</span>
        </button>

        {/* 4. Bank Soal */}
        <button
          type="button"
          onClick={() => setActiveTab('ujian')}
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition min-h-[44px] cursor-pointer ${
            activeTab === 'ujian'
              ? 'text-indigo-600 dark:text-indigo-400 font-extrabold'
              : 'text-slate-500 dark:text-slate-400 font-medium'
          }`}
        >
          <CheckSquare className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-tight">200 PG</span>
        </button>

        {/* 5. Rapor */}
        <button
          type="button"
          onClick={() => setActiveTab('rapor')}
          className={`flex flex-col items-center justify-center py-1 rounded-xl transition min-h-[44px] cursor-pointer ${
            activeTab === 'rapor'
              ? 'text-indigo-600 dark:text-indigo-400 font-extrabold'
              : 'text-slate-500 dark:text-slate-400 font-medium'
          }`}
        >
          <BarChart2 className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] leading-tight">Rapor</span>
        </button>

      </div>
    </nav>
  );
};
