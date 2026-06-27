const documents = [
  {
    title: "Декларация соответствия",
    desc: "Подтверждает безопасность и качество продукции",
    size: "PDF, 2.4 MB",
    file: "declaration.pdf",
  },
  {
    title: "Сертификат качества",
    desc: "Контроль качества каждой партии производства",
    size: "PDF, 1.8 MB",
    file: "certificate.pdf",
  },
  {
    title: "Разрешительная документация",
    desc: "Полный пакет документов для работы с продуктом",
    size: "PDF, 3.1 MB",
    file: "permits.pdf",
  },
  {
    title: "Протокол испытаний",
    desc: "Результаты лабораторных исследований продукта",
    size: "PDF, 1.5 MB",
    file: "protocol.pdf",
  },
]

export function Documents() {
  return (
    <section id="docs" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="w-12 h-1 rounded-full bg-[#f07d47]" />
          <h2 className="mt-6 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Всё прозрачно
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Мы работаем по всем правилам. Здесь — все документы, которые нужны
            для продажи продукта в вашем заведении.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {documents.map((doc, i) => (
            <a
              key={doc.title}
              href={`/docs/${doc.file}`}
              download
              className="group relative bg-white rounded-2xl p-6 transition-all hover:shadow-lg flex flex-col before:absolute before:inset-0 before:rounded-2xl before:bg-[#f07d47]/5 before:pointer-events-none overflow-hidden"
            >
              <div className="relative mb-4 [&_svg]:stroke-[#f07d47]">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3 className="relative text-base font-bold text-[#1a1a1a] mb-2">
                {doc.title}
              </h3>
              <p className="relative text-sm text-[#6b7280] leading-relaxed flex-1">
                {doc.desc}
              </p>
              <div className="relative mt-5 pt-4 border-t border-[#e8eaee] flex items-center justify-between">
                <span className="text-xs text-[#9ca3af]">{doc.size}</span>
                <span className="text-sm font-medium text-[#f07d47] flex items-center gap-1 group-hover:gap-2 transition-all">
                  Скачать
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
