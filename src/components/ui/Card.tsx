import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

const Card = ({ children, className, hover = true }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={clsx(
        'bg-white rounded-xl shadow-lg p-6 transition-shadow duration-300',
        hover && 'hover:shadow-2xl',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export default Card

