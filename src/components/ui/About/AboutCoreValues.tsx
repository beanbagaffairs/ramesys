import { SectionHeader } from '../SectionHeader';
import { AboutCard } from './AboutCard';
import { AnimatedGrid } from '../AnimatedSection';

const coreValues = [
  {
    icon: 'engineering',
    title: 'Engineering Before Aesthetics',
    description:
      'We prioritise clean architecture, performance, and stability before visual polish or shortcuts.',
  },
  {
    icon: 'code',
    title: 'Code With Purpose',
    description:
      'Every line of code is written to solve a problem, reduce complexity, and support future growth.',
  },
  {
    icon: 'architecture',
    title: 'Scalability by Design',
    description: 'We design systems that can handle growth in users, features, and data without breaking.',
  },
  {
    icon: 'update',
    title: 'Long-Term Thinking',
    description: 'We avoid quick fixes that create technical debt and focus on solutions that last.',
  },
  {
    icon: 'handshake',
    title: 'Transparent Collaboration',
    description: "We work closely with clients, explain technical decisions clearly, and build trust through clarity.",
  },
  {
    icon: 'done_all',
    title: 'Execution Over Noise',
    description:
      'We believe consistent delivery and working systems matter more than buzzwords or promises.',
  },
];

export function AboutCoreValues() {
  return (
    <section className="space-y-12">
      <SectionHeader badgeText='Values' title="How We Operate" className="pb-6" />
      <AnimatedGrid className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
        {coreValues.map((value) => (
          <AboutCard key={value.title} {...value} />
        ))}
      </AnimatedGrid>
    </section>
  );
}
