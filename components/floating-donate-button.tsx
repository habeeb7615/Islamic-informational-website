"use client"

import { Button } from "@/components/ui/button"
import { HandHeart } from "lucide-react"

export function FloatingDonateButton() {
  const scrollToDonation = () => {
    document.getElementById("donation")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <Button
      onClick={scrollToDonation}
      className="floating-donate bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white shadow-2xl rounded-full px-6 py-3 text-sm font-semibold"
      size="lg"
    >
      <HandHeart className="w-5 h-5 mr-2" />
      Donate Now
    </Button>
  )
}
