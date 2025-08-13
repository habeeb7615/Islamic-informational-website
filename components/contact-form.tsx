"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, MessageCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/919876543210?text=Assalamu%20Alaikum,%20I%20would%20like%20to%20know%20more%20about%20Darul%20Uloom",
      "_blank",
    )
  }

  return (
    <Card className="hover-lift border-emerald-200">
      <CardHeader className="bg-gradient-to-r from-emerald-50 to-turquoise-50">
        <CardTitle className="text-emerald-800 font-noto">Contact Us</CardTitle>
        <CardDescription>Send us a message or reach out via WhatsApp</CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-emerald-800 mb-2">JazakAllah Khair!</h3>
            <p className="text-gray-600">
              Your message has been sent successfully. We'll get back to you soon, In Sha Allah.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="contact-name">Full Name</Label>
                <Input id="contact-name" placeholder="Enter your name" required />
              </div>
              <div>
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" type="email" placeholder="Enter your email" required />
              </div>
            </div>

            <div>
              <Label htmlFor="contact-subject">Subject</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admission">Admission Inquiry</SelectItem>
                  <SelectItem value="donation">Donation Information</SelectItem>
                  <SelectItem value="general">General Question</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="contact-message">Message</Label>
              <Textarea id="contact-message" placeholder="Write your message here..." required />
            </div>

            <div className="flex gap-3">
              <Button type="submit" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
              <Button
                type="button"
                onClick={handleWhatsApp}
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  )
}
