import { ModuleTopic, MCQQuestion, EssayQuestion, UtilityType, Flashcard } from '../types';

export const BAB1_MODULES: ModuleTopic[] = [
  {
    id: "b1-m1",
    number: "Bagian 1",
    title: "Kelangkaan (Scarcity) sebagai Inti Masalah Ekonomi",
    subtitle: "Pengertian kelangkaan, dua makna utama keterbatasan sumber daya, penyebab kelangkaan, dan strategi mengatasinya",
    color: "emerald",
    gradient: "from-emerald-600 via-teal-600 to-cyan-700",
    readTime: "14 Menit",
    subtopics: [
      "Tujuan Pembelajaran Bab 1",
      "Pengertian Kelangkaan (Scarcity)",
      "Makna 1: Terbatas karena Tidak Cukup Dibandingkan Kebutuhan Manusia",
      "Makna 2: Terbatas karena Manusia Harus Melakukan Pengorbanan",
      "Faktor Penyebab & Cara Mengatasi Kelangkaan"
    ],
    svgBanner: `<svg viewBox="0 0 800 280" class="w-full h-auto rounded-2xl shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ebg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#064e3b"/>
          <stop offset="50%" stop-color="#0f766e"/>
          <stop offset="100%" stop-color="#1e3a8a"/>
        </linearGradient>
      </defs>
      <rect width="800" height="280" rx="20" fill="url(#ebg1)"/>
      <circle cx="710" cy="50" r="100" fill="#34d399" opacity="0.12"/>
      <circle cx="80" cy="230" r="90" fill="#38bdf8" opacity="0.12"/>
      <text x="400" y="36" text-anchor="middle" fill="#fde047" font-family="Inter, sans-serif" font-size="15" font-weight="bold">INTI MASALAH EKONOMI: KETIMPANGAN KEBUTUHAN vs SUMBER DAYA</text>
      <polygon points="385,245 415,245 400,145" fill="#94a3b8"/>
      <rect x="335" y="242" width="130" height="12" rx="6" fill="#cbd5e1"/>
      <line x1="165" y1="175" x2="635" y2="115" stroke="#fbbf24" stroke-width="6" stroke-linecap="round"/>
      <circle cx="400" cy="145" r="12" fill="#f59e0b" stroke="#ffffff" stroke-width="2.5"/>
      <line x1="165" y1="175" x2="125" y2="215" stroke="#cbd5e1" stroke-width="2"/>
      <line x1="165" y1="175" x2="205" y2="215" stroke="#cbd5e1" stroke-width="2"/>
      <rect x="45" y="95" width="235" height="122" rx="14" fill="#881337" fill-opacity="0.9" stroke="#fb7185" stroke-width="2"/>
      <text x="162" y="122" text-anchor="middle" fill="#fecdd3" font-family="Inter, sans-serif" font-size="13" font-weight="bold">KEBUTUHAN MANUSIA</text>
      <text x="162" y="142" text-anchor="middle" fill="#fde047" font-family="Inter, sans-serif" font-size="13.5" font-weight="800">TIDAK TERBATAS (∞)</text>
      <text x="162" y="166" text-anchor="middle" fill="#ffe4e6" font-family="Inter, sans-serif" font-size="10.5">• Selalu bertambah & beragam</text>
      <text x="162" y="184" text-anchor="middle" fill="#ffe4e6" font-family="Inter, sans-serif" font-size="10.5">• Dipengaruhi peradaban & budaya</text>
      <text x="162" y="202" text-anchor="middle" fill="#ffe4e6" font-family="Inter, sans-serif" font-size="10.5">• Sifat alami manusia ingin lebih</text>
      <line x1="635" y1="115" x2="595" y2="155" stroke="#cbd5e1" stroke-width="2"/>
      <line x1="635" y1="115" x2="675" y2="155" stroke="#cbd5e1" stroke-width="2"/>
      <rect x="520" y="55" width="235" height="122" rx="14" fill="#065f46" fill-opacity="0.92" stroke="#34d399" stroke-width="2"/>
      <text x="637" y="82" text-anchor="middle" fill="#a7f3d0" font-family="Inter, sans-serif" font-size="13" font-weight="bold">SUMBER DAYA EKONOMI</text>
      <text x="637" y="102" text-anchor="middle" fill="#fde047" font-family="Inter, sans-serif" font-size="13.5" font-weight="800">TERBATAS / LANGKA</text>
      <text x="637" y="126" text-anchor="middle" fill="#ecfdf5" font-family="Inter, sans-serif" font-size="10.5">1. Jumlahnya tidak cukup</text>
      <text x="637" y="144" text-anchor="middle" fill="#ecfdf5" font-family="Inter, sans-serif" font-size="10.5">2. Butuh PENGORBANAN (Biaya)</text>
      <text x="637" y="162" text-anchor="middle" fill="#6ee7b7" font-family="Inter, sans-serif" font-size="10.5" font-weight="bold">→ Melahirkan Pilihan & Biaya Peluang</text>
    </svg>`,
    contentHtml: `
      <div class="space-y-6">
        <div class="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 border-l-4 border-emerald-600 p-5 rounded-r-2xl">
          <h4 class="text-base md:text-lg font-bold text-emerald-950 dark:text-emerald-200 mb-2">🎯 Tujuan Pembelajaran Bab 1</h4>
          <p class="text-xs md:text-sm text-slate-700 dark:text-slate-300 mb-2">Setelah mempelajari modul ini, siswa diharapkan mampu:</p>
          <ol class="text-xs md:text-sm text-slate-700 dark:text-slate-300 space-y-1 list-decimal pl-5 font-medium">
            <li>Membedakan dan mengidentifikasikan <strong>kebutuhan</strong> dan <strong>benda pemuas kebutuhan</strong>.</li>
            <li>Memahami <strong>faktor-faktor yang memengaruhi kebutuhan</strong> dan benda pemuas kebutuhan.</li>
            <li>Memahami klasifikasi dan kegunaan <strong>benda-benda pemuas kebutuhan</strong>.</li>
            <li>Memahami <strong>kelangkaan sumber daya ekonomi</strong> serta kaitannya dengan kebutuhan manusia yang tidak terbatas.</li>
            <li>Melakukan <strong>perhitungan biaya peluang (opportunity cost)</strong> secara tepat dalam pengambilan keputusan ekonomi.</li>
          </ol>
        </div>

        <div>
          <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2">1. Pengertian Kelangkaan (Scarcity)</h4>
          <p class="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            Dalam ilmu ekonomi, <strong>kelangkaan (scarcity)</strong> adalah kondisi di mana <strong>kebutuhan manusia yang tidak terbatas</strong> dihadapkan pada <strong>alat pemuas kebutuhan (sumber daya ekonomi) yang jumlahnya terbatas</strong>. Kelangkaan merupakan <em>inti masalah ekonomi</em> yang memaksa setiap individu, perusahaan, dan negara untuk menentukan pilihan (<em>choice</em>) serta menyusun skala prioritas.
          </p>

          <h5 class="font-bold text-emerald-900 dark:text-emerald-300 text-sm md:text-base mb-3">Dua Makna Utama Kata "Terbatas" dalam Konsep Kelangkaan:</h5>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border-2 border-emerald-200 dark:border-emerald-800 shadow-sm">
              <div class="flex items-center gap-2.5 mb-2">
                <span class="w-8 h-8 rounded-xl bg-emerald-600 text-white font-extrabold text-sm flex items-center justify-center">01</span>
                <h6 class="font-bold text-emerald-950 dark:text-emerald-200 text-sm md:text-base">Terbatas dalam Kuantitas (Tidak Cukup)</h6>
              </div>
              <p class="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Sumber daya ekonomi dikatakan terbatas dalam artian jumlahnya tidak cukup dibandingkan dengan banyaknya kebutuhan manusia yang terus bertambah dari waktu ke waktu.
              </p>
            </div>

            <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border-2 border-teal-200 dark:border-teal-800 shadow-sm">
              <div class="flex items-center gap-2.5 mb-2">
                <span class="w-8 h-8 rounded-xl bg-teal-600 text-white font-extrabold text-sm flex items-center justify-center">02</span>
                <h6 class="font-bold text-teal-950 dark:text-teal-200 text-sm md:text-base">Terbatas karena Butuh Pengorbanan</h6>
              </div>
              <p class="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                Manusia harus melakukan pengorbanan berupa uang (harga), waktu, tenaga fisik, maupun pikiran untuk memperolehnya (tidak tersedia gratis tanpa usaha).
              </p>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-2xl p-5">
            <h5 class="font-bold text-rose-950 dark:text-rose-200 text-sm md:text-base mb-2.5">⚠️ Faktor-Faktor Penyebab Kelangkaan</h5>
            <ul class="text-xs md:text-sm text-slate-700 dark:text-slate-300 space-y-2 list-disc pl-4">
              <li><strong>Pertumbuhan Penduduk:</strong> Menurut Malthus, penduduk bertambah deret ukur (1, 2, 4, 8, 16), pangan deret hitung (1, 2, 3, 4, 5).</li>
              <li><strong>Keterbatasan Kemampuan Produksi:</strong> Mesin dan teknologi pengolahan belum merata.</li>
              <li><strong>Perbedaan Letak Geografis:</strong> Sebaran sumber daya alam tidak merata antardaerah.</li>
              <li><strong>Bencana Alam & Kerusakan:</strong> Kerusakan ekosistem mempercepat habisnya cadangan SDA.</li>
            </ul>
          </div>

          <div class="bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 rounded-2xl p-5">
            <h5 class="font-bold text-sky-950 dark:text-sky-200 text-sm md:text-base mb-2.5">💡 Strategi Mengatasi Kelangkaan</h5>
            <ul class="text-xs md:text-sm text-slate-700 dark:text-slate-300 space-y-2 list-disc pl-4">
              <li><strong>Menyusun Skala Prioritas:</strong> Mendahulukan kebutuhan vital & mendesak terlebih dahulu.</li>
              <li><strong>Efisiensi & Penghematan:</strong> Menghindari pemborosan energi, air, dan bahan pangan.</li>
              <li><strong>Mengembangkan Energi Alternatif (Substitusi):</strong> Transisi menuju energi terbarukan.</li>
              <li><strong>Inovasi Teknologi & Daur Ulang:</strong> Menerapkan konsep 3R (Reduce, Reuse, Recycle).</li>
            </ul>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "b1-m2",
    number: "Bagian 2",
    title: "Kelangkaan, Biaya Langsung & Perhitungan Biaya Peluang",
    subtitle: "Memahami perbedaan biaya langsung (eksplisit) dan biaya peluang (implisit/opportunity cost) beserta rumus dan contoh kasus perhitungannya",
    color: "indigo",
    gradient: "from-indigo-600 via-blue-600 to-violet-700",
    readTime: "18 Menit",
    subtopics: [
      "Hubungan Kelangkaan, Pilihan (Choice), dan Biaya Peluang",
      "Pengertian & Contoh Biaya Langsung (Explicit / Direct Cost)",
      "Pengertian & Konsep Biaya Peluang (Opportunity Cost)",
      "Rumus Perhitungan Biaya Peluang (2 Alternatif & Lebih dari 2 Alternatif)",
      "Perhitungan Laba Akuntansi vs Laba Ekonomi"
    ],
    svgBanner: `<svg viewBox="0 0 800 280" class="w-full h-auto rounded-2xl shadow-inner" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ebg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e1b4b"/>
          <stop offset="50%" stop-color="#312e81"/>
          <stop offset="100%" stop-color="#4c1d95"/>
        </linearGradient>
      </defs>
      <rect width="800" height="280" rx="20" fill="url(#ebg2)"/>
      <text x="400" y="34" text-anchor="middle" fill="#fde047" font-family="Inter, sans-serif" font-size="14.5" font-weight="bold">ALUR KEPUTUSAN EKONOMI: DARI KELANGKAAN MENUJU BIAYA PELUANG</text>
      <rect x="35" y="102" width="145" height="76" rx="14" fill="#3730a3" stroke="#818cf8" stroke-width="2"/>
      <text x="107" y="135" text-anchor="middle" fill="#ffffff" font-family="Inter, sans-serif" font-size="12.5" font-weight="bold">KELANGKAAN</text>
      <text x="107" y="155" text-anchor="middle" fill="#c7d2fe" font-family="Inter, sans-serif" font-size="10.5">Harus Memilih (Choice)</text>
      <path d="M180 140 L245 88" stroke="#fbbf24" stroke-width="3" fill="none"/>
      <path d="M180 140 L245 192" stroke="#f87171" stroke-width="3" stroke-dasharray="5,4" fill="none"/>
      <rect x="250" y="48" width="245" height="84" rx="14" fill="#065f46" stroke="#34d399" stroke-width="2"/>
      <text x="372" y="73" text-anchor="middle" fill="#6ee7b7" font-family="Inter, sans-serif" font-size="12" font-weight="bold">✓ ALTERNATIF YANG DIPILIH</text>
      <text x="372" y="93" text-anchor="middle" fill="#ffffff" font-family="Inter, sans-serif" font-size="11">Menimbulkan BIAYA LANGSUNG</text>
      <text x="372" y="112" text-anchor="middle" fill="#a7f3d0" font-family="Inter, sans-serif" font-size="10">(Uang nyata yang dibayarkan)</text>
      <rect x="250" y="152" width="245" height="84" rx="14" fill="#881337" stroke="#fb7185" stroke-width="2"/>
      <text x="372" y="177" text-anchor="middle" fill="#fda4af" font-family="Inter, sans-serif" font-size="12" font-weight="bold">✕ ALTERNATIF TERBAIK DIKORBANKAN</text>
      <text x="372" y="197" text-anchor="middle" fill="#fde047" font-family="Inter, sans-serif" font-size="11.5" font-weight="bold">= BIAYA PELUANG (Opportunity Cost)</text>
      <text x="372" y="216" text-anchor="middle" fill="#ffe4e6" font-family="Inter, sans-serif" font-size="10">(Nilai tertinggi yang dilepas)</text>
      <rect x="520" y="48" width="250" height="188" rx="16" fill="#1e1b4b" stroke="#c084fc" stroke-width="2"/>
      <text x="645" y="75" text-anchor="middle" fill="#f0abfc" font-family="Inter, sans-serif" font-size="13" font-weight="bold">Rumus Penting Biaya Peluang</text>
      <g fill="#f3e8ff" font-family="Inter, sans-serif" font-size="10.5">
        <text x="536" y="102" fill="#fde047" font-weight="bold">1. Jika 2 Pilihan:</text>
        <text x="536" y="118">Nilai pilihan yang TIDAK dipilih.</text>
        <text x="536" y="144" fill="#fde047" font-weight="bold">2. Jika &gt; 2 Pilihan:</text>
        <text x="536" y="160">Nilai TERTINGGI yang dikorbankan</text>
        <text x="536" y="175">(bukan dijumlahkan!).</text>
        <text x="536" y="201" fill="#6ee7b7" font-weight="bold">3. Laba Ekonomi:</text>
        <text x="536" y="217">Pendapatan − (Biaya Langsung + Peluang)</text>
      </g>
    </svg>`,
    contentHtml: `
      <div class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 rounded-2xl p-5">
            <h5 class="font-bold text-blue-950 dark:text-blue-200 text-base mb-2">a. Biaya Langsung (Direct / Explicit Cost)</h5>
            <p class="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              Pengeluaran uang secara nyata (kas) yang benar-benar dibayarkan untuk mendapatkan barang/jasa atau menjalankan kegiatan usaha dan tercatat dalam pembukuan akuntansi.
            </p>
            <div class="bg-white dark:bg-slate-900 p-3 rounded-xl text-xs text-slate-600 dark:text-slate-300 border border-blue-100 dark:border-blue-900">
              <strong>Contoh:</strong> Bayar uang kuliah (UKT), beli bahan baku tepung, bayar gaji karyawan, beli tiket bioskop Rp50.000.
            </div>
          </div>

          <div class="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-5">
            <h5 class="font-bold text-indigo-950 dark:text-indigo-200 text-base mb-2">b. Biaya Peluang (Opportunity Cost)</h5>
            <p class="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-3">
              Nilai dari <strong>alternatif terbaik yang dikorbankan (dilepaskan)</strong> karena seseorang memilih alternatif lain. Tidak selalu berupa uang fisik keluar dari dompet.
            </p>
            <div class="bg-white dark:bg-slate-900 p-3 rounded-xl text-xs text-slate-600 dark:text-slate-300 border border-indigo-100 dark:border-indigo-900">
              <strong>Kaidah Emas:</strong> Jika terdapat lebih dari 2 alternatif yang dikorbankan, biaya peluangnya adalah <strong>SATU nilai tertinggi</strong> (bukan hasil penjumlahan seluruhnya!).
            </div>
          </div>
        </div>

        <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
          <h5 class="font-bold text-slate-900 dark:text-white text-base">Contoh Studi Kasus Perhitungan Biaya Peluang:</h5>
          <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 text-xs sm:text-sm space-y-1">
            <p><strong>Kasus:</strong> Rian mendapat 3 tawaran: Tawaran A (gaji Rp4.500.000), Tawaran B (Rp3.800.000), dan Tawaran C (Rp5.200.000). Rian memutuskan memilih Tawaran A.</p>
            <p>• Pilihan diambil = Tawaran A (Rp4.500.000).</p>
            <p>• Pilihan dikorbankan = Tawaran B (Rp3.800.000) dan Tawaran C (Rp5.200.000).</p>
            <p class="font-bold text-emerald-700 dark:text-emerald-400">• Biaya Peluang = Nilai TERTINGGI di antara yang dikorbankan = <strong>Rp5.200.000/bulan</strong> (bukan 3.8jt + 5.2jt).</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "b1-m3",
    number: "Bagian 3",
    title: "Kebutuhan dan Keinginan serta Berbagai Macam Kebutuhan",
    subtitle: "Membedakan kebutuhan (needs) dan keinginan (wants), serta mengklasifikasikan kebutuhan menurut intensitas kegunaan, waktu, sifat, dan subjeknya",
    color: "amber",
    gradient: "from-amber-600 via-orange-600 to-rose-600",
    readTime: "16 Menit",
    subtopics: [
      "Pengertian Kebutuhan vs Keinginan (Needs vs Wants)",
      "Macam Kebutuhan menurut Intensitas (Primer, Sekunder, Tersier)",
      "Macam Kebutuhan menurut Waktu (Sekarang & Masa Depan)",
      "Macam Kebutuhan menurut Sifat (Jasmani & Rohani)",
      "Macam Kebutuhan menurut Subjek (Individual & Kolektif)"
    ],
    contentHtml: `
      <div class="space-y-6">
        <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
          <table class="w-full text-left border-collapse text-xs md:text-sm bg-white dark:bg-slate-900">
            <thead>
              <tr class="bg-amber-600 text-white">
                <th class="p-3">Aspek</th>
                <th class="p-3">Kebutuhan (Needs)</th>
                <th class="p-3">Keinginan (Wants)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
              <tr>
                <td class="p-3 font-bold text-amber-900 dark:text-amber-300">Tingkat Keharusan</td>
                <td class="p-3">Mutlak harus dipenuhi demi kelangsungan hidup.</td>
                <td class="p-3">Tidak wajib; boleh ditunda atau diabaikan.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-amber-900 dark:text-amber-300">Dampak jika Tak Terpenuhi</td>
                <td class="p-3">Mengganggu kesehatan, fungsi hidup, bahkan nyawa.</td>
                <td class="p-3">Hanya kecewa sementara, hidup tetap normal.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-amber-900 dark:text-amber-300">Sifat Dasar</td>
                <td class="p-3">Objektif dan fungsional.</td>
                <td class="p-3">Subjektif, selera, tren, gengsi.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm">
          <div class="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-1.5">
            <span class="font-extrabold text-amber-800 dark:text-amber-300 block">1. Berdasarkan Intensitas Kegunaan:</span>
            <p>• <strong>Primer:</strong> Makanan, pakaian, tempat tinggal, pendidikan dasar.</p>
            <p>• <strong>Sekunder:</strong> Lemari, sepeda motor, smartphone belajar.</p>
            <p>• <strong>Tersier:</strong> Mobil mewah, perhiasan berlian, vila pribadi.</p>
          </div>
          <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-1.5">
            <span class="font-extrabold text-emerald-800 dark:text-emerald-300 block">2. Berdasarkan Waktu Pemenuhan:</span>
            <p>• <strong>Sekarang:</strong> Obat bagi orang sakit parah, makan saat kelaparan.</p>
            <p>• <strong>Masa Depan:</strong> Tabungan kuliah, asuransi kesehatan, dana pensiun.</p>
          </div>
          <div class="p-4 rounded-2xl bg-sky-50 dark:bg-sky-950/40 border border-sky-200 dark:border-sky-800 space-y-1.5">
            <span class="font-extrabold text-sky-800 dark:text-sky-300 block">3. Berdasarkan Sifatnya:</span>
            <p>• <strong>Jasmani:</strong> Makanan bergizi, olahraga, istirahat cukup.</p>
            <p>• <strong>Rohani:</strong> Ibadah keagamaan, rekreasi, ilmu pengetahuan, seni.</p>
          </div>
          <div class="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800 space-y-1.5">
            <span class="font-extrabold text-purple-800 dark:text-purple-300 block">4. Berdasarkan Subjek:</span>
            <p>• <strong>Individual:</strong> Stetoskop bagi dokter, kacamata minus penderita rabun.</p>
            <p>• <strong>Kolektif:</strong> Jalan raya, jembatan, rumah sakit umum, pasar.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "b1-m4",
    number: "Bagian 4",
    title: "Faktor-Faktor yang Mempengaruhi Kebutuhan Manusia",
    subtitle: "Analisis 4 faktor utama penentu keberagaman kebutuhan: Kondisi Alam, Peradaban, Agama dan Kepercayaan, serta Adat Istiadat",
    color: "violet",
    gradient: "from-violet-600 via-purple-600 to-fuchsia-700",
    readTime: "12 Menit",
    subtopics: [
      "1. Faktor Kondisi Alam (Lingkungan Geografis & Iklim)",
      "2. Faktor Peradaban (Kemajuan Zaman & Teknologi)",
      "3. Faktor Agama dan Kepercayaan",
      "4. Faktor Adat Istiadat (Tradisi Budaya)"
    ],
    contentHtml: `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
        <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-violet-200 dark:border-violet-800 shadow-sm space-y-2">
          <div class="font-bold text-violet-950 dark:text-violet-200 text-base">🌍 1. Kondisi Alam & Iklim</div>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            Masyarakat di daerah pegunungan dingin (Dieng/Eropa) membutuhkan pakaian wol tebal & pemanas ruangan, sedangkan di pesisir pantai tropis membutuhkan pakaian katun tipis & pendingin ruangan.
          </p>
        </div>
        <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800 shadow-sm space-y-2">
          <div class="font-bold text-emerald-950 dark:text-emerald-200 text-base">🚀 2. Peradaban & Teknologi</div>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            Masyarakat zaman purba cukup memakai kulit kayu & perkakas batu. Masyarakat abad ke-21 membutuhkan internet cepat, smartphone, laptop, dan transportasi udara.
          </p>
        </div>
        <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-amber-200 dark:border-amber-800 shadow-sm space-y-2">
          <div class="font-bold text-amber-950 dark:text-amber-200 text-base">🕌 3. Agama & Kepercayaan</div>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            Umat Islam membutuhkan makanan halal, sajadah, mukena, kurma saat Ramadan. Umat Hindu di Bali membutuhkan janur, bunga, dupa untuk canang sari.
          </p>
        </div>
        <div class="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-pink-200 dark:border-pink-800 shadow-sm space-y-2">
          <div class="font-bold text-pink-950 dark:text-pink-200 text-base">🎭 4. Adat Istiadat & Tradisi</div>
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">
            Suku Batak membutuhkan kain Ulos dalam upacara adat pernikahan. Suku Jawa membutuhkan tumpeng & gamelan dalam acara syukuran bersih desa.
          </p>
        </div>
      </div>
    `
  },
  {
    id: "b1-m5",
    number: "Bagian 5",
    title: "Benda Pemuas Kebutuhan & Nilai Guna (Utility)",
    subtitle: "Pengertian benda pemuas kebutuhan, 4 klasifikasi jenis benda, dan 4 macam kegunaan (form, place, time, ownership utility)",
    color: "cyan",
    gradient: "from-cyan-600 via-sky-600 to-blue-700",
    readTime: "20 Menit",
    subtopics: [
      "Benda Ekonomi vs Benda Bebas",
      "Benda Konsumsi vs Benda Produksi",
      "Barang Mentah, Setengah Jadi, dan Barang Jadi",
      "Benda Komplementer vs Substitusi",
      "4 Nilai Guna (Form, Place, Time, Ownership Utility)"
    ],
    contentHtml: `
      <div class="space-y-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs md:text-sm">
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span class="font-bold text-cyan-800 dark:text-cyan-300 block">a. Cara Mendapatkan:</span>
            <p>• <strong>Benda Ekonomi:</strong> Terbatas & butuh pengorbanan biaya (beras, pakaian, BBM).</p>
            <p>• <strong>Benda Bebas:</strong> Melimpah di alam tanpa biaya (udara bebas, sinar matahari).</p>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span class="font-bold text-emerald-800 dark:text-emerald-300 block">b. Tujuan Penggunaan:</span>
            <p>• <strong>Benda Konsumsi:</strong> Langsung dipakai konsumen (makanan, baju).</p>
            <p>• <strong>Benda Produksi:</strong> Alat/modal membuat barang lain (mesin jahit, traktor).</p>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span class="font-bold text-amber-800 dark:text-amber-300 block">c. Proses Produksi:</span>
            <p>• <strong>Mentah:</strong> Kapas, kayu gelondongan.</p>
            <p>• <strong>Setengah Jadi:</strong> Benang, kain tenun, tepung terigu.</p>
            <p>• <strong>Barang Jadi:</strong> Kemeja seragam siap pakai, roti manis.</p>
          </div>
          <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5">
            <span class="font-bold text-purple-800 dark:text-purple-300 block">d. Hubungan dengan Benda Lain:</span>
            <p>• <strong>Komplementer:</strong> Saling melengkapi (motor & bensin, kompor & gas).</p>
            <p>• <strong>Substitusi:</strong> Saling menggantikan (beras diganti jagung/singkong).</p>
          </div>
        </div>

        <div>
          <h5 class="font-bold text-slate-900 dark:text-white text-base mb-3">4 Macam Nilai Guna (Utility):</h5>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            <div class="p-3.5 rounded-xl bg-blue-50 dark:bg-slate-800 border border-blue-200 dark:border-slate-700">
              <div class="font-bold text-blue-900 dark:text-blue-300">1. Form Utility</div>
              <p class="text-slate-600 dark:text-slate-300 mt-1">Guna bentuk: kayu jadi meja, kedelai jadi tempe.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-emerald-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700">
              <div class="font-bold text-emerald-900 dark:text-emerald-300">2. Place Utility</div>
              <p class="text-slate-600 dark:text-slate-300 mt-1">Guna tempat: pasir sungai dibawa ke proyek kota.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-amber-50 dark:bg-slate-800 border border-amber-200 dark:border-slate-700">
              <div class="font-bold text-amber-900 dark:text-amber-300">3. Time Utility</div>
              <p class="text-slate-600 dark:text-slate-300 mt-1">Guna waktu: payung saat hujan, beras paceklik.</p>
            </div>
            <div class="p-3.5 rounded-xl bg-purple-50 dark:bg-slate-800 border border-purple-200 dark:border-slate-700">
              <div class="font-bold text-purple-900 dark:text-purple-300">4. Ownership Utility</div>
              <p class="text-slate-600 dark:text-slate-300 mt-1">Guna milik: stetoskop dibeli dokter, cangkul petani.</p>
            </div>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "b1-m6",
    number: "Bagian 6",
    title: "Pengalokasian Sumber Daya Ekonomi (SDM, SDA, dan Modal)",
    subtitle: "Alokasi Sumber Daya Manusia (keahlian, kejujuran & keadilan, kekuatan fisik), Sumber Daya Alam, serta 5 klasifikasi Sumber Daya Modal",
    color: "rose",
    gradient: "from-rose-600 via-pink-600 to-amber-600",
    readTime: "22 Menit",
    subtopics: [
      "1. SDM: Keahlian, Kejujuran & Keadilan, Kekuatan Fisik",
      "2. SDA: Dapat Diperbarui & Tidak Dapat Diperbarui",
      "3. Modal menurut Wujud, Sifat, Subjek, Bentuk, dan Sumbernya"
    ],
    contentHtml: `
      <div class="space-y-6">
        <div class="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-xs md:text-sm space-y-2">
          <h5 class="font-bold text-rose-950 dark:text-rose-200 text-base">1. Sumber Daya Manusia (SDM)</h5>
          <p>• <strong>Keahlian (Skill):</strong> Tenaga kerja terdidik (dokter/guru), terlatih (montir/sopir), dan tidak terdidik (kuli angkut).</p>
          <p>• <strong>Kejujuran & Keadilan:</strong> Integritas moral agar tidak korupsi, manipulasi timbangan, atau eksploitasi pekerja.</p>
          <p>• <strong>Kekuatan Fisik:</strong> Kesehatan tubuh dan keselamatan kerja (K3).</p>
        </div>

        <div class="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs md:text-sm space-y-2">
          <h5 class="font-bold text-emerald-950 dark:text-emerald-200 text-base">2. Sumber Daya Alam (SDA)</h5>
          <p>• <strong>Dapat Diperbarui:</strong> Hasil hutan, pertanian, air, angin, sinar matahari.</p>
          <p>• <strong>Tidak Dapat Diperbarui:</strong> Minyak bumi, batu bara, gas alam, emas, nikel.</p>
        </div>

        <div class="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700">
          <table class="w-full text-left border-collapse text-xs bg-white dark:bg-slate-900">
            <thead class="bg-slate-900 text-white">
              <tr>
                <th class="p-3">Segi Modal</th>
                <th class="p-3">Klasifikasi</th>
                <th class="p-3">Contoh Konkret</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
              <tr>
                <td class="p-3 font-bold text-indigo-700 dark:text-indigo-300">Wujud</td>
                <td class="p-3">Modal Uang & Modal Barang</td>
                <td class="p-3">Uang kas/tabungan vs mesin pabrik/gedung.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-emerald-700 dark:text-emerald-300">Sifat</td>
                <td class="p-3">Modal Tetap & Modal Lancar</td>
                <td class="p-3">Gedung/mesin (tahan lama) vs bahan baku/BBM (habis sekali pakai).</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-amber-700 dark:text-amber-300">Subjek</td>
                <td class="p-3">Modal Perseorangan & Modal Sosial</td>
                <td class="p-3">Rumah kos pribadi vs jalan raya/jembatan umum.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-purple-700 dark:text-purple-300">Bentuk</td>
                <td class="p-3">Modal Konkret & Modal Abstrak</td>
                <td class="p-3">Mesin/truk (kasatmata) vs nama baik (goodwill)/hak paten.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-rose-700 dark:text-rose-300">Sumber</td>
                <td class="p-3">Modal Sendiri & Modal Pinjaman</td>
                <td class="p-3">Tabungan pemilik vs kredit KUR dari bank.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `
  }
];

