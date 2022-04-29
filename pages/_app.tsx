import '../styles/globals.css'
import type { AppProps } from 'next/app'
import QueryWrapper from '@src/ReactQuery/QueryWrapper'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryWrapper>
      <Component {...pageProps} />
    </QueryWrapper>
  )
}

export default MyApp
