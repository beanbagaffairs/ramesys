import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#07010f] text-gray-200">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-size-[26px_26px] opacity-25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-1/2 bottom-[-50%] h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_bottom,rgba(126,58,237,0.85)_0%,rgba(36,6,77,0.6)_35%,rgba(7,1,15,0)_75%)] blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 sm:px-10 lg:px-12">
        <div className="flex flex-col items-center gap-12 text-center">
          {/* Social Links */}
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-5">
              <Link
                href="https://www.instagram.com/ramesysinternational?igsh=ejhjMTIwOXVibG13&utm_source=qr"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-white hover:shadow-[0_0_20px_rgba(127,19,236,0.3)]"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  aria-hidden="true"
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                >
                  <rect height="18" rx="5" width="18" x="3" y="3" />
                  <path d="M16.5 7.5h.01" />
                  <circle cx="12" cy="12" r="3.5" />
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/company/ramesysitsolution/"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:border-primary/50 hover:bg-primary/10 hover:text-white hover:shadow-[0_0_20px_rgba(127,19,236,0.3)]"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  aria-hidden="true"
                  className="size-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4v14h-4v-14ZM8.5 8.5h3.83v2.02h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.63 4.74 6.06v7.98h-4v-7.08c0-1.68-.03-3.83-2.33-3.83-2.33 0-2.69 1.82-2.69 3.7v7.21h-4v-14Z" />
                </svg>
              </Link>
            </div>
            <Link
              href="mailto:contact@ramesys.co.uk"
              className="group flex items-center gap-3 rounded-full border border-white/5 bg-white/[0.03] px-6 py-2.5 text-sm text-gray-400 transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-white"
            >
              <svg
                className="size-5 text-primary/70 transition-colors group-hover:text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="tracking-wide">contact@ramesys.co.uk</span>
            </Link>
          </div>

          {/* Branding */}
          <Link
            href="/"
            className="group flex flex-col items-center gap-6 text-white transition hover:opacity-90"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 -z-10 bg-primary/40 blur-2xl group-hover:bg-primary/60 transition-all duration-700 rounded-full scale-150" />
              <img
                src="/logo.png"
                alt="RAMESYS Logo"
                className="relative z-10 h-20 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <span className="text-4xl font-bold tracking-[0.5em] uppercase gradient-text">
              RAMESYS
            </span>
          </Link>

          {/* Copyright & Policy */}
          <div className="flex flex-col items-center gap-4 text-sm">
            <p className="text-gray-500/80">
              © 2026 RAMESYS. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-gray-600 hover:text-primary transition-colors text-xs"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 hover:text-primary transition-colors text-xs"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
