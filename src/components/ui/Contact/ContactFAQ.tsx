import { ChevronUp } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../../../components/motion-primitives/accordion";
import { SectionHeader } from "../SectionHeader";
import { AnimatedGrid } from "../AnimatedSection";

const faqs = [
  {
    value: "companies",
    question: "What kind of companies do you work with?",
    answer:
      "We work with startups, growing businesses, and established organisations that need scalable, custom-built digital systems—not template-based solutions.",
  },
  {
    value: "templates",
    question: "Do you use templates or page builders for websites?",
    answer:
      "No. Our websites are custom-coded from the ground up, allowing better performance, security, flexibility, and long-term scalability.",
  },
  {
    value: "technologies",
    question: "What technologies do you use?",
    answer:
      "We select technologies based on project requirements, scalability, and performance. Our focus is always on clean architecture, structured code, and production-ready systems rather than fixed tools.",
  },
  {
    value: "scale",
    question: "Can your websites and applications scale as our business grows?",
    answer:
      "Yes. Scalability is built into our architecture from the start, allowing systems to handle increased users, features, and data without rework.",
  },
  {
    value: "marketing",
    question: "Do you only provide development, or also digital marketing?",
    answer:
      "We provide both. Our digital marketing services are data-driven and tightly integrated with the systems we build, ensuring measurable and sustainable growth.",
  },
  {
    value: "approach",
    question: "How do you approach a new project?",
    answer:
      "We begin by understanding business goals, workflows, and technical needs, then design the system architecture before moving into development and deployment.",
  },
  {
    value: "support",
    question: "Do you offer long-term support and maintenance?",
    answer:
      "Yes. We provide ongoing support, enhancements, and system improvements to ensure stability and performance over time.",
  },
  {
    value: "started",
    question: "How do we get started with Ramesys?",
    answer:
      "You can start by booking a call with our team. We’ll discuss your requirements and recommend the right technical approach.",
  },
];

export function ContactFAQ() {
  return (
    <section>
      <SectionHeader badgeText="FAQ" title="Got questions?" centered />
      <Accordion
        className="flex w-full flex-col gap-4 divide-y divide-zinc-200 dark:divide-zinc-700"
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <AnimatedGrid className="flex flex-col gap-4" stagger={0.1}>
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.value}
              value={faq.value}
              className="py-4 px-4 group overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-md bg-linear-to-bl from-[#140A28] via-[#090313] to-[#000101]"
            >
              <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
                <div className="flex items-center justify-between text-lg gradient-text">
                  <div>{faq.question}</div>
                  <ChevronUp className="h-8 w-8 text-[#5F19E4] transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50 cursor-pointer" />
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-zinc-400 text-md">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </AnimatedGrid>
      </Accordion>
    </section>
  );
}
