import React from 'react'
import Head from 'next/head'
import localFont from '@next/font/local'

import { Header } from '@imdev/components/Header'

type LayoutProps = {
  children: React.ReactNode
}

const outfit = localFont({
  src: [
    { path: '../../../public/fonts/Outfit-Black.ttf', weight: '700' },
    { path: '../../../public/fonts/Outfit-Regular.ttf', weight: '400' }
  ],
  variable: '---outfit'
})

const lilitaOne = localFont({
  src: '../../../public/fonts/LilitaOne-Regular.ttf',
  variable: '--lilita-one'
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
      <main
        className={`${lilitaOne.variable} ${outfit.className} h-full px-6 md:px-36 lg:px-56 flex flex-col overflow-y-auto`}
      >
        {children}
      </main>
    </>
  )
}
