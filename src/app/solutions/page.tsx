import { Layout } from "@/components/layout/Layout";
import { SolutionsCTA } from "@/components/ui/Solutions/SolutionsCTA";
import { SolutionsCaseStudies } from "@/components/ui/Solutions/SolutionsCaseStudies";
import { SolutionsHero } from "@/components/ui/Solutions/SolutionsHero";
import { SolutionsServices } from "@/components/ui/Solutions/SolutionsServices";

export default function Solutions() {
  return (
    <Layout>
      <div className="w-full max-w-7xl px-4 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-32 flex flex-col gap-32">
        <SolutionsHero />
        <SolutionsServices />
        <SolutionsCaseStudies />
        <SolutionsCTA />
      </div>
    </Layout>
  );
}
