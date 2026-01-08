import Link from "next/link";
import { SectionHeader } from "../SectionHeader";
import { ServiceCard } from "../ServiceCard";
import { AnimatedGrid } from "../AnimatedSection";
import { FadeIn } from "../FadeIn";
import { Button } from "../Button";

export default function CoreServices() {
  return (
    <section>
      <SectionHeader
        title="What We Build"
        subtitle="Custom-coded digital systems designed to scale, perform, and integrate seamlessly with your business."
        badgeText="Services"
      />
      <AnimatedGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.15}>
        <ServiceCard
          icon="language"
          title="Website Engineering"
          href="/solutions/website-engineering"
          description="Custom-coded websites built with structured frontend and backend architecture, optimised for performance, security, and long-term scalability."
        />
        <ServiceCard
          icon="devices_other"
          title="Application Development"
          href="/solutions/application-development"
          description="Web and mobile applications developed with modular logic, clean data flow, and systems that scale as features and users grow."
        />
        <ServiceCard
          icon="analytics"
          title="Data Science & AI/ML"
          href="/solutions/data-science"
          description="Advanced data analytics, machine learning models, LLM training, and Power BI dashboards designed to extract actionable insights from your data."
        />
        <ServiceCard
          icon="campaign"
          title="Digital Marketing & Growth"
          href="/solutions/digital-marketing-growth"
          description="Performance-focused digital marketing is built on data, tracking systems, and platforms designed to convert traffic into measurable growth."
        />
      </AnimatedGrid>
      <FadeIn className="mt-12 flex justify-center">
        <Link href="/solutions">
          <Button variant="purple" size="lg" className="px-8">
            See all solutions
          </Button>
        </Link>
      </FadeIn>
    </section>
  );
}
