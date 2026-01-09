import { CallToAction } from "../CallToAction";

export function SolutionsCTA() {
  return (
    <section>
      <CallToAction
        variant="home"
        title="Ready to build your next big thing?"
        description="Let's collaborate to create something amazing. We're here to turn your vision into a reality that drives results and captivates your audience."
        primaryAction={{ 
          label: "Talk to our expert", 
          href: "https://wa.me/917980624524?text=Hi%20Ramesys%20team%2C%20I'm%20interested%20in%20starting%20a%20project...",
          target: "_blank",
          variant: "purple", 
          size: "lg" 
        }}
      />
    </section>
  );
}
