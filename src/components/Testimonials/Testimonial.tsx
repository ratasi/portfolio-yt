"use client"
import { motion } from 'framer-motion'
import { AvatarWorks } from '../AvatarWorks/AvatarWorks'
import { Circle } from '../Circle'
import { fadeIn } from '@/utils/motionTransitions'
import { TestimonialSlider } from './TestimonialSlider'

export function Testimonial() {
    return (
        <div className='h-screen'>
            <AvatarWorks />
            <Circle />
            <div className="flex flex-col justify-center min-h-screen">
                <motion.h1
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="my-5 text-4xl text-center md:my-10"
                >
                    Algunos comentarios <br /><span className="text-secondary">de nuestros clientes.</span>
                </motion.h1>
                <motion.div
                    variants={fadeIn('up', 0.5)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <TestimonialSlider />
                </motion.div>
            </div>
        </div>
    )
}
