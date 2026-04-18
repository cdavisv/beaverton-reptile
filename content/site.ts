export type NavItem = {
  href: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  trustNote?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export const siteConfig = {
  address: "12675 SW Center Street, Beaverton, OR 97005",
  addressLabel: "Downtown Beaverton",
  email: "hello@beavertonreptiles.com",
  inquiryEmail: "care@beavertonreptiles.com",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=12675+SW+Center+Street+Beaverton+OR+97005",
  name: "Beaverton Reptiles",
  phone: "(503) 555-0147",
  phoneHref: "+15035550147",
  socialLinks: [
    { href: "https://www.instagram.com/", label: "Instagram" },
    { href: "https://www.facebook.com/", label: "Facebook" },
  ],
  hours: [
    { days: "Monday to Wednesday", value: "11:00 AM to 6:00 PM" },
    { days: "Thursday to Saturday", value: "10:00 AM to 7:00 PM" },
    { days: "Sunday", value: "11:00 AM to 5:00 PM" },
  ],
  serviceArea:
    "Serving Beaverton, Hillsboro, Tigard, Portland, and the broader west side metro.",
  summary:
    "Local reptile shop focused on healthy animals, humane care, feeder insects, enclosures, and beginner-friendly guidance.",
  tagline:
    "Healthy reptiles, trusted feeder insects, and patient local guidance.",
};

export const primaryNav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Product" },
  { href: "/features", label: "Features" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
  { href: "/get-started", label: "Get Started" },
];

export const footerNav: NavItem[] = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/pricing", label: "Pricing" },
  { href: "/get-started", label: "Get Started" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
];

export const homeHero: HeroContent = {
  eyebrow: "Local specialty reptile shop",
  title:
    "A Beaverton reptile store built around humane care and clear guidance.",
  description:
    "Discover healthy reptiles, trusted feeder insects, habitats, and supplies with beginner-friendly help from a local team that cares how every setup starts.",
  primaryCta: { href: "/contact", label: "Visit the Store" },
  secondaryCta: { href: "/get-started", label: "Ask About Availability" },
  trustNote:
    "No pressure, no guesswork. We help local keepers make calm, informed decisions.",
};

export const proofItems = [
  "Local guidance for first-time reptile owners and experienced keepers",
  "Care-first handling, habitat recommendations, and feeder reliability",
  "Downtown Beaverton location with clear hours, parking, and call-ahead support",
];

export const categories = [
  {
    title: "Reptiles",
    description:
      "Healthy, carefully housed reptiles with transparent availability guidance and beginner-fit recommendations.",
    href: "/product",
  },
  {
    title: "Feeders",
    description:
      "Dependable feeder insects and frozen options for routine care, picky eaters, and growth stages.",
    href: "/pricing",
  },
  {
    title: "Habitats",
    description:
      "Enclosures, heating, lighting, substrate, and environmental controls matched to species needs.",
    href: "/features",
  },
  {
    title: "Supplies",
    description:
      "Daily care essentials, hydration, décor, enrichment, and cleanup products selected for real use.",
    href: "/use-cases",
  },
];

export const featureItems = [
  {
    title: "Humane care standards",
    description:
      "Animals are merchandised around stable environments, observable health, and responsible customer fit.",
  },
  {
    title: "Beginner-friendly help",
    description:
      "Our team explains habitat basics, feeding expectations, and what to buy first without overwhelming you.",
  },
  {
    title: "Curated supplies",
    description:
      "We focus on products that support real reptile husbandry rather than filling shelves with generic pet inventory.",
  },
  {
    title: "Local convenience",
    description:
      "Call ahead, stop by after work, or use the inquiry flow to confirm direction before you visit.",
  },
  {
    title: "Trusted feeders",
    description:
      "Consistent feeder access matters. We make that easy for active keepers and busy families.",
  },
  {
    title: "Setup guidance",
    description:
      "Starter habitat recommendations are sized to your animal, budget, and confidence level.",
  },
];

export const useCases = [
  {
    title: "First-time buyers",
    description:
      "Need help choosing a manageable species, understanding setup costs, and leaving with the essentials.",
    href: "/get-started",
  },
  {
    title: "Experienced keepers",
    description:
      "Looking for feeder reliability, better habitat gear, or a local shop that speaks your language.",
    href: "/product",
  },
  {
    title: "Families",
    description:
      "Want a shop experience that feels educational, respectful, and easy to navigate with kids.",
    href: "/about",
  },
  {
    title: "Feeder-only shoppers",
    description:
      "Need a fast, local restock path with clear hours and a quick way to check current availability.",
    href: "/contact",
  },
];

export const pricingCards = [
  {
    title: "Feeders & staple care",
    price: "$8 to $45",
    details: ["Feeder insects", "Frozen options", "Calcium and vitamins"],
    note: "Best for routine weekly restocks and small habitat upgrades.",
  },
  {
    title: "Habitat essentials",
    price: "$60 to $240",
    details: ["Enclosures", "Heat and UVB", "Substrate and décor"],
    note: "Final cost depends on enclosure size, heating needs, and species.",
  },
  {
    title: "Starter setup guidance",
    price: "$250 to $900+",
    details: ["Animal fit advice", "Full setup checklist", "Beginner support"],
    note: "We walk through lower-cost and premium paths before you commit.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Do you post live inventory online?",
    answer:
      "Not in v1. Inventory changes too quickly for us to promise exact animal or feeder availability online, so the fastest path is to call, visit, or send a quick inquiry.",
  },
  {
    question: "Can you help me build a first reptile setup?",
    answer:
      "Yes. We can recommend a beginner-fit species, explain enclosure size and lighting, and help you prioritize the gear you actually need first.",
  },
  {
    question: "How do your prices compare with big-box pet stores?",
    answer:
      "We focus on healthy animals, better husbandry guidance, and more species-appropriate setups. That may change line-item pricing, but it usually reduces avoidable mistakes and replacement purchases.",
  },
  {
    question: "What if I am not ready to buy today?",
    answer:
      "That is fine. Use the get-started form or stop by for a conversation. Our goal is to help you leave with a realistic plan, not to rush a decision.",
  },
  {
    question: "Do you offer support after purchase?",
    answer:
      "We offer guidance on setup, routine care, and troubleshooting. For urgent medical issues, we direct customers to qualified exotic veterinarians.",
  },
  {
    question: "Can I ask about feeder availability before driving in?",
    answer:
      "Yes. Contact us by phone or through the inquiry form and we will point you to the fastest next step.",
  },
];

export const pageSeo: Record<string, PageSeo> = {
  home: {
    title: "Beaverton Reptiles | Reptiles, Feeders, Habitats & Supplies",
    description:
      "Discover a trusted Beaverton reptile shop for healthy reptiles, feeder insects, habitats, and beginner-friendly guidance.",
    path: "/",
  },
  product: {
    title:
      "Reptiles, Feeders & Habitat Supplies in Beaverton | Beaverton Reptiles",
    description:
      "Explore reptiles, feeder insects, enclosures, and care supplies with guidance from a local specialty shop.",
    path: "/product",
  },
  features: {
    title: "Why Local Reptile Owners Choose Beaverton Reptiles",
    description:
      "Learn how humane care, knowledgeable staff, curated supplies, and beginner support set our shop apart.",
    path: "/features",
  },
  useCases: {
    title: "Reptile Buying Help for Beginners, Families & Keepers",
    description:
      "Find the right path whether you are a first-time reptile buyer, feeder shopper, or experienced keeper.",
    path: "/use-cases",
  },
  pricing: {
    title: "Reptile Shop Pricing Guide in Beaverton | Beaverton Reptiles",
    description:
      "See pricing ranges for reptiles, feeders, enclosures, and starter setups before you visit or inquire.",
    path: "/pricing",
  },
  getStarted: {
    title: "Get Reptile Buying Help in Beaverton | Beaverton Reptiles",
    description:
      "Tell us what you are looking for and get beginner-friendly guidance on reptiles, feeders, and setups.",
    path: "/get-started",
  },
  about: {
    title: "About Beaverton Reptiles",
    description:
      "Learn about our local shop, care philosophy, and commitment to healthy reptiles and helpful education.",
    path: "/about",
  },
  faq: {
    title: "Beaverton Reptiles FAQ",
    description:
      "Get answers about pricing, setup, support, alternatives, and what to expect before visiting the store.",
    path: "/faq",
  },
  contact: {
    title: "Contact Beaverton Reptiles | Hours, Location & Inquiries",
    description:
      "Call, visit, or send a message to Beaverton Reptiles for current availability, hours, and store directions.",
    path: "/contact",
  },
  privacy: {
    title: "Privacy Policy | Beaverton Reptiles",
    description:
      "Learn how Beaverton Reptiles collects, uses, and protects website and inquiry data.",
    path: "/privacy-policy",
  },
  terms: {
    title: "Terms of Service | Beaverton Reptiles",
    description:
      "Review the terms for using the Beaverton Reptiles website and related content.",
    path: "/terms-of-service",
  },
};
