"use client"

import { useRef, useEffect, useState } from "react"

export function ScrollVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    const onScroll = () => {
      if (!video.duration) return
      const rect = container.getBoundingClientRect()
      const wh = window.innerHeight
      const total = container.offsetHeight + wh
      const scrolled = wh - rect.top
      const progress = Math.max(0, Math.min(1, scrolled / total))
      video.currentTime = progress * video.duration
    }

    const onMeta = () => {
      setReady(true)
      video.currentTime = 0.01
      video.play().then(() => video.pause()).catch(() => {})
      onScroll()
    }

    video.addEventListener("loadedmetadata", onMeta, { once: true })
    window.addEventListener("scroll", onScroll, { passive: true })
    if (video.readyState >= 1) onMeta()
    return () => {
      video.removeEventListener("loadedmetadata", onMeta)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative h-[300vh]"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-[#1e4497]">
        <div className="relative w-full max-w-sm mx-auto aspect-[9/16]">
          {!ready && (
            <div className="absolute inset-0 flex items-center justify-center text-white/40 text-sm rounded-2xl bg-[#1e4497]">
              Загружается...
            </div>
          )}
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className={`h-full w-full rounded-2xl border-[5px] border-white object-cover transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}
          >
            <source src="/video/pour.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
