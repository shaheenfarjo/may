"use client"

import { useEffect } from "react"

// Publishes the pointer offset as CSS custom properties (--px / --py) so hover
// effects can follow the cursor without per-element listeners or React re-renders.
export function PointerParallax({ amount = 10 }: { amount?: number }) {
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
    if (!finePointer.matches || reducedMotion.matches) return

    const root = document.documentElement
    let frame = 0

    const handleMove = (e: PointerEvent) => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        frame = 0
        root.style.setProperty("--px", `${(e.clientX / window.innerWidth - 0.5) * amount}px`)
        root.style.setProperty("--py", `${(e.clientY / window.innerHeight - 0.5) * amount}px`)
      })
    }

    window.addEventListener("pointermove", handleMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", handleMove)
      cancelAnimationFrame(frame)
    }
  }, [amount])

  return null
}
