'use client'

import {useEffect, useState} from 'react'
import {useTheme} from 'next-themes'

export function ToggleTheme() {
  const {resolvedTheme, setTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme)}
      className="rounded-full border px-3 py-2 text-sm"
      style={{borderColor: 'var(--border)', background: 'var(--panel)'}}
    >
      {mounted ? (resolvedTheme === 'dark' ? 'Light' : 'Dark') : 'Theme'}
    </button>
  )
}
