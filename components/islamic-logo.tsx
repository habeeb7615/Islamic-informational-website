"use client"

import Image from "next/image"

export function IslamicLogo({ size = "large" }: { size?: "small" | "large" }) {
  const logoSize = size === "large" ? "w-16 h-16" : "w-12 h-12"

  return (
    <div className={`relative ${logoSize} hover:scale-105 transition-transform duration-300`}>
      <Image
        src="/images/darul-uloom-logo.png"
        alt="Darul Uloom Gulshane Qadriya Chishtiya Roon Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  )
}
