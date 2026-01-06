import { CaseStudiesCard } from "../CaseStudiesCard";
import { SectionHeader } from "../SectionHeader";
import { AnimatedGrid } from "../AnimatedSection";

const caseStudies = [
  {
    client: "TechCorp",
    title: "E-commerce Platform Overhaul",
    description:
      "Complete redesign and backend migration resulted in a 300% increase in user engagement and a 50% boost in sales.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvDUxYXxYvHhRaYy4Hcps-dAfAYpZhphPpZK7QUazpYmto7bxmS-3XCnmO9TGoY-hGpkz66r_WpvABBce5W3hoRHDqJ1e3WqyCV6wLwrXyjhz6DZW7gbE4hrFuy5tTxINJXVQR0qUzcYbvETYJal75n56Q6Kjxvf-Zm9-vgx48bCEhY_UJz0jR3CbNWrprl2_x_9xlxV5l0hXOm2jWtP2kwkq1kNB7SFjcBybUZGd_FOZy0F9jFBEPpV6xd_jG7fgWpkNnbSHADgfN",
  },
  {
    client: "Innovate Inc.",
    title: "Mobile App Launch Campaign",
    description:
      "Our targeted digital marketing strategy led to 1 million downloads within the first three months of launch.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA07hGEafGLcHE2DbQ4OuaTXzxIK9--d2iujqE7g3Ihm65GaRI9UNAaQVkPXdhN5jl6jXm9pt_ewSd9Utk4Rwq-3aPCkNTT2Ux-h45V5751PVOl283xpWxVu7oRKmm3VBhnRLQRGag1qt34fe0Y6Em0E_eSJ8_F8K0DV79KI5fgPkp-uHRtAzaiDSAa_4sNaRlEe-zBLNniFrzcsWak70py9sNZ0gctdVC6jnyGFq1d1Aqlaa6hi3DDf0R0VHfnBsaB7mSm26K_kKHY",
  },
  {
    client: "FutureHealth",
    title: "Brand Identity Refresh",
    description:
      "We developed a new brand that increased market recognition and contributed to a 40% growth in customer trust.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBFy6KAUgCDGYrgvumE0I9GXNaBAfyFOhu7_CJF5zEK3d0-hbK6io8b7LQLpKSmTFrMKG1MZwwz_V-URQnAVawXO7ApGGaGsVwzEfuWw0n4KEcXGf-WAod-DJQ0nwsE2cWomxrfbSZI75V-dGrXw3zXJaTju6OHUg32Nz4GsVlx_irgCapFM9iQL-4qBr-bOb9TZma92ikMn5PVjjXqqpAVmcBKtYKxbUHYns_PFN9q1rozrdyhPw7L0N2bGZ8hJUCLhTDVSmtTusi2",
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
