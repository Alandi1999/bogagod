import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import PracticeAreas from './components/PracticeAreas'
import WhyChooseUs from './components/WhyChooseUs'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <PracticeAreas />
        <WhyChooseUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App

