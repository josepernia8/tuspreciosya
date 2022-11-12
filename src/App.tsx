import React, {lazy, Suspense} from "react"
import {Route, Routes} from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Loader from "./components/Loader"

const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home"))
const About = lazy(() => import(/* webpackChunkName: "about" */ "./pages/About"))
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ "./pages/Contact"))
const FinancialPlanning = lazy(() => import(/* webpackChunkName: "financialPlanning" */ "./pages/FinancialPlanning"))
const ShoppingList = lazy(() => import(/* webpackChunkName: "ShoppingList" */ "./pages/ShoppingList"))

function App(): React.ReactElement {
  return (
    <div id="all-container" className="flex flex-col min-h-screen justify-between">
      <Header />
      <Suspense fallback={<Loader size="8vw" extraStyles={{position: "absolute", top: "45%", left: "45%"}} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="financial-planning" element={<FinancialPlanning />} />
          <Route path="shopping-list" element={<ShoppingList />} />
          <Route path="services" element={<div className="text-center text-4xl">Under Construction...</div>} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
