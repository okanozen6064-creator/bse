"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface FadeInProps {
    children: React.ReactNode
    className?: string
    delay?: number
    direction?: "up" | "down" | "left" | "right" | "none"
    fullWidth?: boolean
}

export default function FadeIn({
    children,
    className = "",
    delay = 0,
    direction = "up",
    fullWidth = false
}: FadeInProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const getDirectionOffset = () => {
        switch (direction) {
            case "up": return { y: 40, x: 0 }
            case "down": return { y: -40, x: 0 }
            case "left": return { x: 40, y: 0 }
            case "right": return { x: -40, y: 0 }
            case "none": return { x: 0, y: 0 }
            default: return { y: 40, x: 0 }
        }
    }

    const initial = { opacity: 0, ...getDirectionOffset() }
    const animate = isInView ? { opacity: 1, x: 0, y: 0 } : initial

    return (
        <div ref={ref} className={`${fullWidth ? "w-full" : ""} ${className}`}>
            <motion.div
                initial={initial}
                animate={animate}
                transition={{
                    duration: 0.8,
                    delay: delay,
                    ease: [0.21, 0.47, 0.32, 0.98]
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}
