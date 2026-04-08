import {useTranslations} from 'next-intl'

import {Link} from '@/i18n/routing'

export default function Footer() {
  const t = useTranslations('Nav')

  return (
    <div>
      <footer
        className="border-t py-8"
        style={{borderColor: 'var(--border)', background: 'var(--panel-strong)'}}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 text-sm sm:grid-cols-4 sm:px-6">
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider">{t('about')}</h3>
            <ul className="space-y-2">
              <li><Link href="/page/about" className="hover:underline">{t('about')}</Link></li>
              <li><Link href="/page/dataset" className="hover:underline">データセット</Link></li>
              <li><Link href="/page/function" className="hover:underline">機能</Link></li>
              <li><Link href="/page/reuse" className="hover:underline">利用条件</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider">{t('search')}</h3>
            <ul className="space-y-2">
              <li><Link href="/search" className="hover:underline">{t('search')}</Link></li>
              <li><Link href="/search/entity" className="hover:underline">{t('entity')}</Link></li>
              <li><Link href="/search/object" className="hover:underline">{t('object')}</Link></li>
              <li><Link href="/example" className="hover:underline">{t('example')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider">Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/map" className="hover:underline">{t('map')}</Link></li>
              <li><Link href="/vis" className="hover:underline">{t('visualization')}</Link></li>
              <li><Link href="/category" className="hover:underline">{t('category')}</Link></li>
              <li><Link href="/history" className="hover:underline">{t('history')}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.lib.u-tokyo.ac.jp/" target="_blank" rel="noreferrer" className="hover:underline">
                  東京大学附属図書館 ↗
                </a>
              </li>
              <li>
                <a href="https://da.dl.itc.u-tokyo.ac.jp/" target="_blank" rel="noreferrer" className="hover:underline">
                  UTokyo Digital Archive ↗
                </a>
              </li>
              <li>
                <a href="https://kunshujo.dl.itc.u-tokyo.ac.jp/" target="_blank" rel="noreferrer" className="hover:underline">
                  電子展示『捃拾帖』 ↗
                </a>
              </li>
              <li>
                <a href="https://da.dl.itc.u-tokyo.ac.jp/portal/collection/tanaka/" target="_blank" rel="noreferrer" className="hover:underline">
                  田中芳男・博物学コレクション ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <footer className="py-6 text-center text-xs text-stone-500 dark:text-stone-400" style={{background: 'var(--panel)'}}>
        <p>東京大学附属図書館　学術資産アーカイブ化推進室</p>
        <p className="mt-1">E-mail: digital-archive [at] lib.u-tokyo.ac.jp</p>
      </footer>
    </div>
  )
}
