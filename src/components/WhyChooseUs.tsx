import { motion } from 'framer-motion'
import { 
  Shield, 
  Clock, 
  MessageSquare, 
  CheckCircle, 
  HeartHandshake,
  Trophy
} from 'lucide-react'
import SectionTitle from './ui/SectionTitle'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Confidencialidad Absoluta',
      description: 'Su información está completamente protegida bajo el secreto profesional.'
    },
    {
      icon: Clock,
      title: 'Disponibilidad 24/7',
      description: 'Estamos disponibles cuando nos necesite, incluso en situaciones de urgencia.'
    },
    {
      icon: MessageSquare,
      title: 'Comunicación Transparente',
      description: 'Mantenemos informado al cliente en cada etapa del proceso legal.'
    },
    {
      icon: CheckCircle,
      title: 'Casos Exitosos',
      description: 'Historial comprobado de resoluciones favorables para nuestros clientes.'
    },
    {
      icon: HeartHandshake,
      title: 'Trato Personalizado',
      description: 'Atención cercana y humana, entendiendo sus necesidades específicas.'
    },
    {
      icon: Trophy,
      title: 'Excelencia Profesional',
      description: 'Reconocimientos y certificaciones que avalan nuestra calidad.'
    }
  ]

  return (
    <section id="ventajas" className="py-20 bg-black relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-law-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-law-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          title="¿Por Qué Elegirnos?"
          subtitle="Nuestro compromiso es brindar un servicio legal de la más alta calidad"
        />

        {/* Override title colors for dark background */}
        <style>{`
          #ventajas h2 {
            color: white !important;
          }
          #ventajas p {
            color: rgba(255, 255, 255, 0.8) !important;
          }
        `}</style>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-law-gold/20 hover:border-law-gold/50 transition-all duration-300 h-full"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="inline-flex items-center justify-center w-14 h-14 bg-law-gold/20 rounded-lg mb-4 group-hover:bg-law-gold/30 transition-all duration-300"
                  >
                    <Icon className="w-7 h-7 text-law-gold" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {reason.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed">
                    {reason.description}
                  </p>

                  {/* Decorative corner */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-law-gold/30 rounded-tr-xl"
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-2xl text-white/90 font-semibold mb-4">
            ¿Listo para resolver su situación legal?
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Contáctenos hoy para una consulta y descubra cómo podemos ayudarle.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs

