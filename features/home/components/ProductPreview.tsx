export const ProductPreview = () => {
  return (
    <section className="container mx-auto flex w-full max-w-7xl flex-col items-center px-4 pb-24 sm:px-6 lg:px-16">
      <div className="w-full overflow-hidden rounded-2xl border border-border-stroke bg-white shadow-[0px_24px_48px_0px_rgba(15,23,42,0.07)]">
        <video
          className="block aspect-video w-full object-cover"
          src="/videos/product-preview.mp4"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />
      </div>
    </section>
  );
};
