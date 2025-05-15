export const exhibitions = {
  current: {
    title: "Current Exhibitions",
    artiststext: "Featured Artists",
    datetext: "Date",
    array: [
      {
        id: "ex2023001",
        title: "Contemporary Malaysian Art Now",
        daterange: "1 Oct - 31 Dec 2023",
        description: "Showcasing the latest works from Malaysia's leading contemporary artists",
        featured: true,
        image: "/images/exhibitions/contemporary-2023.jpg",
        artists: ["Sarah Lee", "Ahmad Hassan", "Raj Kumar"]
      }
    ]
  },
  upcoming: {
    title: "Upcoming Exhibitions",
    datetext: "Exhibition Date",
    array: [
      {
        id: "ex2024001",
        title: "Traditional Crafts Revival",
        daterange: "15 Jan - 15 Mar 2024",
        description: "Exploring Malaysian traditional crafts in modern context"
      }
    ]
  },
  archive: {
    title: "Exhibition Archive",
    yearselectortext: "Select Year",
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
  curatorsChoice: {
    title: "Curator's Choice",
    artisttext: "Artist",
    mediumtext: "Medium",
    yeartext: "Year",
    array: [
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
    ]
  },
  ethics: {
    title: "Gallery Ethics",
    introtext: "Our commitment to ethical practices in art exhibition",
    guidelines: [
      "Respect for artistic integrity",
      "Proper artwork handling procedures",
      "Photography policies"
    ]
  },
  shop: {
    title: "Gallery Shop",
    pricetext: "Price",
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
  photogallery: {
    title: "Photo Gallery",
    closetext: "Close",
    previoustext: "<",
    nexttext: ">",
    images: [
      {
        id: "img001",
        title: "A Gift from ASEAN Exhibition",
        thumbnail: "/images/exhibitions/thumbnails/Poster-Pameran-Portal-NAG_Hadiah-Dari-Asean1.jpg",
        full: [
          "/images/exhibitions/full/Poster-Pameran-Portal-NAG_Hadiah-Dari-Asean1.jpg",
          "/images/exhibitions/full/Poster-Pameran-Portal-NAG_Hadiah-Dari-Asean2.png"
        ],
        date: "2023-10-01"
      },
      {
        id: "img002",
        title: "Chung Chen Sun Archive Project Exhibition",
        thumbnail: "/images/exhibitions/thumbnails/Pameran-Projek-Arkib-Archive-Project-Chung-Chen-Sun_Banner-Pameran-Portal-LPSVN.jpg",
        full: [
          "/images/exhibitions/full/Pameran-Projek-Arkib-Archive-Project-Chung-Chen-Sun_Banner-Pameran-Portal-LPSVN.jpg"
        ],
        date: "2023-10-01"
      }
    ]
  },
  videogallery: {
    title: "Video Gallery",
    durationtext: "Duration",
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
