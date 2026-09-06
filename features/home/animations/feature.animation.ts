import type { Variants } from 'motion/react';

export const featuresContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
} satisfies Variants;

export const featureCardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
} satisfies Variants;

export const featureIconVariants = {
  rest: {
    scale: 1,
    rotate: 0,
  },

  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
} satisfies Variants;
