import { CallToAction } from "../CallToAction";

export function ContactCTA() {
  return (
    <section>
      <CallToAction
        variant="home"
        title="Ready to start your project?"
        description="Don't wait any longer. Let's discuss your project and see how we can help you achieve your goals."
        primaryAction={{
          label: "Drop a message",
          href: "https://wa.me/447476839088?text=Hi%20Ramesys%20team%2C%20I'm%20interested%20in%20starting%20a%20project... ",
          target: "_blank",
          variant: "purple",
          size: "lg",
        }}
        secondaryAction={{
          label: "See our work",
          href: "/solutions",
          variant: "purple",
          size: "lg",
        }}
      />
    </section>
  );
}
