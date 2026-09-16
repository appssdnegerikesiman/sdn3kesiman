# Panduan website SD Negeri 3 Kesiman

## Status versi pertama

Website statis satu halaman, tanpa instalasi paket atau proses build. Semua menu menuju bagian di halaman yang sama. Bagian Profil menggunakan elemen `details` yang bisa dibuka dan ditutup. Data sekolah yang belum diberikan sengaja belum diisi.

File asli `README.md` dan `index` dipertahankan. File asli bernama `index` (tanpa ekstensi), sehingga ditambahkan `index.html` sebagai beranda GitHub Pages. File `index` hanya arsip versi sebelumnya dan tidak digunakan oleh halaman baru.

## Struktur

```text
index.html                         Isi halaman dan semua bagian menu
assets/css/style.css               Warna, tata letak, dan tampilan responsif
assets/js/main.js                  Menu HP dan tahun pada footer
assets/images/ilustrasi-sekolah.svg Ilustrasi dekoratif, bukan foto sekolah
assets/images/logo-sekolah.png     Logo yang diberikan dan disetujui sekolah
README.md                          README asli
index                              Halaman asli, dipertahankan
PANDUAN.md                         Panduan ini
```

Logo pada header berasal dari `logoupscale.png` yang diberikan pengguna, disalin tanpa mengubah gambar. Nama kepala sekolah (Desak Nyoman Sari, S.Pd.SD), alamat, visi, tujuh butir misi, dan program bersumber dari dokumen kurikulum serta telah dikonfirmasi pengguna. Program Gelis Manis, Gerustik, bahasa dan budaya Bali, serta pilihan ekstrakurikuler ditampilkan; jadwalnya masih menunggu konfirmasi. Sambutan kepala sekolah tidak dibuat tanpa teks resmi.

Dokumen kurikulum asli tidak dimasukkan ke website. Statistik siswa/guru belum ditampilkan karena angka siswa dalam sumber merupakan prediksi dan terdapat perbedaan tahun ajaran. NIP dan tanda tangan tidak ditampilkan.

## Cara mengetes

1. Buka `index.html` dengan Chrome, Edge, atau Firefox.
2. Klik seluruh menu. Setiap tautan harus menuju bagian yang sesuai.
3. Buka dan tutup empat bagian Profil Sekolah.
4. Kecilkan jendela atau gunakan DevTools (F12), lalu mode perangkat. Periksa lebar 360, 390, 768, dan 1440 piksel. Halaman tidak boleh bergeser horizontal.
5. Pada lebar HP, klik Menu, pilih bagian, lalu pastikan menu menutup. Tombol Escape juga menutup menu.
6. Coba tombol Tab untuk berpindah tautan dan tombol; fokus harus terlihat.
7. Semua isi tetap dapat diakses saat JavaScript dimatikan.

## GitHub Pages — tahap selanjutnya

Setelah file baru diunggah ke root repository pada branch `main`, buka Settings → Pages. Pilih Deploy from a branch, branch `main`, folder `/ (root)`, lalu Save. Alamat yang diharapkan: https://appssdnegerikesiman.github.io/sdn3kesiman/ . Tunggu proses deployment selesai sebelum pengujian.

Semua aset memakai path relatif `./assets/...`, bukan `/assets/...`, sehingga kompatibel dengan subfolder `/sdn3kesiman/`. Tidak ada framework, font eksternal, pelacak, atau pustaka tambahan.

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
