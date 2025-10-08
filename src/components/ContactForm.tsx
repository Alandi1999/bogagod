import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import SectionTitle from './ui/SectionTitle'
import Button from './ui/Button'

interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

type SubmitStatus = 'idle' | 'success' | 'error'

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data)
    
    // Simulate API call
    setTimeout(() => {
      setSubmitStatus('success')
      reset()
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+34 912 345 678',
      link: 'tel:+34912345678'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contacto@bogagod.com',
      link: 'mailto:contacto@bogagod.com'
    },
    {
      icon: MapPin,
      title: 'Dirección',
      value: 'Calle Principal 123, Madrid, España',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Horario',
      value: 'Lun - Vie: 9:00 - 18:00',
      link: '#'
    }
  ]

  return (
    <section id="contacto" className="py-20 bg-law-light">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Contáctenos"
          subtitle="Estamos aquí para ayudarle. Déjenos un mensaje y nos pondremos en contacto a la brevedad"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-law-navy mb-6">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <motion.a
                    key={index}
                    href={info.link}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-law-navy/10 rounded-lg flex items-center justify-center group-hover:bg-law-gold/20 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-law-navy group-hover:text-law-gold transition-colors duration-300" />
                    </div>
                    <div>
                      <p className="font-semibold text-law-navy mb-1">
                        {info.title}
                      </p>
                      <p className="text-law-dark/70">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 h-64 bg-law-navy/10 rounded-xl overflow-hidden"
            >
              <div className="w-full h-full flex items-center justify-center text-law-dark/50">
                <MapPin className="w-12 h-12" />
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-law-navy mb-2">
                  Nombre Completo *
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'El nombre es requerido' })}
                  className="w-full px-4 py-3 rounded-lg border border-law-navy/20 focus:border-law-gold focus:outline-none focus:ring-2 focus:ring-law-gold/20 transition-all duration-300"
                  placeholder="Juan Pérez"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-law-navy mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  {...register('email', { 
                    required: 'El email es requerido',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email inválido'
                    }
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-law-navy/20 focus:border-law-gold focus:outline-none focus:ring-2 focus:ring-law-gold/20 transition-all duration-300"
                  placeholder="juan@ejemplo.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-law-navy mb-2">
                  Teléfono *
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', { required: 'El teléfono es requerido' })}
                  className="w-full px-4 py-3 rounded-lg border border-law-navy/20 focus:border-law-gold focus:outline-none focus:ring-2 focus:ring-law-gold/20 transition-all duration-300"
                  placeholder="+34 912 345 678"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-law-navy mb-2">
                  Asunto *
                </label>
                <select
                  id="subject"
                  {...register('subject', { required: 'Seleccione un asunto' })}
                  className="w-full px-4 py-3 rounded-lg border border-law-navy/20 focus:border-law-gold focus:outline-none focus:ring-2 focus:ring-law-gold/20 transition-all duration-300"
                >
                  <option value="">Seleccione un área</option>
                  <option value="laboral">Derecho Laboral</option>
                  <option value="inmobiliario">Derecho Inmobiliario</option>
                  <option value="familia">Derecho de Familia</option>
                  <option value="comercial">Derecho Comercial</option>
                  <option value="civil">Derecho Civil</option>
                  <option value="penal">Derecho Penal</option>
                  <option value="otro">Otro</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-law-navy mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register('message', { 
                    required: 'El mensaje es requerido',
                    minLength: {
                      value: 10,
                      message: 'El mensaje debe tener al menos 10 caracteres'
                    }
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-law-navy/20 focus:border-law-gold focus:outline-none focus:ring-2 focus:ring-law-gold/20 transition-all duration-300 resize-none"
                  placeholder="Cuéntenos sobre su caso..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                variant="primary" 
                fullWidth
                disabled={submitStatus === 'success'}
              >
                {submitStatus === 'success' ? (
                  <span className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Mensaje Enviado
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Enviar Mensaje
                  </span>
                )}
              </Button>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p className="text-green-800 text-sm">
                    ¡Gracias por contactarnos! Responderemos a la brevedad.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm

