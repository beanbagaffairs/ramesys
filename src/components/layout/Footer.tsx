import Link from 'next/link';

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
        <div className="flex items-center justify-between text-sm">
          <p className="text-gray-400 md:justify-self-start">
            © 2025 Ramesys. All Rights Reserved.
          </p>

          <Link
            href="/"
            className="group mx-auto flex items-center gap-3 text-white transition hover:opacity-90 md:mx-0"
          >
            <div className="relative flex items-center justify-center">
              {/* Prominent Shiny/Glow Effect */}
              <div className="absolute inset-0 -z-10 bg-purple-500/50 blur-xl group-hover:bg-purple-500/70 transition-all duration-500 rounded-full scale-150" />
              <img 
                src="/logo.png" 
                alt="Ramesys Logo" 
                className="relative z-10 h-12 w-auto object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]"
              />
            </div>
            <span className="text-2xl font-semibold tracking-widest uppercase">
              Ramesys
            </span>
          </Link>

          <div className="flex flex-col items-center gap-4 text-sm md:flex-row md:justify-end md:text-right">
            <div className="flex flex-col items-end gap-1 text-gray-400 mr-4">
              <p>B1, 2nd floor, kali krishna abasan,</p>
              <p>galasara road, bally, howrah.</p>
            </div>
            <div className="flex items-center gap-5 text-gray-400">
              <Link
                href="https://www.instagram.com"
                className="transition hover:text-white"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  aria-hidden="true"
                  className="size-5"
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
                href="https://www.linkedin.com"
                className="transition hover:text-white"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  aria-hidden="true"
                  className="size-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.98 3.5c0 1.38-1.11 2.5-2.48 2.5S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8.5h4v14h-4v-14ZM8.5 8.5h3.83v2.02h.05c.53-1 1.82-2.06 3.74-2.06 4 0 4.74 2.63 4.74 6.06v7.98h-4v-7.08c0-1.68-.03-3.83-2.33-3.83-2.33 0-2.69 1.82-2.69 3.7v7.21h-4v-14Z" />
                </svg>
              </Link>
            </div>
            <Link
              href="mailto:contact@ramesys.com"
              className="text-gray-300 transition hover:text-white"
            >
              contact@ramesys.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
