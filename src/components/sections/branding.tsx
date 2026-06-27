import Image from "next/image"

export function Branding() {
  return (
    <section id="branding" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Бутылка с вашим именем
            </h2>
            <p className="mt-4 text-lg text-white/70 leading-relaxed">
              Наносим ваш логотип прямо на этикетку. Для гостей это выглядит как
              собственное производство заведения — никаких сторонних брендов на
              полке. Узнаваемость растёт, лояльность тоже.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Полностью готовая этикетка под ваш бренд",
                "Стойкие материалы — этикетка не выцветает и не затирается",
                "Дизайн-макет делаем бесплатно",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/70">
                  <span className="w-5 h-5 rounded-full bg-[#f07d47] flex items-center justify-center text-white text-xs font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex shrink-0 items-center justify-center rounded-full bg-[#f07d47] text-white text-sm font-medium whitespace-nowrap transition-all select-none h-11 px-7 hover:bg-[#d86a39]"
            >
              Узнать условия
            </a>
          </div>
          <div className="order-1 md:order-2">
            <div className="w-12 h-1 rounded-full bg-[#f07d47] mb-6" />
            <div className="relative aspect-[3/4] max-w-sm rounded-2xl overflow-hidden border-[5px] border-white mx-auto">
              <Image
                src="/img/logo_2.jpeg"
                alt="Брендированная бутылка"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
