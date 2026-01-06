import { notFound } from "next/navigation";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { SubServiceCard } from "@/components/ui/Solutions/SubServiceCard";
import { getServiceBySlug, services } from "@/data/services";

interface ServicePageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return services.map((service) => ({ id: service.slug }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await Promise.resolve(params);
  const service = getServiceBySlug(resolvedParams.id);

  if (!service) {
    notFound();
  }

  return (
    <Layout>
      <div className="w-full max-w-6xl px-4 py-16 sm:px-8 md:px-12 lg:px-20 xl:px-32 space-y-16">
        <SectionHeader
          badgeText="Service Detail"
          title={service.title}
          subtitle={service.longDescription}
          className="pt-20 pb-40"
        />

        {service.subServices.length > 0 && (
          <section className="space-y-8 flex flex-col items-center">
            <SectionHeader badgeText="Sub Services" title="Services we offer" />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {service.subServices.map((subService) => (
                <SubServiceCard
                  key={subService.title}
                  title={subService.title}
                  description={subService.description}
                />
              ))}
            </div>
          </section>
        )}

        <section className="rounded-3xl border border-white/5 bg-linear-to-bl from-[#140A28]/40 via-[#090313]/80 to-[#000101] p-8 shadow-xl shadow-black/20">
          <h2 className="text-2xl font-semibold text-white">
            Start a project with us
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Share a few details about what you need and we&apos;ll reach out
            within one business day.
          </p>
          <form className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-white/80"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-white/80"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="you@example.com"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label
                htmlFor="project-details"
                className="text-sm font-medium text-white/80"
              >
                Project details
              </label>
              <textarea
                id="project-details"
                name="project-details"
                rows={4}
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Tell us about your goals, challenges, and timeline."
              />
            </div>
            <div className="md:col-span-2">
              <Button variant="purple" size="lg" className="w-full md:w-auto">
                Send message
              </Button>
            </div>
          </form>
        </section>
      </div>
    </Layout>
  );
}
