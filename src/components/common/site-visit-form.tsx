"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Calendar, Check } from "lucide-react"

export default function SiteVisitForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Site Visit Scheduled!</h3>
        <p className="text-muted-foreground">
          Our sales executive will contact you shortly to confirm the appointment details.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name *
          </label>
          <Input id="name" name="name" required />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number *
          </label>
          <Input id="phone" name="phone" type="tel" required />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email Address
        </label>
        <Input id="email" name="email" type="email" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Preferred Date</label>
          <div className="relative">
            <Input type="date" className="pl-10" />
            <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Preferred Time</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
              <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Interested In</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select unit type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1bhk">1 BHK Apartment</SelectItem>
            <SelectItem value="2bhk">2 BHK Apartment</SelectItem>
            <SelectItem value="3bhk">3 BHK Apartment</SelectItem>
            <SelectItem value="penthouse">Penthouse</SelectItem>
            <SelectItem value="all">Show me all options</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Scheduling..." : "Schedule Site Visit"}
      </Button>

      <p className="text-xs text-muted-foreground">
        * Our sales team will contact you within 2 hours to confirm your appointment.
      </p>
    </form>
  )
}
