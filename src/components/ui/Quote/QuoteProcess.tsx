import { FadeIn } from "../FadeIn";
import { AnimatedGrid } from "../AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Project Analysis",
    description: "Our experts review your requirements to understand the scope and technical needs of your project."
  },
  {
    number: "02",
    title: "Consultation",
    description: "We schedule a brief call to discuss details, offer initial insights, and align on goals."
  },
  {
    number: "03",
    title: "Custom Proposal",
    description: "You receive a detailed proposal with a transparent breakdown of costs, timeline, and strategy."
  },
  {
    number: "04",
    title: "Project Kickoff",
    description: "Once approved, we assemble the team and begin the journey of building your digital solution."
  }
];

export function QuoteProcess() {
  return (
    <section className="py-24">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="gradient-text text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            From the moment you submit your request, we work diligently to provide you with the best possible solution.
          </p>
        </div>
      </FadeIn>

      <AnimatedGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.1}>
        {steps.map((step) => (
          <div key={step.number} className="relative group">
            <div className="absolute -top-6 -left-4 text-6xl font-bold text-white/5 group-hover:text-primary/10 transition-colors">
              {step.number}
            </div>
            <div className="relative z-10 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </AnimatedGrid>
    </section>
  );
}
