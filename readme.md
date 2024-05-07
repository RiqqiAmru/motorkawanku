# WEBSITE MOTOR KAWANKU

untuk menampilkan data-data kawasan kumuh yang ada di kota pekalongan, berdasarkan data dari excel PERKIM

# KEBUTUHAN FUNGSIONAL

- [x] Menampilkan data kawasan kumuh excel, (R0)
- [x] bisa diakses oleh publik
- [x] ada fitur input untuk tiap kelurahan ketika menginputkan data investasi (pelajari lagi apa yang diinputkan)
- [] diberikan akun untuk tiap kelurahan, PERKIM?
- [x] fitur geolokasi spasial google earth pro (optional)

# KEBUTUHAN FUNGSIONAL TAMBAHAN BAPPEDA

- [] menampilkan total pengunjung website
- [] menampilkan dokumen penggunaan website
- [] menampilkan contact person di website (bisa no/email kantor)
- [] membuat video tutorial penggunaan website
- [] dokumentasi alur kerja sebelum adanya website dan setelah adanya website

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

# todo

- [x] fitur edit data investasi
- [x] fitur kumuh akhir & penghitungan
- [x] leaflet js
- [] extract data excel perkim
-

# error

- setelah membuka laman kumuh rt (render jsx tabel awal akhir), dan setelah itu melakukan aksi di tab investasi, data tidak langsung kerender ulang,(solusi : letakkan renderan tabel awal akhir di tab bawah, jangan tab RT)

# CAUTION MISCELLANEOUS

- awasi batas openstreetmap
- responsive website
- ubah semua ke react js?
- About Motor Kawanku dan aspek2 kekumuhan
- export ke excel
