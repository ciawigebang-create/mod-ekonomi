import React, { useState } from 'react';
import { BAB1_UTILITY_TYPES, BAB1_FLASHCARDS } from '../data/bab1Data';
import { BAB2_SISTEM_EKONOMI, BAB2_FLASHCARDS } from '../data/bab2Data';
import { BAB4_GOSSEN_DATA } from '../data/bab4Data';
import { Calculator, ArrowRight, RefreshCw, Layers, Check, Sliders, Play, RotateCcw } from 'lucide-react';

export const SimulatorsHub: React.FC = () => {
  const [activeSim, setActiveSim] = useState<
    'opp_cost' | 'flow' | 'sistem' | 'eq_slider' | 'elasticity' | 'gossen' | 'produksi' | 'flashcards'
  >('opp_cost');

  // 1. Biaya Peluang Calculator State
  const [rev, setRev] = useState(4500000);
  const [directCost, setDirectCost] = useState(0);
  const [altA, setAltA] = useState(3800000);
  const [altB, setAltB] = useState(5200000);

  const oppCost = Math.max(altA, altB);
  const accProfit = rev - directCost;
  const ecoProfit = rev - (directCost + oppCost);

  // 2. Circular Flow Mode
  const [flowMode, setFlowMode] = useState<'3sektor' | '4sektor'>('3sektor');

  // 3. Sistem Ekonomi Active
  const [activeSistemId, setActiveSistemId] = useState('tradisional');

  // 4. Equilibrium Price Slider
  const [eqPrice, setEqPrice] = useState(30); // 15 to 45
  const eqQd = 100 - 2 * eqPrice;
  const eqQs = -20 + 2 * eqPrice;

  // 5. Elasticity Gallery Mode
  const [elMode, setElMode] = useState<'demand' | 'supply'>('demand');

  // 6. Gossen I Slider (0..6)
  const [gossenQ, setGossenQ] = useState(5);
  const currentGossen = BAB4_GOSSEN_DATA[gossenQ] || BAB4_GOSSEN_DATA[5];

  // 7. Produksi Simulator
  const [prodL, setProdL] = useState([
    { L: 1, tp: 12 },
    { L: 2, tp: 30 },
    { L: 3, tp: 60 },
    { L: 4, tp: 84 },
    { L: 5, tp: 100 },
    { L: 6, tp: 108 },
    { L: 7, tp: 108 },
    { L: 8, tp: 96 }
  ]);

  // 8. Flashcards State
  const allFlashcards = [...BAB1_FLASHCARDS, ...BAB2_FLASHCARDS];
  const [flippedMap, setFlippedMap] = useState<Record<number, boolean>>({});

  const formatRp = (num: number) => {
    const sign = num < 0 ? '-' : '';
    return sign + 'Rp' + Math.abs(Math.round(num)).toLocaleString('id-ID');
  };

  const simMenuItems = [
    { id: 'opp_cost', label: '1. Biaya Peluang & Laba', tag: 'Bab 1' },
    { id: 'flow', label: '2. Circular Flow 3 & 4 Sektor', tag: 'Bab 2' },
    { id: 'sistem', label: '3. Komparator 5 Sistem Ekonomi', tag: 'Bab 2' },
    { id: 'eq_slider', label: '4. Slider Ekuilibrium & Surplus', tag: 'Bab 3' },
    { id: 'elasticity', label: '5. Galeri 5 Kurva Elastisitas', tag: 'Bab 3' },
    { id: 'gossen', label: '6. Hukum Gossen I (TU & MU)', tag: 'Bab 4' },
    { id: 'produksi', label: '7. Produksi (TP, MP, AP)', tag: 'Bab 4' },
    { id: 'flashcards', label: '8. 32 Kartu Pintar Flashcards', tag: 'Rangkuman' }
  ];

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 rounded-3xl p-6 text-white shadow-lg space-y-2">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
          Laboratorium Interaktif Terpadu
        </span>
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold leading-tight">
          🧮 Laboratorium 8 Simulator & Kurva Visual
        </h2>
        <p className="text-emerald-100 text-xs sm:text-sm max-w-2xl leading-relaxed">
          Uji langsung konsep ekonomi melalui kalkulator numerik dan visualisasi dinamis yang ramah layar sentuh HP.
        </p>

        {/* Tab Selector Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-3 no-scrollbar">
          {simMenuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveSim(item.id as any)}
              className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition cursor-pointer whitespace-nowrap ${
                activeSim === item.id
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* =======================================================
          SIMULATOR 1: KALKULATOR BIAYA PELUANG & LABA EKONOMI
          ======================================================= */}
      {activeSim === 'opp_cost' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">
                Simulasi Bab 1: Biaya Peluang & Laba Ekonomi
              </span>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white mt-1">
                Kalkulator Biaya Peluang (Opportunity Cost)
              </h3>
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => {
                  setRev(4500000);
                  setDirectCost(0);
                  setAltA(3800000);
                  setAltB(5200000);
                }}
                className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold cursor-pointer"
              >
                Skenario 1: Pilih Kerja Admin
              </button>
              <button
                type="button"
                onClick={() => {
                  setRev(25000000);
                  setDirectCost(14000000);
                  setAltA(8000000);
                  setAltB(6000000);
                }}
                className="px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold cursor-pointer"
              >
                Skenario 2: Buka Katering
              </button>
              <button
                type="button"
                onClick={() => {
                  setRev(24000000);
                  setDirectCost(0);
                  setAltA(18000000);
                  setAltB(15000000);
                }}
                className="px-2.5 py-1 rounded-lg bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-300 text-xs font-bold cursor-pointer"
              >
                Skenario 3: Alokasi Lahan Cabai
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Input Form */}
            <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800/70 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                1. Keputusan Pilihan yang Diambil
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Pendapatan Kotor Pilihan Utama (Rp):
                  </label>
                  <input
                    type="number"
                    value={rev}
                    onChange={(e) => setRev(Number(e.target.value))}
                    step="500000"
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-xs sm:text-sm font-bold font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Biaya Langsung (Pengeluaran Kas Riil Rp):
                  </label>
                  <input
                    type="number"
                    value={directCost}
                    onChange={(e) => setDirectCost(Number(e.target.value))}
                    step="500000"
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-xs sm:text-sm font-bold font-mono"
                  />
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                2. Alternatif Lain yang Dikorbankan (Tidak Dipilih)
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Nilai Alternatif A Dikorbankan (Rp):
                  </label>
                  <input
                    type="number"
                    value={altA}
                    onChange={(e) => setAltA(Number(e.target.value))}
                    step="500000"
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-xs sm:text-sm font-bold font-mono"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 mb-1">
                    Nilai Alternatif B Dikorbankan (Rp):
                  </label>
                  <input
                    type="number"
                    value={altB}
                    onChange={(e) => setAltB(Number(e.target.value))}
                    step="500000"
                    className="w-full px-3 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 text-xs sm:text-sm font-bold font-mono"
                  />
                </div>
              </div>

              <p className="text-[11px] text-slate-500 italic">
                💡 Kaidah: Biaya Peluang adalah <strong>SATU nilai tertinggi</strong> dari yang dikorbankan ({formatRp(oppCost)}), bukan hasil penjumlahan keduanya!
              </p>
            </div>

            {/* Output Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-indigo-900 to-slate-950 text-white p-5 rounded-2xl shadow-lg space-y-3">
              <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider">
                Hasil Perhitungan Otomatis:
              </div>
              <div className="p-3 rounded-xl bg-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-200">Biaya Langsung (Eksplisit):</span>
                <span className="font-mono font-bold text-sky-300 text-sm">{formatRp(directCost)}</span>
              </div>
              <div className="p-3 rounded-xl bg-rose-500/20 border border-rose-400/30 flex items-center justify-between text-xs">
                <span className="font-bold text-rose-200">Biaya Peluang (Opportunity Cost):</span>
                <span className="font-mono font-extrabold text-amber-300 text-base">{formatRp(oppCost)}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-200">Laba Akuntansi (Pendapatan − Kas Langsung):</span>
                <span className="font-mono font-bold text-emerald-300 text-sm">{formatRp(accProfit)}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/10 flex items-center justify-between text-xs">
                <span className="text-slate-200">Laba Ekonomi (Pendapatan − Total Biaya):</span>
                <span className="font-mono font-bold text-amber-300 text-sm">{formatRp(ecoProfit)}</span>
              </div>

              <div className={`p-3 rounded-xl text-xs leading-relaxed ${
                ecoProfit >= 0
                  ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-400/30'
                  : 'bg-amber-500/20 text-amber-200 border border-amber-400/30'
              }`}>
                {ecoProfit >= 0 ? (
                  <span>✅ <strong>Keputusan Rasional:</strong> Hasil bersih pilihan ({formatRp(accProfit)}) lebih tinggi dari alternatif yang dilepas ({formatRp(oppCost)}).</span>
                ) : (
                  <span>⚠️ <strong>Catatan Ekonomi:</strong> Secara akuntansi masih untung {formatRp(accProfit)}, namun secara ekonomi selisih {formatRp(ecoProfit)} dibanding peluang terbaik yang dilepas ({formatRp(oppCost)}).</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =======================================================
          SIMULATOR 2: CIRCULAR FLOW 3 & 4 SEKTOR
          ======================================================= */}
      {activeSim === 'flow' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                Simulasi Bab 2: Arus Lingkar Kegiatan Ekonomi
              </span>
              <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white mt-1">
                Visualizer Circular Flow Diagram
              </h3>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setFlowMode('3sektor')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  flowMode === '3sektor'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                Model 3 Sektor (Tertutup)
              </button>
              <button
                type="button"
                onClick={() => setFlowMode('4sektor')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  flowMode === '4sektor'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                Model 4 Sektor (Terbuka)
              </button>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-4">
            <svg viewBox="0 0 640 280" className="w-full h-auto">
              {/* Output Market */}
              <rect x="220" y="15" width="200" height="40" rx="10" fill="#7c3aed" stroke="#ddd6fe" strokeWidth="2" />
              <text x="320" y="35" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">PASAR OUTPUT (BARANG/JASA)</text>
              <text x="320" y="48" textAnchor="middle" fill="#e9d5ff" fontSize="9">Penjualan & Pengeluaran Konsumsi</text>

              {/* RTK */}
              <rect x="25" y="100" width="145" height="70" rx="12" fill="#059669" stroke="#a7f3d0" strokeWidth="2" />
              <text x="97" y="128" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="bold">RTK (KONSUMEN)</text>
              <text x="97" y="145" textAnchor="middle" fill="#d1fae5" fontSize="9.5">Pemilik 4 Faktor Produksi</text>
              <text x="97" y="160" textAnchor="middle" fill="#fde047" fontSize="9">(Tanah, TK, Modal, Skill)</text>

              {/* RTN */}
              <rect x="225" y="100" width="190" height="70" rx="12" fill="#d97706" stroke="#fde68a" strokeWidth="2" />
              <text x="320" y="128" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="bold">RTN (PEMERINTAH)</text>
              <text x="320" y="145" textAnchor="middle" fill="#fef3c7" fontSize="9.5">Pengatur • Konsumen • Produsen</text>
              <text x="320" y="160" textAnchor="middle" fill="#ffffff" fontSize="9">Pajak & Subsidi / Layanan</text>

              {/* RTP */}
              <rect x="470" y="100" width="145" height="70" rx="12" fill="#2563eb" stroke="#bfdbfe" strokeWidth="2" />
              <text x="542" y="128" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="bold">RTP (PRODUSEN)</text>
              <text x="542" y="145" textAnchor="middle" fill="#dbeafe" fontSize="9.5">Pengguna Faktor Input</text>
              <text x="542" y="160" textAnchor="middle" fill="#fde047" fontSize="9">Penjual Barang & Jasa</text>

              {/* Input Market */}
              <rect x="220" y="220" width="200" height="40" rx="10" fill="#db2777" stroke="#fbcfe8" strokeWidth="2" />
              <text x="320" y="240" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">PASAR INPUT (FAKTOR PRODUKSI)</text>
              <text x="320" y="253" textAnchor="middle" fill="#fce7f3" fontSize="9">Sewa, Upah, Bunga, Laba</text>

              {/* Flow Arrows */}
              <path d="M542 100 L542 35 L420 35" stroke="#38bdf8" strokeWidth="2" fill="none" />
              <path d="M220 35 L97 35 L97 100" stroke="#38bdf8" strokeWidth="2" fill="none" />
              <path d="M97 170 L97 240 L220 240" stroke="#34d399" strokeWidth="2" fill="none" />
              <path d="M420 240 L542 240 L542 170" stroke="#fde047" strokeWidth="2" strokeDasharray="4,3" fill="none" />

              <line x1="170" y1="135" x2="225" y2="135" stroke="#fbbf24" strokeWidth="2" />
              <line x1="415" y1="135" x2="470" y2="135" stroke="#fbbf24" strokeWidth="2" />
            </svg>
          </div>
        </div>
      )}

      {/* =======================================================
          SIMULATOR 3: KOMPARATOR 5 SISTEM EKONOMI
          ======================================================= */}
      {activeSim === 'sistem' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="mb-2">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase">
              Simulasi Bab 2: Perbandingan 5 Sistem Ekonomi
            </span>
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white mt-1">
              Eksplorasi Perbandingan Ciri & Pemecahan Masalah
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {BAB2_SISTEM_EKONOMI.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveSistemId(s.id)}
                className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                  activeSistemId === s.id
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
                }`}
              >
                <div className="text-xs font-extrabold">{s.name.split('.')[1]}</div>
                <div className="text-[10px] mt-0.5 opacity-80">{s.badge}</div>
              </button>
            ))}
          </div>

          {(() => {
            const cur = BAB2_SISTEM_EKONOMI.find((s) => s.id === activeSistemId) || BAB2_SISTEM_EKONOMI[0];
            return (
              <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-white text-xs font-extrabold" style={{ backgroundColor: cur.color }}>
                    {cur.name}
                  </span>
                  <span className="font-bold text-slate-500">{cur.badge}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 whitespace-pre-line leading-relaxed">
                    <strong className="text-indigo-700 dark:text-indigo-400 block mb-1">📌 Ciri-Ciri Utama:</strong>
                    {cur.ciri}
                  </div>
                  <div className="bg-white dark:bg-slate-900 p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 whitespace-pre-line leading-relaxed">
                    <strong className="text-amber-700 dark:text-amber-400 block mb-1">🔑 Pemecahan Masalah (What, How, Who, For Whom):</strong>
                    {cur.solusi}
                  </div>
                  <div className="bg-emerald-50 dark:bg-slate-900 p-3.5 rounded-xl border border-emerald-200 dark:border-slate-700 whitespace-pre-line leading-relaxed">
                    <strong className="text-emerald-800 dark:text-emerald-400 block mb-1">✅ Sisi Positif:</strong>
                    {cur.positif}
                  </div>
                  <div className="bg-rose-50 dark:bg-slate-900 p-3.5 rounded-xl border border-rose-200 dark:border-slate-700 whitespace-pre-line leading-relaxed">
                    <strong className="text-rose-800 dark:text-rose-400 block mb-1">⚠️ Sisi Negatif:</strong>
                    {cur.negatif}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* =======================================================
          SIMULATOR 4: SLIDER EKUILIBRIUM SURPLUS (BAB 3)
          ======================================================= */}
      {activeSim === 'eq_slider' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div>
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase">
              Simulasi Bab 3: Keseimbangan Pasar & Surplus
            </span>
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white mt-1">
              Interactive Slider: Surplus Penawaran (Floor) vs Surplus Permintaan (Ceiling)
            </h3>
            <p className="text-xs text-slate-500">
              Geser slider harga (P) untuk melihat perubahan jumlah permintaan dan penawaran serta daerah surplus!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="flex justify-between items-center text-xs font-bold">
                <span>Atur Harga Pasar (P):</span>
                <span className="px-3 py-1 rounded-lg bg-amber-500 text-slate-950 font-mono text-sm">
                  Rp{(eqPrice * 1000).toLocaleString('id-ID')}
                </span>
              </div>
              <input
                type="range"
                min="15"
                max="45"
                step="5"
                value={eqPrice}
                onChange={(e) => setEqPrice(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>Rp15rb (P&lt;Pe)</span>
                <span>Rp30rb (Ekuilibrium)</span>
                <span>Rp45rb (P&gt;Pe)</span>
              </div>

              <div className={`p-4 rounded-xl border text-xs space-y-1 ${
                eqPrice === 30
                  ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 text-emerald-900 dark:text-emerald-200'
                  : eqPrice > 30
                  ? 'bg-sky-50 dark:bg-sky-950/60 border-sky-300 text-sky-900 dark:text-sky-200'
                  : 'bg-rose-50 dark:bg-rose-950/60 border-rose-300 text-rose-900 dark:text-rose-200'
              }`}>
                <div className="font-extrabold uppercase">
                  {eqPrice === 30 
                    ? '✅ Keseimbangan Pasar (Pe = Rp30.000)' 
                    : eqPrice > 30 
                    ? '📦 Surplus Penawaran / Excess Supply (Floor Price)'
                    : '🔥 Surplus Permintaan / Excess Demand (Ceiling Price)'
                  }
                </div>
                <div className="font-mono font-bold">
                  Qd = {eqQd} unit | Qs = {eqQs} unit | Selisih = {Math.abs(eqQs - eqQd)} unit
                </div>
              </div>
            </div>

            {/* SVG Visual */}
            <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
              <svg viewBox="0 0 340 210" className="w-full h-auto">
                <line x1="50" y1="20" x2="50" y2="180" stroke="#475569" strokeWidth="2" />
                <line x1="50" y1="180" x2="310" y2="180" stroke="#475569" strokeWidth="2" />
                <text x="25" y="105" fill="#d97706" fontSize="10" fontWeight="bold">Pe=30</text>

                {/* Demand Line */}
                <line x1="80" y1="35" x2="275" y2="175" stroke="#0284c7" strokeWidth="3" />
                <text x="280" y="175" fill="#0284c7" fontSize="11" fontWeight="bold">D</text>

                {/* Supply Line */}
                <line x1="80" y1="175" x2="275" y2="35" stroke="#059669" strokeWidth="3" />
                <text x="280" y="40" fill="#059669" fontSize="11" fontWeight="bold">S</text>

                {/* Equilibrium point */}
                <circle cx="177.5" cy="105" r="5" fill="#f59e0b" />
                <text x="177.5" y="92" textAnchor="middle" fill="#d97706" fontSize="10" fontWeight="bold">E (40, 30rb)</text>
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* =======================================================
          SIMULATOR 5: HUKUM GOSSEN I (BAB 4)
          ======================================================= */}
      {activeSim === 'gossen' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div>
            <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase">
              Simulasi Bab 4: Teori Kepuasan Konsumen
            </span>
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white mt-1">
              Simulator Dinamis Hukum Gossen I (TU & MU)
            </h3>
            <p className="text-xs text-slate-500">
              Geser jumlah gelas air (Q) untuk melihat hubungan antara Total Utility (TU) dan Marginal Utility (MU).
            </p>
          </div>

          <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 shrink-0">Gelas (Q):</label>
            <input
              type="range"
              min="0"
              max="6"
              value={gossenQ}
              onChange={(e) => setGossenQ(Number(e.target.value))}
              className="w-full accent-indigo-600 cursor-pointer"
            />
            <span className="px-3 py-1 rounded-lg bg-indigo-600 text-white font-mono font-bold text-xs shrink-0">
              Q = {gossenQ} Gelas
            </span>
          </div>

          <div className="p-4 rounded-xl bg-indigo-50 dark:bg-slate-800 border border-indigo-200 dark:border-slate-700 text-xs sm:text-sm">
            <div className="flex items-center gap-3 mb-1">
              <span className="font-extrabold text-indigo-700 dark:text-indigo-300">TU: {currentGossen.tu} Util</span>
              <span className="text-slate-400">·</span>
              <span className={`font-extrabold ${currentGossen.mu < 0 ? 'text-rose-600' : 'text-emerald-600'}`}>
                MU: {currentGossen.mu} Util
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-300">{currentGossen.desc}</p>
          </div>
        </div>
      )}

      {/* =======================================================
          SIMULATOR 6: FLASHCARDS (BAB 1 & BAB 2)
          ======================================================= */}
      {activeSim === 'flashcards' && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">
              Rangkuman Cepat
            </span>
            <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white mt-1">
              32 Kartu Pintar Flashcards Ekonomi (Sentuh Kartu untuk Balik!)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {allFlashcards.map((fc, idx) => {
              const isFlipped = !!flippedMap[idx];
              return (
                <div
                  key={idx}
                  onClick={() => setFlippedMap((prev) => ({ ...prev, [idx]: !prev[idx] }))}
                  className={`p-4 rounded-2xl border transition shadow-xs cursor-pointer min-h-[140px] flex flex-col justify-between ${
                    isFlipped
                      ? 'bg-indigo-600 text-white border-indigo-600'
                      : 'bg-slate-50 dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-indigo-400'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-bold">
                    <span className={isFlipped ? 'text-indigo-200' : 'text-slate-500'}>{fc.category}</span>
                    <span className={isFlipped ? 'text-amber-200' : 'text-indigo-600'}>
                      {isFlipped ? '🔄 Balik' : '👆 Ketuk'}
                    </span>
                  </div>

                  <div className="my-2">
                    {isFlipped ? (
                      <p className="text-xs leading-relaxed font-medium">{fc.def}</p>
                    ) : (
                      <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">{fc.term}</h4>
                    )}
                  </div>

                  <div className="text-[10px] text-slate-400">
                    {isFlipped ? 'Konsep Inti' : 'Ketuk untuk penjelasan'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Fallback for other simulators */}
      {(activeSim === 'elasticity' || activeSim === 'produksi') && (
        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-2">
          <h4 className="font-bold text-base text-slate-800 dark:text-white">
            Simulator Terpasang di Bab Terkait
          </h4>
          <p className="text-xs text-slate-500">
            Anda dapat membuka simulator ini secara spesifik di Bab 3 (Elastisitas) atau Bab 4 (Produksi).
          </p>
        </div>
      )}

    </div>
  );
};
