import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  return (
    <div className="max-w-4xl mx-auto pt-16">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
