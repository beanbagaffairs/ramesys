import Image from "next/image";
import { FeatureCard } from "../FeatureCard";
import { SectionHeader } from "../SectionHeader";
import { AnimatedSection, AnimatedGrid } from "../AnimatedSection";
import { FadeIn } from "../FadeIn";

export function PartnerWithUs() {
  return (
    <section>
      <SectionHeader badgeText="Partner With Ramesys" title="Partner With Ramesys" />
      <AnimatedSection className="grid grid-cols-1 items-center gap-12 rounded-xl border border-primary/50 p-8 lg:grid-cols-2 lg:gap-16 lg:p-12 bg-linear-to-bl from-[#140A28] via-[#090313] to-[#000101]">
        <div className="flex flex-col gap-4">
          <FadeIn delay={0.2} duration={0.6}>
            <h2 className="gradient-text text-2xl font-bold leading-tight tracking-tight text-white md:text-4xl">
              Partner With Ramesys
            </h2>
          </FadeIn>
          <FadeIn delay={0.4} duration={0.6}>
            <p className="text-base font-normal leading-normal text-gray-400">
              We collaborate with startups, growing businesses, and enterprises looking for a long-term technology partner—not just a service provider. From engineering products to scaling systems and growth, we work as an extension of your team.
            </p>
          </FadeIn>
          <AnimatedGrid className="mt-4 flex flex-col gap-6" stagger={0.15}>
            <FeatureCard
              icon="architecture"
              title="Long-term, scalable technology solutions"
              description="We design systems that handle growth in users, features, and data without breaking."
            />
            <FeatureCard
              icon="engineering"
              title="Engineering-led decisions, not shortcuts"
              description="We prioritise clean architecture, performance, and stability before visual polish or shortcuts."
            />
            <FeatureCard
              icon="trending_up"
              title="A team that grows with your business"
              description="Partner with a team that understands architecture, scalability, and real-world business constraints."
            />
          </AnimatedGrid>
        </div>
        <FadeIn delay={0.4} duration={0.8} direction="none">
          <div className="relative h-64 w-full overflow-hidden rounded-lg lg:h-full">
            <Image
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
              alt="A team of professionals collaborating around a laptop in a modern office."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCsjUyr9xJFycNECfDJ-ZlXFCpzU7NXxe9aq1BGBo-wNBW9wDQLfHJzGVqw5TMWlfL0cLuSBxs4vs0wUE4LRMZbFIAcGj6CKnbACTTPrsqIoWP1EcNzbSgvyNqTjnIWYGbcAmQfaQS0HewHo6K3aZ4IClsD8vkFG-PGt8NvAjxu443n-_-gKlqigO8b4ORsLR3nIKJAdc_ovWEXF4RDUgS6jyNMmr79gyGt29gdw3r74bjSfuzbjdjpIuwPEhhs34UUKwNg7dzA6wQ"
              width={600}
              height={400}
            />
          </div>
        </FadeIn>
      </AnimatedSection>
    </section>
  );
}
