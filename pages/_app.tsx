import type { AppProps } from 'next/app'

import { GlobalStyles } from '@/styles/globals'
import { Layout } from '@/sections'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
