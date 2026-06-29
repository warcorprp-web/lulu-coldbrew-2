"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const steps = ["Контакты", "О вас", "Готово"]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 1) {
      setStep(step + 1)
    } else {
      setSubmitted(true)
      setStep(2)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <div className="w-12 h-1 rounded-full bg-[#f07d47]" />
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-on-brand">
            Давайте начнём
          </h2>
          <p className="mt-4 text-lg text-on-brand/70">
            Оставьте заявку — перезвоним в течение дня, рассчитаем цену под ваш
            объём и отправим бесплатные образцы. Без обязательств.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            {!submitted && (
              <>
                <div className="flex items-center gap-2 mb-6">
                  {steps.slice(0, 2).map((s, i) => (
                    <div key={s} className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                          i <= step
                            ? "bg-[#f07d47] text-on-brand"
                            : "bg-white/20 text-on-brand/50"
                        }`}
                      >
                        {i + 1}
                      </div>
                      {i < 1 && (
                        <div
                          className={`w-8 h-0.5 transition-all ${
                            i < step ? "bg-[#f07d47]" : "bg-white/20"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                  <div
                    className={`space-y-5 transition-all duration-300 ${
                      step === 0
                        ? "opacity-100 max-h-96"
                        : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
                    }`}
                  >
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-on-brand">Как вас зовут?</Label>
                      <Input
                        id="name"
                        placeholder="Имя"
                        required
                        className="rounded-xl bg-white border-none h-12 text-[#1a1a1a] placeholder:text-[#9ca3af]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-on-brand">Телефон</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        required
                        className="rounded-xl bg-white border-none h-12 text-[#1a1a1a] placeholder:text-[#9ca3af]"
                      />
                    </div>
                  </div>

                  <div
                    className={`space-y-5 transition-all duration-300 ${
                      step === 1
                        ? "opacity-100 max-h-96"
                        : "opacity-0 max-h-0 overflow-hidden pointer-events-none"
                    }`}
                  >
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-on-brand">Заведение или компания</Label>
                      <Input
                        id="company"
                        placeholder="Название"
                        className="rounded-xl bg-white border-none h-12 text-[#1a1a1a] placeholder:text-[#9ca3af]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="comment" className="text-on-brand">Пара слов о вас</Label>
                      <Textarea
                        id="comment"
                        placeholder="Тип бизнеса, примерный объём, пожелания"
                        rows={4}
                        className="rounded-xl bg-white border-none text-[#1a1a1a] placeholder:text-[#9ca3af]"
                      />
                    </div>
                  </div>

                  {!submitted && (
                    <div className="flex gap-3">
                      {step > 0 && (
                        <Button
                          type="button"
                          onClick={() => setStep(step - 1)}
                          className="rounded-full bg-transparent border border-white/20 text-on-brand h-12 px-6 hover:bg-on-brand/10"
                        >
                          Назад
                        </Button>
                      )}
                      <Button
                        type="submit"
                        className="flex-1 rounded-full bg-[#f07d47] hover:bg-[#d86a39] text-on-brand h-12 text-base"
                      >
                        {step === 0 ? "Далее" : "Отправить заявку"}
                      </Button>
                    </div>
                  )}
                </form>
              </>
            )}

            {submitted && (
              <div className="text-center py-12 animate-in fade-in duration-500">
                <div className="w-16 h-16 rounded-full bg-[#f07d47] mx-auto mb-6 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-on-brand mb-2">Заявка отправлена!</h3>
                <p className="text-on-brand/70">
                  Свяжемся с вами в течение рабочего дня. Спасибо за доверие!
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-on-brand/70 text-sm mb-4">
                Или свяжитесь с нами напрямую:
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/79275814028"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 h-11 text-sm font-medium text-[#1a1a1a] hover:bg-white/90 transition-all"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
                <a
                  href="https://t.me/lulu.astr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 h-11 text-sm font-medium text-[#1a1a1a] hover:bg-white/90 transition-all"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#0088cc"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.022c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>
                  Telegram
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 h-11 text-sm font-medium text-[#1a1a1a] hover:bg-white/90 transition-all"
                >
                  <img src="/img/max-logo.png" alt="MAX" className="h-5 w-5" />
                  MAX
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
