import { SectionHeader } from "../SectionHeader";

export function ContactHero() {
  return (
    <section>
      <div
        className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-6 rounded-3xl bg-cover bg-center bg-no-repeat p-6 md:gap-8"
        // style={{
        //   backgroundImage: `linear-gradient(
        //     rgba(25, 16, 34, 0.85) 0%,
        //     rgba(25, 16, 34, 1) 100%
        //   ),
        //   url('https://lh3.googleusercontent.com/aida-public/AB6AXuB94E5nfF-Zqfrt6UhNvEgtcM7X42qPuGDb3_bFMzv9vlx7QyO-hXUqunvRCHC6Ss1DQvM__Qh2f-5KfpzgO_x-1llmn3qXi9nRwEEYB00cjaHd5u0efKIxtGR-p8burjjErzF7AVGHvKvoAiQEPiqNiBjQr7TLs8BAdlPhZcDisZUIBHa6td6Xxm5kAtUS99cmU_LW3nrx-Mec3bihRusrhaL8k0-P7uCvlOznPcv-FBDfrXPqM9kqK_9ENTLGHVhzg2W-b9jXobjF')`
        // }}
      >
        <div className="mx-auto max-w-3xl">
          <SectionHeader
            badgeText="Contact Us"
            title="Get In Touch"
            subtitle="Ready to start your next project? We'd love to hear from you. Let's discuss how we can help bring your vision to life."
          />
        </div>
      </div>
    </section>
  );
}
