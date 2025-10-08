import { motion } from 'framer-motion'
import { Award, Users, Target, TrendingUp } from 'lucide-react'
import SectionTitle from './ui/SectionTitle'
import Card from './ui/Card'

const AboutUs = () => {
  const features = [
    {
      icon: Award,
      title: 'Experiencia Comprobada',
      description: 'Más de dos décadas de trayectoria en el ámbito jurídico, con casos exitosos en diversas áreas del derecho.'
    },
    {
      icon: Users,
      title: 'Equipo Especializado',
      description: 'Profesionales altamente capacitados y en constante actualización en las últimas normativas legales.'
    },
    {
      icon: Target,
      title: 'Enfoque Personalizado',
      description: 'Cada caso es único. Desarrollamos estrategias a medida para garantizar los mejores resultados.'
    },
    {
      icon: TrendingUp,
      title: 'Resultados Efectivos',
      description: 'Nuestro compromiso es alcanzar soluciones concretas y favorables para nuestros clientes.'
    }
  ]

  return (
    <section id="nosotros" className="py-20 bg-law-light">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Sobre Nosotros"
          subtitle="Un estudio jurídico con compromiso, dedicación y excelencia profesional"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-law-dark/80 leading-relaxed mb-6">
            En <span className="font-semibold text-law-navy">BogaGod</span>, entendemos que cada situación legal 
            requiere un enfoque único y personalizado. Nuestro equipo de abogados especializados trabaja 
            incansablemente para proteger sus derechos y alcanzar los mejores resultados posibles.
          </p>
          <p className="text-lg text-law-dark/80 leading-relaxed">
            Con más de 20 años de experiencia, hemos construido una reputación sólida basada en la 
            confianza, la integridad y el éxito de nuestros clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-law-navy/10 rounded-full mb-4"
                  >
                    <Icon className="w-8 h-8 text-law-navy" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-law-navy mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-law-dark/70">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AboutUs

