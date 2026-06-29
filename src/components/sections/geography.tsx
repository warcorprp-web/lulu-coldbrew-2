"use client"

import { useEffect, useState, useRef } from "react"

const cities = [
  { name: "Калининград", region: "KaliningradOblast" },
  { name: "Санкт-Петербург", region: "SaintPetersburg" },
  { name: "Москва", region: "Moscow" },
  { name: "Воронеж", region: "VoronezhOblast" },
  { name: "Ростов-на-Дону", region: "RostovOblast" },
  { name: "Краснодар", region: "KrasnodarKrai" },
  { name: "Казань", region: "Tatarstan" },
  { name: "Самара", region: "SamaraOblast" },
  { name: "Уфа", region: "Bashkortostan" },
  { name: "Екатеринбург", region: "SverdlovskOblast" },
  { name: "Новосибирск", region: "NovosibirskOblast" },
  { name: "Красноярск", region: "KemerovoOblast" },
  { name: "Иркутск", region: "IrkutskOblast" },
  { name: "Якутск", region: "Yakutia" },
  { name: "Хабаровск", region: "KhabarovskKrai" },
  { name: "Владивосток", region: "PrimorskyKrai" },
]

import { TruckIcon, TagIcon } from "./icons"

const info = [
  {
    icon: TagIcon,
    title: "Минимальный заказ",
    text: "40 бутылок. Чтобы сотрудничество было удобным для любого формата бизнеса, мы сделали гибкие условия.",
  },
  {
    icon: TruckIcon,
    title: "Доставка по России",
    text: "Отправка транспортными компаниями по вашему выбору: СДЭК, Озон, а также рейсовые автобусы. Сроки — от 2 до 7 дней в зависимости от региона. Помогаем подобрать оптимальную логистику.",
  },
]

export function Geography() {
  const [svgContent, setSvgContent] = useState<string>("")
  const containerRef = useRef<HTMLDivElement>(null)
  const allPathsRef = useRef<SVGElement[]>([])
  const orderRef = useRef<number[]>([])

  useEffect(() => {
    fetch("/img/russia-map.svg")
      .then((res) => res.text())
      .then((text) => {
        const parser = new DOMParser()
        const doc = parser.parseFromString(text, "image/svg+xml")
        const svg = doc.documentElement
        svg.removeAttribute("width")
        svg.removeAttribute("height")
        svg.setAttribute("preserveAspectRatio", "xMidYMid meet")
        svg.style.width = "100%"
        svg.style.height = "100%"
        setSvgContent(new XMLSerializer().serializeToString(svg))
      })
  }, [])

  useEffect(() => {
    if (!svgContent || !containerRef.current) return

    const svg = containerRef.current.querySelector("svg")
    if (!svg) return

    const paths = Array.from(svg.querySelectorAll("path[id]")).filter((el) => {
      const id = el.getAttribute("id")
      return id && id !== "borders" && !["Central", "Southern", "Northwestern", "FarEastern", "Siberian", "Urals", "Volga"].includes(id)
    }) as SVGElement[]
    allPathsRef.current = paths

    const indices = paths.map((_, i) => i)
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[indices[i], indices[j]] = [indices[j], indices[i]]
    }
    orderRef.current = indices

    paths.forEach((el) => {
      el.style.fill = "#ffffff"
      el.style.fillOpacity = "1"
      el.style.transition = "fill 0.6s ease-out, fill-opacity 0.6s ease-out"
    })

    const borders = svg.querySelector("#borders") as SVGElement | null
    if (borders) {
      borders.style.fill = "#1e4497"
      borders.style.fillOpacity = "1"
    }
  }, [svgContent])

  useEffect(() => {
    if (!allPathsRef.current.length) return

    let step = 0
    let timer: ReturnType<typeof setTimeout>
    const total = allPathsRef.current.length

    const tick = () => {
      if (step >= total) {
        timer = setTimeout(() => {
          allPathsRef.current.forEach((el) => {
            el.style.fill = "#ffffff"
            el.style.fillOpacity = "1"
          })
          const bordersEl = containerRef.current?.querySelector("#borders") as SVGElement | null
          if (bordersEl) {
            bordersEl.style.fill = "#1e4497"
          }
          timer = setTimeout(() => {
            step = 0
            tick()
          }, 600)
        }, 4000)
        return
      }

      const idx = orderRef.current[step]
      const el = allPathsRef.current[idx]
      if (el) {
        el.style.fill = "#f07d47"
        el.style.fillOpacity = "0.75"
      }
      step++
      timer = setTimeout(tick, 250)
    }

    timer = setTimeout(tick, 800)
    return () => clearTimeout(timer)
  }, [svgContent])

  return (
    <section id="geography" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="w-12 h-1 rounded-full bg-[#f07d47]" />
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-on-brand">
            Доставляем по всей России<sup className="text-[#f07d47] text-lg">*</sup>
          </h2>
          <p className="mt-4 text-lg text-on-brand/70">
            От Калининграда до Владивостока. Подстраиваемся под ваш объём и логистику.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full aspect-[1650/1000] max-w-4xl mx-auto rounded-2xl overflow-hidden bg-brand mb-16 [&_svg]:w-full [&_svg]:h-full"
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />

        <p className="text-sm text-on-brand/40 mt-4 mb-10 max-w-4xl mx-auto">
          <span className="text-[#f07d47]">*</span> доставляем транспортными компаниями, подробности и расценки уточним в начале сотрудничества
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {info.map((item) => {
            const Icon = item.icon
            return (
            <div key={item.title} className="relative bg-surface rounded-2xl p-6 before:absolute before:inset-0 before:rounded-2xl before:bg-[#f07d47]/5 before:pointer-events-none overflow-hidden h-full">
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <span className="shrink-0 [&_svg]:stroke-[#f07d47]">
                    <Icon />
                  </span>
                  <h3 className="text-base font-bold text-on-surface">{item.title}</h3>
                </div>
                <p className="text-[#4b5563] leading-relaxed text-sm">
                  {item.text}
                </p>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
