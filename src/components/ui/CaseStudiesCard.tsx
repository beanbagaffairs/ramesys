"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface CaseStudy {
  client: string;
  title: string;
  description: string;
  imageUrl: string;
  linkText?: string;
  linkUrl?: string;
}

interface CaseStudiesCardProps {
  study: CaseStudy;
}

export const CaseStudiesCard: React.FC<CaseStudiesCardProps> = ({ study }) => {
  return (
    <motion.article
      key={study.title}
      className="group flex flex-col gap-5 rounded-3xl border border-primary/40 bg-linear-to-bl from-[#140A28] via-[#090313] to-[#000101] p-6 shadow-[0_0_0_1px_rgba(124,58,237,0.2)] backdrop-blur-md h-full relative"
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={study.linkUrl || "#"}
        className="absolute inset-0 z-10"
        target={study.linkUrl?.startsWith("http") ? "_blank" : undefined}
        rel={
          study.linkUrl?.startsWith("http") ? "noopener noreferrer" : undefined
        }
      />
      <div
        className="aspect-video w-full rounded-2xl bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-[1.02]"
        style={{
          backgroundImage: `url('${study.imageUrl}')`,
        }}
      />
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-3 flex-1">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {study.client}
          </span>
          <h3 className="text-xl font-semibold gradient-text">{study.title}</h3>
          <p className="text-sm text-zinc-200">{study.description}</p>
        </div>
        <Button variant="purple" className="mt-4 w-fit group-hover:scale-105">
          {study.linkText || "Learn More"}
        </Button>
      </div>
    </motion.article>
  );
};
