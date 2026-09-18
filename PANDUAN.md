# Panduan website SD Negeri 3 Kesiman

## Status versi redesign

Website statis multipage, tanpa instalasi paket atau proses build. Beranda memakai foto kegiatan sebagai hero dan mengutamakan akses cepat untuk Pengumuman, Agenda, SPMB, dan Download. Halaman Profil, Akademik, Kesiswaan, Ekstrakurikuler, Prestasi, Berita, Pengumuman, Agenda, Galeri, Download, SPMB, dan Kontak sudah memiliki route tersendiri.

Nama dan foto kepala sekolah mengikuti data yang sudah dikonfirmasi. Berita, prestasi, guru, agenda, pengumuman, berkas unduhan, serta saluran kontak yang belum tersedia memakai empty state yang jelas dan tidak diisi dengan data buatan.

File asli `README.md` dan `index` dipertahankan. File asli bernama `index` (tanpa ekstensi), sehingga ditambahkan `index.html` sebagai beranda GitHub Pages. File `index` hanya arsip versi sebelumnya dan tidak digunakan oleh halaman baru.

## Struktur

```text
index.html                         Beranda utama
profil/ dan profil/*/              Profil, visi-misi, sejarah, dan GTK
akademik/, kesiswaan/              Informasi akademik dan kesiswaan
ekstrakurikuler/, prestasi/        Kegiatan dan ruang prestasi
program/*/                         Detail Gelis Manis, Nupera, Gerustik, dan 7 KAIH
berita/ dan berita/detail/         Daftar dan pola detail berita
pengumuman/, agenda/, galeri/      Pusat informasi dan dokumentasi
download/, spmb/, kontak/          Layanan publik sekolah
assets/css/style.css               Warna, tata letak, dan tampilan responsif
assets/js/main.js                  Menu HP dan tahun pada footer
assets/images/ilustrasi-sekolah.svg Ilustrasi dekoratif, bukan foto sekolah
assets/images/logo-sekolah.png     Logo yang diberikan dan disetujui sekolah
assets/images/kegiatan-pengibaran.jpg Foto kegiatan yang diberikan pengguna
assets/images/kegiatan-upacara.jpg    Foto kegiatan yang diberikan pengguna
assets/images/kepala-sekolah.png      Foto kepala sekolah yang diberikan pengguna
README.md                          README asli
index                              Halaman asli, dipertahankan
PANDUAN.md                         Panduan ini
robots.txt                         Aturan perayapan mesin pencari
sitemap.xml                        Daftar halaman untuk mesin pencari
```

Setiap program unggulan memiliki halaman detail dengan bagian tentang program, visi, misi, pelaksanaan, galeri, dan tautan ke program lain. Galeri memakai placeholder sampai foto khusus program beserta tanggal dan keterangannya tersedia. Jurnal Digital 7 KAIH belum diberi tautan karena alamat layanan resminya belum tersedia.

Logo pada header berasal dari `logoupscale.png` yang diberikan pengguna, disalin tanpa mengubah gambar. Foto kegiatan dan foto kepala sekolah berasal dari berkas yang diberikan pengguna; nama peserta didik tidak dicantumkan. Gambar JPEG dioptimalkan ke lebar maksimum 1200 piksel. Nama kepala sekolah (Desak Nyoman Sari, S.Pd.SD), alamat, visi, tujuh butir misi, dan program bersumber dari dokumen kurikulum serta telah dikonfirmasi pengguna. Program Gelis Manis, Nupera, Gerustik, 7 KAIH, Teman Berbagi, bahasa dan budaya Bali, serta pilihan ekstrakurikuler ditampilkan; jadwalnya masih menunggu konfirmasi.

Dokumen kurikulum asli tidak dimasukkan ke website. Statistik siswa/guru belum ditampilkan karena angka siswa dalam sumber merupakan prediksi dan terdapat perbedaan tahun ajaran. NIP dan tanda tangan tidak ditampilkan.

## Cara mengetes

