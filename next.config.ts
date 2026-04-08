import type { NextConfig } from 'next'
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
import createNextIntlPlugin from 'next-intl/plugin'

initOpenNextCloudflareForDev()

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
}

export default withNextIntl(nextConfig)
