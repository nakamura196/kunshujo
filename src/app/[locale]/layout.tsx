import type {Metadata} from 'next'
import {NextIntlClientProvider} from 'next-intl'
import {getMessages, setRequestLocale} from 'next-intl/server'
import {notFound} from 'next/navigation'
import Script from 'next/script'
import {ThemeProvider} from 'next-themes'

import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import {Locale, SITE} from '@/constants/site'
import {routing} from '@/i18n/routing'

import './globals.css'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{locale: string}>
}): Promise<Metadata> {
  const {locale} = await params
  const typedLocale = locale as Locale

  return {
    title: {
      default: SITE.name[typedLocale],
      template: `%s - ${SITE.name[typedLocale]}`,
    },
    description: SITE.description[typedLocale],
    openGraph: {
      siteName: SITE.name[typedLocale],
      title: SITE.name[typedLocale],
      description: SITE.description[typedLocale],
      url: SITE.url,
      type: 'website',
      locale: typedLocale === 'ja' ? 'ja_JP' : 'en_US',
      images: [{url: '/img/ogp/home.jpg'}],
    },
    twitter: {
      card: 'summary',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{locale: string}>
}) {
  const {locale} = await params

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const messages = await getMessages()
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NextIntlClientProvider messages={messages}>
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
        <Header />
        {children}
        <Footer />
      </NextIntlClientProvider>
    </ThemeProvider>
  )
}
