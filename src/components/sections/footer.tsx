export function Footer() {
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
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/60">
            <a href="/#about" className="hover:text-white transition-colors">О продукте</a>
            <a href="/#advantages" className="hover:text-white transition-colors">Преимущества</a>
            <a href="/#flavors" className="hover:text-white transition-colors">Вкусы</a>
            <a href="/#branding" className="hover:text-white transition-colors">Брендирование</a>
            <a href="/#contact" className="hover:text-white transition-colors">Контакты</a>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/40">
          <a href="/data-consent" className="hover:text-white/60 transition-colors">Согласие на обработку данных</a>
          <a href="/privacy" className="hover:text-white/60 transition-colors">Политика конфиденциальности</a>
          <a href="/offer" className="hover:text-white/60 transition-colors">Публичная оферта</a>
        </div>
      </div>
    </footer>
  )
}
