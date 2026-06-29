"use client"

import { useState, useEffect } from "react"
import { Menu, X, Info, Star, Flame, Paintbrush, Phone, FileText, Truck, Handshake, RussianRuble } from "lucide-react"

const navLinks = [
  { href: "/#about", label: "О продукте", icon: Info },
  { href: "/#flavors", label: "Вкусы", icon: Flame },
  { href: "/#branding", label: "Брендирование", icon: Paintbrush },
  { href: "/#pricing", label: "Прайс", icon: RussianRuble },
  { href: "/#geography", label: "Доставка", icon: Truck },
  { href: "/#advantages", label: "Преимущества", icon: Star },
  { href: "/#partnership", label: "Сотрудничество", icon: Handshake },
  { href: "/#docs", label: "Документы", icon: FileText },
  { href: "/#contact", label: "Контакты", icon: Phone },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.split("#")[1])
    const observers: IntersectionObserver[] = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id)
        },
        { threshold: 0.3 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNavClick = (href: string) => {
    setOpen(false)
    const id = href.split("#")[1]
    setActiveSection(id)
  }

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "top-3 left-3 right-3" : ""
        }`}
      >
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "bg-surface rounded-2xl shadow-lg mx-auto max-w-7xl px-6"
              : "bg-transparent max-w-none px-4 sm:px-6 lg:px-8"
          }`}
        >
          <div
            className={`flex items-center justify-between ${
              scrolled ? "h-11" : "h-16"
            }`}
          >
            <a href="/">
              <img
                src={
                  scrolled
                    ? "/img/logo-header-orange.png"
                    : "/img/logo-header.png"
                }
                alt="LULU КОЛД БРЮ"
                className={scrolled ? "h-8 w-auto" : "h-12 w-auto"}
              />
            </a>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden md:inline-flex shrink-0 items-center justify-center rounded-full bg-[#f07d47] text-white text-sm font-medium whitespace-nowrap transition-all h-9 px-5 hover:bg-[#d86a39]"
              >
                Стать партнёром
              </a>
              <button
                className={`p-2 transition-colors ${
                  scrolled ? "text-[#f07d47]" : "text-on-brand"
                }`}
                onClick={() => setOpen(!open)}
                aria-label="Меню"
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              open ? "max-h-[440px]" : "max-h-0"
            }`}
          >
            <div className="pb-5 pt-2 space-y-3">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`flex items-center gap-3 text-base font-medium transition-colors ${
                      scrolled
                        ? "text-[#6b7280] hover:text-on-surface"
                        : "text-on-brand/70 hover:text-on-brand"
                    }`}
                    onClick={() => handleNavClick(link.href)}
                  >
                    <Icon className="w-5 h-5 text-[#f07d47]" />
                    {link.label}
                  </a>
                )
              })}
              <a
                href="#contact"
                onClick={() => handleNavClick("#contact")}
                className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#f07d47] text-white text-base font-medium whitespace-nowrap transition-all h-10 px-6 hover:bg-[#d86a39] w-full"
              >
                Стать партнёром
              </a>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          !scrolled && open ? "max-h-[440px]" : "max-h-0"
        }`}
      >
        <div className="h-[440px]" />
      </div>
    </>
  )
}
