export const exhibitions = {
  current: {
    title: "Pameran Semasa",
    artiststext: "Artis yang Ditampilkan",
    datetext: "Tarikh",
    array: [
      {
        id: "ex2023001",
        title: "Seni Kontemporari Malaysia Kini",
        daterange: "1 Okt - 31 Dis 2023",
        description: "Menampilkan karya terkini daripada artis kontemporari utama Malaysia",
        featured: true,
        image: "/public/images/exhibitions/contemporary-2023.jpg",
        artists: ["Sarah Lee", "Ahmad Hassan", "Raj Kumar"]
      }
    ]
  },
  upcoming: {
    title: "Pameran Akan Datang",
    pagetitle: "Pameran Akan Datang",
    datetext: "Tarikh Pameran",
    array: [
      {
        id: "ex2024001",
        title: "Kebangkitan Kraf Tradisional",
        daterange: "15 Jan - 15 Mac 2024",
        description: "Meneroka kraf tradisional Malaysia dalam konteks moden"
      }
    ]
  },
  archive: {
    title: "Arkib Pameran",
    pagetitle: "Arkib Pameran",
    yearselectortext: "Pilih Tahun",
    years: [2023, 2022, 2021],
    exhibitions: {
      2023: [
        {
          id: "ex2023005",
          title: "Festival Seni Digital",
          dates: "Jun 2023"
        }
      ]
    }
  },
  curatorsChoice: {
    title: "Pilihan Kurator",
    pagetitle: "Pilihan Kurator",
    artisttext: "Artis",
    mediumtext: "Medium",
    yeartext: "Tahun",
    array: [
      {
        month: "Oktober 2023",
        artwork: {
          title: "Impian Bandar",
          artist: "Lee Ming",
          year: 2023,
          medium: "Media Campuran",
          description: "Suatu komentar mengenai pembangunan bandar"
        }
      }
    ]
  },
  ethics: {
    title: "Etika Galeri",
    pagetitle: "Etika Galeri",
    introtext: "Komitmen kami terhadap amalan etika dalam pameran seni",
    guidelines: [
      "Menghormati integriti artistik",
      "Prosedur pengendalian karya seni yang betul",
      "Dasar fotografi"
    ]
  },
  shop: {
    title: "Kedai Galeri",
    pagetitle: "Kedai Galeri",
    pricetext: "Harga",
    categories: [
      {
        name: "Buku & Katalog",
        items: [
          {
            id: "book001",
            title: "Seni Malaysia: Era Baharu",
            price: "RM 120"
          }
        ]
      }
    ]
  },
  photoGallery: {
    title: "Galeri Foto",
    pagetitle: "Galeri Foto",
    closetext: "Tutup",
    images: [
      {
        id: "img001",
        title: "Malam Pembukaan - Pameran Seni Kontemporari",
        thumbnail: "/public/images/gallery/thumb/opening-night.jpg",
        full: "/public/images/gallery/full/opening-night.jpg",
        date: "2023-10-01"
      }
    ]
  },
  videoGallery: {
    title: "Galeri Video",
    pagetitle: "Galeri Video",
    durationtext: "Tempoh",
    videos: [
      {
        id: "vid001",
        title: "Temubual Artis: Sarah Lee",
        description: "Perbualan bersama artis kontemporari Sarah Lee",
        embedurl: "https://www.youtube.com/embed/xyz123",
        duration: "15:30",
        date: "2023-09-15"
      }
    ]
  }
};

export default exhibitions;
