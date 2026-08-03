export type PortfolioCategory =
  | "Photography"
  | "Cinematic Video"
  | "Image Enhancement"
  | "Complete Presentations";

export interface PortfolioItem {
  slug: string;
  title: string;
  subtitle: string;
  category: PortfolioCategory;
  year: string;
  hue: [string, string];
  href?: string;
  services: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "audi-rs5",
    title: "Audi RS5",
    subtitle: "Premium cinematic vehicle presentation created to capture attention and showcase every design detail with a luxury commercial feel.",
    category: "Cinematic Video",
    year: "2025",
    hue: ["#C68A4E", "#1a1305"],
    href: "/portfolio/audi-rs5",
    services: ["Cinematic Video", "Image Enhancement"],
  },
  {
    slug: "audi-rs6",
    title: "Audi RS6",
    subtitle: "Professional automotive photography enhanced with natural AI editing and realistic environments for premium online vehicle listings.",
    category: "Photography",
    year: "2025",
    hue: ["#8a8a8a", "#050505"],
    href: "/portfolio/audi-rs6",
    services: ["Photography", "Image Enhancement"],
  },
  {
    slug: "bmw-m3",
    title: "BMW M3",
    subtitle: "A complete premium presentation combining photography, cinematic video and natural image enhancement for maximum visual impact.",
    category: "Complete Presentations",
    year: "2024",
    hue: ["#6b6b6b", "#111"],
    href: "/portfolio/bmw-m3",
    services: ["Photography", "Cinematic Video", "Image Enhancement"],
  },
  {
    slug: "bmw-m5",
    title: "BMW M5",
    subtitle: "Luxury automotive video focused on movement, atmosphere and emotional storytelling inspired by premium manufacturer advertising.",
    category: "Cinematic Video",
    year: "2024",
    hue: ["#C68A4E", "#0d0d0d"],
    href: "/portfolio/bmw-m5",
    services: ["Cinematic Video"],
  },
  {
    slug: "porsche-911",
    title: "Porsche 911",
    subtitle: "Premium outdoor automotive photography created to highlight the vehicle's character with authentic lighting and elegant composition.",
    category: "Photography",
    year: "2023",
    hue: ["#9a9a9a", "#050505"],
    services: ["Photography"],
  },
  {
    slug: "lamborghini-huracan",
    title: "Lamborghini Huracán",
    subtitle: "Photography, cinematic video and premium image enhancement combined into one luxury vehicle presentation.",
    category: "Complete Presentations",
    year: "2023",
    hue: ["#C68A4E", "#0a0a0a"],
    href: "/portfolio/lamborghini-huracan",
    services: ["Photography", "Cinematic Video", "Image Enhancement"],
  },
];

export const portfolioCategories: (PortfolioCategory | "All")[] = [
  "All",
  "Photography",
  "Cinematic Video",
  "Image Enhancement",
  "Complete Presentations",
];

export interface Service {
  index: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    index: "01",
    title: "Premium Automotive Photography",
    description:
      "Professional dealership-quality vehicle photography that creates a premium first impression for private sellers and dealerships.",
    deliverables: ["Exterior", "Interior", "Detail shots", "Dealer listings"],
  },
  {
    index: "02",
    title: "Cinematic Vehicle Video",
    description:
      "Premium cinematic videos designed specifically for vehicle advertisements, marketplaces and social media.",
    deliverables: ["4K video", "Drone shots", "Marketplace ads", "Social media"],
  },
  {
    index: "03",
    title: "Professional Image Enhancement",
    description:
      "Natural premium editing including background replacement, lighting improvement, color correction and authentic vehicle retouching.",
    deliverables: ["Background replacement", "Lighting enhancement", "Color correction", "Retouching"],
  },
  {
    index: "04",
    title: "Complete Vehicle Presentation",
    description:
      "A complete premium package combining photography and cinematic video for the highest-quality vehicle presentation.",
    deliverables: ["Photo + video", "Premium package", "Marketplace ready", "Dealer ready"],
  },
];

export const processSteps = [
  {
    index: "01",
    title: "Consultation",
    description: "A private conversation about the vehicle, the brand and the impression it needs to make.",
  },
  {
    index: "02",
    title: "Planning",
    description: "Location, light and narrative are mapped into a bespoke treatment before we ever arrive on site.",
  },
  {
    index: "03",
    title: "Photography",
    description: "Controlled-light studio and location stills, composed with the same care given to sculpture.",
  },
  {
    index: "04",
    title: "Cinematic Video",
    description: "Motion captured on cinema glass, directed frame by frame to give the car its own sense of drama.",
  },
  {
    index: "05",
    title: "Professional Editing",
    description: "Our signature grading language is applied in post, unifying every asset into one tonal story.",
  },
  {
    index: "06",
    title: "Final Delivery",
    description: "Master files delivered to specification, ready for showroom, dealership or global campaign.",
  },
];

