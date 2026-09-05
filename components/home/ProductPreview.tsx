import { Home, KanbanSquare, CheckCircle2, MessageCircle, Calendar, XCircle } from 'lucide-react';

const SIDEBAR_ITEMS = [
  { icon: Home, label: 'Overview', active: false },
  { icon: KanbanSquare, label: 'Projects', active: true },
  { icon: CheckCircle2, label: 'My Tasks', active: false },
  { icon: MessageCircle, label: 'Messages', active: false },
  { icon: Calendar, label: 'Timeline', active: false },
];

const AVATAR_COLORS: Record<string, string> = {
  S: 'bg-primary',
  K: 'bg-emerald-500',
  M: 'bg-amber-500',
  JD: 'bg-primary',
  A: 'bg-slate-600',
};

const PRIORITY_STYLES: Record<string, string> = {
  Medium: 'bg-amber-500/10 text-amber-500',
  Low: 'bg-slate-500/10 text-slate-500',
  High: 'bg-primary/10 text-primary',
  Completed: 'bg-emerald-500/10 text-emerald-500',
};

type Card = { priority: string; date: string; title: string; avatars: string[] };

const COLUMNS: { title: string; cards: Card[] }[] = [
  {
    title: 'To Do',
    cards: [
      {
        priority: 'Medium',
        date: 'Sep 28',
        title: 'Define feedback loop UI',
        avatars: ['JD', 'A'],
      },
      { priority: 'Low', date: 'Oct 1', title: 'Review brand style guide', avatars: ['K'] },
    ],
  },
  {
    title: 'In Progress',
    cards: [
      {
        priority: 'High',
        date: 'Sep 24',
        title: 'Design settings workspace layout',
        avatars: ['S', 'M', 'K'],
      },
    ],
  },
  {
    title: 'Review',
    cards: [
      { priority: 'High', date: 'Sep 22', title: 'Write microcopy for onboarding', avatars: ['S'] },
    ],
  },
  {
    title: 'Done',
    cards: [
      {
        priority: 'Completed',
        date: 'Completed',
        title: 'Launch interactive preview',
        avatars: ['S', 'M'],
      },
    ],
  },
];

const Avatar = ({ initials }: { initials: string }) => (
  <div
    className={`flex size-5 items-center justify-center rounded-full border-2 border-white text-[8px] font-bold text-white ${AVATAR_COLORS[initials] ?? 'bg-slate-600'}`}
  >
    {initials}
  </div>
);

