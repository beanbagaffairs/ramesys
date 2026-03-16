export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  description: string;
  imageUrl: string;
  linkText?: string;
  linkUrl?: string;
  liveUrl?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  technologies?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "beanbagaffairs",
    client: "BeanBagAffairs",
    title: "Business Service Showcase",
    description:
      "A comprehensive digital platform designed to showcase the full range of services provided by the business with an intuitive user experience.",
    imageUrl: "/images/BeanBagAffairs.png",
    linkText: "Learn More",
    linkUrl: "/case-studies/beanbagaffairs",
    liveUrl: "https://www.beanbagaffairs.com/",
    challenges: [
      "Fragmented service representation online.",
      "Need for a high-performance, mobile-first experience.",
      "Integrating a seamless contact and booking flow."
    ],
    solutions: [
      "Custom UI/UX design focused on conversion.",
      "Optimized Next.js architecture for fast loading.",
      "Dynamic service modules for easy content management."
    ],
    results: [
      "50% increase in user session duration.",
      "Improved brand perception and professional online presence.",
      "Significant growth in online inquiries."
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "React"]
  },
  {
    slug: "vydhra",
    client: "Vydhra",
    title: "Online Education Platform",
    description:
      "A comprehensive online education platform offering dynamic learning experiences and resources to students worldwide.",
    imageUrl: "/images/Vydhra.png",
    linkText: "Learn More",
    linkUrl: "/case-studies/vydhra",
    liveUrl: "https://vydhra.com",
    challenges: [
      "Complexity in managing large educational content catalogs.",
      "Need for interactive learning elements.",
      "Scalability to handle high concurrent user traffic."
    ],
    solutions: [
      "Robust backend integration for content delivery.",
      "Interactive course player and progress tracking.",
      "AWS cloud infra for high availability."
    ],
    results: [
      "Successfully launched to thousands of students.",
      "Reduced content loading times by 40%.",
      "Positive feedback on student engagement features."
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"]
  },
  {
    slug: "soho",
    client: "Soho",
    title: "Ecommerce Mobile Application",
    description:
      "A feature-rich ecommerce mobile application delivering a seamless shopping experience with intuitive navigation and secure checkout.",
    imageUrl: "/images/Soho.png",
    linkText: "Learn More",
    linkUrl: "/case-studies/soho",
    challenges: [
      "Complex inventory management system.",
      "Need for a smooth, app-like mobile experience.",
      "Secure and fast checkout process."
    ],
    solutions: [
      "React Native mobile development for cross-platform support.",
      "Integration with global payment gateways.",
      "Real-time synchronized inventory across platforms."
    ],
    results: [
      "30% increase in mobile conversion rates.",
      "Reduced cart abandonment by 15%.",
      "Seamless synchronization between web and app."
    ],
    technologies: ["React Native", "Firebase", "Redux", "Stripe API"]
  },
  {
    slug: "admin-dashboard",
    client: "Admin Dashboard",
    title: "Custom Software Solutions",
    description:
      "Manage business effectively with custom softwares tailored to your operational needs.",
    imageUrl: "/images/AdminDashboard.png",
    linkText: "Learn More",
    linkUrl: "/case-studies/admin-dashboard",
    challenges: [
      "Inefficient manual data tracking processes.",
      "Lack of real-time operational visibility.",
      "Requirement for complex data visualization."
    ],
    solutions: [
      "Custom internal dashboard with live data feeds.",
      "Advanced reporting and analytics modules.",
      "Modular design for future scalability."
    ],
    results: [
      "25% reduction in administrative overhead.",
      "Real-time decision making empowered by data.",
      "Eliminated data entry errors through automation."
    ],
    technologies: ["Next.js", "TypeScript", "Chart.js", "Prisma"]
  },
];
