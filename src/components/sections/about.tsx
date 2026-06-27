import Image from "next/image"
import { CupIcon, LeafIcon, DropletIcon, ShieldIcon } from "./icons"

const items = [
  {
    icon: CupIcon,
    label: "Настаивание",
    value: "20+ часов",
    desc: "медленная экстракция вкуса",
  },
  {
    icon: LeafIcon,
    label: "Состав",
    value: "на основе арабики",
    desc: "вода и натуральный сок",
  },
  {
    icon: DropletIcon,
    label: "Вкус",
    value: "гладкий, без горечи",
    desc: "насыщенный кофейный вкус",
  },
  {
    icon: ShieldIcon,
    label: "Чистота",
    value: "без сахара",
    desc: "без искусственных добавок",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <div className="w-12 h-1 rounded-full bg-[#f07d47]" />
            <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Что такое КОЛД БРЮ
            </h2>
            <p className="mt-6 text-white/70 leading-relaxed text-lg">
              КОЛД БРЮ — это особый метод приготовления: молотый кофе медленно
              настаивается в холодной воде более 20 часов. Без нагрева, без спешки —
              только время раскрывает глубокий вкус без горечи и кислотности.
            </p>
          </div>
          <div className="relative aspect-square max-w-md mx-auto w-full rounded-2xl overflow-hidden border-[5px] border-white">
            <Image
              src="/img/baner.jpeg"
              alt="Процесс приготовления КОЛД БРЮ"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="relative flex items-start gap-3 rounded-xl bg-white p-5 before:absolute before:inset-0 before:rounded-xl before:bg-[#f07d47]/5 before:pointer-events-none overflow-hidden">
                <div className="relative shrink-0 mt-1 [&_svg]:stroke-[#f07d47]">
                  <Icon />
                </div>
                <div className="relative">
                  <div className="text-xs font-semibold text-[#1e4497] tracking-wider uppercase mb-1">
                    {item.label}
                  </div>
                  <div className="text-lg font-bold text-[#1a1a1a]">{item.value}</div>
                  <div className="text-sm text-[#6b7280] mt-1">{item.desc}</div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 max-w-2xl mx-auto">
          <div className="pt-6 border-t border-white/20">
            <p className="text-white/70 leading-relaxed">
              В каждой бутылке — отборная арабика, вода и натуральный сок. Без сахара,
              искусственных ароматизаторов. Каждая партия проходит
              контроль качества и имеет декларацию соответствия.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="block font-semibold text-white">Объём</span>
                <span className="text-white/60">280 мл</span>
              </div>
              <div>
                <span className="block font-semibold text-white">Срок хранения</span>
                <span className="text-white/60">газированный 60 дней, не газированный 90 дней</span>
              </div>
              <div>
                <span className="block font-semibold text-white">Кофеин</span>
                <span className="text-white/60">как в обычной чашке кофе</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
