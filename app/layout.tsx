import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Burrows&Fargion',
  description: 'Official website of choreographer Jonathan Burrows and composer Matteo Fargion.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="arabictypesettingw23-re text-lg">{children}</body>
    </html>
  )
}
