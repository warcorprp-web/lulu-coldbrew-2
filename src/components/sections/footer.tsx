"use client"

import { useTheme } from "@/components/theme-provider"
import { Moon, Sun } from "lucide-react"

export function Footer() {
  const { theme, toggle } = useTheme()

  return (
    <footer className="py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <a href="/">
            <img
              src="/img/logo-header.png"
              alt="LULU КОЛД БРЮ"
              className="h-8 w-auto"
            />
          </a>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-on-brand/60">
            <a href="/#about" className="hover:text-on-brand transition-colors">О продукте</a>
            <a href="/#advantages" className="hover:text-on-brand transition-colors">Преимущества</a>
            <a href="/#flavors" className="hover:text-on-brand transition-colors">Вкусы</a>
            <a href="/#branding" className="hover:text-on-brand transition-colors">Брендирование</a>
            <a href="/#contact" className="hover:text-on-brand transition-colors">Контакты</a>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-on-brand/10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-on-brand/40">
          <a href="/data-consent" className="hover:text-on-brand/60 transition-colors">Согласие на обработку данных</a>
          <a href="/privacy" className="hover:text-on-brand/60 transition-colors">Политика конфиденциальности</a>
          <a href="/offer" className="hover:text-on-brand/60 transition-colors">Публичная оферта</a>
          <button
            onClick={toggle}
            className="inline-flex items-center gap-1.5 text-on-brand/40 hover:text-on-brand/60 transition-colors"
            aria-label="Переключить тему"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
            {theme === "dark" ? "Светлая" : "Тёмная"}
          </button>
        </div>
      </div>
    </footer>
  )
}
