import { Layout } from "@/components/layout/Layout";
import { CaseStudiesCard } from "@/components/ui/CaseStudiesCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedGrid } from "@/components/ui/AnimatedSection";
import { caseStudies } from "./data";

export default function CaseStudiesPage() {
  return (
    <Layout>
      <div className="w-full max-w-7xl px-4 py-24 sm:px-8 md:px-12 lg:px-20 xl:px-32 flex flex-col gap-16">
        <SectionHeader
          badgeText="Our Portfolio"
          title="Our Track Record of Success"
          subtitle="Explore a sample of the outcomes we deliver across product design, growth, and brand-building initiatives"
        />
        <AnimatedGrid
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          stagger={0.1}
        >
          {caseStudies.map((study) => (
            <CaseStudiesCard key={study.slug} study={study} />
          ))}
        </AnimatedGrid>
      </div>
    </Layout>
  );
}
