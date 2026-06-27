import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { TagIcon, ShieldIcon, CupIcon, TruckIcon, DropletIcon, HandshakeIcon } from "./icons"

const faqItems = [
  {
    icon: TagIcon,
    question: "Какой минимальный заказ?",
    answer:
      "Минимальный заказ — 40 бутылок. Брендирование под ваш логотип — бесплатно при любом заказе. Для крупных сетей обсуждаем индивидуальные условия.",
  },
  {
    icon: ShieldIcon,
    question: "Какие документы нужны для продажи?",
    answer:
      "Декларация соответствия, сертификат качества, договор поставки — всё, что нужно для продажи в вашем заведении. Без бумажной волокиты с вашей стороны.",
  },
  {
    icon: HandshakeIcon,
    question: "Сколько стоит брендирование бутылок?",
    answer:
      "Бесплатно при любом заказе. Макет этикетки делаем сами, под ваш бренд.",
  },
  {
    icon: CupIcon,
    question: "Сколько хранится бутылка и нужны ли особые условия?",
    answer:
      "Не газированный — 90 дней, газированный — 60 дней при температуре от +2 до +25°C. До вскрытия холодильник не нужен. После открытия лучше выпить в течение суток.",
  },
  {
    icon: TruckIcon,
    question: "Доставляете ли вы в другие города?",
    answer:
      "Да, по всей России — транспортными компаниями (СДЭК, Озон), а также рейсовыми автобусами. От 2 до 7 дней в зависимости от региона. Помогаем подобрать оптимальную логистику.",
  },
  {
    icon: DropletIcon,
    question: "Можно ли сначала попробовать образцы?",
    answer:
      "Можете заказать любое количество на пробу — для пробной партии минимальный заказ не требуется. Бесплатно можем привезти образцы только по Астрахани. В другие города — по стоимости доставки выбранным способом.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="w-12 h-1 rounded-full bg-[#f07d47]" />
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Коротко о важном
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Собрали ответы на вопросы, которые нам задают чаще всего.
            Не нашли свой? Напишите нам — ответим лично.
          </p>
        </div>
        <Accordion multiple={false} className="w-full flex flex-col gap-4">
          {faqItems.map((item, i) => {
            const Icon = item.icon
            return (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="relative bg-white rounded-2xl px-6 border-none [&_[data-slot=accordion-trigger-icon]]:text-[#f07d47] before:absolute before:inset-0 before:rounded-2xl before:bg-[#f07d47]/5 before:pointer-events-none overflow-hidden"
            >
              <AccordionTrigger className="relative text-left text-[#1a1a1a] hover:no-underline">
                <span className="flex items-center gap-3">
                  <span className="shrink-0 [&_svg]:stroke-[#f07d47]">
                    <Icon />
                  </span>
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="relative text-[#6b7280]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </section>
  )
}
