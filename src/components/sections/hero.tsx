"use client"

import { useEffect, useState } from "react"

const words = ["кафе", "кофейни", "ресторана", "фитнес-клуба", "бара", "магазина"]

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [fade, setFade] = useState(true)

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

  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 min-h-screen md:min-h-0 flex items-center">
      {/* Mobile background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="md:hidden absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero-mobile.mp4" type="video/mp4" />
      </video>
      <div className="md:hidden absolute inset-0 bg-gradient-to-b from-brand via-black/40 to-brand" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="max-w-lg">
            <div className="w-12 h-1 rounded-full bg-[#f07d47] mb-6" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-on-brand">
              <span className="whitespace-nowrap">Натуральный кофе</span><br className="sm:hidden" /> КОЛД БРЮ
              <br />
              <span className="text-on-brand/60">
                для </span>
              <span
                className={`text-[#f07d47] inline-block transition-all duration-200 ${fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}
              >
                {words[wordIndex]}
              </span>
            </h1>
            <p className="mt-6 text-lg text-on-brand/70 leading-relaxed">
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
                className="inline-flex shrink-0 items-center justify-center rounded-full border border-on-brand/20 bg-transparent text-on-brand text-sm font-medium whitespace-nowrap transition-all select-none h-11 px-7 hover:bg-on-brand/10"
              >
                Цены
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center md:justify-end">
            <div className="relative aspect-[9/16] w-full max-w-[300px] rounded-2xl overflow-hidden border-[5px] border-on-brand bg-black">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover"
                poster="/img/logo_3.jpeg"
              >
                <source src="/video/hero.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
