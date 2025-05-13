export const services = {
  applications: {
    categories: [
      {
        id: "venue",
        title: "Venue Booking",
        description: "Book gallery spaces for events",
        requirements: ["Event proposal", "Insurance certificate"]
      },
      {
        id: "exhibition",
        title: "Exhibition Proposal",
        description: "Submit your exhibition concept",
        requirements: ["Portfolio", "CV", "Exhibition concept"]
      }
    ]
  },
  artistDatabase: {
    title: "Data Pelukis Malaysia",
    description: "Comprehensive database of Malaysian artists",
    categories: ["Painters", "Sculptors", "Digital Artists", "Photographers"],
    searchFields: ["name", "medium", "style", "region"]
  },
  feedback: {
    categories: [
      "General Feedback",
      "Website Issues",
      "Exhibition Feedback",
      "Service Improvement"
    ]
  },
  mobileApps: {
    mainApp: {
      name: "NVADB Mobile",
      description: "Experience art on the go",
      features: [
        "Virtual gallery tours",
        "Exhibition calendar",
        "Artist directory",
        "Event booking"
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
