import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import './layout.css'

export default function Layout(props) {
  return (
    <div className="layout">
      <Header />

      <main className="main">{props.children}</main>

      <Footer />
    </div>
  )
}
