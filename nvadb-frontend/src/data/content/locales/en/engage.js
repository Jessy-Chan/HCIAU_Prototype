export const engage = {
  programs: {
    title: "Art Development Programmes",
    programtext: "Our Programs",
    welcometext: "Welcome to NVADB's Programs page.",
    scheduletext: "Schedule",
    agetext: "Age",
    feetext: "Fee",
    program: [
    {
      id: "prog001",
      title: "Youth Art Workshop",
      schedule: "Every Saturday",
      ageGroup: "12-18 years",
      description: "Hands-on art creation workshops",
      registration: {
        fee: "RM50",
        capacity: 20
      }
    }
  ],
  form:[
    {
      id: "form001",
      title: "Register for Program",
      name: "Full Name",
      email: "Email",
      age: "Age",
      submit: "Submit",
    }
  ]
},

  membership: {
    title: "NAG FRIENDS Membership",
    yeartext: "Year",
    jointext: "Join Now",
    levels: [
      {
        name: "Friend",
        annual: "RM100",
        benefits: [
          "Free admission",
          "10% shop discount",
          "Members-only events"
        ]
      }
    ]
  },
  
  learn: {
    title: "Learn & References",
    durationtext: "Duration",
    viewtext: "View",
    resources: [
      {
        type: "Video",
        title: "Art History Series",
        duration: "45 mins",
        url: "/learn/art-history"
      }
    ]
  },

  resources: {
    title: "Resources and Media",
    digitalresourcestext: "Digital Resources",
    accesstext: "Access Resource →",
    downloadmaterialstext: "Downloadable Materials",
    downloadtext: "Download",
    digital: [
      {
        id: "res001",
        title: "Art History Series",
        description: "Educational videos about art history",
        url: "/resources/art-history"
      }
    ],
    downloads: [
      {
        id: "dl001",
        title: "Art Guide 2023",
        format: "PDF",
        downloadUrl: "/resources/guide-2023.pdf"
      }
    ]
  }
};

export default engage;
