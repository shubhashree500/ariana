"use client"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Slider } from "@/src/components/ui/slider"
import { Card, CardContent } from "@/src/components/ui/card"

export default function RoomFilters() {
  const [priceRange, setPriceRange] = useState([10000, 50000])

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Check-in</label>
            <Input type="date" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Check-out</label>
            <Input type="date" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Guests</label>
            <Select defaultValue="2">
              <SelectTrigger>
                <SelectValue placeholder="Select guests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Guest</SelectItem>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="3">3 Guests</SelectItem>
                <SelectItem value="4">4 Guests</SelectItem>
                <SelectItem value="5">5+ Guests</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Room Type</label>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select room type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Rooms</SelectItem>
                <SelectItem value="deluxe">Deluxe Room</SelectItem>
                <SelectItem value="premium">Premium Room</SelectItem>
                <SelectItem value="suite">Suite</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium">Price Range</label>
              <span className="text-sm text-muted-foreground">
                ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
              </span>
            </div>
            <Slider
              defaultValue={priceRange}
              min={5000}
              max={50000}
              step={1000}
              onValueChange={setPriceRange}
              className="py-4"
            />
          </div>

          <div className="flex justify-end">
            <Button>Apply Filters</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
