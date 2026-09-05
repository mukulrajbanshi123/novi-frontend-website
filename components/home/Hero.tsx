import { CircleX } from 'lucide-react';
import Button from '../common/Button';

const TRUSTED_BY = ['Pulse', 'Aether', 'Holo', 'Kroma', 'Mira'];

const Hero = () => {
  return (
    <section className="flex w-full container mx-auto flex-col items-center gap-10 px-4 pb-12 pt-16 sm:px-6 sm:pt-24 lg:px-16">
      <div className="flex flex-col items-center gap-6 text-center md:max-w-2xl lg:max-w-4xl">
        <h1 className="text-4xl font-extrabold leading-[1.1] text-text-primary sm:text-5xl lg:text-[56px]">
          Run your team without the tab switching
        </h1>
        <p className="text-lg text-text-secondary sm:text-xl">
          Novi brings tasks, docs, and conversations into one calm workspace built for small,
          fast-moving teams.
        </p>
      </div>

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

export default Hero;
