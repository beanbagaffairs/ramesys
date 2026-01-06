import { SectionHeader } from '../SectionHeader';
import { AboutCard } from './AboutCard';
import { AnimatedGrid } from '../AnimatedSection';

const guidingPrinciples = [
  {
    icon: 'rocket_launch',
    title: 'Our Mission',
    description:
      'To engineer reliable, scalable digital systems using clean code and structured architecture that solve real business problems.',
  },
  {
    icon: 'visibility',
    title: 'Our Vision',
    description:
      'To become a trusted technology partner for businesses by building long-lasting systems that grow, adapt, and perform at scale.',
  },
];

export function AboutGuidingPrinciples() {
  return (
    <section className="space-y-12">
      <SectionHeader
        title="Our Direction"
        subtitle="Our mission and vision define how we build technology, make decisions, and grow with the businesses we work with."
      />
      <AnimatedGrid className="grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.2}>
        {guidingPrinciples.map((principle) => (
          <AboutCard key={principle.title} {...principle} />
        ))}
      </AnimatedGrid>
    </section>
  );
}
