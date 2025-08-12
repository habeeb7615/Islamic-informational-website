"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Smartphone, Download, CheckCircle, QrCode } from "lucide-react"

interface PaymentData {
  name: string
  contact: string
  amount: string
  purpose: string
  message: string
}

interface PaymentResult {
  success: boolean
  transactionId: string
  paymentId: string
  timestamp: string
}

export function UpiPaymentForm() {
  const [formData, setFormData] = useState<PaymentData>({
    name: "",
    contact: "",
    amount: "",
    purpose: "",
    message: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentResult, setPaymentResult] = useState<PaymentResult | null>(null)
  const [showQR, setShowQR] = useState(false)

  const quickAmounts = [500, 1000, 2500, 5000, 10000]

  const handleInputChange = (field: keyof PaymentData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const generateTransactionId = () => {
    return `DU-${new Date().getFullYear()}-${String(Date.now()).slice(-6)}`
  }

  const generatePaymentId = () => {
    return `PAY${Date.now()}${Math.random().toString(36).substr(2, 6).toUpperCase()}`
  }

  const generateHTMLReceipt = (result: PaymentResult) => {
    const receiptHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Donation Receipt</title>
<style>
    body {
        font-family: 'Segoe UI', Tahoma, sans-serif;
        background: #f4f4f4;
        margin: 0;
        padding: 20px;
    }
    .receipt-container {
        max-width: 700px;
        background: #fff;
        margin: auto;
        padding: 0;
        border-radius: 10px;
        box-shadow: 0px 0px 15px rgba(0,0,0,0.1);
        overflow: hidden;
    }
    .receipt-header {
        background: linear-gradient(135deg, #1abc9c, #16a085);
        text-align: center;
        padding: 20px;
        color: #fff;
    }
    .receipt-header img {
        max-height: 70px;
        margin-bottom: 8px;
    }
    .receipt-header h1 {
        margin: 5px 0;
        font-size: 24px;
        color: #fff;
    }
    .receipt-header p {
        font-size: 14px;
        color: #e0f2f1;
    }
    .content {
        padding: 30px;
    }
    .receipt-details {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
    }
    .receipt-details td {
        padding: 8px;
        border: 1px solid #ddd;
    }
    .thank-you {
        background: #e6f4ea;
        padding: 15px;
        text-align: center;
        border-radius: 6px;
        font-size: 16px;
        color: #2b6e42;
    }
    .footer {
        text-align: center;
        font-size: 12px;
        color: #999;
        margin: 15px 0;
        padding-bottom: 10px;
    }
    @media print {
        body { background: white; padding: 0; }
        .receipt-container { box-shadow: none; }
    }
</style>
</head>
<body>

<div class="receipt-container">
    <div class="receipt-header">
        <h1>Darul Uloom Gulshane Qadriya Chishtiya Roon</h1>
        <p>Donation Receipt</p>
    </div>

    <div class="content">
        <table class="receipt-details">
            <tr>
                <td><strong>Receipt No:</strong></td>
                <td>${result.transactionId}</td>
            </tr>
            <tr>
                <td><strong>Date:</strong></td>
                <td>${new Date(result.timestamp).toLocaleDateString("en-IN")}</td>
            </tr>
            <tr>
                <td><strong>Donor Name:</strong></td>
                <td>${formData.name}</td>
            </tr>
            <tr>
                <td><strong>Contact:</strong></td>
                <td>${formData.contact}</td>
            </tr>
            <tr>
                <td><strong>Amount Donated:</strong></td>
                <td>₹${formData.amount}</td>
            </tr>
            <tr>
                <td><strong>Payment Method:</strong></td>
                <td>UPI</td>
            </tr>
            <tr>
                <td><strong>Payment ID:</strong></td>
                <td>${result.paymentId}</td>
            </tr>
            <tr>
                <td><strong>Purpose:</strong></td>
                <td>${formData.purpose}</td>
            </tr>
            ${
              formData.message
                ? `
            <tr>
                <td><strong>Message:</strong></td>
                <td>${formData.message}</td>
            </tr>
            `
                : ""
            }
        </table>

        <div class="thank-you">
            Thank you for your generous contribution. Your support helps us continue our mission of Islamic education. May Allah accept your charity and multiply your rewards.
        </div>
    </div>

    <div class="footer">
        This receipt is generated electronically and does not require a signature.<br>
        © ${new Date().getFullYear()} Darul Uloom Gulshane Qadriya Chishtiya Roon
    </div>
</div>

</body>
</html>
    `

    const newWindow = window.open("", "_blank")
    if (newWindow) {
      newWindow.document.write(receiptHTML)
      newWindow.document.close()

      // Auto-print after a short delay
      setTimeout(() => {
        newWindow.print()
      }, 500)
    }
  }

  const handleUpiPayment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.contact || !formData.amount || !formData.purpose) return

    setIsProcessing(true)
    setShowQR(true)

    // Simulate UPI payment processing
    setTimeout(() => {
      const result: PaymentResult = {
        success: true,
        transactionId: generateTransactionId(),
        paymentId: generatePaymentId(),
        timestamp: new Date().toISOString(),
      }

      setPaymentResult(result)
      setIsProcessing(false)
      setShowQR(false)

      setTimeout(() => {
        generateHTMLReceipt(result)
      }, 1000)
    }, 3000)
  }

  const resetForm = () => {
    setFormData({
      name: "",
      contact: "",
      amount: "",
      purpose: "",
      message: "",
    })
    setPaymentResult(null)
  }

  if (paymentResult?.success) {
    return (
      <Card className="bg-white/95 backdrop-blur border-emerald-200 hover-lift">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-emerald-800 mb-4">Payment Successful!</h3>
          <p className="text-gray-600 mb-6">JazakAllah Khair! Your donation has been processed successfully.</p>

          <div className="bg-emerald-50 rounded-lg p-6 mb-6 text-left">
            <h4 className="font-semibold text-emerald-800 mb-3">Payment Details:</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Transaction ID:</span>
                <span className="font-mono font-semibold">{paymentResult.transactionId}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment ID:</span>
                <span className="font-mono font-semibold">{paymentResult.paymentId}</span>
              </div>
              <div className="flex justify-between">
                <span>Amount:</span>
                <span className="font-semibold">₹{formData.amount}</span>
              </div>
              <div className="flex justify-between">
                <span>Date & Time:</span>
                <span>{new Date(paymentResult.timestamp).toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => generateHTMLReceipt(paymentResult)}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Receipt
            </Button>
            <Button
              onClick={resetForm}
              variant="outline"
              className="flex-1 border-emerald-300 text-emerald-700 hover:bg-emerald-50 bg-transparent"
            >
              Make Another Donation
            </Button>
          </div>

          <div className="mt-6 text-center bg-emerald-50 p-4 rounded-lg">
            <p className="text-emerald-800 text-sm font-medium mb-2">
              "Who is it that will lend Allah a good loan which Allah will multiply for him many times over?"
            </p>
            <p className="text-emerald-600 text-xs font-semibold">- Surah Al-Baqarah 2:245</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (showQR) {
    return (
      <Card className="bg-white/95 backdrop-blur border-emerald-200">
        <CardContent className="p-8 text-center">
          <QrCode className="w-20 h-20 text-emerald-600 mx-auto mb-6" />
          <h3 className="text-xl font-bold text-emerald-800 mb-4">Complete Payment via UPI</h3>
          <p className="text-gray-600 mb-6">Scan the QR code with any UPI app or use the UPI ID below</p>

          <div className="bg-gray-100 rounded-lg p-6 mb-6">
            <div className="w-48 h-48 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center border-2 border-dashed border-gray-300">
              <div className="text-center">
                <QrCode className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">QR Code</p>
              </div>
            </div>
            <p className="font-mono text-lg font-semibold text-emerald-800">darululoom@upi</p>
            <p className="text-sm text-gray-600 mt-2">Amount: ₹{formData.amount}</p>
          </div>

          <div className="flex items-center justify-center space-x-2 text-emerald-600">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-emerald-600"></div>
            <span>Waiting for payment confirmation...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white/95 backdrop-blur border-emerald-200 hover-lift">
      <CardHeader className="bg-gradient-to-r from-emerald-600 to-turquoise-600 text-white rounded-t-lg">
        <CardTitle className="text-center text-xl md:text-2xl font-bold text-black">
          <Heart className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-2 text-black" />
          Make a Donation
        </CardTitle>
        <CardDescription className="text-center text-emerald-100 text-black">
          Your support is Sadaqah Jariyah - a continuous charity
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 md:p-6 space-y-6">
        <form onSubmit={handleUpiPayment} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="donor-name" className="text-emerald-800 font-semibold">
                Full Name *
              </Label>
              <Input
                id="donor-name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
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
                value={formData.contact}
                onChange={(e) => handleInputChange("contact", e.target.value)}
                required
                className="border-emerald-300 focus:border-emerald-500"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="donation-purpose" className="text-emerald-800 font-semibold">
              Donation Purpose *
            </Label>
            <Select value={formData.purpose} onValueChange={(value) => handleInputChange("purpose", value)}>
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
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2 mt-2">
              {quickAmounts.map((amount) => (
                <Button
                  key={amount}
                  type="button"
                  variant={formData.amount === amount.toString() ? "default" : "outline"}
                  size="sm"
                  className={`text-xs md:text-sm ${
                    formData.amount === amount.toString()
                      ? "bg-emerald-600 hover:bg-emerald-700"
                      : "border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                  }`}
                  onClick={() => handleInputChange("amount", amount.toString())}
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
              value={formData.amount}
              onChange={(e) => handleInputChange("amount", e.target.value)}
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
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              className="border-emerald-300 focus:border-emerald-500"
            />
          </div>

          <Button
            type="submit"
            disabled={isProcessing}
            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold py-3"
          >
            <Smartphone className="w-5 h-5 mr-2" />
            {isProcessing ? "Processing..." : "Pay with UPI"}
          </Button>

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
