import { SectionHeader } from "../SectionHeader";

export function AboutHero() {
  return (
    <section
      className="relative overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat px-6 py-20 text-center sm:px-12 md:px-20"
      // style={{
      //   backgroundImage: `linear-gradient(
      //     rgba(25, 16, 34, 0.8) 0%,
      //     rgba(25, 16, 34, 1) 100%
      //   ),
      //   url('https://lh3.googleusercontent.com/aida-public/AB6AXuB94E5nfF-Zqfrt6UhNvEgtcM7X42qPuGDb3_bFMzv9vlx7QyO-hXUqunvRCHC6Ss1DQvM__Qh2f-5KfpzgO_x-1llmn3qXi9nRwEEYB00cjaHd5u0efKIxtGR-p8burjjErzF7AVGHvKvoAiQEPiqNiBjQr7TLs8BAdlPhZcDisZUIBHa6td6Xxm5kAtUS99cmU_LW3nrx-Mec3bihRusrhaL8k0-P7uCvlOznPcv-FBDfrXPqM9kqK_9ENTLGHVhzg2W-b9jXobjF')`,
      // }}
    >
      <div className="mx-auto flex min-h-[420px] max-w-3xl flex-col items-center justify-center gap-6">
        <SectionHeader
          badgeText="About Us"
          title="Built on Engineering"
          subtitle="Ramesys is a technology company focused on building scalable digital systems through clean code, strong architecture, and practical execution."
        />
      </div>
    </section>
  );
}
