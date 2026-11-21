function Plans() {
  return (
    <>
      <section id="plans" className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <h2 className="mb-3 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
            Pick the plan that fits
          </h2>
          <p className="mb-10 max-w-[58ch] text-muted">
            Whether you need a one-time refresh or a regular schedule, I’ll keep
            your pool ready for swimming.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl border border-line bg-card p-7">
              <h3 className="mb-2 font-display text-2xl font-extrabold">
                One-time clean
              </h3>
              <p className="text-muted">
                A full cleaning to bring your pool back to sparkling, perfect
                before a party or after a storm.
              </p>
            </article>
            <article className="rounded-3xl bg-navy p-7 text-white ring-4 ring-aqua/40">
              <h3 className="mb-2 font-display text-2xl font-extrabold">
                Weekly service
              </h3>
              <p className="text-white/85">
                A regular visit every week so your water stays balanced and
                clear all season.
              </p>
            </article>
            <article className="rounded-3xl border border-line bg-card p-7">
              <h3 className="mb-2 font-display text-2xl font-extrabold">
                Bi-weekly service
              </h3>
              <p className="text-muted">
                Every other week: a lighter schedule that still keeps your pool
                in great shape.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Plans;
