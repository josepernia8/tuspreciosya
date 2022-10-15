import React, {lazy, Suspense} from "react"
import {Route, Routes} from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Loader from "./components/Loader"

const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home"))
const About = lazy(() => import(/* webpackChunkName: "about" */ "./pages/About"))
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ "./pages/Contact"))

const InstallBanner = () => (
  <div className="block__install" id="BlockInstall">
    <div className="inner">
      <div className="close" id="BlockInstallClose">
        <span>
          <img src="/img/icon-close.png" />
        </span>
      </div>
      <div className="logo">
        <img src="/img/logo-pwa.png" />
      </div>
      <div className="name">
        <span className="title">Mountlift.com</span>
        <span className="description">Ski & Snowboard</span>
      </div>
      <div className="cta">
        <button id="BlockInstallButton" className="btn btn-outline">
          Install
        </button>
      </div>
    </div>
  </div>
)

function App(): React.ReactElement {
  return (
    <div id="all-container" className="flex flex-col min-h-screen justify-between">
      <Header />
      <Suspense fallback={<Loader size="8vw" extraStyles={{position: "absolute", top: "45%", left: "45%"}} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="services" element={<div className="text-center text-4xl">Under Construction...</div>} />
        </Routes>
      </Suspense>
      <InstallBanner />
      <Footer />
    </div>
  )
}

export default App
