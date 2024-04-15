import type { Metadata } from 'next';
import { Providers } from './providers';
import { Source_Code_Pro } from 'next/font/google';
import Header from 'components/Header/Header';
import Head from 'next/head';
import SocialMediaFooer from 'components/SocialMediaFooer/SocialMediaFooer';
import './globals.css';


const sourceCodePro = Source_Code_Pro({
  weight: ["400", '200', '300'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ridouane tansouft',
  description: 'Portfolio Ridouane tansouft',
  icons: {
    icon: './favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sourceCodePro.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Providers>
        <body>
          <Header />
          <div className='layout_container'>
            {children}
          </div>
          <SocialMediaFooer />
        </body>
      </Providers>
    </html>
  )
}
