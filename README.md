# Malang WFC Hub ☕💻 (Update Juli 2026)

Sebuah aplikasi database interaktif berbasis **HTML, CSS, dan JavaScript** yang dirancang khusus untuk membantu remote worker, freelancer, dan mahasiswa menemukan rekomendasi cafe terbaik untuk bekerja (Work From Cafe) dan belajar di Kota Malang.

## 🌟 Fitur Utama
1. **Peta Interaktif (Leaflet.js):** Peta dengan gaya gelap (dark skin) terintegrasi secara dinamis. Menampilkan pin bersinar yang interaktif untuk setiap cafe. Klik pin untuk memusatkan posisi dan melihat ringkasan cafe.
2. **Dashboard Statistik:** Menampilkan total cafe terdaftar, rata-rata kecepatan internet, cafe 24 jam, dan jumlah bookmark secara langsung.
3. **Filter Pencarian Multi-Kriteria:**
   - Pencarian berbasis teks (nama cafe, alamat, menu).
   - Area/Kecamatan (Klojen, Lowokwaru, Blimbing, Sukun, Batu).
   - Slider minimal kecepatan WiFi.
   - Kepadatan colokan listrik (*Banyak*, *Cukup*, *Sedikit*).
   - Tingkat kebisingan (*Tenang*, *Sedang*, *Ramai*).
   - Fasilitas khusus (*Buka 24 Jam*, *Full AC*, *Outdoor*, *Mushola*, *Makanan Berat*).
4. **Simulator Tes Kecepatan WiFi:** Fitur simulasi interaktif di dalam detail cafe yang melakukan tes kecepatan riil saat diklik secara dinamis.
5. **Simpan Cafe Favorit (Bookmarks):** Tandai cafe kesayangan Anda, data tersimpan secara aman di `localStorage` peramban Anda.
6. **Rekomendasi Tempat Baru (Kontribusi Komunitas):** Formulir penambahan cafe baru lengkap dengan koordinat peta otomatis dan penyimpanan lokal presisten.
7. **Sistem Ulasan (Review):** Tulis ulasan rating bintang dan komentar langsung yang instan terupdate pada daftar detail cafe.
8. **Dual Theme (Dark/Light Mode):** Beralih tema secara mulus. Peta Leaflet akan ikut berubah tema secara otomatis (Dark Matter ke Voyager Light).

## 📂 Struktur File
- [index.html](file:///C:/Users/yoga/wfc-malang-hub/index.html) - Struktur aplikasi dan tata letak halaman utama.
- [styles.css](file:///C:/Users/yoga/wfc-malang-hub/styles.css) - Desain modern, glassmorphic layout, sistem transisi tema, dan visual rating meter.
- [app.js](file:///C:/Users/yoga/wfc-malang-hub/app.js) - Logika database (8 cafe Malang default), filter, inisialisasi peta Leaflet, logic tes kecepatan, dan LocalStorage.

## 🚀 Cara Menjalankan Aplikasi
Anda dapat membuka file `index.html` langsung di peramban Anda dengan mengklik ganda file tersebut.

Untuk pengalaman peta interaktif yang lebih optimal dan menghindari masalah pemuatan aset lokal, Anda dapat menjalankannya dengan server lokal. 

Jalankan perintah ini di terminal Anda:
```powershell
python -m http.server 5500 --directory C:\Users\yoga\wfc-malang-hub
```
Atau jika Anda menggunakan Node.js:
```powershell
npx http-server C:\Users\yoga\wfc-malang-hub -p 5500
```
Setelah server berjalan, buka peramban Anda dan akses URL: **`http://localhost:5500`**
