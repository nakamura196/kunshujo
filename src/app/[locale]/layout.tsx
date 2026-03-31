import type {Metadata} from 'next'
import {NextIntlClientProvider} from 'next-intl'
import {getMessages, setRequestLocale} from 'next-intl/server'
import {notFound} from 'next/navigation'
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
      template: `%s | ${SITE.name[typedLocale]}`,
    },
    description: SITE.description[typedLocale],
    metadataBase: new URL(SITE.url),
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

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NextIntlClientProvider messages={messages}>
        <Header />
        {children}
        <Footer />
      </NextIntlClientProvider>
    </ThemeProvider>
  )
}
