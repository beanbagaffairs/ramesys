import { SectionHeader } from "../SectionHeader";
import { ServiceCard } from "../ServiceCard";
import { AnimatedGrid } from "../AnimatedSection";

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
          description="Custom-coded websites built with structured frontend and backend architecture, optimised for performance, security, and long-term scalability."
        />
        <ServiceCard
          icon="devices_other"
          title="Application Development"
          description="Web and mobile applications developed with modular logic, clean data flow, and systems that scale as features and users grow."
        />
        <ServiceCard
          icon="home_repair_service"
          title="Custom Software Systems"
          description="Business software, dashboards, and internal tools engineered around workflows, integrations, and maintainable codebases."
        />
        <ServiceCard
          icon="campaign"
          title="Digital Marketing & Growth"
          description="Performance-focused digital marketing is built on data, tracking systems, and platforms designed to convert traffic into measurable growth."
        />
      </AnimatedGrid>
    </section>
  );
}
