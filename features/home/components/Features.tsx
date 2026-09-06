'use client';

import { SectionHeader } from '@/components/common';
import { motion } from 'motion/react';

import { featureCardVariants, featuresContainerVariants } from '@/features/home/animations';
import { FEATURES } from '@/features/home/constants';

export const Features = () => {
  return (
    <section className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: 'easeOut',
        }}
      >
        <SectionHeader
          as="h2"
          title="Everything your team needs, nothing it doesn't"
          description="Powering fast-moving builders with intuitive tools without the baggage."
          className="gap-4 sm:max-w-xl"
          titleClassName="text-3xl lg:text-4xl"
          descriptionClassName="text-lg"
        />
      </motion.div>

      <motion.div
        variants={featuresContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.5,
        }}
        className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <motion.div
            key={title}
            variants={featureCardVariants}
            whileHover={{
              y: -8,
              transition: {
                duration: 0.25,
                ease: 'easeOut',
              },
            }}
            className="
             group relative flex
             cursor-pointer
             flex-col
             gap-4
             overflow-hidden
             rounded-2xl
             border
             border-border-stroke
             bg-white
             p-8
             transition-all
             duration-300
             hover:border-primary/30
             hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)]
           "
          >
            <div
              aria-hidden
              className="
                pointer-events-none
                absolute
                -right-16
                -top-16
                size-32
                rounded-full
                bg-primary/10
                opacity-0
                blur-2xl
                transition-opacity
                duration-500
                group-hover:opacity-100
              "
            />

            <motion.div
              className="
                flex
                size-12
                items-center
                justify-center
                rounded-xl
                bg-primary/10
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:rotate-5
                group-hover:bg-primary/15
              "
            >
              <Icon size={24} className="text-primary" />
            </motion.div>
            <div className="relative flex flex-col gap-2">
              <h3
                className="
                  text-xl
                  font-bold
                  text-text-primary
                  transition-colors
                  duration-300
                  group-hover:text-primary
                "
              >
                {title}
              </h3>

              <p className="text-[15px] leading-relaxed text-text-secondary">{description}</p>
            </div>
            <div
              aria-hidden
              className="
                absolute
                bottom-0
                left-1/2
                h-0.5
                w-0
                -translate-x-1/2
                bg-primary
                transition-all
                duration-500
                ease-out
                group-hover:w-full
              "
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
