'use client';

import { motion } from "motion/react";

interface CaseStudy {
  client: string;
  title: string;
  description: string;
  imageUrl: string;
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
          className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all group-hover:gap-3"
          href="#"
        >
          Learn More
          <span className="material-symbols-outlined text-base">
            arrow_forward
          </span>
        </a>
      </div>
    </motion.article>
  );
};
