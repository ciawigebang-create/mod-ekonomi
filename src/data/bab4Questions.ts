import { MCQQuestion, EssayQuestion } from '../types';

export const BAB4_MCQ: MCQQuestion[] = [
  {
    id: 151,
    babId: 4,
    babName: "Bab 4",
    topic: "Teori Kepuasan (Utility)",
    question: "Kemampuan suatu barang atau jasa untuk memuaskan kebutuhan manusia dalam ilmu ekonomi disebut...",
    options: ["Produktivitas (Productivity)", "Nilai guna (Utility)", "Kelangkaan (Scarcity)", "Biaya peluang (Opportunity cost)", "Konsumsi marjinal"],
    correct: 1,
    explanation: "Nilai guna (Utility) adalah kemampuan suatu barang atau jasa untuk memberikan manfaat atau memuaskan kebutuhan manusia."
  },
  {
    id: 152,
    babId: 4,
    babName: "Bab 4",
    topic: "Pendekatan Kardinal",
    question: "Pendekatan kepuasan konsumen yang menganggap nilai guna dapat diukur secara kuantitatif dengan satuan 'Util' disebut...",
    options: ["Pendekatan Ordinal", "Pendekatan Kurva Indiferensi", "Pendekatan Kardinal", "Pendekatan Isoquant", "Pendekatan Isocost"],
    correct: 2,
    explanation: "Pendekatan Kardinal (H.H. Gossen) mengasumsikan kepuasan dapat diukur dengan angka pasti (Util)."
  },
  {
    id: 153,
    babId: 4,
    babName: "Bab 4",
    topic: "Total Utility (TU)",
    question: "Jumlah seluruh kepuasan yang diperoleh seseorang dari mengonsumsi sejumlah barang tertentu secara keseluruhan disebut...",
    options: ["Marginal Utility (MU)", "Average Utility (AU)", "Total Utility (TU)", "Marginal Product (MP)", "Total Product (TP)"],
    correct: 2,
    explanation: "Total Utility (TU) adalah jumlah keseluruhan kepuasan yang diperoleh dari konsumsi sejumlah unit barang."
  },
  {
    id: 154,
    babId: 4,
    babName: "Bab 4",
    topic: "Marginal Utility (MU)",
    question: "Pertambahan atau pengurangan kepuasan akibat pertambahan atau pengurangan konsumsi satu unit barang tertentu disebut...",
    options: ["Total Utility (TU)", "Marginal Utility (MU)", "Average Utility (AU)", "Form Utility", "Ownership Utility"],
    correct: 1,
    explanation: "Marginal Utility (MU) mengukur perubahan kepuasan per satu unit tambahan barang yang dikonsumsi."
  },
  {
    id: 155,
    babId: 4,
    babName: "Bab 4",
    topic: "Rumus Marginal Utility",
    question: "Rumus matematis yang tepat untuk menghitung Nilai Guna Marjinal (Marginal Utility / MU) adalah...",
    options: ["MU = TU × Q", "MU = TU / Q", "MU = ΔTU / ΔQ", "MU = ΔQ / ΔTU", "MU = TU1 + TU2"],
    correct: 2,
    explanation: "MU = ΔTU / ΔQ = (TUn - TUn-1) / (Qn - Qn-1)."
  },
  {
    id: 156,
    babId: 4,
    babName: "Bab 4",
    topic: "Hitungan MU Gelas Es Jeruk",
    question: "Gelas 1 memberi TU = 20 util. Gelas 2 membuat TU meningkat menjadi 35 util. Besarnya Marginal Utility (MU) pada gelas ke-2 adalah...",
    options: ["55 util", "35 util", "20 util", "17,5 util", "15 util"],
    correct: 4,
    explanation: "MU2 = TU2 - TU1 = 35 - 20 = 15 util."
  },
  {
    id: 157,
    babId: 4,
    babName: "Bab 4",
    topic: "Titik Jenuh Konsumsi",
    question: "Konsumsi bakso: Mangkok 1 (TU=30), Mangkok 2 (TU=52), Mangkok 3 (TU=64), Mangkok 4 (TU=64), Mangkok 5 (TU=55). Titik jenuh dicapai saat mangkok ke-...",
    options: ["Mangkok ke-1", "Mangkok ke-2", "Mangkok ke-3", "Mangkok ke-4", "Mangkok ke-5"],
    correct: 3,
    explanation: "Titik jenuh tercapai saat TU mencapai puncak maksimum dan MU = 0 (pada mangkok ke-4, MU4 = 64 - 64 = 0)."
  },
  {
    id: 158,
    babId: 4,
    babName: "Bab 4",
    topic: "MU Bernilai Negatif",
    question: "Berdasarkan data soal sebelumnya, besarnya nilai guna marjinal (MU) ketika mengonsumsi bakso mangkok ke-5 adalah...",
    options: ["+9 util", "0 util", "-9 util", "-11 util", "55 util"],
    correct: 2,
    explanation: "MU5 = TU5 - TU4 = 55 - 64 = -9 util (bernilai negatif karena kekenyangan/mual)."
  },
  {
    id: 159,
    babId: 4,
    babName: "Bab 4",
    topic: "Hukum Gossen I",
    question: "'Jika pemenuhan kebutuhan dilakukan terus-menerus, kenikmatan mula-mula tinggi namun lama-kelamaan menurun hingga batas jenuh.' Ini adalah bunyi...",
    options: ["Hukum Gossen I", "Hukum Gossen II", "Hukum Engel", "Hukum David Ricardo", "Hukum Permintaan"],
    correct: 0,
    explanation: "Hukum Gossen I (The Law of Diminishing Marginal Utility)."
  },
  {
    id: 160,
    babId: 4,
    babName: "Bab 4",
    topic: "Hubungan Kurva TU dan MU",
    question: "Ketika kurva Total Utility (TU) mencapai titik puncak maksimum, posisi kurva Marginal Utility (MU) berada pada...",
    options: ["Titik tertinggi di atas sumbu horizontal", "Memotong kurva TU dari atas", "Berhimpit dengan sumbu vertikal", "Memotong sumbu horizontal (MU = 0)", "Berada di bawah sumbu horizontal"],
    correct: 3,
    explanation: "Saat TU mencapai puncak maksimum, nilai MU tepat sama dengan nol (memotong sumbu Q)."
  },
  {
    id: 161,
    babId: 4,
    babName: "Bab 4",
    topic: "Hukum Gossen II",
    question: "Manusia berusaha memenuhi berbagai kebutuhannya sedemikian rupa sehingga masing-masing mencapai intensitas kepuasan yang sama. Ini adalah bunyi...",
    options: ["Hukum Gossen I", "Hukum Gossen II", "Hukum Penawaran", "Law of Diminishing Returns", "Teori Sewa Tanah"],
    correct: 1,
    explanation: "Hukum Gossen II (Law of Equi-Marginal Utility)."
  },
  {
    id: 162,
    babId: 4,
    babName: "Bab 4",
    topic: "Syarat Keseimbangan Gossen II",
    question: "Syarat tercapainya kepuasan maksimum konsumen untuk dua barang (X dan Y) menurut Hukum Gossen II adalah...",
    options: ["MUx × Px = MUy × Py", "MUx / Px = MUy / Py", "TUx / Px = TUy / Py", "MUx + Px = MUy + Py", "Px / MUx = MUy / Py"],
    correct: 1,
    explanation: "Syarat kepuasan maksimum: MUx / Px = MUy / Py."
  },
  {
    id: 163,
    babId: 4,
    babName: "Bab 4",
    topic: "Hitungan Hukum Gossen II",
    question: "PA = Rp5.000, PB = Rp10.000. MUA = 25 util. Agar tercapai kepuasan maksimum, besarnya MUB haruslah...",
    options: ["12,5 util", "25 util", "40 util", "50 util", "100 util"],
    correct: 3,
    explanation: "25 / 5.000 = MUB / 10.000 => MUB = (25 × 10.000) / 5.000 = 50 util."
  },
  {
    id: 164,
    babId: 4,
    babName: "Bab 4",
    topic: "Pengertian Konsumsi",
    question: "Kegiatan manusia mengurangi atau menghabiskan nilai guna suatu barang atau jasa untuk memenuhi kebutuhan hidup disebut...",
    options: ["Produksi", "Distribusi", "Konsumsi", "Investasi", "Spekulasi"],
    correct: 2,
    explanation: "Konsumsi adalah kegiatan mengurangi atau menghabiskan nilai guna barang/jasa."
  },
  {
    id: 165,
    babId: 4,
    babName: "Bab 4",
    topic: "Faktor Internal Konsumsi",
    question: "Berikut yang seluruhnya merupakan faktor INTERNAL penentu konsumsi seseorang adalah...",
    options: [
      "Pendapatan, kebudayaan, dan harga barang",
      "Pendapatan, motivasi, sikap/kepribadian, dan selera",
      "Status sosial, selera, dan harga barang substitusi",
      "Kebudayaan, status sosial, dan tingkat bunga",
      "Iklan, harga barang, dan lingkungan pergaulan"
    ],
    correct: 1,
    explanation: "Faktor internal konsumsi berasal dari diri sendiri: Pendapatan, motivasi, kepribadian, dan selera."
  },
  {
    id: 166,
    babId: 4,
    babName: "Bab 4",
    topic: "Faktor Eksternal Konsumsi",
    question: "Faktor-faktor EKSTERNAL yang mempengaruhi konsumsi rumah tangga meliputi...",
    options: [
      "Motivasi, kepribadian, dan pendapatan",
      "Kebudayaan, status sosial, dan harga barang",
      "Tingkat pendidikan, kedewasaan, dan emosi",
      "Selera, pendapatan, dan motivasi",
      "Bunga modal, sewa tanah, dan laba"
    ],
    correct: 1,
    explanation: "Faktor eksternal berasal dari lingkungan: Kebudayaan, status sosial, dan harga barang."
  },
  {
    id: 167,
    babId: 4,
    babName: "Bab 4",
    topic: "Pengaruh Kebudayaan & Lingkungan",
    question: "Masyarakat pegunungan mengonsumsi pakaian tebal dan minuman hangat, sedangkan warga pantai memilih pakaian tipis. Perbedaan ini dipengaruhi oleh...",
    options: ["Pendapatan", "Harga komplementer", "Lingkungan dan kebudayaan setempat", "Sikap impulsif", "Iklan"],
    correct: 2,
    explanation: "Kebudayaan dan kondisi geografis lingkungan tempat tinggal mempengaruhi pola konsumsi."
  },
  {
    id: 168,
    babId: 4,
    babName: "Bab 4",
    topic: "Ciri Konsumsi Rasional",
    question: "Di bawah ini yang merupakan ciri-ciri perilaku konsumsi RASIONAL adalah, KECUALI...",
    options: [
      "Produk memberikan kegunaan optimal",
      "Produk benar-benar dibutuhkan konsumen",
      "Mutu produk terjamin",
      "Harga terjangkau sesuai kemampuan konsumen",
      "Membeli barang hanya karena sedang obral atau demi bonus"
    ],
    correct: 4,
    explanation: "Membeli barang hanya karena tergiur diskon/bonus tanpa butuh adalah perilaku irasional."
  },
  {
    id: 169,
    babId: 4,
    babName: "Bab 4",
    topic: "Contoh Konsumsi Rasional",
    question: "Dinda membeli sepatu lari lokal karena harganya sesuai tabungan, awet, dan dibutuhkan untuk pelajaran olahraga. Tindakan Dinda mencerminkan perilaku...",
    options: ["Irasional", "Rasional", "Impulsif", "Spekulatif", "Hedonis"],
    correct: 1,
    explanation: "Dinda mempertimbangkan kebutuhan nyata, mutu, dan kesesuaian harga (Rasional)."
  },
  {
    id: 170,
    babId: 4,
    babName: "Bab 4",
    topic: "Ciri Konsumsi Tidak Rasional",
    question: "(1) Tertarik karena iklan; (2) Mutu terjamin; (3) Membeli karena merek terkenal; (4) Konsumsi demi pamer/gengsi. Perilaku TIDAK RASIONAL adalah...",
    options: ["(1), (2), dan (3)", "(1), (2), dan (4)", "(1), (3), dan (4)", "(2), (3), dan (4)", "(1) dan (2) saja"],
    correct: 2,
    explanation: "Nomor (1), (3), dan (4) adalah ciri konsumen tidak rasional (irasional)."
  },
  {
    id: 171,
    babId: 4,
    babName: "Bab 4",
    topic: "3 Penentu Rasionalitas Konsumen",
    question: "Rasional tidaknya perilaku konsumen dalam mengambil keputusan berbelanja dipengaruhi oleh tiga faktor, yaitu...",
    options: [
      "Kekayaan, keturunan, dan jabatan",
      "Tingkat pendidikan, tingkat kedewasaan, dan kematangan emosi",
      "Usia, jenis kelamin, dan tempat tinggal",
      "Harga diskon, jumlah iklan, dan media sosial",
      "Modal, tenaga kerja, dan keahlian"
    ],
    correct: 1,
    explanation: "Tiga penentu: Tingkat pendidikan, tingkat kedewasaan, dan kematangan emosi."
  },
  {
    id: 172,
    babId: 4,
    babName: "Bab 4",
    topic: "Pengertian Produksi",
    question: "Kegiatan manusia menciptakan atau menambah nilai guna (utility) suatu barang atau jasa disebut...",
    options: ["Konsumsi", "Produksi", "Distribusi", "Retribusi", "Disinvestasi"],
    correct: 1,
    explanation: "Produksi adalah kegiatan menciptakan atau menambah nilai guna barang/jasa."
  },
  {
    id: 173,
    babId: 4,
    babName: "Bab 4",
    topic: "Form Utility Kayu",
    question: "Pengrajin mengolah kayu jati gelondongan menjadi meja dan kursi belajar. Nilai guna yang tercipta adalah...",
    options: ["Place Utility", "Time Utility", "Form Utility (Kegunaan Bentuk)", "Ownership Utility", "Elementary Utility"],
    correct: 2,
    explanation: "Mengubah bentuk kayu menjadi meja/kursi menciptakan Form Utility."
  },
  {
    id: 174,
    babId: 4,
    babName: "Bab 4",
    topic: "Faktor Produksi Asli",
    question: "Yang termasuk ke dalam kelompok Faktor Produksi ASLI adalah...",
    options: ["Alam dan Modal", "Modal dan Keahlian (Skill)", "Alam dan Tenaga Kerja", "Tenaga Kerja dan Modal", "Alam dan Kewirausahaan"],
    correct: 2,
    explanation: "Faktor produksi asli adalah Alam dan Tenaga Kerja."
  },
  {
    id: 175,
    babId: 4,
    babName: "Bab 4",
    topic: "Faktor Produksi Alam",
    question: "Tanah, air, sinar matahari, udara, tumbuhan, dan barang tambang merupakan bagian dari faktor produksi...",
    options: ["Modal konkret", "Tenaga kerja jasmani", "Alam (Natural Resources)", "Kewirausahaan", "Faktor turunan"],
    correct: 2,
    explanation: "Semua sumber daya yang disediakan oleh alam termasuk Faktor Produksi Alam."
  },
  {
    id: 176,
    babId: 4,
    babName: "Bab 4",
    topic: "Tenaga Kerja menurut Sifat",
    question: "Berdasarkan SIFAT KERJANYA, tenaga kerja dibedakan menjadi...",
    options: [
      "Tenaga kerja terdidik dan terlatih",
      "Tenaga kerja rohani dan tenaga kerja jasmani",
      "Tenaga kerja tetap dan kontrak",
      "Tenaga kerja dalam dan luar negeri",
      "Tenaga kerja ahli dan kasar"
    ],
    correct: 1,
    explanation: "Menurut sifat kerja: Tenaga kerja rohani (mental/pikiran) dan jasmani (fisik)."
  },
  {
    id: 177,
    babId: 4,
    babName: "Bab 4",
    topic: "Tenaga Kerja Terdidik",
    question: "Dokter, akuntan, arsitek, dan guru dilihat dari KUALITAS KERJANYA tergolong sebagai...",
    options: ["Tenaga kerja terlatih", "Tenaga kerja terdidik (Skilled labor)", "Tenaga kerja tidak terdidik", "Tenaga kerja jasmani", "Modal abstrak"],
    correct: 1,
    explanation: "Memerlukan pendidikan formal tinggi sebelum bekerja = Tenaga Kerja Terdidik."
  },
  {
    id: 178,
    babId: 4,
    babName: "Bab 4",
    topic: "Tenaga Kerja Terlatih",
    question: "Montir bengkel, sopir, koki, dan penjahit yang mengandalkan keahlian dari kursus dan pengalaman kerja tergolong...",
    options: ["Tenaga kerja terdidik", "Tenaga kerja terlatih (Trained labor)", "Tenaga kerja tidak terdidik", "Tenaga kerja rohani", "Wirausahawan"],
    correct: 1,
    explanation: "Membutuhkan pelatihan keterampilan praktis/kursus = Tenaga Kerja Terlatih."
  },
  {
    id: 179,
    babId: 4,
    babName: "Bab 4",
    topic: "Tenaga Kerja Tidak Terdidik",
    question: "Kuli panggul, buruh kasar, dan petugas kebersihan jalan yang hanya mengandalkan kekuatan fisik dikategorikan sebagai...",
    options: ["Skilled labor", "Trained labor", "Unskilled and untrained labor", "Educated labor", "Managerial labor"],
    correct: 2,
    explanation: "Mengandalkan fisik tanpa syarat kursus khusus = Unskilled and untrained labor."
  },
  {
    id: 180,
    babId: 4,
    babName: "Bab 4",
    topic: "Faktor Produksi Turunan",
    question: "Berikut ini yang merupakan pasangan Faktor Produksi TURUNAN adalah...",
    options: ["Tanah dan Tenaga Kerja", "Modal dan Keahlian (Kewirausahaan)", "Air dan Barang Tambang", "Tenaga Kerja Terdidik dan Terlatih", "Alam dan Modal"],
    correct: 1,
    explanation: "Faktor produksi turunan adalah Modal dan Keahlian/Kewirausahaan."
  },
  {
    id: 181,
    babId: 4,
    babName: "Bab 4",
    topic: "Technological Skill",
    question: "Kemampuan pengusaha untuk menerapkan teknik dan teknologi produksi yang tepat guna di pabriknya disebut...",
    options: ["Managerial skill", "Technological skill", "Organizational skill", "Financial skill", "Marketing skill"],
    correct: 1,
    explanation: "Technological skill berkaitan dengan penerapan metode dan teknologi produksi."
  },
  {
    id: 182,
    babId: 4,
    babName: "Bab 4",
    topic: "Fungsi Produksi",
    question: "Hubungan teknis antara output yang dihasilkan dengan faktor-faktor produksi dinyatakan dalam persamaan...",
    options: ["Q = f (C, L, R, T)", "TU = MU1 + MU2 + MUn", "MUx / Px = MUy / Py", "TR = P × Q", "π = TR - TC"],
    correct: 0,
    explanation: "Fungsi produksi: Q = f(C, L, R, T)."
  },
  {
    id: 183,
    babId: 4,
    babName: "Bab 4",
    topic: "Tokoh Diminishing Returns",
    question: "Hukum Hasil Lebih yang Semakin Menurun (The Law of Diminishing Returns) dikemukakan oleh...",
    options: ["Hermann Heinrich Gossen", "David Ricardo", "John Maynard Keynes", "Karl Marx", "Irving Fisher"],
    correct: 1,
    explanation: "Dikemukakan oleh ekonom klasik David Ricardo."
  },
  {
    id: 184,
    babId: 4,
    babName: "Bab 4",
    topic: "Hitungan MP",
    question: "L = 4 pekerja menghasilkan TP = 80 unit. Ketika L = 5 pekerja, TP = 95 unit. Produksi Marjinal (MP) pekerja ke-5 adalah...",
    options: ["15 unit", "19 unit", "20 unit", "75 unit", "175 unit"],
    correct: 0,
    explanation: "MP = (95 - 80) / (5 - 4) = 15 unit."
  },
  {
    id: 185,
    babId: 4,
    babName: "Bab 4",
    topic: "Hitungan AP",
    question: "Berdasarkan data soal nomor 184 (TP = 95 unit dengan 5 pekerja), besarnya Rata-Rata Produksi (AP) adalah...",
    options: ["15 unit", "16 unit", "19 unit", "20 unit", "95 unit"],
    correct: 2,
    explanation: "AP = TP / L = 95 / 5 = 19 unit per pekerja."
  },
  {
    id: 186,
    babId: 4,
    babName: "Bab 4",
    topic: "Mulai Berlakunya Diminishing Returns",
    question: "L=1 (TP=12), L=2 (TP=30), L=3 (TP=54), L=4 (TP=72), L=5 (TP=80). The Law of Diminishing Returns mulai berlaku pada penambahan pekerja ke-...",
    options: ["Pekerja ke-1", "Pekerja ke-2", "Pekerja ke-3", "Pekerja ke-4", "Pekerja ke-5"],
    correct: 3,
    explanation: "MP1=12, MP2=18, MP3=24 (Puncak MP), MP4=18 (Mulai turun!). Maka hukum mulai berlaku pada pekerja ke-4."
  },
  {
    id: 187,
    babId: 4,
    babName: "Bab 4",
    topic: "Perpotongan MP dan AP",
    question: "Kurva Marginal Product (MP) akan memotong kurva Average Product (AP) tepat pada saat...",
    options: ["Kurva TP mencapai titik maksimum", "Kurva MP mencapai titik maksimum", "Kurva AP berada pada titik puncak maksimumnya", "Kurva MP memotong sumbu horizontal", "Kurva TP di titik balik"],
    correct: 2,
    explanation: "Kurva MP memotong kurva AP tepat di puncak tertinggi kurva AP."
  },
  {
    id: 188,
    babId: 4,
    babName: "Bab 4",
    topic: "Tahap Produksi Rasional",
    question: "Daerah produksi yang paling rasional bagi produsen untuk beroperasi dalam jangka pendek terletak pada...",
    options: ["Tahap I (sebelum AP maksimum)", "Tahap II (antara titik AP maksimum hingga MP = 0)", "Tahap III (saat MP negatif)", "Saat TP mulai menurun", "Saat pekerja nol"],
    correct: 1,
    explanation: "Tahap II adalah daerah produksi rasional (AP dan MP positif)."
  },
  {
    id: 189,
    babId: 4,
    babName: "Bab 4",
    topic: "Pengertian Isoquant",
    question: "Kurva yang menunjukkan kombinasi dua faktor produksi variabel (Tenaga Kerja & Modal) yang menghasilkan jumlah output sama adalah...",
    options: ["Kurva Indiferensi", "Kurva Isoquant", "Kurva Isocost", "Kurva Kemungkinan Produksi (PPC)", "Kurva Engel"],
    correct: 1,
    explanation: "Isoquant menggambarkan kombinasi dua input yang menghasilkan kuantitas output yang sama."
  },
  {
    id: 190,
    babId: 4,
    babName: "Bab 4",
    topic: "Ciri-Ciri Kurva Isoquant",
    question: "Berikut merupakan ciri-ciri Kurva Isoquant, KECUALI...",
    options: [
      "Memiliki kemiringan negatif dari kiri atas ke kanan bawah",
      "Cembung terhadap titik asal (origin)",
      "Antar kurva Isoquant tidak saling berpotongan",
      "Semakin ke kanan atas output semakin besar",
      "Berbentuk garis lurus vertikal sejajar sumbu modal"
    ],
    correct: 4,
    explanation: "Kurva Isoquant cembung melengkung, bukan garis vertikal."
  },
  {
    id: 191,
    babId: 4,
    babName: "Bab 4",
    topic: "Fungsi Manajemen POAC",
    question: "Empat hal pokok yang harus dilakukan pengusaha agar berhasil (POAC) secara berurutan adalah...",
    options: [
      "Perencanaan, Pengorganisasian, Pengarahan, dan Pengendalian",
      "Produksi, Distribusi, Konsumsi, dan Investasi",
      "Pemasaran, Penjualan, Pembelian, dan Pembukuan",
      "Pengawasan, Penilaian, Pemecatan, dan Perekrutan",
      "Perencanaan, Peminjaman, Pemborosan, dan Pengendalian"
    ],
    correct: 0,
    explanation: "POAC: Planning, Organizing, Actuating, Controlling."
  },
  {
    id: 192,
    babId: 4,
    babName: "Bab 4",
    topic: "Fungsi Organizing",
    question: "Pengusaha menyusun bagan organisasi dan membagi tugas kepada staf produksi, keuangan, dan pemasaran. Tindakan ini merupakan fungsi...",
    options: ["Planning", "Organizing (Pengorganisasian)", "Actuating", "Controlling", "Evaluasi"],
    correct: 1,
    explanation: "Membagi tugas dan wewenang ke dalam struktur kerja adalah fungsi Organizing."
  },
  {
    id: 193,
    babId: 4,
    babName: "Bab 4",
    topic: "4 Aspek Etika Produsen",
    question: "Empat aspek etika produsen dalam berbisnis meliputi...",
    options: [
      "Nilai, Hak dan Kewajiban, Peraturan Moral, serta Hubungan Manusia",
      "Laba, Rugi, Utang, dan Piutang",
      "Iklan, Diskon, Bonus, dan Undian",
      "Sewa, Upah, Bunga, dan Laba",
      "Modal tetap, Modal lancar, Modal sendiri, dan Pinjaman"
    ],
    correct: 0,
    explanation: "4 pilar etika: Nilai (Values), Hak & Kewajiban, Peraturan Moral, dan Hubungan Manusia."
  },
  {
    id: 194,
    babId: 4,
    babName: "Bab 4",
    topic: "Pelaku di Pasar Input",
    question: "Di Pasar Faktor Produksi (Input), pihak yang meminta dan menawarkan secara berturut-turut adalah...",
    options: [
      "Konsumen meminta, Produsen menawarkan",
      "Produsen (Perusahaan) yang meminta, Rumah Tangga Konsumen yang menawarkan",
      "Pemerintah meminta, Bank sentral menawarkan",
      "Luar negeri meminta, Importir menawarkan",
      "Pengecer meminta, Konsumen menawarkan"
    ],
    correct: 1,
    explanation: "Di pasar input: Produsen (RTP) adalah pembeli/peminta, Konsumen (RTK) adalah pemilik/penawar."
  },
  {
    id: 195,
    babId: 4,
    babName: "Bab 4",
    topic: "Balas Jasa Faktor Produksi",
    question: "Bentuk balas jasa bagi Tanah, Tenaga Kerja, Modal, dan Keahlian secara berturut-turut adalah...",
    options: [
      "Upah, Sewa, Laba, Bunga",
      "Sewa (Rent), Upah (Wage), Bunga (Interest), Laba (Profit)",
      "Bunga, Laba, Sewa, Upah",
      "Pajak, Subsidi, Dividen, Gaji",
      "Komisi, Royalti, Upah, Sewa"
    ],
    correct: 1,
    explanation: "Tanah (Sewa), Tenaga Kerja (Upah), Modal (Bunga), Keahlian (Laba)."
  },
  {
    id: 196,
    babId: 4,
    babName: "Bab 4",
    topic: "Derived Demand Tenaga Kerja",
    question: "Permintaan tenaga kerja oleh perusahaan disebut 'Derived Demand' karena...",
    options: [
      "Permintaan tenaga kerja menurun jika upah turun",
      "Permintaan tenaga kerja bergantung pada permintaan konsumen atas barang/jasa yang diproduksi",
      "Tenaga kerja turunan dari modal",
      "Upah diturunkan dari bunga bank",
      "Penawaran tenaga kerja selalu tetap"
    ],
    correct: 1,
    explanation: "Permintaan tenaga kerja diturunkan dari permintaan masyarakat atas output barang yang dibuat."
  },
  {
    id: 197,
    babId: 4,
    babName: "Bab 4",
    topic: "Pergeseran Kurva Tenaga Kerja",
    question: "Permintaan produk pakaian meningkat pesat sehingga pabrik tekstil menambah pekerja. Dampaknya pada pasar tenaga kerja adalah...",
    options: [
      "Kurva permintaan tenaga kerja bergeser ke kiri, upah turun",
      "Kurva permintaan tenaga kerja bergeser ke kanan, tingkat upah keseimbangan dan jumlah pekerja terserap meningkat",
      "Kurva penawaran tenaga kerja menjadi vertikal",
      "Kurva permintaan tenaga kerja tidak berubah",
      "Upah keseimbangan menjadi nol"
    ],
    correct: 1,
    explanation: "Kurva permintaan tenaga kerja bergeser ke kanan atas, menaikkan tingkat upah (W) dan jumlah pekerja (L)."
  },
  {
    id: 198,
    babId: 4,
    babName: "Bab 4",
    topic: "Kurva Penawaran Tanah Vertikal",
    question: "Bentuk kurva penawaran tanah digambarkan sebagai garis lurus vertikal (inelastis sempurna) karena...",
    options: [
      "Harga sewa tanah selalu tetap",
      "Jumlah luas tanah di bumi bersifat tetap dan tidak dapat ditambah meskipun harga sewa naik tinggi",
      "Permintaan tanah tidak dipengaruhi penduduk",
      "Tanah barang bebas tanpa harga",
      "Pemerintah melarang jual beli tanah"
    ],
    correct: 1,
    explanation: "Luas tanah secara fisik tidak dapat ditambah (Es = 0 / garis lurus vertikal)."
  },
  {
    id: 199,
    babId: 4,
    babName: "Bab 4",
    topic: "Kenaikan Sewa Tanah",
    question: "Karena penawaran tanah vertikal, faktor utama yang menyebabkan harga sewa tanah perkotaan terus naik adalah...",
    options: [
      "Berkurangnya penduduk kota",
      "Bergesernya kurva permintaan tanah terus ke kanan atas akibat pertambahan penduduk dan pembangunan",
      "Bergesernya kurva penawaran tanah ke kiri",
      "Turunnya suku bunga bank",
      "Berlakunya Hukum Gossen I pada tanah"
    ],
    correct: 1,
    explanation: "Permintaan tanah terus bergeser ke kanan atas memotong penawaran vertikal pada harga sewa yang makin tinggi."
  },
  {
    id: 200,
    babId: 4,
    babName: "Bab 4",
    topic: "Pasar Modal & Suku Bunga",
    question: "Kurva permintaan modal oleh pengusaha memiliki kemiringan negatif terhadap tingkat suku bunga, artinya...",
    options: [
      "Semakin tinggi bunga, semakin banyak modal diminta",
      "Semakin rendah tingkat suku bunga pinjaman, semakin besar jumlah modal investasi yang diminta oleh pengusaha",
      "Suku bunga tidak mempengaruhi investasi",
      "Penawaran modal berasal dari peminjam",
      "Bunga selalu sama dengan upah"
    ],
    correct: 1,
    explanation: "Bagi pengusaha, bunga adalah biaya pinjaman. Jika suku bunga turun, permintaan modal meningkat."
  }
];

