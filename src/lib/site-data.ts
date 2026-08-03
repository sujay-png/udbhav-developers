export const siteConfig = {
  name: "Udbhav Developers",
  tagline: "Future-Ready Living.",
  founded: 2012,
  phone: "+91 77604 71269",
  phoneAlt: "+91 (824) 4282324",
  email: "info@udbhavdevelopers.com",
  address: "C6, 1st Floor, City Gate Building, Kadri Shivabhag, Mangalore – 575 002",
  location: "Mangalore, Karnataka",
};

export type GalleryItem = {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
};

export type Project = {
  slug: string;
  name: string;
  category: "Residential" | "Commercial";
  status: "Ongoing" | "Completed";
  tagline: string;
  description: string;
  location: string;
  units?: string;
  year: string;
  image: string;
  // Extended Details
  subtitle?: string;
  mapTitle?: string;
  mapDesc?: string;
  mapSrc?: string;
  mapQueryName?: string;
  galleryImages?: GalleryItem[];
  // Rich details for new layout
  reraNo?: string;
  developmentSize?: string;
  totalUnits?: string;
  configurations?: string;
  price?: string;
  emi?: string;
  completionDate?: string;
  brochureUrl?: string;
  amenitiesBrochureUrl?: string;
  videoUrl?: string;
  features?: string[];
  faqs?: { question: string; answer: string }[];
  apartmentConfigurations?: { type: string; area: string; image: string }[];
  floorPlans?: { title: string; image: string }[];
  whyChooseUs?: string;
  constructionUpdates?: { month: string; images: string[] }[];
};

export type Media = {
  slug: string;
  name: string;
  src?: string;
  tagline: string;
  description: string;
  location?: string;
  units?: string;
  year?: string;
  image: string;
  link?: string;
};

