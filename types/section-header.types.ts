import { HTMLAttributes, ReactNode } from 'react';

export interface SectionHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  title: ReactNode;
  description?: ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
  as?: 'h1' | 'h2' | 'h3';
}
