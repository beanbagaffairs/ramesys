import { FadeIn } from "../FadeIn";

export function QuoteHero() {
  return (
    <section className="relative pt-20 pb-12 overflow-hidden">
      <div className="relative z-10">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-medium text-primary uppercase tracking-wider">
              Get a Custom Quote
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight gradient-text">
            Let's Build Something <br />
            <span className="gradient-text">Extraordinary Together</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-lg text-white/60 max-w-2xl">
            Tell us about your project vision, and our team of experts will provide you with a tailored strategy and a comprehensive quote to bring it to life.
          </p>
        </FadeIn>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />
    </section>
  );
}
