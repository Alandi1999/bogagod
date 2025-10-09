import { ReactNode } from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'outline'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode
  variant?: ButtonVariant
  fullWidth?: boolean
}

const Button = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className,
  ...props 
}: ButtonProps) => {
  const baseClasses = 'px-8 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-law-gold/30 disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variantClasses = {
    primary: 'bg-law-gold text-black hover:bg-law-gold/90 shadow-lg hover:shadow-xl',
    secondary: 'bg-black text-white hover:bg-black/90 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-law-gold text-law-gold hover:bg-law-gold hover:text-black'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={clsx(
        baseClasses,
        variantClasses[variant],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button

