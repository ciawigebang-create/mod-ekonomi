import { MCQQuestion, EssayQuestion } from '../types';

export const BAB1_MCQ: MCQQuestion[] = [
  {
    id: 1,
    babId: 1,
    babName: "Bab 1",
    topic: "Pengertian Kelangkaan",
    question: "Inti masalah ekonomi (the core of economic problem) yang dihadapi oleh setiap manusia, rumah tangga, perusahaan, maupun negara adalah kelangkaan (scarcity). Pengertian kelangkaan dalam ilmu ekonomi yang paling tepat adalah...",
    options: [
      "Kondisi ketika suatu barang sama sekali sudah punah dan tidak pernah ditemukan lagi di muka bumi",
      "Kondisi ketika kebutuhan manusia yang tidak terbatas dihadapkan pada jumlah alat pemuas kebutuhan (sumber daya) yang terbatas",
      "Keadaan ketika harga barang-barang di pasar tradisional mengalami penurunan drastis saat panen raya",
      "Kondisi ketika manusia tidak lagi memiliki keinginan untuk membeli barang dan jasa",
      "Keadaan ketika seluruh sumber daya ekonomi tersedia secara gratis tanpa memerlukan pengorbanan"
    ],
    correct: 1,
    explanation: "Dalam ilmu ekonomi, kelangkaan (scarcity) terjadi karena adanya kesenjangan antara kebutuhan manusia yang sifatnya tidak terbatas (selalu bertambah dan beragam) dengan sumber daya atau alat pemuas kebutuhan yang jumlahnya terbatas."
  },
  {
    id: 2,
    babId: 1,
    babName: "Bab 1",
    topic: "Makna Terbatas dalam Kelangkaan (1)",
    question: "Dalam konsep kelangkaan, sumber daya ekonomi disebut bersifat 'terbatas' dalam dua pengertian utama. Pengertian pertama dari kata 'terbatas' adalah...",
    options: [
      "Barang tersebut hanya boleh dimiliki oleh pejabat pemerintah saja",
      "Jumlah sumber daya yang tersedia tidak cukup dibandingkan dengan banyaknya kebutuhan manusia yang terus meningkat",
      "Barang tersebut hanya dapat digunakan satu kali dalam seumur hidup",
      "Sumber daya tersebut tidak memiliki nilai guna sama sekali bagi masyarakat",
      "Jumlah barang di pasar selalu melebihi daya beli konsumen"
    ],
    correct: 1,
    explanation: "Makna pertama 'terbatas' pada kelangkaan adalah keterbatasan kuantitas relatif: jumlah sumber daya yang tersedia tidak cukup (tidak sebanding) untuk memenuhi seluruh kebutuhan manusia yang tidak terbatas."
  },
  {
    id: 3,
    babId: 1,
    babName: "Bab 1",
    topic: "Makna Terbatas dalam Kelangkaan (2)",
    question: "Pengertian kedua dari sifat 'terbatas' pada sumber daya ekonomi adalah bahwa untuk memperoleh barang atau sumber daya tersebut, manusia harus...",
    options: [
      "Menunggu bantuan cuma-cuma dari alam tanpa berusaha",
      "Melakukan pengorbanan, baik berupa uang, waktu, tenaga, maupun pikiran",
      "Mengurangi seluruh kebutuhan pokok keluarganya hingga nol",
      "Menghapus penggunaan uang dalam transaksi sehari-hari",
      "Tinggal di daerah pedalaman yang belum mengenal teknologi"
    ],
    correct: 1,
    explanation: "Makna kedua 'terbatas' dalam konsep kelangkaan adalah manusia harus melakukan pengorbanan (sacrifice) berupa uang/harga, tenaga, maupun waktu untuk memperoleh benda pemuas kebutuhan tersebut."
  },
  {
    id: 4,
    babId: 1,
    babName: "Bab 1",
    topic: "Penyebab Kelangkaan (Deret Malthus)",
    question: "Ekonom klasik Thomas Robert Malthus memperingatkan bahwa kelangkaan pangan akan selalu mengancam umat manusia karena adanya ketidakseimbangan antara laju pertumbuhan penduduk dan laju produksi pangan, yaitu...",
    options: [
      "Penduduk bertambah menurut deret hitung, sedangkan pangan bertambah menurut deret ukur",
      "Penduduk bertambah menurut deret ukur (1, 2, 4, 8, 16...), sedangkan bahan pangan bertambah menurut deret hitung (1, 2, 3, 4, 5...)",
      "Penduduk dan bahan pangan sama-sama menurun setiap sepuluh tahun",
      "Produksi bahan pangan selalu tumbuh sepuluh kali lebih cepat daripada jumlah penduduk",
      "Jumlah penduduk bersifat tetap sedangkan luas tanah pertanian terus bertambah"
    ],
    correct: 1,
    explanation: "Menurut Teori Malthus, pertumbuhan populasi manusia bergerak jauh lebih cepat mengikuti deret ukur (geometris: 1, 2, 4, 8, 16, 32), sementara pertumbuhan produksi pangan bergerak lambat mengikuti deret hitung (aritmetis: 1, 2, 3, 4, 5, 6), sehingga memicu kelangkaan."
  },
  {
    id: 5,
    babId: 1,
    babName: "Bab 1",
    topic: "Faktor Penyebab Kelangkaan",
    question: "Pada musim kemarau panjang, warga di beberapa desa dataran tinggi kapur mengalami kesulitan mendapatkan air bersih sehingga harus membeli air tangki. Faktor utama penyebab kelangkaan air bersih pada kasus tersebut adalah...",
    options: [
      "Kemajuan teknologi penyaringan air yang terlalu canggih",
      "Kondisi geografis dan faktor alam (iklim/kemarau panjang)",
      "Kelebihan jumlah tenaga kerja terdidik di pedesaan",
      "Turunnya tarif air minum dari perusahaan daerah",
      "Perubahan selera mode pakaian masyarakat desa"
    ],
    correct: 1,
    explanation: "Perbedaan letak geografis (daerah kapur/tandus) dan kondisi iklim (kemarau panjang) merupakan faktor alam yang menyebabkan kelangkaan sumber daya air bersih di wilayah tersebut."
  },
  {
    id: 6,
    babId: 1,
    babName: "Bab 1",
    topic: "Dampak Kelangkaan BBM",
    question: "Di sebuah kabupaten kepulauan, pengiriman bahan bakar minyak (BBM) terlambat akibat cuaca buruk di laut. Antrean panjang terjadi di SPBU dan harga eceran bensin melonjak tinggi. Fenomena ini menunjukkan bahwa kelangkaan sumber daya berdampak langsung pada...",
    options: [
      "Turunnya biaya transportasi angkutan umum secara drastis",
      "Naiknya harga barang dan terhambatnya aktivitas distribusi ekonomi masyarakat",
      "Berubahnya bensin dari benda ekonomi menjadi benda bebas",
      "Hilangnya kebutuhan masyarakat akan sarana transportasi",
      "Meningkatnya nilai guna waktu dari pakaian musim dingin"
    ],
    correct: 1,
    explanation: "Ketika suatu sumber daya vital (seperti BBM) mengalami kelangkaan sementara permintaannya tetap tinggi, maka harga akan naik dan kegiatan produksi maupun distribusi masyarakat akan terhambat."
  },
  {
    id: 7,
    babId: 1,
    babName: "Bab 1",
    topic: "Mengatasi Kelangkaan",
    question: "Cadangan minyak bumi dan batu bara sebagai sumber energi fosil makin menipis dari tahun ke tahun. Langkah paling tepat dan berkelanjutan untuk mengatasi kelangkaan sumber daya energi tersebut adalah...",
    options: [
      "Meningkatkan konsumsi BBM bersubsidi untuk seluruh kendaraan pribadi",
      "Menghentikan seluruh kegiatan industri dan transportasi di seluruh dunia",
      "Mengembangkan energi alternatif terbarukan (surya, angin, panas bumi, biofuel) serta menghemat pemakaian energi",
      "Menebang seluruh hutan lindung untuk dijadikan lahan tambang batu bara baru",
      "Mencetak uang sebanyak-banyaknya agar masyarakat mampu membeli BBM mahal"
    ],
    correct: 2,
    explanation: "Kelangkaan SDA yang tidak dapat diperbarui (fosil) diatasi melalui penghematan (efisiensi energi) dan inovasi substitusi ke sumber energi baru terbarukan (renewable energy) seperti PLTS, PLTB, dan panas bumi."
  },
  {
    id: 8,
    babId: 1,
    babName: "Bab 1",
    topic: "Skala Prioritas Siswa",
    question: "Dinda adalah siswi kelas X yang diberi uang saku bulanan Rp400.000 oleh orang tuanya. Bulan ini ia memiliki daftar kebutuhan:\n(1) Membeli buku paket Ekonomi wajib Rp85.000\n(2) Membeli kuota belajar dan ongkos angkutan Rp200.000\n(3) Membeli sepatu roda baru Rp350.000\n(4) Membeli alat tulis habis Rp35.000\n(5) Menonton konser musik Rp250.000\nBerdasarkan prinsip skala prioritas, alokasi yang paling rasional adalah...",
    options: [
      "Memenuhi nomor (1), (2), dan (4), serta menabung sisa uangnya Rp80.000",
      "Memenuhi nomor (3) saja karena harganya paling mahal",
      "Memenuhi nomor (4) dan (5) agar tidak ketinggalan tren pergaulan",
      "Meminjam uang dengan bunga tinggi agar kelima keinginan tersebut terbeli semua",
      "Memenuhi nomor (1) dan (5) lalu membolos sekolah karena kehabisan ongkos"
    ],
    correct: 0,
    explanation: "Kebutuhan paling penting dan mendesak (prioritas utama pelajar) adalah buku paket wajib (Rp85.000), ongkos & kuota belajar (Rp200.000), serta alat tulis (Rp35.000) dengan total Rp320.000. Sisa Rp80.000 dapat ditabung untuk cadangan masa depan."
  },
  {
    id: 9,
    babId: 1,
    babName: "Bab 1",
    topic: "Biaya Langsung vs Biaya Peluang",
    question: "Perbedaan mendasar antara 'Biaya Langsung (Explicit Cost)' dan 'Biaya Peluang (Opportunity Cost)' adalah...",
    options: [
      "Biaya langsung adalah nilai alternatif yang dikorbankan, sedangkan biaya peluang adalah uang tunai yang dibayarkan ke kasir",
      "Biaya langsung adalah pengeluaran uang nyata untuk menjalankan pilihan yang diambil, sedangkan biaya peluang adalah nilai alternatif terbaik yang dikorbankan karena memilih pilihan tersebut",
      "Biaya langsung hanya berlaku bagi pemerintah, sedangkan biaya peluang hanya berlaku bagi pelajar",
      "Biaya langsung bersifat abstrak dan tidak dapat dihitung, sedangkan biaya peluang selalu dicatat dalam kuitansi belanja",
      "Biaya langsung dan biaya peluang memiliki pengertian yang sama persis"
    ],
    correct: 1,
    explanation: "Biaya langsung (explicit/direct cost) adalah pengeluaran kas/uang riil untuk membiayai kegiatan yang dipilih. Biaya peluang (opportunity cost) adalah nilai dari kesempatan atau alternatif terbaik yang terpaksa dilepaskan/dikorbankan."
  },
  {
    id: 10,
    babId: 1,
    babName: "Bab 1",
    topic: "Perhitungan Biaya Peluang (2 Alternatif)",
    question: "Setelah lulus SMK jurusan tata boga, Fajar ditawari bekerja di sebuah restoran dengan gaji Rp3.600.000 per bulan. Namun, Fajar memilih membuka usaha kedai roti bakar sendiri. Biaya peluang (opportunity cost) Fajar per bulan karena memilih membuka kedai roti bakar adalah...",
    options: [
      "Rp0 karena Fajar bekerja di kedainya sendiri",
      "Rp1.800.000",
      "Rp3.600.000",
      "Rp7.200.000",
      "Tidak dapat dihitung"
    ],
    correct: 2,
    explanation: "Karena Fajar memilih membuka kedai roti bakar sendiri, ia mengorbankan kesempatan memperoleh gaji pasti di restoran sebesar Rp3.600.000 per bulan. Maka biaya peluangnya adalah Rp3.600.000."
  },
  {
    id: 11,
    babId: 1,
    babName: "Bab 1",
    topic: "Perhitungan Biaya Peluang (3 Alternatif)",
    question: "Nadia baru saja lulus kuliah S-1 Akuntansi dan menerima tiga tawaran pekerjaan:\n1) Auditor junior dengan gaji Rp6.500.000/bulan\n2) Staf keuangan dengan gaji Rp5.200.000/bulan\n3) Pegawai bank dengan gaji Rp7.000.000/bulan\nApabila Nadia memutuskan memilih bekerja sebagai auditor junior (pilihan 1), maka besarnya biaya peluang Nadia per bulan adalah...",
    options: ["Rp5.200.000", "Rp6.500.000", "Rp7.000.000", "Rp12.200.000", "Rp18.700.000"],
    correct: 2,
    explanation: "Pilihan yang diambil adalah auditor junior (Rp6.500.000). Pilihan yang dikorbankan adalah staf keuangan (Rp5.200.000) dan pegawai bank (Rp7.000.000). Biaya peluang adalah nilai TERTINGGI dari pilihan yang dikorbankan, yaitu Rp7.000.000 (bukan dijumlahkan)."
  },
  {
    id: 12,
    babId: 1,
    babName: "Bab 1",
    topic: "Perhitungan Biaya Peluang (Gaji Tertinggi)",
    question: "Mengacu pada soal nomor 11 di atas, seandainya Nadia memutuskan memilih bekerja sebagai pegawai bank swasta dengan gaji Rp7.000.000/bulan, maka berapakah biaya peluang yang ditanggung Nadia per bulan?",
    options: ["Rp5.200.000", "Rp6.500.000", "Rp7.000.000", "Rp11.700.000", "Rp1.800.000"],
    correct: 1,
    explanation: "Jika Nadia memilih pegawai bank (Rp7.000.000), maka alternatif yang tidak dipilih (dikorbankan) adalah auditor junior (Rp6.500.000) dan staf keuangan (Rp5.200.000). Nilai tertinggi di antara yang dikorbankan adalah Rp6.500.000."
  },
  {
    id: 13,
    babId: 1,
    babName: "Bab 1",
    topic: "Biaya Peluang Lahan Pertanian",
    question: "Pak Budi memiliki sebidang lahan 1 hektare dengan potensi keuntungan bersih: Padi Rp18.000.000, Jagung Rp15.000.000, atau Cabai merah Rp24.000.000. Jika Pak Budi memilih menanam cabai merah, maka biaya peluang Pak Budi adalah...",
    options: ["Rp15.000.000", "Rp18.000.000", "Rp24.000.000", "Rp33.000.000", "Rp6.000.000"],
    correct: 1,
    explanation: "Alternatif yang dikorbankan adalah menanam padi (Rp18.000.000) dan jagung (Rp15.000.000). Alternatif terbaik yang dikorbankan adalah padi sebesar Rp18.000.000."
  },
  {
    id: 14,
    babId: 1,
    babName: "Bab 1",
    topic: "Biaya Langsung vs Biaya Peluang Usaha",
    question: "Pak Hendra keluar dari pekerjaannya bergaji Rp9.000.000/bulan untuk membuka bengkel las sendiri. Penerimaan kotor bengkel Rp30.000.000/bulan. Biaya operasional kawat las, listrik, sewa tempat, dan asisten sebesar Rp17.000.000. Besarnya Biaya Langsung dan Biaya Peluang Pak Hendra berturut-turut adalah...",
    options: [
      "Rp9.000.000 dan Rp17.000.000",
      "Rp17.000.000 dan Rp9.000.000",
      "Rp30.000.000 dan Rp17.000.000",
      "Rp13.000.000 dan Rp4.000.000",
      "Rp26.000.000 dan Rp30.000.000"
    ],
    correct: 1,
    explanation: "Biaya Langsung (pengeluaran riil operasional bengkel) = Rp17.000.000. Biaya Peluang (gaji teknisi yang dikorbankan karena keluar kerja) = Rp9.000.000."
  },
  {
    id: 15,
    babId: 1,
    babName: "Bab 1",
    topic: "Laba Akuntansi vs Laba Ekonomi",
    question: "Berdasarkan data bengkel las Pak Hendra (Penerimaan Rp30.000.000, Biaya Langsung Rp17.000.000, dan Biaya Peluang Rp9.000.000), berapakah besarnya Laba Akuntansi dan Laba Ekonomi yang diperoleh Pak Hendra?",
    options: [
      "Laba Akuntansi Rp13.000.000 dan Laba Ekonomi Rp4.000.000",
      "Laba Akuntansi Rp21.000.000 dan Laba Ekonomi Rp13.000.000",
      "Laba Akuntansi Rp4.000.000 dan Laba Ekonomi Rp13.000.000",
      "Laba Akuntansi Rp30.000.000 dan Laba Ekonomi Rp9.000.000",
      "Laba Akuntansi Rp17.000.000 dan Laba Ekonomi Rp8.000.000"
    ],
    correct: 0,
    explanation: "Laba Akuntansi = Penerimaan − Biaya Langsung = Rp30.000.000 − Rp17.000.000 = Rp13.000.000.\nLaba Ekonomi = Penerimaan − (Biaya Langsung + Biaya Peluang) = Rp30.000.000 − Rp26.000.000 = Rp4.000.000."
  },
  {
    id: 16,
    babId: 1,
    babName: "Bab 1",
    topic: "Biaya Peluang Waktu Harian",
    question: "Riko bekerja freelance desain grafis dengan upah Rp75.000/jam. Hari Sabtu ia libur 4 jam untuk menonton sepak bola di stadion. Biaya tiket dan makan yang dikeluarkan Rp120.000. Berapakah biaya peluang dan total biaya ekonomi menonton pertandingan?",
    options: [
      "Biaya peluang Rp75.000; Total biaya ekonomi Rp195.000",
      "Biaya peluang Rp300.000; Total biaya ekonomi Rp420.000",
      "Biaya peluang Rp120.000; Total biaya ekonomi Rp300.000",
      "Biaya peluang Rp420.000; Total biaya ekonomi Rp120.000",
      "Biaya peluang Rp0; Total biaya ekonomi Rp120.000"
    ],
    correct: 1,
    explanation: "Biaya peluang waktu kerja 4 jam = 4 × Rp75.000 = Rp300.000. Biaya langsung = Rp120.000. Total biaya ekonomi = Rp300.000 + Rp120.000 = Rp420.000."
  },
  {
    id: 17,
    babId: 1,
    babName: "Bab 1",
    topic: "Biaya Peluang Aset Ruko",
    question: "Bu Dewi memiliki ruko yang sebelumnya disewakan Rp36.000.000/tahun (Rp3.000.000/bulan). Tahun ini dipakai sendiri membuka toko kue. Hilangnya pendapatan sewa ruko Rp3.000.000/bulan tergolong sebagai...",
    options: [
      "Biaya langsung tunai",
      "Biaya peluang (biaya implisit) penggunaan ruko milik sendiri",
      "Laba bersih tambahan",
      "Subsidi pemerintah daerah",
      "Benda bebas non-ekonomi"
    ],
    correct: 1,
    explanation: "Mengorbankan pendapatan sewa Rp3.000.000/bulan yang tadinya bisa diterima adalah biaya peluang (biaya implisit)."
  },
  {
    id: 18,
    babId: 1,
    babName: "Bab 1",
    topic: "Biaya Peluang Kuliah",
    question: "Andi menolak tawaran kerja bergaji Rp3.500.000/bulan dan memilih kuliah D-3 selama 3 tahun (36 bulan). Biaya langsung kuliah Rp45.000.000. Besarnya biaya peluang Andi selama 3 tahun kuliah adalah...",
    options: ["Rp42.000.000", "Rp45.000.000", "Rp126.000.000", "Rp171.000.000", "Rp81.000.000"],
    correct: 2,
    explanation: "Biaya peluang = 36 bulan × Rp3.500.000 = Rp126.000.000."
  },
  {
    id: 19,
    babId: 1,
    babName: "Bab 1",
    topic: "Kebutuhan vs Keinginan",
    question: "Pernyataan berikut yang paling tepat menggambarkan perbedaan antara Kebutuhan dan Keinginan adalah...",
    options: [
      "Kebutuhan didorong oleh gengsi sosial, sedangkan keinginan didorong oleh keharusan biologis",
      "Kebutuhan bersifat wajib dipenuhi demi kelangsungan hidup layak, sedangkan keinginan bersifat tambahan sesuai selera dan dapat ditunda tanpa mengancam hidup",
      "Kebutuhan hanya dimiliki oleh orang kaya, sedangkan keinginan hanya dimiliki oleh masyarakat berpenghasilan rendah",
      "Keinginan harus selalu dipenuhi lebih dulu sebelum kebutuhan pokok",
      "Kebutuhan dan keinginan tidak memiliki kaitan dengan penyusunan skala prioritas"
    ],
    correct: 1,
    explanation: "Kebutuhan bersifat esensial dan wajib dipenuhi, sedangkan keinginan didorong selera/gengsi dan dapat ditunda."
  },
  {
    id: 20,
    babId: 1,
    babName: "Bab 1",
    topic: "Kebutuhan menurut Intensitas",
    question: "Bagi seorang siswa SMA, kepemilikan seragam sekolah dan buku pelajaran termasuk kebutuhan ..., sedangkan mobil sport mewah termasuk kebutuhan ...",
    options: ["Tersier; Primer", "Primer; Tersier", "Sekunder; Primer", "Kolektif; Rohani", "Masa depan; Sekarang"],
    correct: 1,
    explanation: "Seragam dan buku pelajaran adalah kebutuhan primer, sedangkan mobil sport mewah adalah kebutuhan tersier."
  },
  {
    id: 21,
    babId: 1,
    babName: "Bab 1",
    topic: "Sifat Relatif Kebutuhan",
    question: "Kamera seharga Rp35.000.000 bagi siswa biasa tergolong barang mewah (tersier). Namun bagi fotografer jurnalistik profesional, kamera tersebut tergolong sebagai...",
    options: [
      "Kebutuhan tersier murni",
      "Kebutuhan primer / penunjang utama pekerjaan",
      "Kebutuhan rohani semata",
      "Kebutuhan kolektif masyarakat desa",
      "Benda bebas tanpa pengorbanan"
    ],
    correct: 1,
    explanation: "Bagi fotografer profesional, kamera adalah alat utama untuk mencari nafkah (kebutuhan primer profesi)."
  },
  {
    id: 22,
    babId: 1,
    babName: "Bab 1",
    topic: "Kebutuhan menurut Waktu",
    question: "Perhatikan daftar:\n(1) Membeli obat saat demam tinggi\n(2) Menabung untuk biaya kuliah anak\n(3) Membayar premi asuransi kesehatan\n(4) Membeli makan siang saat lapar\nYang termasuk Kebutuhan Masa yang Akan Datang adalah...",
    options: ["(1) dan (2)", "(1) dan (4)", "(2) dan (3)", "(2) dan (4)", "(3) dan (4)"],
    correct: 2,
    explanation: "Tabungan kuliah anak (2) dan asuransi (3) adalah kebutuhan masa yang akan datang."
  },
  {
    id: 23,
    babId: 1,
    babName: "Bab 1",
    topic: "Kebutuhan Sekarang",
    question: "Mengapa pemberian pertolongan medis darurat bagi korban kecelakaan dikategorikan sebagai Kebutuhan Sekarang?",
    options: [
      "Karena biayanya sangat murah dan gratis bagi semua orang",
      "Karena pemenuhannya bersifat sangat mendesak dan tidak dapat ditunda sedikit pun demi menyelamatkan nyawa",
      "Karena baru akan dirasakan manfaatnya dua puluh tahun kemudian",
      "Karena termasuk kebutuhan mewah untuk meningkatkan gengsi keluarga",
      "Karena hanya dibutuhkan oleh kelompok usia lanjut"
    ],
    correct: 1,
    explanation: "Kebutuhan sekarang tidak dapat ditunda karena penundaannya dapat berakibat fatal."
  },
  {
    id: 24,
    babId: 1,
    babName: "Bab 1",
    topic: "Kebutuhan menurut Sifat",
    question: "Keluarga Pak Rahmat beribadah bersama di hari Minggu dan berekreasi di taman untuk menyegarkan pikiran. Kegiatan tersebut bertujuan memenuhi kebutuhan...",
    options: [
      "Kebutuhan jasmani murni",
      "Kebutuhan rohani (psikis/spiritual dan rekreasi jiwa)",
      "Kebutuhan tersier barang modal",
      "Kebutuhan produksi bahan mentah",
      "Kebutuhan masa lalu"
    ],
    correct: 1,
    explanation: "Ibadah dan rekreasi memenuhi kebutuhan rohani untuk ketenangan jiwa."
  },
  {
    id: 25,
    babId: 1,
    babName: "Bab 1",
    topic: "Kebutuhan Jasmani",
    question: "Berikut yang seluruhnya merupakan contoh pemenuhan Kebutuhan Jasmani adalah...",
    options: [
      "Mendengarkan ceramah agama, membaca puisi, dan menonton film komedi",
      "Mengonsumsi makanan bergizi seimbang, berolahraga pagi, tidur cukup 8 jam, dan mengenakan pakaian bersih",
      "Mengikuti konseling psikologi, berdoa, dan bermeditasi",
      "Menabung saham, membeli obligasi, dan menyewa brankas bank",
      "Membangun jalan tol, jembatan layang, dan pelabuhan laut"
    ],
    correct: 1,
    explanation: "Makan, olahraga, tidur, dan pakaian adalah pemeliharaan fisik (jasmani)."
  },
  {
    id: 26,
    babId: 1,
    babName: "Bab 1",
    topic: "Kebutuhan menurut Subjek",
    question: "Siswa tunanetra membutuhkan buku berhuruf Braille, sedangkan warga desa membutuhkan jembatan desa. Buku Braille dan jembatan desa berturut-turut termasuk...",
    options: [
      "Kebutuhan kolektif dan kebutuhan individual",
      "Kebutuhan individual dan kebutuhan kolektif",
      "Kebutuhan rohani dan kebutuhan tersier",
      "Kebutuhan masa depan dan kebutuhan lampau",
      "Benda bebas dan benda illith"
    ],
    correct: 1,
    explanation: "Buku Braille untuk perorangan tertentu (individual), jembatan desa untuk orang banyak (kolektif)."
  },
  {
    id: 27,
    babId: 1,
    babName: "Bab 1",
    topic: "Faktor Kondisi Alam",
    question: "Penduduk dataran tinggi Dieng membutuhkan baju wol tebal dan pemanas ruangan, sedangkan warga pantai membutuhkan baju katun tipis. Perbedaan kebutuhan tersebut dipengaruhi oleh...",
    options: [
      "Adat istiadat leluhur",
      "Agama dan kepercayaan",
      "Kondisi alam (iklim dan letak geografis)",
      "Tingkat peradaban teknologi",
      "Perbedaan jenis kelamin"
    ],
    correct: 2,
    explanation: "Suhu, iklim, dan topografi merupakan faktor kondisi alam."
  },
  {
    id: 28,
    babId: 1,
    babName: "Bab 1",
    topic: "Faktor Peradaban",
    question: "Tahun 1980-an masyarakat berkirim kabar lewat pos/telegram. Kini masyarakat membutuhkan smartphone, internet 5G, dan video call. Perubahan ini disebabkan oleh...",
    options: [
      "Kondisi alam yang makin dingin",
      "Perkembangan peradaban dan kemajuan ilmu pengetahuan-teknologi",
      "Kesamaan adat istiadat di seluruh dunia",
      "Berkurangnya jumlah penduduk dunia",
      "Hilangnya seluruh kebutuhan primer manusia"
    ],
    correct: 1,
    explanation: "Perkembangan peradaban dan inovasi iptek melahirkan kebutuhan baru yang modern."
  },
  {
    id: 29,
    babId: 1,
    babName: "Bab 1",
    topic: "Faktor Agama dan Kepercayaan",
    question: "Permintaan janur, bunga, dan dupa di Bali meningkat menjelang Nyepi. Menjelang Idulfitri, permintaan ketupat dan busana muslim melonjak. Hal ini membuktikan kebutuhan dipengaruhi...",
    options: [
      "Kondisi geologi tanah",
      "Agama dan kepercayaan yang dianut masyarakat",
      "Kerusakan lingkungan hidup",
      "Keterbatasan kekuatan fisik tenaga kerja",
      "Modal pinjaman luar negeri"
    ],
    correct: 1,
    explanation: "Aturan peribadatan dan hari besar keagamaan mempengaruhi kebutuhan umatnya."
  },
  {
    id: 30,
    babId: 1,
    babName: "Bab 1",
    topic: "Faktor Adat Istiadat",
    question: "Masyarakat suku Batak membutuhkan kain tenun Ulos dalam upacara adat, sedangkan masyarakat Jawa membutuhkan gamelan dan tumpeng saat bersih desa. Faktor penentu kebutuhan ini adalah...",
    options: [
      "Adat istiadat (tradisi budaya masyarakat setempat)",
      "Kondisi cuaca ekstrem",
      "Kegunaan waktu benda bebas",
      "Benda substitusi impor",
      "Modal abstrak perbankan"
    ],
    correct: 0,
    explanation: "Adat istiadat dan tradisi suku bangsa menentukan kebutuhan adat khas."
  },
  {
    id: 31,
    babId: 1,
    babName: "Bab 1",
    topic: "Kombinasi Faktor Kebutuhan",
    question: "Manakah pasangan contoh faktor penentu kebutuhan yang TEPAT di bawah ini?",
    options: [
      "Kondisi alam → Umat Islam membutuhkan sajadah dan mukena untuk salat",
      "Peradaban → Masyarakat modern membutuhkan laptop dan koneksi internet untuk bekerja jarak jauh",
      "Agama dan kepercayaan → Warga Eskimo di Kutub Utara membutuhkan rumah Igloo dan baju bulu tebal",
      "Adat istiadat → Pasien asma membutuhkan tabung oksigen di ruang IGD",
      "Kondisi alam → Upacara Ngaben di Bali membutuhkan wadah pembakaran jenazah"
    ],
    correct: 1,
    explanation: "Laptop dan internet adalah contoh tepat dari faktor kemajuan peradaban modern."
  },
  {
    id: 32,
    babId: 1,
    babName: "Bab 1",
    topic: "Benda Ekonomi vs Benda Bebas",
    question: "Perbedaan utama antara Benda Ekonomi dan Benda Bebas adalah...",
    options: [
      "Benda ekonomi tersedia melimpah tanpa batas, sedangkan benda bebas harus dibeli di minimarket",
      "Benda ekonomi jumlahnya terbatas dan memerlukan pengorbanan (uang/usaha) untuk mendapatkannya, sedangkan benda bebas tersedia melimpah di alam sehingga dapat dinikmati tanpa pengorbanan uang",
      "Benda ekonomi hanya berupa jasa, sedangkan benda bebas hanya berupa barang tambang",
      "Benda ekonomi tidak memiliki nilai guna, sedangkan benda bebas selalu berharga mahal",
      "Benda ekonomi dan benda bebas sama-sama harus diimpor dari luar negeri"
    ],
    correct: 1,
    explanation: "Benda ekonomi butuh pengorbanan biaya/tenaga, benda bebas melimpah di alam tanpa biaya."
  },
  {
    id: 33,
    babId: 1,
    babName: "Bab 1",
    topic: "Perubahan Benda Bebas Menjadi Ekonomi",
    question: "Udara bersih di alam terbuka adalah benda bebas. Udara tersebut berubah menjadi benda ekonomi apabila...",
    options: [
      "Dihirup oleh anak-anak saat bermain di lapangan desa pada pagi hari",
      "Diproses dan dikemas ke dalam tabung oksigen medis yang dijual untuk pasien di rumah sakit",
      "Bertiup sepoi-sepoi di tepi pantai saat sore hari",
      "Digunakan oleh tumbuhan hijau untuk proses fotosintesis",
      "Menggerakkan awan di langit secara alami"
    ],
    correct: 1,
    explanation: "Setelah dimurnikan, dikemas ke tabung oksigen, dan diperjualbelikan, udara berubah menjadi benda ekonomi."
  },
  {
    id: 34,
    babId: 1,
    babName: "Bab 1",
    topic: "Benda Konsumsi vs Produksi",
    question: "Tepung terigu yang dipakai ibu membuat pisang goreng untuk keluarga dan tepung terigu yang dipakai pabrik roti untuk dijual berturut-turut berfungsi sebagai...",
    options: [
      "Benda produksi dan benda konsumsi",
      "Benda konsumsi dan benda produksi",
      "Benda bebas dan benda illith",
      "Benda substitusi dan benda abstrak",
      "Barang jadi dan barang tambang"
    ],
    correct: 1,
    explanation: "Dipakai langsung untuk konsumsi keluarga (benda konsumsi); dipakai pabrik membuat roti yang dijual (benda produksi)."
  },
  {
    id: 35,
    babId: 1,
    babName: "Bab 1",
    topic: "Tahapan Proses Produksi",
    question: "Urutan transformasi benda pemuas kebutuhan dari Barang Mentah → Barang Setengah Jadi → Barang Jadi yang tepat adalah...",
    options: [
      "Kemeja seragam → Benang pintal → Serat kapas pohon",
      "Serat kapas pohon → Benang dan kain tekstil → Kemeja seragam sekolah",
      "Benang pintal → Serat kapas pohon → Kemeja seragam sekolah",
      "Pohon jati → Tepung terigu → Roti tawar",
      "Bijih besi → Sepeda motor → Lempengan baja"
    ],
    correct: 1,
    explanation: "Kapas (mentah) → Benang/kain (setengah jadi) → Kemeja seragam (barang jadi)."
  },
  {
    id: 36,
    babId: 1,
    babName: "Bab 1",
    topic: "Benda Komplementer",
    question: "Pasangan benda pemuas kebutuhan berikut yang memiliki hubungan Benda Komplementer (pelengkap) adalah...",
    options: [
      "Beras dengan jagung; serta daging sapi dengan ikan laut",
      "Kompor gas dengan tabung LPG; serta sepeda motor dengan bensin",
      "Kopi dengan teh; serta pena dengan pensil",
      "Sepatu olahraga dengan sandal jepit; serta bus dengan kereta api",
      "Payung dengan jas hujan; serta kipas angin dengan AC"
    ],
    correct: 1,
    explanation: "Kompor gas dan tabung LPG serta motor dan bensin harus digunakan bersama agar berfungsi."
  },
  {
    id: 37,
    babId: 1,
    babName: "Bab 1",
    topic: "Benda Substitusi",
    question: "Ketika harga daging sapi melonjak, banyak konsumen beralih membeli daging ayam atau ikan. Hubungan daging sapi dengan daging ayam merupakan...",
    options: [
      "Benda komplementer",
      "Benda substitusi (barang pengganti)",
      "Benda bebas",
      "Barang mentah",
      "Modal tetap"
    ],
    correct: 1,
    explanation: "Daging ayam dapat saling menggantikan fungsi daging sapi (benda substitusi)."
  },
  {
    id: 38,
    babId: 1,
    babName: "Bab 1",
    topic: "Form Utility",
    question: "Pengrajin mebel mengolah kayu jati gelondongan menjadi satu set kursi tamu ukir bernilai tinggi. Kegiatan ini menciptakan peningkatan nilai guna...",
    options: [
      "Place utility (kegunaan tempat)",
      "Time utility (kegunaan waktu)",
      "Form utility (kegunaan bentuk)",
      "Ownership utility (kegunaan kepemilikan)",
      "Free utility (kegunaan bebas)"
    ],
    correct: 2,
    explanation: "Perubahan bentuk kayu gelondongan menjadi kursi ukir menciptakan Form Utility."
  },
  {
    id: 39,
    babId: 1,
    babName: "Bab 1",
    topic: "Place Utility",
    question: "Pasir di dasar sungai diangkut menggunakan truk ke lokasi proyek pembangunan gedung perkantoran di kota. Hal ini merupakan contoh dari...",
    options: [
      "Form utility (kegunaan bentuk)",
      "Place utility (kegunaan tempat)",
      "Time utility (kegunaan waktu)",
      "Ownership utility (kegunaan kepemilikan)",
      "Service utility (kegunaan layanan)"
    ],
    correct: 1,
    explanation: "Nilai guna pasir meningkat karena dipindahkan ke tempat yang membutuhkan (Place Utility)."
  },
  {
    id: 40,
    babId: 1,
    babName: "Bab 1",
    topic: "Time Utility",
    question: "Bulog menyimpan beras saat panen raya dan mendistribusikannya saat paceklik; jas hujan dipakai saat turun hujan. Keduanya merupakan contoh...",
    options: [
      "Form utility (kegunaan bentuk)",
      "Place utility (kegunaan tempat)",
      "Time utility (kegunaan waktu)",
      "Ownership utility (kegunaan kepemilikan)",
      "Element utility (kegunaan dasar)"
    ],
    correct: 2,
    explanation: "Pemanfaatan barang tepat pada waktu dibutuhkan menciptakan Time Utility."
  },
  {
    id: 41,
    babId: 1,
    babName: "Bab 1",
    topic: "Ownership Utility",
    question: "Jaring ikan dan perahu baru memberikan manfaat optimal penangkapan ikan setelah dibeli dan dimiliki oleh nelayan. Konsep kegunaan ini disebut...",
    options: [
      "Form utility (kegunaan bentuk)",
      "Place utility (kegunaan tempat)",
      "Time utility (kegunaan waktu)",
      "Ownership utility (kegunaan kepemilikan)",
      "Raw utility (kegunaan mentah)"
    ],
    correct: 3,
    explanation: "Pindahnya hak milik ke pihak yang tepat memakainya menciptakan Ownership Utility."
  },
  {
    id: 42,
    babId: 1,
    babName: "Bab 1",
    topic: "Pilar Alokasi SDM",
    question: "Mengapa unsur 'Kejujuran dan Keadilan' sangat krusial dalam pengalokasian Sumber Daya Manusia (SDM)?",
    options: [
      "Karena kejujuran dapat menggantikan seluruh fungsi mesin pabrik secara otomatis",
      "Karena tanpa kejujuran dan keadilan, keahlian tinggi justru dapat disalahgunakan untuk korupsi, memanipulasi laporan keuangan, atau mencurangi timbangan konsumen",
      "Karena orang yang jujur tidak memerlukan gaji atau upah bulanan",
      "Karena kejujuran hanya dibutuhkan oleh pekerja kasar di lapangan",
      "Karena keadilan berarti memberikan upah yang sama persis tanpa melihat beban kerja"
    ],
    correct: 1,
    explanation: "Integritas moral memastikan keahlian dan wewenang tidak disalahgunakan untuk kecurangan/korupsi."
  },
  {
    id: 43,
    babId: 1,
    babName: "Bab 1",
    topic: "Klasifikasi Keahlian SDM",
    question: "(1) Dokter & Akuntan; (2) Montir & Penjahit; (3) Kuli angkut & Penyapu jalan. Pengelompokan SDM berdasarkan keahliannya secara berturut-turut adalah...",
    options: [
      "Tenaga kerja terlatih, tenaga kerja terdidik, dan tenaga kerja tidak terdidik",
      "Tenaga kerja terdidik (skilled), tenaga kerja terlatih (trained), dan tenaga kerja tidak terdidik/tidak terlatih (unskilled)",
      "Tenaga kerja kasar, tenaga kerja terampil, dan tenaga kerja ahli",
      "Modal abstrak, modal konkret, dan modal lancar",
      "Tenaga kerja rohani, tenaga kerja jasmani, dan tenaga kerja mesin"
    ],
    correct: 1,
    explanation: "Dokter (terdidik), Montir (terlatih kursus/pengalaman), Kuli (tidak terdidik/tidak terlatih)."
  },
  {
    id: 44,
    babId: 1,
    babName: "Bab 1",
    topic: "Alokasi SDA Tidak Dapat Diperbarui",
    question: "Alokasi SDA tidak dapat diperbarui (minyak bumi, batu bara, nikel) harus hemat dan efisien karena...",
    options: [
      "Sumber daya tersebut dapat tumbuh kembali dalam waktu satu minggu setelah ditambang",
      "Cadangannya di bumi sangat terbatas dan membutuhkan waktu jutaan tahun untuk terbentuk kembali, sehingga jika dieksploitasi berlebihan akan habis",
      "Sumber daya tersebut termasuk benda bebas yang tidak memiliki nilai jual di pasar dunia",
      "Pemerintah melarang penggunaan seluruh barang tambang untuk kegiatan industri",
      "Sumber daya alam tidak berperan dalam proses produksi barang jadi"
    ],
    correct: 1,
    explanation: "Proses pembentukan SDA fosil/tambang memerlukan waktu jutaan tahun, sehingga depositnya terbatas."
  },
  {
    id: 45,
    babId: 1,
    babName: "Bab 1",
    topic: "Modal Berdasarkan Wujud",
    question: "Berikut yang seluruhnya termasuk 'Modal Barang (Capital Goods)' dalam perusahaan konveksi adalah...",
    options: [
      "Uang tunai di brankas, saldo giro di bank, dan deposito berjangka",
      "Mesin jahit, mesin obras, gedung pabrik, gunting kain, dan mobil boks pengangkut",
      "Saham perusahaan, surat obligasi negara, dan cek tunai",
      "Nama baik perusahaan (goodwill) dan hak merek dagang",
      "Pinjaman kredit dari bank dan setoran tunai pemilik"
    ],
    correct: 1,
    explanation: "Mesin, gedung, dan kendaraan angkut adalah modal yang berwujud fisik/barang."
  },
  {
    id: 46,
    babId: 1,
    babName: "Bab 1",
    topic: "Modal Tetap vs Modal Lancar",
    question: "Gedung pabrik dan oven roti digunakan berulang kali selama bertahun-tahun, sedangkan tepung terigu, gula, dan gas habis dalam sekali produksi. Kedua modal tersebut berturut-turut adalah...",
    options: [
      "Modal lancar dan modal tetap",
      "Modal tetap (fixed capital) dan modal lancar (variable/working capital)",
      "Modal abstrak dan modal konkret",
      "Modal masyarakat dan modal perseorangan",
      "Modal pinjaman dan modal sendiri"
    ],
    correct: 1,
    explanation: "Gedung/oven = Modal Tetap; Tepung/gula/gas = Modal Lancar."
  },
  {
    id: 47,
    babId: 1,
    babName: "Bab 1",
    topic: "Modal menurut Subjek",
    question: "Jalan raya, jembatan, bandara umum, dan pasar induk milik pemerintah dikategorikan sebagai...",
    options: [
      "Modal perseorangan (individual capital)",
      "Modal masyarakat / modal sosial (social capital)",
      "Modal lancar sekali pakai",
      "Modal abstrak tidak berwujud",
      "Benda konsumsi pribadi"
    ],
    correct: 1,
    explanation: "Dimiliki publik/negara untuk kepentingan masyarakat luas = Modal Sosial / Masyarakat."
  },
  {
    id: 48,
    babId: 1,
    babName: "Bab 1",
    topic: "Modal Konkret vs Abstrak",
    question: "Nama baik perusahaan (goodwill), citra merek (brand image), hak paten, dan resep rahasia keluarga termasuk dalam...",
    options: [
      "Modal konkret (tangible capital)",
      "Modal abstrak (intangible capital)",
      "Modal lancar berwujud bahan baku",
      "Modal masyarakat umum",
      "Modal pinjaman bank"
    ],
    correct: 1,
    explanation: "Tidak berwujud fisik namun sangat berharga bagi keuntungan usaha = Modal Abstrak."
  },
  {
    id: 49,
    babId: 1,
    babName: "Bab 1",
    topic: "Modal menurut Sumber",
    question: "Pak Anton membuka usaha dengan modal Rp150.000.000: Rp100.000.000 dari tabungan pribadi dan Rp50.000.000 dari KUR Bank. Kedua dana tersebut berturut-turut adalah...",
    options: [
      "Modal pinjaman dan modal sendiri",
      "Modal sendiri (equity capital) dan modal pinjaman/asing (loan capital)",
      "Modal masyarakat dan modal perseorangan",
      "Modal abstrak dan modal konkret",
      "Biaya peluang dan biaya langsung"
    ],
    correct: 1,
    explanation: "Tabungan sendiri = Modal Sendiri; Pinjaman bank = Modal Pinjaman (Asing)."
  },
  {
    id: 50,
    babId: 1,
    babName: "Bab 1",
    topic: "Sintesis Alokasi Sumber Daya",
    question: "Petani mengolah biji kopi mentah menjadi bubuk kopi kemasan menggunakan mesin roasting (modal tetap), lalu mengirimkannya ke kafe di Jakarta. Nilai guna yang tercipta adalah...",
    options: [
      "Mesin sangrai kopi termasuk modal lancar dan benda konsumsi akhir",
      "Pengolahan biji kopi menjadi bubuk kopi menciptakan Form Utility, sedangkan pengiriman ke Jakarta menciptakan Place Utility",
      "Biji kopi mentah termasuk barang jadi, sedangkan bubuk kopi kemasan termasuk barang mentah",
      "Para pemuda desa yang dilatih mengoperasikan mesin termasuk tenaga kerja tidak terdidik dan tidak terlatih",
      "Koperasi tersebut hanya menggunakan modal sendiri tanpa modal pinjaman"
    ],
    correct: 1,
    explanation: "Mengolah bentuk biji ke bubuk = Form Utility; mengirim dari desa ke Jakarta = Place Utility."
  }
];

