'use client';

import { Button, SectionHeader } from '@/components/common';
import { CircleX, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { heroContainerVariants, heroFadeUpVariants } from '@/features/home/animations';
import { TRUSTED_BY } from '@/features/home/constants';

export const Hero = () => {
  return (
    <section className="relative flex w-full flex-col items-center overflow-hidden px-4 pb-12 pt-16 sm:px-6 sm:pt-24 lg:px-16">
      <div
        className="pointer-events-none absolute left-[-5%] top-20 -z-10 h-100 w-100 lg:h-150 lg:w-150 animate-glass-drift rounded-full bg-mist/40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[-5%] bottom-[-10%] -z-10 h-70 w-70 lg:h-125 lg:w-125 animate-glass-drift rounded-full bg-cobalt/5"
        style={{ animationDelay: '-4s' }}
        aria-hidden="true"
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
        className="flex w-full flex-col items-center gap-10"
      >
        <motion.div
          className="relative"
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <div className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary shadow-sm">
            <motion.div
              aria-hidden
              className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent"
              animate={{
                x: ['0%', '250%'],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: 'easeInOut',
              }}
            />

            <motion.span
              animate={{
                rotate: [0, 12, -12, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Sparkles size={15} />
            </motion.span>

            <span className="relative">One workspace. Zero tab chaos.</span>
          </div>
        </motion.div>
        <motion.div variants={heroFadeUpVariants}>
          <SectionHeader
            as="h1"
            title="Run your team without the tab switching"
            description="Novi brings tasks, docs, and conversations into one calm workspace built for small, fast-moving teams."
            className="gap-6 md:max-w-2xl lg:max-w-4xl"
            titleClassName="text-4xl sm:text-5xl lg:text-[56px]"
            descriptionClassName="text-lg sm:text-xl"
          />
        </motion.div>
        <motion.div
          variants={heroFadeUpVariants}
          className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button size="lg">Start Free</Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Button size="lg" variant="outline">
              See how it works
            </Button>
          </motion.div>
        </motion.div>
        <motion.div variants={heroFadeUpVariants} className="flex flex-col items-center gap-4 pt-6">
          <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
            Trusted by 2,000+ teams
          </p>
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-12"
            variants={heroContainerVariants}
          >
            {TRUSTED_BY.map((name) => (
              <motion.div
                key={name}
                variants={heroFadeUpVariants}
                whileHover={{
                  opacity: 1,
                  y: -3,
                  scale: 1.05,
                }}
                className="flex cursor-default items-center gap-1.5 opacity-60 transition-opacity"
              >
                <CircleX size={16} className="text-text-muted" />

                <span className="text-sm font-bold text-text-muted">{name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
