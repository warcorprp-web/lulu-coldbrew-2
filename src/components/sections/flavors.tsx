"use client"

import { useRef, useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { FlavorModal } from "@/components/flavor-modal"

const flavors = [
  { name: "Вишня", tag: "Хит продаж", img: "bottle_3.png", full: "LULU КОЛД БРЮ Cherry", desc: "Насыщенный вкус спелой вишни с яркой кофейной основой. Натуральный состав без сахара" },
  { name: "Малина", tag: "Рекомендуем", img: "bottle_2.png", full: "LULU КОЛД БРЮ Raspberry", desc: "Яркий малиновый вкус с приятной кислинкой. Отличный выбор для летних месяцев" },
  { name: "Смородина", tag: "Новинка", img: "bottle_1.png", full: "LULU КОЛД БРЮ Currant", desc: "Созревшая смородина в идеальной паре с холодным кофе. Богатый вкус и аромат" },
  { name: "Гранат", tag: "Премиум", img: "bottle_5.png", full: "LULU КОЛД БРЮ Pomegranate", desc: "Экзотическая гранатовая нотка. Глубокий вкус с кофейными оттенками" },
  { name: "Айва", tag: "Эксклюзив", img: "bottle_4.png", full: "LULU КОЛД БРЮ Quince", desc: "Свежая айва с мягким кофейным послевкусием. Редкий вкус для ценителей" },
]

const loop = [...flavors, ...flavors, ...flavors]

export function Flavors() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedFlavor, setSelectedFlavor] = useState<typeof flavors[0] | null>(null)
  const isJumping = useRef(false)

  const getCardWidth = useCallback(() => {
    const track = trackRef.current
    if (!track) return 0
    const card = track.children[0] as HTMLElement
    if (!card) return 0
    return card.offsetWidth + 24
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const startOffset = flavors.length * getCardWidth()
    track.scrollLeft = startOffset

    const handleScroll = () => {
      if (isJumping.current) return

      const center = track.scrollLeft + track.offsetWidth / 2
      let closest = 0
      let minDist = Infinity
      Array.from(track.children).forEach((child, i) => {
        const el = child as HTMLElement
        const elCenter = el.offsetLeft + el.offsetWidth / 2
        const dist = Math.abs(center - elCenter)
        if (dist < minDist) {
          minDist = dist
          closest = i
        }
      })
      setActiveIndex(closest % flavors.length)

      const cardW = getCardWidth()
      const totalScroll = track.scrollWidth
      const firstSetEnd = flavors.length * cardW
      const secondSetEnd = flavors.length * 2 * cardW

      if (track.scrollLeft < firstSetEnd - cardW) {
        isJumping.current = true
        track.scrollLeft += firstSetEnd
        requestAnimationFrame(() => { isJumping.current = false })
      } else if (track.scrollLeft > secondSetEnd) {
        isJumping.current = true
        track.scrollLeft -= firstSetEnd
        requestAnimationFrame(() => { isJumping.current = false })
      }
    }

    track.addEventListener("scroll", handleScroll, { passive: true })
    return () => track.removeEventListener("scroll", handleScroll)
  }, [getCardWidth])

  const scrollToFlavor = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const currentLoopIndex = Math.round(track.scrollLeft / getCardWidth()) + flavors.length
    const targetIndex = flavors.length + index
    const direction = targetIndex > currentLoopIndex ? 1 : -1
    const clampedTarget = Math.max(flavors.length, Math.min(flavors.length * 2 - 1, targetIndex + direction * flavors.length * (Math.abs(targetIndex - currentLoopIndex) > flavors.length ? 1 : 0)))
    const card = track.children[clampedTarget] as HTMLElement
    if (card) {
      track.scrollTo({
        left: card.offsetLeft - track.offsetWidth / 2 + card.offsetWidth / 2,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="flavors" className="py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="w-12 h-1 rounded-full bg-[#f07d47]" />
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Пять вкусов — пять характеров
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Пять вкусов — от классической вишни до эксклюзивной айвы. Каждый
            настаивается 20 часов, чтобы сохранить натуральный вкус ягод без
            сахара и ароматизаторов.
          </p>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-8 pb-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {loop.map((flavor, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-[70vw] sm:w-[340px] transition-all duration-300 h-[560px] cursor-pointer"
            style={{
              transform: activeIndex === i % flavors.length ? "scale(1)" : "scale(0.85)",
              opacity: activeIndex === i % flavors.length ? "1" : "0.5",
            }}
            onClick={() => setSelectedFlavor(flavor)}
          >
            <div className="group relative rounded-2xl overflow-hidden bg-white border-[5px] border-white flex flex-col h-full">
              <div className="relative flex-1 min-h-0 overflow-hidden rounded-xl">
                <Image
                  src={`/img/${flavor.img}`}
                  alt={flavor.full}
                  fill
                  className="object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 70vw, 340px"
                />
              </div>
              <div className="bg-white px-5 pt-3 pb-4 shrink-0 relative">
                <div className="flex items-center gap-2 min-w-0">
                  <h3 className="text-xl font-bold text-[#1a1a1a] truncate">{flavor.name}</h3>
                  <span className="text-[10px] font-medium text-[#f07d47] border border-[#f07d47] px-2 py-0.5 rounded-full shrink-0">
                    {flavor.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[#4b5563] leading-relaxed pr-7">{flavor.desc}</p>
                <ExternalLink size={18} className="absolute bottom-4 right-4 text-[#f07d47]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {flavors.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToFlavor(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              activeIndex === i ? "w-8 bg-[#f07d47]" : "w-2 bg-white/30"
            }`}
            aria-label={`Вкус ${i + 1}`}
          />
        ))}
      </div>

      <FlavorModal
        flavor={selectedFlavor}
        onClose={() => setSelectedFlavor(null)}
      />
    </section>
  )
}
