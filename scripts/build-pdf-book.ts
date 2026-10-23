/**
 * Script untuk mengompilasi seluruh materi E-Modul Ekonomi SMA (Bab 1 s.d. Bab 4)
 * Menjadi satu dokumen Buku Lengkap (HTML & PDF)
 * Disertai Cover Resmi, Daftar Isi Hierarkis, Seluruh Materi & Diagram Visual,
 * Ikhtisar/Rangkuman di Setiap Akhir Bab, 200 Soal PG + 80 Soal Esai, serta Kunci Jawaban Lengkap.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  BAB1_MODULES, BAB1_UTILITY_TYPES, BAB1_MCQ, BAB1_ESSAYS,
  BAB2_MODULES, BAB2_SISTEM_EKONOMI, BAB2_MCQ, BAB2_ESSAYS,
  BAB3_MODULES, BAB3_MCQ, BAB3_ESSAYS,
  BAB4_MODULES, BAB4_GOSSEN_DATA, BAB4_MCQ, BAB4_ESSAYS,
  CHAPTER_SUMMARIES, ALL_MCQ, ALL_ESSAYS
} from '../src/data/allData.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

// Helper escape HTML
function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Format markdown bold & code in content
function formatContent(text: string): string {
  if (!text) return '';
  let formatted = escapeHtml(text);
  // Replace **bold**
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Replace *italic*
  formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
  // Replace newlines with <br/> or paragraph breaks
  formatted = formatted.replace(/\n\n/g, '</p><p class="mt-2 text-justify">');
  formatted = formatted.replace(/\n/g, '<br/>');
  return `<p class="text-justify">${formatted}</p>`;
}

// Generate SVG diagrams
const SVG_DIAGRAMS = {
  ppcCurve: `
    <svg viewBox="0 0 500 320" class="w-full max-w-lg mx-auto my-4 bg-slate-50 border border-slate-200 rounded-lg p-2">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
        </marker>
      </defs>
      <text x="250" y="24" text-anchor="middle" font-weight="bold" font-size="14" fill="#0f172a">Batas Kemungkinan Produksi (Production Possibility Curve / PPC)</text>
      <!-- Sumbu X & Y -->
      <line x1="60" y1="270" x2="460" y2="270" stroke="#475569" stroke-width="2" marker-end="url(#arrow)" />
      <line x1="60" y1="270" x2="60" y2="40" stroke="#475569" stroke-width="2" marker-end="url(#arrow)" />
      <text x="460" y="295" font-size="12" fill="#334155" text-anchor="end" font-weight="600">Barang Konsumsi (X)</text>
      <text x="45" y="45" font-size="12" fill="#334155" text-anchor="end" font-weight="600" transform="rotate(-90 45,45)">Barang Modal (Y)</text>
      
      <!-- Kurva Cekung PPC -->
      <path d="M 60 70 Q 260 90 420 270" fill="none" stroke="#2563eb" stroke-width="3.5" />
      
      <!-- Titik Efisien A, B -->
      <circle cx="160" cy="115" r="5" fill="#16a34a" />
      <text x="175" y="115" font-size="11" font-weight="bold" fill="#16a34a">A (Efisien Maksimal)</text>
      
      <circle cx="320" cy="195" r="5" fill="#16a34a" />
      <text x="335" y="195" font-size="11" font-weight="bold" fill="#16a34a">B (Efisien / Trade-off)</text>
      
      <!-- Titik Inefisien C -->
      <circle cx="180" cy="220" r="5" fill="#dc2626" />
      <text x="195" y="225" font-size="11" font-weight="bold" fill="#dc2626">C (Inefisien / Ada Pengangguran)</text>
      
      <!-- Titik Mustahil D -->
      <circle cx="380" cy="110" r="5" fill="#9333ea" />
      <text x="395" y="115" font-size="11" font-weight="bold" fill="#9333ea">D (Kelangkaan / Belum Tercapai)</text>
    </svg>
  `,
  circularFlow: `
    <svg viewBox="0 0 650 380" class="w-full max-w-xl mx-auto my-4 bg-slate-50 border border-slate-200 rounded-lg p-3">
      <text x="325" y="24" text-anchor="middle" font-weight="bold" font-size="15" fill="#0f172a">Diagram Arus Melingkar 4 Sektor (Circular Flow Diagram)</text>
      
      <!-- Box RTK -->
      <rect x="40" y="140" width="120" height="90" rx="8" fill="#e0e7ff" stroke="#4f46e5" stroke-width="2" />
      <text x="100" y="175" text-anchor="middle" font-weight="bold" font-size="13" fill="#312e81">RTK</text>
      <text x="100" y="195" text-anchor="middle" font-size="10" fill="#4338ca">Rumah Tangga Konsumen</text>
      <text x="100" y="210" text-anchor="middle" font-size="9" fill="#6366f1">Pemilik Faktor Produksi</text>

      <!-- Box RTP -->
      <rect x="490" y="140" width="120" height="90" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
      <text x="550" y="175" text-anchor="middle" font-weight="bold" font-size="13" fill="#78350f">RTP</text>
      <text x="550" y="195" text-anchor="middle" font-size="10" fill="#92400e">Rumah Tangga Produsen</text>
      <text x="550" y="210" text-anchor="middle" font-size="9" fill="#b45309">Penghasil Barang & Jasa</text>

      <!-- Box Pemerintah (RTN) -->
      <rect x="260" y="140" width="130" height="90" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2" />
      <text x="325" y="175" text-anchor="middle" font-weight="bold" font-size="13" fill="#14532d">RTN (Pemerintah)</text>
      <text x="325" y="195" text-anchor="middle" font-size="10" fill="#166534">Regulator & Pajak</text>
      <text x="325" y="210" text-anchor="middle" font-size="9" fill="#15803d">Subsidi & Fasilitas Publik</text>

      <!-- Box Pasar Output (Atas) -->
      <rect x="235" y="45" width="180" height="45" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" />
      <text x="325" y="66" text-anchor="middle" font-weight="bold" font-size="11" fill="#1e293b">PASAR OUTPUT (BARANG & JASA)</text>
      <text x="325" y="80" text-anchor="middle" font-size="9" fill="#475569">Belanja Konsumen &larr;&rarr; Penjualan Produk</text>

      <!-- Box Pasar Input (Bawah) -->
      <rect x="235" y="280" width="180" height="45" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="1.5" />
      <text x="325" y="301" text-anchor="middle" font-weight="bold" font-size="11" fill="#1e293b">PASAR INPUT (FAKTOR PRODUKSI)</text>
      <text x="325" y="315" text-anchor="middle" font-size="9" fill="#475569">Tanah, Tenaga Kerja, Modal, Skill</text>

      <!-- Box Masyarakat Luar Negeri (MLN) -->
      <rect x="245" y="340" width="160" height="32" rx="6" fill="#fae8ff" stroke="#a855f7" stroke-width="1.5" />
      <text x="325" y="360" text-anchor="middle" font-weight="bold" font-size="10" fill="#581c87">MLN (Ekspor / Impor / Devisa)</text>

      <!-- Lines & Arrows -->
      <path d="M 100 140 L 100 68 L 235 68" fill="none" stroke="#4f46e5" stroke-width="1.8" stroke-dasharray="4,2" />
      <path d="M 415 68 L 550 68 L 550 140" fill="none" stroke="#d97706" stroke-width="1.8" />
      
      <path d="M 100 230 L 100 302 L 235 302" fill="none" stroke="#4f46e5" stroke-width="1.8" />
      <path d="M 415 302 L 550 302 L 550 230" fill="none" stroke="#d97706" stroke-width="1.8" stroke-dasharray="4,2" />

      <!-- Pajak & Subsidi RTK & RTP ke RTN -->
      <line x1="160" y1="170" x2="260" y2="170" stroke="#059669" stroke-width="1.5" />
      <line x1="490" y1="170" x2="390" y2="170" stroke="#059669" stroke-width="1.5" />
      <text x="210" y="165" text-anchor="middle" font-size="9" fill="#047857">Pajak / Subsidi</text>
      <text x="440" y="165" text-anchor="middle" font-size="9" fill="#047857">Pajak / Subsidi</text>
    </svg>
  `,
  equilibrium: `
    <svg viewBox="0 0 500 320" class="w-full max-w-lg mx-auto my-4 bg-slate-50 border border-slate-200 rounded-lg p-2">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
        </marker>
      </defs>
      <text x="250" y="24" text-anchor="middle" font-weight="bold" font-size="14" fill="#0f172a">Keseimbangan Pasar (Market Equilibrium Qd = Qs)</text>
      <line x1="60" y1="270" x2="460" y2="270" stroke="#475569" stroke-width="2" marker-end="url(#arrow)" />
      <line x1="60" y1="270" x2="60" y2="40" stroke="#475569" stroke-width="2" marker-end="url(#arrow)" />
      <text x="460" y="295" font-size="12" fill="#334155" text-anchor="end" font-weight="600">Kuantitas (Q)</text>
      <text x="45" y="45" font-size="12" fill="#334155" text-anchor="end" font-weight="600" transform="rotate(-90 45,45)">Harga (P)</text>

      <!-- Kurva Permintaan D (Slope Negatif) -->
      <line x1="90" y1="70" x2="420" y2="250" stroke="#2563eb" stroke-width="3" />
      <text x="425" y="255" font-weight="bold" font-size="13" fill="#2563eb">D (Permintaan)</text>

      <!-- Kurva Penawaran S (Slope Positif) -->
      <line x1="90" y1="250" x2="420" y2="70" stroke="#ea580c" stroke-width="3" />
      <text x="425" y="75" font-weight="bold" font-size="13" fill="#ea580c">S (Penawaran)</text>

      <!-- Titik Ekuilibrium E(Qe, Pe) -->
      <line x1="60" y1="160" x2="255" y2="160" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3" />
      <line x1="255" y1="160" x2="255" y2="270" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3" />
      <circle cx="255" cy="160" r="6" fill="#16a34a" />
      <text x="268" y="155" font-weight="bold" font-size="13" fill="#16a34a">E (Pe, Qe)</text>
      <text x="45" y="165" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="end">Pe</text>
      <text x="255" y="287" font-size="11" font-weight="bold" fill="#0f172a" text-anchor="middle">Qe</text>

      <!-- Surplus Daerah -->
      <polygon points="120,87 255,160 120,160" fill="#93c5fd" opacity="0.35" />
      <text x="150" y="140" font-size="10" font-weight="bold" fill="#1d4ed8">Surplus Konsumen</text>

      <polygon points="120,233 255,160 120,160" fill="#fed7aa" opacity="0.45" />
      <text x="150" y="185" font-size="10" font-weight="bold" fill="#c2410c">Surplus Produsen</text>
    </svg>
  `,
  gossenCurve: `
    <svg viewBox="0 0 500 320" class="w-full max-w-lg mx-auto my-4 bg-slate-50 border border-slate-200 rounded-lg p-2">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
        </marker>
      </defs>
      <text x="250" y="24" text-anchor="middle" font-weight="bold" font-size="14" fill="#0f172a">Hukum Gossen I: Total Utility (TU) & Marginal Utility (MU)</text>
      <line x1="60" y1="240" x2="460" y2="240" stroke="#475569" stroke-width="2" marker-end="url(#arrow)" />
      <line x1="60" y1="270" x2="60" y2="40" stroke="#475569" stroke-width="2" marker-end="url(#arrow)" />
      <text x="460" y="260" font-size="12" fill="#334155" text-anchor="end" font-weight="600">Jumlah Barang (Q)</text>
      <text x="45" y="45" font-size="12" fill="#334155" text-anchor="end" font-weight="600" transform="rotate(-90 45,45)">Utilitas (TU / MU)</text>

      <!-- Kurva TU (Parabola Naik lalu Puncak lalu Turun) -->
      <path d="M 60 240 Q 250 40 420 180" fill="none" stroke="#2563eb" stroke-width="3" />
      <text x="260" y="65" font-weight="bold" font-size="12" fill="#2563eb">TU Maksimum (Titik Jenuh / Satiation)</text>
      <circle cx="250" cy="80" r="5" fill="#2563eb" />

      <!-- Garis Vertikal Titik Jenuh -->
      <line x1="250" y1="80" x2="250" y2="240" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4,3" />

      <!-- Kurva MU (Menurun dari Atas lalu Menembus Sumbu X Menjadi Negatif) -->
      <path d="M 60 70 L 420 270" fill="none" stroke="#dc2626" stroke-width="2.8" />
      <text x="405" y="295" font-weight="bold" font-size="12" fill="#dc2626">Kurva MU (MU &lt; 0)</text>
      <circle cx="250" cy="240" r="6" fill="#dc2626" />
      <text x="260" y="232" font-size="11" font-weight="bold" fill="#dc2626">MU = 0 saat TU Maks</text>
    </svg>
  `,
  productionCurve: `
    <svg viewBox="0 0 500 320" class="w-full max-w-lg mx-auto my-4 bg-slate-50 border border-slate-200 rounded-lg p-2">
      <defs>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#475569" />
        </marker>
      </defs>
      <text x="250" y="24" text-anchor="middle" font-weight="bold" font-size="14" fill="#0f172a">Tahapan Produksi & The Law of Diminishing Returns (TP, AP, MP)</text>
      <line x1="60" y1="240" x2="460" y2="240" stroke="#475569" stroke-width="2" marker-end="url(#arrow)" />
      <line x1="60" y1="270" x2="60" y2="40" stroke="#475569" stroke-width="2" marker-end="url(#arrow)" />
      <text x="460" y="260" font-size="12" fill="#334155" text-anchor="end" font-weight="600">Tenaga Kerja (L)</text>
      <text x="45" y="45" font-size="12" fill="#334155" text-anchor="end" font-weight="600" transform="rotate(-90 45,45)">Output Produksi</text>

      <!-- Tahap I, II, III batas -->
      <line x1="180" y1="45" x2="180" y2="240" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" />
      <line x1="320" y1="45" x2="320" y2="240" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="3,3" />
      <text x="120" y="55" font-size="11" font-weight="bold" fill="#059669">Tahap I (Increasing)</text>
      <text x="250" y="55" font-size="11" font-weight="bold" fill="#2563eb">Tahap II (Rasional)</text>
      <text x="385" y="55" font-size="11" font-weight="bold" fill="#dc2626">Tahap III (Negative)</text>

      <!-- Kurva TP -->
      <path d="M 60 240 Q 180 140 250 90 T 320 80 Q 370 85 430 140" fill="none" stroke="#2563eb" stroke-width="3" />
      <text x="330" y="75" font-size="11" font-weight="bold" fill="#2563eb">TP Maks</text>

      <!-- Kurva AP -->
      <path d="M 60 240 Q 180 150 250 170 Q 320 190 420 220" fill="none" stroke="#059669" stroke-width="2.5" />
      <text x="425" y="220" font-size="11" font-weight="bold" fill="#059669">AP</text>

      <!-- Kurva MP -->
      <path d="M 60 240 Q 140 100 180 150 Q 250 190 320 240 Q 360 265 420 275" fill="none" stroke="#dc2626" stroke-width="2.5" />
      <text x="425" y="280" font-size="11" font-weight="bold" fill="#dc2626">MP</text>
    </svg>
  `
};

// Comprehensive Ikhtisar / Rangkuman per Chapter
const CHAPTER_SUMMARIES_DETAILED = {
  bab1: {
    title: "IKHTISAR & RANGKUMAN MATERI BAB 1",
    subtitle: "Kelangkaan dan Pengalokasian Sumber Daya",
    points: [
      {
        topic: "Hakikat Kelangkaan (Scarcity)",
        detail: "Kelangkaan adalah kesenjangan mutlak antara kebutuhan manusia yang sifatnya tidak terbatas (unlimited human wants) dengan sumber daya atau alat pemuas kebutuhan yang jumlahnya terbatas (limited resources). Kelangkaan menuntut setiap pelaku ekonomi untuk bersikap rasional dan membuat pilihan terbaik (trade-off)."
      },
      {
        topic: "Klasifikasi Kebutuhan & Skala Prioritas",
        detail: "Kebutuhan manusia dibedakan berdasarkan: (1) Intensitas (Primer, Sekunder, Tersier), (2) Waktu pemenuhan (Sekarang dan Masa Depan), (3) Sifat (Jasmani dan Rohani), dan (4) Subjek (Individu dan Kelompok/Sosial). Skala prioritas disusun dengan mendahulukan kebutuhan primer yang mendesak sebelum memenuhi kebutuhan lainnya."
      },
      {
        topic: "Nilai Guna Barang (Utility)",
        detail: "Nilai guna suatu barang dapat bertambah melalui 6 bentuk kegunaan: (1) Elementary Utility (kegunaan dasar bahan), (2) Form Utility (kegunaan bentuk setelah diolah), (3) Time Utility (kegunaan karena faktor waktu), (4) Place Utility (kegunaan tempat saat dipindahkan), (5) Ownership Utility (kegunaan kepemilikan setelah dibeli), dan (6) Service Utility (kegunaan pelayanan)."
      },
      {
        topic: "Biaya Peluang (Opportunity Cost)",
        detail: "Biaya peluang adalah nilai kesempatan dari alternatif terbaik berikutnya yang terpaksa dikorbankan demi memilih suatu opsi ekonomi. Rumus: Laba Akuntansi = Total Pendapatan - Biaya Eksplisit. Laba Ekonomi = Total Pendapatan - (Biaya Eksplisit + Biaya Implisit / Biaya Peluang)."
      },
      {
        topic: "Alokasi 4 Faktor Produksi",
        detail: "Sumber daya dialokasikan mencakup: (1) SDA (Tanah, air, tambang - menghasilkan sewa/rent), (2) SDM (Tenaga kerja terdidik, terlatih, tidak terdidik - menghasilkan upah/wage), (3) Modal (Uang, mesin, gedung - menghasilkan bunga modal/interest), dan (4) Kewirausahaan (Skill manajemen inovatif - menghasilkan laba/profit)."
      }
    ]
  },
  bab2: {
    title: "IKHTISAR & RANGKUMAN MATERI BAB 2",
    subtitle: "Pokok Permasalahan Ekonomi & Sistem Ekonomi",
    points: [
      {
        topic: "Masalah Ekonomi Klasik vs Modern",
        detail: "Teori Klasik membagi masalah ekonomi menjadi: Produksi, Distribusi, dan Konsumsi. Teori Modern menyederhanakannya menjadi 3 pertanyaan mendasar: WHAT (Barang apa yang diproduksi dan berapa jumlahnya), HOW (Bagaimana teknik, teknologi, dan kombinasi faktor produksi yang efisien), dan FOR WHOM (Untuk siapa barang diproduksi dan bagaimana distribusinya secara adil)."
      },
      {
        topic: "Ketenagakerjaan & Pengangguran",
        detail: "Penduduk usia kerja terbagi menjadi Angkatan Kerja (bekerja dan mencari kerja) dan Bukan Angkatan Kerja (sekolah, mengurus rumah tangga). Jenis pengangguran meliputi Friksional (peralihan mencari pekerjaan lebih baik), Struktural (perubahan struktur ekonomi/teknologi), Siklis (akibat resesi ekonomi), dan Musiman (akibat pergantian musim)."
      },
      {
        topic: "4 Pelaku Kegiatan Ekonomi",
        detail: "Perekonomian digerakkan oleh 4 pelaku: (1) RTK: Penyedia faktor produksi dan konsumen akhir produk, (2) RTP: Pengguna faktor produksi dan produsen barang/jasa, (3) RTN (Pemerintah): Pembuat regulasi, pemungut pajak, pemberi subsidi, dan penyedia fasilitas publik, (4) MLN: Penggerak perdagangan internasional (ekspor, impor, valuta asing)."
      },
      {
        topic: "Circular Flow Diagram (Arus Melingkar)",
        detail: "Menggambarkan perputaran arus barang/jasa dan arus uang. Pada perekonomian 2 sektor hanya melibatkan RTK dan RTP. Pada 3 sektor bertambah Pemerintah (arus pajak dan belanja publik). Pada 4 sektor (perekonomian terbuka) bertambah Masyarakat Luar Negeri melalui arus ekspor dan impor."
      },
      {
        topic: "Perbandingan 5 Sistem Ekonomi",
        detail: "(1) Tradisional: Bersandar pada adat istiadat dan barter. (2) Komando/Terpusat: Negara mengendalikan seluruh faktor produksi, inisiatif swasta mati. (3) Pasar/Liberal: Swasta bebas memiliki aset, harga ditentukan pasar bebas (Adam Smith). (4) Campuran: Sinergi pemerintah dan swasta untuk mencegah monopoli. (5) Demokrasi Ekonomi Pancasila: Didasarkan pada Pasal 33 UUD 1945 berasas kekeluargaan dan kemakmuran bersama."
      }
    ]
  },
  bab3: {
    title: "IKHTISAR & RANGKUMAN MATERI BAB 3",
    subtitle: "Permintaan, Penawaran, Keseimbangan Pasar & Elastisitas",
    points: [
      {
        topic: "Hukum Permintaan & Fungsi Permintaan",
        detail: "Hukum Permintaan menyatakan bahwa jika harga suatu barang naik, maka jumlah barang yang diminta akan turun, dan sebaliknya (ceteris paribus). Kurva permintaan berlereng (slope) negatif dari kiri atas ke kanan bawah. Rumus fungsi 2 titik: (P - P1) / (P2 - P1) = (Q - Q1) / (Q2 - Q1)."
      },
      {
        topic: "Hukum Penawaran & Kurva Penawaran",
        detail: "Hukum Penawaran menyatakan bahwa jika harga suatu barang naik, maka jumlah barang yang ditawarkan oleh produsen akan meningkat, dan sebaliknya (ceteris paribus). Kurva penawaran berlereng positif dari kiri bawah ke kanan atas mencerminkan motif keuntungan produsen."
      },
      {
        topic: "Keseimbangan Pasar (Equilibrium)",
        detail: "Keseimbangan pasar tercapai saat jumlah barang yang diminta sama dengan jumlah barang yang ditawarkan (Qd = Qs) pada tingkat harga tertentu (Pe, Qe). Harga di atas Pe menciptakan kelebihan penawaran (surplus barang), sedangkan harga di bawah Pe menciptakan kelebihan permintaan (shortage / kelangkaan barang)."
      },
      {
        topic: "Elastisitas Harga Permintaan & Penawaran",
        detail: "Mengukur derajat kepekaan perubahan kuantitas akibat perubahan harga. Rumus: E = |(ΔQ / ΔP) × (P1 / Q1)|. Kategori: (1) Elastis (E > 1), (2) Inelastis (E < 1), (3) Elastis Uniter (E = 1), (4) Elastis Sempurna (E = ∞, garis horizontal), dan (5) Inelastis Sempurna (E = 0, garis vertikal)."
      },
      {
        topic: "Elastisitas Silang & Pendapatan",
        detail: "Elastisitas Silang (Ec): Mengukur respon barang X terhadap harga barang Y. Jika Ec > 0 barang substitusi (saling menggantikan), jika Ec < 0 barang komplementer (saling melengkapi). Elastisitas Pendapatan (Ei): Mengukur respon kuantitas terhadap pendapatan. Ei > 0 barang normal/mewah, Ei < 0 barang inferior."
      }
    ]
  },
  bab4: {
    title: "IKHTISAR & RANGKUMAN MATERI BAB 4",
    subtitle: "Perilaku Konsumen dan Produsen",
    points: [
      {
        topic: "Teori Kepuasan Konsumen: Pendekatan Kardinal",
        detail: "Mengasumsikan kepuasan dapat diukur dengan angka (util). Hukum Gossen I (The Law of Diminishing Marginal Utility): Konsumsi satu jenis barang secara terus menerus akan menghasilkan kepuasan marginal (MU) yang semakin berkurang hingga mencapai titik jenuh (MU = 0). Hukum Gossen II: Konsumen membagi pendapatannya hingga MU per harga sama untuk semua jenis barang (MU_A/P_A = MU_B/P_B)."
      },
      {
        topic: "Teori Kepuasan Konsumen: Pendekatan Ordinal",
        detail: "Mengasumsikan kepuasan tidak dapat dihitung dengan angka pasti melainkan diperingkat. Menggunakan Kurva Indiferensi (Indifference Curve - kumpulan kombinasi 2 barang dengan kepuasan sama) dan Garis Anggaran (Budget Line - batasan pendapatan). Keseimbangan konsumen tercapai saat kurva indiferensi bersinggungan dengan garis anggaran."
      },
      {
        topic: "Teori Produksi & The Law of Diminishing Returns",
        detail: "Fungsi produksi Q = f(K, L, R, T). David Ricardo merumuskan Hukum Tambahan Hasil yang Semakin Menurun: jika satu faktor produksi variabel (misal tenaga kerja L) terus ditambahkan pada faktor produksi tetap (misal tanah K), mula-mula Total Produk (TP) bertambah cepat, namun melampaui titik tertentu Marginal Product (MP) akan menurun bahkan negatif."
      },
      {
        topic: "3 Tahap Produksi & Kombinasi Input",
        detail: "Tahap I (MP > AP): Daerah tidak rasional karena faktor produksi belum optimal. Tahap II (AP > MP ≥ 0): Daerah rasional tempat produsen beroperasi dengan efisiensi maksimal. Tahap III (MP < 0): Daerah tidak rasional karena penambahan tenaga kerja justru menurunkan total output. Kurva Isoquant (output sama) dan Isocost (biaya sama) menentukan kombinasi input termurah (Least Cost Combination)."
      },
      {
        topic: "Pasar Faktor Produksi (Pasar Input)",
        detail: "Terdiri dari: (1) Pasar Tanah (balas jasa sewa / rent), (2) Pasar Tenaga Kerja (balas jasa upah / wage), (3) Pasar Modal (balas jasa bunga / interest), dan (4) Pasar Kewirausahaan (balas jasa laba usaha / profit). Permintaan input bersifat permintaan turunan (derived demand) yang bergantung pada permintaan barang jadi di pasar output."
      }
    ]
  }
};

export function buildCompleteBookHtml(): string {
  // Build Table of Contents HTML
  const tocHtml = `
    <div class="toc-container my-8 p-6 bg-slate-50 border-2 border-slate-300 rounded-xl page-break-after">
      <h2 class="text-2xl font-bold font-serif text-slate-900 border-b-2 border-slate-800 pb-2 mb-4 text-center">
        DAFTAR ISI LENGKAP
      </h2>
      <p class="text-xs text-slate-500 text-center mb-6">E-Modul Ekonomi Terpadu SMA Kelas X (Bab 1 s.d. Bab 4)</p>

      <div class="space-y-4 text-sm">
        <!-- Pengantar -->
        <div class="flex justify-between items-baseline border-b border-dotted border-slate-300 pb-1 font-semibold">
          <span>Kata Pengantar & Petunjuk Penggunaan Modul</span>
          <span class="font-mono text-slate-600">Hal. iii</span>
        </div>

        <!-- BAB 1 -->
        <div class="pt-2">
          <div class="flex justify-between items-baseline font-bold text-emerald-800 border-b border-emerald-300 pb-1">
            <span>BAB 1: KELANGKAAN DAN PENGALOKASIAN SUMBER DAYA</span>
            <span class="font-mono">Hal. 1</span>
          </div>
          <div class="pl-4 space-y-1 mt-1 text-slate-700 text-xs">
            <div class="flex justify-between"><span>1.1 Konsep Inti Kelangkaan (Scarcity) & Kebutuhan Manusia</span><span class="font-mono">1</span></div>
            <div class="flex justify-between"><span>1.2 Klasifikasi Kebutuhan & Skala Prioritas</span><span class="font-mono">3</span></div>
            <div class="flex justify-between"><span>1.3 Macam Alat Pemuas Kebutuhan & Nilai Guna Barang (Utility)</span><span class="font-mono">5</span></div>
            <div class="flex justify-between"><span>1.4 Konsep Biaya Peluang (Opportunity Cost) & Trade-off</span><span class="font-mono">8</span></div>
            <div class="flex justify-between"><span>1.5 Pengalokasian Sumber Daya Ekonomi (SDA, SDM, Modal, Keahlian)</span><span class="font-mono">11</span></div>
            <div class="flex justify-between"><span>1.6 Masalah Pokok Pengalokasian & Teori Nilai</span><span class="font-mono">14</span></div>
            <div class="flex justify-between font-bold text-emerald-900"><span>• IKHTISAR & RANGKUMAN MATERI BAB 1</span><span class="font-mono">17</span></div>
            <div class="flex justify-between text-slate-500"><span>• Evaluasi Mandiri: 50 Soal Pilihan Ganda Bab 1</span><span class="font-mono">19</span></div>
            <div class="flex justify-between text-slate-500"><span>• Evaluasi Mandiri: 20 Soal Esai & Uraian Bab 1</span><span class="font-mono">31</span></div>
          </div>
        </div>

        <!-- BAB 2 -->
        <div class="pt-3">
          <div class="flex justify-between items-baseline font-bold text-indigo-800 border-b border-indigo-300 pb-1">
            <span>BAB 2: POKOK PERMASALAHAN EKONOMI & SISTEM EKONOMI</span>
            <span class="font-mono">Hal. 35</span>
          </div>
          <div class="pl-4 space-y-1 mt-1 text-slate-700 text-xs">
            <div class="flex justify-between"><span>2.1 Masalah Pokok Ekonomi Klasik vs Modern (What, How, For Whom)</span><span class="font-mono">35</span></div>
            <div class="flex justify-between"><span>2.2 Kesempatan Kerja, Angkatan Kerja & Pengangguran</span><span class="font-mono">38</span></div>
            <div class="flex justify-between"><span>2.3 Peran 4 Pelaku Kegiatan Ekonomi (RTK, RTP, RTN, MLN)</span><span class="font-mono">41</span></div>
            <div class="flex justify-between"><span>2.4 Diagram Arus Kegiatan Ekonomi (Circular Flow 2, 3, 4 Sektor)</span><span class="font-mono">44</span></div>
            <div class="flex justify-between"><span>2.5 Perbandingan 5 Sistem Ekonomi Dunia</span><span class="font-mono">48</span></div>
            <div class="flex justify-between"><span>2.6 Sistem Perekonomian Indonesia: Demokrasi Ekonomi Pancasila</span><span class="font-mono">53</span></div>
            <div class="flex justify-between font-bold text-indigo-900"><span>• IKHTISAR & RANGKUMAN MATERI BAB 2</span><span class="font-mono">56</span></div>
            <div class="flex justify-between text-slate-500"><span>• Evaluasi Mandiri: 50 Soal Pilihan Ganda Bab 2</span><span class="font-mono">58</span></div>
            <div class="flex justify-between text-slate-500"><span>• Evaluasi Mandiri: 20 Soal Esai & Uraian Bab 2</span><span class="font-mono">70</span></div>
          </div>
        </div>

        <!-- BAB 3 -->
        <div class="pt-3">
          <div class="flex justify-between items-baseline font-bold text-sky-800 border-b border-sky-300 pb-1">
            <span>BAB 3: PERMINTAAN, PENAWARAN, KESEIMBANGAN & ELASTISITAS</span>
            <span class="font-mono">Hal. 74</span>
          </div>
          <div class="pl-4 space-y-1 mt-1 text-slate-700 text-xs">
            <div class="flex justify-between"><span>3.1 Teori Permintaan, Hukum Permintaan, & Fungsi Matematis</span><span class="font-mono">74</span></div>
            <div class="flex justify-between"><span>3.2 Teori Penawaran, Hukum Penawaran, & Kurva Penawaran</span><span class="font-mono">77</span></div>
            <div class="flex justify-between"><span>3.3 Pembentukan Harga Keseimbangan Pasar (Equilibrium) & Surplus</span><span class="font-mono">80</span></div>
            <div class="flex justify-between"><span>3.4 Elastisitas Harga Permintaan & Penawaran (Rumus & 5 Derajat)</span><span class="font-mono">84</span></div>
            <div class="flex justify-between"><span>3.5 Elastisitas Silang (Cross Elasticity) & Elastisitas Pendapatan</span><span class="font-mono">89</span></div>
            <div class="flex justify-between font-bold text-sky-900"><span>• IKHTISAR & RANGKUMAN MATERI BAB 3</span><span class="font-mono">92</span></div>
            <div class="flex justify-between text-slate-500"><span>• Evaluasi Mandiri: 50 Soal Pilihan Ganda Bab 3</span><span class="font-mono">94</span></div>
            <div class="flex justify-between text-slate-500"><span>• Evaluasi Mandiri: 20 Soal Esai & Uraian Bab 3</span><span class="font-mono">106</span></div>
          </div>
        </div>

        <!-- BAB 4 -->
        <div class="pt-3">
          <div class="flex justify-between items-baseline font-bold text-purple-800 border-b border-purple-300 pb-1">
            <span>BAB 4: PERILAKU KONSUMEN DAN PRODUSEN</span>
            <span class="font-mono">Hal. 110</span>
          </div>
          <div class="pl-4 space-y-1 mt-1 text-slate-700 text-xs">
            <div class="flex justify-between"><span>4.1 Teori Perilaku Konsumen Pendekatan Kardinal (Hukum Gossen I & II)</span><span class="font-mono">110</span></div>
            <div class="flex justify-between"><span>4.2 Teori Pendekatan Ordinal (Indifference Curve & Budget Line)</span><span class="font-mono">114</span></div>
            <div class="flex justify-between"><span>4.3 Teori Produsen (Fungsi Produksi, Isoquant, Isocost, Law of Diminishing Returns)</span><span class="font-mono">118</span></div>
            <div class="flex justify-between"><span>4.4 Peran Pelaku Ekonomi & Pasar Faktor Produksi (Pasar Input)</span><span class="font-mono">123</span></div>
            <div class="flex justify-between font-bold text-purple-900"><span>• IKHTISAR & RANGKUMAN MATERI BAB 4</span><span class="font-mono">127</span></div>
            <div class="flex justify-between text-slate-500"><span>• Evaluasi Mandiri: 50 Soal Pilihan Ganda Bab 4</span><span class="font-mono">129</span></div>
            <div class="flex justify-between text-slate-500"><span>• Evaluasi Mandiri: 20 Soal Esai & Uraian Bab 4</span><span class="font-mono">140</span></div>
          </div>
        </div>

        <!-- Kunci Jawaban Lengkap -->
        <div class="pt-4 border-t-2 border-slate-800">
          <div class="flex justify-between items-baseline font-bold text-slate-900">
            <span>KUNCI JAWABAN LENGKAP & PEMBAHASAN SOAL PILIHAN GANDA (1–200)</span>
            <span class="font-mono">Hal. 144</span>
          </div>
          <div class="flex justify-between items-baseline font-bold text-slate-900 pt-1">
            <span>PANDUAN RUBRIK & KUNCI JAWABAN SOAL ESAI / URAIAN (1–80)</span>
            <span class="font-mono">Hal. 158</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Build Chapters
  let chaptersHtml = '';

  const chaptersConfig = [
    {
      id: 1,
      name: "BAB 1",
      title: "KELANGKAAN DAN PENGALOKASIAN SUMBER DAYA",
      theme: "emerald",
      modules: BAB1_MODULES,
      mcq: BAB1_MCQ,
      essays: BAB1_ESSAYS,
      summary: CHAPTER_SUMMARIES_DETAILED.bab1,
      diagram: SVG_DIAGRAMS.ppcCurve
    },
    {
      id: 2,
      name: "BAB 2",
      title: "POKOK PERMASALAHAN EKONOMI DAN SISTEM EKONOMI",
      theme: "indigo",
      modules: BAB2_MODULES,
      mcq: BAB2_MCQ,
      essays: BAB2_ESSAYS,
      summary: CHAPTER_SUMMARIES_DETAILED.bab2,
      diagram: SVG_DIAGRAMS.circularFlow
    },
    {
      id: 3,
      name: "BAB 3",
      title: "PERMINTAAN, PENAWARAN, KESEIMBANGAN PASAR & ELASTISITAS",
      theme: "sky",
      modules: BAB3_MODULES,
      mcq: BAB3_MCQ,
      essays: BAB3_ESSAYS,
      summary: CHAPTER_SUMMARIES_DETAILED.bab3,
      diagram: SVG_DIAGRAMS.equilibrium
    },
    {
      id: 4,
      name: "BAB 4",
      title: "PERILAKU KONSUMEN DAN PRODUSEN",
      theme: "purple",
      modules: BAB4_MODULES,
      mcq: BAB4_MCQ,
      essays: BAB4_ESSAYS,
      summary: CHAPTER_SUMMARIES_DETAILED.bab4,
      diagram: SVG_DIAGRAMS.gossenCurve + SVG_DIAGRAMS.productionCurve
    }
  ];

  for (const chap of chaptersConfig) {
    chaptersHtml += `
      <section class="chapter-container page-break-before my-8">
        <!-- Chapter Header Banner -->
        <div class="p-6 bg-slate-900 text-white rounded-xl mb-6 border-b-4 border-${chap.theme}-500">
          <span class="text-xs font-mono uppercase tracking-widest text-${chap.theme}-400 font-bold">${chap.name}</span>
          <h2 class="text-2xl font-serif font-extrabold mt-1 text-white">${chap.title}</h2>
          <p class="text-xs text-slate-300 mt-2">Cakupan: ${chap.modules.length} Bagian Materi · 50 Soal Pilihan Ganda · 20 Soal Esai & HOTS · Ikhtisar Lengkap</p>
        </div>

        <!-- Modules Content -->
        <div class="space-y-6">
    `;

    // Render Modules
    chap.modules.forEach((mod, idx) => {
      chaptersHtml += `
        <article class="module-block border border-slate-300 rounded-lg p-5 bg-white shadow-xs break-inside-avoid">
          <div class="border-b border-slate-200 pb-2 mb-3">
            <span class="text-[11px] font-bold font-mono text-${chap.theme}-700 bg-${chap.theme}-50 px-2 py-0.5 rounded border border-${chap.theme}-200">
              Bagian ${chap.id}.${idx + 1}
            </span>
            <h3 class="text-lg font-bold text-slate-900 font-serif mt-1">${escapeHtml(mod.title)}</h3>
          </div>
          
          <div class="prose text-sm text-slate-800 leading-relaxed space-y-3">
            ${mod.contentHtml || formatContent(mod.subtitle)}
          </div>
        </article>
      `;
    });

    // Embed Chapter Vector Diagram
    if (chap.diagram) {
      chaptersHtml += `
        <div class="diagram-box my-6 p-4 bg-slate-50 border border-slate-300 rounded-xl break-inside-avoid text-center">
          <span class="text-xs font-bold text-slate-500 uppercase tracking-wide block mb-2">Visualisasi Konseptual & Kurva Grafis ${chap.name}</span>
          ${chap.diagram}
        </div>
      `;
    }

    // Embed Ikhtisar / Rangkuman Chapter
    chaptersHtml += `
      <div class="summary-box my-8 p-6 bg-amber-50/80 border-2 border-amber-300 rounded-xl break-inside-avoid page-break-before">
        <div class="flex items-center gap-2 border-b-2 border-amber-400 pb-2 mb-4">
          <span class="text-xl">📌</span>
          <div>
            <h3 class="text-lg font-extrabold text-amber-950 font-serif tracking-tight">${chap.summary.title}</h3>
            <p class="text-xs text-amber-800 font-semibold">${chap.summary.subtitle}</p>
          </div>
        </div>

        <div class="space-y-4 text-xs text-slate-800">
          ${chap.summary.points.map(pt => `
            <div class="p-3 bg-white/90 border border-amber-200 rounded-lg shadow-2xs">
              <h4 class="font-bold text-amber-900 text-sm mb-1">✓ ${escapeHtml(pt.topic)}</h4>
              <p class="leading-relaxed text-justify text-slate-700">${escapeHtml(pt.detail)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Render 50 MCQ Questions for Chapter
    chaptersHtml += `
      <div class="mcq-section my-8 page-break-before">
        <div class="border-b-2 border-slate-800 pb-2 mb-4 flex justify-between items-baseline">
          <h3 class="text-xl font-bold font-serif text-slate-900">EVALUASI MANDIRI ${chap.name}: 50 SOAL PILIHAN GANDA</h3>
          <span class="text-xs text-slate-600 font-semibold">50 Soal Terstandar</span>
        </div>
        <p class="text-xs text-slate-600 mb-6 italic">Petunjuk: Pilihlah satu jawaban yang paling tepat pada huruf A, B, C, D, atau E. Kunci jawaban dan pembahasan rinci tersedia di bagian akhir buku.</p>

        <div class="space-y-5 text-xs">
          ${chap.mcq.map((q, qIdx) => `
            <div class="mcq-item border border-slate-200 rounded-lg p-3 bg-slate-50/50 break-inside-avoid">
              <p class="font-bold text-slate-900 text-sm mb-2">
                <span class="font-mono text-${chap.theme}-700 font-extrabold">Soal #${q.id}.</span> ${escapeHtml(q.question)}
              </p>
              <div class="grid grid-cols-1 gap-1.5 pl-3 text-slate-700">
                ${q.options.map((opt, oIdx) => {
                  const letter = String.fromCharCode(65 + oIdx);
                  return `<div><strong class="font-mono text-slate-600">${letter}.</strong> ${escapeHtml(opt)}</div>`;
                }).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    // Render 20 Essay Questions for Chapter
    chaptersHtml += `
      <div class="essay-section my-8 page-break-before">
        <div class="border-b-2 border-slate-800 pb-2 mb-4 flex justify-between items-baseline">
          <h3 class="text-xl font-bold font-serif text-slate-900">EVALUASI MANDIRI ${chap.name}: 20 SOAL ESAI & HOTS</h3>
          <span class="text-xs text-slate-600 font-semibold">20 Soal Analisis Mendalam</span>
        </div>
        <p class="text-xs text-slate-600 mb-6 italic">Petunjuk: Kerjakan soal uraian berikut secara analitis, sistematis, dan sertakan rumus atau argumen ekonomi yang relevan.</p>

        <div class="space-y-5 text-xs">
          ${chap.essays.map((eq, eqIdx) => `
            <div class="essay-item border border-slate-200 rounded-lg p-3.5 bg-slate-50/60 break-inside-avoid">
              <div class="flex justify-between items-start mb-1.5">
                <span class="font-bold text-slate-900 text-sm font-serif">
                  <span class="font-mono text-${chap.theme}-700 font-extrabold">Esai #${eq.id}.</span> ${escapeHtml(eq.question)}
                </span>
                <span class="text-[10px] bg-slate-200 px-2 py-0.5 rounded font-mono text-slate-700 shrink-0 ml-2">Bobot: 10</span>
              </div>
              <div class="mt-2 text-slate-600 italic text-[11px] bg-white p-2 border border-slate-200 rounded">
                <strong>Panduan Analisis:</strong> ${escapeHtml(eq.answer)}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    chaptersHtml += `
        </div>
      </section>
    `;
  }

  // Answer Keys & Explanations Section
  const answerKeysHtml = `
    <section class="answer-keys-section page-break-before my-8">
      <div class="p-6 bg-slate-900 text-white rounded-xl mb-6">
        <h2 class="text-2xl font-serif font-extrabold text-center">KUNCI JAWABAN LENGKAP & PEMBAHASAN</h2>
        <p class="text-xs text-slate-300 text-center mt-1">200 Soal Pilihan Ganda (Bab 1 s.d. Bab 4) Disertai Landasan Teori & Solusi Matematis</p>
      </div>

      <div class="space-y-4 text-xs">
        ${ALL_MCQ.map((q) => {
          const letter = String.fromCharCode(65 + q.correct);
          return `
            <div class="p-3 bg-white border border-slate-200 rounded-lg break-inside-avoid">
              <div class="flex items-center gap-2 mb-1">
                <span class="font-mono font-bold text-indigo-700">Soal #${q.id} (Bab ${q.babId})</span>
                <span class="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.2 rounded border border-emerald-300">Kunci: ${letter}</span>
              </div>
              <p class="text-slate-800 font-medium mb-1">${escapeHtml(q.question)}</p>
              <p class="text-slate-600 bg-slate-50 p-2 rounded border border-slate-200">
                <strong class="text-slate-900">Pembahasan:</strong> ${escapeHtml(q.explanation)}
              </p>
            </div>
          `;
        }).join('')}
      </div>
    </section>

    <section class="essay-rubrics-section page-break-before my-8">
      <div class="p-6 bg-slate-900 text-white rounded-xl mb-6">
        <h2 class="text-2xl font-serif font-extrabold text-center">PANDUAN RUBRIK & KUNCI JAWABAN 80 SOAL ESAI</h2>
        <p class="text-xs text-slate-300 text-center mt-1">Kriteria Penilaian & Kata Kunci Esensial Evaluasi Mandiri Siswa (Bab 1 s.d. Bab 4)</p>
      </div>

      <div class="space-y-4 text-xs">
        ${ALL_ESSAYS.map((eq) => `
          <div class="p-3 bg-white border border-slate-200 rounded-lg break-inside-avoid">
            <div class="flex justify-between items-center mb-1">
              <span class="font-mono font-bold text-indigo-700">Esai #${eq.id} (Bab ${eq.babId})</span>
              <span class="text-slate-500 font-mono text-[11px]">Bobot: 10</span>
            </div>
            <p class="text-slate-900 font-semibold mb-1">${escapeHtml(eq.question)}</p>
            <div class="bg-amber-50/70 p-2.5 rounded border border-amber-200 text-slate-700 space-y-1">
              <div><strong class="text-amber-900">Kunci Rubrik / Jawaban Ideal:</strong> ${escapeHtml(eq.answer)}</div>
              <div><strong class="text-amber-900">Kata Kunci Utama:</strong> ${(eq.keywords || []).join(', ')}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;

  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Buku Modul Lengkap Ekonomi SMA Kelas X (Bab 1 - 4)</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;0,6..72,700;0,6..72,800;1,6..72,400&family=JetBrains+Mono:wght@400;500;700&display=swap');
    
    body {
      font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
      color: #1e293b;
      line-height: 1.6;
      background: #ffffff;
    }
    
    h1, h2, h3, .font-serif {
      font-family: 'Newsreader', Georgia, serif;
    }

    .font-mono {
      font-family: 'JetBrains Mono', monospace;
    }

    /* Print & PDF Rules */
    @page {
      size: A4 portrait;
      margin: 18mm 15mm 20mm 15mm;
    }

    @media print {
      body {
        background: transparent !important;
        color: #000000 !important;
      }
      .no-print {
        display: none !important;
      }
      .page-break-before {
        page-break-before: always !important;
        break-before: page !important;
      }
      .page-break-after {
        page-break-after: always !important;
        break-after: page !important;
      }
      .break-inside-avoid {
        page-break-inside: avoid !important;
        break-inside: avoid !important;
      }
    }

    .page-break-before {
      page-break-before: always;
      break-before: page;
    }
    .page-break-after {
      page-break-after: always;
      break-after: page;
    }
    .break-inside-avoid {
      page-break-inside: avoid;
      break-inside: avoid;
    }
  </style>
