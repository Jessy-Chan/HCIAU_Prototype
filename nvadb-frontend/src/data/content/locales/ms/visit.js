export const visit = {
  location: {
    title: "Lokasi & Arah",
    addresstext: "Alamat",
    address: "2, Jalan Temerloh, Off Jalan Tun Razak, 53200 Kuala Lumpur",
    coordinates: {
      lat: 3.1731,
      lng: 101.7041
    },
    directions: {
      title: "Cara Ke Sini",
      public: "Melalui Pengangkutan Awam",
      driving: "Melalui Kereta",
      byPublicTransport: [
        "LRT: Stesen Titiwangsa (5 minit berjalan kaki)",
        "Bas: Laluan 120, 130 berhenti di hadapan"
      ],
      byDriving: [
        "Dari KLCC: 10 minit melalui Jalan Tun Razak",
        "Tempat letak kereta disediakan"
      ]
    }
  },

  admission: {
    title: "Kemasukan & Waktu Operasi",
    hours: {
      title: "Waktu Operasi",
      regulartitle: "Waktu Biasa",
      closures: "Penutupan",
      weekdaytext: "Hari Bekerja",
      weekendtext: "Hujung Minggu",
      weekday: "10:00 PG - 6:00 PTG",
      weekend: "10:00 PG - 6:00 PTG",
      closed: [
        { day: "Hari Raya Aidilfitri", index: 0 },
        { day: "Hari Raya Aidiladha", index: 1 }
      ]
    },
    fees: {
      title: "Yuran Kemasukan",
      regular: {
        title: "Kadar Biasa",
        rates: {
          adult: { type: "Dewasa", price: "RM5" },
          student: { type: "Pelajar", price: "RM2" },
          senior: { type: "Warga Emas", price: "RM2" },
          children: { type: "Budak", price: "Percuma (bawah 12 tahun)" }
        }
      },
      special: {
        title: "Kadar Istimewa",
        group: { type: "Kumpulan", price: "RM3 seorang (kumpulan 20+)" },
        member: { type: "Ahli", price: "Percuma untuk ahli NAG FRIENDS" }
      }
    }
  },

  facilities: {
    title: "Kemudahan di NVADB",
    amenitiestext: "Kemudahan",
    amenities: [
      {
        name: "Akses Kerusi Roda",
        description: "Akses penuh di seluruh galeri",
        icon: "wheelchair"
      },
      {
        name: "Loker",
        description: "Simpanan selamat untuk barangan peribadi",
        icon: "locker"
      },
      {
        name: "Bilik Solat",
        description: "Ruang solat khas disediakan",
        icon: "prayer"
      }
    ],
    servicestext: "Perkhidmatan",
    services: [
      {
        name: "Lawatan Berpandu",
        description: "Disediakan setiap hari pada jam 11 pagi dan 3 petang",
        booking: "Tempahan diperlukan 24 jam lebih awal"
      },
      {
        name: "Panduan Audio",
        description: "Tersedia dalam 4 bahasa",
        rental: "RM10 setiap peranti"
      }
    ]
  },

  cafe: {
    title: "Kafe",
    name: "Kafe Sejiwa Titiwangsa",
    description: "Rasai citarasa tempatan dengan sentuhan moden",
    hours: "10:00 PG - 5:30 PTG",
    menutext: "Sorotan Menu",
    dailytext: "Istimewa Harian",
    cheftext: "Ciptaan Chef",
    menu: {
      highlights: [
        "Kopi Artisan Malaysia",
        "Kuih Tradisional",
        "Hidangan Ringan"
      ],
      specialties: [
        {
          name: "Istimewa Artis",
          description: "Ciptaan chef harian",
          price: "RM25"
        }
      ]
    }
  }
};

export default visit;
