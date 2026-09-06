import { KanbanSquare, MessageCircle, Calendar, UploadCloud, type LucideIcon } from 'lucide-react';

export const FEATURES: { icon: LucideIcon; title: string; description: string }[] = [
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
