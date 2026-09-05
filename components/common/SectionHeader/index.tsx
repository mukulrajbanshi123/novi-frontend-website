import { SectionHeaderProps } from '@/types';
import { cn } from '@/utils';

export function SectionHeader({
  title,
  description,
  className,
  titleClassName,
  descriptionClassName,
  as: Heading = 'h2',
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-6 text-center md:max-w-2xl lg:max-w-4xl',
        className
      )}
      {...props}
    >
      <Heading
        className={cn(
          'text-4xl font-extrabold leading-[1.1] text-text-primary sm:text-5xl lg:text-[56px]',
          titleClassName
        )}
      >
        {title}
      </Heading>

      {description && (
        <p className={cn('text-lg text-text-secondary sm:text-xl', descriptionClassName)}>
          {description}
        </p>
      )}
    </div>
  );
}
