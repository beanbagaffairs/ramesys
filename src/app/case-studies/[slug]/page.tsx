import { Layout } from "@/components/layout/Layout";
import { notFound } from "next/navigation";
import { caseStudies } from "../data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedGrid } from "@/components/ui/AnimatedSection";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <Layout>
      <div className="w-full max-w-7xl px-4 py-24 sm:px-8 md:px-12 lg:px-20 xl:px-32 flex flex-col gap-24">
        {/* Hero Section */}
        <div className="flex flex-col gap-8">
          <SectionHeader
            badgeText={study.client}
            title={study.title}
            subtitle={study.description}
            centered={true}
          />
          <div
            className="aspect-video w-full rounded-3xl bg-cover bg-center border border-primary/20 shadow-2xl"
            style={{ backgroundImage: `url('${study.imageUrl}')` }}
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Challenges */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold gradient-text">The Challenge</h2>
            <ul className="space-y-4">
              {study.challenges?.map((challenge, idx) => (
                <li key={idx} className="flex gap-3 text-zinc-200">
                  <span className="text-primary font-bold">•</span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold gradient-text">Our Solution</h2>
            <ul className="space-y-4">
              {study.solutions?.map((solution, idx) => (
                <li key={idx} className="flex gap-3 text-zinc-200">
                  <span className="text-primary font-bold">•</span>
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Results & Tech */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Results */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold gradient-text">Key Results</h2>
            <div className="grid grid-cols-1 gap-4">
              {study.results?.map((result, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-primary/5 border border-primary/20"
                >
                  <p className="text-zinc-100 font-medium">{result}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold gradient-text">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-3">
              {study.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-sm font-medium text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            {study.liveUrl && (
              // <div className="pt-8">
              // <a
              //   href={study.liveUrl}
              //   target="_blank"
              //   rel="noopener noreferrer"
              //   className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 h-12 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:scale-105 shadow-[0_0_20px_rgba(127,19,236,0.3)]"
              // >
              //   View Live Project
              //   <span className="material-symbols-outlined text-base">
              //     open_in_new
              //   </span>
              // </a>
              // </div>
              <div className="pt-8">
                <Button
                  variant="purple"
                  className="mt-4 w-fit group-hover:scale-105"
                >
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg px-8 h-12 text-sm font-bold text-white"
                  >
                    View Live Project
                    <span className="material-symbols-outlined text-base">
                      open_in_new
                    </span>
                  </a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}
