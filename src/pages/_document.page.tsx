import { Html, Head, Main, NextScript } from 'next/document'
import { lilitaOne, outfit } from '@imdev/utils/constants/fonts'

export default function Document() {
  return (
    <Html lang="en" className={`${lilitaOne.variable} ${outfit.variable}`}>
      <Head />
      <body className={`${lilitaOne.variable} ${outfit.variable}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
