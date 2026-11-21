import { useState } from "react";
import {
  WhatsAppIcon,
  SmsIcon,
  EditIcon,
  CopyIcon,
  CheckIcon,
} from "./Icons.tsx";
import { useInfoContext } from "../Context/InfoContext.tsx";

const today = new Date();
const formatted = today.toLocaleDateString("en-CA");

function Book() {
  const { PHONE_NUMBER } = useInfoContext();

  const [submitted, setSubmitted] = useState(false);
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [service, setService] = useState("Weekly service");
  const [date, setDate] = useState(formatted);
  const [time, setTime] = useState("Morning");
  const [notes, setNotes] = useState("");
  const [copied, setCopied] = useState(false);

  const onSubmitAction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const msg = `Hi Alex! I’d like to book a pool cleaning.
Service: ${service}
Date: ${date} (${time})
Address: ${address}
Name: ${name}
Phone: ${phone}
${notes ? "Notes: " + notes : ""}`;

    setMsg(msg);
    setSubmitted(true);
  };

  return (
    <>
      <section
        id="book"
        className="water relative isolate py-16 text-white sm:py-24"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <h2 className="mb-4 font-display text-3xl font-extrabold tracking-tight sm:text-5xl">
              Book your cleaning
            </h2>
            <p className="mb-8 max-w-[44ch] text-white/90">
              Tell me when and where. I’ll confirm your appointment by text
              message.
            </p>
            <ol className="space-y-4">
              <li className="flex items-start gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-aqua font-display font-extrabold text-navy">
                  1
                </span>
                <span>
                  <strong>Fill out the form.</strong> Pick a service, a day and
                  a time window.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-aqua font-display font-extrabold text-navy">
                  2
                </span>
                <span>
                  <strong>Send it by text.</strong> Your message is ready to
                  send in one tap.
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-aqua font-display font-extrabold text-navy">
                  3
                </span>
                <span>
                  <strong>Enjoy your pool.</strong> I’ll confirm and take care
                  of the rest.
                </span>
              </li>
            </ol>
          </div>

          <div className="rounded-3xl bg-card p-6 text-ink shadow-2xl sm:p-8">
            {!submitted ? (
              <form className="grid gap-4" onSubmit={onSubmitAction}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1 text-sm font-bold">
                    Name
                    <input
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={name}
                      name="name"
                      required
                      autoComplete="name"
                      className="rounded-xl border border-line bg-bg px-4 py-3 text-base font-normal"
                    />
                  </label>
                  <label className="grid gap-1 text-sm font-bold">
                    Phone
                    <input
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      value={phone}
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      className="rounded-xl border border-line bg-bg px-4 py-3 text-base font-normal"
                    />
                  </label>
                </div>
                <label className="grid gap-1 text-sm font-bold">
                  Address or ZIP code
                  <input
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    value={address}
                    name="address"
                    required
                    autoComplete="street-address"
                    className="rounded-xl border border-line bg-bg px-4 py-3 text-base font-normal"
                  />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="grid gap-1 text-sm font-bold">
                    Service
                    <select
                      onChange={(e) => {
                        setService(e.target.value);
                      }}
                      value={service}
                      name="service"
                      className="rounded-xl border border-line bg-bg px-4 py-3 text-base font-normal"
                    >
                      <option value={"One-time clean"}>One-time clean</option>
                      <option value={"Weekly service"}>Weekly service</option>
                      <option value={"Bi-weekly service"}>
                        Bi-weekly service
                      </option>
                    </select>
                  </label>
                  <label className="grid gap-1 text-sm font-bold">
                    Preferred date
                    <input
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                      value={date}
                      type="date"
                      required
                      className="rounded-xl border border-line bg-bg px-4 py-3 text-base font-normal"
                    />
                  </label>
                </div>
                <fieldset>
                  <legend className="mb-1 text-sm font-bold">
                    Time window
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    <label className="chip cursor-pointer">
                      <input
                        className="sr-only"
                        type="radio"
                        onChange={() => {
                          setTime("Morning");
                        }}
                        checked={time == "Morning"}
                      />
                      <span className="block rounded-full border-2 border-line px-4 py-2 font-medium">
                        Morning
                      </span>
                    </label>
                    <label className="chip cursor-pointer">
                      <input
                        className="sr-only"
                        type="radio"
                        onChange={() => {
                          setTime("Afternoon");
                        }}
                        checked={time == "Afternoon"}
                      />
                      <span className="block rounded-full border-2 border-line px-4 py-2 font-medium">
                        Afternoon
                      </span>
                    </label>
                    <label className="chip cursor-pointer">
                      <input
                        className="sr-only"
                        type="radio"
                        onChange={() => {
                          setTime("Flexible");
                        }}
                        checked={time == "Flexible"}
                      />
                      <span className="block rounded-full border-2 border-line px-4 py-2 font-medium">
                        Flexible
                      </span>
                    </label>
                  </div>
                </fieldset>
                <label className="grid gap-1 text-sm font-bold">
                  Notes (optional)
                  <textarea
                    onChange={(e) => {
                      setNotes(e.target.value);
                    }}
                    name="notes"
                    rows={2}
                    className="rounded-xl border border-line bg-bg px-4 py-3 text-base font-normal"
                  ></textarea>
                </label>
                <button
                  className="rounded-full bg-navy px-7 py-3.5 font-bold text-white transition hover:-translate-y-0.5 hover:brightness-125 cursor-pointer"
                  type="submit"
                >
                  Request appointment
                </button>
              </form>
            ) : (
              <div className="grid gap-4" aria-live="polite">
                <div className="mx-auto mb-2 grid h-14 w-14 place-items-center rounded-full bg-aqua text-2xl text-navy">
                  ✓
                </div>
                <h3 className="mb-1 text-center font-display text-2xl font-extrabold">
                  Almost done!
                </h3>
                <p className="mb-2 text-center text-muted text-xl font-semibold">
                  Send this message to confirm your request:
                </p>

                <div className="relative mb-5">
                  <pre className="whitespace-pre-wrap rounded-2xl border border-line bg-bg p-4 pr-24 text-left font-body text-base">
                    {msg}
                  </pre>
                  <div className="absolute right-3 top-3 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      aria-label="Edit request"
                      title="Edit appoitment"
                      className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg border border-line bg-card text-ink hover:bg-line"
                    >
                      <EditIcon />
                    </button>
                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(msg);
                          setCopied(true);
                          setTimeout(() => setCopied(false), 2000);
                        } catch {}
                      }}
                      aria-label={copied ? "Message copied" : "Copy message"}
                      title={copied ? "Copied!" : "Copy message"}
                      className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg border border-line bg-card text-ink hover:bg-line"
                    >
                      {copied ? <CheckIcon /> : <CopyIcon />}
                    </button>
                  </div>
                </div>

                <p className="ps-4 font-bold">Send text by:</p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/${PHONE_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-bold text-navy hover:brightness-95"
                  >
                    <WhatsAppIcon />
                    WhatsApp
                  </a>
                  <a
                    href={`sms:${PHONE_NUMBER}?&body=${encodeURIComponent(msg)}`}
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-aqua px-6 py-3 font-bold text-navy hover:brightness-110"
                  >
                    <SmsIcon />
                    SMS
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Book;
