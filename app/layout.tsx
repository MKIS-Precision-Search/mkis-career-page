import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Current Roles | MKIS Precision Search',
  description: 'Open technical executive search roles in semiconductor, aerospace, and defense, presented by MKIS Precision Search.',
  generator: 'MKIS Precision Search',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0d1b2d',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
