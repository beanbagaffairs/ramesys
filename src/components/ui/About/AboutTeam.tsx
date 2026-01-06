import { SectionHeader } from '../SectionHeader';
import { TeamMember } from '../TeamMember';
import { AnimatedGrid } from '../AnimatedSection';

const teamMembers = [
  {
    name: 'Avinava',
    role: 'Founder & Director',
    imageUrl:
      '/images/Avinava.png',
    alt: 'Headshot of Avinava, Founder & Director',
    description: 'Responsible for vision, strategy, client relationships, and steering Ramesys as it grows into a scalable technology company.'
  },
  {
    name: 'Prasun',
    role: 'Operations & Coordination',
    imageUrl:
      '/images/Prasun.png',
    alt: 'Headshot of Prasun, Operations & Coordination',
    description: 'Oversees execution flow, internal coordination, and ensures projects move smoothly from planning to delivery.'
  },
  {
    name: 'Chirag',
    role: 'Technical Lead',
    alt: 'Technical Lead',
    description: 'Handles core technical decisions, system design, and oversees the overall technology stack and architecture across projects.'
  },
  {
    name: 'Arshad',
    role: 'Lead Developer',
    alt: 'Lead Developer',
    description: 'The engineering backbone of the company—responsible for writing, structuring, and optimizing the code that powers our websites, applications, and software systems.'
  },
];

export function AboutTeam() {
  return (
    <section className="space-y-12">
      <SectionHeader
        badgeText='Team'
        title="Meet the Team"
        subtitle="Ramesys is led by a small, focused team that combines business direction, technical leadership, and hands-on development."
      />
      <AnimatedGrid className="flex flex-wrap justify-center gap-10" stagger={0.15}>
        {teamMembers.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </AnimatedGrid>
    </section>
  );
}
