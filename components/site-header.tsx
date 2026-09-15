import { siteConfig } from '@/lib/site-config'
import { Logo } from '@/components/logo'

export function SiteHeader() {
  return (
    <header className="border-b border-white/10 bg-[#0d1b2d] text-white">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5 lg:px-10">
        <Logo />
        <div className="hidden flex-col items-end gap-3 md:flex">
          <span className="font-mono text-[13px] font-bold uppercase tracking-[0.2em] text-white/45">
            {siteConfig.orgName}
          </span>
          <nav
            aria-label="Main navigation"
            className="flex items-center gap-8 text-[14px] font-semibold uppercase tracking-[0.16em] text-white/65"
          >
            <a href={siteConfig.parentSiteUrl} className="transition-colors hover:text-white">
              Home
            </a>
            <a href="/" className="transition-colors hover:text-white">
              Current Roles
            </a>
            <a href={`mailto:${siteConfig.contactEmail}`} className="transition-colors hover:text-white">
              Contact
            </a>
          </nav>
        </div>
        <a
          href="#apply"
          className="border border-[#3e9bd7] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#3e9bd7] md:hidden"
        >
          Apply
        </a>
      </div>
    </header>
  )
}
