import React from 'react'
import Head from 'next/head'
import localFont from '@next/font/local'

import { Header } from '@imdev/components/Header'

type LayoutProps = {
  children: React.ReactNode
}

const daysOneFont = localFont({
  src: '../../../public/fonts/DaysOne-Regular.ttf',
  variable: '--days-one'
})

const varelaRound = localFont({
  src: '../../../public/fonts/VarelaRound-Regular.ttf',
  variable: '--varela-round'
})

export const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>imdev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="imdev blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <main className={`${daysOneFont.className} ${varelaRound.className}`}>
        <div className="w-full min-h-screen bg-indigo-1000 h-100vw px-6 md:px-36 lg:px-56 flex flex-col">
          {children}
        </div>
      </main>
    </>
  )
}
