import { Layout } from "@/components/layout/Layout";
import { QuoteHero } from "@/components/ui/Quote/QuoteHero";
import { QuoteForm } from "@/components/ui/Quote/QuoteForm";
import { QuoteProcess } from "@/components/ui/Quote/QuoteProcess";

export default function QuotePage() {
  return (
    <Layout>
      <div className="w-full max-w-7xl px-4 pb-16 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-col gap-12">
        <QuoteHero />
        <QuoteForm />
        <QuoteProcess />
      </div>
    </Layout>
  );
}
