import { motion } from 'framer-motion'
import { 
  Briefcase, 
  Home, 
  Users, 
  Building2, 
  FileText, 
  Scale 
} from 'lucide-react'
import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'

const PracticeAreas = () => {
  const areas = [
    {
      icon: Users,
      title: 'Derecho de Familia',
      items: ['Alimentos', 'Cuidado personal', 'Régimen de comunicación', 'Divorcio', 'Filiación', 'Tutela y curatela'],
      color: 'bg-law-gold'
    },
    {
      icon: FileText,
      title: 'Derecho Sucesorio',
      items: ['Sucesión', 'Declaratoria de herederos'],
      color: 'bg-law-gold'
    },
    {
      icon: Home,
      title: 'Derecho Civil',
      items: ['Desalojo', 'Redacción y cumplimiento de contratos', 'Cobro de pesos', 'Prescripción', 'Accidentes de tránsito', 'Daños y perjuicios'],
      color: 'bg-law-gold'
    },
    {
      icon: Scale,
      title: 'Derecho Penal',
      items: ['Querella', 'Defensa penal', 'Eximición de prisión', 'Excarcelación', 'Sobreseimiento'],
      color: 'bg-law-gold'
    },
    {
      icon: Briefcase,
      title: 'Derecho Laboral',
      items: ['Despidos e indemnizaciones', 'Accidentes de trabajo y enfermedades profesionales (ART)', 'Conciliaciones'],
      color: 'bg-law-gold'
    },
    {
      icon: Building2,
      title: 'Gestiones y Notificaciones',
      items: ['Cartas documento e intimaciones', 'Reclamos administrativos'],
      color: 'bg-law-gold'
    }
  ]

  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Áreas de Práctica"
          subtitle="Ofrecemos servicios legales especializados en múltiples áreas del derecho"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full group !flex !flex-col">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-law-gold/10 rounded-xl mb-4 group-hover:bg-law-gold/20 transition-all duration-300"
                  >
                    <Icon className="w-8 h-8 text-law-gold" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-black mb-4">
                    {area.title}
                  </h3>
                  <ul className="text-law-dark/70 leading-relaxed space-y-2 flex-grow mb-4">
                    {area.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-law-gold mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className="h-1 bg-law-gold rounded-full mt-auto"
                  />
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PracticeAreas

