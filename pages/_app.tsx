import type { AppProps } from 'next/app'

import Layout from '@/components/Layout'

import styles from '../styles/App.module.scss'
import '@/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <div className={styles.wrapper}>
        <Component {...pageProps} />
      </div>
    </Layout>
  )
}
