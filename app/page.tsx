import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Phone, Mail, MapPin, Star, HandHeart, ScrollText, UserCheck, Calendar, Clock, Award, Globe, Share2, Facebook, Instagram, Youtube, ExternalLink, GraduationCap, ChurchIcon as Mosque, Heart } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { FloatingDonateButton } from "@/components/floating-donate-button"
import { ContactForm } from "@/components/contact-form"
import { DonationForm } from "@/components/donation-form"
import { IslamicLogo } from "@/components/islamic-logo"

export default function IslamicWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-turquoise-50 font-sans">
      <FloatingDonateButton />

      {/* Header */}
      <header className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-turquoise-700 text-white shadow-2xl sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <IslamicLogo size="large" />
              <div>
                <h1 className="text-2xl font-bold">Darul Uloom</h1>
                <p className="text-sm text-emerald-200">Gulshane Qadriya Chishtiya Roon</p>
              </div>
            </div>

            <nav className="hidden lg:flex space-x-8">
              {["Home", "About", "Courses", "Fatwa", "Donation", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-yellow-300 transition-all duration-300 font-semibold relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            <Button variant="outline" className="lg:hidden text-emerald-800 border-white bg-white/90 hover:bg-white">
              Menu
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden islamic-pattern">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-madrasa.png"
            alt="Darul Uloom Madrasa Building"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/70 to-turquoise-800/80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl fade-in-up">
          <div className="mb-8">
            <Star className="w-12 h-12 text-yellow-400 mx-auto mb-6 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Nurturing Knowledge,
            <br />
            <span className="text-yellow-300">Preserving Faith</span>
          </h1>
          <p className="text-xl md:text-3xl mb-12 text-emerald-100 leading-relaxed">
            Empowering the next generation of Ulama and preserving Islamic heritage through authentic Sunni education.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 hover-lift">
              <BookOpen className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Islamic Education</h3>
              <p className="text-sm text-emerald-200">Traditional Sunni-style Ilm</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 hover-lift">
              <ScrollText className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Fatwa Service</h3>
              <p className="text-sm text-emerald-200">Ask your daily Fiqh questions</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6 hover-lift">
              <HandHeart className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Zakat/Sadaqah</h3>
              <p className="text-sm text-emerald-200">Spend in the path of Allah</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-10 py-4 text-lg font-semibold shadow-2xl hover-lift"
            >
              <HandHeart className="w-6 h-6 mr-3" />
              Donate Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-800 px-10 py-4 text-lg font-semibold bg-transparent hover-lift"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl font-bold text-emerald-800 mb-6">About Our Institution</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A beacon of authentic Islamic education rooted in the blessed traditions of our pious predecessors
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="fade-in-up">
              <Image
                src="/images/molana-arbab-badmeri.png"
                alt="Molana Arbab Badmeri"
                width={700}
                height={500}
                className="rounded-2xl shadow-2xl hover-lift"
              />
            </div>

            <div className="space-y-8 fade-in-up">
              <div>
                <h3 className="text-3xl font-bold text-emerald-800 mb-4">Molana Arbab Badmeri</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Founded and directed by the esteemed Molana Arbab Badmeri, our Darul Uloom stands as a testament to
                  authentic Islamic scholarship. With decades of experience in Islamic jurisprudence and spiritual
                  guidance, Molana Sahib has dedicated his life to preserving and transmitting the sacred knowledge of
                  Islam.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Under his blessed guidance, our institution has grown from humble beginnings to become a recognized
                  center of Islamic learning, producing scholars who serve communities across the region.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="card-peaceful hover-lift border-emerald-200">
                  <CardContent className="p-6 text-center">
                    <Award className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-emerald-800 text-lg">25+ Years</h4>
                    <p className="text-sm text-gray-600">Of dedicated service</p>
                  </CardContent>
                </Card>

                <Card className="card-peaceful hover-lift border-emerald-200">
                  <CardContent className="p-6 text-center">
                    <Users className="w-10 h-10 text-emerald-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-emerald-800 text-lg">500+</h4>
                    <p className="text-sm text-gray-600">Students graduated</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Madrasa Building Showcase */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-emerald-800 mb-8 text-center">Our Sacred Campus</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover-lift">
                <Image
                  src="/images/madrasa-main-building.png"
                  alt="Madrasa Main Building"
                  width={600}
                  height={400}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-white font-semibold text-xl mb-2">Main Academic Building</h4>
                    <p className="text-emerald-200 text-sm">Where knowledge and faith unite</p>
                  </div>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-2xl shadow-xl hover-lift">
                <Image
                  src="/images/madrasa-courtyard.png"
                  alt="Madrasa Courtyard"
                  width={600}
                  height={400}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-white font-semibold text-xl mb-2">Study Courtyard</h4>
                    <p className="text-emerald-200 text-sm">Peaceful environment for learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover-lift">
            <h3 className="text-2xl font-bold text-emerald-800 mb-8 text-center">Our Journey</h3>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { year: "1998", event: "Foundation", desc: "Darul Uloom established" },
                { year: "2005", event: "Expansion", desc: "New classrooms added" },
                { year: "2015", event: "Recognition", desc: "Official recognition received" },
                { year: "2024", event: "Growth", desc: "Digital presence launched" },
              ].map((milestone, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-turquoise-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-emerald-800 text-lg">{milestone.year}</h4>
                  <h5 className="font-semibold text-gray-800 mb-2">{milestone.event}</h5>
                  <p className="text-sm text-gray-600">{milestone.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Islamic Services Section */}
      <section id="courses" className="py-24 bg-gradient-to-b from-emerald-50 to-turquoise-50 islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl font-bold text-emerald-800 mb-6">Our Islamic Services</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive Islamic education and spiritual guidance rooted in authentic scholarship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Qur'an & Hadith Teaching",
                description:
                  "Complete Hifz program with Tajweed, Tafseer, and authentic Hadith studies following traditional methodology.",
                color: "from-emerald-500 to-emerald-600",
              },
              {
                icon: ScrollText,
                title: "Fatwa Service",
                description:
                  "Expert religious guidance on contemporary issues based on Qur'an, Sunnah, and classical Fiqh principles.",
                color: "from-turquoise-500 to-turquoise-600",
              },
              {
                icon: UserCheck,
                title: "Islamic Guidance",
                description:
                  "Personal counseling for spiritual development, marriage, business ethics, and daily Islamic living.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Users,
                title: "Separate Education",
                description:
                  "Dedicated Hifz and Alim programs for boys and girls in appropriate Islamic educational environments.",
                color: "from-purple-500 to-purple-600",
              },
            ].map((service, index) => (
              <Card key={index} className="card-peaceful hover-lift border-emerald-200 bg-white/80 backdrop-blur">
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-emerald-800 text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section
        id="donation"
        className="py-24 bg-gradient-to-br from-emerald-800 via-emerald-700 to-turquoise-700 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 islamic-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <HandHeart className="w-20 h-20 text-yellow-400 mx-auto mb-8" />
            <h2 className="text-5xl font-bold mb-6">Support Our Mission</h2>
            <p className="text-2xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
              Your Zakat and Sadaqah help us provide free Islamic education, meals for students, and preserve the
              beautiful tradition of Islamic scholarship for future generations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <DonationForm />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gradient-to-b from-white to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl font-bold text-emerald-800 mb-6">Our Institution Gallery</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Witness the beauty of Islamic education and community spirit through our activities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Qur'an Recitation Classes",
                image: "/images/quran-class.png",
              },
              {
                title: "Hadith Study Circle",
                image: "/images/hadith-study.png",
              },
              {
                title: "Evening Prayer Session",
                image: "/images/prayer-session.png",
              },
              {
                title: "Iftar Community Gathering",
                image: "/images/iftar-gathering.png",
              },
              {
                title: "Library Study Session",
                image: "/images/library-study.png",
              },
              {
                title: "Annual Graduation Ceremony",
                image: "/images/graduation-ceremony.png",
              },
              {
                title: "Madrasa Kitchen & Dining",
                image: "/images/kitchen-dining.png",
              },
              {
                title: "Morning Assembly",
                image: "/images/morning-assembly.png",
              },
              {
                title: "Calligraphy Class",
                image: "/images/calligraphy-class.png",
              },
            ].map((item, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl shadow-xl hover-lift">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-emerald-800 bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Full Size
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Life Section */}
      <section className="py-24 bg-gradient-to-b from-emerald-50 to-turquoise-50 islamic-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl font-bold text-emerald-800 mb-6">Student Life at Our Madrasa</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experience the daily rhythm of Islamic learning and spiritual growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in-up">
              <div className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                <div className="flex items-center mb-4">
                  <Clock className="w-8 h-8 text-emerald-600 mr-4" />
                  <h3 className="text-xl font-bold text-emerald-800">Daily Schedule</h3>
                </div>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Fajr Prayer & Quran</span>
                    <span className="font-semibold">5:30 - 7:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Breakfast & Rest</span>
                    <span className="font-semibold">7:00 - 8:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Morning Classes</span>
                    <span className="font-semibold">8:00 - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dhuhr & Lunch</span>
                    <span className="font-semibold">12:00 - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Afternoon Studies</span>
                    <span className="font-semibold">2:00 - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Asr & Evening Classes</span>
                    <span className="font-semibold">4:00 - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Maghrib & Dinner</span>
                    <span className="font-semibold">6:00 - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Isha & Night Study</span>
                    <span className="font-semibold">8:00 - 10:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover-lift">
                <div className="flex items-center mb-4">
                  <Heart className="w-8 h-8 text-emerald-600 mr-4" />
                  <h3 className="text-xl font-bold text-emerald-800">Student Care</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Free accommodation and meals
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Medical care and health support
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Personal mentorship and guidance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                    Family-like environment
                  </li>
                </ul>
              </div>
            </div>

            <div className="fade-in-up">
              <Image
                src="/images/student-life.png"
                alt="Student Life"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 fade-in-up">
            <h2 className="text-5xl font-bold text-emerald-800 mb-6">Get In Touch</h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-yellow-400 to-yellow-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Connect with us for admissions, religious guidance, or any inquiries about our programs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="fade-in-up">
              <ContactForm />
            </div>

            <div className="space-y-8 fade-in-up">
              <Card className="card-peaceful hover-lift border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-emerald-800 flex items-center">
                    <MapPin className="w-6 h-6 mr-3 text-yellow-600" />
                    Visit Our Campus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Darul Uloom Gulshane Qadriya Chishtiya Roon
                    <br />
                    Village Roon, Tehsil Siwana
                    <br />
                    District Barmer, Rajasthan 344044
                    <br />
                    India
                  </p>
                  <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center">
                    <div className="text-center">
                      <Mosque className="w-12 h-12 text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-600">Interactive Map Coming Soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-6">
                <Card className="card-peaceful hover-lift border-emerald-200">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-emerald-800 mb-2">Call Us</h4>
                    <p className="text-gray-600 text-sm">+91 98765 43210</p>
                  </CardContent>
                </Card>

                <Card className="card-peaceful hover-lift border-emerald-200">
                  <CardContent className="p-6 text-center">
                    <Mail className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
                    <h4 className="font-semibold text-emerald-800 mb-2">Email</h4>
                    <p className="text-gray-600 text-sm">info@darululoom-roon.org</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="card-peaceful hover-lift border-emerald-200">
                <CardHeader>
                  <CardTitle className="text-emerald-800 flex items-center">
                    <Clock className="w-6 h-6 mr-3 text-yellow-600" />
                    Prayer Times & Visiting Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fajr:</span>
                      <span className="font-semibold">5:30 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dhuhr:</span>
                      <span className="font-semibold">12:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Asr:</span>
                      <span className="font-semibold">4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Maghrib:</span>
                      <span className="font-semibold">6:45 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Isha:</span>
                      <span className="font-semibold">8:00 PM</span>
                    </div>
                    <hr className="my-3" />
                    <div className="flex justify-between">
                      <span className="text-gray-600">Visiting Hours:</span>
                      <span className="font-semibold">9 AM - 5 PM</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-turquoise-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                <IslamicLogo size="large" />
                <div>
                  <h3 className="text-2xl font-bold">Darul Uloom</h3>
                  <p className="text-emerald-200">Gulshane Qadriya Chishtiya Roon</p>
                </div>
              </div>
              <p className="text-emerald-200 leading-relaxed mb-6 text-lg">
                Dedicated to preserving authentic Islamic knowledge and nurturing the spiritual growth of our Ummah
                through traditional Sunni education and contemporary guidance.
              </p>
              <div className="flex space-x-4">
                <Button
                  size="sm"
                  variant="outline"
                  className="border-emerald-400 text-emerald-200 hover:bg-emerald-700 bg-transparent"
                >
                  <Youtube className="w-4 h-4 mr-2" />
                  YouTube
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-emerald-400 text-emerald-200 hover:bg-emerald-700 bg-transparent"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-emerald-400 text-emerald-200 hover:bg-emerald-700 bg-transparent"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
              <div className="space-y-3">
                {[
                  "About Us",
                  "Admission Process",
                  "Course Curriculum",
                  "Fatwa Service",
                  "Donation Portal",
                  "Alumni Network",
                ].map((link) => (
                  <Link key={link} href="#" className="block text-emerald-200 hover:text-yellow-300 transition-colors">
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-6">Our Services</h4>
              <div className="space-y-3">
                {[
                  "Hifz-ul-Quran",
                  "Alim Course",
                  "Tajweed Classes",
                  "Islamic Counseling",
                  "Marriage Guidance",
                  "Business Ethics",
                ].map((service) => (
                  <Link
                    key={service}
                    href="#"
                    className="block text-emerald-200 hover:text-yellow-300 transition-colors"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-emerald-700 pt-12">
            <div className="text-center">
              <div className="bg-emerald-800/50 rounded-2xl p-8 mb-8 max-w-4xl mx-auto">
                <p className="text-emerald-100 mb-4 italic text-xl leading-relaxed">
                  "مَن يُقْرِضُ اللَّهَ قَرْضًا حَسَنًا فَيُضَاعِفَهُ لَهُ أَضْعَافًا كَثِيرَةً"
                </p>
                <p className="text-yellow-300 text-lg font-semibold mb-2">
                  "Who is it that will lend Allah a good loan which Allah will multiply for him many times over?"
                </p>
                <p className="text-emerald-300 font-semibold">- Surah Al-Baqarah 2:245</p>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-emerald-300 mb-4 md:mb-0">
                  © 2024 Darul Uloom Gulshane Qadriya Chishtiya Roon. All rights reserved.
                </p>
                <div className="flex items-center space-x-4">
                  <Button size="sm" variant="ghost" className="text-emerald-200 hover:text-yellow-300">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                  <Button size="sm" variant="ghost" className="text-emerald-200 hover:text-yellow-300">
                    <Globe className="w-4 h-4 mr-2" />
                    العربية
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
