import type { AppProps } from 'next/app'

import { GlobalStyles } from '@/styles/globals'
import { Layout } from '@/components'

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
