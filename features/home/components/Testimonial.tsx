import { MessageSquareQuote } from 'lucide-react';

export const Testimonial = () => {
  return (
    <section className="flex w-full flex-col items-center bg-[#f5f3ef] py-16 sm:py-24">
      <div className="flex max-w-2xl flex-col items-center gap-8 px-4 text-center sm:px-6">
        <MessageSquareQuote size={32} className="text-text-primary" />
        <p className="text-xl font-semibold leading-snug text-text-primary sm:text-2xl">
          &quot;Novi is the first product workspace we&apos;ve used that doesn&apos;t feel like a
          chore. It keeps our design sprints aligned and cuts our communication cycles in
          half.&quot;
        </p>
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-primary text-base font-bold text-white">
            DW
          </div>
          <div className="flex flex-col items-start gap-0.5 text-left">
            <p className="text-[15px] font-bold text-text-primary">Devon Webb</p>
            <p className="text-[13px] text-text-secondary">Head of Product, Pulse Studio</p>
          </div>
        </div>
      </div>
    </section>
  );
};
