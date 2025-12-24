import '../globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Preness - AI TOEFL ITP Measures',
  description: 'AI-powered TOEFL ITP measurement platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="bg-gray-50 text-gray-800 font-sans">
        {children}
      </body>
    </html>
  )
}
