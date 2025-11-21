"use client"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Calendar } from "lucide-react"

export default function BookingForm() {
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [adults, setAdults] = useState("2")
  const [children, setChildren] = useState("0")

  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Check-in</label>
        <div className="relative">
          <Input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="pl-10" />
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Check-out</label>
        <div className="relative">
          <Input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="pl-10" />
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Adults</label>
          <Select value={adults} onValueChange={setAdults}>
            <SelectTrigger>
              <SelectValue placeholder="Adults" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="4">4</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Children</label>
          <Select value={children} onValueChange={setChildren}>
            <SelectTrigger>
              <SelectValue placeholder="Children" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">0</SelectItem>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button className="w-full">Book Now</Button>
    </form>
  )
}
