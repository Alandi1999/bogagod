import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Button from './ui/Button'

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.getElementById('contacto')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleScrollDown = () => {
    const aboutSection = document.getElementById('nosotros')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-law-dark to-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-law-gold rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-law-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="flex justify-center mb-0"
          >
            <img 
              src="img/Logo_2.png" 
              alt="Estudio Tapia Mattar & Asociados" 
              className="h-48 md:h-80 w-auto"
            />
          </motion.div>

         

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-4"
          >
            Seriedad, Dedicación y Excelencia Profesional
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-white/80 mb-12 max-w-2xl mx-auto"
          >
            Acompañamiento jurídico integral con compromiso y transparencia, 
            brindando soluciones prácticas y efectivas para cada caso
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
              variant="primary" 
              onClick={handleContactClick}
              aria-label="Contactar ahora"
            >
              Consulta
            </Button>
            <Button 
              variant="outline"
              onClick={handleScrollDown}
              aria-label="Conocer más"
            >
              Conocer Más
            </Button>
          </motion.div>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <span className="text-white/90 text-sm md:text-base">
                📍 Loreto, Santiago del Estero, Argentina
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-law-gold rounded-full"
        aria-label="Desplazar hacia abajo"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-law-gold" />
        </motion.div>
      </motion.button>
    </section>
  )
}

export default Hero

