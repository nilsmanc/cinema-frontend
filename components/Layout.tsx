import Header from './Header'
import { ReactNode } from 'react'
import Footer from './Footer'

import styles from '../styles/Layout.module.scss'

type LayoutProps = {
  children?: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