export const BAB4_ESSAYS: EssayQuestion[] = [
  {
    id: 1,
    babId: 4,
    babName: "Bab 4",
    topic: "Teori Nilai Guna Total & Marjinal",
    question: "Jelaskan perbedaan mendasar antara Nilai Guna Total (Total Utility / TU) dan Nilai Guna Marjinal (Marginal Utility / MU) beserta rumus matematisnya!",
    keywords: ["total utility", "marginal utility", "kepuasan keseluruhan", "tambahan kepuasan", "rumus"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>1. <strong>Total Utility (TU):</strong> Jumlah keseluruhan kepuasan dari mengonsumsi sejumlah barang/jasa. Rumus: <code>TU = MU1 + MU2 + ... + MUn</code>.</p>
      <p>2. <strong>Marginal Utility (MU):</strong> Pertambahan/pengurangan kepuasan per satu unit tambahan konsumsi. Rumus: <code>MU = ΔTU / ΔQ = (TUn - TUn-1)/(Qn - Qn-1)</code>.</p>
    </div>`
  },
  {
    id: 2,
    babId: 4,
    babName: "Bab 4",
    topic: "Hukum Gossen I & Kemiringan MU",
    question: "Sebutkan bunyi Hukum Gossen I dan jelaskan mengapa kurva Marginal Utility (MU) memiliki kemiringan negatif!",
    keywords: ["hukum gossen i", "diminishing marginal utility", "titik jenuh", "berkurang", "kapasitas tubuh"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p><strong>Bunyi Hukum:</strong> Pemenuhan kebutuhan secara terus-menerus mula-mula memberi rasa nikmat tinggi, namun lama-kelamaan tambahan kepuasannya semakin menurun hingga titik jenuh (nol) dan negatif.</p>
      <p><strong>Alasan Kurva MU Negatif:</strong> Tubuh manusia memiliki batas kapasitas fisik dan psikologis. Unit awal sangat memuaskan, sedangkan konsumsi berulang selanjutnya memberi tambahan nikmat yang kian menyusut hingga kenyang.</p>
    </div>`
  },
  {
    id: 3,
    babId: 4,
    babName: "Bab 4",
    topic: "Hitungan MU & Titik Jenuh",
    question: "Data konsumsi apel: Apel 1 (TU=25), Apel 2 (TU=45), Apel 3 (TU=55), Apel 4 (TU=55), Apel 5 (TU=48). Hitung MU apel 1 hingga 5 dan tentukan titik jenuhnya!",
    keywords: ["25 util", "20 util", "10 util", "0 util", "-7 util", "apel ke-4"],
    answer: `<div class="space-y-2 text-xs sm:text-sm font-mono">
      <p>• MU1 = 25 - 0 = 25 util | MU2 = 45 - 25 = 20 util</p>
      <p>• MU3 = 55 - 45 = 10 util | MU4 = 55 - 55 = <strong>0 util (Titik Jenuh / TU Maksimum)</strong></p>
      <p>• MU5 = 48 - 55 = -7 util (Negatif / kekenyangan)</p>
      <p>Titik jenuh tercapai pada <strong>Apel ke-4</strong> saat MU = 0.</p>
    </div>`
  },
  {
    id: 4,
    babId: 4,
    babName: "Bab 4",
    topic: "Hukum Gossen II",
    question: "Jelaskan maksud Hukum Gossen II dan tuliskan rumus syarat keseimbangan kepuasan maksimum untuk lebih dari satu barang!",
    keywords: ["hukum gossen ii", "equi-marginal utility", "intensitas sama", "MUA/PA = MUB/PB"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>Konsumen membagi pendapatannya yang terbatas ke berbagai barang sehingga mencapai intensitas kepuasan marjinal per rupiah yang sama besarnya.</p>
      <p>Rumus: <code>MUA / PA = MUB / PB = MUC / PC = ... = MUn / Pn</code></p>
    </div>`
  },
  {
    id: 5,
    babId: 4,
    babName: "Bab 4",
    topic: "Hitungan Hukum Gossen II Roti & Susu",
    question: "Uang Rp40.000 untuk Roti (Rp10.000) dan Susu (Rp10.000). MU Roti: (30, 24, 18, 12). MU Susu: (24, 18, 12, 6). Tentukan kombinasi yang dibeli untuk kepuasan maksimum!",
    keywords: ["4 unit", "MUA = MUB", "kepuasan maksimum"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>Dengan anggaran Rp40.000 dan harga Rp10.000/unit, siswa dapat membeli total <strong>4 unit</strong>.</p>
      <p>Urutan MU terbesar per belanja: Roti-1 (30), Roti-2 (24), Susu-1 (24), lalu Roti-3 (18). Total kepuasan = 30 + 24 + 24 + 18 = <strong>96 util</strong>.</p>
    </div>`
  },
  {
    id: 6,
    babId: 4,
    babName: "Bab 4",
    topic: "Faktor Internal & Eksternal Konsumsi",
    question: "Uraikan 4 faktor internal dan 3 faktor eksternal yang mempengaruhi konsumsi seseorang beserta contohnya!",
    keywords: ["pendapatan", "motivasi", "sikap", "selera", "kebudayaan", "status sosial", "harga"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>• <strong>Internal:</strong> Pendapatan (daya beli), Motivasi (dorongan sehat), Kepribadian (hemat vs boros), Selera (minat pribadi).</p>
      <p>• <strong>Eksternal:</strong> Kebudayaan (adat Lebaran/Natal), Status Sosial (mobil dinas direktur), Harga Barang (hukum permintaan).</p>
    </div>`
  },
  {
    id: 7,
    babId: 4,
    babName: "Bab 4",
    topic: "Konsumsi Rasional vs Irasional",
    question: "Bandingkan 4 kriteria konsumsi rasional dengan 4 ciri konsumsi tidak rasional (irasional)!",
    keywords: ["rasional", "irasional", "kegunaan optimal", "kebutuhan", "mutu", "iklan", "gengsi"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>• <strong>Rasional:</strong> Memberikan kegunaan optimal, benar-benar dibutuhkan, mutu terjamin, harga terjangkau.</p>
      <p>• <strong>Irasional:</strong> Tertarik iklan semata, karena merek terkenal, tergiur obral/bonus tak perlu, konsumsi demi pamer/gengsi.</p>
    </div>`
  },
  {
    id: 8,
    babId: 4,
    babName: "Bab 4",
    topic: "3 Penentu Rasionalitas Konsumen",
    question: "Mengapa tingkat pendidikan, kedewasaan, dan kematangan emosi menentukan rasionalitas seorang konsumen?",
    keywords: ["pendidikan", "kedewasaan", "kematangan emosi", "literasi", "skala prioritas"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>1. Pendidikan memberi wawasan & literasi membandingkan mutu produk.</p>
      <p>2. Kedewasaan membantu menyusun skala prioritas (kebutuhan vs keinginan).</p>
      <p>3. Kematangan emosi menjaga kontrol diri agar tidak mudah terjebak gengsi atau rayuan diskon.</p>
    </div>`
  },
  {
    id: 9,
    babId: 4,
    babName: "Bab 4",
    topic: "Faktor Produksi Asli vs Turunan",
    question: "Jelaskan perbedaan Faktor Produksi Asli dan Turunan beserta anggotanya!",
    keywords: ["faktor asli", "faktor turunan", "alam", "tenaga kerja", "modal", "kewirausahaan"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>• <strong>Faktor Asli:</strong> Tersedia langsung dari alam dan manusia (Faktor Alam & Tenaga Kerja).</p>
      <p>• <strong>Faktor Turunan:</strong> Hasil olahan atau pengembangan manusia untuk efisiensi (Faktor Modal & Kewirausahaan/Skill).</p>
    </div>`
  },
  {
    id: 10,
    babId: 4,
    babName: "Bab 4",
    topic: "Klasifikasi Tenaga Kerja",
    question: "Klasifikasikan tenaga kerja menurut Sifat Kerja dan Kualitas Kerja beserta contoh profesinya!",
    keywords: ["rohani", "jasmani", "terdidik", "terlatih", "tidak terdidik"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>• <strong>Sifat:</strong> Rohani/mental (guru, dokter, manajer) vs Jasmani/fisik (buruh panggul, kuli bangunan).</p>
      <p>• <strong>Kualitas:</strong> Terdidik (dokter, insinyur), Terlatih (sopir, montir, penjahit), Tidak terdidik/terlatih (penyapu jalan, kuli).</p>
    </div>`
  },
  {
    id: 11,
    babId: 4,
    babName: "Bab 4",
    topic: "Fungsi Produksi Q = f(C,L,R,T)",
    question: "Tuliskan rumus Fungsi Produksi dan jelaskan arti setiap variabel di dalamnya!",
    keywords: ["Q = f (C, L, R, T)", "capital", "labor", "resources", "technology"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>Rumus: <code>Q = f (C, L, R, T)</code></p>
      <p>Q = Output, C = Capital (Modal), L = Labor (Tenaga Kerja), R = Resources (Alam), T = Technology / Skill (Kewirausahaan).</p>
    </div>`
  },
  {
    id: 12,
    babId: 4,
    babName: "Bab 4",
    topic: "The Law of Diminishing Returns & 3 Tahap",
    question: "Jelaskan Hukum Diminishing Returns dari David Ricardo serta 3 tahapan produksi!",
    keywords: ["law of diminishing returns", "david ricardo", "tahap i", "tahap ii", "tahap iii", "rasional"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>Jika tenaga kerja ditambah terus pada faktor tetap, awalnya TP naik pesat, namun setelah titik puncak MP menurun hingga nol dan negatif.</p>
      <p>• Tahap I: L=0 hingga AP maksimum (MP > AP).</p>
      <p>• Tahap II (Daerah Rasional): Antara AP maksimum hingga MP = 0 (TP maksimum).</p>
      <p>• Tahap III: Saat MP bernilai negatif (TP menurun).</p>
    </div>`
  },
  {
    id: 13,
    babId: 4,
    babName: "Bab 4",
    topic: "Hitungan MP dan AP Konveksi",
    question: "Saat L=2, TP=40. Saat L=3, TP=75. Saat L=4, TP=100 baju. Hitung MP dan AP saat L=3 dan L=4!",
    keywords: ["MP3 = 35", "AP3 = 25", "MP4 = 25", "AP4 = 25"],
    answer: `<div class="space-y-2 text-xs sm:text-sm font-mono">
      <p>• L=3: MP = (75 - 40)/1 = <strong>35 baju</strong>; AP = 75 / 3 = <strong>25 baju/orang</strong></p>
      <p>• L=4: MP = (100 - 75)/1 = <strong>25 baju</strong>; AP = 100 / 4 = <strong>25 baju/orang</strong></p>
    </div>`
  },
  {
    id: 14,
    babId: 4,
    babName: "Bab 4",
    topic: "Pengertian & 4 Ciri Isoquant",
    question: "Apa pengertian Kurva Isoquant dan sebutkan 4 ciri-cirinya!",
    keywords: ["kurva isoquant", "output sama", "slope negatif", "cembung origin", "tidak berpotongan"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>Kurva kombinasi input Tenaga Kerja (L) dan Modal (K) yang menghasilkan output sama banyak.</p>
      <p>Ciri: (1) Berslope negatif, (2) Cembung ke titik origin (MRTS menurun), (3) Tidak pernah saling berpotongan, (4) Makin ke kanan atas output makin besar.</p>
    </div>`
  },
  {
    id: 15,
    babId: 4,
    babName: "Bab 4",
    topic: "Substitusi Input pada Isoquant",
    question: "Mengapa penambahan tenaga kerja pada Isoquant harus diikuti pengurangan modal (MRTS)?",
    keywords: ["output konstan", "substitusi faktor produksi", "MRTS"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>Karena target output sepanjang satu kurva Isoquant konstan. Jika tenaga kerja ditambah tanpa mengurangi modal, output bertambah dan berpindah ke Isoquant yang lebih tinggi. Maka harus terjadi substitusi input (MRTS).</p>
    </div>`
  },
  {
    id: 16,
    babId: 4,
    babName: "Bab 4",
    topic: "4 Kunci Pengusaha Berhasil (POAC)",
    question: "Jelaskan 4 kunci pengusaha berhasil: Planning, Organizing, Actuating, Controlling!",
    keywords: ["planning", "organizing", "actuating", "controlling", "fungsi manajemen"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>1. Planning: Menetapkan tujuan, rencana produk, target pasar, anggaran biaya.</p>
      <p>2. Organizing: Membagi tugas, wewenang, dan tanggung jawab kerja karyawan.</p>
      <p>3. Actuating: Memimpin, memotivasi, dan memberi instruksi kerja operasional.</p>
      <p>4. Controlling: Mengawasi dan mengevaluasi hasil kerja agar sesuai standar target.</p>
    </div>`
  },
  {
    id: 17,
    babId: 4,
    babName: "Bab 4",
    topic: "4 Aspek Etika Produsen",
    question: "Uraikan 4 aspek Etika Produsen (Nilai, Hak & Kewajiban, Peraturan Moral, Hubungan Manusia)!",
    keywords: ["nilai", "hak dan kewajiban", "peraturan moral", "hubungan manusia"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>1. Nilai: Kejujuran takaran, keadilan harga, transparansi informasi.</p>
      <p>2. Hak & Kewajiban: Menyeimbangkan laba dengan kewajiban bayar upah layak & pajak.</p>
      <p>3. Peraturan Moral: Tidak monopoli curang, menjaga kelestarian lingkungan dari limbah.</p>
      <p>4. Hubungan Manusia: Memanusiakan pekerja (K3), melayani konsumen ramah, peduli warga sekitar (CSR).</p>
    </div>`
  },
  {
    id: 18,
    babId: 4,
    babName: "Bab 4",
    topic: "Peran RTK dan RTP di Pasar Output vs Input",
    question: "Jelaskan perbedaan peran RTK dan RTP di Pasar Barang (Output) vs Pasar Faktor Produksi (Input)!",
    keywords: ["pasar output", "pasar input", "rtk", "rtp", "penjual", "pembeli"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>• Pasar Output: RTP sebagai Penjual/Penawar barang/jasa; RTK sebagai Pembeli/Peminta.</p>
      <p>• Pasar Input: Berbalik—RTK sebagai Pemilik/Penawar faktor produksi; RTP sebagai Pembeli/Pengguna faktor produksi.</p>
    </div>`
  },
  {
    id: 19,
    babId: 4,
    babName: "Bab 4",
    topic: "Pasar Tanah & Kenaikan Harga Sewa",
    question: "Mengapa kurva penawaran tanah vertikal dan bagaimana proses terbentuknya kenaikan sewa tanah di perkotaan?",
    keywords: ["penawaran vertikal", "inelastis sempurna", "luas tanah tetap", "permintaan bergeser kanan", "sewa tanah naik"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>Kurva penawaran tanah vertikal inelastis sempurna (Es = 0) karena luas fisik tanah di bumi tetap tidak bisa ditambah manusia.</p>
      <p>Pertumbuhan penduduk dan ekspansi gedung/industri menggeser kurva permintaan tanah terus ke kanan atas memotong garis penawaran tetap pada titik sewa (R) yang semakin tinggi.</p>
    </div>`
  },
  {
    id: 20,
    babId: 4,
    babName: "Bab 4",
    topic: "Mekanisme Pasar Tenaga Kerja & Modal",
    question: "Jelaskan mekanisme interaksi permintaan dan penawaran di Pasar Tenaga Kerja dan Pasar Modal!",
    keywords: ["pasar tenaga kerja", "upah", "derived demand", "pasar modal", "suku bunga"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>1. Pasar Tenaga Kerja: Permintaan dari RTP (derived demand) dan penawaran dari angkatan kerja RTK membentuk Upah Keseimbangan (W).</p>
      <p>2. Pasar Modal: Permintaan modal investasi dari pengusaha (berhubungan terbalik dengan bunga) dan penawaran tabungan dari masyarakat RTK membentuk Suku Bunga Keseimbangan (i).</p>
    </div>`
  }
];
