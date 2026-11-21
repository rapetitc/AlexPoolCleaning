import { useInfoContext } from "../Context/InfoContext.tsx";
import { PhoneIcon } from "./Icons.tsx";

function Presentation() {
  const { PHONE_DISPLAY, PHONE_LINK } = useInfoContext();

  return (
    <>
      <div className="water relative isolate text-white">
        <div className="mx-auto max-w-6xl px-5 pb-28 pt-32 sm:pb-36 sm:pt-44">
          <p className="mb-4 text-sm font-bold uppercase tracking-[.2em] text-foam">
            West Palm Beach, Florida
          </p>
          <h1 className="max-w-[14ch] font-display text-[clamp(2.75rem,9vw,6rem)] font-extrabold leading-[1] tracking-tight">
            Crystal-clear pools, zero hassle.
          </h1>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <a
              href="#book"
              className="rounded-full bg-aqua px-7 py-3.5 text-center font-bold text-navy transition hover:-translate-y-0.5 hover:brightness-110"
            >
              Book a cleaning
            </a>
            <a
              href={PHONE_LINK}
              className="flex items-center justify-center gap-2 rounded-full border-2 border-white/80 px-7 py-3.5 text-center font-bold transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <PhoneIcon />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <svg
          className="absolute inset-x-0 bottom-[-1px] -z-0 h-14 w-full text-bg sm:h-20"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M0 40c120 30 240 30 360 5s240-35 360-10 240 40 360 15 240-30 360-5V80H0z"
          />
        </svg>
      </div>
      <dl className="mx-auto grid max-w-6xl gap-6 px-5 py-10 text-center sm:grid-cols-3">
        <div>
          <dt className="sr-only">Experience</dt>
          <dd className="font-display text-4xl font-extrabold text-aqua">
            5+ years
          </dd>
          <dd className="text-muted">cleaning pools in West Palm Beach</dd>
        </div>
        <div>
          <dt className="sr-only">Quality</dt>
          <dd className="font-display text-4xl font-extrabold text-aqua">
            Happy customers
          </dd>
          <dd className="text-muted">excellent cleaning, every visit</dd>
        </div>
        <div>
          <dt className="sr-only">Booking</dt>
          <dd className="font-display text-4xl font-extrabold text-aqua">
            60 seconds
          </dd>
          <dd className="text-muted">to request your cleaning</dd>
        </div>
      </dl>
    </>
  );
}

export default Presentation;
