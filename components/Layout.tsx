import Header from './Header'
import { ReactNode } from 'react'
import Footer from './Footer'

type LayoutProps = {
  children?: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
