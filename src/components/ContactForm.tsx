import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock
} from 'lucide-react'
import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'

const ContactForm = () => {
  const lawyers = [
    {
      name: 'Oscar Tapia Mattar',
      mp: 'M.P. N° 4.667',
      title: 'Abogado | Escribano',
      phone: '3855182227',
      image: 'img/Oscar_2.webp'
    },
    {
      name: 'Agustín González Fiad',
      mp: 'M.P. N° 4.851',
      title: 'Abogado',
      phone: '3856260426',
      image: 'img/Agustin_2.webp'
    }
  ]

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfonos',
      value: '385 5182227 / 385 260426',
      link: 'tel:+543855182227'
    },
    {
      icon: Mail,
      title: 'Emails',
      value: 'oscartapiamattar@gmail.com',
      value2: 'agugonfiad1999@gmail.com',
      link: 'mailto:oscartapiamattar@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Dirección',
      value: '9 de Julio 585',
      value2: 'Loreto, Santiago del Estero, Argentina',
      link: 'https://maps.app.goo.gl/EHocE5SQEdEb38tK6'
    },
    {
      icon: Clock,
      title: 'Horario',
      value: 'Lunes a Viernes',
      value2: '8:30 a 12:00 | 18:00 a 20:00',
      link: '#'
    }
  ]

  return (
    <section id="contacto" className="py-20 bg-law-light">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Contáctenos"
          subtitle="Estamos aquí para ayudarle. Comuníquese directamente con nuestros profesionales"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-black mb-6">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-black/10 rounded-lg flex items-center justify-center group-hover:bg-law-gold/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-black group-hover:text-law-gold transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-black mb-1">
                        {info.title}
                      </p>
                      <p className="text-law-dark/70">{info.value}</p>
                      {info.value2 && <p className="text-law-dark/70">{info.value2}</p>}
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 h-64 rounded-xl overflow-hidden"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.0739939896837!2d-64.18524212347475!3d-29.761666421997735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943d56be9fea55e5%3A0x9c4d0f7e5f5c6e5a!2s9%20de%20Julio%20585%2C%20Loreto%2C%20Santiago%20del%20Estero!5e0!3m2!1ses!2sar!4v1699999999999!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del estudio"
              />
            </motion.div>
          </motion.div>

          {/* Lawyers Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-black mb-6">
              Nuestros Profesionales
            </h3>

            {lawyers.map((lawyer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img
                        src={lawyer.image}
                        alt={lawyer.name}
                        className="w-full h-48 md:h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="md:w-2/3 flex flex-col justify-between">
                      <div>
                        <h4 className="text-2xl font-bold text-black mb-1">
                          {lawyer.name}
                        </h4>
                        <p className="text-law-gold font-semibold mb-2">{lawyer.mp}</p>
                        <p className="text-law-dark/70 mb-4">{lawyer.title}</p>
                      </div>
                      <a
                        href={`https://wa.me/549${lawyer.phone}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Contactar por WhatsApp
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

