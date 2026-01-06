// import { Button } from "../Button";
import { SectionHeader } from "../SectionHeader";

export function SolutionsHero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat px-6 py-20 text-center sm:px-12 md:px-20">
      <div className="mx-auto flex min-h-[420px] max-w-3xl flex-col items-center justify-center gap-6">
        <SectionHeader
          badgeText="Solutions"
          title="What We Deliver"
          subtitle="Ramesys provides engineering-led services focused on building scalable websites, applications, software systems, and data-driven digital growth solutions."
        />
        {/* <Button variant="purple" size="lg">Explore Our Services</Button> */}
      </div>
    </section>
  );
}
