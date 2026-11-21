function About() {
  return (
    <section id="about" className="border-t border-line bg-card py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-16">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-aqua">
            About me
          </p>
          <h2 className="mb-6 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Meet Alex, your pool cleaner
          </h2>
          <div className="space-y-4 text-lg">
            <p>
              Hi, I’m Alex! For the past 5 years I’ve been keeping pools across
              West Palm Beach clean, clear and ready for a swim. It’s what I do every day,
              and I take real pride in it.
            </p>
            <p>
              My promise is simple: every visit, I leave your pool in better
              shape than I found it, and every customer happy with the result.
              Just clean water, done right.
            </p>
            <p>
              Pick the plan that fits your schedule, book in a few taps, and
              I’ll take care of the rest. All you have to do is dive in.
            </p>
          </div>
          <a
            href="#book"
            className="mt-8 inline-block rounded-full bg-navy px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:brightness-125"
          >
            Book a cleaning
          </a>
        </div>
        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-b from-foam/50 to-aqua/30 px-6 pt-10">
          <img
            src="/alex-pool-cleaning.png"
            alt="Alex, your pool cleaner, holding a pool net and giving a thumbs up"
            loading="lazy"
            className="relative mx-auto block w-full max-w-xs drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
