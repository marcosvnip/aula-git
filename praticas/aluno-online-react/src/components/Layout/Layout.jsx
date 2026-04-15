import Header from "../Header/Header.jsx"
import Sidebar from "../Sidebar/Sidebar.jsx"
import "./Layout.css"

function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <Sidebar />
      <main className="content">
        {children}
      </main>
    </div>
  )
}

export default Layout