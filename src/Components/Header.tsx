function Header() {
  return (
    <>
      <header className="fixed inset-x-0 top-[env(safe-area-inset-top,0px)] z-50 bg-navy/90 text-white backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
          <a
            href="#top"
            className="font-display text-lg font-extrabold tracking-tight sm:text-xl"
          >
            <span className="text-foam">ALEX POOL</span> CLEANING
          </a>
          <nav
            aria-label="Main"
            className="flex items-center gap-1 text-sm font-medium sm:gap-2 sm:text-base"
          >
            <a
              className="hidden rounded-md px-2.5 py-1.5 hover:bg-white/15 sm:block"
              href="#plans"
            >
              Plans
            </a>
            <a
              className="hidden rounded-md px-2.5 py-1.5 hover:bg-white/15 sm:block"
              href="#gallery"
            >
              Gallery
            </a>
            <a
              className="hidden rounded-md px-2.5 py-1.5 hover:bg-white/15 sm:block"
              href="#about"
            >
              About
            </a>
            <a
              className="rounded-full bg-aqua px-4 py-1.5 font-bold text-navy hover:brightness-110"
              href="#book"
            >
              Book now
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
