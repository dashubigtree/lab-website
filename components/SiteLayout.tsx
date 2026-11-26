import Script from 'next/script'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

import { Box, Container } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'

import NavBar from './NavBar'
import Partners from './Partners'
import Footer from './Footer'
import { htmlLang, type Locale } from '@/i18n/config'
import { LocaleProvider } from '@/i18n/LocaleProvider'

// 中文與英文共用的網頁外框；兩個根版面只差在傳入的語言
export default function SiteLayout({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  return (
    <html lang={htmlLang[locale]}>
      <head>
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-EG3XE7K718" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {dataLayer.push(arguments); }
          gtag('js', new Date());

          gtag('config', 'G-EG3XE7K718');
        `}
        </Script>
        <link rel="icon" href='/favicon.ico' sizes="any" />
        <link rel='icon' href='/coin.png' />
        <link rel="apple-touch-icon" href="/coin-apple-icon.png" />
      </head>
      <ThemeProvider theme={theme}>
        <body className={inter.className} style={{ margin: 0 }}>
          <LocaleProvider locale={locale}>
            <Container disableGutters maxWidth={false} sx={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column' }}>
              <NavBar />
              <Box sx={{ mx: { xs: 3, sm: 6, md: 6, lg: 10 }, mb: { xs: 3, md: 2 }, mt: 8 }}>
                {children}
              </Box>
              <Box flex={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Partners />
              </Box>
              <Box flex={1} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                <Footer />
              </Box>
            </Container>
          </LocaleProvider>
        </body>
      </ThemeProvider>
    </html>
  )
}
