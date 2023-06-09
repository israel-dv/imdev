import type { AppProps } from 'next/app'

import { Layout } from '@imdev/components/Layout'
import '@imdev/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
