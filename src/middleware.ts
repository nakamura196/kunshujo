import {NextRequest, NextResponse} from 'next/server'
import createMiddleware from 'next-intl/middleware'
import {routing} from '@/i18n/routing'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  const {pathname} = request.nextUrl

  // Skip i18n middleware for API routes, static files, and Next.js internals
  if (
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    /\.\w+$/.test(pathname)
  ) {
    return NextResponse.next()
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
