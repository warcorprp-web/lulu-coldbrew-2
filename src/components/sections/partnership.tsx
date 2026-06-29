const steps = [
  {
    number: "01",
    title: "Заявка",
    description:
      "Оставляете заявку на сайте — мы перезваниваем в течение дня. Рассказываем всё о продукте, ценах и условиях.",
  },
  {
    number: "02",
    title: "Образцы",
    description:
      "Бесплатно привозим образцы по Астрахани. В другие города — можете заказать любую пробную партию без минимального заказа.",
  },
  {
    number: "03",
    title: "Договор и партия",
    description:
      "Заключаем договор, согласовываем брендирование этикетки и запускаем производство вашей первой партии.",
  },
  {
    number: "04",
    title: "Поставки",
    description:
      "Налаживаем регулярные поставки — товар всегда на складе. Даем маркетинговые материалы и поддерживаем на старте.",
  },
]

const businessTypes = [
  "Кофейни и кофейные сети",
  "Рестораны и кафе (HoReCa)",
  "Фитнес-клубы и спорт-школы",
  "Мини-маркеты и магазины у дома",
  "Бары, лаунжи, караоке",
  "Онлайн-магазины и маркетплейсы",
]

export function Partnership() {
  return (
    <section id="partnership" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="w-12 h-1 rounded-full bg-[#f07d47]" />
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-on-brand">
            С чего всё начинается
          </h2>
          <p className="mt-4 text-lg text-on-brand/70">
            Никакой бюрократии и долгих согласований. Просто оставляете заявку —
            и мы берём остальное на себя.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative bg-surface rounded-2xl p-6 before:absolute before:inset-0 before:rounded-2xl before:bg-[#f07d47]/5 before:pointer-events-none overflow-hidden">
              <div className="relative text-3xl font-black text-[#f07d47] leading-none mb-4">
                {step.number}
              </div>
              <h3 className="relative text-lg font-bold text-on-surface">{step.title}</h3>
              <p className="relative mt-2 text-[#6b7280] leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold text-on-brand mb-2">
              С кем мы работаем
            </h3>
            <p className="text-on-brand/70 leading-relaxed">
              Подходим под любой формат — от маленькой кофейни до сети магазинов.
              Подстраиваемся под объём и условия каждого партнёра.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {businessTypes.map((type) => (
              <div
                key={type}
                className="flex items-center gap-3 text-on-brand/70 text-sm"
              >
                <span className="w-2 h-2 rounded-full bg-[#f07d47] shrink-0" />
                {type}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#f07d47] text-white text-sm font-medium whitespace-nowrap transition-all select-none h-11 px-7 hover:bg-[#d86a39]"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  )
}
