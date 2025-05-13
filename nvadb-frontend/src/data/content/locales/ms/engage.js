export const engage = {
  programs: [
    {
      id: "prog001",
      title: "Bengkel Seni Belia",
      schedule: "Setiap Sabtu",
      ageGroup: "12-18 tahun",
      description: "Bengkel penciptaan seni secara praktikal",
      registration: {
        fee: "RM50",
        capacity: 20
      }
    }
  ],
  membership: {
    levels: [
      {
        name: "Rakan",
        annual: "RM100",
        benefits: [
          "Kemasukan percuma",
          "Diskaun 10% di kedai",
          "Acara khas untuk ahli sahaja"
        ]
      }
    ]
  },
  learn: {
    resources: [
      {
        type: "Video",
        title: "Siri Sejarah Seni",
        duration: "45 minit",
        url: "/learn/art-history"
      }
    ]
  }
};

export default engage;