export const BAB1_UTILITY_TYPES: UtilityType[] = [
  {
    id: "form",
    name: "1. Kegunaan Bentuk (Form Utility)",
    badge: "Perubahan Wujud / Pengolahan",
    color: "#0284c7",
    desc: "Nilai guna suatu benda meningkat tinggi setelah mengalami perubahan bentuk melalui proses produksi atau kerajinan tangan.",
    examples: "• Kayu gelondongan diolah menjadi meja, kursi, dan lemari ukir.\n• Kacang kedelai diolah menjadi tahu, tempe, dan susu kedelai.\n• Tepung terigu, gula, dan telur diolah menjadi kue tart.",
    actor: "Produsen / Pengrajin / Industri Manufaktur"
  },
  {
    id: "place",
    name: "2. Kegunaan Tempat (Place Utility)",
    badge: "Perpindahan Lokasi / Distribusi",
    color: "#059669",
    desc: "Nilai guna suatu benda meningkat karena dipindahkan dari tempat yang jumlahnya melimpah (kurang bernilai) ke tempat lain yang sangat membutuhkan.",
    examples: "• Pasir dan batu kali di dasar sungai diangkut truk ke lokasi proyek gedung di kota.\n• Sayur-mayur segar dari kebun pegunungan dibawa ke pasar induk kota besar.\n• Jaket tebal dipindahkan penjualannya ke daerah bersuhu dingin.",
    actor: "Distributor / Ekspedisi Logistik / Pedagang Antardaerah"
  },
  {
    id: "time",
    name: "3. Kegunaan Waktu (Time Utility)",
    badge: "Ketepatan Waktu / Musim",
    color: "#d97706",
    desc: "Nilai guna suatu benda meningkat apabila disimpan terlebih dahulu dan digunakan tepat pada waktu atau musim saat benda itu sangat diperlukan.",
    examples: "• Payung dan jas hujan digunakan saat turun hujan.\n• Beras disimpan Bulog saat panen raya dan disalurkan saat musim paceklik.\n• Obat-obatan P3K digunakan saat terjadi sakit atau kecelakaan mendadak.",
    actor: "Lembaga Pergudangan (Bulog) / Perencanaan Konsumen"
  },
  {
    id: "ownership",
    name: "4. Kegunaan Kepemilikan (Ownership Utility)",
    badge: "Pindah Hak Milik ke Subjek Tepat",
    color: "#7c3aed",
    desc: "Nilai guna suatu benda meningkat setelah berpindah kepemilikannya dari penjual kepada orang yang tepat yang dapat mengoperasikan atau memakainya.",
    examples: "• Stetoskop di toko alat kesehatan dibeli dan dimiliki oleh dokter.\n• Cangkul dan sabit dibeli oleh petani.\n• Buku pelajaran dan alat tulis dimiliki oleh siswa.",
    actor: "Pedagang Ritel / Agen Jual-Beli / Konsumen"
  }
];

