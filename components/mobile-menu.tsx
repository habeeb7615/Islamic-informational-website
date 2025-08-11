"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"
import { IslamicLogo } from "@/components/islamic-logo"

interface MobileMenuProps {
  isScrolled: boolean
}

export function MobileMenu({ isScrolled }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Our Courses", href: "/#ourcourses" },
    { name: "Fatwa", href: "/#fatwa" },
    { name: "Gallery", href: "/gallery" },
    { name: "Donation", href: "/#donation" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className={`lg:hidden transition-colors duration-300 ${
          isScrolled ? "text-emerald-800 hover:bg-emerald-50" : "text-white hover:bg-white/10"
        }`}
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeMenu} />

          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-emerald-100">
              <div className="flex items-center space-x-3">
                <IslamicLogo size="small" />
                <div className="text-emerald-800">
                  <h2 className="text-lg font-bold">Darul Uloom</h2>
                  <p className="text-xs text-emerald-600">Gulshane Qadriya Chishtiya</p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={closeMenu} className="text-emerald-800 hover:bg-emerald-50">
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Menu Items */}
            <nav className="p-6">
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-4 py-3 text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-8 pt-6 border-t border-emerald-100">
                <Link href="/#donation" onClick={closeMenu}>
                  <Button className="w-full bg-gradient-to-r from-emerald-600 to-turquoise-600 hover:from-emerald-700 hover:to-turquoise-700 text-white mb-3">
                    Donate Now
                  </Button>
                </Link>
                <Link href="/#contact" onClick={closeMenu}>
                  <Button
                    variant="outline"
                    className="w-full border-emerald-300 text-emerald-700 hover:bg-emerald-50 bg-transparent"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
