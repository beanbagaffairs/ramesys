import { Layout } from "@/components/layout/Layout";
import { ContactCTA } from "@/components/ui/Contact/ContactCTA";
import { ContactFAQ } from "@/components/ui/Contact/ContactFAQ";
import { ContactFormSection } from "@/components/ui/Contact/ContactFormSection";
import { ContactHero } from "@/components/ui/Contact/ContactHero";

export default function Contact() {
  return (
    <Layout>
      <div className="w-full max-w-7xl px-4 pb-16 sm:px-8 md:px-16 lg:px-24 xl:px-40 flex flex-col gap-24">
        <ContactHero />
        <ContactFormSection />
        <ContactFAQ />
        <ContactCTA />
      </div>
    </Layout>
  );
}
