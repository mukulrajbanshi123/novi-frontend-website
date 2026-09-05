import { Button, SectionHeader } from '@/components/common';
import { CircleX } from 'lucide-react';

const TRUSTED_BY = ['Pulse', 'Aether', 'Holo', 'Kroma', 'Mira'];

export const Hero = () => {
  return (
    <section className="flex w-full container mx-auto flex-col items-center gap-10 px-4 pb-12 pt-16 sm:px-6 sm:pt-24 lg:px-16">
      <SectionHeader
        as="h1"
        title="Run your team without the tab switching"
        description="Novi brings tasks, docs, and conversations into one calm workspace built for small, fast-moving teams."
        className="gap-6 md:max-w-2xl lg:max-w-4xl"
        titleClassName="text-4xl sm:text-5xl lg:text-[56px]"
        descriptionClassName="text-lg sm:text-xl"
      />

      <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:justify-center">
        <Button size="lg">Start Free</Button>
        <Button size="lg" variant="outline">
          See how it works
        </Button>
      </div>

      <div className="flex flex-col items-center gap-4 pt-6">
        <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
          Trusted by 2,000+ teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
          {TRUSTED_BY.map((name) => (
            <div key={name} className="flex items-center gap-1.5 opacity-60">
              <CircleX size={16} className="text-text-muted" />
              <span className="text-sm font-bold text-text-muted">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
