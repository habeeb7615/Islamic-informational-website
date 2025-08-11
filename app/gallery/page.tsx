"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ExternalLink, X } from "lucide-react"
import { IslamicLogo } from "@/components/islamic-logo"

const galleryImages = [
  {
    src: "/images/hero-main-gathering.png",
    alt: "Large Community Gathering - Students and Faculty Assembly",
    title: "Community Assembly",
    category: "Events",
  },
  {
    src: "/images/quran-class.png",
    alt: "Students learning Quran recitation with traditional wooden desks",
    title: "Quran Recitation Class",
    category: "Education",
  },
  {
    src: "/images/hadith-study.png",
    alt: "Hadith study circle with teacher and students",
    title: "Hadith Study Circle",
    category: "Education",
  },
  {
    src: "/images/prayer-session.png",
    alt: "Students performing congregational prayer in organized rows",
    title: "Congregational Prayer",
    category: "Worship",
  },
  {
    src: "/images/iftar-gathering.png",
    alt: "Students sitting in assembly during Iftar gathering",
    title: "Iftar Community Gathering",
    category: "Events",
  },
  {
    src: "/images/library-study.png",
    alt: "Students studying in traditional classroom setting",
    title: "Library Study Session",
    category: "Education",
  },
  {
    src: "/images/graduation-ceremony.png",
    alt: "Students in white kurtas during graduation ceremony",
    title: "Graduation Ceremony",
    category: "Events",
  },
  {
    src: "/images/morning-assembly.png",
    alt: "Morning assembly of students in outdoor courtyard",
    title: "Morning Assembly",
    category: "Daily Life",
  },
  {
    src: "/images/madrasa-main-building.png",
    alt: "Students walking on steps of main academic building",
    title: "Main Academic Building",
    category: "Campus",
  },
  {
    src: "/images/madrasa-courtyard.png",
    alt: "Students gathered in madrasa courtyard",
    title: "Campus Courtyard",
    category: "Campus",
  },
  {
    src: "/images/student-life.png",
    alt: "Students in prayer formation showing daily spiritual life",
    title: "Student Spiritual Life",
    category: "Daily Life",
  },
  {
    src: "/images/molana-arbab-badmeri.png",
    alt: "Molana Arbab Badmeri teaching students in intimate setting",
    title: "Teaching Session with Molana",
    category: "Faculty",
  },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [filter, setFilter] = useState("All")
  const [isScrolled, setIsScrolled] = useState(false)

  const categories = ["All", "Education", "Events", "Worship", "Daily Life", "Campus", "Faculty"]

  const filteredImages = filter === "All" ? galleryImages : galleryImages.filter((img) => img.category === filter)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-turquoise-50 font-inter">
      {/* Compact Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-gradient-to-r from-emerald-800 via-emerald-700 to-turquoise-700 py-3"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <IslamicLogo size="small" />
              <div className={`transition-colors duration-300 ${isScrolled ? "text-emerald-800" : "text-white"}`}>
                <h1 className="text-lg font-bold">Darul Uloom</h1>
                {!isScrolled && <p className="text-xs text-emerald-200">Gulshane Qadriya Chishtiya Roon</p>}
              </div>
            </Link>

            <nav className="hidden lg:flex space-x-6">
              {["Home", "About", "Our Courses", "Fatwa", "Gallery", "Donation", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={
                    item === "Home" ? "/" : item === "Gallery" ? "/gallery" : `/#${item.toLowerCase().replace(" ", "")}`
                  }
                  className={`transition-all duration-300 font-medium relative group ${
                    isScrolled ? "text-emerald-800 hover:text-emerald-600" : "text-white hover:text-yellow-300"
                  } ${item === "Gallery" ? "font-semibold" : ""}`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      isScrolled ? "bg-emerald-600" : "bg-yellow-400"
                    }`}
                  ></span>
                </Link>
              ))}
            </nav>

            <Button
              variant="outline"
              size="sm"
              className={`lg:hidden transition-colors duration-300 ${
                isScrolled
                  ? "text-emerald-800 border-emerald-800 hover:bg-emerald-50"
                  : "text-white border-white hover:bg-white hover:text-emerald-800"
              }`}
            >
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Gallery Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-r from-emerald-800 via-emerald-700 to-turquoise-700 text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center mb-6">
              <Link href="/" className="flex items-center text-emerald-200 hover:text-white transition-colors mr-4">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Gallery</h1>
              <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto">
                Witness the beauty of Islamic education and community spirit through authentic moments from our Darul
                Uloom
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(category)}
                  className={`transition-all duration-300 ${
                    filter === category
                      ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                      : "border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white border-emerald-100"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      loading="lazy"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                            <span className="text-emerald-200 text-xs px-2 py-1 bg-emerald-800/50 rounded-full">
                              {image.category}
                            </span>
                          </div>
                          <ExternalLink className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">No images found for the selected category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </Button>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain rounded-lg"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <span className="text-emerald-300 text-sm px-3 py-1 bg-emerald-800/50 rounded-full">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
