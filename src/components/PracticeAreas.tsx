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
      icon: Briefcase,
      title: 'Derecho Laboral',
      description: 'Asesoramiento integral en relaciones laborales, despidos, indemnizaciones y conflictos sindicales.',
      color: 'bg-blue-500'
    },
    {
      icon: Home,
      title: 'Derecho Inmobiliario',
      description: 'Compraventa, arrendamientos, hipotecas y todo tipo de transacciones inmobiliarias.',
      color: 'bg-green-500'
    },
    {
      icon: Users,
      title: 'Derecho de Familia',
      description: 'Divorcios, custodia, pensiones alimenticias y todo lo relacionado con el derecho familiar.',
      color: 'bg-pink-500'
    },
    {
      icon: Building2,
      title: 'Derecho Comercial',
      description: 'Constitución de sociedades, contratos mercantiles y asesoramiento empresarial.',
      color: 'bg-purple-500'
    },
    {
      icon: FileText,
      title: 'Derecho Civil',
      description: 'Contratos, sucesiones, responsabilidad civil y litigios patrimoniales.',
      color: 'bg-orange-500'
    },
    {
      icon: Scale,
      title: 'Derecho Penal',
      description: 'Defensa penal en todas las instancias, asesoramiento y representación legal.',
      color: 'bg-red-500'
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
              >
                <Card className="h-full group">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className={`inline-flex items-center justify-center w-16 h-16 ${area.color} bg-opacity-10 rounded-xl mb-4 group-hover:bg-opacity-20 transition-all duration-300`}
                  >
                    <Icon className={`w-8 h-8 ${area.color.replace('bg-', 'text-')}`} />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-law-navy mb-3">
                    {area.title}
                  </h3>
                  <p className="text-law-dark/70 leading-relaxed">
                    {area.description}
                  </p>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                    className="mt-4 h-1 bg-law-gold rounded-full"
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

