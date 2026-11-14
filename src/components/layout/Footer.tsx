export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-footer)] py-4 px-3.5 sm:px-8 text-[11px] text-[var(--text-sub)]">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p>
          资料来源：各国移民局、外交部及官方指定签证中心公开指引（2026年11月核对）。政策与费率请以各使领馆官网实时公布为准。
        </p>
        <div className="flex items-center gap-2 shrink-0 font-mono-num">
          <span>CHINA DIY VISA PORTAL · 102 DESTINATIONS</span>
          <span aria-hidden="true">|</span>
          <a
            id="footer-x-link"
            href="https://x.com/routeking_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[var(--text-main)] hover:text-[var(--accent-red)] transition-colors font-medium"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 fill-current"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span>@routeking_</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
