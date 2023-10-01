import type { Metadata } from 'next';
import { Providers } from './providers';
import { Roboto } from 'next/font/google';
import Header from 'components/Header/Header';
import Head from 'next/head';
import './globals.css';
import SocialMediaFooer from 'components/SocialMediaFooer/SocialMediaFooer';

const roboto = Roboto({
  weight: ["400", '100', '300'],
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
    <html lang="en" className={roboto.className}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Providers>
        <body>
          <Header />
          <div className='layout_container'>
            {children}
          </div>
          <SocialMediaFooer/>
        </body>
      </Providers>
      {/* {children} */}
    </html>
  )
}

