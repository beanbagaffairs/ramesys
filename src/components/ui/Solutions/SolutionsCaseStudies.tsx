import { CaseStudiesCard } from "../CaseStudiesCard";
import { SectionHeader } from "../SectionHeader";
import { AnimatedGrid } from "../AnimatedSection";

const caseStudies = [
  {
    client: "BeanBagAffairs",
    title: "Business Service Showcase",
    description:
      "A comprehensive digital platform designed to showcase the full range of services provided by the business with an intuitive user experience.",
    imageUrl: "/images/BeanBagAffairs.png",
    linkText: "Live",
    linkUrl: "https://www.beanbagaffairs.com/",
  },
  {
    client: "Vydhra",
    title: "Online Education Platform",
    description:
      "A comprehensive online education platform offering dynamic learning experiences and resources to students worldwide.",
    imageUrl: "/images/Vydhra.png",
    linkText: "Live",
    linkUrl: "https://vydhra.com",
  },
  {
    client: "Soho",
    title: "Ecommerce Mobile Application",
    description:
      "A feature-rich ecommerce mobile application delivering a seamless shopping experience with intuitive navigation and secure checkout.",
    imageUrl: "/images/Soho.png",
    linkText: "Learn More",
    linkUrl: "#",
  },
  {
    client: "Admin Dashboard",
    title: "Custom Software Solutions",
    description:
      "Manage business effectively with custom softwares tailored to your operational needs.",
    imageUrl: "/images/AdminDashboard.png",
    linkText: "Learn More",
    linkUrl: "#",
  },
];

export function SolutionsCaseStudies() {
  return (
    <section className="space-y-10">
      <SectionHeader
        badgeText="Case Studies"
        title="Our Track Record of Success"
        subtitle="Explore a sample of the outcomes we deliver across product design, growth, and brand-building initiatives."
      />
      <AnimatedGrid
        className="grid grid-cols-1 gap-6 md:grid-cols-3"
        stagger={0.2}
      >
        {caseStudies.map((study) => (
          <CaseStudiesCard key={study.title} study={study} />
        ))}
      </AnimatedGrid>
    </section>
  );
}
