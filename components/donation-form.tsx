"use client"

import type React from "react"
import Image from "next/image"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Heart, CreditCard, Smartphone } from "lucide-react"

export function DonationForm() {
  const [donationAmount, setDonationAmount] = useState<string>("")
  const [donationPurpose, setDonationPurpose] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const quickAmounts = [500, 1000, 2500, 5000, 10000]

  return (
    <Card className="bg-white/95 backdrop-blur border-emerald-200 hover-lift">
      <CardHeader className="bg-gradient-to-r from-emerald-600 to-turquoise-600 text-white rounded-t-lg">
        <CardTitle className="text-center text-2xl font-noto">
          <Heart className="w-8 h-8 mx-auto mb-2" />
          Make a Donation
        </CardTitle>
        <CardDescription className="text-center text-emerald-100">
          Your support is Sadaqah Jariyah - a continuous charity
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="donor-name" className="text-emerald-800 font-semibold">
                Full Name *
              </Label>
              <Input
                id="donor-name"
                placeholder="Enter your full name"
                required
                className="border-emerald-300 focus:border-emerald-500"
              />
            </div>
            <div>
              <Label htmlFor="donor-contact" className="text-emerald-800 font-semibold">
                Email / Mobile *
              </Label>
              <Input
                id="donor-contact"
                placeholder="Email or mobile number"
                required
                className="border-emerald-300 focus:border-emerald-500"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="donation-purpose" className="text-emerald-800 font-semibold">
              Donation Purpose *
            </Label>
            <Select value={donationPurpose} onValueChange={setDonationPurpose}>
              <SelectTrigger className="border-emerald-300 focus:border-emerald-500">
                <SelectValue placeholder="Select donation purpose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="zakat">Zakat</SelectItem>
                <SelectItem value="sadaqah">Sadaqah</SelectItem>
                <SelectItem value="lillah">Lillah</SelectItem>
                <SelectItem value="construction">Madarsa Construction</SelectItem>
                <SelectItem value="food">Food for Students</SelectItem>
                <SelectItem value="books">Islamic Books & Library</SelectItem>
                <SelectItem value="general">General Fund</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-emerald-800 font-semibold">Quick Amount Selection</Label>
            <div className="grid grid-cols-5 gap-2 mt-2">
              {quickAmounts.map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant={donationAmount === amount.toString() ? "default" : "outline"}
                  className={`text-sm ${
                    donationAmount === amount.toString()
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                  }`}
                  onClick={() => setDonationAmount(amount.toString())}
                >
                  ₹{amount}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <Label htmlFor="donation-amount" className="text-emerald-800 font-semibold">
              Donation Amount (₹) *
            </Label>
            <Input
              id="donation-amount"
              type="number"
              placeholder="Enter custom amount"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              required
              className="border-emerald-300 focus:border-emerald-500"
            />
          </div>

          <div>
            <Label htmlFor="donation-message" className="text-emerald-800 font-semibold">
              Message / Dua (Optional)
            </Label>
            <Textarea
              id="donation-message"
              placeholder="Leave a message or request for dua..."
              className="border-emerald-300 focus:border-emerald-500"
            />
          </div>

          {/* UPI Payment Section */}
          <div className="text-center space-y-4">
            <p className="text-emerald-800 text-lg font-semibold">Pay with UPI</p>
            <div className="flex justify-center">
              {/* Replace with your actual UPI QR Code image */}
              <Image src="/placeholder.jpg" alt="UPI QR Code" width={200} height={200} />
            </div>
            <p className="text-emerald-700 text-sm">Scan the QR code with your UPI app to donate.</p>
            {/* You can also add a UPI ID here if needed */}
            <p className="text-emerald-700 text-sm font-medium">UPI ID: your_upi_id@bank</p> {/* Replace with your UPI ID */}
          </div>

          <div>
          </div>

          <div className="text-center bg-emerald-50 p-4 rounded-lg">
            <p className="text-emerald-800 text-sm font-medium mb-2">
              "Who is it that will lend Allah a good loan which Allah will multiply for him many times over?"
            </p>
            <p className="text-emerald-600 text-xs font-semibold">- Surah Al-Baqarah 2:245</p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
