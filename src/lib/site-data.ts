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
// 1. Projects must be defined FIRST so navLinks can reference them
export const projects: Project[] = [
  {
    slug: "udbhav-shanthi",
    name: "Udbhav Marcel’s Maison",
    category: "Residential",
    status: "Completed",
    tagline: "Premium living with integrated retail",
    description:
      "Shanthi pairs elevated apartment living with ground-floor retail, giving residents everyday conveniences without ever leaving the address.",
    location: "Valencia, Mangaluru",
    units: "2 & 3 BHK",
    year: "2025 (Completed)",
    image:"shanthi",
  },
  {
    slug: "marcels-maison",
    name: "udbhav-chinmaya",
    category: "Residential",
    status: "Ongoing",
    tagline: "Sophisticated low-density residences",
    description:
      "A boutique collection of low-density homes designed for privacy, with double-height lobbies and material choices drawn from European residential design.",
    location: "Bejai, Mangalore",
    units: "4 BHK",
    year: "2025",
    image: "marcels",
  },
  {
    slug: "udbhav-shanthi",
    name: "udbhav-shanthi",
    category: "Residential",
    status: "Completed",
    tagline: "Premium living with integrated retail",
    description:
      "Shanthi pairs elevated apartment living with ground-floor retail, giving residents everyday conveniences without ever leaving the address.",
    location: "Valencia, Mangaluru",
    units: "2 & 3 BHK",
    year: "2025 (Completed)",
    image: "udbhavshanthi",
  },
  {
    slug: "krk-aayush",
    name: "K.R.K. Aayush",
    category: "Residential",
    status: "Completed",
    tagline: "Compact, efficient family apartments",
    description:
      "Aayush was built for first-time homeowners — efficient layouts, sensible pricing, and the same construction standard as every Udbhav address.",
    location: "Bikarnakatte, Mangalore",
    units: "2 & 3 BHK",
    year: "2018",
    image: "aayush",
  },
  {
    slug: "Udbhav Square",
    name: "Udbhav Square",
    category: "Residential",
    status: "Completed",
    tagline: "Villas set within a working coconut grove",
    description:
      "Independent villas arranged around a preserved coconut grove — a rare offering of land, greenery, and architecture in one gated address.",
    location: "Kottara, Mangalore",
    units: "Villas",
    year: "2021",
    image: "groves",
  },
  {
    slug: "Bhaskar Coconut Groves",
    name: "Bhaskar Coconut Groves",
    category: "Residential",
    status: "Completed",
    tagline: "Villas set within a working coconut grove",
    description:
      "Independent villas arranged around a preserved coconut grove — a rare offering of land, greenery, and architecture in one gated address.",
    location: "Kottara, Mangalore",
    units: "Villas",
    year: "2021",
    image: "CoconutGroves",
  },
];
export const newsmedia: Media[] = [
  {
    slug: "udbhav-chinmaya",
    name: "Marcel’s Maison",
    tagline: "Marcel’s Maison inaugurated in Valencia - A new landmark for premium living, business ",
    description: " Marcel’s Maison inaugurated in Valencia - A new landmark for premium living, business ",
   
    units: "3 & 4 BHK",
 
    image: "chinmaya",
    link: "https://www.daijiworld.com/news/newsDisplay?newsID=1265898",
  },
  {
    slug: "udbhav-shanthi",
    name: "Marcel’s Maison",
    tagline: "Ground-breaking ceremony for Udbhav Developers’ 'Marcel's Maison' held",
    description: "Shanthi pairs elevated apartment living with ground-floor retail...",
  
    units: "2 & 3 BHK",
   
    image: "shanthi",
    link: "https://www.daijiworld.com/news/newsDisplay?newsID=1043758", 
  },
  {
    slug: "marcels-maison",
    name: "Marcels Maison",
    tagline: "Udbhav Developers presents Marcel’s Maison at Valencia - Bookings open ",
    description: "A boutique collection of low-density homes designed for privacy...",
    
    units: "4 BHK",
 
    image: "marcels",
    link: "https://www.daijiworld.com/news/newsDisplay?newsID=1042541", 
  },
  {
    slug: "krk-aayush",
    name: "K.R.K. Aayush",
    tagline: "Compact, efficient family apartmentsUdbhav Developers’ ‘KRK Aayush’ residential building inaugurated ",
    description: "Aayush was built for first-time homeowners...",
    
    units: "2 & 3 BHK",
    
    image: "aayush",
    link: "https://www.daijiworld.com/news/newsDisplay?newsID=974722#.Yr8JRfBFhHE.whatsapp", 
  },
  {
    slug: "Udbhav Shanthi",
    name: "Udbhav Shanthi",
    tagline: "Exclusive 3BHK residential apartments in Udbhav Shanthi at Kadri - Bookings open        ",
    description: "Independent villas arranged around a preserved coconut grove...",
  
    units: "Villas",
   
    image: "udbhavshanthi",
    link: "https://www.daijiworld.com/news/newsDisplay?newsID=940244, "
  },
   {
    slug: "Udbhav Square",
    name: "Udbhav Square ",
    tagline: "Ready to occupy commercial space available at ‘Udbhav Square’ at Kottara ",
    description: "Independent villas arranged around a preserved coconut grove...",
    
    units: "Villas",
   
    image: "groves",
    link: "https://www.daijiworld.com/news/newsDisplay?newsID=735321", 
  },
   {
    slug: "Udbhav Square",
    name: "Udbhav Square",
    tagline: "Mangaluru’s finest commercial complex ‘Udbhav Square’ inaugurated. ",
    description: "Independent villas arranged around a preserved coconut grove...",
    
    units: "Villas",
  
    image: "Square",
    link: "https://www.daijiworld.com/news/newsDisplay.aspx?newsID=678408", 
  },
   {
    slug: "Udbhav Square",
    name: "Udbhav Square",
    tagline: "‘Udbhav Square’ in Kottara Chowki - Golden opportunity for investors ",
    description: "Independent villas arranged around a preserved coconut grove...",
   
    units: "Villas",
     image: "Square1",
    link: "https://www.daijiworld.com/news/newsDisplay.aspx?newsID=511578", 
  },
   {
    slug: "Udbhav Square",
    name: "Bhaskar Coconut Groves",
    tagline: "Bhaskar Coconut Groves' apartments inaugurated.",
    description: "Bhaskar Coconut Groves' apartments inaugurated.",
   
    units: "Villas",
   
    image: "Bhaskar",
    link: "https://www.daijiworld.com/news/newsDisplay?newsID=325279", 
  },
   {
    slug: "Udbhav Square",
    name: "Udbhav Chinmaya",
    tagline: "New residential project ‘Udbhav Chinmaya’ launched in heart of Mangaluru ",
    description: "Independent villas arranged around a preserved coconut grove...",
   
    units: "Villas",
  
    image: "udbhavchinmaya",
    link: "https://daijiworld.com/news/newsDisplay?newsID=1295161", 
  },
   
];
// 2. navLinks can now safely filter through the projects array
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
        items: projects.filter(p => p.status === "Ongoing")
      },
      {
        label: "Completed",
        status: "Completed",
        href: "/portfolio?status=completed",
        items: projects.filter(p => p.status === "Completed")
      }
    ]
  },
  { label: "Buyers Guide", href: "/Buyers" },
  { label: "Testimonials", href: "/Testimonials" },

  { label: "Carrers", href: "/Careers" },
  { label: "News Media", href: "/NewsMedia" },
  { label: "Blog", href: "/blog" },
];

export const stats = [
  { value: "12+", label: "Years of Excellence" },
  { value: "24", label: "Projects Delivered" },
  { value: "1,400+", label: "Families Housed" },
  { value: "6", label: "Ongoing Developments" },
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