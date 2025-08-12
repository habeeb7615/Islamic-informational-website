"use client"

import { useState, useEffect } from "react"
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"
    } else {
      document.body.style.overflow = "auto"
      document.body.style.position = "static"
      document.body.style.width = "auto"
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto"
      document.body.style.position = "static"
      document.body.style.width = "auto"
    }
  }, [isOpen])

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Our Courses", href: "/#ourcourses" },
   
    { name: "Gallery", href: "/gallery" },
    { name: "Donation", href: "/#donation" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMenu}
        className={`lg:hidden p-2 min-w-[44px] min-h-[44px] transition-all duration-300 relative z-[1001] ${
          isScrolled
            ? "text-emerald-800 hover:bg-emerald-100 border border-emerald-200"
            : "text-white hover:bg-white/20 border border-white/30"
        }`}
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      <div
        className={`fixed inset-0 z-[1000] lg:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: 0, left: 0, right: 0, bottom: 0 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeMenu}
        />

        <div
          className={`absolute top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ maxHeight: "100vh", overflowY: "auto" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-emerald-100 bg-white sticky top-0 z-10">
            <div className="flex items-center space-x-2">
              <IslamicLogo size="small" />
              <div className="text-emerald-800">
                <h2 className="text-base font-bold">Darul Uloom</h2>
                <p className="text-xs text-emerald-600">Gulshane Qadriya Chishtiya</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={closeMenu}
              className="text-emerald-800 hover:bg-emerald-50 p-2 min-w-[40px] min-h-[40px]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Menu Items */}
          <nav className="p-4 pb-20">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-emerald-800 hover:bg-emerald-50 rounded-lg transition-colors duration-200 font-medium text-base"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-6 pt-6 border-t border-emerald-100">
              <Link href="/#donation" onClick={closeMenu}>
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-turquoise-600 hover:from-emerald-700 hover:to-turquoise-700 text-white mb-3 h-12">
                  Donate Now
                </Button>
              </Link>
              <Link href="/#contact" onClick={closeMenu}>
                <Button
                  variant="outline"
                  className="w-full border-emerald-300 text-emerald-700 hover:bg-emerald-50 bg-transparent h-12"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
