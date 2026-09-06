'use client';
import { Button, SectionHeader } from '@/components/common';
import { motion } from 'motion/react';
import { ctaTitleVariants, ctaWordVariants } from '@/features/home/animations';

const CTA_TITLE = 'Start building with your team today';

export const CTASection = () => {
  return (
    <section className="flex w-full max-w-7xl flex-col items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-16">
      <div className="flex w-full flex-col items-center gap-8 rounded-3xl bg-primary p-10 drop-shadow-[0px_16px_16px_rgba(79,70,229,0.25)] sm:p-16">
        <SectionHeader
          as="h2"
          title={
            <motion.span
              variants={ctaTitleVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              className="flex flex-wrap justify-center gap-x-[0.3em]"
            >
              {CTA_TITLE.split(' ').map((word) => (
                <motion.span key={word} variants={ctaWordVariants}>
                  {word}
                </motion.span>
              ))}
            </motion.span>
          }
          description="Novi is free to try with up to 10 team members. No credit card required."
          className="gap-4 text-center"
          titleClassName="text-3xl text-white lg:text-4xl"
          descriptionClassName="sm:text-lg text-indigo-100"
        />
        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <Button size="lg" className="px-8 py-3.5 transition hover:bg-indigo-50" variant="outline">
            <span className="text-base font-bold text-primary"> Start Free</span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
