export const exhibitions = {
  current: [
    {
      id: "ex2023001",
      title: "Seni Kontemporari Malaysia Kini",
      dateRange: "1 Okt - 31 Dis 2023",
      description: "Menampilkan karya terkini daripada artis kontemporari utama Malaysia",
      featured: true,
      image: "/assets/images/exhibitions/contemporary-2023.jpg",
      artists: ["Sarah Lee", "Ahmad Hassan", "Raj Kumar"]
    }
  ],
  upcoming: [
    {
      id: "ex2024001",
      title: "Kebangkitan Kraf Tradisional",
      dateRange: "15 Jan - 15 Mac 2024",
      description: "Meneroka kraf tradisional Malaysia dalam konteks moden"
    }
  ],
  archive: {
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
  curatorsChoice: [
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
  ],
  ethics: {
    guidelines: [
      "Menghormati integriti artistik",
      "Prosedur pengendalian karya seni yang betul",
      "Dasar fotografi"
    ]
  },
  shop: {
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
    images: [
      {
        id: "img001",
        title: "Malam Pembukaan - Pameran Seni Kontemporari",
        thumbnail: "/assets/images/gallery/thumb/opening-night.jpg",
        full: "/assets/images/gallery/full/opening-night.jpg",
        date: "2023-10-01"
      }
    ]
  },
  videoGallery: {
    videos: [
      {
        id: "vid001",
        title: "Temubual Artis: Sarah Lee",
        description: "Perbualan bersama artis kontemporari Sarah Lee",
        embedUrl: "https://www.youtube.com/embed/xyz123",
        duration: "15:30",
        date: "2023-09-15"
      }
    ]
  }
};

export default exhibitions;
