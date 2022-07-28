# API Points #
## Users ##
**Menampilkan data semua pengguna**
```
GET: /landing

response:[
{
    "id": "1",
    "heading": "Renanda's Portfolio",
    "name": "https://github.com/renandaapriliaa/Tekwe",
    "location": "Based In Indonesia ",
{
```

**Menampilkan data semua pengguna dengan id tertentu**
```
GET: /landing?id=1

response:[
{
    "id": "1",
    "heading": "Renanda's Portfolio",
    "name": "https://github.com/renandaapriliaa/Tekwe",
    "location": "Based In Indonesia ",
{
 ```
 
 **Menambahkan data pengguna**
 ```
 POST: /users
 
 data:
 {
    "id": "1",
    "heading": "Renanda's Portfolio",
    "name": "https://github.com/renandaapriliaa/Tekwe",
    "location": "Based In Indonesia ","
}

response:
true 
```

**Edit data pengguna**
```
PUT: /users

data:
{
    "id": "1",
    "heading": "Renanda's Portfolio",
    "name": "https://github.com/renandaapriliaa/Tekwe",
    "location": "Based In Indonesia ",
}
 
 
response:
true   
```

**Menghapus data anggota**
```
DELETE: /users/[1]

response:
data berhasil dihapus   
```

## Portfolios ##
**Menampilkan semua data portfolio**
```
GET: /article

response: [
{
    "id": "1",
    "judul": "Tailwind",
    "gambar": "../assets/img/tailwind.jpg",
    "link": "article1.md",
    "tanggal": "24 Maret 2022",
     "deskripsi": "Framework CSS dengan teknologi terbaru dan populer 2022"
}
]
```

**Menampilkan data article berdasarkan id**
```
GET: /article?id=1

response:

{
    "id": "1",
    "judul": "Tailwind",
    "gambar": "../assets/img/tailwind.jpg",
    "link": "article1.md",
    "tanggal": "24 Maret 2022",
     "deskripsi": "Framework CSS dengan teknologi terbaru dan populer 2022"
}
```

**Menambahkan data article**
```
POST: /article

data:
{
    "id": "1",
    "judul": "Tailwind",
    "gambar": "../assets/img/tailwind.jpg",
    "link": "article1.md",
    "tanggal": "24 Maret 2022",
     "deskripsi": "Framework CSS dengan teknologi terbaru dan populer 2022"
}

response:
true
```

**Edit data article**
```
PUT: /article

data:
{
    "id": "1",
    "judul": "Tailwind",
    "gambar": "../assets/img/tailwind.jpg",
    "link": "article1.md",
    "tanggal": "24 Maret 2022",
     "deskripsi": "Framework CSS dengan teknologi terbaru dan populer 2022"
}
 
response:
true   
```

**Menghapus data pada portofolio**
```
DELETE: /article/[3]

response:
data berhasil dihapus
```

## Articles ##
**Menampilkan data semua articles**
```
GET: /about

response:[
{
    "id": "1",
    "name": "Rifky Ramadhan",
    "position": "Front End Developer",
    "image": "../assets/img/IMG_2415.JPG",
    "story": "Haii,nama saya Rifky Ramadhan kelahiran 09 Desember 2000 asal dari kota kuda kuningan jawa barat,saya merupakan mahasiswa Sistem Informasi angkatan 2020 Universitas Ahmad Dahlan.pemrograman sudah menjadi kegemaran saya terutama dibagian website,awal mula terjun ke dunia pemrograman yaitu sekitar tahun 2019 silam,kala itu platform pertama yang saya geluti yaitu salah satu platform course online yang cukup populer yaitu codepolitan,platform ini terfokus dibagian web developer.Tugas front end developer adalah menangani semua yang terlihat oleh pengunjung situs,seperti desain website secara keseluruhan, menu, tombol interaksi,dan gambar untuk menyempurnakan UX. Mengapa sebutannya adalah front-end? Hal ini karena front-end menyerupai bagian depan atau display toko yang menampilkan informasi atau gambaran umum tentang suatu toko sebelum Anda memasukinya.Front-end developer dituntut untuk kreatif dan memiliki skill desain yang mumpuni. Tidak hanya menyempurnakan tampilan situs, front-end developer juga harus memikirkan cara berinteraksi dengan pengunjung situs, kemudahan navigasi, dan kenyamanan pengunjung. Seorang front-end developer harus menguasai HTML, CSS, dan bahasa pemrograman JavaScript."
}
]
```

