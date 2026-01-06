import { CallToAction } from "../CallToAction";

export function HomeCTA() {
  return (
    <section>
      <CallToAction
        variant="home"
        title="Looking for a technology partner, not just a vendor?"
        description="Schedule a call to explore a structured, code-first approach to your next build."
        primaryAction={{ label: "Schedule a Call", variant: "purple", size: "lg" }}
      />
    </section>
  );
}
