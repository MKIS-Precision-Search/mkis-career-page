import { Link2 } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#0d1b2d] text-white">
      <div className="mx-auto flex max-w-[1240px] flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <Logo />
        <div className="flex flex-col gap-3 text-xs text-white/60 sm:flex-row sm:items-center sm:gap-8">
          <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-white">
            {siteConfig.contactEmail}
          </a>
          <span className="hidden h-4 w-px bg-white/20 sm:block" aria-hidden="true" />
          <a
            href={siteConfig.linkedinUrl}
            aria-label={`${siteConfig.orgName} on LinkedIn`}
            className="flex items-center gap-2 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Link2 className="size-4" aria-hidden="true" /> LinkedIn
          </a>
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
          © {new Date().getFullYear()} {siteConfig.orgName}
        </p>
      </div>
    </footer>
  )
}
