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

export const navLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Company", href: "/company" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
];

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

export const projects: Project[] = [
  {
    slug: "udbhav-chinmaya",
    name: "Udbhav Chinmaya",
    category: "Residential",
    status: "Completed",
    tagline: "Modern 3 & 4 BHK residential apartments",
    description:
      "A landmark residential address built around light-filled interiors, private balconies, and landscaped courtyards for families who want room to breathe in the city.",
    location: "Kadri, Mangalore",
    units: "3 & 4 BHK",
    year: "2019",
    image: "chinmaya",
  },
  {
    slug: "udbhav-shanthi",
    name: "Udbhav Shanthi",
    category: "Residential",
    status: "Completed",
    tagline: "Premium living with integrated retail",
    description:
      "Shanthi pairs elevated apartment living with ground-floor retail, giving residents everyday conveniences without ever leaving the address.",
    location: "Kankanady, Mangalore",
    units: "2 & 3 BHK",
    year: "2020",
    image: "shanthi",
  },
  {
    slug: "marcels-maison",
    name: "Marcel's Maison",
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
    slug: "udbhav-square",
    name: "Udbhav Square",
    category: "Commercial",
    status: "Ongoing",
    tagline: "Grade-A commercial hub for growing businesses",
    description:
      "A commercial address engineered for flexibility — column-free floor plates, dedicated parking, and infrastructure ready for modern workplaces.",
    location: "Mangalore City Centre",
    year: "2026",
    image: "square",
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
    slug: "brostar-coconut-groves",
    name: "Brostar Coconut Groves",
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
