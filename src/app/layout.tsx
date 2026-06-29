import type { Metadata } from "next";
import { Montserrat, Pacifico } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin", "cyrillic"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lulu.ziptoweb.ru"),
  title: "LULU КОЛД БРЮ — Натуральный КОЛД БРЮ для кафе и HoReCa",
  description:
    "Поставка готового кофе холодного заваривания для кафе, кофеен, ресторанов и фитнес-клубов. Без сахара. Брендирование бутылок под ваш логотип, маржинальность от 50%, доставка по всей России.",
  keywords: [
    "КОЛД БРЮ",
    "колд брю",
    "кофе холодного заваривания",
    "оптовые поставки кофе",
    "брендирование бутылок",
    "кофе для кафе",
    "кофе для HoReCa",
    "LULU",
    "поставка кофе",
    "кофейный напиток без сахара",
    "партнёрство кофе",
    "опт кофе",
  ],
  authors: [{ name: "LULU" }],
  creator: "LULU",
  publisher: "LULU",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://lulu.ziptoweb.ru",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://lulu.ziptoweb.ru",
    siteName: "LULU КОЛД БРЮ",
    title: "LULU КОЛД БРЮ — Натуральный КОЛД БРЮ для вашего бизнеса",
    description:
      "Поставка готового кофе холодного заваривания для кафе, кофеен и HoReCa. Без сахара. Брендирование бутылок, маржинальность от 50%, доставка по всей России.",
    images: [
      {
        url: "/img/logo_3.jpeg",
        width: 1200,
        height: 630,
        alt: "LULU КОЛД БРЮ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LULU КОЛД БРЮ — Натуральный КОЛД БРЮ для вашего бизнеса",
    description:
      "Поставка готового кофе холодного заваривания для кафе, кофеен и HoReCa. Брендирование бутылок, маржинальность от 50%, доставка по всей России.",
    images: ["/img/logo_3.jpeg"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  category: "food & beverage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${montserrat.variable} ${pacifico.variable} font-sans antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