</head>
<body class="p-6 md:p-12 max-w-4xl mx-auto">

  <!-- Action Bar (Hanya tampil saat dibuka di browser, disembunyikan saat dicetak/PDF) -->
  <div class="no-print mb-8 p-4 bg-slate-900 text-white rounded-xl shadow-lg flex flex-wrap items-center justify-between gap-4 sticky top-4 z-50">
    <div class="flex items-center gap-3">
      <div class="w-9 h-9 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-white">PDF</div>
      <div>
        <h1 class="font-bold text-sm text-white">Buku E-Modul Ekonomi SMA (Bab 1–4 Lengkap)</h1>
        <p class="text-xs text-slate-300">Siap baca & cetak ke format PDF utuh A4</p>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <a href="/E-Modul_Ekonomi_SMA_Kelas_X_Lengkap_Bab_1-4.pdf" download class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow">
        <span>⬇</span> Unduh PDF Langsung
      </a>
      <button onclick="window.print()" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow">
        <span>🖨</span> Cetak / Simpan PDF Browser
      </button>
      <a href="/" class="px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-xs font-bold transition">
        Kembali ke Dashboard
      </a>
    </div>
  </div>

  <!-- HALAMAN SAMPUL / COVER BUKU -->
  <div class="cover-page min-h-[950px] flex flex-col justify-between p-12 border-8 border-slate-900 rounded-2xl bg-gradient-to-b from-slate-50 via-white to-slate-100 text-center relative overflow-hidden page-break-after">
    <div class="border-b-2 border-slate-800 pb-6">
      <span class="inline-block px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-extrabold uppercase tracking-widest font-mono">
        KURIKULUM MERDEKA & SILABUS TERPADU SMA
      </span>
      <p class="text-xs font-semibold text-slate-600 mt-2">Mata Pelajaran: EKONOMI · KELAS X (SEPULUH) FASE E</p>
    </div>

    <div class="my-auto py-10">
      <div class="w-20 h-20 mx-auto mb-6 bg-gradient-to-tr from-indigo-700 via-blue-600 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-3xl font-extrabold shadow-xl">
        EK
      </div>
      <h1 class="text-4xl md:text-5xl font-extrabold font-serif text-slate-900 tracking-tight leading-tight">
        BUKU MODUL LENGKAP<br/>
        <span class="text-indigo-700">EKONOMI SMA</span>
      </h1>
      <p class="text-xl md:text-2xl font-serif text-slate-700 mt-3 font-semibold">
        Panduan Belajar Mandiri Terpadu (Bab 1 s.d. Bab 4)
      </p>

      <div class="w-32 h-1 bg-indigo-600 mx-auto my-6 rounded-full"></div>

      <div class="grid grid-cols-2 gap-3 max-w-lg mx-auto text-left text-xs bg-white p-4 rounded-xl border border-slate-300 shadow-xs">
        <div><strong>• Bab 1:</strong> Kelangkaan & Sumber Daya</div>
        <div><strong>• Bab 2:</strong> Masalah & Sistem Ekonomi</div>
        <div><strong>• Bab 3:</strong> D, S, Ekuilibrium & Elastisitas</div>
        <div><strong>• Bab 4:</strong> Perilaku Konsumen & Produsen</div>
        <div class="col-span-2 pt-2 border-t border-slate-200 text-slate-600 text-center font-mono">
          21 Sub-materi · 8 Infografis Visual · 200 Soal PG · 80 Soal Esai
        </div>
      </div>
    </div>

    <div class="border-t-2 border-slate-800 pt-6 text-xs text-slate-600 flex justify-between items-center">
      <div class="text-left">
        <strong>Pusat Pembelajaran Mandiri Siswa</strong><br/>
        E-Modul Terpadu Ekonomi SMA
      </div>
      <div class="text-right font-mono">
        Edisi Digital Lengkap<br/>
        Tahun Ajaran 2026/2027
      </div>
    </div>
  </div>

  <!-- HALAMAN KATA PENGANTAR -->
  <div class="p-8 my-8 bg-white border border-slate-300 rounded-xl page-break-after">
    <h2 class="text-2xl font-bold font-serif text-slate-900 border-b-2 border-slate-800 pb-2 mb-4">
      KATA PENGANTAR & PETUNJUK BELAJAR
    </h2>
    <div class="text-sm text-slate-700 space-y-4 leading-relaxed text-justify">
      <p>
        Puji syukur kita panjatkan ke hadirat Tuhan Yang Maha Esa atas terwujudnya <strong>Buku Modul Lengkap Ekonomi SMA Fase E (Kelas X)</strong>. Buku ini dirancang secara komprehensif sebagai sumber belajar mandiri bagi siswa di rumah maupun bahan rujukan terstruktur di kelas, yang mengintegrasikan seluruh materi fundamental ilmu ekonomi mulai dari Bab 1 hingga Bab 4.
      </p>
      <p>
        Buku ini memuat seluruh uraian materi secara utuh tanpa pengurangan substansi, disertai visualisasi diagram kurva, perbandingan komparatif sistem ekonomi dunia, formula perhitungan matematis, ikhtisar/rangkuman poin inti di setiap akhir bab, serta bank soal evaluasi sebanyak <strong>200 Soal Pilihan Ganda</strong> dan <strong>80 Soal Esai/HOTS</strong> dengan kunci jawaban dan pembahasan lengkap.
      </p>
      <div class="p-4 bg-indigo-50 border border-indigo-200 rounded-lg">
        <h3 class="font-bold text-indigo-900 text-sm mb-2">Petunjuk Penggunaan Bagi Siswa:</h3>
        <ol class="list-decimal pl-5 space-y-1.5 text-xs text-indigo-950">
          <li><strong>Baca Uraian Materi:</strong> Pahami setiap konsep, hukum ekonomi, dan contoh aplikasi nyata pada masing-masing sub-materi.</li>
          <li><strong>Perhatikan Diagram & Rumus:</strong> Cermati grafik pergerakan kurva (permintaan, penawaran, elastisitas, utilitas, dan produksi).</li>
          <li><strong>Ulas Ikhtisar Bab:</strong> Manfaatkan rangkuman di akhir bab untuk mematangkan intisari konsep sebelum menguji diri.</li>
          <li><strong>Kerjakan Evaluasi Mandiri:</strong> Selesaikan 50 soal pilihan ganda dan 20 soal esai pada setiap bab secara mandiri.</li>
          <li><strong>Cocokkan dengan Kunci Pembahasan:</strong> Gunakan bagian kunci jawaban di akhir buku untuk mengevaluasi pemahaman dan memperbaiki kekeliruan.</li>
        </ol>
      </div>
    </div>
  </div>

  <!-- DAFTAR ISI LENGKAP -->
  ${tocHtml}

  <!-- ISI SELURUH MATERI BAB 1 - 4 & IKHTISAR & SOAL -->
  ${chaptersHtml}

  <!-- KUNCI JAWABAN LENGKAP & PEMBAHASAN -->
  ${answerKeysHtml}

  <!-- PENUTUP -->
  <div class="p-8 my-8 text-center text-xs text-slate-500 border-t border-slate-300">
    <p>Buku Modul Lengkap Ekonomi SMA Kelas X (Bab 1–4) · Hak Cipta Dilindungi Undang-Undang · Disusun untuk Pembelajaran Mandiri Siswa</p>
  </div>

</body>
</html>
`;
}

// Main Execution
async function main() {
  console.log("Generating complete textbook HTML...");
  const htmlContent = buildCompleteBookHtml();
  const htmlPath = path.join(ROOT_DIR, 'public', 'buku_ekonomi_sma_lengkap.html');
  fs.writeFileSync(htmlPath, htmlContent, 'utf-8');
  console.log(`Saved HTML book to: ${htmlPath} (${(htmlContent.length / 1024).toFixed(1)} KB)`);
}

main().catch(err => {
  console.error("Error generating book:", err);
  process.exit(1);
});
