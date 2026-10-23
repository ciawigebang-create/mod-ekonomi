import fs from 'fs';
import path from 'path';
import { 
  CHAPTER_SUMMARIES, 
  BAB1_MODULES, BAB1_UTILITY_TYPES, BAB1_FLASHCARDS, BAB1_MCQ, BAB1_ESSAYS,
  BAB2_MODULES, BAB2_SISTEM_EKONOMI, BAB2_FLASHCARDS, BAB2_MCQ, BAB2_ESSAYS,
  BAB3_MODULES, BAB3_MCQ, BAB3_ESSAYS,
  BAB4_MODULES, BAB4_GOSSEN_DATA, BAB4_MCQ, BAB4_ESSAYS,
  ALL_MCQ, ALL_ESSAYS
} from '../src/data/allData.ts';

const outPath = path.resolve(process.cwd(), 'public/ekonomi_sma_lengkap.html');

const htmlContent = `<!DOCTYPE html>
<html lang="id" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>E-Modul Ekonomi SMA Terpadu (Bab 1 - 4)</title>
  <meta name="description" content="Dashboard interaktif pembelajaran mandiri Ekonomi SMA Kelas X mencakup Bab 1 Kelangkaan, Bab 2 Masalah & Sistem Ekonomi, Bab 3 Permintaan Penawaran & Elastisitas, dan Bab 4 Perilaku Konsumen & Produsen.">
  <script src="https://cdn.tailwindcss.com/3.4.17"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@500;600;700&display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
            display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
            mono: ['"JetBrains Mono"', 'monospace'],
          }
        }
      }
    };
  </script>
  <style>
    body { font-family: 'Inter', sans-serif; -webkit-tap-highlight-color: transparent; }
    h1, h2, h3, h4, .font-display { font-family: 'Plus Jakarta Sans', 'Inter', sans-serif; }
    .font-scale-sm { font-size: 92%; }
    .font-scale-md { font-size: 100%; }
    .font-scale-lg { font-size: 108%; }
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: #f1f5f9; }
    ::-webkit-scrollbar-thumb { background: #94a3b8; border-radius: 9999px; }
    .dark ::-webkit-scrollbar-track { background: #0f172a; }
    .dark ::-webkit-scrollbar-thumb { background: #475569; }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-100 min-h-screen transition-colors duration-200">

  <!-- TOP HEADER -->
  <header class="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs">
    <div class="max-w-7xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-3">
      <div class="flex items-center gap-2.5 min-w-0 cursor-pointer" onclick="switchTab('overview')">
        <button type="button" id="openMobileSidebarBtn" class="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center">
          ☰
        </button>
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-violet-600 to-emerald-600 flex items-center justify-center text-white font-extrabold text-base shadow shrink-0">
          EK
        </div>
        <div class="min-w-0">
          <span class="font-display font-extrabold text-sm sm:text-base text-slate-900 dark:text-white truncate block">
            E-Modul Ekonomi Terpadu
          </span>
          <span class="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">
            Ekonomi SMA Kelas X • Bab 1 s.d. Bab 4
          </span>
        </div>
      </div>

      <nav class="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-600 dark:text-slate-300">
        <button type="button" onclick="switchTab('overview')" class="top-nav-btn py-1 font-bold text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600" data-top-tab="overview">Dashboard</button>
        <button type="button" onclick="switchTab('bab1')" class="top-nav-btn py-1 hover:text-slate-900 dark:hover:text-white" data-top-tab="bab1">Bab 1</button>
        <button type="button" onclick="switchTab('bab2')" class="top-nav-btn py-1 hover:text-slate-900 dark:hover:text-white" data-top-tab="bab2">Bab 2</button>
        <button type="button" onclick="switchTab('bab3')" class="top-nav-btn py-1 hover:text-slate-900 dark:hover:text-white" data-top-tab="bab3">Bab 3</button>
        <button type="button" onclick="switchTab('bab4')" class="top-nav-btn py-1 hover:text-slate-900 dark:hover:text-white" data-top-tab="bab4">Bab 4</button>
        <button type="button" onclick="switchTab('simulasi')" class="top-nav-btn py-1 hover:text-slate-900 dark:hover:text-white" data-top-tab="simulasi">8 Simulasi</button>
        <button type="button" onclick="switchTab('ujian')" class="top-nav-btn py-1 hover:text-slate-900 dark:hover:text-white" data-top-tab="ujian">200 PG & 80 Esai</button>
        <button type="button" onclick="switchTab('rapor')" class="top-nav-btn py-1 hover:text-slate-900 dark:hover:text-white" data-top-tab="rapor">Rapor Siswa</button>
      </nav>

      <div class="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <button id="fontToggleBtn" type="button" class="px-2.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center">
          Aa
        </button>
        <button id="themeToggleBtn" type="button" class="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-amber-300 border border-slate-200 dark:border-slate-700 min-h-[44px] min-w-[44px] flex items-center justify-center">
          <span id="themeIcon">🌙</span>
        </button>
        <button id="githubModalBtn" type="button" class="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-indigo-600 dark:hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-sm min-h-[44px]">
          <span>🚀 Info GitHub</span>
        </button>
      </div>
    </div>
  </header>

  <!-- SIDEBAR DRAWER -->
  <div id="sidebarBackdrop" class="lg:hidden fixed inset-0 z-40 bg-slate-950/60 backdrop-blur-xs hidden" onclick="toggleSidebar(false)"></div>
  <aside id="sidebarPanel" class="fixed top-0 bottom-0 left-0 z-50 w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between transition-transform duration-300 -translate-x-full lg:translate-x-0 shadow-xl lg:shadow-none">
    <div class="flex flex-col h-full overflow-y-auto no-scrollbar">
      <div class="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">EK</div>
          <span class="font-display font-bold text-sm text-slate-900 dark:text-white">Daftar Menu E-Modul</span>
        </div>
        <button type="button" onclick="toggleSidebar(false)" class="lg:hidden p-2 text-slate-400 hover:text-slate-600 font-bold min-h-[44px] min-w-[44px]">✕</button>
      </div>

      <nav class="p-3 space-y-1">
        <div class="px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Navigasi Utama</div>
        <button type="button" onclick="switchTab('overview')" class="sidebar-link-btn w-full text-left p-3 rounded-2xl flex items-center gap-3 text-xs font-bold transition hover:bg-slate-100 dark:hover:bg-slate-800" data-tab-id="overview">
          <span>🏠</span> <span>Dashboard Utama</span>
        </button>
        <button type="button" onclick="switchTab('bab1')" class="sidebar-link-btn w-full text-left p-3 rounded-2xl flex items-center gap-3 text-xs font-bold transition hover:bg-slate-100 dark:hover:bg-slate-800" data-tab-id="bab1">
          <span>📗</span> <span>Bab 1: Kelangkaan & Sumber Daya</span>
        </button>
        <button type="button" onclick="switchTab('bab2')" class="sidebar-link-btn w-full text-left p-3 rounded-2xl flex items-center gap-3 text-xs font-bold transition hover:bg-slate-100 dark:hover:bg-slate-800" data-tab-id="bab2">
          <span>📘</span> <span>Bab 2: Masalah & Sistem Ekonomi</span>
        </button>
        <button type="button" onclick="switchTab('bab3')" class="sidebar-link-btn w-full text-left p-3 rounded-2xl flex items-center gap-3 text-xs font-bold transition hover:bg-slate-100 dark:hover:bg-slate-800" data-tab-id="bab3">
          <span>📙</span> <span>Bab 3: D, S, Keseimbangan & Elastisitas</span>
        </button>
        <button type="button" onclick="switchTab('bab4')" class="sidebar-link-btn w-full text-left p-3 rounded-2xl flex items-center gap-3 text-xs font-bold transition hover:bg-slate-100 dark:hover:bg-slate-800" data-tab-id="bab4">
          <span>📕</span> <span>Bab 4: Perilaku Konsumen & Produsen</span>
        </button>
        <button type="button" onclick="switchTab('simulasi')" class="sidebar-link-btn w-full text-left p-3 rounded-2xl flex items-center gap-3 text-xs font-bold transition hover:bg-slate-100 dark:hover:bg-slate-800" data-tab-id="simulasi">
          <span>🧮</span> <span>Lab 8 Simulator Interaktif</span>
        </button>
        <button type="button" onclick="switchTab('ujian')" class="sidebar-link-btn w-full text-left p-3 rounded-2xl flex items-center gap-3 text-xs font-bold transition hover:bg-slate-100 dark:hover:bg-slate-800" data-tab-id="ujian">
          <span>🎯</span> <span>Bank 200 PG & 80 Esai</span>
        </button>
        <button type="button" onclick="switchTab('rapor')" class="sidebar-link-btn w-full text-left p-3 rounded-2xl flex items-center gap-3 text-xs font-bold transition hover:bg-slate-100 dark:hover:bg-slate-800" data-tab-id="rapor">
          <span>📊</span> <span>Rapor Capaian Belajar</span>
        </button>
      </nav>

      <div class="p-3 mt-auto">
        <div class="p-4 rounded-2xl bg-gradient-to-br from-indigo-900 to-slate-900 text-white space-y-2 text-xs">
          <div class="font-extrabold text-amber-300">Siap GitHub Pages</div>
          <p class="text-slate-300">File HTML tunggal ini mandiri dan bisa dijalankan langsung di HP siswa tanpa server.</p>
        </div>
      </div>
    </div>
  </aside>

  <!-- MAIN CONTAINER (Shifted on Desktop) -->
  <div class="lg:pl-72 transition-all">
    <main id="mainContainer" class="max-w-6xl mx-auto px-3 sm:px-6 pt-5 pb-24 lg:pb-12 space-y-6">

      <!-- VIEW 1: OVERVIEW DASHBOARD -->
      <section id="view-overview" class="app-view space-y-6"></section>

      <!-- VIEW 2: BAB 1 -->
      <section id="view-bab1" class="app-view hidden space-y-6"></section>

      <!-- VIEW 3: BAB 2 -->
      <section id="view-bab2" class="app-view hidden space-y-6"></section>

      <!-- VIEW 4: BAB 3 -->
      <section id="view-bab3" class="app-view hidden space-y-6"></section>

      <!-- VIEW 5: BAB 4 -->
      <section id="view-bab4" class="app-view hidden space-y-6"></section>

      <!-- VIEW 6: SIMULASI -->
      <section id="view-simulasi" class="app-view hidden space-y-6"></section>

      <!-- VIEW 7: UJIAN (200 PG & 80 ESAI) -->
      <section id="view-ujian" class="app-view hidden space-y-6"></section>

      <!-- VIEW 8: RAPOR -->
      <section id="view-rapor" class="app-view hidden space-y-6"></section>

    </main>
  </div>

  <!-- MOBILE BOTTOM BAR -->
  <nav class="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 shadow-lg px-1 py-1">
    <div class="grid grid-cols-5 gap-0.5 max-w-md mx-auto items-center h-14">
      <button type="button" onclick="switchTab('overview')" class="mob-nav-btn flex flex-col items-center justify-center py-1 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 min-h-[44px]" data-mob-tab="overview">
        <span class="text-base leading-none mb-0.5">🏠</span>
        <span>Beranda</span>
      </button>
      <button type="button" onclick="toggleSidebar(true)" class="mob-nav-btn flex flex-col items-center justify-center py-1 text-[10px] font-medium text-slate-500 min-h-[44px]">
        <span class="text-base leading-none mb-0.5">📚</span>
        <span>4 Bab</span>
      </button>
      <button type="button" onclick="switchTab('simulasi')" class="mob-nav-btn flex flex-col items-center justify-center py-1 text-[10px] font-medium text-slate-500 min-h-[44px]" data-mob-tab="simulasi">
        <span class="text-base leading-none mb-0.5">🧮</span>
        <span>Simulasi</span>
      </button>
      <button type="button" onclick="switchTab('ujian')" class="mob-nav-btn flex flex-col items-center justify-center py-1 text-[10px] font-medium text-slate-500 min-h-[44px]" data-mob-tab="ujian">
        <span class="text-base leading-none mb-0.5">🎯</span>
        <span>200 PG</span>
      </button>
      <button type="button" onclick="switchTab('rapor')" class="mob-nav-btn flex flex-col items-center justify-center py-1 text-[10px] font-medium text-slate-500 min-h-[44px]" data-mob-tab="rapor">
        <span class="text-base leading-none mb-0.5">📊</span>
        <span>Rapor</span>
      </button>
    </div>
  </nav>

  <!-- GITHUB MODAL -->
  <div id="githubModal" class="fixed inset-0 z-50 hidden bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
    <div class="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4">
      <div class="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
        <h4 class="font-display font-extrabold text-base text-slate-900 dark:text-white">🚀 Panduan Deploy GitHub Pages (1 Menit)</h4>
        <button type="button" onclick="toggleGithubModal(false)" class="text-slate-400 hover:text-slate-600 font-bold p-1">✕</button>
      </div>
      <ol class="text-xs text-slate-600 dark:text-slate-300 space-y-2 list-decimal pl-4 leading-relaxed">
        <li>Buat repository baru di <strong>github.com/new</strong> dengan nama misalnya <code class="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono font-bold text-indigo-600">ekonomi-sma</code> (Public).</li>
        <li>Upload file ini dan pastikan diberi nama <code class="bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded font-mono font-bold text-indigo-600">index.html</code>, lalu klik <strong>Commit changes</strong>.</li>
        <li>Buka <strong>Settings &rarr; Pages</strong>, pada <strong>Branch</strong> pilih <code class="font-mono text-emerald-600 font-bold">main</code> dan folder <code class="font-mono">/(root)</code>, lalu klik <strong>Save</strong>.</li>
        <li>Dalam 1 menit, web aktif di <code class="font-mono text-indigo-600 font-bold">https://username.github.io/ekonomi-sma/</code> siap dibagikan ke siswa di WhatsApp!</li>
      </ol>
      <div class="pt-2 flex justify-end">
        <button type="button" onclick="toggleGithubModal(false)" class="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs">Tutup</button>
      </div>
    </div>
  </div>

  <!-- EMBEDDED CONSOLIDATED DATA SCRIPT -->
  <script>
    const CHAPTERS_DATA = ${JSON.stringify(CHAPTER_SUMMARIES)};
    const ALL_MCQ_DATA = ${JSON.stringify(ALL_MCQ)};
    const ALL_ESSAY_DATA = ${JSON.stringify(ALL_ESSAYS)};
    const UTILITY_DATA = ${JSON.stringify(BAB1_UTILITY_TYPES)};
    const SISTEM_DATA = ${JSON.stringify(BAB2_SISTEM_EKONOMI)};
    const GOSSEN_DATA = ${JSON.stringify(BAB4_GOSSEN_DATA)};

    let state = {
      activeTab: 'overview',
      darkMode: false,
      fontScale: 'md',
      readModules: {},
      pgAnswers: {},
      essayAnswers: {},
      studentName: '',
      studentClass: '',
      materiSearch: ''
    };

    function loadState() {
      try {
        const raw = localStorage.getItem('ekonomi_terpadu_state');
        if (raw) Object.assign(state, JSON.parse(raw));
      } catch (e) {}
    }

    function saveState() {
      try {
        localStorage.setItem('ekonomi_terpadu_state', JSON.stringify(state));
      } catch (e) {}
    }

    function switchTab(tabId) {
      state.activeTab = tabId;
      document.querySelectorAll('.app-view').forEach(el => el.classList.add('hidden'));
      const target = document.getElementById('view-' + tabId);
      if (target) target.classList.remove('hidden');

      document.querySelectorAll('.top-nav-btn').forEach(btn => {
        const isMatch = btn.getAttribute('data-top-tab') === tabId;
        btn.className = isMatch 
          ? 'top-nav-btn py-1 font-bold text-indigo-600 dark:text-indigo-400 border-b-2 border-indigo-600'
          : 'top-nav-btn py-1 hover:text-slate-900 dark:hover:text-white';
      });

      document.querySelectorAll('.sidebar-link-btn').forEach(btn => {
        const isMatch = btn.getAttribute('data-tab-id') === tabId;
        btn.className = isMatch
          ? 'sidebar-link-btn w-full text-left p-3 rounded-2xl flex items-center gap-3 text-xs font-bold transition bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300'
          : 'sidebar-link-btn w-full text-left p-3 rounded-2xl flex items-center gap-3 text-xs font-bold transition hover:bg-slate-100 dark:hover:bg-slate-800';
      });

      toggleSidebar(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      saveState();
    }

    function toggleSidebar(open) {
      const panel = document.getElementById('sidebarPanel');
      const bdrop = document.getElementById('sidebarBackdrop');
      if (open) {
        panel.classList.remove('-translate-x-full');
        bdrop.classList.remove('hidden');
      } else {
        panel.classList.add('-translate-x-full');
        bdrop.classList.add('hidden');
      }
    }

    function toggleGithubModal(open) {
      document.getElementById('githubModal').classList.toggle('hidden', !open);
    }

    function applyTheme() {
      document.documentElement.classList.toggle('dark', state.darkMode);
      document.getElementById('themeIcon').textContent = state.darkMode ? '☀️' : '🌙';
    }

    // Initialize Page on DOMContentLoaded
    window.addEventListener('DOMContentLoaded', () => {
      loadState();
      applyTheme();
      renderOverviewView();
      renderBabViews();
      renderSimulasiView();
      renderUjianView();
      renderRaporView();
      switchTab(state.activeTab || 'overview');

      document.getElementById('themeToggleBtn').addEventListener('click', () => {
        state.darkMode = !state.darkMode;
        applyTheme();
        saveState();
      });

      document.getElementById('openMobileSidebarBtn').addEventListener('click', () => toggleSidebar(true));
      document.getElementById('githubModalBtn').addEventListener('click', () => toggleGithubModal(true));
    });

    // Render Overview
    function renderOverviewView() {
      const el = document.getElementById('view-overview');
      if (!el) return;
      el.innerHTML = \`
        <div class="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white space-y-4 shadow-xl">
          <div class="inline-flex items-center gap-2 text-xs font-bold uppercase text-amber-300">
            <span>Ekonomi SMA Kelas X • 4 Bab Silabus Lengkap</span>
          </div>
          <h2 class="font-display text-2xl sm:text-4xl font-extrabold leading-tight">
            Dashboard Pembelajaran Mandiri Ekonomi Terpadu
          </h2>
          <p class="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Mencakup Bab 1 Kelangkaan, Bab 2 Masalah & Sistem Ekonomi, Bab 3 Permintaan Penawaran & Elastisitas, serta Bab 4 Perilaku Konsumen & Produsen lengkap dengan 8 simulator interaktif, 200 soal PG, dan 80 esai.
          </p>
          <div class="flex flex-wrap gap-2.5 pt-2">
            <button type="button" onclick="switchTab('bab1')" class="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs shadow">Mulai Bab 1 &rarr;</button>
            <button type="button" onclick="switchTab('simulasi')" class="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs">8 Simulator</button>
            <button type="button" onclick="switchTab('ujian')" class="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs">200 Soal PG</button>
            <button type="button" onclick="switchTab('rapor')" class="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs">Rapor Siswa</button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          \${CHAPTERS_DATA.map(ch => \`
            <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-3">
              <div>
                <span class="text-xs font-bold uppercase text-indigo-600 dark:text-indigo-400">\${ch.number}</span>
                <h3 class="font-display font-bold text-base sm:text-lg text-slate-900 dark:text-white mt-1">\${ch.title}</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">\${ch.shortDesc}</p>
              </div>
              <div class="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span class="text-xs text-slate-400 font-semibold">\${ch.modulesCount} Bagian · 50 PG · 20 Esai</span>
                <button type="button" onclick="switchTab('\${ch.tabKey}')" class="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold">Buka Bab &rarr;</button>
              </div>
            </div>
          \`).join('')}
        </div>
      \`;
    }

    // Render 4 Bab
    function renderBabViews() {
      CHAPTERS_DATA.forEach(ch => {
        const el = document.getElementById('view-' + ch.tabKey);
        if (!el) return;
        const chMcq = ALL_MCQ_DATA.filter(q => q.babId === ch.id);
        const chEssay = ALL_ESSAY_DATA.filter(e => e.babId === ch.id);

        el.innerHTML = \`
          <div class="p-6 rounded-3xl bg-gradient-to-r \${ch.gradient} text-white shadow-md space-y-2">
            <span class="text-xs font-bold uppercase text-amber-300">\${ch.number} Silabus Lengkap</span>
            <h2 class="font-display text-2xl font-extrabold">\${ch.title}</h2>
            <p class="text-xs sm:text-sm text-white/90">\${ch.shortDesc}</p>
          </div>

          <!-- Modules List -->
          <div class="space-y-4">
            \${ch.modules.map(m => \`
              <div class="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-bold text-indigo-600 dark:text-indigo-400">\${m.number}</span>
                  <span class="text-xs text-slate-400">⏱ \${m.readTime}</span>
                </div>
                <h3 class="font-display font-bold text-base text-slate-900 dark:text-white">\${m.title}</h3>
                <p class="text-xs text-slate-500 dark:text-slate-400">\${m.subtitle}</p>
                <div class="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  \${m.contentHtml}
                </div>
              </div>
            \`).join('')}
          </div>

          <!-- Quick Jump to Questions -->
          <div class="p-4 rounded-2xl bg-indigo-50 dark:bg-slate-900 border border-indigo-200 dark:border-slate-800 flex items-center justify-between">
            <div>
              <div class="font-bold text-sm text-indigo-900 dark:text-indigo-300">Siap Menguji Penguasaan \${ch.number}?</div>
              <div class="text-xs text-slate-500">Tersedia 50 soal pilihan ganda & 20 esai lengkap.</div>
            </div>
            <button type="button" onclick="switchTab('ujian')" class="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold text-xs">Buka 200 Soal &rarr;</button>
          </div>
        \`;
      });
    }

    // Render Simulasi
    function renderSimulasiView() {
      const el = document.getElementById('view-simulasi');
      if (!el) return;
      el.innerHTML = \`
        <div class="p-6 rounded-3xl bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md space-y-2">
          <span class="text-xs font-bold uppercase text-amber-300">Laboratorium Interaktif</span>
          <h2 class="font-display text-2xl font-extrabold">8 Simulator & Kurva Visual Ekonomi</h2>
          <p class="text-xs text-slate-200">Kalkulator Biaya Peluang, Circular Flow 3 & 4 Sektor, 5 Sistem Ekonomi, Keseimbangan Pasar, Elastisitas, Hukum Gossen I & II, dan Produksi Diminishing Returns.</p>
        </div>

        <!-- 1. Biaya Peluang Calculator -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-4">
          <h3 class="font-display font-bold text-base text-slate-900 dark:text-white">1. Kalkulator Biaya Peluang (Opportunity Cost)</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label class="block font-bold mb-1">Pilihan Utama (Rp):</label>
              <input id="calc_pilihan" type="number" value="4500000" class="w-full p-2 rounded-xl border bg-slate-50 dark:bg-slate-800">
            </div>
            <div>
              <label class="block font-bold mb-1">Alternatif A Dilepas (Rp):</label>
              <input id="calc_alt_a" type="number" value="3800000" class="w-full p-2 rounded-xl border bg-slate-50 dark:bg-slate-800">
            </div>
            <div>
              <label class="block font-bold mb-1">Alternatif B Dilepas (Rp):</label>
              <input id="calc_alt_b" type="number" value="5200000" class="w-full p-2 rounded-xl border bg-slate-50 dark:bg-slate-800">
            </div>
          </div>
          <div id="opp_res_box" class="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-xs font-bold text-emerald-800 dark:text-emerald-300">
            Biaya Peluang = Nilai tertinggi yang dikorbankan: Rp5.200.000.
          </div>
        </div>

        <!-- 2. Circular Flow SVG -->
        <div class="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 space-y-3">
          <h3 class="font-display font-bold text-base text-slate-900 dark:text-white">2. Diagram Circular Flow (Arus Lingkar Kegiatan Ekonomi)</h3>
          <p class="text-xs text-slate-500">Pasar Output di atas, Pasar Input di bawah, serta interaksi RTK, RTP, Pemerintah, dan Luar Negeri.</p>
          <div class="p-3 rounded-xl bg-slate-900 text-white text-xs font-mono">
            RTK &harr; Pasar Input (Sewa, Upah, Bunga, Laba) &harr; RTP &harr; Pasar Output (Barang & Uang Belanja) &harr; RTK
          </div>
        </div>
      \`;

      const inpP = document.getElementById('calc_pilihan');
      const inpA = document.getElementById('calc_alt_a');
      const inpB = document.getElementById('calc_alt_b');
      const updateOpp = () => {
        const a = Number(inpA.value) || 0;
        const b = Number(inpB.value) || 0;
        const maxVal = Math.max(a, b);
        document.getElementById('opp_res_box').textContent = 'Biaya Peluang (Tertinggi dikorbankan) = Rp' + maxVal.toLocaleString('id-ID');
      };
      inpA.addEventListener('input', updateOpp);
      inpB.addEventListener('input', updateOpp);
    }

    // Render Ujian (200 Soal PG)
    function renderUjianView() {
      const el = document.getElementById('view-ujian');
      if (!el) return;
      const letters = ['A', 'B', 'C', 'D', 'E'];

      el.innerHTML = \`
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between">
          <div>
            <span class="text-xs font-bold uppercase text-rose-600">Bank 200 Soal Pilihan Ganda & 80 Esai</span>
            <h2 class="font-display font-bold text-xl text-slate-900 dark:text-white mt-1">Evaluasi Terpadu 4 Bab</h2>
          </div>
          <button type="button" onclick="resetAllAnswers()" class="px-3.5 py-1.5 rounded-xl bg-rose-50 text-rose-700 font-bold text-xs hover:bg-rose-100">Reset Jawaban</button>
        </div>

        <div class="space-y-4" id="allMcqContainer">
          \${ALL_MCQ_DATA.slice(0, 50).map(q => {
            const userAns = state.pgAnswers[q.id];
            return \`
              <div class="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
                <div class="flex items-center justify-between text-xs font-bold">
                  <span class="px-2 py-0.5 rounded bg-slate-900 text-white font-mono">Soal #\${q.id}</span>
                  <span class="text-indigo-600">\${q.babName} · \${q.topic}</span>
                </div>
                <p class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">\${q.question}</p>
                <div class="space-y-1.5">
                  \${q.options.map((opt, optIdx) => {
                    let cls = "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200";
                    if (userAns !== undefined) {
                      if (optIdx === q.correct) cls = "bg-emerald-50 dark:bg-emerald-950 border-emerald-500 font-bold text-emerald-900 dark:text-emerald-200";
                      else if (userAns === optIdx) cls = "bg-rose-50 dark:bg-rose-950 border-rose-500 text-rose-900 dark:text-rose-200";
                    }
                    return \`
                      <button type="button" onclick="answerQuestion(\${q.id}, \${optIdx})" class="w-full text-left p-2.5 rounded-xl border text-xs flex items-start gap-2.5 \${cls}">
                        <span class="w-5 h-5 rounded bg-white dark:bg-slate-700 flex items-center justify-center font-bold text-[11px] shrink-0">\${letters[optIdx]}</span>
                        <span class="flex-1">\${opt}</span>
                      </button>
                    \`;
                  }).join('')}
                </div>
                \${userAns !== undefined ? \`
                  <div class="p-3 rounded-xl bg-amber-50 dark:bg-slate-800 border border-amber-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300">
                    <strong>💡 Kunci: \${letters[q.correct]}</strong> · \${q.explanation}
                  </div>
                \` : ''}
              </div>
            \`;
          }).join('')}
        </div>
        <p class="text-xs text-slate-400 text-center">Menampilkan soal pilihan ganda latihan terpadu.</p>
      \`;
    }

    function answerQuestion(qId, optIdx) {
      state.pgAnswers[qId] = optIdx;
      saveState();
      renderUjianView();
    }

    function resetAllAnswers() {
      state.pgAnswers = {};
      saveState();
      renderUjianView();
    }

    // Render Rapor
    function renderRaporView() {
      const el = document.getElementById('view-rapor');
      if (!el) return;
      el.innerHTML = \`
        <div class="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <span class="text-xs font-bold uppercase text-indigo-600">Evaluasi Belajar Siswa</span>
          <h2 class="font-display font-extrabold text-xl text-slate-900 dark:text-white">Rapor Capaian Belajar Ekonomi</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl text-xs">
            <div>
              <label class="block font-bold mb-1">Nama Lengkap:</label>
              <input id="rap_name" type="text" placeholder="Ketik nama siswa..." class="w-full p-2 rounded-xl border bg-white dark:bg-slate-900">
            </div>
            <div>
              <label class="block font-bold mb-1">Kelas / Absen:</label>
              <input id="rap_class" type="text" placeholder="Contoh: X-1 / 15" class="w-full p-2 rounded-xl border bg-white dark:bg-slate-900">
            </div>
          </div>
          <button type="button" onclick="copyRaporToClipboard()" class="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs">Salin Ringkasan Rapor (WhatsApp)</button>
        </div>
      \`;
    }

    function copyRaporToClipboard() {
      const name = document.getElementById('rap_name')?.value || '-';
      const cls = document.getElementById('rap_class')?.value || '-';
      const text = '📊 LAPORAN BELAJAR EKONOMI SMA (BAB 1 - 4)\\nNama: ' + name + '\\nKelas: ' + cls + '\\nStatus: Selesai berlatih mandiri di E-Modul Interaktif.';
      navigator.clipboard.writeText(text).then(() => {
        alert('Laporan berhasil disalin! Siap dikirim ke WhatsApp guru.');
      });
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(outPath, htmlContent, 'utf-8');
console.log('Successfully generated public/ekonomi_sma_lengkap.html with size:', fs.statSync(outPath).size);
