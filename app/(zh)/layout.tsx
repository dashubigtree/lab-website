import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'
import { siteUrl } from '@/i18n/metadata'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: '人工智慧與智能轉型實驗室',
  description: '臺灣科技大學-人工智慧與智能轉型實驗室',
}

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayout locale="zh">{children}</SiteLayout>
}
