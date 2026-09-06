import type { Variants } from 'motion/react';

export const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
} satisfies Variants;

export const heroFadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
} satisfies Variants;

export const heroGlowTransition = {
  duration: 5,
  repeat: Infinity,
  ease: 'easeInOut',
} as const;
