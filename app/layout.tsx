import * as React from 'react'
import type { Metadata } from 'next'
import '~/globals.css'
import { config } from '~/lib/config'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '~/components/theme-provider'
import { AnimationProvider } from '~/components/animation-provider'
import Header from '~/components/header'
import { Toaster } from '~/components/ui/toast'
import Footer from '~/components/footer'

interface RootLayoutProps {
  children: React.ReactNode
}

// default metadata for the site
export const metadata: Metadata = {
  applicationName: 'Moono',
  keywords: [
    'Product Designer',
    'UI UX Designer',
    'Web Designer',
    'Shopify Developer',
    'Web Developer',
    'Webflow Expert',
    'Framer Expert',
    'Squarespace',
    'Wix Developer',
    'Fullstack',
    'Mobile Developer',
    'Indie Hacker',
  ],
  authors: [{ name: 'Moono' }],
  publisher: 'Moono',
  creator: 'Moono',
  metadataBase: new URL(config.app.host),
  verification: {
    google: 'dROSrnOBtqR9nS3JhsxugvvrgQkfwO_8SEn72tfM7rY',
  },
}

export default function RootLayout({
  children,
}: Readonly<RootLayoutProps>): React.ReactElement {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className={''}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          <AnimationProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster />
          </AnimationProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
