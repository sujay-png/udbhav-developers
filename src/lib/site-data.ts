export const siteConfig = {
  name: "Udbhav Developers",
  tagline: "Future-Ready Living.",
  founded: 2012,
  phone: "+91 77604 71269",
  phoneAlt1: "+91 (824) 4282324",
  email: "info@udbhavdevelopers.com",
  address: "C6, 1st Floor, City Gate Building, Above Jimmy’s Super Market, Kadri Shivabhag, Mangalore – 575 002",
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
  image: string;
  subtitle?: string;
  mapTitle?: string;
  mapDesc?: string;
  mapSrc?: string;
  mapQueryName?: string;
  galleryImages?: GalleryItem[];
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
  Typology?:String;
Possession:string;
projectsize:string;
  projectarea:string;
  faqs?: { question: string; answer: string }[];
  apartmentConfigurations?: { type: string; area: string; image: string }[];
  floorPlans?: { title: string; image: string; category?: string }[];
  amenities?: { title: string; image: string }[];
  specifications?: string[];
  advantages?: { title: string; distance: string }[];
  whyChooseUs?: string;
  constructionUpdates?: { month: string; images: string[] }[];
  updates?: {
[x: string]: any;
    title: string;
    images: string[];
  }[];
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
      "Udbhav Chinmaya is an upcoming premium residential apartment project located in the peaceful and upscale surroundings of Chandrika Layout, Swami Vivekanand Road, Kadri, one of Mangaluru’s most sought-after residential neighborhoods. Designed for modern families, working professionals, first-time home buyers, and retirees, this project combines spacious Vaastu-compliant homes, premium amenities, and unmatched city connectivity.",
    location: "Kadri, Mangaluru",
    units: "4 BHK",
    Possession: "2025",
    Typology:"Commercial & Residential Apartments",
    projectarea:'18 Cents',
    projectsize:'Basement, Ground + 4 Floors',
    image: "Udbhav-website",
    subtitle: "Kadri Sanctuary",
    mapTitle: "Kadri",
    mapDesc:
      "Kadri stands as one of Mangaluru's most cherished residential nodes, offering a fine balance of quiet green avenues and urban convenience.",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.15!2d74.85!3d12.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzEyLjAiTiA3NMKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
    mapQueryName: "Kadri, Mangaluru",
    galleryImages: [
      { src: "/images/udbahv-chinmaya/gallery/udbhav-chinmaya-1.jpg", alt: "Udbhav Chinmaya Exterior", title: "Udbhav Chinmaya", subtitle: "Kadri, Mangalore" },
      { src: "/images/udbahv-chinmaya/gallery/udbhav-chinmaya-2.jpg", alt: "Architectural Detail", title: "Architectural Detail", subtitle: "Modern Luxury" },
      { src: "/images/udbahv-chinmaya/gallery/udbhav-chinmaya-3.jpg", alt: "Udbhav Chinmaya", title: "Udbhav Chinmaya", subtitle: "Kadri, Mangalore" },
      { src: "/images/udbahv-chinmaya/gallery/udbhav-chinmaya-4.jpg", alt: "Udbhav Chinmaya", title: "Udbhav Chinmaya", subtitle: "Kadri, Mangalore" },
    ],
    reraNo: "PRM/KA/RERA/1257/334/PR/311225/008371",
    developmentSize: "64 Cents",
    totalUnits: "40 exclusive",
    configurations: "3, 4 & 5 BHK",
    price: "₹ 1.60 Crore*",
    emi: "Flexible EMI Options",
    completionDate: "December 2027",
    brochureUrl: "/images/udbahv-chinmaya/CHINMAYA-BROCHURE.pdf",
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
      {
        question: "1. What is the difference between Carpet Area, Built-up, and Super Built-up Area?",
        answer: "Carpet Area is the actual usable floor space inside your apartment — the area where you can lay a carpet. Built-up Area includes the carpet area plus the thickness of the walls. Super Built-up Area includes the built-up area along with your proportionate share of common spaces such as lobbies, staircases, and lift areas.\n\nAt Udbhav Chinmaya, the apartment sizes ranging from 1715 to 2255 sq.ft are quoted in Super Built-up Area. For exact carpet area details of your preferred unit, our team will walk you through the floor plan in detail during your site visit."
      },
      {
        question: "2. How much loan can I avail for Udbhav Chinmaya?",
        answer: "You can avail a home loan of up to 80% of the agreement value of your apartment. For example, on a ₹1.55 Crore* apartment, you may be eligible for a loan of up to ₹1.16 Crore, with the remaining amount payable as down payment.\n\nUdbhav Chinmaya is loan-approved by Karnataka Bank, Canara Bank & SBI — ensuring smooth processing and competitive interest rates. Our team provides end-to-end home loan assistance at no extra cost."
      },
      {
        question: "3. What is Pre-EMI and how does it apply to Udbhav Chinmaya?",
        answer: "Since Udbhav Chinmaya follows a construction-linked payment plan, your bank disburses the loan in stages as construction progresses. During this period, you only pay interest on the amount disbursed so far — this is called Pre-EMI. Your full EMI begins only after the complete loan amount is disbursed, typically closer to possession.\n\nThis means your financial outgo remains lower during the construction phase, giving you better control over your monthly budget until you take possession in December 2027."
      },
      {
        question: "4. What tax benefits can I claim by taking a home loan for Udbhav Chinmaya?",
        answer: "Taking a home loan for Udbhav Chinmaya makes you eligible for two significant tax deductions every financial year. Under Section 24, you can claim a deduction of up to ₹1.5* Lakhs on the interest component of your EMI. Under Section 80C, you can claim up to ₹1 Lakh on the principal repayment, within the overall 80C limit.\n\nThese deductions apply once you are in possession of your apartment. Over the loan tenure, this can result in substantial savings — effectively reducing the real cost of owning your home at Chinmaya."
      },
      {
        question: "5. What documents should I verify before purchasing at Udbhav Chinmaya?",
        answer: "Udbhav Chinmaya is a fully transparent and legally clear project. Key documents you should verify — and which are available on request — include the RERA Registration Certificate (PRM/KA/RERA/1257/334/PR/311225/008371), the approved building plan and layout, title documents, environmental clearance, and the commencement certificate.\n\nWe strongly encourage every buyer to review these documents before booking. Our team is available to walk you through each document and we recommend consulting your advocate for independent legal verification. Transparency is non-negotiable at Udbhav."
      },
      {
        question: "6. Over how many years can I repay my home loan for this apartment?",
        answer: "You can repay your home loan over a maximum period of 20 years, subject to your age and income eligibility as assessed by the bank. The repayment tenure will not ordinarily extend beyond your retirement age or 65 years, whichever is earlier.\n\nSince EMI varies based on your loan amount, tenure, and the bank's current interest rate, we recommend using our <a href='/Buyers?tab=emi' class='text-[#c32828] hover:underline underline-offset-4 decoration-1 decoration-[#c32828]'>EMI Calculator</a> on the <a href='/Buyers' class='text-[#c32828] hover:underline underline-offset-4 decoration-1 decoration-[#c32828]'>Buyers Guide</a> page to get an instant personalised estimate — or simply speak to our team and we will work out the numbers for you."
      }
    ],
    apartmentConfigurations: [
      { type: "3 BHK", area: "1715 - 1880 sq ft", image: "/images/udbahv-chinmaya/gallery/udbhav-chinmaya-2.jpg" },
      { type: "4 BHK", area: "2255 sq ft", image: "/images/udbahv-chinmaya/gallery/udbhav-chinmaya-3.jpg" }
    ],
    floorPlans: [
      { title: "Master Plan", image: "/images/udbahv-chinmaya/imgi_34_UDBHAV_CHINMAYA_TOP-View-with-Dimention.jpg-1-scaled.jpg", category: "Master Plan" },
      { title: "Series No. 5 4BHK 2255 Sft", image: "/images/udbahv-chinmaya/imgi_32_Screenshot-2026-06-17-102315.png", category: "4BHK" },
      { title: "Series No. 5 4BHK 2255 Sft (Top View)", image:"/images/udbahv-chinmaya/imgi_33_05_UDBHAV_CHINMAYA-scaled.jpg" , category: "4BHK" },
      { title: "Series No. 1 3BHK 1730 Sft", image: "/images/udbahv-chinmaya/s1-1730.png", category: "3BHK" },
      { title: "Series No. 1 3BHK 1730 Sft (Top View)", image: "/images/udbahv-chinmaya/s1-1730-top-view.jpg", category: "3BHK" },
      { title: "Series No. 2 3BHK 1715 Sft", image: "/images/udbahv-chinmaya/s2-1715.png", category: "3BHK" },
      { title: "Series No. 2 3BHK 1715 Sft (Top View)", image: "/images/udbahv-chinmaya/s2-1715-top-view.jpg", category: "3BHK" },
      { title: "Series No. 3 3BHK 1795 Sft", image: "/images/udbahv-chinmaya/s3-1795.png", category: "3BHK" },
      { title: "Series No. 3 3BHK 1795 Sft (Top View)", image: "/images/udbahv-chinmaya/s3-1795-top-view.jpg", category: "3BHK" },
      { title: "Series No. 4 3BHK 1820 Sft", image: "/images/udbahv-chinmaya/s4-1820.png", category: "3BHK" },
      { title: "Series No. 4 3BHK 1820 Sft (Top View)", image: "/images/udbahv-chinmaya/s4-1820-top-view.jpg", category: "3BHK" },
      { title: "Series No. 6 3BHK 1810 Sft", image: "/images/udbahv-chinmaya/s6-1810.png", category: "3BHK" },
      { title: "Series No. 6 3BHK 1810 Sft (Top View)", image: "/images/udbahv-chinmaya/s4-1810-top-view.jpg", category: "3BHK" },
      { title: "Series No. 7 3BHK 1765 Sft", image: "/images/udbahv-chinmaya/s7-1765.jpg", category: "3BHK" },
      { title: "Series No. 7 3BHK 1765 Sft (Top View)", image: "/images/udbahv-chinmaya/s7-1765-top-view.jpg", category: "3BHK" },
      { title: "Series No. 8 3BHK 1880 Sft", image: "/images/udbahv-chinmaya/s8-1880.png", category: "3BHK" },
      { title: "Series No. 8 3BHK 1880 Sft (Top View)", image: "/images/udbahv-chinmaya/s8-top-view.jpg", category: "3BHK" }
    ],
    amenities: [
      { title: "Exclusive Clubhouse", image: "/images/udbahv-chinmaya/amenities/exclusiveclubhouse1.jpg" },
      { title: "Children's Play Area", image: "/images/udbahv-chinmaya/amenities/childrensplayarea2.jpg" },
      { title: "Fully Equipped Gym", image: "/images/udbahv-chinmaya/amenities/fullyequippedgym3.jpg" },
      { title: "Yoga & Meditation Room", image: "/images/udbahv-chinmaya/amenities/yoga&meditationroom4.jpg" },
      { title: "Terrace Party Hall", image: "/images/udbahv-chinmaya/amenities/Terracepartyhall5.jpg" },
      { title: "Rooftop Swimming Pool", image: "/images/udbahv-chinmaya/amenities/rooftopswimmingpool6.jpg" }
    ],
    specifications: [
      "2 Automatic Elevators (15 & 10 passenger capacity – Kone / Schindler or equivalent)",
      "100% Power Backup for all apartments & common areas (Mahindra / Kirloskar or equivalent)",
      "CP Plumbing Fittings – Kohler / Jaguar or equivalent",
      "CCTV Surveillance at all entry points",
      "Biometric Access Control for common areas",
      "Remote-Controlled Main Gate",
      "Main Door Digital Lock & Video Door Phone",
      "Premium Electrical Fittings for common areas, balconies & parking",
      "Wheelchair-Friendly Lobby",
      "Estate Manager & 24/7 Security",
      "Built with trusted construction standards and meticulous attention",
      "Main Door Digital Lock + Multi-apartment video door phone",
      "Rainwater Harvesting System",
      "Green Solar-Powered Lighting for common areas",
      "EV Charging Provision for every car park",
      "Well Water + Corporation Water Connection",
      "Provision for Modular Kitchen",
      "Granite Counter for Dining Wash Basin",
      "Rooftop swimming pool"
    ],
    advantages: [
      { title: "KSRTC Mangalore Bus Stand", distance: "1.4 kms (4 min)" },
      { title: "Bunts Hostel", distance: "1.2 kms (3 min)" },
      { title: "M.G. Road", distance: "1.3 kms (4 min)" },
      { title: "Karangalpady Market", distance: "1.1 kms (3 min)" },
      { title: "Bejai Church Road / Jail Road", distance: "500 mtrs (2 min)" },
      { title: "Kadri Manjunatha Temple", distance: "1.5 kms (4 min)" },
      { title: "CBSE School", distance: "0.8 kms (3 min)" },
      { title: "National Highway at KPT Junction", distance: "1.7 kms (5 min)" },
      { title: "Kadri Park", distance: "2 kms (6 min)" },
      { title: "Renowned Super Market", distance: "0.4 kms (2 min)" },
      { title: "Renowned Medical College Hospital", distance: "1.6 kms (7 min)" }
    ],
    updates: [
      {
        title: "Bhoomi Pooja Chinmaya ( October 15th 2025 )",
        images: [
          "/images/udbahv-chinmaya/projects/bhoomipooja1.jpg",
          "/images/udbahv-chinmaya/projects/bhoomipooja2.jpg",
          "/images/udbahv-chinmaya/projects/bhoomipooja3.jpg",
        ]
      },
      {
        title: "Project Updates ( December 12th 2025 )",
        images: [
          "/images/udbahv-chinmaya/projects/projectupdates1.jpg",
          "/images/udbahv-chinmaya/projects/projectupdates2.jpg",
          "/images/udbahv-chinmaya/projects/projectupdates3.jpg",
          "/images/udbahv-chinmaya/projects/projectupdates4.jpg",
         "/images/udbahv-chinmaya/projects/projectupdates5.jpg",
         "/images/udbahv-chinmaya/projects/projectupdates6.jpg",
         "/images/udbahv-chinmaya/projects/projectupdates7.jpg",
         "/images/udbahv-chinmaya/projects/projectupdates8.jpg",
         "/images/udbahv-chinmaya/projects/projectupdates9.jpg",
         "/images/udbahv-chinmaya/projects/projectupdates10.jpg",

        ]
      },
    
 
 {
    title: "Project Updates ( February 06th 2026 )",
    images: [
      "https://udbhavdevelopers.com/wp-content/uploads/2026/02/IMG20260206093144.jpg-scaled.jpeg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/02/IMG20260206091825.jpg-scaled.jpeg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/02/IMG20260205095534.jpg-scaled.jpeg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/02/IMG20260204091030.jpg-scaled.jpeg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/02/IMG20260204092754.jpg-scaled.jpeg"
    ]
  },
  {
    title: "Project Updates ( March 11th 2026 )",
    images: [
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/1.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/12.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/11.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/9-1.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/8-1.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/7-1.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/6.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/5-1.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/4-1.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/3-1.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/2-1.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/1-1.jpg"
    ]
  },

  {
    title: "Project Updates ( April 01st 2026 )",
    images: [
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/3.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/2.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/1.jpg"
    ]
  },
  {
    title: "Project Updates ( May 01st 2026 )",
    images: [
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/SAI_3186-scaled.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/SAI_3134-scaled.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/05/SAI_3156-scaled.jpg"
    ]
  },
  {
    title: "Project Updates ( June 02nd 2026 )",
    images: [
      "https://udbhavdevelopers.com/wp-content/uploads/2026/06/SAI_0887-scaled.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/06/SAI_0930-scaled.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/06/SAI_0941-scaled.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/06/SAI_0899-scaled.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/06/SAI_0906-scaled.jpg"
    ]
  },
  {
    title: "Project Updates ( July 04th 2026 )",
    images: [
      "https://udbhavdevelopers.com/wp-content/uploads/2026/07/SAI_1320.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/07/SAI_1254.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/07/SAI_1263.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/07/SAI_1266.jpg",
      "https://udbhavdevelopers.com/wp-content/uploads/2026/07/SAI_1277.jpg"
    ]
  }

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
    Possession: "Project completed in 2023",
    Typology: "Exclusive 3 BHK Residential Apartments",
    projectarea:'18 Cents',
    projectsize:'Ground + 4 Floors',
    image: "udbhavshanthi",
    subtitle: "Exclusive 3 BHK Residences",
    mapTitle: "Kadri",
    reraNo:'',
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
    Possession: "2025",
    image: "marcels",
    subtitle: "Contemporary Mixed-Use Living",
    mapTitle: "Valencia",
    projectarea:'18 Cents',
    projectsize:'Basement, Ground + 4 Floors',
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
    projectarea:'18 Cents',
    projectsize:'Basement, Ground + 4 Floors',
    Possession: "2022",
    image: "chinmaya",
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
    projectarea:'18 Cents',
    projectsize:'Basement, Ground + 4 Floors',
    Possession: "2020",
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
    projectarea:'18 Cents',
    projectsize:'Basement, Ground + 4 Floors',
    units: "Residential Units",
    Possession: "2015",
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
      "Udbhav is customer friendly, honest, quality focused and very professional in their interaction. Never seen a developer who delivers more than what has been promised. This is my first hand experience from Udbhav's last project. I think Kiran's experience with MNCs has helped him be more focused on quality, ethics and customer satisfaction.",
    name: "	Ravi S",
    location: "Mangalore",
    rating: 5,
    featured: true,
  },
  {
    quote:
      "ONE HAPPY CUSTOMER 🙂 Quality in construction is not just what you see from outside once completed, but mainly what lays underneath the ground (i,e foundation) too. Ask Udbhav developer about it and they will explain you every stage of construction, from FOUNDATION to finishing. What I noticed with this energetic team of Mr Kiran is they are mainly focused on quality and customer satisfaction. In challenging period of Covid-19, they completed the `KRK Aayush´ project within time frame. This shows their commitment towards business and customer satisfaction.",
    name: "Praveen D",
    location: "Mangalore",
    rating: 5,
  },
  {
    quote:
      "I have brought a flat in the first project of Udbhav developers at Mangalore, Nantoor during the construction stage. This is the 5th year of residence after project completion. There have not been any structural issues or seepage issues. The quality of workmanship and dedication shown from Kiran and Udbhav developers in completion of project, delivery in time and quality is excellent. I could see the same quality, workmanship & dedication in their upcoming projects. HAPPY CUSTOMER!!!!!!!!!",
    name: "Krishnam Raju",
    location: "Mangalore",
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