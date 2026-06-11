import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'UniqJobs – Software Training & Placement Institute in Chennai',
  description:
    'UniqJobs is a leading software training institute in Chennai offering IT courses with 100% placement support. Java, Python, Full Stack, DevOps & more. Established 2007. ISO certified.',
  keywords: [
    'software training institute in Chennai',
    'full stack developer course with placement',
    'IT training with job assistance',
    'best software training institute in Tamil Nadu',
    'Java full stack training Chennai',
    'Python training with placement',
    'UniqJobs',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'UniqJobs – Software Training & Placement Institute',
    description: 'Learn industry-ready software skills with real-time projects. 100% Placement Support. 25,000+ Careers Launched.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <Script id="google-tag-manager" strategy="beforeInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KJ3TB9V7');`}
      </Script>
      <body className="font-sans antialiased bg-black text-white">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KJ3TB9V7"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
