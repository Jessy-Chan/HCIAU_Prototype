export const services = {
  applications: {
    title: "Online Application Portal",
    requirementstext: "Requirements:",
    applytext: "Apply Now",
    form: {
      title: "Apply for",
      cancel: "Cancel"
    },
    categories: [
      {
        id: "venue",
        title: "Venue Booking",
        description: "Book gallery spaces for events",
        requirements: ["Event proposal", "Insurance certificate"],
        form: {
          name: {id:'name', name: 'Full Name', type: 'text'},
          email: {id:'email', name: 'Email', type: 'email'},
          purpose: {id:'purpose', name: 'Purpose', type: 'text', required: false},
          documents: {id:'documents', name: 'Event proposal', type: 'file', multiple: true}
        },
      },
      {
        id: "exhibition",
        title: "Exhibition Proposal",
        description: "Submit your exhibition concept",
        requirements: ["Portfolio", "CV", "Exhibition concept"],
        form: {
          name: {id:'name', name: 'Full Name', type: 'text'},
          email: {id:'email', name: 'Email', type: 'email'},
          documents: {id:'documents', name: 'Event proposal', type: 'file', multiple: true}
        },
      },
      {
        id: "join",
        title: "Join as an Artist",
        description: "Become a part of our artist community",
        requirements: ["A heart with art!"],
        form: {
          name: {id:'name', name: 'Full Name', type: 'text'},
          reason: {id:'reason', name: 'Reason for Joining', type: 'text'},
          email: {id:'email', name: 'Email', type: 'email'}
        },
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
