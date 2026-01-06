import { CallToAction } from "../CallToAction";

export function SolutionsCTA() {
  return (
    <section>
      <CallToAction
        variant="home"
        title="Ready to build your next big thing?"
        description="Let's collaborate to create something amazing. We're here to turn your vision into a reality that drives results and captivates your audience."
        primaryAction={{ label: "Book a call", variant: "purple", size: "lg" }}
      />
    </section>
  );
}
