import Link from 'next/link';
import { elevnWordmark } from './brand';

const linkStyle = 'text-muted no-underline transition-colors hover:text-white';

export default function SiteFooter() {
  return (
    <footer className="mt-8 bg-obsidian">
      <div className="mx-auto w-[calc(100%_-_36px)] max-w-[1240px] border-t border-line py-8 sm:w-[calc(100%_-_64px)] sm:py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col items-start gap-3">
            <Link href="/" aria-label="Elevn home" className="inline-flex">
              <img src={elevnWordmark} alt="elevn." width={102} className="block h-auto w-[102px]" />
            </Link>
            <small className="text-xs text-[#909198]">© {new Date().getFullYear()} ElevenStack LLC</small>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px]">
            <a href="mailto:support@elevenstack.cc" className="font-medium text-signal no-underline transition-colors hover:text-[#ff9674]">Reach out to support</a>
            <Link href="/legal/privacy" className={linkStyle}>Privacy</Link>
            <Link href="/legal/terms" className={linkStyle}>Terms</Link>
            <a href="https://app.elevnos.com/legal/sms-consent-demo" className={linkStyle}>SMS consent</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