export const projects: Project[] = [
  {
    slug: "udbhav-chinmaya",
    name: "Udbhav Chinmaya",
    category: "Residential",
    status: "Ongoing",
    tagline: "Sophisticated low-density residences",
    description:
      "A landmark residential address built around light-filled interiors, private balconies, and landscaped courtyards for families who want room to breathe in the city. Located prominently in Kadri, it offers seamless connectivity to key city amenities while maintaining a tranquil home atmosphere.",
    location: "Bejai, Mangalore",
    units: "4 BHK",
    year: "2025",
    image: "chinmaya",
    subtitle: "Kadri Sanctuary",
    mapTitle: "Kadri",
    mapDesc:
      "Kadri stands as one of Mangaluru's most cherished residential nodes, offering a fine balance of quiet green avenues and urban convenience.",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.15!2d74.85!3d12.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzEyLjAiTiA3NMKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    mapQueryName: "Kadri, Mangaluru",
    galleryImages: [
      { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80", alt: "Udbhav Chinmaya Exterior", title: "Udbhav Chinmaya", subtitle: "Kadri, Mangalore" },
      { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80", alt: "Balcony and Façade View", title: "Architectural Detail", subtitle: "Modern Luxury" },
    ],
    reraNo: "PRM/KA/RERA/1257/334/PR/210312/004018",
    developmentSize: "1.10 Acres",
    totalUnits: "84 Units",
    configurations: "3, 4 & 5 BHK",
    price: "₹ 98 Lacs onwards*",
    emi: "Flexible EMI Options",
    completionDate: "December 2025",
    brochureUrl: "/brochure.pdf",
    amenitiesBrochureUrl: "/amenities.pdf",
    videoUrl: "https://www.youtube.com/embed/kknoLaXHTaQ?si=BOUy2U2QFMnVfPUd",
    whyChooseUs: "A landmark residential address built around light-filled interiors, private balconies, and landscaped courtyards for families who want room to breathe in the city.",
    features: [
      "Vitrified flooring for living, dining, and bedrooms",
      "Premium modular kitchen fittings",
      "UPVC windows with mosquito mesh",
      "Teak wood frame for main door",
      "Branded sanitary ware and CP fittings",
      "24/7 power backup for common areas",
      "CCTV surveillance and round-the-clock security",
      "Automatic high-speed elevators"
    ],
    faqs: [
      { question: "What is the RERA approval status of Udbhav Chinmaya?", answer: "Yes, the project is RERA approved. The RERA number is PRM/KA/RERA/1257/334/PR/210312/004018." },
      { question: "What is the development size of Udbhav Chinmaya?", answer: "The total development size is 1.10 Acres." },
      { question: "What are the configuration options available?", answer: "We offer 3, 4 & 5 BHK premium apartments." },
      { question: "Is there flexible EMI or home loan assistance?", answer: "Yes, we have tie-ups with leading banks for home loans and flexible EMI options." }
    ],
    apartmentConfigurations: [
      { type: "3 BHK", area: "1400 - 1800 sq ft", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" },
      { type: "4 BHK", area: "2200 - 2500 sq ft", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80" },
      { type: "5 BHK Duplex", area: "3200+ sq ft", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80" }
    ],
    floorPlans: [
      { title: "Master Plan", image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=800&q=80" },
      { title: "Floor Plan - 3 BHK", image: "https://images.unsplash.com/photo-1598928506311-c55d43f12711?w=800&q=80" }
    ],
    constructionUpdates: [
      { month: "Bhoomi Pooja", images: ["https://images.unsplash.com/photo-1541888086425-d81bb19240f5?w=800&q=80", "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80"] },
      { month: "May 2023", images: ["https://images.unsplash.com/photo-1504307651254-35680f356f58?w=800&q=80", "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80"] }
    ]
  },
  {
    slug: "udbhav-shanthi",
    name: "Udbhav Shanthi",
    category: "Residential",
    status: "Completed",
    tagline: "Divine serenity alongside modern amenities",
    description:
      "Udbhav Developers invites you to experience Udbhav Shanthi, an exclusive 8 residential apartments which is the pinnacle for modern day living. Located in the prestigious neighbourhood of Kadri, in the vicinity of the famous Sri Manjunatha Swamy Temple, experience divine serenity along with an exclusive lifestyle. The location also provides good connectivity to major hubs of Mangalore. With retail & commercial space for Exclusive Outlets, Supermarkets, & Private Offces on the ground foor, this apartment complex is going to be a new landmark in Kadri. One can also be rest assured with our promise of a great build quality & premium amenities that will make you lead a life for the discerning few.",
    location: "Kadri, Mangaluru",
    units: "3 BHK",
    year: "2023",
    image: "udbhavshanthi",
    subtitle: "Exclusive 3 BHK Residences",
    mapTitle: "Kadri",
    mapDesc:
      "Kadri stands as one of Mangaluru's most cherished residential nodes, prized for its temple-side calm and strong connectivity to the city's major hubs.",
    mapSrc:
      "https://maps.google.com/maps?q=3-28-2326%2C%20Kadri%20Temple%20Rd%2C%20Mallikatte%2C%20Kadri%2C%20Mangaluru%2C%20Karnataka%20575003&t=m&z=16&output=embed&iwloc=near",
    mapQueryName: "Kadri Temple Rd, Mallikatte, Mangaluru",
    galleryImages: [
      { src: "/images/UdbhavShanthi_gallery1.jpg", alt: "Udbhav Shanthi Elevation", title: "Udbhav Shanthi", subtitle: "Kadri, Mangalore" },
      { src: "/images/UdbhavShanthi_gallery2.jpg", alt: "Udbhav Shanthi Facade", title: "Facade View", subtitle: "Kadri, Mangalore" },
      { src: "/images/UdbhavShanthi_gallery3.jpg", alt: "Udbhav Shanthi Interior", title: "Interior Finish", subtitle: "3 BHK Apartments" },
      { src: "/images/shanthi1.jpg", alt: "Udbhav Shanthi Amenities", title: "Amenities", subtitle: "Ground-floor Retail" },
    ],
  },
  {
    slug: "marcels-maison",
    name: "Udbhav Marcel’s Maison",
    category: "Residential",
    status: "Completed",
    tagline: "Premium living with integrated retail",
    description:
      "Udbhav Developers presents Marcel’s Maison, a mix use project which is located in the premium location of Valencia, which is one of the most sought after addresses in Mangaluru. The smart city is at the cusp of development & has many development activities that are making a mark in its skyline. Valencia has grown into a premium part of Mangaluru since the last decade. Being in the heart of the city with great connectivity to all important places of worship, shopping, education, hospitals & entertainment, one is geographically at an advantage. Marcel’s Maison boasts of contemporary architecture, coupled with modern amenities to make your life comfortable. Be it commercial space or residential apartment, one can be rest assured of a premium touch in both sphere’s.",
    location: "Valencia, Mangaluru",
    units: "2 & 3 BHK",
    year: "2025",
    image: "marcels",
    subtitle: "Contemporary Mixed-Use Living",
    mapTitle: "Valencia",
    mapDesc:
      "Valencia has grown into a premium part of Mangaluru over the last decade, offering residents and businesses an unmatched geographic advantage.",
    mapSrc:
      "https://maps.google.com/maps?q=Goveas%20Commercial%20Complex%2C%20opp.%20Roshni%20Nilaya%2C%20Valencia%2C%20Kankanady%2C%20Mangaluru%2C%20Karnataka%20575002%2C%20India&t=m&z=16&output=embed&iwloc=near",
    mapQueryName: "Valencia, Kankanady, Mangaluru",
    galleryImages: [
      { src: "/images/udbhavmarcels1.jpg", alt: "Udbhav Marcel's Maison Exterior", title: "Marcel's Maison", subtitle: "Valencia, Mangalore" },
      { src: "/images/udbhavmarcels2.jpg", alt: "Marcel's Maison Facade Detail", title: "Facade Detail", subtitle: "Contemporary Architecture" },
      { src: "/images/udbhavmarcels3.jpg", alt: "Udbhav Marcel's Maison Exterior", title: "Marcel's Maison", subtitle: "Valencia, Mangalore" },
      { src: "/images/udbhavmarcels4.jpg", alt: "Marcel's Maison Facade Detail", title: "Facade Detail", subtitle: "Contemporary Architecture" },
      { src: "/images/udbhavmarcels5.jpg", alt: "Udbhav Marcel's Maison Exterior", title: "Marcel's Maison", subtitle: "Valencia, Mangalore" },
      { src: "/images/udbhavmarcels6.jpg", alt: "Marcel's Maison Facade Detail", title: "Facade Detail", subtitle: "Contemporary Architecture" },
      { src: "/images/udbhavmarcels7.jpg", alt: "Marcel's Maison Facade Detail", title: "Facade Detail", subtitle: "Contemporary Architecture" },

  
    ],
  },
  {
    slug: "krk-aayush",
    name: "K.R.K. Aayush",
    category: "Residential",
    status: "Completed",
    tagline: "Compact, efficient family apartments",
    description:
      "There comes a time in everyone’s life where one gets to walk a different path. A path that leads to a new way of life, an opportunity to upgrade to a newer lifestyle, to be the epitome of fine living. K.R.K. AAYUSH, by Udbhav Developers is one such residential project in Mangalore which can escalate you to a new way of living. It is located in the one of the residential hubs of Mangalore at Urwa Hoigebail, with 21 contemporary styled apartments and modern amenities. With good road connectivity to major hubs of the city and being in the vicinity of all major hospitals, educational institutes, religious centres, entertainment zones and areas of business interests, one is in a good place geographically. More than that, with the build quality & all the amenities on board, one can be rest assured of truly moving towards fine living.",
    location: "Urwa Hoigebail, Mangalore",
    units: "1 & 2 BHK",
    year: "2022",
    image: "aayush",
    subtitle: "Fine Living, Reimagined",
    mapTitle: "Urwa Hoigebail",
    mapDesc:
      "Urwa Hoigebail offers exceptional connectivity and established residential comfort, making daily commuting and family life seamless.",
    mapSrc:
      "https://maps.google.com/maps?q=KRK%20Aayush%2C%20Urva%2C%20Mangalore&t=m&z=16&output=embed&iwloc=near",
    mapQueryName: "Urwa Hoigebail, Mangaluru",
    galleryImages: [
      { src: "/images/krkAayush_gallery.jpg", alt: "K.R.K. Aayush Building", title: "K.R.K. Aayush", subtitle: "Urwa Hoigebail, Mangalore" },
      { src: "/images/krkAayush_gallery1.jpg", alt: "K.R.K. Aayush Exterior", title: "Exterior View", subtitle: "Urwa Hoigebail, Mangalore" },
      { src: "/images/krkAayush_gallery2.jpg", alt: "K.R.K. Aayush Building", title: "K.R.K. Aayush", subtitle: "Urwa Hoigebail, Mangalore" },
      { src: "/images/krkAayush_gallery3.jpg", alt: "K.R.K. Aayush Exterior", title: "Exterior View", subtitle: "Urwa Hoigebail, Mangalore" },
      { src: "/images/krkAayush_gallery4.jpg", alt: "K.R.K. Aayush Building", title: "K.R.K. Aayush", subtitle: "Urwa Hoigebail, Mangalore" },
      { src: "/images/krkAayush_gallery5.jpg", alt: "K.R.K. Aayush Exterior", title: "Exterior View", subtitle: "Urwa Hoigebail, Mangalore" },
    ],
  },
  {
    slug: "udbhav-square",
    name: "Udbhav Square",
    category: "Commercial",
    status: "Completed",
    tagline: "Elegantly designed commercial hub",
    description:
      "Udbhav Square, an elegantly designed 20,000 sq.ft. commercial space located at Kottara Chowki, built with the contemporary touch & eco-friendly footprint to give the best experience for all types of businesses & retailers. This awesome location is best suited for banks, polyclinics, individual clinics, offices, automobile showrooms, shipping offices & supermarkets. With ample parking space at the road level & basement, you can rest assured that your dream of great office space is well cared for.",
    location: "Kottara Chowki, Mangalore",
    units: "Office & Retail",
    year: "2020",
    image: "groves",
    subtitle: "Commercial Landmark",
    mapTitle: "Kottara Chowki",
    mapDesc:
      "Kottara Chowki is a well-connected commercial junction in Mangaluru, popular with retailers, clinics, and offices for its visibility and accessibility.",
    mapSrc:
      "https://maps.google.com/maps?q=Udbhav%20Square%2C%20Kottara%20Chowki%2C%20Mangalore&t=m&z=16&output=embed&iwloc=near",
    mapQueryName: "Kottara Chowki, Mangaluru",
    galleryImages: [
      { src: "/images/udbhavsquare1.jpg", alt: "Udbhav Square Exterior", title: "Udbhav Square", subtitle: "Kottara Chowki, Mangalore" },
      { src: "/images/udbhavsquare2.jpg", alt: "Udbhav Square Exterior", title: "Udbhav Square", subtitle: "Kottara Chowki, Mangalore" },
      { src: "/images/udbhavsquare3.jpg", alt: "Udbhav Square Exterior", title: "Udbhav Square", subtitle: "Kottara Chowki, Mangalore" },
      { src: "/images/udbhavsquare4.jpg", alt: "Udbhav Square Exterior", title: "Udbhav Square", subtitle: "Kottara Chowki, Mangalore" },
      { src: "/images/udbhavsquare5.webp", alt: "Udbhav Square Exterior", title: "Udbhav Square", subtitle: "Kottara Chowki, Mangalore" },
      { src: "/images/udbhavsquare6.webp", alt: "Udbhav Square Exterior", title: "Udbhav Square", subtitle: "Kottara Chowki, Mangalore" },
      { src: "/images/udbhavsquare7.webp", alt: "Udbhav Square Exterior", title: "Udbhav Square", subtitle: "Kottara Chowki, Mangalore" },
      { src: "/images/udbhavsquare8.webp", alt: "Udbhav Square Exterior", title: "Udbhav Square", subtitle: "Kottara Chowki, Mangalore" },


    ],
  },
  {
    slug: "bhaskar-coconut-groves",
    name: "Bhaskar Coconut Groves",
    category: "Residential",
    status: "Completed",
    tagline: "Green-Canopy Residences",
    description:
      "Bhaskar Coconut Groves built in the calm and serene neighborhood near Nantoor Junction, Mangalore surrounded by abundant greenery, is an five storied premium apartment which houses a total of 28 homes including duplex. Replete with all modern amenities like children’s play area, recreation room, Gym, spacious lobby, reticulated gas connection, security, power-backup, ample parking space and Automatic lift, this apartment will be the perfect place to unwind and lead a comfortable life. With Vaastu in mind while laying down the floor plan, these apartments incorporate spacious rooms that are designed in a manner that permits maximum ventilation and light.",
    location: "Maroli, Mangalore",
    units: "Residential Units",
    year: "2015",
    image: "CoconutGroves",
    subtitle: "Green-Canopy Residences",
    mapTitle: "Maroli",
    mapDesc:
      "Maroli offers a calm, green residential setting near Nantoor Junction, combining natural surroundings with easy access to the rest of Mangaluru.",
    mapSrc:
      "https://maps.google.com/maps?q=Bhaskar%20Coconut%20Groves%2C%20Tharethotta%20Road%2C%20Adu%2C%20Maroli%2C%20Mangaluru%2C%20Karnataka%20575002&t=m&z=16&output=embed&iwloc=near",
    mapQueryName: "Tharethotta Road, Maroli, Mangaluru",
    galleryImages: [
      { src: "/images/bhaskar_gallery1.jpg", alt: "Bhaskar Coconut Groves Exterior", title: "Bhaskar Coconut Groves", subtitle: "Maroli, Mangalore" },
      { src: "/images/bhaskar_gallery2.jpg", alt: "Bhaskar Coconut Groves Exterior", title: "Bhaskar Coconut Groves", subtitle: "Maroli, Mangalore" },
      { src: "/images/bhaskar_gallery1.jpg", alt: "Bhaskar Coconut Groves Exterior", title: "Bhaskar Coconut Groves", subtitle: "Maroli, Mangalore" },
      { src: "/images/bhaskar_gallery3.jpg", alt: "Bhaskar Coconut Groves Exterior", title: "Bhaskar Coconut Groves", subtitle: "Maroli, Mangalore" },
      { src: "/images/bhaskar_gallery1.jpg", alt: "Bhaskar Coconut Groves Exterior", title: "Bhaskar Coconut Groves", subtitle: "Maroli, Mangalore" },
      { src: "/images/bhaskar_gallery4.jpg", alt: "Bhaskar Coconut Groves Exterior", title: "Bhaskar Coconut Groves", subtitle: "Maroli, Mangalore" },
      { src: "/images/bhaskar_gallery5.jpg", alt: "Bhaskar Coconut Groves Exterior", title: "Bhaskar Coconut Groves", subtitle: "Maroli, Mangalore" },
      { src: "/images/bhaskar_gallery6.jpg", alt: "Bhaskar Coconut Groves Exterior", title: "Bhaskar Coconut Groves", subtitle: "Maroli, Mangalore" },
      { src: "/images/bhaskar_gallery7.jpg", alt: "Bhaskar Coconut Groves Exterior", title: "Bhaskar Coconut Groves", subtitle: "Maroli, Mangalore" },
      { src: "/images/bhaskar_gallery8.jpg", alt: "Bhaskar Coconut Groves Exterior", title: "Bhaskar Coconut Groves", subtitle: "Maroli, Mangalore" },


      
    ],
  },
];

export const newsmedia: Media[] = [
  {
    slug: "marcels-maison-inauguration",
    name: "Marcel’s Maison",
    tagline: "Marcel’s Maison inaugurated in Valencia - A new landmark for premium living, business",
    description: "Marcel’s Maison inaugurated in Valencia - A new landmark for premium living, business",
    units: "3 & 4 BHK",
    image: "Maison1",
    link: "https://www.daijiworld.com/news/newsDisplay?newsID=1265898",
  },
  {
    slug: "marcels-maison-groundbreaking",
    name: "Marcel’s Maison",
    tagline: "Ground-breaking ceremony for Udbhav Developers’ 'Marcel's Maison' held",
    description: "Shanthi pairs elevated apartment living with ground-floor retail...",
    units: "2 & 3 BHK",
    image: "Maison2",
    link: "https://www.daijiworld.com/news/newsDisplay?newsID=1043758",
  },
   {
    slug: "marcels-maison-groundbreaking",
    name: "Marcel’s Maison",
    tagline: "Udbhav Developers presents Marcel’s Maison at Valencia - Bookings open",
    description: "Shanthi pairs elevated apartment living with ground-floor retail...",
    units: "2 & 3 BHK",
    image: "Maison3",
    link: "https://www.daijiworld.com/news/newsDisplay?newsID=1042541",
  },
   
  {
    slug: "marcels-maison-groundbreaking",
    name: "Udbhav Developers’ ‘KRK Aayush",
    tagline: "Udbhav Developers’ ‘KRK Aayush’ residential building inaugurated",
    description: "Shanthi pairs elevated apartment living with ground-floor retail...",
    units: "2 & 3 BHK",
    image: "KRKAayush",
    link: "https://www.daijiworld.com/news/newsDisplay?newsID=974722#.Yr8JRfBFhHE.whatsapp",
  },
   {
    slug: "marcels-maison-groundbreaking",
    name: "Udbhav shanthi",
    tagline: "Udbhav Developers’ ‘KRK Aayush’ residential building inaugurated",
    description: "Shanthi pairs elevated apartment living with ground-floor retail...",
    units: "2 & 3 BHK",
    image: "shanthi1",
    link: "https://www.daijiworld.com/news/newsDisplay?newsID=940244",
  },
   {
    slug: "marcels-maison-groundbreaking",
    name: "Udbhav Square",
    tagline: "Ready to occupy commercial space available at ‘Udbhav Square’ at Kottara",
    description: "Shanthi pairs elevated apartment living with ground-floor retail...",
    units: "2 & 3 BHK",
    image: "Square1",
    link: "https://www.daijiworld.com/news/newsDisplay.aspx?newsID=735321",
  },
  {
    slug: "marcels-maison-inauguration",
    name: "Udbhav Square",
    tagline: "Mangaluru’s finest commercial complex ‘Udbhav Square’ inaugurated.",
    description: "Marcel’s Maison inaugurated in Valencia - A new landmark for premium living, business",
    units: "3 & 4 BHK",
    image: "square2",
    link: "https://www.daijiworld.com/news/newsDisplay.aspx?newsID=678408",
  },
  {
    slug: "marcels-maison-groundbreaking",
    name: "Udbhav Square",
    tagline: "‘Udbhav Square’ in Kottara Chowki - Golden opportunity for investors  ",
    description: "Shanthi pairs elevated apartment living with ground-floor retail...",
    units: "2 & 3 BHK",
    image: "square3",
    link: "https://www.daijiworld.com/news/newsDisplay.aspx?newsID=511578",
  },
   {
    slug: "marcels-maison-groundbreaking",
    name: "Bhaskar Coconut Groves",
    tagline: "Bhaskar Coconut Groves' apartments inaugurated. ",
    description: "Shanthi pairs elevated apartment living with ground-floor retail...",
    units: "2 & 3 BHK",
    image: "Coconut",
    link: "https://www.daijiworld.com/news/newsDisplay?newsID=325279",
  },
   {
    slug: "marcels-maison-groundbreaking",
    name: "Udbhav Chinmaya",
    tagline: " New residential project ‘Udbhav Chinmaya’ launched in heart of Mangaluru                  ",
    description: "Shanthi pairs elevated apartment living with ground-floor retail...",
    units: "2 & 3 BHK",
    image: "Chinmaya1",
    link: "https://daijiworld.com/news/newsDisplay?newsID=1295161",
  },
];

export const navLinks = [
  { label: "About Us", href: "/Aboutus" },
  {
    label: "Projects",
    href: "/portfolio",
    children: [
      {
        label: "Ongoing",
        status: "Ongoing",
        href: "/portfolio?status=ongoing",
        items: projects.filter((p) => p.status === "Ongoing"),
      },
      {
        label: "Completed",
        status: "Completed",
        href: "/portfolio?status=completed",
        items: projects.filter((p) => p.status === "Completed"),
      },
    ],
  },
  { label: "Buyers Guide", href: "/Buyers" },
  { label: "Testimonials", href: "/Testimonials" },
  { label: "Careers", href: "/Careers" },
  { label: "News Media", href: "/NewsMedia" },
  { label: "Blog", href: "/blog" },
];

export const testimonials = [
  {
    quote:
      "We are the proud owners of one of the apartments built by Udbhav Developers in their first venture. The build quality is good and they have used branded fittings. They are very approachable and easy to work with, and have always answered our questions patiently.",
    name: "Anuroop Vijaya Kumar",
    location: "Mangalore",
    rating: 5,
  },
  {
    quote:
      "I liked the projects completed by Udbhav Developers equal to quality and standards to international buildings. The amenities, structure and engineering behind the Udbhav Developer buildings are world class.",
    name: "Rohit Damodar",
    location: "International Resident",
    rating: 5,
    featured: true,
  },
  {
    quote:
      "Kiran has been spot on with all the work of the property. Grooves Inc was one of the properties that I was out of India, I dealt transparently by the staff, land documentation and rent were verified.",
    name: "Rayan Cornelio",
    location: "Mangalore",
    rating: 5,
  },
  {
    quote:
      "Never seen a developer who delivers more than what was promised. Customer friendly, honest, and very professional in interaction.",
    name: "Kris",
    location: "Mr Pai Road",
    rating: 5,
  },
];

export const services = [
  {
    icon: "building",
    title: "Building Construction",
    tag: "UD Infra Projects",
    description:
      "Our construction wing, UD Infra Projects, is an innovative infrastructure firm focused on development & growth. We provide civil engineering, road construction, and high-rise developments for commercial and residential usage.",
    tags: ["Civil Engineering", "Independent Villas", "Commercial Hubs"],
  },
  {
    icon: "sofa",
    title: "Interior Design",
    tag: "Udbhav Interiors",
    description:
      "Our interior design wing, Udbhav Interiors, brings you global trends. Our technical team works with you to bring your vision to life and provide the lifestyle you envisage.",
    tags: [],
  },
  {
    icon: "wrench",
    title: "Building Maintenance",
    tag: "ASK & Associates",
    description:
      "ASK & Associates looks after maintenance services post-inauguration, including repairs, statutory payments, and specialised upkeep to ensure long-term value.",
    tags: ["Post-Construction Care", "Plumbing & Electrical", "Statutory Management"],
  },
];

export const pillars = [
  {
    icon: "shield",
    title: "Uncompromising Quality",
    description: "Built around premium materials and craftsmanship from the foundation up.",
  },
  {
    icon: "leaf",
    title: "Eco-Conscious Approach",
    description: "Striving for sustainable all-round development for a greater environmental future.",
  },
  {
    icon: "smile",
    title: "Customer Satisfaction",
    description: "Giving our customers more value than they invest through transparent processes.",
  },
];

export const processSteps = [
  {
    title: "Site & Feasibility",
    description:
      "We assess land, zoning, and market demand before a single line is drawn — so every project starts on solid ground.",
  },
  {
    title: "Design & Approvals",
    description:
      "Our architecture partners translate the brief into drawings, then we manage every statutory approval to keep the timeline honest.",
  },
  {
    title: "Construction",
    description:
      "UD Infra Projects executes with in-house civil engineering teams, quality checks at every slab, and transparent progress reporting.",
  },
  {
    title: "Handover & Beyond",
    description:
      "ASK & Associates takes over post-handover — statutory compliance, repairs, and long-term upkeep, so ownership stays effortless.",
  },
];