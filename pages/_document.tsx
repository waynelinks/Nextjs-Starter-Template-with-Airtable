import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preload" href="/assets/fonts/Poppins-Bold.ttf" as='font' crossOrigin='anonymous' />
          <link rel="preload" href="/assets/fonts/Poppins-SemiBold.ttf" as='font' crossOrigin='anonymous' />
          <link rel="preload" href="/assets/fonts/Poppins-Regular.ttf" as='font' crossOrigin='anonymous' />
        </Head>
        <body className='loading'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
