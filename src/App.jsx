import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tradition from './pages/Tradition'
import Consciousness from './pages/Consciousness'
import SiddharScience from './pages/SiddharScience'
import GurukulamLife from './pages/GurukulamLife'
import AboutGuru from './pages/AboutGuru'
import Contact from './pages/Contact'
import ScrollToTop from "./components/ScrollToTop";

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"              element={<Home />} />
        <Route path="/tradition"     element={<Tradition />} />
        <Route path="/consciousness" element={<Consciousness />} />
        <Route path="/science"       element={<SiddharScience />} />
        <Route path="/gurukulam"     element={<GurukulamLife />} />
        <Route path="/about"         element={<AboutGuru />} />
        <Route path="/contact"       element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <AnimatedRoutes />
      <Footer />
    </BrowserRouter>
  )
}
