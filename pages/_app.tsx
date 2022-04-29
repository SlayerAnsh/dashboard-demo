import '../styles/globals.css'
import type { AppProps } from 'next/app'
import QueryWrapper from '@src/ReactQuery/QueryWrapper'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <html data-theme="light">
      <QueryWrapper>
        <Component {...pageProps} />
      </QueryWrapper>
    </html>
  )
}

export default MyApp
