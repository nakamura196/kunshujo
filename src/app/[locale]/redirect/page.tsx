import {Suspense} from 'react'
import {routing} from '@/i18n/routing'
import RedirectHandler from './RedirectHandler'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}))
}

export default function RedirectPage() {
  return (
    <Suspense fallback={null}>
      <RedirectHandler />
    </Suspense>
  )
}
