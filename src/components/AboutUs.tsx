import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxSlide, setLightboxSlide] = useState(0)

  const slides = [
    {
      image: 'img/Oscar_2.webp',
      title: 'Oscar Tapia Mattar',
      subtitle: 'M.P. N° 4.667 | Abogado y Escribano',
      content: 'En Tapia Mattar & Asociados entendemos que cada situación legal merece un trato único y personalizado. Nuestro compromiso es acompañar a cada cliente con seriedad, dedicación y excelencia profesional, buscando siempre alcanzar la mejor solución posible.',
      
    },
    {
      image: 'img/Agustin_2.webp',
      title: 'Agustín González Fiad',
      subtitle: 'M.P. N° 4.851 | Abogado',
      content: 'El estudio está conformado por profesionales formados en la Universidad Católica de Santiago del Estero. Nos distingue la responsabilidad, la transparencia y el trato cercano con cada persona que confía en nuestro trabajo.',
      
    },
    {
      image: 'img/estudio_6.webp',
      title: 'Nuestro Estudio',
      subtitle: 'Instalaciones Modernas',
      content: 'Nuestro espacio está diseñado para brindar comodidad y profesionalismo. Contamos con instalaciones modernas que reflejan nuestro compromiso con la excelencia y la atención personalizada.',
      year: '9 de Julio 585, Loreto'
    },
    {
      image: 'img/estudio_1.webp',
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

  // Touch handlers para móvil
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  // Auto-play (opcional)
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered && !isLightboxOpen) {
        nextSlide()
      }
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(timer)
  }, [currentSlide, isHovered, isLightboxOpen])

  // Funciones para el lightbox
  const openLightbox = (index: number) => {
    setLightboxSlide(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const nextLightboxSlide = () => {
    setLightboxSlide((prev) => (prev + 1) % slides.length)
  }

  const prevLightboxSlide = () => {
    setLightboxSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Navegación con teclado en lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return
      
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prevLightboxSlide()
      if (e.key === 'ArrowRight') nextLightboxSlide()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isLightboxOpen])

  return (
    <section id="nosotros" className="py-20 bg-law-light overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Sobre Nosotros"
          subtitle="Un estudio jurídico con compromiso, dedicación y excelencia profesional"
        />

        {/* Carousel */}
        <div 
          className="relative max-w-5xl mx-auto overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div 
            className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
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
                    className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                    onClick={() => openLightbox(currentSlide)}
                    title="Click para ampliar"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-white">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <p className="text-law-gold text-sm md:text-base mb-2 font-semibold">{slides[currentSlide].year}</p>
                      <h3 className="text-2xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                        {slides[currentSlide].title}
                      </h3>
                      <p className="text-lg md:text-xl text-white/95 mb-3 md:mb-4 font-medium">
                        {slides[currentSlide].subtitle}
                      </p>
                      <p className="text-sm md:text-lg text-white/90 leading-relaxed max-w-3xl drop-shadow-md">
                        {slides[currentSlide].content}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons - Solo Desktop y aparecen con hover */}
          <motion.button
            onClick={prevSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-law-gold/90 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 items-center justify-center"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-law-gold/90 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 items-center justify-center"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Dots Indicator - Más grandes en móvil */}
          <div className="flex justify-center gap-2 md:gap-3 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-law-gold w-8 md:w-12' 
                    : 'bg-black/30 w-2 md:w-3'
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-law-gold transition-colors z-50"
                aria-label="Cerrar galería"
              >
                <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Image Container */}
              <div 
                className="relative w-full h-full flex items-center justify-center p-4 md:p-20"
                onClick={(e) => e.stopPropagation()}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={lightboxSlide}
                    src={slides[lightboxSlide].image}
                    alt={slides[lightboxSlide].title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevLightboxSlide}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-law-gold/90 text-white p-3 md:p-4 rounded-full transition-all duration-300"
                  aria-label="Anterior"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>
                <button
                  onClick={nextLightboxSlide}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-law-gold/90 text-white p-3 md:p-4 rounded-full transition-all duration-300"
                  aria-label="Siguiente"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                {/* Counter */}
                <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm md:text-base font-medium">
                  {lightboxSlide + 1} / {slides.length}
                </div>

                {/* Dots Indicator */}
                <div className="absolute bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setLightboxSlide(index)}
                      className={`h-2 md:h-2.5 rounded-full transition-all duration-300 ${
                        index === lightboxSlide 
                          ? 'bg-law-gold w-8 md:w-10' 
                          : 'bg-white/50 w-2 md:w-2.5'
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default AboutUs