**Menampilkan data semua about dengan id tertentu**
```
GET: /about?id=1
response:
{
    "id": "1",
    "name": "Rifky Ramadhan",
    "position": "Front End Developer",
    "image": "../assets/img/IMG_2415.JPG",
    "story": "Haii,nama saya Rifky Ramadhan kelahiran 09 Desember 2000 asal dari kota kuda kuningan jawa barat,saya merupakan mahasiswa Sistem Informasi angkatan 2020 Universitas Ahmad Dahlan.pemrograman sudah menjadi kegemaran saya terutama dibagian website,awal mula terjun ke dunia pemrograman yaitu sekitar tahun 2019 silam,kala itu platform pertama yang saya geluti yaitu salah satu platform course online yang cukup populer yaitu codepolitan,platform ini terfokus dibagian web developer.Tugas front end developer adalah menangani semua yang terlihat oleh pengunjung situs,seperti desain website secara keseluruhan, menu, tombol interaksi,dan gambar untuk menyempurnakan UX. Mengapa sebutannya adalah front-end? Hal ini karena front-end menyerupai bagian depan atau display toko yang menampilkan informasi atau gambaran umum tentang suatu toko sebelum Anda memasukinya.Front-end developer dituntut untuk kreatif dan memiliki skill desain yang mumpuni. Tidak hanya menyempurnakan tampilan situs, front-end developer juga harus memikirkan cara berinteraksi dengan pengunjung situs, kemudahan navigasi, dan kenyamanan pengunjung. Seorang front-end developer harus menguasai HTML, CSS, dan bahasa pemrograman JavaScript."
}
 ```
 
 **Menambahkan data about**
 ```
 POST: /about
 
 data:
 {
    "id": "1",
    "name": "Rifky Ramadhan",
    "position": "Front End Developer",
    "image": "../assets/img/IMG_2415.JPG",
    "story": "Haii,nama saya Rifky Ramadhan kelahiran 09 Desember 2000 asal dari kota kuda kuningan jawa barat,saya merupakan mahasiswa Sistem Informasi angkatan 2020 Universitas Ahmad Dahlan.pemrograman sudah menjadi kegemaran saya terutama dibagian website,awal mula terjun ke dunia pemrograman yaitu sekitar tahun 2019 silam,kala itu platform pertama yang saya geluti yaitu salah satu platform course online yang cukup populer yaitu codepolitan,platform ini terfokus dibagian web developer.Tugas front end developer adalah menangani semua yang terlihat oleh pengunjung situs,seperti desain website secara keseluruhan, menu, tombol interaksi,dan gambar untuk menyempurnakan UX. Mengapa sebutannya adalah front-end? Hal ini karena front-end menyerupai bagian depan atau display toko yang menampilkan informasi atau gambaran umum tentang suatu toko sebelum Anda memasukinya.Front-end developer dituntut untuk kreatif dan memiliki skill desain yang mumpuni. Tidak hanya menyempurnakan tampilan situs, front-end developer juga harus memikirkan cara berinteraksi dengan pengunjung situs, kemudahan navigasi, dan kenyamanan pengunjung. Seorang front-end developer harus menguasai HTML, CSS, dan bahasa pemrograman JavaScript."
},

response:
true 
```

**Edit data about**
```
PUT: / about

data:
{
    "id": "1",
    "name": "Rifky Ramadhan",
    "position": "Front End Developer",
    "image": "../assets/img/IMG_2415.JPG",
    "story": "Haii,nama saya Rifky Ramadhan kelahiran 09 Desember 2000 asal dari kota kuda kuningan jawa barat,saya merupakan mahasiswa Sistem Informasi angkatan 2020 Universitas Ahmad Dahlan.pemrograman sudah menjadi kegemaran saya terutama dibagian website,awal mula terjun ke dunia pemrograman yaitu sekitar tahun 2019 silam,kala itu platform pertama yang saya geluti yaitu salah satu platform course online yang cukup populer yaitu codepolitan,platform ini terfokus dibagian web developer.Tugas front end developer adalah menangani semua yang terlihat oleh pengunjung situs,seperti desain website secara keseluruhan, menu, tombol interaksi,dan gambar untuk menyempurnakan UX. Mengapa sebutannya adalah front-end? Hal ini karena front-end menyerupai bagian depan atau display toko yang menampilkan informasi atau gambaran umum tentang suatu toko sebelum Anda memasukinya.Front-end developer dituntut untuk kreatif dan memiliki skill desain yang mumpuni. Tidak hanya menyempurnakan tampilan situs, front-end developer juga harus memikirkan cara berinteraksi dengan pengunjung situs, kemudahan navigasi, dan kenyamanan pengunjung. Seorang front-end developer harus menguasai HTML, CSS, dan bahasa pemrograman JavaScript."
},
 
response:
true   
```

**Menghapus data articles**
```
DELETE: /articles?id=2

response:
data berhasil dihapus   
 



