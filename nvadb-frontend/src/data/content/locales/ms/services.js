export const services = {
  applications: {
    categories: [
      {
        id: "venue",
        title: "Tempahan Ruang",
        description: "Tempah ruang galeri untuk acara",
        requirements: ["Cadangan acara", "Sijil insurans"]
      },
      {
        id: "exhibition",
        title: "Cadangan Pameran",
        description: "Hantar konsep pameran anda",
        requirements: ["Portfolio", "CV", "Konsep pameran"]
      }
    ]
  },
  artistDatabase: {
    title: "Data Pelukis Malaysia",
    description: "Pangkalan data lengkap pelukis Malaysia",
    categories: ["Pelukis", "Pengukir", "Artis Digital", "Jurufoto"],
    searchFields: ["nama", "medium", "gaya", "wilayah"]
  },
  feedback: {
    categories: [
      "Maklum Balas Umum",
      "Isu Laman Web",
      "Maklum Balas Pameran",
      "Penambahbaikan Perkhidmatan"
    ]
  },
  mobileApps: {
    mainApp: {
      name: "NVADB Mudah Alih",
      description: "Alami seni di mana-mana",
      features: [
        "Lawatan galeri maya",
        "Kalendar pameran",
        "Direktori artis",
        "Tempahan acara"
      ],
      platforms: [
        {
          name: "iOS",
          url: "https://apps.apple.com/my/nvadb"
        },
        {
          name: "Android",
          url: "https://play.google.com/store/apps/nvadb"
        }
      ]
    }
  }
};

export default services;
