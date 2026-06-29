"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { useEffect, useCallback } from "react"

const details = {
  "Гранат": { juice: "гранатовый сок" },
  "Смородина": { juice: "сок чёрной смородины" },
  "Ежевика малина": { juice: "сок ежевики и малины" },
  "Кизил": { juice: "сок кизила" },
}

interface FlavorModalProps {
  flavor: {
    name: string
    tag: string
    img: string
    full: string
    desc: string
  } | null
  onClose: () => void
}

export function FlavorModal({ flavor, onClose }: FlavorModalProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (flavor) {
      document.addEventListener("keydown", handleKey)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handleKey)
      document.body.style.overflow = ""
    }
  }, [flavor, handleKey])

  if (!flavor) return null

  const d = details[flavor.name as keyof typeof details]
  const juice = d?.juice ?? "сок"

  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-black/50"
        onClick={onClose}
      />

      {/* Desktop modal */}
      <div className="fixed inset-0 z-[101] hidden lg:flex items-center justify-center p-8">
        <div className="relative bg-surface rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-surface/90 flex items-center justify-center hover:bg-surface transition-colors"
          >
            <X size={18} className="text-[#6b7280]" />
          </button>
          <div className="grid grid-cols-2">
            <div className="p-6 flex items-center justify-center">
              <Image
                src={`/img/${flavor.img}`}
                alt={flavor.full}
                width={198}
                height={330}
                className="rounded-2xl max-w-full h-auto"
                sizes="220px"
              />
            </div>
            <div className="p-6 pl-0 flex flex-col justify-center">
              <p className="text-xs font-semibold text-[#f07d47] tracking-wider uppercase mb-1">
                КОЛД БРЮ
              </p>
              <h3 className="text-2xl font-bold text-on-surface">
                {flavor.name}
              </h3>
              <p className="mt-1 text-sm text-[#4b5563] leading-relaxed">
                Напиток безалкогольный кофейный тонизирующий колд брю {flavor.name}
              </p>
              <div className="mt-4 mb-3">
                <span className="text-xs font-semibold text-[#9ca3af] tracking-wider uppercase">
                  {flavor.name}
                </span>
              </div>
              <div className="space-y-3 text-sm text-[#4b5563]">
                <p>
                  <span className="font-semibold text-on-surface">Состав:</span> подготовленная вода, экстракт кофе, {juice}, консерванты (сорбат калия, бензоат натрия). Кофеин: не более 0,4 мг/см³
                </p>
                <div>
                  <p className="font-semibold text-on-surface">КБЖУ на 100 г продукта:</p>
                  <p>белки – 0 &nbsp; жиры – 0 &nbsp; углеводы – 11</p>
                  <p>Энергетическая ценность: 45 ккал / 180 кДж</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bottom sheet */}
      <div className="fixed inset-x-0 bottom-0 z-[101] lg:hidden flex flex-col max-h-[85vh] rounded-t-2xl bg-surface animate-slide-up">
        <div className="flex items-center justify-center pt-2 pb-1 shrink-0">
          <div className="w-8 h-1 rounded-full bg-[#d1d5db]" />
        </div>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-surface/90 flex items-center justify-center hover:bg-surface transition-colors shadow-sm"
        >
          <X size={16} className="text-[#6b7280]" />
        </button>
        <div className="overflow-y-auto px-6 pb-8 pt-2">
          <div className="flex gap-4 items-start mb-5">
            <Image
              src={`/img/${flavor.img}`}
              alt={flavor.full}
              width={90}
              height={150}
              className="rounded-2xl shrink-0"
              sizes="100px"
            />
            <div className="min-w-0 pt-1">
              <p className="text-xs font-semibold text-[#f07d47] tracking-wider uppercase mb-0.5">
                КОЛД БРЮ
              </p>
              <h3 className="text-xl font-bold text-on-surface">
                {flavor.name}
              </h3>
              <p className="mt-1 text-sm text-[#4b5563] leading-relaxed">
                Напиток безалкогольный кофейный тонизирующий колд брю {flavor.name}
              </p>
            </div>
          </div>
          <div className="mb-3">
            <span className="text-xs font-semibold text-[#9ca3af] tracking-wider uppercase">
              {flavor.name}
            </span>
          </div>
          <div className="space-y-3 text-sm text-[#4b5563]">
            <p>
              <span className="font-semibold text-on-surface">Состав:</span> подготовленная вода, экстракт кофе, {juice}, консерванты (сорбат калия, бензоат натрия). Кофеин: не более 0,4 мг/см³
            </p>
            <div>
              <p className="font-semibold text-on-surface">КБЖУ на 100 г продукта:</p>
              <p>белки – 0 &nbsp; жиры – 0 &nbsp; углеводы – 11</p>
              <p>Энергетическая ценность: 45 ккал / 180 кДж</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
