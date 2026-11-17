# IT Incident Timeline Generator

Dalam lingkungan teknologi informasi modern, pencatatan insiden (incident management) masih sering dilakukan secara manual menggunakan dokumen teks atau spreadsheet. Proses ini membutuhkan waktu yang cukup lama untuk menyusun kronologi kejadian, mengidentifikasi akar masalah, serta membuat laporan yang terstruktur.
Penelitian ini bertujuan mengembangkan sebuah aplikasi web berbasis HTML, CSS, dan JavaScript yang mampu mengubah catatan insiden sederhana menjadi timeline yang terstruktur dan mudah dipahami. Sistem akan mengelompokkan kejadian berdasarkan kategori tertentu, menampilkan tahapan penanganan insiden, dan menghasilkan laporan otomatis yang dapat digunakan oleh tim IT Support, Helpdesk, Network Engineer, maupun Auditor TI.

## 🚀 How to Run the Application

### Requirements
- Visual Studio Code
- Live Server Extension (VS Code)
- Web Browser (Chrome, Edge, Firefox)
---
### Step 1 \- Download Project
Clone repository:
git clone [https://github.com/ttungtungg/IT\-Incident\-Timeline\-Generator.git](https://github.com/ttungtungg/IT-Incident-Timeline-Generator.git)
atau download ZIP dari GitHub dan extract ke folder lokal.
---
### Step 2 \- Open Project
Buka folder project menggunakan Visual Studio Code.
File
└── Open Folder
    └── IT\-Incident\-Timeline\-Generator
---
### Step 3 \- Install Live Server
1. Klik Extensions di VS Code.
2. Cari:

Live Server
1. Install extension dari **Ritwick Dey**.
---
### Step 4 \- Run Application
1. Buka file:

index.html

1. Klik kanan pada file index.html.
2. Pilih:

Open With Live Server
atau klik tombol:
Go Live
di pojok kanan bawah VS Code.
---
### Step 5 \- Testing
Masukkan data incident seperti berikut:

08:00 User tidak bisa login VPN
08:05 Ticket dibuat
08:15 Investigasi dimulai
08:25 Penyebab ditemukan pada firewall
08:35 Firewall diperbaiki
08:40 User berhasil login
08:45 Ticket ditutup
Kemudian klik:

Generate Report
---

### Expected Result
🔴 Incident Detected
🟡 Initial Assessment
🟠 Troubleshooting
🔎 Root Cause Identified
🟢 Resolution Applied
✅ Verification Success
✅ Incident Closed
---
### Demonstration Scenario

The application analyzes unstructured IT incident logs and automatically classifies each event into Incident Management stages. This helps IT Support teams create faster and more consistent incident reports.

