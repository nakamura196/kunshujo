type PageLayoutProps = {
  title: string
  description?: string
  children: React.ReactNode
}

export default function PageLayout({
  title,
  description,
  children,
}: PageLayoutProps) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <div
        className="rounded-[2rem] border p-8 shadow-sm sm:p-10"
        style={{borderColor: 'var(--border)', background: 'var(--panel-strong)'}}
      >
        <div className="max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 text-base leading-8 text-stone-700 dark:text-stone-300">
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </main>
  )
}
