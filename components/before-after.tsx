"use client"

import { useState, useRef, useEffect } from "react"
import { GripVertical } from "lucide-react"
import FadeIn from "./fade-in"

interface BeforeAfterProps {
    beforeImage: string
    afterImage: string
    beforeLabel?: string
    afterLabel?: string
}

export default function BeforeAfter({
    beforeImage,
    afterImage,
    beforeLabel = "Öncesi",
    afterLabel = "Sonrası"
}: BeforeAfterProps) {
    const [sliderPosition, setSliderPosition] = useState(50)
    const [isDragging, setIsDragging] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const handleMove = (event: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging || !containerRef.current) return

        const containerRect = containerRef.current.getBoundingClientRect()
        const clientX = 'touches' in event ? event.touches[0].clientX : (event as React.MouseEvent).clientX

        const position = ((clientX - containerRect.left) / containerRect.width) * 100
        setSliderPosition(Math.min(Math.max(position, 0), 100))
    }

    const handleMouseDown = () => setIsDragging(true)
    const handleMouseUp = () => setIsDragging(false)

    useEffect(() => {
        const handleGlobalMouseUp = () => setIsDragging(false)
        window.addEventListener('mouseup', handleGlobalMouseUp)
        window.addEventListener('touchend', handleGlobalMouseUp)
        return () => {
            window.removeEventListener('mouseup', handleGlobalMouseUp)
            window.removeEventListener('touchend', handleGlobalMouseUp)
        }
    }, [])

    return (
        <section className="py-24 px-6 bg-card/5">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 text-center">
                    <FadeIn>
                        <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Değişime Tanık Olun</h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-lg text-foreground/70">
                            Profesyonel dokunuşumuzun yarattığı farkı interaktif olarak inceleyin.
                        </p>
                    </FadeIn>
                </div>

                <FadeIn delay={0.3}>
                    <div
                        ref={containerRef}
                        className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-border"
                        onMouseMove={handleMove}
                        onTouchMove={handleMove}
                        onMouseDown={handleMouseDown}
                        onTouchStart={handleMouseDown}
                    >
                        {/* After Image (Background) */}
                        <img
                            src={afterImage}
                            alt="After"
                            className="absolute inset-0 w-full h-full object-cover"
                            draggable={false}
                        />
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                            {afterLabel}
                        </div>

                        {/* Before Image (Foreground - Clipped) */}
                        <div
                            className="absolute inset-0 w-full h-full overflow-hidden"
                            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                        >
                            <img
                                src={beforeImage}
                                alt="Before"
                                className="absolute inset-0 w-full h-full object-cover"
                                draggable={false}
                            />
                            <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                                {beforeLabel}
                            </div>
                        </div>

                        {/* Slider Handle */}
                        <div
                            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                            style={{ left: `${sliderPosition}%` }}
                        >
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-black">
                                <GripVertical size={20} />
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
