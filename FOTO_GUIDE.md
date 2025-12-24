# Panduan Lokasi Foto SUKUNERGY

## 📁 Struktur Folder Foto

```
public/
├── favicon.ico                    ← Logo utama (sudah ada)
├── images/
│   ├── logos/
│   │   └── sukunergy-logo.png     ← Logo SUKUNERGY (opsional, untuk header/footer)
│   │
│   ├── products/                  ← FOTO PRODUK
│   │   ├── sukunergy-original.jpg
│   │   ├── sukunergy-chocolate.jpg
│   │   └── sukunergy-mixed-nuts.jpg
│   │
│   ├── team/                      ← FOTO TIM
│   │   ├── anandhita.jpg          ← CEO - Anandhita Frisilla Utama
│   │   ├── angelita.jpg           ← COO - Angelita Aliyah Putri
│   │   ├── galih.jpg              ← CTO - Galih Aji Pangestu
│   │   ├── dewi.jpg               ← CFO - Dewi Berliana Putri
│   │   └── fathimah.jpg           ← CMO - Fathimah Ummul Banin
│   │
│   ├── sukun/                     ← FOTO SUKUN (untuk halaman Mengapa Sukun)
│   │   └── pohon-sukun.jpg        ← Foto pohon sukun asli
│   │
│   ├── hero/                      ← FOTO HERO SECTION
│   │   └── hero-bg.jpg            ← Background hero (opsional)
│   │
│   └── social/                    ← LOGO SOCIAL MEDIA (opsional)
│       ├── whatsapp.svg
│       └── shopee.svg
```

## 📷 Spesifikasi Foto

### Foto Produk
- **Ukuran**: 800x800 px (rasio 1:1 / square)
- **Format**: JPG atau PNG
- **Nama file**: 
  - `sukunergy-original.jpg`
  - `sukunergy-chocolate.jpg`
  - `sukunergy-mixed-nuts.jpg`

### Foto Tim
- **Ukuran**: 400x400 px (rasio 1:1 / square)
- **Format**: JPG atau PNG
- **Nama file**:
  - `anandhita.jpg` - CEO
  - `angelita.jpg` - COO
  - `galih.jpg` - CTO
  - `dewi.jpg` - CFO
  - `fathimah.jpg` - CMO

### Foto Sukun (Halaman Mengapa Sukun)
- **Ukuran**: 800x600 px (rasio 4:3 / landscape)
- **Format**: JPG
- **Nama file**: `pohon-sukun.jpg`
- **Lokasi**: `public/images/sukun/`

### Logo
- **Ukuran**: 512x512 px
- **Format**: PNG (transparan) atau ICO
- **Nama file**: `favicon.ico` atau `sukunergy-logo.png`

## 🔄 Cara Update Foto

1. Siapkan foto dengan spesifikasi di atas
2. Rename file sesuai nama yang ditentukan
3. Copy/paste ke folder yang sesuai di `public/images/`
4. Refresh browser (Ctrl+F5) untuk melihat perubahan

## ⚠️ Catatan Penting

- Pastikan nama file PERSIS sama (case-sensitive)
- Gunakan format JPG untuk foto, PNG untuk logo dengan transparansi
- Kompres foto agar website tetap cepat (gunakan tinypng.com)
- Foto tim sebaiknya dengan background polos/netral
