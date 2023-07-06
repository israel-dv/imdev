import React from 'react'
import Head from 'next/head'

import { Header } from '@imdev/components/Header'
import { lilitaOne, outfit, outfitBlack } from '@imdev/utils/constants/fonts'

type LayoutProps = {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps): React.ReactElement => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" lang="es-mx" />
        <title>imdev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="imdev blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full flex flex-col bg-black-16">
        <main
          className={`${lilitaOne.variable} ${outfit.className} flex justify-center flex-1`}
        >
          <div className="h-full w-full max-w-4xl phone:px-5 lg:px-0 py-4">
            {children}
          </div>
        </main>
      </div>
    </>
  )
}
