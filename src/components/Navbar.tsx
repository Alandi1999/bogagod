import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Áreas', href: '#areas' },
    { name: 'Ventajas', href: '#ventajas' },
    { name: 'Contacto', href: '#contacto' }
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)
    
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => handleNavClick(e, '#')}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img 
              src="img/Logo_Balanza.png" 
              alt="Tapia Mattar" 
              className="h-10 w-auto"
            />
            <span className={clsx(
              'text-xl font-bold transition-colors duration-300',
              isScrolled ? 'text-black' : 'text-white'
            )}>
              Tapia Mattar & Asociados
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={clsx(
                  'font-medium transition-colors duration-300 hover:text-law-gold cursor-pointer',
                  isScrolled ? 'text-black' : 'text-white'
                )}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
            <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={clsx(
              'md:hidden p-2 rounded-lg transition-colors duration-300',
              isScrolled ? 'text-black' : 'text-white'
            )}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-black/10"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="text-black font-medium hover:text-law-gold transition-colors duration-300 cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar

