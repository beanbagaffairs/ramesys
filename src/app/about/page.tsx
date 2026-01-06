import { Layout } from "@/components/layout/Layout";
import { AboutHero } from "@/components/ui/About/AboutHero";
import { AboutGuidingPrinciples } from "@/components/ui/About/AboutGuidingPrinciples";
import { AboutCoreValues } from "@/components/ui/About/AboutCoreValues";
import { AboutTeam } from "@/components/ui/About/AboutTeam";
import { AboutCTA } from "@/components/ui/About/AboutCTA";

export default function About() {
  return (
    <Layout>
      <div className="w-full max-w-7xl px-4 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-32 flex flex-col gap-32">
        <AboutHero />
        <AboutGuidingPrinciples />
        <AboutCoreValues />
        <AboutTeam />
        <AboutCTA />
      </div>
    </Layout>
  );
}
