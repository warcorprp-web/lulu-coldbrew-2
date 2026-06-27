import Image from "next/image"
import { LeafIcon, ChartIcon, TagIcon, HandshakeIcon, TruckIcon, MegaphoneIcon, StarIcon } from "./icons"

const advantages = [
  {
    icon: LeafIcon,
    title: "Чистый состав",
    description:
      "Только арабика и вода. Никакого сахара и ароматизаторов. Мы сами пьём этот кофе каждый день — и не стыдимся показать состав кому угодно.",
  },
  {
    icon: ChartIcon,
    title: "Маржинальность от 50%",
    description:
      "Мы знаем, что для бизнеса важна не только красота, но и цифры. Высокая наценка при доступной розничной цене — партнёры зарабатывают с каждой бутылки.",
  },
  {
    icon: TagIcon,
    title: "Брендирование под вас",
    description:
      "Наносим ваш логотип на этикетку. Для гостей это выглядит как собственное производство заведения. Брендирование — бесплатно при любом заказе.",
  },
  {
    icon: HandshakeIcon,
    title: "Работаем с любым форматом",
    description:
      "Кофейни, рестораны, фитнес-клубы, магазины, бары — мы подстраиваемся под ваш объём и условия, а не наоборот.",
  },
  {
    icon: TruckIcon,
    title: "Поставки без перебоев",
    description:
      "Держим складские остатки постоянно. Никаких «подождите месяц» — отгружаем сразу после заказа. Доставка по всей России через СДЭК, Озон и рейсовые автобусы.",
  },
  {
    icon: MegaphoneIcon,
    title: "Помогаем продавать",
    description:
      "Дарим баннеры, стойки, карточки вкусов и материалы для обучения персонала. Нам важно, чтобы кофе не просто стоял на полке, а продавался.",
  },
  {
    icon: StarIcon,
    title: "Эксклюзив в регионе",
    description:
      "При крупных объёмах становитесь единственным партнёром LULU в своём регионе. Никакой конкуренции рядом — только вы.",
  },
]

const partners = [
  { src: "/img/partners/_2.png", alt: "Партнёр 1" },
  { src: "/img/partners/IMG_0014.PNG", alt: "Партнёр 2" },
  { src: "/img/partners/photo1.png", alt: "Партнёр 3" },
]

export function Advantages() {
  return (
    <section id="advantages" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="w-12 h-1 rounded-full bg-[#f07d47]" />
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Почему нам доверяют
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Мы не просто поставляем кофе — мы строим партнёрство, в котором
            выгодно и комфортно обеим сторонам. Вот за что нас выбирают.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group relative bg-white rounded-2xl p-7 transition-all hover:shadow-lg cursor-default before:absolute before:inset-0 before:rounded-2xl before:bg-[#f07d47]/5 before:pointer-events-none overflow-hidden"
              >
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="shrink-0 [&_svg]:stroke-[#f07d47] [&_svg]:w-6 [&_svg]:h-6">
                      <Icon />
                    </div>
                    <h3 className="text-lg font-bold text-[#1a1a1a]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#6b7280] leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

          <div className="mt-16">
          <h3 className="text-xl font-semibold text-white mb-8 text-center">
            С нами работают
          </h3>
          <div className="relative overflow-hidden -mx-4 sm:-mx-6 lg:mx-0">
            <div className="flex gap-20 animate-scroll w-max items-center">
              {[...partners, ...partners].map((partner, i) => (
                <Image
                  key={i}
                  src={partner.src}
                  alt={partner.alt}
                  width={200}
                  height={66}
                  className="object-contain h-15 w-auto brightness-0 invert hover:brightness-0 hover:invert transition-all"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
