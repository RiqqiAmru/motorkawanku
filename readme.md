# WEBSITE MOTOR KAWANKU

untuk menampilkan data-data kawasan kumuh yang ada di kota pekalongan, berdasarkan data dari excel PERKIM

# KEBUTUHAN FUNGSIONAL

- [] Menampilkan data kawasan kumuh excel, (BASELINE dan R0)
- [] bisa diakses oleh publik
- [] ada fitur input untuk tiap kelurahan ketika menginputkan data investasi (pelajari lagi apa yang diinputkan)
- [] diberikan akun untuk tiap kelurahan, PERKIM?
- [] fitur geolokasi spasial google earth pro (optional)

# KEBUTUHAN FUNGSIONAL TAMBAHAN BAPPEDA

- [] menampilkan total pengunjung website
- [] menampilkan dokumen penggunaan website
- [] menampilkan contact person di website (bisa no/email kantor)
- [] membuat video tutorial penggunaan website
- [] dokumentasi alur kerja sebelum adanya website dan setelah adanya website

# KEBUTUHAN NON FUNGSIONAL

- [] penyimpanan data apakah akan tetap di excel atau di database (optional)
- [] proses pengolahan data?
- [] optimalisasi tampilan mobile?

# CATATAN

- sebenarnya di SIKAPER milik jateng sebagian sudah menampilkan data kumuh awal/akhir (RO) disertai maps dari Leaflet JS(namun tidak jalan), juga ada maps spasial namun untuk kota pekalongan entah kenapa tidak keluar datanya
- data BASELINE adalah ketika awal pengambilan data kumuh -> tidak masuk ke SIKAPER
- data R0 di update secara berkala, satu tahun sekali dan diinputkan ke SIKAPER melalui file excel
- data R0 di tambahi dengan data investasi yang ada di tiap kelurahan
- data investasi diinputkan oleh masing-masing kelurahan
- output yang diharapkan adalah berkurangnya beban kerja PERKIM dengan kemampuan kelurahan untuk menginputkan data investasi secara langsung dan divalidasi oleh sistem
- tampilan spasial menggunakan google earth pro, apakah bisa diintegrasikan dengan google maps?
- mungkin data BASELINE tidak akan banyak berubah, sehingga bisa dijadikan data statis (tidak perlu CRUD)
- data R0 akan ditambah data investasi, sehingga perlu CRUD
- data R0 besar jadi untuk sementara load data di excel, nanti akan diubah ke json
- data excel terlalu besar untuk penyimpanan

# PERTANYAAN

- teknologi apa yang digunakan di website PERKIM? (kemungkinan besar PHP)
- apakah server PERKIM mampu melakukan CRUD data investasi?
- apakah data KMZ akan diubah-ubah lagi?
- file rinci apa yang dibutuhkan oleh pusat

# KEBUTUHAN TEKNOLOGI

- server PHP, frontend HTML, CSS, JS,
- pemisahan frontend dan backend
- database sementara excel (pelajari lagi)

# todo

- pelajari teknis pengolahan data php dan excel (CRUD untuk menyimpan data)
- pelajari teknis geolokasi google earth pro dan integrasi ke web
- pelajari data investasi yang diinputkan oleh kelurahan
- data KMZ kebanyakan kode, pelajari lagi
- ambil sebagian UI dari sikaper -> apakah harus responsif?

# TODO APP

- program frontend untuk membaca data excel

# 2 PILIHAN

- Menerjemahkan semua excel ke database

  > Pro: data lebih mudah diolah, tidak perlu membaca excel, lebih ringan
  > Cons: butuh waktu lama, sulit untuk laporan ke pusat, sulit untuk integrasi sistem lama, maintenance lebih sulit

- Membaca excel langsung

  > Pro: mudah untuk laporan ke pusat, pembuatan web lebih cepat
  > Cons: penyimpanan data banyak,

- integrasi
- sementara gunakan excel, nanti diubah ke database secara berkala, pembuatan program lebih besar
