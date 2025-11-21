"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Input } from "@/src/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Phone } from "lucide-react"

export default function Hero() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [unitType, setUnitType] = useState("")

  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-[600px] lg:h-[700px]">
        <Image
          src="https://singlesmediacontent.com/microsite/4299/1747645466_0_propertyImage.webp"
          alt="Ariana Inka Linga Vihar"
          fill
          className="object-cover brightness-[0.85]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/70" />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-md">
            Your Dream Home Awaits
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto drop-shadow-md">
            Discover luxury living at Ariana Inka Linga Vihar - Premium apartments with world-class amenities in a prime
            location. Starting from ₹45 Lakhs*
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/floor-plans">View Floor Plans</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white">
              <Link href="/contact">Schedule Site Visit</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Inquiry Form */}
      <div className="container mx-auto px-4">
        <Card className="relative -mt-24 z-10 shadow-lg border-none">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-center">Get Best Price & Offers</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Full Name</label>
                <Input placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <div className="relative">
                  <Input
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-10"
                  />
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Interested In</label>
                <Select value={unitType} onValueChange={setUnitType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select unit type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1bhk">1 BHK</SelectItem>
                    <SelectItem value="2bhk">2 BHK</SelectItem>
                    <SelectItem value="3bhk">3 BHK</SelectItem>
                    <SelectItem value="penthouse">Penthouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Budget Range</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="40-60">₹40-60 Lakhs</SelectItem>
                    <SelectItem value="60-80">₹60-80 Lakhs</SelectItem>
                    <SelectItem value="80-100">₹80-100 Lakhs</SelectItem>
                    <SelectItem value="100+">₹100+ Lakhs</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button className="w-full" size="lg">
                  Get Details
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