export const BAB1_FLASHCARDS: Flashcard[] = [
  { term: "Kelangkaan (Scarcity)", category: "Bagian 1", def: "Kondisi inti masalah ekonomi di mana kebutuhan manusia yang tidak terbatas berhadapan dengan sumber daya ekonomi yang terbatas." },
  { term: "2 Makna 'Terbatas'", category: "Bagian 1", def: "(1) Jumlahnya tidak cukup dibanding banyaknya kebutuhan manusia; (2) Manusia harus melakukan pengorbanan (biaya/tenaga/waktu) untuk memperolehnya." },
  { term: "Biaya Langsung (Explicit Cost)", category: "Bagian 2", def: "Pengeluaran uang nyata/riil yang benar-benar dibayarkan untuk menjalankan kegiatan atau memproduksi barang/jasa." },
  { term: "Biaya Peluang (Opportunity Cost)", category: "Bagian 2", def: "Nilai dari alternatif TERBAIK yang terpaksa dikorbankan (tidak dipilih) ketika mengambil suatu keputusan ekonomi." },
  { term: "Laba Akuntansi vs Laba Ekonomi", category: "Bagian 2", def: "Laba Akuntansi = Pendapatan − Biaya Langsung. Laba Ekonomi = Pendapatan − (Biaya Langsung + Biaya Peluang)." },
  { term: "Kebutuhan vs Keinginan", category: "Bagian 3", def: "Kebutuhan wajib dipenuhi demi kelangsungan hidup layak; Keinginan didorong selera/gengsi dan dapat ditunda tanpa mengancam hidup." },
  { term: "Primer, Sekunder, Tersier", category: "Bagian 3", def: "Macam kebutuhan menurut intensitas kegunaan: Primer (pokok: pangan, sandang, papan), Sekunder (pelengkap), Tersier (barang mewah)." },
  { term: "Kebutuhan Sekarang vs Masa Depan", category: "Bagian 3", def: "Kebutuhan menurut waktu: Sekarang (mendesak/tidak bisa ditunda, misal obat saat sakit); Masa Depan (tabungan kuliah, asuransi, dana pensiun)." },
  { term: "4 Faktor Penentu Kebutuhan", category: "Bagian 4", def: "(1) Kondisi alam/iklim, (2) Peradaban/teknologi, (3) Agama dan kepercayaan, serta (4) Adat istiadat/tradisi budaya." },
  { term: "Benda Ekonomi vs Benda Bebas", category: "Bagian 5", def: "Benda Ekonomi jumlahnya terbatas & butuh pengorbanan uang (beras, baju); Benda Bebas melimpah di alam tanpa biaya (udara bebas, sinar surya)." },
  { term: "Barang Mentah, Setengah Jadi, Jadi", category: "Bagian 5", def: "Klasifikasi menurut proses produksi: contoh Kapas (Mentah) → Benang & Kain (Setengah Jadi) → Kemeja Seragam (Barang Jadi)." },
  { term: "Benda Komplementer vs Substitusi", category: "Bagian 5", def: "Komplementer saling melengkapi (motor & bensin, kompor & gas); Substitusi saling menggantikan fungsi (beras & jagung, kopi & teh)." },
  { term: "Form, Place, Time, Ownership Utility", category: "Bagian 5", def: "4 Kegunaan benda: Bentuk (kayu→meja), Tempat (pasir sungai→kota), Waktu (payung saat hujan), Kepemilikan (stetoskop→dokter)." },
  { term: "3 Pilar Alokasi SDM", category: "Bagian 6", def: "Sumber Daya Manusia dialokasikan berdasarkan: (1) Keahlian (terdidik/terlatih), (2) Kejujuran & keadilan, serta (3) Kekuatan fisik." },
  { term: "Modal Tetap vs Modal Lancar", category: "Bagian 6", def: "Menurut sifat pemakaian: Modal Tetap dipakai berulang kali (gedung, mesin); Modal Lancar habis dalam satu kali produksi (bahan baku, BBM)." },
  { term: "Modal Konkret vs Modal Abstrak", category: "Bagian 6", def: "Menurut bentuk (terlihat/tidak): Modal Konkret terlihat fisiknya (mesin, uang); Modal Abstrak tidak terlihat (goodwill/nama baik, hak paten, brand)." }
];
