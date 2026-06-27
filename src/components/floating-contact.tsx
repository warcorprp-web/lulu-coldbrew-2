"use client"

import { useEffect, useState, useRef } from "react"
import { Phone } from "lucide-react"

type Phase = "hidden" | "dropping" | "shown" | "rising"

export function FloatingContact() {
  const [phase, setPhase] = useState<Phase>("hidden")
  const phaseRef = useRef(phase)
  phaseRef.current = phase
  const timerRef = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about")
      if (!aboutSection) return

      const rect = aboutSection.getBoundingClientRect()
      const shouldShow = rect.top < window.innerHeight * 0.7
      const current = phaseRef.current

      clearTimeout(timerRef.current)

      if (shouldShow && (current === "hidden" || current === "rising")) {
        setPhase("dropping")
        timerRef.current = setTimeout(() => setPhase("shown"), 1600)
      } else if (!shouldShow && (current === "shown" || current === "dropping")) {
        setPhase("rising")
        timerRef.current = setTimeout(() => setPhase("hidden"), 1600)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timerRef.current)
    }
  }, [])

  const dropVisible = phase === "dropping" || phase === "rising"
  const dropAnim = phase === "dropping"
    ? "dropFall 1.6s cubic-bezier(0.4, 0, 0.2, 1) forwards"
    : phase === "rising"
    ? "dropRise 1.6s cubic-bezier(0.4, 0, 0.2, 1) forwards"
    : "none"

  return (
    <>
      {dropVisible && (
        <div
          className="fixed right-8 z-50 pointer-events-none"
          style={{
            top: "5rem",
            animation: dropAnim,
          }}
        >
          <div
            className="w-7 h-11 rounded-full"
            style={{
              background: phase === "dropping"
                ? "linear-gradient(180deg, #ffffff 0%, #ffffff 30%, #f07d47 70%, #f07d47 100%)"
                : "linear-gradient(180deg, #f07d47 0%, #f07d47 30%, #ffffff 70%, #ffffff 100%)",
              animation: "dropColor 1.6s ease-in-out forwards",
              animationDirection: phase === "rising" ? "reverse" : "normal",
            }}
          />
        </div>
      )}

      {phase === "shown" && (
        <a
          href="#contact"
          className="fixed bottom-6 right-6 z-50 group"
          style={{ animation: "dropLand 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" }}
          aria-label="Связаться с нами"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#f07d47] opacity-30 group-hover:scale-150 transition-transform duration-300" />
            <div className="relative w-14 h-14 rounded-full bg-[#f07d47] flex items-center justify-center shadow-lg group-hover:scale-110 group-active:scale-95 transition-transform">
              <Phone className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
          </div>
        </a>
      )}

      <style>{`
        @keyframes dropFall {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
            border-radius: 50%;
          }
          15% {
            transform: translateY(5vh) scale(0.9, 1.1);
            opacity: 1;
            border-radius: 50%;
          }
          40% {
            transform: translateY(40vh) scale(0.7, 1.3);
            opacity: 0.9;
            border-radius: 45% 45% 50% 50%;
          }
          65% {
            transform: translateY(70vh) scale(0.6, 1.4);
            opacity: 0.7;
            border-radius: 40% 40% 50% 50%;
          }
          85% {
            transform: translateY(calc(100vh - 120px)) scale(0.5, 1.2);
            opacity: 0.5;
            border-radius: 40% 40% 50% 50%;
          }
          100% {
            transform: translateY(calc(100vh - 100px)) scale(0);
            opacity: 0;
            border-radius: 50%;
          }
        }
        @keyframes dropRise {
          0% {
            transform: translateY(calc(100vh - 100px)) scale(0);
            opacity: 0;
            border-radius: 50%;
          }
          15% {
            transform: translateY(calc(100vh - 120px)) scale(0.5, 1.2);
            opacity: 0.5;
            border-radius: 40% 40% 50% 50%;
          }
          35% {
            transform: translateY(70vh) scale(0.6, 1.4);
            opacity: 0.7;
            border-radius: 40% 40% 50% 50%;
          }
          60% {
            transform: translateY(40vh) scale(0.7, 1.3);
            opacity: 0.9;
            border-radius: 45% 45% 50% 50%;
          }
          85% {
            transform: translateY(5vh) scale(0.9, 1.1);
            opacity: 1;
            border-radius: 50%;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0;
            border-radius: 50%;
          }
        }
        @keyframes dropColor {
          0% {
            background: linear-gradient(180deg, #ffffff 0%, #ffffff 100%);
            box-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
          }
          50% {
            background: linear-gradient(180deg, #ffffff 0%, #f07d47 100%);
            box-shadow: 0 0 16px rgba(240, 125, 71, 0.3);
          }
          100% {
            background: linear-gradient(180deg, #f07d47 0%, #f07d47 100%);
            box-shadow: 0 0 12px rgba(240, 125, 71, 0.4);
          }
        }
        @keyframes dropLand {
          0% {
            transform: scale(0) translateY(-20px);
            opacity: 0;
          }
          50% {
            transform: scale(1.3) translateY(0);
            opacity: 1;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}
