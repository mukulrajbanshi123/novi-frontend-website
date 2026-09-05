const CTASection = () => {
  return (
    <section className="flex w-full max-w-7xl flex-col items-center px-4 py-16 sm:px-6 sm:py-24 lg:px-16">
      <div className="flex w-full flex-col items-center gap-8 rounded-3xl bg-primary p-10 drop-shadow-[0px_16px_16px_rgba(79,70,229,0.25)] sm:p-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Start building with your team today
          </h2>
          <p className="text-lg text-indigo-100">
            Novi is free to try with up to 10 team members. No credit card required.
          </p>
        </div>
        <button className="rounded-lg bg-white px-8 py-3.5 text-base font-bold text-primary transition hover:bg-indigo-50">
          Start Free
        </button>
      </div>
    </section>
  );
};

export default CTASection;
