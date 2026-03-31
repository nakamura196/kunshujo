import Link from 'next/link'

export default function RootPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-50">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-amber-300">
          Kunshujo
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
          電子展示『捃拾帖』（拡張版）
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
          Next.js 版の入口です。言語を選択してください。
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            href="/ja/"
            className="rounded-full bg-amber-300 px-6 py-3 font-medium text-stone-950 transition hover:bg-amber-200"
          >
            日本語
          </Link>
          <Link
            href="/en/"
            className="rounded-full border border-stone-700 px-6 py-3 font-medium text-stone-100 transition hover:border-stone-500"
          >
            English
          </Link>
        </div>
      </div>
    </main>
  )
}
