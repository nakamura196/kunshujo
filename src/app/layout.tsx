import type {Metadata} from 'next'

import {SITE} from '@/constants/site'

export const metadata: Metadata = {
  icons: {
    icon: [
      {url: '/img/icons/favicon-16.png', sizes: '16x16', type: 'image/png'},
      {url: '/img/icons/favicon-32.png', sizes: '32x32', type: 'image/png'},
      {url: '/img/icons/favicon-48.png', sizes: '48x48', type: 'image/png'},
      {url: '/img/icons/favicon-72.png', sizes: '72x72', type: 'image/png'},
    ],
    apple: [
      {url: '/img/icons/apple-touch-icon.png', sizes: '180x180'},
    ],
  },
  metadataBase: new URL(SITE.url),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
