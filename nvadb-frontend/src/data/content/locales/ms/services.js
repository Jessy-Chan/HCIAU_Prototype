export const services = {
  applications: {
    title: "Portal Permohonan Dalam Talian",
    requirementstext: "Keperluan:",
    applytext: "Mohon Sekarang",
    form: {
      title: "Mohon untuk",
      cancel: "Batal"
    },
    categories: [
      {
        id: "venue",
        title: "Tempahan Ruang",
        description: "Tempah ruang galeri untuk acara",
        requirements: ["Cadangan acara", "Sijil insurans"],
        form: {
          name: {id:'name', name: 'Nama Penuh', type: 'text'},
          email: {id:'email', name: 'Emel', type: 'email'},
          documents: {id:'documents', name: 'Cadangan Acara', type: 'file', multiple: true}
        },
      },
      {
        id: "exhibition",
        title: "Cadangan Pameran",
        description: "Hantar konsep pameran anda",
        requirements: ["Portfolio", "CV", "Konsep pameran"],
        form: {
          name: {id:'name', name: 'Nama Penuh', type: 'text'},
          email: {id:'email', name: 'Emel', type: 'email'},
          documents: {id:'documents', name: 'Dokumen Pameran', type: 'file', multiple: true}
        },
      },
      {
        id: "join",
        title: "Sertai sebagai Artis",
        description: "Jadi sebahagian daripada komuniti artis kami",
        requirements: ["Hati yang penuh dengan seni!"],
        form: {
          name: {id:'name', name: 'Nama Penuh', type: 'text'},
          reason: {id:'reason', name: 'Sebab Menyertai', type: 'text'},
          email: {id:'email', name: 'Emel', type: 'email'}
        },
      }
    ]
  },
  artistdb: {
    title: "Data Pelukis Malaysia",
    description: "Pangkalan data lengkap pelukis Malaysia",
    alltext: "Semua Kategori",
    searchplaceholder: "Masukkan kata carian...",
    searchbytext: "Cari mengikut",
    searchdescription: "Gunakan carian di atas untuk mencari pelukis dalam pangkalan data kami",
    categories: ["Pelukis", "Pengukir", "Artis Digital", "Jurufoto"],
    searchFields: ["nama", "medium", "gaya", "wilayah"]
  },
  
  feedback: {
    title: "Portal Maklum Balas & Aduan",
    description: "Maklum balas anda penting untuk meningkatkan perkhidmatan kami. Sila isikan borang di bawah.",
    categories: [
      "Maklum Balas Umum",
      "Isu Laman Web",
      "Maklum Balas Pameran",
      "Penambahbaikan Perkhidmatan"
    ]
  },

  formfields: {
    category: "Kategori Maklum Balas",
    subject: "Subjek",
    message: "Maklum Balas Anda",
    name: "Nama",
    email: "Emel", 
    attachments: "Lampiran",
    submit: "Hantar",
    cancel: "Batal"
  },

  mobileapps: {
    title: "Aplikasi Mudah Alih NVADB",
    keyfeaturestext: "Ciri-ciri Utama:",
    downloadtext: "Muat Turun untuk",
    mainapp: {
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
