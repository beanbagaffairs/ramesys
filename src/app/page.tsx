import { Layout } from "@/components/layout/Layout";
import { HomeHero } from "@/components/ui/Home/Hero";
import CoreServices from "@/components/ui/Home/CoreServices";
import { PartnerWithUs } from "@/components/ui/Home/PartnerWithUs";
import { HomeCTA } from "@/components/ui/Home/HomeCTA";
import { WhatTheySay } from "@/components/ui/Home/WhatTheySay";

export default function Home() {
  return (
    <Layout>
      <div className="w-full max-w-7xl px-4 pb-16 sm:px-8 md:px-10 flex flex-col gap-60">
        {/* Hero Section */}
        <HomeHero />
        <CoreServices />
        <WhatTheySay />
        <PartnerWithUs />
        <HomeCTA />

      </div>
    </Layout>
  );
}
