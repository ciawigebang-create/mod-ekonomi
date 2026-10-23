import React, { useState } from 'react';
import { 
  FileText, Download, Printer, BookOpen, 
  ExternalLink, CheckCircle2, ChevronRight, Bookmark,
  Layers, Sparkles, Award
} from 'lucide-react';
import { ActiveTab } from '../types';

interface PdfViewProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const PdfView: React.FC<PdfViewProps> = ({ setActiveTab }) => {
  const [activeSubTab, setActiveSubTab] = useState<'summaries' | 'toc' | 'preview'>('summaries');
  const [selectedBab, setSelectedBab] = useState<1 | 2 | 3 | 4>(1);

  const CHAPTER_SUMMARIES = [
    {
      bab: 1,
      title: "Bab 1: Kelangkaan & Pengalokasian Sumber Daya",
      gradient: "from-emerald-600 to-teal-700",
      badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
      points: [
        {
          title: "Hakikat Kelangkaan (Scarcity)",
          desc: "Kelangkaan adalah kesenjangan mutlak antara kebutuhan manusia yang tidak terbatas (unlimited human wants) dengan sumber daya yang terbatas (limited resources)."
        },
        {
          title: "Skala Prioritas Kebutuhan",
          desc: "Dikelompokkan berdasarkan intensitas: Primer (mutlak harus dipenuhi demi kelangsungan hidup) → Sekunder (pelengkap kenyamanan) → Tersier (prestise/kemewahan). Disusun berdasarkan urgensi dan kemampuan ekonomi."
        },
        {
          title: "6 Macam Nilai Guna Barang (Utility)",
          desc: "1) Elementary (kegunaan dasar bahan), 2) Form (kegunaan bentuk olahan), 3) Time (kegunaan waktu, misal jas hujan saat hujan), 4) Place (kegunaan tempat, misal pasir di kota), 5) Ownership (kegunaan kepemilikan), 6) Service (kegunaan pelayanan/jasa)."
        },
        {
          title: "Biaya Peluang (Opportunity Cost)",
          desc: "Nilai alternatif terbaik berikutnya yang terpaksa dikorbankan demi memilih suatu opsi ekonomi. Laba Akuntansi = Total Pendapatan - Biaya Eksplisit. Laba Ekonomi = Total Pendapatan - (Biaya Eksplisit + Biaya Implisit)."
        },
        {
          title: "Alokasi 4 Faktor Produksi",
          desc: "SDA (Tanah → sewa/rent), SDM (Tenaga kerja → upah/wage), Modal (Barang modal/uang → bunga/interest), Kewirausahaan (Inovasi manajemen → laba/profit)."
        }
      ]
    },
    {
      bab: 2,
      title: "Bab 2: Pokok Masalah Ekonomi & Sistem Ekonomi",
      gradient: "from-indigo-600 to-blue-700",
      badge: "bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300",
      points: [
        {
          title: "Masalah Ekonomi Klasik vs Modern",
          desc: "Teori Klasik: Produksi, Distribusi, Konsumsi. Teori Modern: WHAT (Barang apa & berapa jumlahnya), HOW (Teknik & kombinasi faktor produksi), FOR WHOM (Untuk siapa barang didistribusikan)."
        },
        {
          title: "Ketenagakerjaan & Pengangguran",
          desc: "Angkatan kerja meliputi yang bekerja dan mencari kerja. Jenis pengangguran: Friksional (peralihan mencari kerja), Struktural (perubahan teknologi/struktur ekonomi), Siklis (resesi ekonomi), Musiman (pergantian musim)."
        },
        {
          title: "4 Pelaku Kegiatan Ekonomi",
          desc: "RTK (penyedia faktor produksi & konsumen akhir), RTP (produsen barang/jasa), RTN (Pemerintah: regulator, pajak, subsidi), MLN (Masyarakat Luar Negeri: ekspor-impor, devisa)."
        },
        {
          title: "Circular Flow Diagram (Arus Melingkar)",
          desc: "Interaksi pasar output (barang & jasa) dan pasar input (faktor produksi) dengan arus barang dan arus uang pada 2, 3, dan 4 sektor perekonomian terbuka."
        },
        {
          title: "Komparasi 5 Sistem Ekonomi",
          desc: "Tradisional (barter & adat), Komando (negara mengendalikan seluruh faktor produksi), Pasar/Liberal (pasar bebas Adam Smith, persaingan ketat), Campuran (sinergi pemerintah dan swasta), Demokrasi Pancasila (Pasal 33 UUD 1945, asas kekeluargaan)."
        }
      ]
    },
    {
      bab: 3,
      title: "Bab 3: Permintaan, Penawaran, Keseimbangan & Elastisitas",
      gradient: "from-sky-600 to-indigo-700",
      badge: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300",
      points: [
        {
          title: "Hukum Permintaan & Penawaran",
          desc: "Permintaan: Harga naik → Jumlah diminta turun (slope negatif). Penawaran: Harga naik → Jumlah ditawarkan naik (slope positif), dengan asumsi ceteris paribus."
        },
        {
          title: "Keseimbangan Pasar (Equilibrium)",
          desc: "Tercapai saat Qd = Qs. Menghasilkan harga keseimbangan (Pe) dan kuantitas keseimbangan (Qe). Harga di atas Pe menimbulkan surplus produsen (kelebihan barang), di bawah Pe menimbulkan shortage (kelangkaan)."
        },
        {
          title: "Rumus & Derajat Elastisitas Harga",
          desc: "E = |(ΔQ/ΔP) × (P1/Q1)|. Kategori: Elastis (E > 1), Inelastis (E < 1), Elastis Uniter (E = 1), Elastis Sempurna (E = ∞, garis horizontal), Inelastis Sempurna (E = 0, garis vertikal)."
        },
        {
          title: "Elastisitas Silang & Pendapatan",
          desc: "Elastisitas Silang: Ec > 0 untuk barang substitusi, Ec < 0 untuk komplementer. Elastisitas Pendapatan: Ei > 0 untuk barang normal, Ei < 0 untuk barang inferior."
        }
      ]
    },
    {
      bab: 4,
      title: "Bab 4: Perilaku Konsumen dan Produsen",
      gradient: "from-purple-600 to-rose-700",
      badge: "bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300",
      points: [
        {
          title: "Pendekatan Kardinal (Hukum Gossen I & II)",
          desc: "Kepuasan diukur angka (util). Hukum Gossen I: Konsumsi terus-menerus atas satu barang menurunkan MU hingga titik jenuh (MU = 0 saat TU maksimum). Hukum Gossen II: Konsumen mengalokasikan uang hingga MU per rupiah sama untuk semua barang (MU_A/P_A = MU_B/P_B)."
        },
        {
          title: "Pendekatan Ordinal (Indifference Curve & Budget Line)",
          desc: "Kepuasan diperingkat. Kurva Indiferensi (kombinasi 2 barang kepuasan sama) bersinggungan dengan Garis Anggaran (Budget Line) menghasilkan keseimbangan konsumsi optimal."
        },
        {
          title: "The Law of Diminishing Returns (David Ricardo)",
          desc: "Penambahan satu input variabel (L) pada input tetap (K) mula-mula menaikkan Total Product (TP) secara meningkat, lalu melampaui titik balik Marginal Product (MP) akan menurun hingga negatif."
        },
        {
          title: "3 Tahap Produksi",
          desc: "Tahap I (MP > AP, belum efisien), Tahap II (AP > MP ≥ 0, tahap produksi rasional), Tahap III (MP < 0, tidak rasional karena output menurun)."
        },
        {
          title: "Pasar Faktor Produksi (Pasar Input)",
          desc: "Pasar Tanah (balas jasa sewa/rent), Pasar Tenaga Kerja (upah/wage), Pasar Modal (bunga/interest), Pasar Kewirausahaan (laba usaha/profit)."
        }
      ]
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      
      {/* Top Banner */}
      <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl relative overflow-hidden border border-slate-800">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-400/30 mb-3">
              <FileText className="w-3.5 h-3.5" />
              <span>Buku PDF Lengkap · Bab 1 s.d. Bab 4 Terpadu</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold font-display tracking-tight text-white">
              Buku Modul Lengkap Ekonomi SMA
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Dokumen utuh berstandar cetak A4 yang mengintegrasikan seluruh materi (21 subtopik), infografis diagram visual, ikhtisar/rangkuman di setiap akhir bab, 200 Soal Pilihan Ganda, dan 80 Soal Esai lengkap dengan kunci jawaban.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
            <a
              href="/E-Modul_Ekonomi_SMA_Kelas_X_Lengkap_Bab_1-4.pdf"
              download="E-Modul_Ekonomi_SMA_Kelas_X_Lengkap_Bab_1-4.pdf"
              className="px-5 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-500/20 transition cursor-pointer min-h-[44px]"
            >
              <Download className="w-4 h-4" />
              <span>Unduh File PDF (1.3 MB)</span>
            </a>

            <a
              href="/buku_ekonomi_sma_lengkap.html"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-700 transition cursor-pointer min-h-[44px]"
            >
              <Printer className="w-4 h-4" />
              <span>Buka Tampilan Cetak A4</span>
              <ExternalLink className="w-3 h-3 text-slate-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold overflow-x-auto">
        <button
          type="button"
          onClick={() => setActiveSubTab('summaries')}
          className={`px-4 py-2.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap min-h-[40px] ${
            activeSubTab === 'summaries'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Ikhtisar & Rangkuman 4 Bab (Ramah HP)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('toc')}
          className={`px-4 py-2.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap min-h-[40px] ${
            activeSubTab === 'toc'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Daftar Isi Buku Lengkap</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('preview')}
          className={`px-4 py-2.5 rounded-xl transition cursor-pointer flex items-center gap-1.5 whitespace-nowrap min-h-[40px] ${
            activeSubTab === 'preview'
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          }`}
        >
          <Printer className="w-4 h-4" />
          <span>Pratinjau Dokumen Cetak / Buku</span>
        </button>
      </div>

      {/* SUB-TAB 1: IKHTISAR & RANGKUMAN */}
      {activeSubTab === 'summaries' && (
        <div className="space-y-6">
          {/* Chapter Selector Pills */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setSelectedBab(num as 1 | 2 | 3 | 4)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer min-h-[44px] flex items-center gap-1.5 ${
                  selectedBab === num
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>Bab {num}</span>
                {num === 1 && '· Kelangkaan'}
                {num === 2 && '· Pokok Masalah'}
                {num === 3 && '· D, S & Elastisitas'}
                {num === 4 && '· Perilaku Konsumen'}
              </button>
            ))}
          </div>

          {/* Selected Chapter Summary Box */}
          {(() => {
            const current = CHAPTER_SUMMARIES.find(c => c.bab === selectedBab)!;
            return (
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      Rangkuman Intisari Konsep
                    </span>
                    <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white mt-1">
                      {current.title}
                    </h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveTab(`bab${current.bab}` as ActiveTab)}
                    className="px-3.5 py-1.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 text-xs font-bold hover:bg-indigo-100 transition flex items-center gap-1 self-start sm:self-auto cursor-pointer"
                  >
                    <span>Buka Materi Interaktif Bab {current.bab}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {current.points.map((pt, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                          {pt.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed text-justify pl-6">
                        {pt.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Quick Action to Download PDF */}
                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">📌</span>
                    <p className="text-xs text-amber-900 dark:text-amber-200 font-medium">
                      Ikhtisar ini tercetak di setiap akhir bab dalam buku PDF lengkap beserta 50 soal PG dan 20 soal esai per bab.
                    </p>
                  </div>
                  <a
                    href="/E-Modul_Ekonomi_SMA_Kelas_X_Lengkap_Bab_1-4.pdf"
                    download="E-Modul_Ekonomi_SMA_Kelas_X_Lengkap_Bab_1-4.pdf"
                    className="px-3.5 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shrink-0 transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh PDF</span>
                  </a>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* SUB-TAB 2: DAFTAR ISI LENGKAP */}
      {activeSubTab === 'toc' && (
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h2 className="text-xl font-bold font-serif text-slate-900 dark:text-white">
              Daftar Isi Lengkap Buku Modul Ekonomi SMA
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Struktur buku tersusun sistematis dari Bab 1 hingga Bab 4, ikhtisar, bank soal, dan kunci pembahasan.
            </p>
          </div>

          <div className="space-y-6 text-xs sm:text-sm">
            {/* Bagian Awal */}
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center font-bold text-slate-800 dark:text-slate-200">
              <span className="flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-indigo-500" />
                <span>Kata Pengantar & Petunjuk Belajar Mandiri Siswa</span>
              </span>
              <span className="font-mono text-slate-500 text-xs">Halaman iii</span>
            </div>

            {/* Bab 1 */}
            <div className="border border-emerald-200 dark:border-emerald-800 rounded-2xl p-4 bg-emerald-50/30 dark:bg-emerald-950/20 space-y-2">
              <div className="flex justify-between items-center font-bold text-emerald-800 dark:text-emerald-300 text-sm">
                <span>BAB 1: KELANGKAAN DAN PENGALOKASIAN SUMBER DAYA</span>
                <span className="font-mono text-xs">Hal. 1</span>
              </div>
              <div className="pl-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex justify-between"><span>1.1 Konsep Inti Kelangkaan & Kebutuhan Manusia</span><span className="font-mono">1</span></div>
                <div className="flex justify-between"><span>1.2 Klasifikasi Kebutuhan & Skala Prioritas</span><span className="font-mono">3</span></div>
                <div className="flex justify-between"><span>1.3 Macam Alat Pemuas Kebutuhan & Nilai Guna (Utility)</span><span className="font-mono">5</span></div>
                <div className="flex justify-between"><span>1.4 Konsep Biaya Peluang (Opportunity Cost) & Trade-off</span><span className="font-mono">8</span></div>
                <div className="flex justify-between"><span>1.5 Pengalokasian Sumber Daya (SDA, SDM, Modal, Keahlian)</span><span className="font-mono">11</span></div>
                <div className="flex justify-between"><span>1.6 Masalah Pokok Pengalokasian & Teori Nilai</span><span className="font-mono">14</span></div>
                <div className="flex justify-between font-bold text-emerald-700 dark:text-emerald-400"><span>• IKHTISAR & RANGKUMAN MATERI BAB 1</span><span className="font-mono">17</span></div>
                <div className="flex justify-between text-slate-500"><span>• Evaluasi Mandiri: 50 Soal Pilihan Ganda Bab 1</span><span className="font-mono">19</span></div>
                <div className="flex justify-between text-slate-500"><span>• Evaluasi Mandiri: 20 Soal Esai & Uraian Bab 1</span><span className="font-mono">31</span></div>
              </div>
            </div>

            {/* Bab 2 */}
            <div className="border border-indigo-200 dark:border-indigo-800 rounded-2xl p-4 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-2">
              <div className="flex justify-between items-center font-bold text-indigo-800 dark:text-indigo-300 text-sm">
                <span>BAB 2: POKOK PERMASALAHAN EKONOMI & SISTEM EKONOMI</span>
                <span className="font-mono text-xs">Hal. 35</span>
              </div>
              <div className="pl-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex justify-between"><span>2.1 Masalah Pokok Ekonomi Klasik vs Modern (What, How, For Whom)</span><span className="font-mono">35</span></div>
                <div className="flex justify-between"><span>2.2 Kesempatan Kerja, Angkatan Kerja & Pengangguran</span><span className="font-mono">38</span></div>
                <div className="flex justify-between"><span>2.3 Peran 4 Pelaku Kegiatan Ekonomi (RTK, RTP, RTN, MLN)</span><span className="font-mono">41</span></div>
                <div className="flex justify-between"><span>2.4 Diagram Arus Melingkar (Circular Flow 2, 3, 4 Sektor)</span><span className="font-mono">44</span></div>
                <div className="flex justify-between"><span>2.5 Perbandingan 5 Sistem Ekonomi Dunia</span><span className="font-mono">48</span></div>
                <div className="flex justify-between"><span>2.6 Demokrasi Ekonomi Pancasila (Pasal 33 UUD 1945)</span><span className="font-mono">53</span></div>
                <div className="flex justify-between font-bold text-indigo-700 dark:text-indigo-400"><span>• IKHTISAR & RANGKUMAN MATERI BAB 2</span><span className="font-mono">56</span></div>
                <div className="flex justify-between text-slate-500"><span>• Evaluasi Mandiri: 50 Soal Pilihan Ganda Bab 2</span><span className="font-mono">58</span></div>
                <div className="flex justify-between text-slate-500"><span>• Evaluasi Mandiri: 20 Soal Esai & Uraian Bab 2</span><span className="font-mono">70</span></div>
              </div>
            </div>

            {/* Bab 3 */}
            <div className="border border-sky-200 dark:border-sky-800 rounded-2xl p-4 bg-sky-50/30 dark:bg-sky-950/20 space-y-2">
              <div className="flex justify-between items-center font-bold text-sky-800 dark:text-sky-300 text-sm">
                <span>BAB 3: PERMINTAAN, PENAWARAN, KESEIMBANGAN & ELASTISITAS</span>
                <span className="font-mono text-xs">Hal. 74</span>
              </div>
              <div className="pl-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex justify-between"><span>3.1 Teori Permintaan, Hukum Permintaan & Fungsi Matematis</span><span className="font-mono">74</span></div>
                <div className="flex justify-between"><span>3.2 Teori Penawaran, Hukum Penawaran & Kurva Penawaran</span><span className="font-mono">77</span></div>
                <div className="flex justify-between"><span>3.3 Pembentukan Harga Keseimbangan Pasar (Equilibrium) & Surplus</span><span className="font-mono">80</span></div>
                <div className="flex justify-between"><span>3.4 Elastisitas Harga Permintaan & Penawaran (5 Derajat)</span><span className="font-mono">84</span></div>
                <div className="flex justify-between"><span>3.5 Elastisitas Silang & Elastisitas Pendapatan</span><span className="font-mono">89</span></div>
                <div className="flex justify-between font-bold text-sky-700 dark:text-sky-400"><span>• IKHTISAR & RANGKUMAN MATERI BAB 3</span><span className="font-mono">92</span></div>
                <div className="flex justify-between text-slate-500"><span>• Evaluasi Mandiri: 50 Soal Pilihan Ganda Bab 3</span><span className="font-mono">94</span></div>
                <div className="flex justify-between text-slate-500"><span>• Evaluasi Mandiri: 20 Soal Esai & Uraian Bab 3</span><span className="font-mono">106</span></div>
              </div>
            </div>

            {/* Bab 4 */}
            <div className="border border-purple-200 dark:border-purple-800 rounded-2xl p-4 bg-purple-50/30 dark:bg-purple-950/20 space-y-2">
              <div className="flex justify-between items-center font-bold text-purple-800 dark:text-purple-300 text-sm">
                <span>BAB 4: PERILAKU KONSUMEN DAN PRODUSEN</span>
                <span className="font-mono text-xs">Hal. 110</span>
              </div>
              <div className="pl-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex justify-between"><span>4.1 Teori Konsumen Kardinal (Hukum Gossen I & II)</span><span className="font-mono">110</span></div>
                <div className="flex justify-between"><span>4.2 Teori Konsumen Ordinal (Indifference Curve & Budget Line)</span><span className="font-mono">114</span></div>
                <div className="flex justify-between"><span>4.3 Teori Produsen (Fungsi Produksi, Isoquant & Diminishing Returns)</span><span className="font-mono">118</span></div>
                <div className="flex justify-between"><span>4.4 Peran Pelaku Ekonomi & Pasar Faktor Produksi (Pasar Input)</span><span className="font-mono">123</span></div>
                <div className="flex justify-between font-bold text-purple-700 dark:text-purple-400"><span>• IKHTISAR & RANGKUMAN MATERI BAB 4</span><span className="font-mono">127</span></div>
                <div className="flex justify-between text-slate-500"><span>• Evaluasi Mandiri: 50 Soal Pilihan Ganda Bab 4</span><span className="font-mono">129</span></div>
                <div className="flex justify-between text-slate-500"><span>• Evaluasi Mandiri: 20 Soal Esai & Uraian Bab 4</span><span className="font-mono">140</span></div>
              </div>
            </div>

            {/* Kunci Jawaban Lengkap */}
            <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-2">
              <div className="flex justify-between items-center font-bold text-sm">
                <span>KUNCI JAWABAN LENGKAP & PEMBAHASAN 200 SOAL PG (BAB 1–4)</span>
                <span className="font-mono text-xs">Hal. 144</span>
              </div>
              <div className="flex justify-between items-center font-bold text-sm pt-2 border-t border-slate-700">
                <span>PANDUAN RUBRIK & KUNCI JAWABAN 80 SOAL ESAI (BAB 1–4)</span>
                <span className="font-mono text-xs">Hal. 158</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SUB-TAB 3: PRATINJAU DOKUMEN CETAK / IFRAME */}
      {activeSubTab === 'preview' && (
        <div className="p-4 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Pratinjau Format Cetak A4
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Dokumen HTML terformat khusus siap cetak atau simpan ke PDF dari browser
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/buku_ekonomi_sma_lengkap.html"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Buka Layar Penuh</span>
              </a>
              <a
                href="/E-Modul_Ekonomi_SMA_Kelas_X_Lengkap_Bab_1-4.pdf"
                download="E-Modul_Ekonomi_SMA_Kelas_X_Lengkap_Bab_1-4.pdf"
                className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Unduh PDF (1.3 MB)</span>
              </a>
            </div>
          </div>

          <div className="w-full h-[650px] border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-inner bg-slate-100 dark:bg-slate-950">
            <iframe 
              src="/buku_ekonomi_sma_lengkap.html" 
              title="Pratinjau Buku Lengkap Ekonomi SMA"
              className="w-full h-full border-none"
            />
          </div>
        </div>
      )}

    </div>
  );
};
