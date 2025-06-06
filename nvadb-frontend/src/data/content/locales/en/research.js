export const research = {
  publications: {
    title: "Research Publications",
    searchplaceholder: "Search publications...",
    bytext: "By",
    downloadtext: "Download PDF",
    categories: ["Contemporary Art", "Traditional Art", "Art History", "Conservation"],
    items: [
      {
        id: "pub001",
        title: "Malaysian Art in the New Millennium",
        author: "Dr. Sarah Lee",
        date: "2023",
        abstract: "A comprehensive study of contemporary Malaysian art trends",
        downloadUrl: "/publications/malaysian-art-2023.pdf"
      },
      {
        id: "pub002",
        title: "Contemporary Art Movements in Southeast Asia",
        author: "Dr. John Smith",
        date: "2023",
        abstract: "Analysis of emerging art movements in the region",
        downloadUrl: "/publications/sea-art-2023.pdf"
      }
    ]
  },
  
  archive: {
    title: "NVADB Archive",
    yeartext: "All Year",
    typetext: "All Type",
    viewtext: "View Document",
    downloadtext: "Download Document",
    years: [2023, 2022, 2021, 2020, 2019],
    types: ["Documents", "Photographs", "Videos", "Audio Recordings"],
    items: [
      {
        id: "arch001",
        title: "Exhibition Catalog 2023",
        type: "Documents",
        year: 2023,
        url: "/archive/catalog-2023.pdf"
      },
      {
        id: "arch002",
        title: "Gallery Tour Recording",
        type: "Audio Recordings",
        year: 2022,
        url: "/archive/tour-2022.mp3"
      }
    ],
    collections: [
      {
        id: "col001",
        title: "Historical Exhibition Records",
        period: "1958-2023",
        description: "Complete archive of past exhibitions",
        items: [/* archive items */]
      }
    ],
    formats: ["Documents", "Photographs", "Videos", "Audio Recordings"]
  },
  forms: {
    categories: [
      {
        id: "research",
        name: "Research Access",
        forms: [
          {
            id: "form001",
            title: "Archive Access Request",
            format: "PDF",
            size: "250KB",
            url: "/forms/archive-access.pdf"
          }
        ]
      }
    ]
  },

  opendata: {
    title: "Goverment Open Data",
    description: "Access and download datasets related to Malaysian art and culture.",
    viewtext: "View Data",
    downloadtext: "Download Data",
    updatetext:"Updated: ",
    formattext: "Format: ",
    datasets: [
      {
        id: "data001",
        title: "Annual Visitor Statistics",
        format: "CSV",
        lastUpdated: "2023-12-01",
        description: "Yearly visitor numbers and demographics",
        downloadUrl: "/data/visitors-2023.csv"
      }
    ]
  },

  faq: {
    title: "Frequently Asked Questions",
    searchplaceholder: "Search FAQs...",
    categories: ["General", "Research Access", "Archives", "Publications"],
    questions: [
      {
        id: "faq001",
        category: "Research Access",
        question: "How can I access the physical archives?",
        answer: "Researchers can submit an access request form..."
      }
    ]
  },
  help: {
    title: "Help & Support",
    guidestitle: "Quick Help Guides",
    readtext: "Read More →",
    contacttext: "Contact Support",
    requesttext: "Support Request",
    categories: ["General", "Technical", "Research", "Archive Access"],
    request: {
      name: "Name",
      email: "Email",
      category: "Category",
      message: "Message",
    },
    guides: [
      {
        id: "guide001",
        title: "Using the Digital Archive",
        description: "Step-by-step guide to accessing digital collections",
        url: "/help/digital-archive-guide"
      }
    ],
    support: {
      email: "research@nvadb.gov.my",
      phone: "+603-4026 7000",
      hours: "Monday-Friday, 9:00 AM - 5:00 PM"
    }
  },
  downloads: {
    title: "Downloadable Forms",
    categorytext: "All Categories",
    categories: ["Artist Registration", "Copyright", "General"],
    downloadtext: "Download",
    sizetext: "Size",
    formattext: "Format",
    forms: [
      {
        id: "form002",
        title: "Artist Registration Form",
        description: "Application form for artist registration with NVADB",
        category: "Artist Registration",
        format: "PDF",
        size: "150KB",
        downloadUrl: "/forms/artist-registration.pdf"
      },
      {
        id: "form003",
        title: "Artwork Copyright Registration",
        description: "Form to register copyright for your artistic works",
        category: "Copyright",
        format: "PDF",
        size: "200KB",
        downloadUrl: "/forms/copyright-registration.pdf"
      }
    ]
  }
};

export default research;
