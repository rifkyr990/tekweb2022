Vue.createApp({
    data() {
        return {
            content : {
                head: "HEY THERE",
                nama: "I'M RIFKY RAMADHAN",
                location: "Based In Indonesia"
            },
            social_media : {
                instagram: 'https://www.instagram.com/rifkyyrmdhn/',
                github: 'https://github.com/rifkyr990',
                facebook: 'https://www.facebook.com/rifky.ramadhan09'
            },
            aboutMe: {
                "nama": "Rifky Ramadhan",
                "posisi": "Front End Developer",
                "story": "Haii,nama saya Rifky Ramadhan kelahiran 09 Desember 2000 asal dari kota kuda kuningan jawa barat,saya merupakan mahasiswa Sistem Informasi angkatan 2020 Universitas Ahmad Dahlan.pemrograman sudah menjadi kegemaran saya terutama dibagian website,awal mula terjun ke dunia pemrograman yaitu sekitar tahun 2019 silam,kala itu platform pertama yang saya geluti yaitu salah satu platform course online yang cukup populer yaitu codepolitan,platform ini terfokus dibagian web developer.Tugas front end developer adalah menangani semua yang terlihat oleh pengunjung situs,seperti desain website secara keseluruhan, menu, tombol interaksi,dan gambar untuk menyempurnakan UX. Mengapa sebutannya adalah front-end? Hal ini karena front-end menyerupai bagian depan atau display toko yang menampilkan informasi atau gambaran umum tentang suatu toko sebelum Anda memasukinya.Front-end developer dituntut untuk kreatif dan memiliki skill desain yang mumpuni. Tidak hanya menyempurnakan tampilan situs, front-end developer juga harus memikirkan cara berinteraksi dengan pengunjung situs, kemudahan navigasi, dan kenyamanan pengunjung. Seorang front-end developer harus menguasai HTML, CSS, dan bahasa pemrograman JavaScript.",
                "image": "./img/IMG_2415.JPG"
            },
            articles: [],
            article: null,
        };
    },
    async created() {
        try {
            const res = await axios.get('https://my-json-server.typicode.com/rifkyr990/tekweb2022/article');
            this.articles = res.data;
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        getMarkdown() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const articles = urlParams.get('article');
            var converter = new showdown.Converter();
            console.log(articles);
            axios
                .get(
                    src = "https://raw.githubusercontent.com/rifkyr990/tekweb2022/master/article/" + articles
                )
                .then((res) => {
                    var html = converter.makeHtml(res.data);
                    this.article = html;
                    console.log(html);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },

    beforeMount() {
            this.getMarkdown()
    }
}).mount("#app");
