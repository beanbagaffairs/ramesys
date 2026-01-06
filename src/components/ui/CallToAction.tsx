'use client';

import Link from "next/link";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { FadeIn } from "./FadeIn";
import { motion } from "motion/react";

export type CTAButton = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "purple";
  size?: "sm" | "md" | "lg";
  className?: string;
};

export interface CallToActionProps {
  title: string;
  description: string;
  primaryAction: CTAButton;
  secondaryAction?: CTAButton;
  variant?: "home";
  className?: string;
  contentClassName?: string;
}

const variantConfig = {
  home: {
    container:
      "relative mx-auto flex overflow-hidden rounded-[16px] border border-white/10 bg-[#05010F] px-6 py-14 shadow-[0_0_60px_rgba(126,34,206,0.25)] sm:px-10 lg:px-16",
    overlays: (
      <>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08)_0%,rgba(5,1,15,0)_60%)] opacity-30" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] bg-size-[26px_26px] opacity-20" />
        <motion.div 
          className="pointer-events-none absolute -right-[28%] top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(126,34,206,0.8)_0%,rgba(126,34,206,0.2)_40%,rgba(5,1,15,0)_68%)] opacity-80 md:block"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.8, 0.6, 0.8]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </>
    ),
    content:
      "relative z-10 grid w-full gap-10 md:grid-cols-[minmax(0,1fr)] md:items-center",
    textContainer:
      "flex flex-col gap-6 text-center md:max-w-xl md:text-left md:gap-8",
    titleClass:
      "text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl",
    descriptionClass: "text-lg text-white/70",
    buttonWrapper: "flex flex-wrap justify-center gap-4 md:justify-start",
    titleRenderer: (title: string) => (
      <span className="block gradient-text">{title}</span>
    ),
  },
} as const;

type VariantKey = keyof typeof variantConfig;

type ButtonRole = "primary" | "secondary";

function renderActionButton(action: CTAButton, role: ButtonRole) {
  const button = (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant={action.variant ?? (role === "primary" ? "primary" : "secondary")}
        size={action.size ?? "lg"}
        onClick={action.onClick}
        className={action.className}
      >
        {action.label}
      </Button>
    </motion.div>
  );

  if (action.href) {
    return (
      <Link href={action.href} className="inline-flex" prefetch={false}>
        {button}
      </Link>
    );
  }

  return button;
}

export function CallToAction({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "home",
  className,
  contentClassName,
}: CallToActionProps) {
  const config = variantConfig[variant as VariantKey];

  return (
    <FadeIn duration={0.8} className={cn(config.container, className)}>
      {config.overlays}
      <div className={cn(config.content, contentClassName)}>
        <div className={config.textContainer}>
          <FadeIn delay={0.2} duration={0.6}>
            <h2 className={config.titleClass}>{config.titleRenderer(title)}</h2>
          </FadeIn>
          <FadeIn delay={0.4} duration={0.6}>
            <p className={config.descriptionClass}>{description}</p>
          </FadeIn>
          <FadeIn delay={0.6} duration={0.6}>
            <div className={config.buttonWrapper}>
              {renderActionButton(primaryAction, "primary")}
              {secondaryAction ? renderActionButton(secondaryAction, "secondary") : null}
            </div>
          </FadeIn>
        </div>
      </div>
    </FadeIn>
  );
}
