"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variant?: "up" | "left" | "right" | "scale" | "blur"
  y?: number
  once?: boolean
}

export function Reveal({ children, className = "", delay = 0, variant = "up", y, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -30px 0px" }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once])

  const hidden: Record<string, string> = {
    up: "translateY(24px)",
    left: "translateX(-24px)",
    right: "translateX(24px)",
    scale: "scale(0.92)",
    blur: "translateY(8px)",
  }

  const shown: Record<string, string> = {
    up: "translateY(0)",
    left: "translateX(0)",
    right: "translateX(0)",
    scale: "scale(1)",
    blur: "translateY(0)",
  }

  const useBlur = variant === "blur"

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? shown[variant] : hidden[variant],
        filter: useBlur ? (visible ? "blur(0)" : "blur(10px)") : undefined,
        transition: `opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms${useBlur ? `, filter 0.45s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms` : ""}`,
      }}
    >
      {children}
    </div>
  )
}
