import { CallToAction } from "../CallToAction";

export function ContactCTA() {
  return (
    <section>
      <CallToAction
        variant="home"
        title="Ready to start your project?"
        description="Don't wait any longer. Let's discuss your project and see how we can help you achieve your goals."
        primaryAction={{
          label: "Schedule a Call",
          variant: "purple",
          size: "lg",
        }}
        secondaryAction={{
          label: "See our work",
          variant: "purple",
          size: "lg",
        }}
      />
    </section>
  );
}
