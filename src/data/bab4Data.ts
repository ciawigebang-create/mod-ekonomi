import { ModuleTopic } from '../types';

export const BAB4_MODULES: ModuleTopic[] = [
  {
    id: "b4-m1",
    number: "Bagian 1",
    title: "Teori Kepuasan Konsumen (Utility Theory)",
    subtitle: "Nilai guna total (TU), nilai guna marjinal (MU), Hukum Gossen I (Diminishing Marginal Utility), dan Hukum Gossen II (Equi-Marginal Utility)",
    color: "indigo",
    gradient: "from-indigo-600 via-violet-600 to-purple-700",
    readTime: "18 Menit",
    subtopics: [
      "Pendekatan Kardinal vs Pendekatan Ordinal",
      "Total Utility (TU) & Rumus",
      "Marginal Utility (MU = ΔTU / ΔQ) & Rumus",
      "Hukum Gossen I & Tabel Titik Jenuh (Satiation Point)",
      "Hukum Gossen II & Syarat Keseimbangan (MUA/PA = MUB/PB)"
    ],
    contentHtml: `
      <div class="space-y-6 text-xs md:text-sm">
        <div class="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-2">
          <div class="font-bold text-indigo-950 dark:text-indigo-200 text-base">Pendekatan Kardinal vs Ordinal:</div>
          <p>• <strong>Kardinal:</strong> Kepuasan dapat diukur dengan angka pasti (satuan Util). Tokoh: H.H. Gossen.</p>
          <p>• <strong>Ordinal:</strong> Kepuasan tidak dapat diukur dengan angka pasti, melainkan lewat peringkat/urutan (Kurva Indiferensi).</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <div class="font-bold text-indigo-800 dark:text-indigo-300">Total Utility (TU) & Marginal Utility (MU):</div>
            <p>• <strong>TU:</strong> Jumlah seluruh kepuasan dari konsumsi sejumlah barang (TU = MU1 + MU2 + ... + MUn).</p>
            <p>• <strong>MU:</strong> Tambahan kepuasan dari bertambahnya 1 unit konsumsi (<strong>MU = ΔTU / ΔQ</strong>).</p>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <div class="font-bold text-emerald-800 dark:text-emerald-300">Titik Jenuh Hukum Gossen I:</div>
            <p>Jika konsumsi diteruskan, MU semakin menurun hingga mencapai <strong>MU = 0</strong> saat <strong>TU mencapai titik maksimum</strong>. Setelah titik jenuh, MU bernilai negatif.</p>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
          <div class="font-bold text-emerald-950 dark:text-emerald-200 text-base">Hukum Gossen II (Kepuasan Maksimum Berbagai Barang):</div>
          <p>Konsumen membagi pengeluarannya sedemikian rupa sehingga mencapai kepuasan marjinal per rupiah yang sama:</p>
          <div class="font-mono font-bold text-sm bg-white dark:bg-slate-900 p-2.5 rounded-xl text-center">
            MUA / PA = MUB / PB = MUC / PC
          </div>
        </div>
      </div>
    `
  },
  {
    id: "b4-m2",
    number: "Bagian 2",
    title: "Konsumsi & Perilaku Konsumen",
    subtitle: "Faktor internal & eksternal penentu konsumsi, perbandingan perilaku rasional vs tidak rasional, serta 3 penentu rasionalitas",
    color: "emerald",
    gradient: "from-emerald-600 via-teal-600 to-green-700",
    readTime: "16 Menit",
    subtopics: [
      "Pengertian Konsumsi",
      "Faktor Internal: Pendapatan, Motivasi, Sikap/Kepribadian, Selera",
      "Faktor Eksternal: Kebudayaan, Status Sosial, Harga Barang",
      "Perilaku Konsumsi Rasional vs Tidak Rasional",
      "3 Penentu: Tingkat Pendidikan, Kedewasaan, Kematangan Emosi"
    ],
    contentHtml: `
      <div class="space-y-6 text-xs md:text-sm">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <div class="font-bold text-indigo-700 dark:text-indigo-400">Faktor Internal Konsumsi:</div>
            <p>1. <strong>Pendapatan:</strong> Menentukan daya beli (Hukum Engel).</p>
            <p>2. <strong>Motivasi:</strong> Dorongan kebutuhan hidup/kesehatan.</p>
            <p>3. <strong>Sikap & Kepribadian:</strong> Hemat vs konsumtif.</p>
            <p>4. <strong>Selera:</strong> Preferensi subjektif individu.</p>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <div class="font-bold text-emerald-700 dark:text-emerald-400">Faktor Eksternal Konsumsi:</div>
            <p>1. <strong>Kebudayaan:</strong> Adat istiadat & tradisi suku.</p>
            <p>2. <strong>Status Sosial:</strong> Profesi & kedudukan masyarakat.</p>
            <p>3. <strong>Harga Barang:</strong> Keterjangkauan harga pasar.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1">
            <div class="font-bold text-emerald-900 dark:text-emerald-300">Konsumen Rasional:</div>
            <p>• Kegunaan barang optimal bagi kebutuhan nyata.</p>
            <p>• Mutu produk terjamin & tahan lama.</p>
            <p>• Harga terjangkau sesuai anggaran tanpa utang konsumtif.</p>
          </div>
          <div class="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 space-y-1">
            <div class="font-bold text-rose-900 dark:text-rose-300">Konsumen Tidak Rasional (Irasional):</div>
            <p>• Tergiur iklan/promosi semata tanpa butuh.</p>
            <p>• Hanya karena merek terkenal atau gengsi pamer.</p>
            <p>• Tergiur diskon/bonus barang yang tidak perlu.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "b4-m3",
    number: "Bagian 3",
    title: "Teori Produksi, Diminishing Returns & Isoquant",
    subtitle: "Faktor produksi asli & turunan, fungsi produksi Q = f(C,L,R,T), rumus TP/AP/MP, The Law of Diminishing Returns, serta kurva Isoquant",
    color: "amber",
    gradient: "from-amber-600 via-orange-600 to-rose-600",
    readTime: "22 Menit",
    subtopics: [
      "Faktor Produksi Asli (Alam & Tenaga Kerja) vs Turunan (Modal & Skill)",
      "Klasifikasi Tenaga Kerja: Rohani/Jasmani & Terdidik/Terlatih/Tidak Terdidik",
      "Fungsi Produksi & Rumus TP, AP = TP/L, MP = ΔTP/ΔL",
      "The Law of Diminishing Returns (David Ricardo) & 3 Tahap Produksi",
      "Kurva Produksi yang Sama (Isoquant Curve) & Ciri-cirinya"
    ],
    contentHtml: `
      <div class="space-y-6 text-xs md:text-sm">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <div class="font-bold text-amber-800 dark:text-amber-300">Faktor Produksi:</div>
            <p>• <strong>Asli:</strong> Alam/Tanah & Tenaga Kerja (Rohani/Jasmani; Terdidik/Terlatih/Tidak Terdidik).</p>
            <p>• <strong>Turunan:</strong> Modal (Mesin/uang) & Keahlian/Kewirausahaan (Managerial, Tech, Org skill).</p>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <div class="font-bold text-sky-800 dark:text-sky-300">Rumus Produksi:</div>
            <p>• <strong>Q = f(C, L, R, T)</strong></p>
            <p>• <strong>AP = TP / L</strong> (Rata-rata output per pekerja)</p>
            <p>• <strong>MP = ΔTP / ΔL</strong> (Tambahan output per 1 pekerja)</p>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2">
          <div class="font-bold text-amber-950 dark:text-amber-200 text-base">The Law of Diminishing Returns:</div>
          <p>Jika tenaga kerja ditambah terus pada tanah/mesin tetap, pada awalnya TP meningkat pesat, namun setelah titik tertentu MP menurun hingga nol (TP maks) dan negatif (TP turun). Daerah produksi paling rasional adalah <strong>Tahap II</strong>.</p>
        </div>

        <div class="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-2">
          <div class="font-bold text-indigo-950 dark:text-indigo-200 text-base">Kurva Isoquant (Produksi yang Sama):</div>
          <p>Kurva kombinasi dua input variabel (Tenaga Kerja L dan Modal K) yang menghasilkan output sama banyak. Cirinya: berslope negatif, cembung ke titik origin (MRTS menurun), dan tidak saling berpotongan.</p>
        </div>
      </div>
    `
  },
  {
    id: "b4-m4",
    number: "Bagian 4",
    title: "Perilaku Produsen & Etika Bisnis",
    subtitle: "Empat kunci pengusaha berhasil (POAC: Planning, Organizing, Actuating, Controlling) serta 4 aspek etika produsen",
    color: "purple",
    gradient: "from-purple-600 via-fuchsia-600 to-pink-700",
    readTime: "16 Menit",
    subtopics: [
      "4 Kunci Pengusaha Berhasil (POAC)",
      "Planning (Perencanaan) & Organizing (Pengorganisasian)",
      "Actuating (Pengarahan) & Controlling (Pengendalian)",
      "4 Aspek Etika Produsen: Nilai, Hak & Kewajiban, Peraturan Moral, Hubungan Manusia"
    ],
    contentHtml: `
      <div class="space-y-6 text-xs md:text-sm">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <div class="font-bold text-purple-700 dark:text-purple-400">4 Kunci Pengusaha Berhasil (POAC):</div>
            <p>1. <strong>Planning:</strong> Menetapkan tujuan, rencana produk, target pasar, anggaran.</p>
            <p>2. <strong>Organizing:</strong> Membagi tugas dan wewenang kepada karyawan.</p>
            <p>3. <strong>Actuating:</strong> Memimpin, membimbing, dan memotivasi kerja.</p>
            <p>4. <strong>Controlling:</strong> Mengawasi dan mengevaluasi standar mutu hasil kerja.</p>
          </div>

          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <div class="font-bold text-emerald-700 dark:text-emerald-400">4 Pilar Etika Produsen:</div>
            <p>1. <strong>Nilai (Values):</strong> Kejujuran takaran, keadilan harga, transparansi.</p>
            <p>2. <strong>Hak & Kewajiban:</strong> Hak laba seimbang dengan bayar upah layak & pajak.</p>
            <p>3. <strong>Peraturan Moral:</strong> Menjaga lingkungan, tidak monopoli curang.</p>
            <p>4. <strong>Hubungan Manusia:</strong> Memanusiakan buruh, peduli konsumen & CSR.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "b4-m5",
    number: "Bagian 5",
    title: "Pasar Faktor Produksi (Pasar Input)",
    subtitle: "Karakteristik pasar input, kurva pasar tenaga kerja (upah), pasar tanah (sewa & inelastis sempurna vertikal), dan pasar modal (bunga & laba)",
    color: "rose",
    gradient: "from-rose-600 via-pink-600 to-amber-600",
    readTime: "20 Menit",
    subtopics: [
      "Peran RTK (Penawar) & RTP (Peminta) di Pasar Input",
      "Pasar Tenaga Kerja: Derived Demand & Kurva Upah (W)",
      "Pasar Tanah: Kurva Penawaran Inelastis Sempurna Vertikal & Kenaikan Sewa (R)",
      "Pasar Modal: Suku Bunga (i) & Laba Kewirausahaan (Profit)"
    ],
    contentHtml: `
      <div class="space-y-6 text-xs md:text-sm">
        <div class="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 space-y-2">
          <div class="font-bold text-rose-950 dark:text-rose-200 text-base">Karakteristik Pasar Faktor Produksi:</div>
          <p>• Peminta = <strong>Perusahaan (RTP)</strong>; Penawar = <strong>Masyarakat (RTK)</strong>.</p>
          <p>• Balas jasa: Tanah (Sewa/Rent), Tenaga Kerja (Upah/Wage), Modal (Bunga/Interest), Wirausaha (Laba/Profit).</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>1. Pasar Tenaga Kerja:</strong> Permintaan berasal dari RTP (derived demand). Pergeseran permintaan ke kanan menaikkan upah (W).
          </div>
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>2. Pasar Tanah:</strong> Penawaran tanah <strong>vertikal inelastis sempurna (Es = 0)</strong> karena luas bumi tetap. Kenaikan permintaan membuat sewa tanah (R) terus melonjak.
          </div>
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>3. Pasar Modal:</strong> Permintaan modal berslope negatif terhadap bunga (i); penawaran modal berslope positif dari tabungan masyarakat.
          </div>
        </div>
      </div>
    `
  }
];

