import React from 'react'
import Head from 'next/head'

import { Header } from '@imdev/components/Header'

type LayoutProps = {
  children: React.ReactNode
}

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
      <div className="w-full min-h-screen bg-indigo-1000">
        <Header />
        <main>
          <div className="px-6 md:px-36 lg:px-56">{children}</div>
        </main>
      </div>
    </>
  )
}
