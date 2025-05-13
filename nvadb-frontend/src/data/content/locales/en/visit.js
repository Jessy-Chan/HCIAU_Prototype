export const visit = {
  location: {
    title: "Location & Directions",
    addresstext: "Address",
    address: "2, Jalan Temerloh, Off Jalan Tun Razak, 53200 Kuala Lumpur",
    coordinates: {
      lat: 3.1731,
      lng: 101.7041
    },
    directions: {
      title: "Getting Here",
      public: "By Public Transport",
      driving: "By Car",
      byPublicTransport: [
        "LRT: Titiwangsa Station (5 minutes walk)",
        "Bus: Routes 120, 130 stop directly outside"
      ],
      byDriving: [
        "From KLCC: 10 minutes via Jalan Tun Razak",
        "Parking available on-site"
      ]
    }
  },

  admission: {
    title: "Admission & Hours",
    hours: {
      title: "Opening Hours",
      regulartitle: "Regular Hours",
      closures: "Closures",
      weekdaytext: "Weekdays",
      weekendtext: "Weekends",
      weekday: "10:00 AM - 6:00 PM",
      weekend: "10:00 AM - 6:00 PM",
      closed: [
        { day: "Hari Raya Aidilfitri", index: 0 },
        { day: "Hari Raya Aidiladha", index: 1 }
      ]
    },
    fees: {
      title: "Admission Fees",
      regular: {
        title: "Regular Rates",
        rates: {
          adult: { type: "Adult", price: "RM5" },
          student: { type: "Student", price: "RM2" },
          senior: { type: "Senior", price: "RM2" },
          children: { type: "Children", price: "Free (under 12)" }
        }
      },
      special: {
        title: "Special Rates",
        group: { type: "Group", price: "RM3 per person (groups of 20+)" },
        member: { type: "Member", price: "Free for NAG FRIENDS members" }
      }
    }
  },

  facilities: {
    title: "Facilities at NVADB",
    amenitiestext: "Amenities",
    amenities: [
      {
        name: "Wheelchair Access",
        description: "Full accessibility throughout the gallery",
        icon: "wheelchair"
      },
      {
        name: "Lockers",
        description: "Secure storage for personal items",
        icon: "locker"
      },
      {
        name: "Prayer Room",
        description: "Dedicated prayer spaces",
        icon: "prayer"
      }
    ],
    servicestext: "Services",
    services: [
      {
        name: "Guided Tours",
        description: "Available daily at 11am and 3pm",
        booking: "Required 24 hours in advance"
      },
      {
        name: "Audio Guide",
        description: "Available in 4 languages",
        rental: "RM10 per device"
      }
    ]
  },

  cafe: {
    title: "Café",
    name: "Sejiwa Titiwangsa Café",
    description: "Experience local flavors with a modern twist",
    hours: "10:00 AM - 5:30 PM",
    menutext: "Menu Highlights",
    dailytext: "Daily Specials",
    cheftext: "Chef's Specialties",
    menu: {
      highlights: [
        "Malaysian Artisan Coffee",
        "Traditional Kuih",
        "Light Meals"
      ],
      specialties: [
        {
          name: "Artist's Special",
          description: "Daily chef's creation",
          price: "RM25"
        }
      ]
    }
  }
};

export default visit;
