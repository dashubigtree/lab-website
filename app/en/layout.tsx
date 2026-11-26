import type { Metadata } from 'next'
import SiteLayout from '@/components/SiteLayout'

export const metadata: Metadata = {
  title: 'AI × Intelligent Transformation Lab',
  description: 'AI × Intelligent Transformation Lab, National Taiwan University of Science and Technology',
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayout locale="en">{children}</SiteLayout>
}
