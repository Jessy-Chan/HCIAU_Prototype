export const other = {
  sitemap: {
    sections: [
      {
        title: "About",
        items: [
          { title: "History", path: "/about/history" },
          { title: "Mission & Vision", path: "/about/mission-vision" }
        ]
      },
      {
        title: "Visit",
        items: [
          { title: "Location", path: "/visit/location" },
          { title: "Admission", path: "/visit/admission" }
        ]
      }
    ]
  },
  portal: {
    externalSystems: [
      {
        title: "Staff Portal",
        url: "https://staff.nvadb.gov.my",
        description: "Access staff resources and tools",
        requiresLogin: true
      },
      {
        title: "HRMIS",
        url: "https://hrmis.nvadb.gov.my",
        description: "Human Resource Management System",
        requiresLogin: true
      }
    ]
  }
};

export default other;
