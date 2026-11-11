# Mentari School WordPress Theme

Tema WordPress kustom untuk website Mentari School. Konten sejumlah halaman dapat
dikelola melalui **Appearance/Tampilan → Customize/Sesuaikan** tanpa mengubah file
template.

## Daftar isi

- [Persyaratan](#persyaratan)
- [Instalasi lokal dengan LocalWP](#instalasi-lokal-dengan-localwp)
- [Mengedit konten melalui Customizer](#mengedit-konten-melalui-customizer)
- [Struktur panel dan halaman](#struktur-panel-dan-halaman)
- [Cara kerja pengaturan konten](#cara-kerja-pengaturan-konten)
- [Menambah atau mengubah field](#menambah-atau-mengubah-field)
- [Pemecahan masalah](#pemecahan-masalah)

## Persyaratan

- WordPress dengan hak akses administrator atau izin `edit_theme_options`.
- Tema ini dipasang dan diaktifkan pada situs WordPress.
- LocalWP dapat digunakan untuk pengembangan lokal.

## Instalasi lokal dengan LocalWP

1. Buat atau jalankan situs WordPress di LocalWP.
2. Salin folder tema ini ke `app/public/wp-content/themes/` pada direktori situs
   LocalWP, atau gunakan mekanisme deployment yang dipakai proyek.
3. Buka **Appearance/Tampilan → Themes/Tema** di Dashboard dan aktifkan tema
   **Mentari School**.
4. Buka situs dan Customizer untuk memastikan halaman dan pengaturan tampil.

> Perubahan di folder repository tidak otomatis tersalin ke folder instalasi
> LocalWP jika keduanya merupakan salinan terpisah. Pastikan file terbaru berada
> di direktori tema yang sedang aktif.

## Mengedit konten melalui Customizer

1. Masuk ke Dashboard WordPress sebagai administrator.
2. Buka **Appearance/Tampilan → Customize/Sesuaikan**.
3. Pilih panel halaman yang ingin diedit.
4. Buka section yang sesuai, ubah isian, lalu tekan **Publish/Terbitkan** untuk
   menyimpan perubahan.
5. Periksa halaman terkait di preview atau tab situs.

Jenis isian mengikuti kontennya, misalnya teks, textarea, URL, email, dan gambar.
Jangan menghapus isi field untuk menyembunyikan konten kecuali petunjuk field atau
template memang menyatakan bahwa nilai kosong didukung.

## Struktur panel dan halaman

Panel halaman pada Customizer disusun sebagai panel tingkat atas. WordPress tidak
mendukung panel bersarang; karena itu halaman menjadi section di dalam panel,
bukan subpanel.

| Panel Customizer | Halaman/section |
| --- | --- |
| **HOMEPAGE** | Isian dan section homepage |
| **ABOUT** | MIS Story; Positive Education at MIS |
| **PROGRAM** | Early Years (Ages 2-5); Elementary (PYP); Middle School (MYP); High School (DP/IGCSE); University Counseling |
| **CAMPUS** | MIS Jakarta (Cipete); MIS Bintaro; MIS Grand Surya; Mentari Preschool Jakarta; Sunflower Preschool |
| **ONLINE ADMISSION** | Online Admission |
| **CONNECT** | Contact Us |

Untuk halaman yang memiliki beberapa kelompok konten, judul section menampilkan
nama halaman diikuti nama kelompok kontennya, misalnya **Early Years (Ages 2-5) —
Hero Banner**. HOMEPAGE memiliki panel sendiri dan section-section homepage.

## Cara kerja pengaturan konten

- Pendaftaran panel, section, setting, kontrol, dan konfigurasi halaman internal
  berada di [`inc/internal-page-customizer.php`](./inc/internal-page-customizer.php).
- Pengaturan homepage dan beberapa komponen homepage berada di
  [`functions.php`](./functions.php).
- Template halaman mengambil nilai pengaturan melalui helper seperti
  `mentari_story()`, `mentari_early_years()`, `mentari_page_content()`, dan helper
  halaman lainnya.
- Nilai yang disimpan WordPress menggunakan Theme Modification API
  (`get_theme_mod`). Perubahan struktur panel tidak seharusnya mengubah ID setting
  yang sudah digunakan karena ID tersebut menjadi kunci nilai yang tersimpan.
- Bila nilai belum pernah disimpan, default dari konfigurasi field digunakan.

Karena nilai disimpan di database WordPress, perubahan tema atau pemindahan file
tema tidak dengan sendirinya menghapus pengaturan. Untuk migrasi situs, pastikan
database dan media library ikut dipindahkan sesuai prosedur backup situs.

## Menambah atau mengubah field

Sebelum mengubah Customizer, cari helper dan template yang memakai field tersebut.
Pertahankan ID setting yang sudah ada agar nilai yang tersimpan tetap terbaca.

Untuk halaman yang memakai konfigurasi section deklaratif:

1. Tambahkan atau ubah field pada fungsi konfigurasi halaman yang sesuai, misalnya
   `mentari_story_sections()` atau `mentari_elementary_sections()`.
2. Gunakan format field yang sudah dipakai halaman tersebut: tipe, label, dan nilai
   default. Periksa daftar `$sanitizers` pada fungsi registrasi; setiap tipe harus
   memiliki sanitizer yang sesuai.
3. Pastikan fungsi pembaca/helper dan template menggunakan key yang sama.
4. Periksa kontrolnya di Customizer, simpan nilai, lalu verifikasi pada halaman.

Untuk Online Admission dan Contact, konfigurasi field berada di
`mentari_internal_pages_config()`. Pemetaan konten halaman campus tertentu dapat
berada pada `mentari_page_content()` dan fungsi `*_sections()` masing-masing.
Ikuti pola registrasi yang sudah ada untuk tipe gambar, URL, email, dan textarea.

Contoh penggunaan helper dari template:

```php
echo esc_html(mentari_story('hero_title'));
```

Gunakan escaping sesuai konteks output: `esc_html()` untuk teks, `esc_attr()` untuk
atribut HTML, `esc_url()` untuk URL, dan escaping gambar/markup sesuai pola template
yang sudah ada. Jangan mengeluarkan input Customizer mentah ke HTML.

Jika menambah halaman baru, daftarkan panel/section pada callback
`customize_register`, definisikan setting dan sanitasi, hubungkan helper ke
template halaman, serta tambahkan halaman itu ke tabel struktur panel di README ini.

## Pemecahan masalah

### Panel masih menampilkan struktur lama

- Pastikan tema **Mentari School** yang benar sedang aktif.
- Jika repository dan instalasi LocalWP merupakan folder berbeda, salin atau
  deploy file terbaru ke folder tema aktif.
- Tutup lalu buka kembali Customizer; lakukan refresh halaman browser.
- Periksa bahwa callback Customizer terdaftar dan tidak ada error PHP pada log
  situs.

### Isian tidak mengubah halaman

- Pastikan perubahan sudah diterbitkan/disimpan.
- Periksa bahwa halaman menggunakan helper dan key field yang sama dengan setting.
- Periksa default dan sanitizer field, serta error PHP pada log.
- Jika menggunakan URL gambar dari Media Library, pastikan media tersedia pada
  situs tersebut.

### Perubahan tema atau situs lokal

Jangan mengganti ID setting yang sudah dipakai hanya untuk merapikan judul panel.
Jika ID memang harus diubah, rencanakan migrasi nilai `theme_mod` secara eksplisit
agar konten yang tersimpan tidak tertinggal.