const ProductPreview = () => {
  return (
    <section className="flex w-full max-w-7xl flex-col items-center px-4 pb-24 sm:px-6 lg:px-16">
      <div className="hidden h-[680px] w-full overflow-hidden rounded-2xl border border-border-stroke bg-white shadow-[0px_24px_48px_0px_rgba(15,23,42,0.07)] lg:flex lg:flex-col">
        {/* window chrome */}
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-border-stroke bg-[#f5f3ef] px-4">
          <div className="flex gap-1.5">
            <span className="size-3 rounded-full bg-[#ff5f57]" />
            <span className="size-3 rounded-full bg-[#febc2e]" />
            <span className="size-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex w-60 items-center justify-center rounded-md border border-border-stroke bg-white px-4 py-1">
            <span className="text-xs text-slate-500">app.novi.co/workspace</span>
          </div>
          <div className="size-4" />
        </div>

        <div className="flex flex-1 items-start">
          {/* sidebar */}
          <div className="flex h-full w-[220px] shrink-0 flex-col gap-6 border-r border-border-stroke bg-[#f5f3ef] p-4">
            <div className="flex w-full flex-col gap-2">
              {SIDEBAR_ITEMS.map(({ icon: Icon, label, active }) => (
                <div
                  key={label}
                  className={`flex w-full items-center gap-2.5 rounded-md px-3 py-2 ${active ? 'bg-primary/10' : ''}`}
                >
                  <Icon size={16} className={active ? 'text-primary' : 'text-text-secondary'} />
                  <span
                    className={`text-[13px] ${active ? 'font-semibold text-primary' : 'font-medium text-text-secondary'}`}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex w-full flex-col gap-2 rounded-lg border border-border-stroke bg-white p-3">
              <p className="text-[11px] font-semibold text-text-secondary">Q3 Milestone</p>
              <p className="text-[13px] font-bold text-text-primary">Launch V2</p>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-border-stroke">
                <div className="h-full w-20 bg-primary" />
              </div>
            </div>
          </div>

          {/* kanban */}
          <div className="flex h-full flex-1 flex-col gap-5 p-5">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <p className="text-lg font-bold text-text-primary">Product Design Board</p>
                <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-semibold text-primary">
                  Active
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Avatar initials="S" />
                <Avatar initials="K" />
                <Avatar initials="M" />
              </div>
            </div>

            <div className="flex flex-1 gap-4">
              {COLUMNS.map((col) => (
                <div key={col.title} className="flex flex-1 flex-col gap-3">
                  <div className="flex w-full items-center justify-between">
                    <p className="text-xs font-bold text-text-primary">{col.title}</p>
                    <span className="flex size-[18px] items-center justify-center rounded-full bg-[#f5f3ef] text-[10px] font-semibold text-text-secondary">
                      {col.cards.length}
                    </span>
                  </div>
                  <div className="flex w-full flex-col gap-2">
                    {col.cards.map((card) => (
                      <div
                        key={card.title}
                        className="flex w-full flex-col gap-3 rounded-lg border border-border-stroke bg-white p-3 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.02)]"
                      >
                        <div className="flex w-full items-center justify-between">
                          <span
                            className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${PRIORITY_STYLES[card.priority]}`}
                          >
                            {card.priority}
                          </span>
                          <span className="text-[11px] text-slate-500">{card.date}</span>
                        </div>
                        <p className="text-[13px] font-semibold text-text-primary">{card.title}</p>
                        <div className="flex items-center -space-x-1.5">
                          {card.avatars.map((a) => (
                            <Avatar key={a} initials={a} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* activity thread */}
          <div className="flex h-full w-[280px] shrink-0 flex-col gap-4 border-l border-border-stroke bg-white p-4">
            <div className="flex w-full items-center justify-between">
              <p className="text-[13px] font-bold text-text-primary">Activity Thread</p>
              <XCircle size={14} className="text-slate-500" />
            </div>
            <div className="flex w-full flex-1 flex-col gap-3">
              <div className="flex w-full flex-col gap-1.5 rounded-lg bg-[#f5f3ef] p-2.5">
                <div className="flex w-full items-start justify-between">
                  <p className="text-[11px] font-bold text-text-primary">Sarah Connor</p>
                  <p className="text-[10px] text-slate-500">10m ago</p>
                </div>
                <p className="text-xs leading-snug text-text-secondary">
                  Just pushed the latest redesign files. Let me know your thoughts!
                </p>
              </div>
              <div className="flex w-full flex-col gap-1.5 rounded-lg bg-[#f5f3ef] p-2.5">
                <div className="flex w-full items-start justify-between">
                  <p className="text-[11px] font-bold text-text-primary">Kroma Agent</p>
                  <p className="text-[10px] text-slate-500">4m ago</p>
                </div>
                <p className="text-xs leading-snug text-text-secondary">
                  Looks incredibly crisp. Love the warm backgrounds here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* simplified fallback below lg */}
      <div className="flex w-full items-center justify-center rounded-2xl border border-border-stroke bg-white p-10 shadow-[0px_24px_48px_0px_rgba(15,23,42,0.07)] lg:hidden">
        <p className="text-center text-sm text-text-secondary">
          Open on a larger screen to see the full product preview.
        </p>
      </div>
    </section>
  );
};

export default ProductPreview;
