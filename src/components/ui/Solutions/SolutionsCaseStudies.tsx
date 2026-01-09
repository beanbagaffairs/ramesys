import { CaseStudiesCard } from "../CaseStudiesCard";
import { SectionHeader } from "../SectionHeader";
import { AnimatedGrid } from "../AnimatedSection";

const caseStudies = [
  {
    client: "BeanBagAffairs",
    title: "Business Service Showcase",
    description:
      "A comprehensive digital platform designed to showcase the full range of services provided by the business with an intuitive user experience.",
    imageUrl:
      "/images/BeanBagAffairs.png",
    linkText: "Live",
    linkUrl: "https://www.beanbagaffairs.com/",
  },
  {
    client: "Coming Soon",
    title: "Project Development in Progress",
    description:
      "We're currently working on another innovative solution to help businesses scale and succeed in the digital landscape.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA07hGEafGLcHE2DbQ4OuaTXzxIK9--d2iujqE7g3Ihm65GaRI9UNAaQVkPXdhN5jl6jXm9pt_ewSd9Utk4Rwq-3aPCkNTT2Ux-h45V5751PVOl283xpWxVu7oRKmm3VBhnRLQRGag1qt34fe0Y6Em0E_eSJ8_F8K0DV79KI5fgPkp-uHRtAzaiDSAa_4sNaRlEe-zBLNniFrzcsWak70py9sNZ0gctdVC6jnyGFq1d1Aqlaa6hi3DDf0R0VHfnBsaB7mSm26K_kKHY",
    linkText: "Live",
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
      <AnimatedGrid className="grid grid-cols-1 gap-6 md:grid-cols-3" stagger={0.2}>
        {caseStudies.map((study) => (
          <CaseStudiesCard key={study.title} study={study} />
        ))}
      </AnimatedGrid>
    </section>
  );
}