export const BAB1_ESSAYS: EssayQuestion[] = [
  {
    id: 1,
    babId: 1,
    babName: "Bab 1",
    topic: "Pengertian Kelangkaan & Dua Makna 'Terbatas'",
    question: "Jelaskan pengertian kelangkaan (scarcity) dalam ilmu ekonomi, serta uraikan secara rinci 2 (dua) makna dari kata 'terbatas' pada sumber daya ekonomi beserta contoh nyatanya!",
    keywords: ["kebutuhan tidak terbatas", "sumber daya terbatas", "tidak cukup", "pengorbanan", "biaya"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p><strong>1. Pengertian Kelangkaan (Scarcity):</strong> Kelangkaan adalah kondisi inti masalah ekonomi di mana jumlah alat pemuas kebutuhan (sumber daya ekonomi) yang tersedia terbatas, sedangkan kebutuhan manusia bersifat tidak terbatas.</p>
      <p><strong>2. Dua Makna Utama Kata 'Terbatas' dalam Kelangkaan:</strong></p>
      <ul class="list-disc pl-5 space-y-1">
        <li><strong>a. Terbatas dalam artian tidak cukup:</strong> Jumlah fisik barang atau sumber daya yang ada tidak mampu mencukupi seluruh kebutuhan manusia yang terus bertambah. <em>Contoh:</em> Lahan pertanian tetap, jumlah penduduk berlipat ganda.</li>
        <li><strong>b. Terbatas dalam arti butuh pengorbanan:</strong> Sumber daya tidak diperoleh gratis, melainkan menuntut pengorbanan uang, tenaga, waktu, atau pikiran. <em>Contoh:</em> Untuk memperoleh beras, pakaian, atau listrik, seseorang harus bekerja dan membayar.</li>
      </ul>
    </div>`
  },
  {
    id: 2,
    babId: 1,
    babName: "Bab 1",
    topic: "Faktor Penyebab & Solusi Mengatasi Kelangkaan",
    question: "Mengapa kelangkaan sumber daya ekonomi dapat terjadi di masyarakat? Jelaskan minimal 4 faktor penyebab kelangkaan dan 4 langkah strategis untuk mengatasinya!",
    keywords: ["pertumbuhan penduduk", "geografis", "teknologi", "bencana", "skala prioritas", "energi alternatif", "efisien"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p><strong>1. Empat Faktor Penyebab Kelangkaan:</strong></p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Pertumbuhan penduduk cepat (deret ukur vs deret hitung pangan Malthus).</li>
        <li>Perbedaan letak geografis (sumber daya tidak tersebar merata).</li>
        <li>Keterbatasan kemampuan produksi dan penguasaan teknologi.</li>
        <li>Bencana alam dan kerusakan ekosistem lingkungan.</li>
      </ul>
      <p><strong>2. Empat Strategi Mengatasi Kelangkaan:</strong></p>
      <ul class="list-disc pl-5 space-y-1">
        <li>Menyusun skala prioritas kebutuhan (mendahulukan yang paling mendesak).</li>
        <li>Menggunakan sumber daya secara hemat dan efisien.</li>
        <li>Mengembangkan energi terbarukan dan barang substitusi.</li>
        <li>Inovasi teknologi pengolahan dan daur ulang (recycle).</li>
      </ul>
    </div>`
  },
  {
    id: 3,
    babId: 1,
    babName: "Bab 1",
    topic: "Perbedaan Biaya Langsung dan Biaya Peluang",
    question: "Jelaskan perbedaan konsep antara 'Biaya Langsung (Explicit Cost)' dan 'Biaya Peluang (Opportunity Cost)' beserta contoh konkret keduanya pada kehidupan seorang wirausahawan!",
    keywords: ["biaya langsung", "eksplisit", "uang nyata", "biaya peluang", "dikorbankan", "alternatif terbaik"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p><strong>Biaya Langsung (Explicit Cost):</strong> Pengeluaran kas nyata yang dibayarkan untuk membiayai usaha. <em>Contoh:</em> beli biji kopi, susu, cangkir, bayar listrik, dan gaji barista kedai kopi.</p>
      <p><strong>Biaya Peluang (Opportunity Cost):</strong> Nilai dari alternatif terbaik yang terpaksa dikorbankan. <em>Contoh:</em> jika pemilik kedai kopi sebelumnya bekerja di bank bergaji Rp6.000.000/bulan lalu resign, gaji Rp6.000.000 yang ia lepaskan adalah biaya peluang.</p>
    </div>`
  },
  {
    id: 4,
    babId: 1,
    babName: "Bab 1",
    topic: "Perhitungan Biaya Peluang Pemilihan Pekerjaan",
    question: "Bagas menerima 3 tawaran kerja: Perusahaan Tambang Rp9.500.000/bulan, Bank BUMN Rp7.800.000/bulan, dan Startup Rp6.500.000/bulan. Bagas memilih bekerja di Startup. Hitung biaya peluang Bagas per bulan dan per tahun (12 bulan)!",
    keywords: ["9.500.000", "114.000.000", "tertinggi", "dikorbankan", "perusahaan tambang"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>• Pilihan diambil = Startup (Rp6.500.000/bulan).</p>
      <p>• Pilihan dikorbankan = Tambang (Rp9.500.000) dan Bank BUMN (Rp7.800.000).</p>
      <p>• <strong>Biaya Peluang per bulan</strong> = Nilai TERTINGGI yang dikorbankan = <strong>Rp9.500.000/bulan</strong> (bukan dijumlahkan!).</p>
      <p>• <strong>Biaya Peluang per tahun</strong> = 12 × Rp9.500.000 = <strong>Rp114.000.000/tahun</strong>.</p>
    </div>`
  },
  {
    id: 5,
    babId: 1,
    babName: "Bab 1",
    topic: "Laba Akuntansi vs Laba Ekonomi Usaha",
    question: "Pak Arman keluar dari pekerjaan bergaji Rp10.000.000/bulan dan memakai ruko miliknya yang sebelumnya disewakan Rp2.500.000/bulan untuk membuka percetakan. Penerimaan kotor Rp40.000.000, biaya operasional bahan dan upah Rp23.000.000. Hitung Biaya Langsung, Biaya Peluang, Laba Akuntansi, dan Laba Ekonomi!",
    keywords: ["23.000.000", "12.500.000", "17.000.000", "4.500.000", "laba akuntansi", "laba ekonomi"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>• <strong>Biaya Langsung:</strong> Rp23.000.000</p>
      <p>• <strong>Biaya Peluang:</strong> Gaji lama (Rp10.000.000) + Sewa ruko (Rp2.500.000) = <strong>Rp12.500.000</strong></p>
      <p>• <strong>Laba Akuntansi:</strong> Rp40.000.000 − Rp23.000.000 = <strong>Rp17.000.000</strong></p>
      <p>• <strong>Laba Ekonomi:</strong> Rp40.000.000 − (Rp23.000.000 + Rp12.500.000) = Rp40.000.000 − Rp35.500.000 = <strong>Rp4.500.000 (Menguntungkan secara ekonomi)</strong></p>
    </div>`
  },
  {
    id: 6,
    babId: 1,
    babName: "Bab 1",
    topic: "Biaya Peluang Melanjutkan Studi Kuliah",
    question: "Laras ditawari kerja bergaji Rp4.200.000/bulan tapi memilih kuliah S-1 selama 4 tahun (48 bulan). Biaya UKT Rp56.000.000 dan buku Rp12.000.000. Hitung Biaya Langsung murni kuliah dan Biaya Peluang selama 4 tahun!",
    keywords: ["68.000.000", "201.600.000", "269.600.000", "biaya langsung", "biaya peluang"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>• <strong>Biaya Langsung:</strong> UKT (Rp56.000.000) + Buku (Rp12.000.000) = <strong>Rp68.000.000</strong>.</p>
      <p>• <strong>Biaya Peluang:</strong> 48 bulan × Rp4.200.000 = <strong>Rp201.600.000</strong>.</p>
      <p>• Total Pengorbanan Ekonomi = Rp68.000.000 + Rp201.600.000 = Rp269.600.000.</p>
    </div>`
  },
  {
    id: 7,
    babId: 1,
    babName: "Bab 1",
    topic: "Perbedaan Kebutuhan dan Keinginan Siswa",
    question: "Jelaskan perbedaan mendasar antara Kebutuhan dan Keinginan ditinjau dari urgensi dan dampaknya, serta berikan masing-masing 3 contoh nyata bagi seorang siswa SMA!",
    keywords: ["kebutuhan", "keinginan", "wajib", "kelangsungan hidup", "selera", "gengsi"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p><strong>Kebutuhan:</strong> Wajib dipenuhi demi kelangsungan hidup dan fungsi belajar. Jika tidak dipenuhi timbul gangguan fatal. <em>Contoh siswa:</em> makan sarapan bergizi, memiliki seragam sekolah layak, memiliki buku tulis/paket.</p>
      <p><strong>Keinginan:</strong> Tambahan kepuasan yang didorong selera/gengsi dan dapat ditunda. <em>Contoh siswa:</em> smartphone flagship Rp20 juta, nongkrong di kafe mahal, nonton konser VIP luar negeri.</p>
    </div>`
  },
  {
    id: 8,
    babId: 1,
    babName: "Bab 1",
    topic: "Kebutuhan Berdasarkan Intensitas Kegunaan",
    question: "Uraikan pembagian kebutuhan menurut intensitas kegunaan (Primer, Sekunder, Tersier), dan jelaskan mengapa status suatu barang bisa berbeda bagi orang yang berbeda!",
    keywords: ["primer", "sekunder", "tersier", "pangan", "sandang", "papan", "profesi", "pendapatan"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>• <strong>Primer:</strong> Pokok mutlak (pangan, sandang, papan, kesehatan dasar).</p>
      <p>• <strong>Sekunder:</strong> Pelengkap kenyamanan (perabot, motor, smartphone).</p>
      <p>• <strong>Tersier:</strong> Mewah/prestise (mobil sport, berlian, kapal pesiar).</p>
      <p><strong>Sifat Relatif:</strong> Kamera DSLR canggih bagi siswa biasa adalah barang mewah/tersier, tapi bagi fotografer jurnalistik adalah alat kerja pokok (primer).</p>
    </div>`
  },
  {
    id: 9,
    babId: 1,
    babName: "Bab 1",
    topic: "Klasifikasi Kebutuhan Waktu, Sifat, Subjek",
    question: "Jelaskan klasifikasi kebutuhan menurut: (a) Waktu, (b) Sifat, dan (c) Subjek beserta masing-masing 2 contoh nyata!",
    keywords: ["sekarang", "masa yang akan datang", "jasmani", "rohani", "individual", "kolektif"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>• <strong>Waktu:</strong> Sekarang (obat saat sakit, makan saat lapar) vs Masa Datang (tabungan pensiun, asuransi).</p>
      <p>• <strong>Sifat:</strong> Jasmani (makanan sehat, olahraga) vs Rohani (ibadah agama, rekreasi).</p>
      <p>• <strong>Subjek:</strong> Individual (stetoskop dokter, kacamata minus) vs Kolektif (jalan tol, rumah sakit umum).</p>
    </div>`
  },
  {
    id: 10,
    babId: 1,
    babName: "Bab 1",
    topic: "4 Faktor yang Mempengaruhi Kebutuhan",
    question: "Jelaskan bagaimana 4 faktor berikut mempengaruhi kebutuhan manusia: Kondisi Alam, Peradaban, Agama, dan Adat Istiadat!",
    keywords: ["kondisi alam", "peradaban", "agama", "adat istiadat", "iklim", "teknologi"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>1. <strong>Kondisi Alam:</strong> Iklim dingin butuh pakaian wol tebal & pemanas, iklim tropis butuh pakaian katun tipis.</p>
      <p>2. <strong>Peradaban:</strong> Zaman purba butuh perkakas batu, zaman modern butuh laptop & koneksi internet 5G.</p>
      <p>3. <strong>Agama:</strong> Umat Islam butuh makanan halal & sajadah; umat Hindu butuh janur & dupa canang sari.</p>
      <p>4. <strong>Adat Istiadat:</strong> Suku Batak butuh kain Ulos saat pernikahan; suku Jawa butuh tumpeng & gamelan.</p>
    </div>`
  },
  {
    id: 11,
    babId: 1,
    babName: "Bab 1",
    topic: "Benda Ekonomi vs Benda Bebas",
    question: "Jelaskan perbedaan Benda Ekonomi dan Benda Bebas, serta bagaimana suatu Benda Bebas dapat berubah menjadi Benda Ekonomi!",
    keywords: ["benda ekonomi", "benda bebas", "pengorbanan", "melimpah", "air", "oksigen"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>Benda Ekonomi terbatas dan memerlukan pengorbanan uang/tenaga (beras, baju). Benda Bebas melimpah di alam tanpa biaya (udara bebas, sinar matahari).</p>
      <p>Benda bebas berubah jadi ekonomi saat diolah/dikemas: air pegunungan jernih jadi air mineral kemasan, udara bebas diolah jadi oksigen tabung medis rumah sakit.</p>
    </div>`
  },
  {
    id: 12,
    babId: 1,
    babName: "Bab 1",
    topic: "Benda Konsumsi vs Benda Produksi",
    question: "Jelaskan perbedaan Benda Konsumsi dan Benda Produksi (Barang Modal), serta berikan contoh sebuah barang yang bisa menjadi keduanya tergantung penggunaannya!",
    keywords: ["benda konsumsi", "benda produksi", "barang modal", "konsumen akhir", "proses produksi"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>Benda Konsumsi dipakai langsung oleh konsumen akhir untuk kebutuhan pribadi. Benda Produksi dipakai sebagai alat memproduksi barang/jasa lain.</p>
      <p><em>Contoh ganda:</em> Mobil Avanza jika dipakai keluarga jalan-jalan adalah <strong>Benda Konsumsi</strong>; jika dipakai taksi online mencari penghasilan adalah <strong>Benda Produksi</strong>.</p>
    </div>`
  },
  {
    id: 13,
    babId: 1,
    babName: "Bab 1",
    topic: "Barang Mentah, Setengah Jadi, dan Jadi",
    question: "Jelaskan rantai transformasi Barang Mentah → Barang Setengah Jadi → Barang Jadi pada sektor pertanian, kehutanan, dan pertambangan!",
    keywords: ["barang mentah", "bahan baku", "setengah jadi", "barang jadi", "pengolahan"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>• <strong>Pertanian:</strong> Serat kapas (mentah) → Benang/kain (setengah jadi) → Baju kemeja (jadi).</p>
      <p>• <strong>Kehutanan:</strong> Kayu jati gelondongan (mentah) → Papan gergajian (setengah jadi) → Lemari ukir (jadi).</p>
      <p>• <strong>Pertambangan:</strong> Bijih besi (mentah) → Lempengan baja (setengah jadi) → Rangka mobil (jadi).</p>
    </div>`
  },
  {
    id: 14,
    babId: 1,
    babName: "Bab 1",
    topic: "Benda Komplementer vs Substitusi",
    question: "Bandingkan Benda Komplementer dan Benda Substitusi! Bagaimana pengaruh kenaikan harga terhadap barang pasangannya?",
    keywords: ["komplementer", "pelengkap", "substitusi", "pengganti", "harga", "permintaan"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>• <strong>Komplementer:</strong> Dipakai bersama (motor & bensin). Jika harga bensin naik tajam, permintaan motor bensin turun.</p>
      <p>• <strong>Substitusi:</strong> Saling menggantikan (daging sapi & ayam). Jika harga sapi naik tajam, permintaan ayam naik karena konsumen beralih.</p>
    </div>`
  },
  {
    id: 15,
    babId: 1,
    babName: "Bab 1",
    topic: "4 Macam Nilai Guna Benda (Utility)",
    question: "Jelaskan 4 macam nilai guna (Form, Place, Time, Ownership Utility) beserta contoh masing-masing!",
    keywords: ["form utility", "place utility", "time utility", "ownership utility", "bentuk", "tempat", "waktu", "kepemilikan"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>1. <strong>Form Utility:</strong> Nilai guna naik karena diubah bentuknya (kayu diolah jadi kursi; kedelai jadi tempe).</p>
      <p>2. <strong>Place Utility:</strong> Nilai guna naik karena dipindahkan tempatnya (pasir sungai dibawa ke kota untuk gedung).</p>
      <p>3. <strong>Time Utility:</strong> Nilai guna naik bila dipakai tepat waktu (payung saat hujan, beras cadangan saat paceklik).</p>
      <p>4. <strong>Ownership Utility:</strong> Nilai guna naik saat dimiliki orang yang tepat (stetoskop dimiliki dokter, cangkul dimiliki petani).</p>
    </div>`
  },
  {
    id: 16,
    babId: 1,
    babName: "Bab 1",
    topic: "3 Aspek Alokasi SDM",
    question: "Jelaskan tiga aspek utama dalam pengalokasian Sumber Daya Manusia (Keahlian, Kejujuran & Keadilan, Kekuatan Fisik) dan mengapa harus seimbang!",
    keywords: ["keahlian", "terdidik", "terlatih", "kejujuran", "keadilan", "kekuatan fisik"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>1. <strong>Keahlian:</strong> Kompetensi kerja (terdidik, terlatih, tidak terdidik).</p>
      <p>2. <strong>Kejujuran & Keadilan:</strong> Integritas moral agar tidak korupsi dan memperlakukan buruh/konsumen secara adil.</p>
      <p>3. <strong>Kekuatan Fisik:</strong> Kebugaran dan kesehatan prima untuk bekerja produktif.</p>
      <p><em>Pentingnya Keseimbangan:</em> Pekerja cerdas tanpa kejujuran akan merugikan melalui korupsi/penipuan; pekerja jujur tanpa keahlian tidak produktif.</p>
    </div>`
  },
  {
    id: 17,
    babId: 1,
    babName: "Bab 1",
    topic: "Alokasi SDA Berkelanjutan",
    question: "Bedakan SDA yang dapat diperbarui dan tidak dapat diperbarui, serta uraikan langkah bijaksana pengalokasiannya!",
    keywords: ["sumber daya alam", "dapat diperbarui", "tidak dapat diperbarui", "reboisasi", "berkelanjutan", "efisien"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>• <strong>Dapat Diperbarui:</strong> Pulih alami/budi daya (hutan, ikan, pertanian, sinar surya).</p>
      <p>• <strong>Tidak Dapat Diperbarui:</strong> Cadangan terbatas (minyak bumi, batu bara, emas, nikel).</p>
      <p>• <strong>Langkah Bijaksana:</strong> Prinsip pembangunan berkelanjutan, reboisasi hutan, reklamasi bekas tambang, dan transisi ke energi terbarukan.</p>
    </div>`
  },
  {
    id: 18,
    babId: 1,
    babName: "Bab 1",
    topic: "Modal Berdasarkan Wujud dan Sifat",
    question: "Jelaskan klasifikasi Modal menurut Wujudnya (Uang vs Barang) dan Sifat Pemakaiannya (Tetap vs Lancar) pada usaha restoran!",
    keywords: ["modal uang", "modal barang", "modal tetap", "modal lancar", "berulang kali", "habis pakai"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>• <strong>Wujud:</strong> Modal Uang (kas operasional, saldo rekening restoran) vs Modal Barang (kompor besar, kulkas, meja-kursi makan).</p>
      <p>• <strong>Sifat:</strong> Modal Tetap (bangunan restoran, kompor, piring dipakai berulang kali) vs Modal Lancar (beras, minyak goreng, daging, gas habis sekali pakai).</p>
    </div>`
  },
  {
    id: 19,
    babId: 1,
    babName: "Bab 1",
    topic: "Modal menurut Subjek, Bentuk, dan Sumber",
    question: "Uraikan klasifikasi Modal menurut: Subjek (Perseorangan vs Masyarakat), Bentuk (Konkret vs Abstrak), dan Sumber (Sendiri vs Pinjaman)!",
    keywords: ["perseorangan", "masyarakat", "konkret", "abstrak", "goodwill", "modal sendiri", "modal pinjaman"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>1. <strong>Subjek:</strong> Perseorangan (rumah kos milik pribadi) vs Modal Masyarakat/Sosial (jalan raya, jembatan publik).</p>
      <p>2. <strong>Bentuk:</strong> Konkret (mesin, gedung terlihat fisik) vs Abstrak (goodwill, brand, hak paten tidak berwujud fisik).</p>
      <p>3. <strong>Sumber:</strong> Modal Sendiri (tabungan pemilik, laba ditahan) vs Modal Pinjaman/Asing (kredit bank, pinjaman koperasi).</p>
    </div>`
  },
  {
    id: 20,
    babId: 1,
    babName: "Bab 1",
    topic: "Studi Kasus Alokasi Sumber Daya & Biaya Peluang",
    question: "Bu Rina memakai tabungan pribadi Rp50 juta dan kredit bank Rp30 juta untuk sewa kios, beli mesin jahit, beli kain katun/benang, serta mempekerjakan 3 penjahit kursus. Bu Rina keluar dari kerjaan pabrik bergaji Rp4.800.000/bulan. Identifikasikan modal sendiri/pinjaman, modal tetap/lancar, jenis SDM, dan biaya peluangnya!",
    keywords: ["50.000.000", "30.000.000", "mesin jahit", "kain", "tenaga kerja terlatih", "4.800.000"],
    answer: `<div class="space-y-2 text-xs sm:text-sm">
      <p>• <strong>Modal Sendiri:</strong> Tabungan pribadi Rp50.000.000; <strong>Modal Pinjaman:</strong> Kredit bank Rp30.000.000.</p>
      <p>• <strong>Modal Tetap:</strong> Mesin jahit dan sewa kios; <strong>Modal Lancar:</strong> Kain katun dan benang (habis sekali proses).</p>
      <p>• <strong>SDM Penjahit:</strong> Tenaga Kerja Terlatih (Trained Labor).</p>
      <p>• <strong>Biaya Peluang Bu Rina:</strong> Gaji pabrik yang dikorbankan = <strong>Rp4.800.000 per bulan</strong>.</p>
    </div>`
  }
];
