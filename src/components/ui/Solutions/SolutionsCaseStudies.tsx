import Link from "next/link";
import { CaseStudiesCard } from "../CaseStudiesCard";
import { SectionHeader } from "../SectionHeader";
import { AnimatedGrid } from "../AnimatedSection";
import { caseStudies } from "@/app/case-studies/data";
import { Button } from "../Button";

export function SolutionsCaseStudies() {
  const featuredCaseStudies = caseStudies.slice(0, 3);

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
        {featuredCaseStudies.map((study) => (
          <CaseStudiesCard key={study.slug} study={study} />
        ))}
      </AnimatedGrid>

      <div className="flex justify-center pt-4">
        <Button variant="purple" size="lg" className="px-8">
          <Link href="/case-studies">View All Case Studies</Link>
        </Button>
      </div>
    </section>
  );
}
