import { KanbanSquare, MessageCircle, Calendar, UploadCloud, type LucideIcon } from 'lucide-react';

const FEATURES: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: KanbanSquare,
    title: 'Boards that move at your speed',
    description:
      'Plan sprints and track tasks without hunting through spreadsheets. Simple drag-and-drop mechanics built for rapid alignment.',
  },
  {
    icon: MessageCircle,
    title: 'Threads, not another inbox',
    description:
      'Keep project conversations attached to the work itself. Keep your chat contextual, organized, and focused on progress.',
  },
  {
    icon: Calendar,
    title: 'One timeline for the whole team',
    description:
      'Every deadline and milestone in one shared view. Align design outputs and product updates synchronously.',
  },
  {
    icon: UploadCloud,
    title: 'Works the way you already do',
    description:
      'Import from Trello, Asana, or a spreadsheet in minutes. Zero learning curves, immediate productivity gains.',
  },
];

const Features = () => {
  return (
    <section className="flex w-full max-w-7xl flex-col items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:px-16">
      <div className="flex flex-col items-center gap-4 text-center sm:max-w-xl">
        <h2 className="text-3xl font-extrabold text-text-primary sm:text-4xl">
          Everything your team needs, nothing it doesn&apos;t
        </h2>
        <p className="text-lg text-text-secondary">
          Powering fast-moving builders with intuitive tools without the baggage.
        </p>
      </div>

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

export default Features;
