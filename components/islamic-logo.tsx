"use client"

import Image from "next/image"

export function IslamicLogo({ size = "large" }: { size?: "small" | "large" }) {
  const logoSize = size === "large" ? "w-12 h-12 md:w-16 md:h-16" : "w-8 h-8 md:w-12 md:h-12"

  return (
    <div className={`relative ${logoSize} hover:scale-105 transition-transform duration-300 flex-shrink-0`}>
      <Image
        src="/images/darul-uloom-authentic-logo.png"
        alt="Darul Uloom Gulshane Qadriya Chishtiya Roon Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}
