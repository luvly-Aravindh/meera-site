import { Navigate, Route, Routes } from 'react-router-dom'
import Header from './compoents/Header'
import Hero from './compoents/Hero'
import Seondary from './compoents/Seondary'
import Third from './compoents/Third'
import Fourth from './compoents/Fourth'
import Slider from './Slider'
import Autoslider from './compoents/Autoslider'
import Leadership from './Leadership'
import Reality from './Reality'
import Reminder from './Reminder'
import Green from './compoents/Green'
import Footer from './Footer'
import Video from './compoents/Video'
import New from './compoents/New'
import SignaturePrograms from './pages/SignaturePrograms'
import WhyWorkWithMe from './pages/WhyWorkWithMe'
import TheMeeraGroverEffect from './pages/TheMeeraGroverEffect'
import Blogs from './pages/Blogs'
import './App.css'
import '@fontsource/onest'
import '@fontsource/gantari'
import '@fontsource/gantari/400.css'
import '@fontsource/gantari/700.css'

function HomePage() {
  return (
    <>
      <Hero />
      <Seondary />
      <Third />
      <Video />
      <Fourth />
      <New />
      <Slider />
      <Autoslider />
      <Leadership />
      <Reality />
      <Reminder />
      <Green />
    </>
  )
}

function InnerPage({ title }) {
  return (
    <main className="mx-auto max-w-[95rem] px-4 sm:px-12 py-16">
      <h1 className="text-3xl md:text-5xl font-bold text-neutral-900">{title}</h1>
      <p className="mt-4 text-base md:text-lg text-neutral-600 max-w-3xl">
        This is the {title} inner page. Replace this with your final section design and content.
      </p>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header />
            <HomePage />
            <Footer />
          </>
        }
      />

      <Route
        path="/signature-programs"
        element={
          <>
            <Header />
            <SignaturePrograms />
            <Footer />
          </>
        }
      />
      <Route
        path="/why-work-with-me"
        element={
          <>
            <Header />
            <WhyWorkWithMe />
            <Footer />
          </>
        }
      />
      <Route
        path="/meera-grover-effect"
        element={
          <>
            <Header />
            <TheMeeraGroverEffect />
            <Footer />
          </>
        }
      />
      <Route
        path="/blogs"
        element={
          <>
            <Header />
            <Blogs />
            <Footer />
          </>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
