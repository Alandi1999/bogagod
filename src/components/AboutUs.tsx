import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: 'img/Oscar_2.webp',
      title: 'Oscar Tapia Mattar',
      subtitle: 'M.P. N° 4.667 | Abogado y Escribano',
      content: 'En Tapia Mattar & Asociados entendemos que cada situación legal merece un trato único y personalizado. Nuestro compromiso es acompañar a cada cliente con seriedad, dedicación y excelencia profesional, buscando siempre alcanzar la mejor solución posible.',
      year: 'Egresado 2022 - 2023'
    },
    {
      image: 'img/Agustin_2.webp',
      title: 'Agustín González Fiad',
      subtitle: 'M.P. N° 4.851 | Abogado',
      content: 'El estudio está conformado por profesionales formados en la Universidad Católica de Santiago del Estero. Nos distingue la responsabilidad, la transparencia y el trato cercano con cada persona que confía en nuestro trabajo.',
      year: 'Egresado 2023'
    },
    {
      image: 'img/estudio_6.webp',
      title: 'Nuestro Compromiso',
      subtitle: 'Excelencia y Dedicación',
      content: 'Nos enfocamos en brindar soluciones prácticas y efectivas, priorizando siempre los intereses de nuestros clientes. Trabajamos con dedicación tanto en instancias de negociación como en el ámbito judicial. Con visión moderna y compromiso, ponemos nuestra experiencia al servicio de cada caso.',
      year: 'Desde 2022'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section id="nosotros" className="py-20 bg-law-light">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Sobre Nosotros"
          subtitle="Un estudio jurídico con compromiso, dedicación y excelencia profesional"
        />

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="relative h-full">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-law-gold text-sm mb-2">{slides[currentSlide].year}</p>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">
                        {slides[currentSlide].title}
                      </h3>
                      <p className="text-xl text-white/90 mb-4">
                        {slides[currentSlide].subtitle}
                      </p>
                      <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-3xl">
                        {slides[currentSlide].content}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-law-gold w-8' : 'bg-black/30'
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs

