"use client"

import Image from "next/image"
import { useMemo } from "react";

export function IslamicLogo({ size = "large" }: { size?: "small" | "medium" | "large" }) {
  const logoSize = useMemo(() => {
    if (size === 'small') {
 return 'w-16 h-16'; // 16x16
    } else if (size === 'medium') {
 return 'w-24 h-24'; // 24x24
    }
 return 'w-32 h-32'; // 32x32 for large (default)
  }, [size]);

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
