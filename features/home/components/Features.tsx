import { SectionHeader } from '@/components/common';
import { FEATURES } from '../constants/Features';

export const Features = () => {
  return (
    <section className="flex w-full max-w-7xl flex-col items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:px-16">
      <SectionHeader
        as="h2"
        title="Everything your team needs, nothing it doesn't"
        description="Powering fast-moving builders with intuitive tools without the baggage."
        className="gap-4 sm:max-w-xl"
        titleClassName="text-3xl sm:text-4xl"
        descriptionClassName="text-lg"
      />
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
        {FEATURES.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="flex flex-col gap-4 rounded-2xl border border-border-stroke bg-white p-8 drop-shadow-[0px_4px_6px_rgba(15,23,42,0.01)]"
          >
            <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
              <Icon size={24} className="text-primary" />
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-text-primary">{title}</h3>
              <p className="text-[15px] leading-relaxed text-text-secondary">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
