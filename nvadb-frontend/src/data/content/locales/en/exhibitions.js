export const exhibitions = {
  current: [
    {
      id: "ex2023001",
      title: "Contemporary Malaysian Art Now",
      dateRange: "1 Oct - 31 Dec 2023",
      description: "Showcasing the latest works from Malaysia's leading contemporary artists",
      featured: true,
      image: "/public/images/exhibitions/contemporary-2023.jpg",
      artists: ["Sarah Lee", "Ahmad Hassan", "Raj Kumar"]
    }
  ],
  upcoming: [
    {
      id: "ex2024001",
      title: "Traditional Crafts Revival",
      dateRange: "15 Jan - 15 Mar 2024",
      description: "Exploring Malaysian traditional crafts in modern context"
    }
  ],
  archive: {
    years: [2023, 2022, 2021],
    exhibitions: {
      // Keyed by year
      2023: [
        {
          id: "ex2023005",
          title: "Digital Art Festival",
          dates: "June 2023"
        }
      ]
    }
  },
  curatorsChoice: [
    {
      month: "October 2023",
      artwork: {
        title: "Urban Dreams",
        artist: "Lee Ming",
        year: 2023,
        medium: "Mixed Media",
        description: "A commentary on urban development"
      }
    }
  ],
  ethics: {
    guidelines: [
      "Respect for artistic integrity",
      "Proper artwork handling procedures",
      "Photography policies"
    ]
  },
  shop: {
    categories: [
      {
        name: "Books & Catalogs",
        items: [
          {
            id: "book001",
            title: "Malaysian Art: A New Era",
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
        title: "Opening Night - Contemporary Art Exhibition",
        thumbnail: "/public/images/gallery/thumb/opening-night.jpg",
        full: "/public/images/gallery/full/opening-night.jpg",
        date: "2023-10-01"
      }
      // More images...
    ]
  },
  videoGallery: {
    videos: [
      {
        id: "vid001",
        title: "Artist Interview: Sarah Lee",
        description: "A conversation with contemporary artist Sarah Lee",
        embedUrl: "https://www.youtube.com/embed/xyz123",
        duration: "15:30",
        date: "2023-09-15"
      }
      // More videos...
    ]
  }
};

export default exhibitions;
