export const engage = {
  programs: [
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
  membership: {
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
    resources: [
      {
        type: "Video",
        title: "Art History Series",
        duration: "45 mins",
        url: "/learn/art-history"
      }
    ]
  }
};

export default engage;
