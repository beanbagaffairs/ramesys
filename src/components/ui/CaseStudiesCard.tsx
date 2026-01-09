'use client';

import { motion } from "motion/react";

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
      className="group flex flex-col gap-5 rounded-3xl border border-primary/40 bg-linear-to-bl from-[#140A28] via-[#090313] to-[#000101] p-6 shadow-[0_0_0_1px_rgba(124,58,237,0.2)] backdrop-blur-md"
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="aspect-video w-full rounded-2xl bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-[1.02]"
        style={{
          backgroundImage: `url('${study.imageUrl}')`,
        }}
      />
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            {study.client}
          </span>
          <h3 className="text-xl font-semibold gradient-text">{study.title}</h3>
          <p className="text-sm text-zinc-200">{study.description}</p>
        </div>
        <a
          className="mt-4 inline-flex w-fit items-center justify-center gap-2 rounded-lg bg-primary px-6 h-11 text-sm font-bold text-white transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(127,19,236,0.3)]"
          href={study.linkUrl || "#"}
          target={study.linkUrl?.startsWith('http') ? "_blank" : undefined}
          rel={study.linkUrl?.startsWith('http') ? "noopener noreferrer" : undefined}
        >
          {study.linkText || "Learn More"}
          <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
            arrow_forward
          </span>
        </a>
      </div>
    </motion.article>
  );
};
