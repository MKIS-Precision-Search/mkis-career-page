import { siteConfig } from '@/lib/site-config'

export function Logo() {
  return (
    <a href="/" aria-label={`${siteConfig.orgName} home`}>
      <img
        src={siteConfig.logoUrl || '/placeholder.svg'}
        alt={`${siteConfig.orgName} logo`}
        width={200}
        height={200}
        className="size-24 object-contain sm:size-[114px]"
      />
    </a>
  )
}
