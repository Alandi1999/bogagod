import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Sobre Nosotros', href: '#nosotros' },
    { name: 'Áreas de Práctica', href: '#areas' },
    { name: 'Contacto', href: '#contacto' }
  ]

  const practiceAreas = [
    { name: 'Derecho de Familia', href: '#areas' },
    { name: 'Derecho Civil', href: '#areas' },
    { name: 'Derecho Penal', href: '#areas' },
    { name: 'Derecho Laboral', href: '#areas' }
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1CNnWdqzf1/?mibextid=wwXIfr', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/estudiojuridicotapiamattar?igsh=MXBkaW5iZDUyMXpkcg==', label: 'Instagram' }
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-4">
              <img 
                src="img/Logo_2.png" 
                alt="Estudio Tapia Mattar & Asociados" 
                className="h-28 w-auto mb-0"
              />
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              Estudio jurídico comprometido con la excelencia legal y la defensa de sus derechos.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 p-2 rounded-lg hover:bg-law-gold/20 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-law-gold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/70 hover:text-law-gold transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Practice Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-law-gold">Áreas de Práctica</h3>
            <ul className="space-y-2">
              {practiceAreas.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      const element = document.querySelector(link.href)
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-white/70 hover:text-law-gold transition-colors duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-law-gold">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-law-gold flex-shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="mailto:oscartapiamattar@gmail.com"
                    className="text-white/70 hover:text-law-gold transition-colors duration-300 block"
                  >
                    oscartapiamattar@gmail.com
                  </a>
                  <a 
                    href="mailto:agugonfiad1999@gmail.com"
                    className="text-white/70 hover:text-law-gold transition-colors duration-300 block"
                  >
                    agugonfiad1999@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-law-gold flex-shrink-0 mt-0.5" />
                <div>
                  <a 
                    href="tel:+543855182227"
                    className="text-white/70 hover:text-law-gold transition-colors duration-300 block"
                  >
                    385 5182227
                  </a>
                  <a 
                    href="tel:+54385260426"
                    className="text-white/70 hover:text-law-gold transition-colors duration-300 block"
                  >
                    385 260426
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-law-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/70">
                  9 de Julio 585<br />Loreto, Santiago del Estero<br />Argentina
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-white/10 text-center text-white/60 text-sm"
        >
          <p>
            &copy; {currentYear} Estudio Tapia Mattar & Asociados. <a href="https://www.instagram.com/alan.peralta99/" target="_blank" rel="noopener noreferrer"> by Alandev</a>.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

