import { CallToAction } from '../CallToAction';

export function AboutCTA() {
  return (
    <section>
      <CallToAction
        variant="home"
        title="Build It Right"
        description="Ramesys works with businesses that value clean systems, long-term thinking, and technology built to scale. If you’re planning something serious, we’re ready to engineer it with you."
        primaryAction={{ label: "Start with a conversation", variant: "purple", size: "lg" }}
        // secondaryAction={ { label: "Build with clarity", variant: "purple", size: "lg" }}
      />
    </section>
  );
}
