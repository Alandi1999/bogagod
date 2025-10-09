import { motion } from 'framer-motion'
import clsx from 'clsx'

interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

const SectionTitle = ({ title, subtitle, centered = true }: SectionTitleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={clsx(
        'mb-12',
        centered && 'text-center'
      )}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
        {title}
      </h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-law-dark/70 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

export default SectionTitle

