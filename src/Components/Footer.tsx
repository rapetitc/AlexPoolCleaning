import { useInfoContext } from "../Context/InfoContext.tsx";
import {
  WhatsAppIcon,
  PhoneIcon,
  InstagramIcon,
  FacebookIcon,
} from "./Icons.tsx";

const socialClass =
  "inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-5 py-2.5 text-base font-bold text-white transition hover:bg-white/10";

function Footer() {
  const {
    PHONE_DISPLAY,
    PHONE_LINK,
    WHATSAPP_LINK,
    INSTAGRAM_URL,
    FACEBOOK_URL,
  } = useInfoContext();

  return (
    <footer className="bg-navy px-5 py-10 text-sm text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        {/* 1. Contact */}
        <div className="text-center md:text-left">
          <h2 className="mb-4 font-display text-4xl font-extrabold text-white sm:text-4xl">
            Contact
          </h2>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-bold text-navy transition hover:brightness-95"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a
              href={PHONE_LINK}
              className="inline-flex items-center gap-2 rounded-full bg-aqua px-6 py-3 text-base font-bold text-navy transition hover:brightness-110"
            >
              <PhoneIcon />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        {/* 2. Redes sociales */}
        <div className="text-center md:text-left">
          <p className="mb-3 text-2xl font-bold text-white">
            Alex Pool Cleaning on
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-start">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={socialClass}
            >
              <InstagramIcon />
              Instagram
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={socialClass}
            >
              <FacebookIcon />
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* 3. Copyright + créditos */}
      <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-center gap-1 border-t border-white/15 pt-6 sm:flex-row sm:gap-3">
        <p>© 2026 Alex Pool Cleaning. All rights reserved.</p>
        <span className="hidden sm:inline" aria-hidden="true">
          ·
        </span>
        <p>Developed by @rapetitc</p>
      </div>
    </footer>
  );
}

export default Footer;
