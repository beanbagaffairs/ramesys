import { SectionHeader } from '../SectionHeader';
import { ClientTestimonialCard } from '../ClientTestimonialCard';

const testimonials = [
  {
    name: 'James Wilson',
    role: 'CTO, TechFlow India',
    rating: 5,
    imageSrc: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    comment: (
      <>
        The team at <strong className="text-white">Ramesys</strong> understands architecture like no other agency. They didn&apos;t just build a website; they engineered a <strong className="text-white">scalable system</strong> that handles our growth effortlessly.
      </>
    ),
  },
  {
    name: 'Fatima Al-Sayed',
    role: 'Founder, GrowthLoop Dubai',
    rating: 5,
    imageSrc: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    comment: (
      <>
        Switching to a <strong className="text-white">code-first approach</strong> with Ramesys was the best decision for our startup. No more page builder bloat—just pure performance and <strong className="text-white">clean code</strong>.
      </>
    ),
  },
];

export function WhatTheySay() {
  return (
    <section className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
      <SectionHeader badgeText="What they say" title="Client Testimonials" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <ClientTestimonialCard
            key={testimonial.name}
            {...testimonial}
            className="col-span-full mx-auto"
          />
        ))}
      </div>
    </section>
  );
}