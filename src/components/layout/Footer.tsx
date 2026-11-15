/** Editorial footer with 102-country map scope, official disclaimer, MIT/CC BY 4.0 license note, and GitHub repository link. */
export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-footer)] py-4 px-3.5 sm:px-8 text-[11px] text-[var(--text-sub)]">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2.5 lg:gap-4">
        <div className="space-y-0.5 leading-relaxed">
          <p className="font-medium text-[var(--text-main)]">
            102 国平铺世界地图 &amp; 通道分层指南 · 各国移民局、外交部及官方指定签证中心公开指引（2026年11月核对），政策与费率请以官网实时公布为准。
          </p>
          <p>
            开源协议：代码基于 MIT 许可，102 国签证指南数据集基于 CC BY 4.0 许可。
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 shrink-0 font-mono-num">
          <span>CHINA DIY VISA PORTAL · 102 DESTINATIONS</span>
          <span aria-hidden="true">|</span>
          <a
            id="footer-github-link"
            href="https://github.com/Chain813/china-diy-visa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub 开源仓库 Chain813/china-diy-visa"
            className="inline-flex items-center gap-1.5 text-[var(--text-main)] hover:text-[var(--accent-red)] transition-colors font-medium"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 fill-current"
            >
              <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span>Chain813/china-diy-visa</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
