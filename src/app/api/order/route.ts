const BOT_TOKEN = "6462119217:AAGK_qBSGVJFB68gujubifYuA_39hy41dTc"
const CHAT_ID = "-1004395824410"
const WORKER_URL = "https://misty-breeze-01ab.artemshashlikevich.workers.dev"

export async function POST(req: Request) {
  try {
    const { name, phone, company, comment } = await req.json()

    const text = [
      "📩 *Новая заявка LULU КОЛД БРЮ*",
      "",
      `👤 *Имя:* ${name || "—"}`,
      `📞 *Телефон:* ${phone || "—"}`,
      `🏢 *Компания:* ${company || "—"}`,
      `💬 *Комментарий:* ${comment || "—"}`,
      "",
      `🕐 ${new Date().toLocaleString("ru-RU")}`,
    ].join("\n")

    const res = await fetch(
      `${WORKER_URL}/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: "Markdown",
        }),
      }
    )

    if (!res.ok) {
      const err = await res.text()
      return Response.json({ ok: false, error: err }, { status: 500 })
    }

    return Response.json({ ok: true })
  } catch (e) {
    return Response.json({ ok: false, error: String(e) }, { status: 500 })
  }
}
