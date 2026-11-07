import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClipLaunch — Pay-per-view short-form clipping',
  description:
    'ClipLaunch runs pay-per-view clipping campaigns. 50,000+ clippers turn your content into hundreds of short-form clips across TikTok, Shorts, and Reels. You only pay for the views your clips actually earn.',
  openGraph: {
    title: 'ClipLaunch — Pay-per-view short-form clipping',
    description: '288M+ views delivered. $0.06 avg CPM. You pay only for real views.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
