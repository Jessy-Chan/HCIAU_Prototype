export const services = {
  applications: {
    title: "Online Application Portal",
    requirementstext: "Requirements:",
    applytext: "Apply Now",
    form: {
      title: "Apply for",
      name: "Full Name",
      email: "Email",
      documents: "Required Documents",
      cancel: "Cancel"
    },
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

  artistdb: {
    title: "Malaysian Artists Database",
    description: "Comprehensive database of Malaysian artists",
    alltext: "All Categories",
    searchplaceholder: "Enter search terms...",
    searchbytext: "Search by",
    searchdescription: "Use the search above to find artists in our database",
    categories: ["Painters", "Sculptors", "Digital Artists", "Photographers"],
    searchFields: ["name", "medium", "style", "region"]
  },

  feedback: {
    title: "Feedback & Complaints Portal",
    description: "We value your feedback to improve our services. Please fill out the form below.",
    categories: [
      "General Feedback",
      "Website Issues",
      "Exhibition Feedback",
      "Service Improvement"
    ]
  },

  formfields: {
    category: "Feedback Category",
    subject: "Subject",
    message: "Your Feedback",
    name: "Name", 
    email: "Email",
    attachments: "Attachments",
    submit: "Submit",
    cancel: "Cancel"
  },

  mobileapps: {
    title: "NVADB Mobile Apps",
    keyfeaturestext: "Key Features:",
    downloadtext: "Download for",
    mainapp: {
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
