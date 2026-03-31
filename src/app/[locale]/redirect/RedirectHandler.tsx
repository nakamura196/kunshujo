'use client'

import {useEffect} from 'react'
import {useSearchParams} from 'next/navigation'
import {useRouter} from '@/i18n/routing'

export default function RedirectHandler() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const p = searchParams?.get('p') || ''

  useEffect(() => {
    if (p) {
      const path = '/' + p.replace(/^\//, '')
      router.replace(path)
    } else {
      router.replace('/')
    }
  }, [p, router])

  return null
}
