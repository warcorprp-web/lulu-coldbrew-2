"use client"

import { useEffect, useRef, useState } from "react"

const words = ["кафе", "кофейни", "ресторана", "фитнес-клуба", "бара", "магазина"]

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [fade, setFade] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)
  const directionRef = useRef(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length)
        setFade(true)
      }, 250)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let frameId: number
    let forward = true

    const tick = () => {
      if (video.readyState < 4) {
        frameId = requestAnimationFrame(tick)
        return
      }

      const dur = video.duration
      if (!dur) {
        frameId = requestAnimationFrame(tick)
        return
      }

      if (forward) {
        if (video.paused) video.play().catch(() => {})
        video.playbackRate = 1
        if (video.currentTime >= dur - 0.1) {
          forward = false
        }
      } else {
        video.pause()
        const step = 1 / 30
        video.currentTime = Math.max(0, video.currentTime - step)
        if (video.currentTime <= 0) {
          forward = true
        }
      }

      frameId = requestAnimationFrame(tick)
    }

    video.play().then(() => {
      video.playbackRate = 1
      frameId = requestAnimationFrame(tick)
    }).catch(() => {
      frameId = requestAnimationFrame(tick)
    })

    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 min-h-screen flex items-center">
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/img/logo_3.jpeg"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e4497] via-black/40 to-[#1e4497]" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="w-12 h-1 rounded-full bg-[#f07d47] mb-6" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
            <span className="whitespace-nowrap">Натуральный кофе</span><br className="sm:hidden" /> КОЛД БРЮ
            <br />
            <span className="text-white/60">
              для </span>
            <span
              className={`text-[#f07d47] inline-block transition-all duration-200 ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
            >
              {words[wordIndex]}
            </span>
          </h1>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Поставляем готовый кофе холодного заваривания для кафе, кофеен и HoReCa. Маржинальность от 50% и брендирование бутылок под вашим логотипом.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#f07d47] text-white text-sm font-medium whitespace-nowrap transition-all select-none h-11 px-7 hover:bg-[#d86a39]"
            >
              Стать партнёром
            </a>
            <a
              href="#pricing"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/20 bg-transparent text-white text-sm font-medium whitespace-nowrap transition-all select-none h-11 px-7 hover:bg-white/10"
            >
              Цены
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
