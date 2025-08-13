"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ExternalLink, X } from "lucide-react"
import { IslamicLogo } from "@/components/islamic-logo"
import { MobileMenu } from "@/components/mobile-menu"
import { Youtube, Instagram, Facebook } from "lucide-react"

const galleryImages = [
  {
    src: "/images/independence-day-celebration.jpg",
    alt: "Students celebrating Independence Day with Indian flags in madrasa courtyard",
    title: "Independence Day Celebration",
    category: "Events",
  },
  {
    src: "/images/independence-day-flags.jpg",
    alt: "Students waving Indian flags during Independence Day celebration",
    title: "Patriotic Celebration",
    category: "Events",
  },
  {
    src: "/images/campus-aerial-view-1.jpg",
    alt: "Aerial view of complete Darul Uloom campus with mosque and buildings",
    title: "Campus Overview",
    category: "Campus",
  },
  {
    src: "/images/campus-aerial-view-2.jpg",
    alt: "Aerial perspective of madrasa complex showing architecture and layout",
    title: "Campus Architecture",
    category: "Campus",
  },
  {
    src: "/images/campus-aerial-view-3.jpg",
    alt: "Bird's eye view of Darul Uloom showing complete compound",
    title: "Campus Compound",
    category: "Campus",
  },
  {
    src: "/images/library-interior.jpg",
    alt: "Interior of madrasa library with wooden bookshelves and Islamic texts",
    title: "Islamic Library",
    category: "Education",
  },
  {
    src: "/images/students-group-formation.jpg",
    alt: "Large group of students in white kurtas and red caps in formation",
    title: "Student Assembly",
    category: "Daily Life",
  },
  {
    src: "/images/outdoor-classroom-session.jpg",
    alt: "Students attending outdoor classroom session with teacher",
    title: "Outdoor Learning",
    category: "Education",
  },
  {
    src: "/images/campus-aerial-view-4.jpg",
    alt: "Another aerial view showing campus layout and surrounding fields",
    title: "Campus Landscape",
    category: "Campus",
  },
  {
    src: "/images/campus-aerial-view-5.jpg",
    alt: "Comprehensive aerial view of Darul Uloom complex",
    title: "Complete Campus View",
    category: "Campus",
  },
  {
    src: "/images/indoor-independence-celebration.jpg",
    alt: "Students celebrating Independence Day indoors with flags in dormitory setting",
    title: "Indoor Independence Celebration",
    category: "Events",
  },
  {
    src: "/images/respected-scholar-portrait.jpg",
    alt: "Portrait of respected Islamic scholar with white beard and turban",
    title: "Respected Scholar",
    category: "Faculty",
  },
  {
    src: "/images/large-group-gathering.jpg",
    alt: "Large outdoor gathering of students and faculty under trees",
    title: "Community Gathering",
    category: "Events",
  },
  {
    src: "/images/administrative-office.jpg",
    alt: "Administrative office with desk, computer and filing systems",
    title: "Administrative Office",
    category: "Campus",
  },
  {
    src: "/images/award-ceremony-indoor.jpg",
    alt: "Indoor award ceremony with teachers presenting to students",
    title: "Award Ceremony",
    category: "Events",
  },
  {
    src: "/images/graduation-ceremony-gowns.jpg",
    alt: "Graduation ceremony with students in black gowns and flower garlands",
    title: "Graduation Day",
    category: "Events",
  },
  {
    src: "/images/religious-conference-stage.jpg",
    alt: "Religious conference with scholars on decorated stage platform",
    title: "Religious Conference",
    category: "Events",
  },
  {
    src: "/images/graduation-ceremony-close.jpg",
    alt: "Close-up view of graduation ceremony with students in traditional dress",
    title: "Graduation Ceremony",
    category: "Events",
  },
  {
    src: "/images/indoor-flag-ceremony.jpg",
    alt: "Indoor flag ceremony with students and teachers in assembly hall",
    title: "Flag Ceremony",
    category: "Events",
  },
  {
    src: "/images/community-meal-langar.jpg",
    alt: "Community meal service (langar) under covered area showing hospitality",
    title: "Community Meal Service",
    category: "Daily Life",
  },
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
  {
    src: "/images/traditional-classroom-study.jpg",
    alt: "Traditional classroom with students in white kurtas and red turbans studying Quran at wooden benches",
    title: "Traditional Classroom Study",
    category: "Education",
  },
  {
    src: "/images/small-group-discussion.jpg",
    alt: "Small group study session with teacher and students in red turbans sitting in circle",
    title: "Small Group Discussion",
    category: "Education",
  },
  {
    src: "/images/prayer-hall-congregation.jpg",
    alt: "Large prayer hall filled with students in white kurtas and red turbans during congregational prayer",
    title: "Prayer Hall Congregation",
    category: "Worship",
  },
  {
    src: "/images/outdoor-student-formation.jpg",
    alt: "Students in white dress and red turbans standing in organized formation in campus courtyard",
    title: "Outdoor Student Formation",
    category: "Daily Life",
  },
  {
    src: "/images/campus-assembly-gathering.jpg",
    alt: "Large outdoor assembly of students gathered in campus grounds with buildings in background",
    title: "Campus Assembly Gathering",
    category: "Events",
  },
  {
    src: "/images/circle-study-session.jpg",
    alt: "Students sitting in circle formation around teacher engaged in traditional Islamic education",
    title: "Circle Study Session",
    category: "Education",
  },
  {
    src: "/images/congregational-prayer-rows.jpg",
    alt: "Students performing Salah in organized rows showing religious discipline and devotion",
    title: "Congregational Prayer Rows",
    category: "Worship",
  },
  {
    src: "/images/prayer-hall-devotion.jpg",
    alt: "Another angle of congregational prayer showing the devotional aspect of madrasa life",
    title: "Prayer Hall Devotion",
    category: "Worship",
  },
  {
    src: "/images/classroom-wooden-desks.jpg",
    alt: "Traditional classroom with students sitting at wooden desks with Islamic texts and books",
    title: "Classroom with Wooden Desks",
    category: "Education",
  },
  {
    src: "/images/independence-day-outdoor.jpg",
    alt: "Outdoor Independence Day celebration with Indian flag and students gathered for patriotic ceremony",
    title: "Independence Day Outdoor Celebration",
    category: "Events",
  },
  {
    src: "/images/molana-arbab-badmeri-authentic.jpg",
    alt: "Molana Arbab Badmeri - Respected founder and director with white turban and beard",
    title: "Molana Arbab Badmeri - Founder",
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
      {/* Enhanced Header with Mobile Menu */}
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
                <h1 className="text-lg md:text-xl font-bold">Darul Uloom</h1>
                <p
                  className={`text-xs transition-colors duration-300 ${isScrolled ? "text-emerald-800" : "text-emerald-200"}`}
                >
                  Gulshane Qadriya Chishtiya Roon
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              {["Home", "About", "Our Courses", "Gallery", "Donation", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={
                    item === "Home" ? "/" : item === "Gallery" ? "/gallery" : `/#${item.toLowerCase().replace(" ", "")}`
                  }
                  className={`transition-all duration-300 font-medium relative group hover:scale-105 ${
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

            {/* Mobile Menu */}
            <MobileMenu isScrolled={isScrolled} />
          </div>
        </div>
      </header>

      {/* Gallery Content */}
      <main className="pt-16 md:pt-20">
        {/* Hero Section - Enhanced with Background Image */}
        <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/gallery-hero-gathering.jpg"
            alt="Darul Uloom Students and Faculty Gathering"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 via-emerald-800/60 to-emerald-900/80"></div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6 drop-shadow-lg">Our Gallery</h1>
              <p className="text-lg md:text-xl lg:text-2xl text-emerald-100 max-w-3xl mx-auto px-4 drop-shadow-md leading-relaxed">
                Witness the beauty of Islamic education and community spirit through authentic moments from our Darul
                Uloom
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs - Enhanced for Mobile */}
        <section className="py-6 md:py-8 bg-white shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(category)}
                  className={`transition-all duration-300 text-xs md:text-sm ${
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

        {/* Gallery Grid - Enhanced for Mobile */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
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
                      <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 right-3 md:right-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-white font-semibold text-sm md:text-base mb-1">{image.title}</h3>
                            <span className="text-emerald-200 text-xs px-2 py-1 bg-emerald-800/50 rounded-full">
                              {image.category}
                            </span>
                          </div>
                          <ExternalLink className="w-3 h-3 md:w-4 md:h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12 md:py-16">
                <p className="text-gray-500 text-base md:text-lg">No images found for the selected category.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Enhanced Lightbox Modal for Mobile */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedImage(null)}
              className="absolute -top-8 md:-top-12 right-0 text-white hover:text-gray-300 hover:bg-white/10"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </Button>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                fill
                className="object-contain rounded-lg"
              />
            </div>

            <div className="mt-3 md:mt-4 text-center">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2">{selectedImage.title}</h3>
              <span className="text-emerald-300 text-sm px-3 py-1 bg-emerald-800/50 rounded-full">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-turquoise-800 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 md:mb-16">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-6 md:mb-8">
                <IslamicLogo size="large" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold">Darul Uloom</h3>
                  <p className="text-emerald-200 text-sm md:text-base">Gulshane Qadriya Chishtiya Roon</p>
                </div>
              </div>
              <p className="text-emerald-200 leading-relaxed mb-4 md:mb-6 text-base md:text-lg">
                Dedicated to preserving authentic Islamic knowledge and nurturing the spiritual growth of our Ummah
                through traditional Sunni education and contemporary guidance.
              </p>
              <div className="flex flex-wrap justify-center gap-2 md:gap-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-emerald-400 text-emerald-200 hover:bg-emerald-700 bg-transparent text-xs md:text-sm"
                >
                  <Youtube className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  YouTube
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-emerald-400 text-emerald-200 hover:bg-emerald-700 bg-transparent text-xs md:text-sm"
                >
                  <Instagram className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  Instagram
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-emerald-400 text-emerald-200 hover:bg-emerald-700 bg-transparent text-xs md:text-sm"
                >
                  <Facebook className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2" />
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
