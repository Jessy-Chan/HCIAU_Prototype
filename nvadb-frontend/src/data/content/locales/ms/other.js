export const other = {
  sitemap: {
    sections: [
      {
        title: "Tentang",
        items: [
          { title: "Sejarah", path: "/about/history" },
          { title: "Misi & Visi", path: "/about/mission-vision" }
        ]
      },
      {
        title: "Lawatan",
        items: [
          { title: "Lokasi", path: "/visit/location" },
          { title: "Kemasukan", path: "/visit/admission" }
        ]
      }
    ]
  },
  portal: {
    externalSystems: [
      {
        title: "Portal Staf",
        url: "https://staff.nvadb.gov.my",
        description: "Akses sumber dan alat untuk staf",
        requiresLogin: true
      },
      {
        title: "HRMIS",
        url: "https://hrmis.nvadb.gov.my",
        description: "Sistem Pengurusan Sumber Manusia",
        requiresLogin: true
      }
    ]
  }
};

export default other;
