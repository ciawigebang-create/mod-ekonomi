import { ModuleTopic } from '../types';

export const BAB3_MODULES: ModuleTopic[] = [
  {
    id: "b3-m1",
    number: "Bagian 1",
    title: "Permintaan (Demand)",
    subtitle: "Pengertian permintaan, 3 jenis berdasarkan daya beli, 5 faktor penentu, hukum permintaan, fungsi permintaan, kurva & pergeserannya",
    color: "sky",
    gradient: "from-sky-600 via-blue-600 to-indigo-600",
    readTime: "18 Menit",
    subtopics: [
      "Pengertian Permintaan & 3 Jenis (Efektif, Potensial, Absolut)",
      "Hukum Permintaan & Ceteris Paribus (Hubungan Negatif)",
      "Faktor Penentu: Harga Barang, Pendapatan (Normal vs Inferior), Barang Lain (Substitusi vs Komplementer), Selera, Ekspektasi",
      "Fungsi Permintaan Linear (Qd = a - bP) & Rumus Dua Titik",
      "Permintaan Individu vs Permintaan Pasar",
      "Pergerakan Sepanjang Kurva vs Pergeseran Kurva Permintaan"
    ],
    contentHtml: `
      <div class="space-y-6 text-xs md:text-sm">
        <div class="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 space-y-2">
          <div class="font-bold text-sky-950 dark:text-sky-200 text-base">1. Pengertian Permintaan & 3 Jenisnya Berdasarkan Daya Beli:</div>
          <p><strong>Permintaan (Demand):</strong> Jumlah barang/jasa yang diinginkan dan mampu dibeli oleh konsumen pada berbagai tingkat harga dalam periode waktu tertentu (ceteris paribus).</p>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            <div class="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-sky-100 dark:border-sky-900">
              <strong>1. Efektif:</strong> Keinginan + punya uang + sudah dibeli.
            </div>
            <div class="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-sky-100 dark:border-sky-900">
              <strong>2. Potensial:</strong> Keinginan + punya uang cukup, tapi belum dibeli.
            </div>
            <div class="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-sky-100 dark:border-sky-900">
              <strong>3. Absolut:</strong> Keinginan semata tanpa uang yang cukup.
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
          <div class="font-bold text-slate-900 dark:text-white text-base">2. Hukum Permintaan (Law of Demand)</div>
          <blockquote class="italic text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800 p-3 rounded-xl border-l-4 border-sky-500">
            "Semakin tinggi harga suatu barang (P ↑), semakin sedikit jumlah yang diminta (Qd ↓); sebaliknya semakin rendah harga (P ↓), semakin banyak jumlah yang diminta (Qd ↑), ceteris paribus."
          </blockquote>
          <p class="text-slate-600 dark:text-slate-300 pt-1">
            Kurva permintaan memiliki <strong>kemiringan negatif (slope negatif)</strong> dari kiri atas ke kanan bawah karena:
            <br>• <strong>Efek Substitusi:</strong> Saat harga naik, konsumen beralih ke barang pengganti yang lebih murah.
            <br>• <strong>Efek Pendapatan:</strong> Saat harga naik, daya beli riil konsumen turun sehingga membeli lebih sedikit.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-1.5">
            <div class="font-bold text-indigo-950 dark:text-indigo-200">Rumus Fungsi Permintaan:</div>
            <div class="font-mono font-bold text-sm bg-white dark:bg-slate-900 p-2 rounded-xl text-center">Qd = a - bP &nbsp;|&nbsp; Pd = a - bQ</div>
            <p>Rumus 2 Titik: <code>(P - P1)/(P2 - P1) = (Q - Q1)/(Q2 - Q1)</code></p>
          </div>
          <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1.5">
            <div class="font-bold text-emerald-950 dark:text-emerald-200">Pergerakan vs Pergeseran:</div>
            <p>• <strong>Pergerakan di sepanjang kurva:</strong> HANYA karena perubahan harga barang itu sendiri (P).</p>
            <p>• <strong>Pergeseran kurva (Shift):</strong> Karena faktor non-harga (pendapatan, selera, harga substitusi/komplementer, ekspektasi).</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "b3-m2",
    number: "Bagian 2",
    title: "Penawaran (Supply)",
    subtitle: "Pengertian penawaran, hukum penawaran, faktor-faktor penentu (teknologi, biaya produksi, ekspektasi, pajak/subsidi), fungsi & kurva penawaran",
    color: "emerald",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    readTime: "16 Menit",
    subtopics: [
      "Pengertian Penawaran & Sudut Pandang Produsen",
      "Hukum Penawaran (Hubungan Positif / Searah)",
      "Faktor Penentu: Teknik Produksi/Teknologi, Harga Sumber Produksi/Input, Ekspektasi, Pajak & Subsidi",
      "Fungsi Penawaran Linear (Qs = -a + bP) & Kurva Penawaran Slope Positif",
      "Pergeseran Kurva Penawaran (Ke Kanan vs Ke Kiri)"
    ],
    contentHtml: `
      <div class="space-y-6 text-xs md:text-sm">
        <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
          <div class="font-bold text-emerald-950 dark:text-emerald-200 text-base">Hukum Penawaran (Law of Supply)</div>
          <blockquote class="italic text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 p-3 rounded-xl border-l-4 border-emerald-500">
            "Semakin tinggi harga suatu barang (P ↑), semakin banyak jumlah barang yang ditawarkan oleh produsen (Qs ↑); sebaliknya semakin rendah harga (P ↓), semakin sedikit jumlah barang yang ditawarkan (Qs ↓), ceteris paribus."
          </blockquote>
          <p class="text-slate-600 dark:text-slate-300">
            Kurva penawaran bergerak naik dari <strong>kiri bawah ke kanan atas (slope positif)</strong> karena harga yang tinggi memberikan margin keuntungan yang lebih menarik bagi produsen.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <div class="font-bold text-emerald-700 dark:text-emerald-400">Faktor Penggeser Kurva Penawaran:</div>
            <p>1. <strong>Teknologi:</strong> Inovasi mesin otomatis menggeser kurva ke kanan.</p>
            <p>2. <strong>Biaya Input:</strong> Kenaikan bahan baku & upah menggeser kurva ke kiri.</p>
            <p>3. <strong>Pajak (t):</strong> Menambah beban biaya, menggeser kurva ke kiri atas (Ps' = Ps + t).</p>
            <p>4. <strong>Subsidi (s):</strong> Meringankan biaya, menggeser kurva ke kanan bawah (Ps' = Ps - s).</p>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <div class="font-bold text-sky-700 dark:text-sky-400">Rumus Fungsi Penawaran:</div>
            <div class="font-mono font-bold text-sm bg-slate-50 dark:bg-slate-800 p-2 rounded-xl text-center">Qs = -a + bP &nbsp;|&nbsp; Ps = a + bQ</div>
            <p class="text-slate-600 dark:text-slate-400">Koefisien b selalu bernilai positif (+b).</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "b3-m3",
    number: "Bagian 3",
    title: "Harga Keseimbangan (Ekuilibrium Pasar)",
    subtitle: "Terbentuknya harga keseimbangan (Qd = Qs), surplus penawaran (floor price) vs surplus permintaan (ceiling price/HET), dan pergeseran ekuilibrium",
    color: "amber",
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    readTime: "20 Menit",
    subtopics: [
      "Pengertian & Rumus Ekuilibrium Pasar (Qd = Qs atau Pd = Ps)",
      "Ketidakseimbangan Pasar: Surplus Penawaran (Excess Supply) vs Surplus Permintaan (Excess Demand)",
      "Kebijakan Harga Pemerintah: Floor Price (Harga Terendah) vs Ceiling Price (Harga Tertinggi / HET)",
      "Pengaruh Pergeseran Kurva D dan S terhadap Titik Ekuilibrium Baru"
    ],
    contentHtml: `
      <div class="space-y-6 text-xs md:text-sm">
        <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-2">
          <div class="font-bold text-amber-950 dark:text-amber-200 text-base">Keseimbangan Pasar (Equilibrium)</div>
          <p>Terbentuk saat kurva permintaan berpotongan dengan kurva penawaran: <strong>Qd = Qs</strong> dan <strong>Pd = Ps</strong>.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 space-y-1.5">
            <div class="font-bold text-sky-900 dark:text-sky-200">1. Surplus Penawaran (Excess Supply)</div>
            <p>Terjadi saat <strong>P > Pe</strong> sehingga <strong>Qs > Qd</strong> (kelebihan barang menumpuk). Mendorong harga turun ke Pe.</p>
            <p class="text-[11px] text-slate-500">Terkait kebijakan <strong>Floor Price (Harga Terendah)</strong> untuk melindungi petani/produsen.</p>
          </div>
          <div class="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 space-y-1.5">
            <div class="font-bold text-rose-900 dark:text-rose-200">2. Surplus Permintaan (Excess Demand / Shortage)</div>
            <p>Terjadi saat <strong>P < Pe</strong> sehingga <strong>Qd > Qs</strong> (kelangkaan barang). Mendorong harga naik ke Pe.</p>
            <p class="text-[11px] text-slate-500">Terkait kebijakan <strong>Ceiling Price (HET / Harga Tertinggi)</strong> untuk melindungi konsumen.</p>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
          <div class="font-bold text-slate-900 dark:text-white">Pergeseran Titik Ekuilibrium:</div>
          <p>• Permintaan Naik (D ↑, S tetap) → Pe naik, Qe naik.</p>
          <p>• Permintaan Turun (D ↓, S tetap) → Pe turun, Qe turun.</p>
          <p>• Penawaran Naik (S ↑, D tetap) → Pe turun, Qe naik.</p>
          <p>• Penawaran Turun (S ↓, D tetap) → Pe naik, Qe turun.</p>
        </div>
      </div>
    `
  },
  {
    id: "b3-m4",
    number: "Bagian 4",
    title: "Elastisitas Permintaan dan Penawaran (Ed & Es)",
    subtitle: "Faktor-faktor penentu elastisitas, rumus koefisien (persentase, 2 titik, turunan), serta 5 jenis kurva elastisitas (elastis, inelastis, uniter, elastis sempurna, inelastis sempurna)",
    color: "rose",
    gradient: "from-rose-600 via-pink-600 to-purple-600",
    readTime: "22 Menit",
    subtopics: [
      "Pengertian Elastisitas Harga (Ed & Es)",
      "3 Faktor Penentu Elastisitas Permintaan (Tingkat Kebutuhan, Substitusi, Porsi Pendapatan)",
      "Rumus Koefisien Elastisitas: %ΔQ / %ΔP dan Rumus Titik",
      "5 Tingkat Elastisitas: Elastis (E>1), Inelastis (E<1), Uniter (E=1), Elastis Sempurna (E=∞), Inelastis Sempurna (E=0)",
      "Hubungan Elastisitas Permintaan dengan Penerimaan Total (Total Revenue / TR)",
      "Faktor Penentu Elastisitas Penawaran: Waktu Produksi, Daya Simpan, Kapasitas Menganggur"
    ],
    contentHtml: `
      <div class="space-y-6 text-xs md:text-sm">
        <div class="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 space-y-2">
          <div class="font-bold text-rose-950 dark:text-rose-200 text-base">Pengertian & Rumus Koefisien Elastisitas:</div>
          <p>Elastisitas mengukur kepekaan perubahan persentase jumlah barang terhadap perubahan persentase harga.</p>
          <div class="font-mono font-bold text-sm bg-white dark:bg-slate-900 p-2.5 rounded-xl text-center">
            E = (%ΔQ / %ΔP) = |(ΔQ / ΔP) × (P1 / Q1)| = |Q'| × (P / Q)
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>1. Tingkat Kebutuhan:</strong> Primer = Inelastis (E<1); Sekunder/Tersier = Elastis (E>1).
          </div>
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>2. Ketersediaan Substitusi:</strong> Banyak pengganti = Elastis; sulit pengganti = Inelastis.
          </div>
          <div class="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <strong>3. Porsi Pendapatan:</strong> Belanja porsi besar (mobil/rumah) = Elastis; porsi kecil (garam/korek) = Inelastis.
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-2">
          <div class="font-bold text-indigo-900 dark:text-indigo-200">5 Jenis Elastisitas:</div>
          <p>1. <strong>Elastis (E > 1):</strong> Kurva landai (%ΔQ > %ΔP).</p>
          <p>2. <strong>Inelastis (E < 1):</strong> Kurva curam (%ΔQ < %ΔP).</p>
          <p>3. <strong>Elastis Uniter (E = 1):</strong> Kemiringan 45 derajat proporsional (%ΔQ = %ΔP).</p>
          <p>4. <strong>Elastis Sempurna (E = ∞):</strong> Kurva garis lurus horizontal (sejajar sumbu Q).</p>
          <p>5. <strong>Inelastis Sempurna (E = 0):</strong> Kurva garis lurus vertikal (sejajar sumbu P, contoh: obat insulin/tanah).</p>
        </div>
      </div>
    `
  }
];
