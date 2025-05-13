export const engage = {
  programs: {
    title: "Program Pembangunan Seni",
    programtext: "Program Kami",
    welcometext: "Selamat datang ke halaman Program NVADB.",
    scheduletext: "Jadual",
    agetext: "Umur",
    feetext: "Yuran",
    program: [
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
  form: [
    {
      id: "form001",
      title: "Pendaftaran untuk Program",
      name: "Nama Penuh",
      email: "Emel",
      age: "Umur",
      submit: "Hantar",
    }
  ]
},
  membership: {
    title: "Keahlian NAG FRIENDS",
    yeartext: "Tahun",
    jointext: "Sertai Sekarang",
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
    title: "Belajar & Rujukan",
    durationtext: "Durasi",
    viewtext: "Lihat",
    resources: [
      {
        type: "Video",
        title: "Siri Sejarah Seni",
        duration: "45 minit",
        url: "/learn/art-history"
      }
    ]
  },
  resources: {
    title: "Sumber dan Media",
    digitalresourcestext: "Sumber Digital",
    accesstext: "Akses Sumber →",
    downloadmaterialstext: "Bahan Muat Turun",
    downloadtext: "Muat Turun",
    digital: [
      {
        id: "res001",
        title: "Siri Sejarah Seni",
        description: "Video pendidikan tentang sejarah seni",
        url: "/resources/art-history"
      }
    ],
    downloads: [
      {
        id: "dl001",
        title: "Panduan Seni 2023",
        format: "PDF",
        downloadUrl: "/resources/guide-2023.pdf"
      }
    ]
  }
};

export default engage;