export const BAB4_GOSSEN_DATA = [
  { q: 0, tu: 0, mu: 0, x: 50, yTU: 210, yMU: 210, desc: "Pada Q = 0 Gelas: Konsumen belum mengonsumsi air sehingga TU = 0 Util." },
  { q: 1, tu: 15, mu: 15, x: 115, yTU: 142.5, yMU: 142.5, desc: "Pada Q = 1 Gelas: Rasa haus terobati, kepuasan marjinal sangat tinggi (MU = +15 Util, TU = 15 Util)." },
  { q: 2, tu: 27, mu: 12, x: 180, yTU: 88.5, yMU: 156, desc: "Pada Q = 2 Gelas: TU meningkat menjadi 27 Util, namun tambahan kepuasan menurun menjadi MU = +12 Util." },
  { q: 3, tu: 35, mu: 8, x: 245, yTU: 52.5, yMU: 174, desc: "Pada Q = 3 Gelas: TU terus naik menjadi 35 Util, tambahan kepuasan turun menjadi MU = +8 Util." },
  { q: 4, tu: 39, mu: 4, x: 310, yTU: 34.5, yMU: 192, desc: "Pada Q = 4 Gelas: TU mencapai 39 Util, tambahan kepuasan tinggal MU = +4 Util." },
  { q: 5, tu: 39, mu: 0, x: 375, yTU: 34.5, yMU: 210, desc: "Pada Q = 5 Gelas (Titik Jenuh): TU mencapai puncak maksimum (39 Util) dan MU = 0 Util." },
  { q: 6, tu: 34, mu: -5, x: 440, yTU: 57, yMU: 232.5, desc: "Pada Q = 6 Gelas: Melebihi batas jenuh (mual/kembung), MU bernilai negatif (-5 Util) sehingga TU turun menjadi 34 Util." }
];
