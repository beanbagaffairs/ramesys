import { CallToAction } from "../CallToAction";

export function HomeCTA() {
  return (
    <section>
      <CallToAction
        variant="home"
        title="Looking for a technology partner, not just a vendor?"
        description="Chat with our Expert to explore a structured, code-first approach to your next build."
        primaryAction={{ 
          label: "Chat with our Expert", 
          href: "https://wa.me/917980624524?text=Hi%20Ramesys%20team%2C%20I'm%20interested%20in%20starting%20a%20project...",
          target: "_blank",
          variant: "purple", 
          size: "lg" 
        }}
      />
    </section>
  );
}
