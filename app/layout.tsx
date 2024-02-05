import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jose Lara: From Code to Company - Software & Startup Expertise',
  description:
    'Seasoned software engineer with a flair for entrepreneurship. Discover a portfolio that showcases a blend of technical prowess & visionary leadership.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`font-sans antialiased ${inter.className}`}>
        <div className='fixed inset-0 flex justify-center sm:px-8'>
          <div className='flex w-full max-w-7xl lg:px-8'>
            <div className='w-full bg-white ring-1 ring-zinc-100'></div>
          </div>
        </div>
        <div className='relative'>
          {children}
          {/* Add your footer component here */}
        </div>
      </body>
    </html>
  )
}
