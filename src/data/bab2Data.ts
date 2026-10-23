import { ModuleTopic, SistemEkonomi, Flashcard } from '../types';

export const BAB2_MODULES: ModuleTopic[] = [
  {
    id: "b2-m1",
    number: "Bagian 1",
    title: "Pokok Permasalahan Ekonomi (Klasik, Modern & Kesempatan Kerja)",
    subtitle: "Memahami masalah ekonomi aliran Klasik (Produksi, Distribusi, Konsumsi), aliran Modern (What, How, Who, For Whom), serta kaitannya dengan kesempatan kerja",
    color: "indigo",
    gradient: "from-indigo-600 via-blue-600 to-cyan-700",
    readTime: "16 Menit",
    subtopics: [
      "Tujuan Pembelajaran Bab 2",
      "Pokok Masalah Ekonomi Klasik: Produksi, Distribusi, dan Konsumsi",
      "Pokok Permasalahan Ekonomi Modern: What, How, Who, For Whom",
      "Pokok Permasalahan Ekonomi dan Kesempatan Kerja (Padat Karya vs Padat Modal)"
    ],
    contentHtml: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-indigo-50 to-cyan-50 dark:from-indigo-950/40 dark:to-cyan-950/40 border-l-4 border-indigo-600 p-5 rounded-r-2xl">
          <h4 class="text-base md:text-lg font-bold text-indigo-950 dark:text-indigo-200 mb-2">🎯 Tujuan Pembelajaran Bab 2</h4>
          <ol class="text-xs md:text-sm text-slate-700 dark:text-slate-300 space-y-1 list-decimal pl-5 font-medium">
            <li>Mendeskripsikan <strong>masalah-masalah pokok ekonomi</strong> (klasik, modern, dan kaitannya dengan kesempatan kerja).</li>
            <li>Mendeskripsikan hubungan dan peran antara <strong>RTK, RTP, RTN, dan Masyarakat Luar Negeri</strong> dalam Circular Flow Diagram.</li>
            <li>Mendeskripsikan <strong>macam-macam sistem ekonomi</strong> (Tradisional, Terpusat/Komando, Pasar, Campuran, dan Pancasila).</li>
            <li>Membandingkan <strong>keunggulan dan kelemahan</strong> masing-masing sistem ekonomi.</li>
          </ol>
        </div>

        <div>
          <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2">1. Pokok Masalah Ekonomi Klasik</h4>
          <p class="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            Aliran klasik (Adam Smith, David Ricardo, J.B. Say) berfokus pada tercapainya kemakmuran melalui 3 mata rantai utama:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-indigo-200 dark:border-indigo-800 space-y-1.5">
              <span class="w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">a</span>
              <h5 class="font-bold text-indigo-950 dark:text-indigo-200 text-sm">Masalah Produksi</h5>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Bagaimana menghasilkan barang/jasa yang dibutuhkan orang banyak menggunakan faktor produksi yang ada.</p>
            </div>
            <div class="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-sky-200 dark:border-sky-800 space-y-1.5">
              <span class="w-7 h-7 rounded-lg bg-sky-600 text-white font-bold text-xs flex items-center justify-center">b</span>
              <h5 class="font-bold text-sky-950 dark:text-sky-200 text-sm">Masalah Distribusi</h5>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Bagaimana menyalurkan barang dari produsen sampai ke tangan konsumen secara tepat waktu dan efisien.</p>
            </div>
            <div class="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-emerald-200 dark:border-emerald-800 space-y-1.5">
              <span class="w-7 h-7 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">c</span>
              <h5 class="font-bold text-emerald-950 dark:text-emerald-200 text-sm">Masalah Konsumsi</h5>
              <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">Apakah barang tersebut dapat dibeli dan dikonsumsi tepat guna oleh masyarakat sesuai daya beli mereka.</p>
            </div>
          </div>
        </div>

        <div>
          <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2">2. Pokok Permasalahan Ekonomi Modern</h4>
          <p class="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            Aliran modern (Paul A. Samuelson) berfokus pada pilihan efisiensi alokasi sumber daya langka melalui 4 pertanyaan mendasar:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
            <div class="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-1">
              <div class="font-bold text-indigo-950 dark:text-indigo-200">a. Apa & Berapa yang Diproduksi (What)</div>
              <p class="text-slate-600 dark:text-slate-300">Menentukan jenis komoditas apa dan berapa kuantitas yang harus dibuat agar tidak salah alokasi.</p>
            </div>
            <div class="p-4 rounded-2xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-800 space-y-1">
              <div class="font-bold text-cyan-950 dark:text-cyan-200">b. Bagaimana Cara Memproduksi (How)</div>
              <p class="text-slate-600 dark:text-slate-300">Menentukan teknik produksi: padat karya (banyak tenaga kerja) atau padat modal (mesin otomatis).</p>
            </div>
            <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-1">
              <div class="font-bold text-amber-950 dark:text-amber-200">c. Siapa Pelaku Produksi (Who)</div>
              <p class="text-slate-600 dark:text-slate-300">Menentukan kelembagaan pelaku: Pemerintah (BUMN), Swasta (BUMS), Koperasi, atau UMKM.</p>
            </div>
            <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1">
              <div class="font-bold text-emerald-950 dark:text-emerald-200">d. Untuk Siapa Diproduksi (For Whom)</div>
              <p class="text-slate-600 dark:text-slate-300">Sasaran konsumen pengguna dan pemerataan pembagian pendapatan nasional.</p>
            </div>
          </div>
        </div>

        <div class="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-xs md:text-sm space-y-2">
          <div class="font-bold text-rose-950 dark:text-rose-200 text-base">3. Hubungan Masalah Ekonomi dan Kesempatan Kerja</div>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
            Angkatan kerja bertambah setiap tahun. Jika kapasitas produksi dan investasi tidak tumbuh secepat angkatan kerja, timbul pengangguran. Di negara berpenduduk besar seperti Indonesia, pemilihan teknik <strong>padat karya (How)</strong> sangat penting untuk menyerap tenaga kerja dan menjaga daya beli masyarakat.
          </p>
        </div>
      </div>
    `
  },
  {
    id: "b2-m2",
    number: "Bagian 2",
    title: "Pelaku-Pelaku Ekonomi (RTP, RTK, RTN & Masyarakat Luar Negeri)",
    subtitle: "Peran Rumah Tangga Produksi, Rumah Tangga Konsumsi (4 Faktor Produksi & 4 Imbalan), Rumah Tangga Negara, dan Masyarakat Ekonomi Luar Negeri",
    color: "emerald",
    gradient: "from-emerald-600 via-teal-600 to-green-700",
    readTime: "20 Menit",
    subtopics: [
      "1. RTP (Perusahaan): Produsen, Pengguna Input, Agen Pembangunan",
      "2. RTK (Konsumen): Pemakai Barang & Pemasok 4 Faktor Produksi",
      "Empat Faktor Produksi & Empat Imbalan RTK (Sewa, Upah, Bunga, Laba)",
      "3. RTN (Pemerintah): Pengatur, Konsumen, Produsen (BUMN)",
      "4. Masyarakat Luar Negeri: Perdagangan, Tenaga Kerja, Modal, Pinjaman, Bantuan"
    ],
    contentHtml: `
      <div class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
          <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800 shadow-sm space-y-2">
            <h5 class="font-bold text-emerald-950 dark:text-emerald-200 text-base">1. Rumah Tangga Produksi / Perusahaan (RTP)</h5>
            <ul class="space-y-1 list-disc pl-4 text-slate-600 dark:text-slate-300">
              <li><strong>Sebagai Produsen:</strong> Menghasilkan barang dan jasa siap pakai di pasar output.</li>
              <li><strong>Pengguna Faktor Produksi:</strong> Menyerap tanah, tenaga kerja, modal, dan skill dari RTK di pasar input.</li>
              <li><strong>Agen Pembangunan:</strong> Membuka lapangan kerja, inovasi teknologi, CSR, dan membayar pajak.</li>
            </ul>
          </div>

          <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-blue-200 dark:border-blue-800 shadow-sm space-y-2">
            <h5 class="font-bold text-blue-950 dark:text-blue-200 text-base">2. Rumah Tangga Konsumsi / Keluarga (RTK)</h5>
            <ul class="space-y-1 list-disc pl-4 text-slate-600 dark:text-slate-300">
              <li><strong>Sebagai Konsumen:</strong> Membeli barang/jasa di pasar output dengan uang belanjanya.</li>
              <li><strong>Sebagai Pemasok Input:</strong> Menawarkan 4 faktor produksi kepada perusahaan di pasar input.</li>
            </ul>
          </div>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
          <table class="w-full text-left border-collapse text-xs md:text-sm bg-white dark:bg-slate-900">
            <thead>
              <tr class="bg-blue-700 text-white">
                <th class="p-3">No</th>
                <th class="p-3">Faktor Produksi yang Diserahkan RTK</th>
                <th class="p-3">Balas Jasa / Imbalan yang Diterima RTK</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
              <tr>
                <td class="p-3 font-bold">1</td>
                <td class="p-3">Tanah (Faktor Alam / Land)</td>
                <td class="p-3 font-bold text-emerald-600 dark:text-emerald-400">Sewa Tanah (Rent)</td>
              </tr>
              <tr>
                <td class="p-3 font-bold">2</td>
                <td class="p-3">Tenaga Kerja (Labor)</td>
                <td class="p-3 font-bold text-indigo-600 dark:text-indigo-400">Upah atau Gaji (Wage / Salary)</td>
              </tr>
              <tr>
                <td class="p-3 font-bold">3</td>
                <td class="p-3">Modal (Capital)</td>
                <td class="p-3 font-bold text-amber-600 dark:text-amber-400">Bunga Modal (Interest)</td>
              </tr>
              <tr>
                <td class="p-3 font-bold">4</td>
                <td class="p-3">Keahlian / Kewirausahaan (Skill / Entrepreneurship)</td>
                <td class="p-3 font-bold text-rose-600 dark:text-rose-400">Laba / Keuntungan Usaha (Profit)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
          <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-amber-200 dark:border-amber-800 shadow-sm space-y-2">
            <h5 class="font-bold text-amber-950 dark:text-amber-200 text-base">3. Rumah Tangga Negara / Pemerintah (RTN)</h5>
            <p>• <strong>Pengatur (Regulator):</strong> Menerbitkan UU, kebijakan fiskal/moneter, upah minimum, pajak & subsidi.</p>
            <p>• <strong>Konsumen:</strong> Belanja barang kantor, kendaraan dinas, komputer, dan menggaji ASN/TNI/Polri.</p>
            <p>• <strong>Produsen:</strong> Mengelola cabang produksi vital melalui BUMN (PLN, Pertamina, KAI, PDAM).</p>
          </div>

          <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-rose-200 dark:border-rose-800 shadow-sm space-y-2">
            <h5 class="font-bold text-rose-950 dark:text-rose-200 text-base">4. Masyarakat Ekonomi Luar Negeri (MLN)</h5>
            <p>1. Perdagangan (Ekspor & Impor barang/jasa).</p>
            <p>2. Pertukaran Tenaga Kerja (TKI/PMI & tenaga ahli asing).</p>
            <p>3. Penanaman Modal Asing (Investasi / FDI pabrik baru).</p>
            <p>4. Pinjaman Luar Negeri (Kredit lunak pembangunan Bank Dunia/ADB).</p>
            <p>5. Bantuan Kemanusiaan (Hibah/grant saat bencana alam).</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "b2-m3",
    number: "Bagian 3",
    title: "Gambar & Analisis Arus Lingkar Kegiatan Ekonomi (Circular Flow)",
    subtitle: "Memahami alur Pasar Output dan Pasar Input pada Gambar Arus Lingkar Kegiatan Ekonomi Tiga Sektor (Tertutup) dan Empat Sektor (Terbuka)",
    color: "cyan",
    gradient: "from-cyan-600 via-sky-600 to-indigo-700",
    readTime: "18 Menit",
    subtopics: [
      "Pasar Output (Barang/Jasa) vs Pasar Input (Faktor Produksi)",
      "Diagram Tiga Sektor: RTK, RTP, dan RTN (Perekonomian Tertutup)",
      "Diagram Empat Sektor: RTK, RTP, RTN, dan Masyarakat Luar Negeri (Perekonomian Terbuka)"
    ],
    contentHtml: `
      <div class="space-y-6 text-xs md:text-sm">
        <p class="text-slate-700 dark:text-slate-300 leading-relaxed">
          <strong>Circular Flow Diagram</strong> menggambarkan aliran timbal balik barang/jasa (arus riil) dan uang/pembayaran (arus moneter) antar pelaku ekonomi melalui dua pasar:
          <br>• <strong>Pasar Output:</strong> RTP menjual barang/jasa kepada RTK, Pemerintah, dan Luar Negeri.
          <br>• <strong>Pasar Input:</strong> RTK menawarkan tanah, tenaga kerja, modal, dan keahlian kepada RTP, Pemerintah, dan Luar Negeri.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-5 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-2">
            <div class="font-bold text-indigo-950 dark:text-indigo-200 text-base">Diagram 3 Sektor (Ekonomi Tertutup)</div>
            <p>Melibatkan 3 pelaku domestik: <strong>RTK, RTP, dan Pemerintah (RTN)</strong> tanpa transaksi luar negeri.</p>
            <p>• RTK membayar pajak individu dan RTP membayar pajak badan ke Pemerintah.</p>
            <p>• Pemerintah membalas dengan memberikan subsidi, fasilitas jalan/jembatan, belanja barang, dan gaji pegawai.</p>
          </div>

          <div class="p-5 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 space-y-2">
            <div class="font-bold text-rose-950 dark:text-rose-200 text-base">Diagram 4 Sektor (Ekonomi Terbuka)</div>
            <p>Melibatkan 4 pelaku lengkap: <strong>RTK, RTP, RTN, dan Masyarakat Luar Negeri</strong>.</p>
            <p>• <strong>Ekspor:</strong> Mengalirkan barang/jasa keluar negeri dan mendatangkan aliran uang masuk berupa <strong>Devisa</strong>.</p>
            <p>• <strong>Impor:</strong> Memasukkan barang/teknologi dari luar negeri dan mengeluarkan pembayaran devisa ke luar negeri.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "b2-m4",
    number: "Bagian 4",
    title: "Sistem Ekonomi Tradisional & Terpusat/Komando",
    subtitle: "Pengertian sistem ekonomi serta analisis lengkap ciri, sisi positif, sisi negatif, dan cara memecahkan masalah pada Sistem Tradisional dan Komando",
    color: "amber",
    gradient: "from-amber-600 via-orange-600 to-red-700",
    readTime: "18 Menit",
    subtopics: [
      "Pengertian Sistem Ekonomi",
      "Sistem Ekonomi Tradisional: Ciri, Positif, Negatif, Solusi Masalah",
      "Sistem Ekonomi Terpusat/Komando: Ciri, Positif, Negatif, Solusi Masalah"
    ],
    contentHtml: `
      <div class="space-y-6 text-xs md:text-sm">
        <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
          <strong>Sistem Ekonomi</strong> adalah perangkat kelembagaan, aturan, dan mekanisme yang digunakan suatu negara untuk mengoordinasikan kegiatan produksi, distribusi, dan konsumsi demi memecahkan masalah pokok ekonomi.
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800 shadow-sm space-y-2">
            <h5 class="font-bold text-emerald-950 dark:text-emerald-200 text-base">1. Sistem Ekonomi Tradisional</h5>
            <p>• <strong>Ciri:</strong> Berbasis adat istiadat, alat sederhana, barter, produksi untuk konsumsi sendiri.</p>
            <p>• <strong>Positif:</strong> Gotong royong erat, alam lestari, tidak ada persaingan sikut-sikutan.</p>
            <p>• <strong>Negatif:</strong> Produktivitas rendah, mutu terbatas, lambat menerima inovasi teknologi.</p>
            <p>• <strong>Pemecahan Masalah:</strong> Mengikuti kebiasaan tradisi turun-temurun leluhur.</p>
          </div>

          <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-rose-200 dark:border-rose-800 shadow-sm space-y-2">
            <h5 class="font-bold text-rose-950 dark:text-rose-200 text-base">2. Sistem Ekonomi Terpusat / Komando</h5>
            <p>• <strong>Ciri:</strong> Seluruh alat produksi milik negara, hak milik pribadi dibatasi, harga diatur pusat.</p>
            <p>• <strong>Positif:</strong> Pemerintah mudah kendalikan inflasi/pengangguran, distribusi lebih merata.</p>
            <p>• <strong>Negatif:</strong> Mematikan inisiatif & daya kreasi individu, birokrasi kaku, monopoli mutlak negara.</p>
            <p>• <strong>Pemecahan Masalah:</strong> Ditentukan sepenuhnya oleh Pemerintah Pusat melalui Badan Perencana Negara.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "b2-m5",
    number: "Bagian 5",
    title: "Sistem Ekonomi Pasar (Liberal) & Sistem Ekonomi Campuran",
    subtitle: "Analisis lengkap ciri, sisi positif, sisi negatif, dan cara memecahkan masalah ekonomi pada Sistem Ekonomi Pasar dan Sistem Ekonomi Campuran",
    color: "violet",
    gradient: "from-violet-600 via-purple-600 to-indigo-700",
    readTime: "18 Menit",
    subtopics: [
      "Sistem Ekonomi Pasar (Liberal/Kapitalis): Ciri, Positif, Negatif, Solusi Masalah",
      "Sistem Ekonomi Campuran: Ciri, Positif, Negatif, Solusi Masalah"
    ],
    contentHtml: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
        <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-blue-200 dark:border-blue-800 shadow-sm space-y-2">
          <h5 class="font-bold text-blue-950 dark:text-blue-200 text-base">3. Sistem Ekonomi Pasar (Liberal / Kapitalis)</h5>
          <p>• <strong>Ciri:</strong> Kebebasan penuh swasta, hak milik diakui bebas, motif laba, persaingan terbuka, semboyan <em>Laissez-Faire</em>.</p>
          <p>• <strong>Positif:</strong> Inovasi dan efisiensi sangat tinggi, produk beragam & bermutu tinggi.</p>
          <p>• <strong>Negatif:</strong> Ketimpangan pendapatan tajam, monopoli swasta yang mematikan usaha kecil, rentan krisis.</p>
          <p>• <strong>Pemecahan Masalah:</strong> Diselesaikan melalui Mekanisme Harga Pasar (Permintaan & Penawaran / The Invisible Hand).</p>
        </div>

        <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-purple-200 dark:border-purple-800 shadow-sm space-y-2">
          <h5 class="font-bold text-purple-950 dark:text-purple-200 text-base">4. Sistem Ekonomi Campuran (Mixed Economy)</h5>
          <p>• <strong>Ciri:</strong> Perpaduan pasar dan komando; swasta bebas berusaha, sektor vital dikuasai negara (BUMN), pemerintah mengoreksi pasar.</p>
          <p>• <strong>Positif:</strong> Hak individu diakui, monopoli swasta dicegah, rakyat lemah dilindungi subsidi.</p>
          <p>• <strong>Negatif:</strong> Sulit menentukan batas ideal porsi negara vs swasta.</p>
          <p>• <strong>Pemecahan Masalah:</strong> Sektor strategis oleh Pemerintah (BUMN), komersial oleh Swasta di bawah pengawasan regulasi.</p>
        </div>
      </div>
    `
  },
  {
    id: "b2-m6",
    number: "Bagian 6",
    title: "Sistem Ekonomi Pancasila (Demokrasi Ekonomi Indonesia)",
    subtitle: "Pengertian Sistem Ekonomi Pancasila, nilai 5 Sila Pancasila, landasan konstitusional Pasal 33 UUD 1945, ciri positif, serta 3 ciri negatif yang harus dihindari",
    color: "rose",
    gradient: "from-rose-600 via-red-600 to-amber-600",
    readTime: "20 Menit",
    subtopics: [
      "Pengertian Sistem Demokrasi Ekonomi Pancasila",
      "Aktualisasi Nilai 5 Sila Pancasila dalam Ekonomi",
      "Pasal 33 UUD NRI Tahun 1945 (Ayat 1 - 4)",
      "Tiga Pilar Usaha: BUMN/BUMD, Koperasi, BUMS",
      "3 Ciri Negatif Wajib Dihindari: Free Fight Liberalism, Etatisme, Monopoli"
    ],
    contentHtml: `
      <div class="space-y-6 text-xs md:text-sm">
        <div class="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
          <strong>Sistem Ekonomi Pancasila (Demokrasi Ekonomi):</strong> Sistem ekonomi khas Indonesia yang dijiwai ideologi Pancasila dan berlandaskan konstitusi Pasal 33 UUD NRI 1945, di mana produksi dilakukan <em>oleh semua, untuk semua, di bawah pengawasan masyarakat</em> dengan asas <strong>kekeluargaan</strong>.
        </div>

        <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2">
          <div class="font-bold text-slate-900 dark:text-white text-base">Landasan Konstitusional Pasal 33 UUD 1945:</div>
          <p>• <strong>Ayat (1):</strong> Perekonomian disusun sebagai usaha bersama berdasar atas asas kekeluargaan (Koperasi sebagai sokoguru).</p>
          <p>• <strong>Ayat (2):</strong> Cabang-cabang produksi yang penting bagi negara dan menguasai hajat hidup orang banyak dikuasai oleh negara (BUMN/BUMD).</p>
          <p>• <strong>Ayat (3):</strong> Bumi, air, dan kekayaan alam yang terkandung di dalamnya dikuasai oleh negara untuk sebesar-besar kemakmuran rakyat.</p>
          <p>• <strong>Ayat (4):</strong> Perekonomian diselenggarakan berdasar demokrasi ekonomi dengan prinsip kebersamaan, efisiensi berkeadilan, dan berkelanjutan.</p>
        </div>

        <div class="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 space-y-2">
          <div class="font-bold text-rose-950 dark:text-rose-200 text-base">🚫 3 Ciri Negatif yang WAJIB Dihindari dalam Ekonomi Indonesia:</div>
          <p>1. <strong>Free Fight Liberalism:</strong> Persaingan bebas liar yang saling menindas dan mengeksploitasi pihak lemah.</p>
          <p>2. <strong>Etatisme:</strong> Keadaan negara dominan mutlak yang mematikan daya kreasi dan inisiatif swasta/koperasi masyarakat.</p>
          <p>3. <strong>Monopoli Terpusat:</strong> Pemusatan kekuatan ekonomi pada satu kelompok usaha yang merugikan rakyat luas.</p>
        </div>
      </div>
    `
  }
];

export const BAB2_SISTEM_EKONOMI: SistemEkonomi[] = [
  {
    id: "tradisional",
    name: "1. Sistem Ekonomi Tradisional",
    badge: "Berbasis Adat & Kebiasaan Leluhur",
    color: "#059669",
    ciri: "• Teknik produksi masih sangat sederhana dan diwariskan turun-temurun.\n• Belum ada pembagian kerja yang tegas.\n• Pertukaran masih menggunakan sistem barter.\n• Produksi hanya untuk memenuhi kebutuhan sendiri.",
    positif: "• Semangat kekeluargaan dan gotong royong sangat tinggi.\n• Kelestarian alam terjaga tanpa eksploitasi berlebih.\n• Tidak ada persaingan curang antarwarga.",
    negatif: "• Produktivitas dan mutu barang sangat rendah.\n• Lambat menerima inovasi teknologi.\n• Standar kemakmuran masyarakat stagnan.",
    solusi: "• What: Komoditas pangan pokok sesuai alam lokal.\n• How: Alat sederhana warisan leluhur secara gotong royong.\n• Who: Keluarga dan komunitas desa adat.\n• For Whom: Untuk konsumsi keluarga dan warga komunitas sendiri."
  },
  {
    id: "komando",
    name: "2. Sistem Ekonomi Terpusat / Komando",
    badge: "Kendali Mutlak Pemerintah Pusat",
    color: "#dc2626",
    ciri: "• Seluruh alat dan sumber daya produksi dikuasai negara.\n• Hak milik pribadi atas faktor produksi tidak diakui.\n• Jenis pekerjaan, kuota, dan harga ditentukan pusat.",
    positif: "• Pemerintah mudah mengendalikan inflasi dan pengangguran.\n• Distribusi pendapatan dan kebutuhan pokok relatif merata.\n• Jarang terjadi krisis spekulasi pasar.",
    negatif: "• Mematikan inisiatif, kreativitas, dan inovasi individu.\n• Birokrasi perencanaan pusat kaku dan sering lambat.\n• Terjadi monopoli mutlak oleh negara.",
    solusi: "• What: Ditentukan oleh Badan Perencanaan Negara.\n• How: Ditetapkan lewat kuota dan teknologi pabrik negara.\n• Who: Negara / BUMN.\n• For Whom: Dibagikan kepada warga sesuai jatah resmi."
  },
  {
    id: "pasar",
    name: "3. Sistem Ekonomi Pasar (Liberal/Kapitalis)",
    badge: "Kebebasan Swasta & Mekanisme Harga",
    color: "#2563eb",
    ciri: "• Semua sumber daya bebas dimiliki individu/swasta.\n• Berlaku mekanisme harga pasar (The Invisible Hand).\n• Motif utama mencari laba sebesar-besarnya (profit motive).\n• Peran pemerintah sangat minimal.",
    positif: "• Menumbuhkan inisiatif, kreativitas, dan inovasi tinggi.\n• Efisiensi optimal dan kualitas barang beragam.\n• Bebas memilih pekerjaan dan bidang usaha.",
    negatif: "• Menimbulkan jurang ketimpangan tajam (kaya vs miskin).\n• Munculnya monopoli swasta yang mematikan usaha kecil.\n• Eksploitasi buruh dan alam demi laba.",
    solusi: "• What: Ditentukan oleh permintaan konsumen yang memberi laba tertinggi.\n• How: Dipilih teknik paling efisien oleh produsen swasta.\n• Who: Perusahaan swasta (BUMS).\n• For Whom: Untuk konsumen yang memiliki daya beli."
  },
  {
    id: "campuran",
    name: "4. Sistem Ekonomi Campuran",
    badge: "Sinergi Swasta & Intervensi Negara",
    color: "#7c3aed",
    ciri: "• Swasta bebas berusaha, namun sektor vital dikuasai negara.\n• Pemerintah mengoreksi pasar lewat pajak, subsidi, dan regulasi antimonopoli.",
    positif: "• Kreativitas swasta berkembang namun monopoli dicegah.\n• Kestabilan ekonomi terjaga lewat kebijakan fiskal/moneter.\n• Rakyat kurang mampu dilindungi subsidi & bansos.",
    negatif: "• Sulit menentukan batas ideal porsi negara vs swasta.\n• Risiko kolusi antara oknum birokrasi dan pengusaha.",
    solusi: "• What: Barang publik oleh negara; barang komersial oleh swasta.\n• How: Standar K3/lingkungan oleh negara; teknis oleh swasta.\n• Who: BUMN dan BUMS bermitra.\n• For Whom: Seluruh rakyat melalui pasar yang diawasi."
  },
  {
    id: "pancasila",
    name: "5. Sistem Ekonomi Pancasila (Indonesia)",
    badge: "Demokrasi Ekonomi • Pasal 33 UUD 1945",
    color: "#d97706",
    ciri: "• Berlandaskan 5 Sila Pancasila dan Pasal 33 UUD 1945.\n• Perekonomian disusun atas asas kekeluargaan (Koperasi).\n• Cabang vital dan SDA dikuasai negara untuk kemakmuran rakyat.\n• Menolak Free Fight Liberalism, Etatisme, dan Monopoli.",
    positif: "• Mengutamakan kemakmuran bersama, bukan orang-seorang.\n• Bermoral religius, manusiawi, dan cinta produk nasional.\n• Sinergi harmonis: BUMN, Koperasi, dan BUMS.",
    negatif: "• Tantangan jika terjadi penyimpangan birokrasi atau korupsi.",
    solusi: "• What: Barang strategis dijamin negara; komersial oleh swasta/koperasi.\n• How: Efisiensi berkeadilan, ramah lingkungan, berdayakan warga.\n• Who: Tiga pilar — BUMN, Koperasi (sokoguru), dan BUMS.\n• For Whom: Sebesar-besar kemakmuran seluruh rakyat Indonesia."
  }
];

export const BAB2_FLASHCARDS: Flashcard[] = [
  { term: "Masalah Ekonomi Klasik", category: "Bagian 1", def: "Terdiri atas 3 masalah utama: (1) Produksi, (2) Distribusi, dan (3) Konsumsi demi mencapai kemakmuran." },
  { term: "Masalah Ekonomi Modern", category: "Bagian 1", def: "Terdiri atas 4 pertanyaan: Apa (What), Bagaimana (How), Siapa pelaku produksi (Who), dan Untuk siapa (For Whom)." },
  { term: "Padat Karya vs Padat Modal", category: "Bagian 1", def: "Padat Karya mengutamakan tenaga manusia (menyerap tenaga kerja); Padat Modal mengutamakan mesin otomatis." },
  { term: "3 Peran RTP (Perusahaan)", category: "Bagian 2", def: "Perusahaan berperan sebagai: (1) Produsen, (2) Pengguna faktor produksi, dan (3) Agen pembangunan." },
  { term: "2 Peran RTK (Konsumen)", category: "Bagian 2", def: "(1) Konsumen barang/jasa di pasar output, dan (2) Pemasok/pemilik 4 faktor produksi di pasar input." },
  { term: "4 Faktor Produksi & Imbalan RTK", category: "Bagian 2", def: "Tanah → Sewa (Rent); Tenaga Kerja → Upah/Gaji; Modal → Bunga; Keahlian/Skill → Laba (Profit)." },
  { term: "3 Peran RTN (Pemerintah)", category: "Bagian 2", def: "Pemerintah berperan sebagai: (1) Pengatur/Regulator, (2) Konsumen, dan (3) Produsen (BUMN/BUMD)." },
  { term: "5 Peran Masyarakat Luar Negeri", category: "Bagian 2", def: "Perdagangan (ekspor-impor), pertukaran tenaga kerja, investasi (PMA), pinjaman, dan bantuan/hibah." },
  { term: "Pasar Output vs Pasar Input", category: "Bagian 3", def: "Pasar Output memperjualbelikan barang/jasa jadi; Pasar Input memperjualbelikan faktor-faktor produksi." },
  { term: "Circular Flow 3 vs 4 Sektor", category: "Bagian 3", def: "3 Sektor (Tertutup): RTK, RTP, RTN. 4 Sektor (Terbuka): RTK, RTP, RTN, dan Masyarakat Luar Negeri (Ekspor-Impor)." },
  { term: "Sistem Ekonomi Tradisional", category: "Bagian 4", def: "Berbasis tradisi leluhur, alat sederhana, produksi untuk sendiri, dan masih menggunakan barter." },
  { term: "Sistem Ekonomi Terpusat/Komando", category: "Bagian 4", def: "Seluruh faktor produksi dikuasai negara; hak milik dan inisiatif pribadi dibatasi." },
  { term: "Sistem Ekonomi Pasar (Liberal)", category: "Bagian 5", def: "Alokasi sumber daya diserahkan sepenuhnya pada mekanisme harga pasar (permintaan & penawaran) dan kebebasan swasta." },
  { term: "Sistem Ekonomi Campuran", category: "Bagian 5", def: "Perpaduan sistem pasar dan komando: swasta bebas berusaha, sektor vital dikuasai negara." },
  { term: "Sistem Ekonomi Pancasila", category: "Bagian 6", def: "Demokrasi ekonomi Indonesia berdasar Pancasila dan Pasal 33 UUD 1945 berasaskan kekeluargaan (BUMN, Koperasi, BUMS)." },
  { term: "Free Fight Liberalism, Etatisme, Monopoli", category: "Bagian 6", def: "3 ciri negatif yang wajib dihindari: persaingan bebas saling mematikan, dominasi negara mutlak, dan pemusatan monopoli." }
];
