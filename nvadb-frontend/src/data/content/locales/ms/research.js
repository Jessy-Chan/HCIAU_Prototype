export const research = {
  publications: {
    title: "Publikasi Penyelidikan",
    searchplaceholder: "Cari publikasi...",
    bytext: "Oleh",
    downloadtext: "Muat Turun PDF",
    categories: ["Seni Kontemporari", "Seni Tradisional", "Sejarah Seni", "Pemuliharaan"],
    items: [
      {
        id: "pub001",
        title: "Seni Malaysia dalam Milenium Baharu",
        author: "Dr. Sarah Lee",
        date: "2023",
        abstract: "Kajian menyeluruh tentang tren seni kontemporari Malaysia",
        downloadUrl: "/publications/malaysian-art-2023.pdf"
      },
      {
        id: "pub002",
        title: "Pergerakan Seni Kontemporari di Asia Tenggara",
        author: "Dr. John Smith",
        date: "2023",
        abstract: "Analisis pergerakan seni baharu di rantau ini",
        downloadUrl: "/publications/sea-art-2023.pdf"
      }
    ]
  },

  archive: {
    title: "Arkib NVADB",
    yeartext: "Semua Tahun",
    typetext: "Semua Jenis",
    viewtext: "Lihat Dokumen",
    downloadtext: "Muat Turun Dokumen",
    years: [2023, 2022, 2021, 2020, 2019],
    types: ["Dokumen", "Fotografi", "Video", "Rakaman Audio"],
    items: [
      {
        id: "arch001",
        title: "Katalog Pameran 2023",
        type: "Dokumen",
        year: 2023,
        url: "/archive/catalog-2023.pdf"
      },
      {
        id: "arch002",
        title: "Rakaman Lawatan Galeri",
        type: "Rakaman Audio",
        year: 2022,
        url: "/archive/tour-2022.mp3"
      }
    ],
    collections: [
      {
        id: "col001",
        title: "Rekod Pameran Sejarah",
        period: "1958-2023",
        description: "Arkib lengkap pameran lalu",
        items: [/* item arkib */]
      }
    ],
    formats: ["Dokumen", "Fotografi", "Video", "Rakaman Audio"]
  },

  forms: {
    categories: [
      {
        id: "research",
        name: "Akses Penyelidikan",
        forms: [
          {
            id: "form001",
            title: "Permohonan Akses Arkib",
            format: "PDF",
            size: "250KB",
            url: "/forms/archive-access.pdf"
          }
        ]
      }
    ]
  },

  opendata: {
    title: "Data Terbuka Kerajaan",
    description: "Koleksi data terbuka yang berkaitan dengan seni dan budaya",
    viewtext: "Lihat Data",
    downloadtext: "Muat Turun Data",
    updatetext: "Dikemas kini pada ",
    formattext: "Format: ",
    datasets: [
      {
        id: "data001",
        title: "Statistik Pelawat Tahunan",
        format: "CSV",
        lastUpdated: "2023-12-01",
        description: "Jumlah dan demografik pelawat tahunan",
        downloadUrl: "/data/visitors-2023.csv"
      }
    ]
  },

  faq: {
    title: "Soalan Lazim",
    searchplaceholder: "Cari Soalan Lazim...",
    categories: ["Umum", "Akses Penyelidikan", "Arkib", "Penerbitan"],
    questions: [
      {
        id: "faq001",
        category: "Akses Penyelidikan",
        question: "Bagaimana saya boleh mengakses arkib fizikal?",
        answer: "Penyelidik boleh menghantar borang permohonan akses..."
      }
    ]
  },
  help: {
    title: "Bantuan & Sokongan",
    guidestitle: "Panduan Bantuan Pantas",
    readtext: "Baca Lagi →",
    contacttext: "Hubungi Sokongan",
    requesttext: "Permintaan Sokongan",
    categories: ["Umum", "Teknikal", "Penyelidikan", "Akses Arkib"],
    request:{
      name: "Nama",
      email: "Emel",
      category: "Kategori",
      message: "Mesej",
    },
    guides: [
      {
        id: "guide001",
        title: "Menggunakan Arkib Digital",
        description: "Panduan langkah demi langkah untuk akses koleksi digital",
        url: "/help/digital-archive-guide"
      }
    ],
    support: {
      email: "research@nvadb.gov.my",
      phone: "+603-4026 7000",
      hours: "Isnin-Jumaat, 9:00 PG - 5:00 PTG"
    }
  },

  downloads: {
    title: "Borang-Borang Muat Turun",
    categorytext: "Semua Kategori",
    categories: ["Pendaftaran Artis", "Hak Cipta", "Umum"],
    downloadtext: "Muat Turun",
    sizetext: "Saiz",
    formattext: "Format",
    forms: [
      {
        id: "form002",
        title: "Borang Pendaftaran Artis",
        description: "Borang permohonan untuk pendaftaran artis dengan NVADB",
        category: "Pendaftaran Artis",
        format: "PDF",
        size: "150KB",
        downloadUrl: "/forms/artist-registration.pdf"
      },
      {
        id: "form003",
        title: "Pendaftaran Hak Cipta Karya Seni",
        description: "Borang untuk mendaftar hak cipta karya seni anda",
        category: "Hak Cipta",
        format: "PDF",
        size: "200KB",
        downloadUrl: "/forms/copyright-registration.pdf"
      }
    ]
  }
};

export default research;
