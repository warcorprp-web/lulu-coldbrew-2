const tiers = [
  { volume: "40–100 шт", price: "180 ₽" },
  { volume: "100–1000 шт", price: "160 ₽", popular: true },
  { volume: "от 1000 шт", price: "140 ₽" },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="w-12 h-1 rounded-full bg-[#f07d47]" />
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-on-brand">
            Цены на КОЛД БРЮ
          </h2>
          <p className="mt-4 text-lg text-on-brand/70">
            Прозрачное ценообразование без скрытых платежей. Чем больше объём — тем выгоднее цена за бутылку.
          </p>
        </div>

        <div className="max-w-xl">
          {tiers.map((tier) => (
            <div
              key={tier.volume}
              className={`flex items-center justify-between py-3.5 border-b border-on-brand/10 last:border-b-0 ${
                tier.popular ? "text-[#f07d47]" : "text-on-brand/80"
              }`}
            >
              <span className="text-base">{tier.volume}</span>
              <span className="text-base font-bold tabular-nums">
                {tier.price}
                <span className="text-xs font-medium text-on-brand/40 ml-1">/шт</span>
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-on-brand/40">
          Для заказов от 1000 шт — эксклюзив в регионе
        </p>
      </div>
    </section>
  )
}