1. Jalankan server lokal dari folder repository, misalnya melalui Live Server.
2. Buka beranda dan klik seluruh menu. Setiap tautan harus membuka halaman atau bagian yang sesuai.
3. Gunakan DevTools (F12), lalu mode perangkat. Periksa lebar 360, 390, 768, 1024, dan 1440 piksel. Halaman tidak boleh bergeser horizontal.
4. Pada lebar HP, klik Menu, pilih halaman, lalu pastikan menu menutup. Tombol Escape juga menutup menu.
5. Coba tombol Tab untuk berpindah tautan dan tombol; fokus harus terlihat.
6. Pastikan logo, foto kegiatan, foto kepala sekolah, CSS, dan JavaScript termuat di beranda serta halaman internal.
7. Semua isi utama tetap dapat diakses saat JavaScript dimatikan.

## GitHub Pages — tahap selanjutnya

Setelah file baru diunggah ke root repository pada branch `main`, buka Settings → Pages. Pilih Deploy from a branch, branch `main`, folder `/ (root)`, lalu Save. Alamat yang diharapkan: https://appssdnegerikesiman.github.io/sdn3kesiman/ . Tunggu proses deployment selesai sebelum pengujian.

Semua aset memakai path relatif terhadap halaman, bukan `/assets/...`, sehingga kompatibel dengan subfolder `/sdn3kesiman/`. Tidak ada framework, font eksternal, pelacak, atau pustaka tambahan.

Domain `sdn3kesiman.sch.id` belum dikonfigurasi. Jangan menambahkan CNAME sebelum tahap pengaturan domain dan DNS.

## Data yang perlu disiapkan

- Foto sekolah yang boleh dipublikasikan.
- Sambutan kepala sekolah jika diperlukan dan foto yang disetujui.
- NPSN, nomor telepon/WhatsApp, dan email resmi.
- Sejarah sekolah.
- Struktur organisasi dan daftar guru/tenaga kependidikan beserta jabatan.
- Berita, pengumuman, dan agenda dengan tanggal yang telah dikonfirmasi.
- Informasi penerimaan peserta didik: tahun ajaran, jadwal, syarat, alur, dan kontak.
- Foto galeri beserta keterangan dan izin publikasi yang diperlukan.

## Cara mengganti konten

Ubah teks dalam `index.html`. Cari “Belum”, “belum”, atau “sedang disiapkan” untuk menemukan konten yang perlu dilengkapi. Simpan foto dalam `assets/images/` dengan nama huruf kecil tanpa spasi. Gunakan path seperti `./assets/images/gedung-sekolah.jpg`, lengkapi teks `alt`, dan sesuaikan lebar/tinggi gambar. Warna utama ada di bagian `:root` pada `assets/css/style.css`.

## Pembaruan kurikulum PDF 2026/2027

Profil singkat memakai teks yang diberikan pengguna, ditambah ringkasan fokus kurikulum. PDF `KURKULUM SDN 3 KESIMAN 2026.pdf` menjadi sumber terbaru: visi-misi tetap sama; program Nupera, Gerakan 7 KAIH, dan Komunitas Belajar Teman Berbagi ditambahkan berdasarkan halaman tercetak 20–21.

Kalender pendidikan tersedia melalui Agenda → Lihat kalender pendidikan. Jadwal disajikan per semester dalam HTML agar tetap dapat diakses tanpa JavaScript. Sumber kalender: halaman tercetak 65–67 (halaman PDF 74–76), Tabel 3.9–3.10.

Tanggal yang perlu dikonfirmasi sebelum ditampilkan sebagai jadwal pasti:
- Libur semester 2: Tabel 3.9 menyebut 14–25 Juni 2027, sedangkan Tabel 3.10 menyebut 14–26 Juni 2026.
- Libur akhir tahun: Tabel 3.9 menulis 2 Juni–9 Juli 2027, sedangkan Tabel 3.10 menulis 28 Juni–10 Juli 2027.
- Sumatif akhir semester 1: sumber hanya menyebut minggu keempat November–Desember 2026.
- Hari libur nasional/keagamaan belum disalin karena ada ketidaksesuaian hari, tanggal, dan tahun. Contoh: Nyepi ditulis 9 Maret pada Tabel 3.10, tetapi 8 Maret pada tabel HES; sebagian hari raya masih bertahun 2026 di semester 2027.

Website memberi label menunggu konfirmasi untuk libur yang bertentangan, tanpa memilih atau mengoreksi tanggal sendiri. Periode ujian Februari–Mei dan penerimaan peserta didik Juni–Juli 2027 tetap diberi label perkiraan. PDF lengkap tidak dipublikasikan.
