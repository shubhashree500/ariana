"use client"

import { useState } from "react"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/src/components/ui/select"
import { Calculator } from "lucide-react"

export default function PriceCalculator() {
  const [unitType, setUnitType] = useState("")
  const [floor, setFloor] = useState("")
  const [facing, setFacing] = useState("")

  const basePrice = {
    "1bhk": 4500000,
    "2bhk": 6500000,
    "3bhk": 9500000,
  }

  const floorPremium = {
    "1-5": 0,
    "6-10": 50000,
    "11-14": 100000,
  }

  const facingPremium = {
    east: 0,
    west: 25000,
    north: 50000,
    south: 75000,
  }

  const calculatePrice = () => {
    if (!unitType || !floor || !facing) return 0

    const base = basePrice[unitType as keyof typeof basePrice] || 0
    const floorExtra = floorPremium[floor as keyof typeof floorPremium] || 0
    const facingExtra = facingPremium[facing as keyof typeof facingPremium] || 0

    return base + floorExtra + facingExtra
  }

  const totalPrice = calculatePrice()

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Price Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Unit Type</label>
          <Select value={unitType} onValueChange={setUnitType}>
            <SelectTrigger>
              <SelectValue placeholder="Select unit type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1bhk">1 BHK</SelectItem>
              <SelectItem value="2bhk">2 BHK</SelectItem>
              <SelectItem value="3bhk">3 BHK</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Floor</label>
          <Select value={floor} onValueChange={setFloor}>
            <SelectTrigger>
              <SelectValue placeholder="Select floor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-5">1st - 5th Floor</SelectItem>
              <SelectItem value="6-10">6th - 10th Floor</SelectItem>
              <SelectItem value="11-14">11th - 14th Floor</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Facing</label>
          <Select value={facing} onValueChange={setFacing}>
            <SelectTrigger>
              <SelectValue placeholder="Select facing" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="east">East Facing</SelectItem>
              <SelectItem value="west">West Facing</SelectItem>
              <SelectItem value="north">North Facing</SelectItem>
              <SelectItem value="south">South Facing</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {totalPrice > 0 && (
          <div className="bg-muted/50 p-4 rounded-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">₹{(totalPrice / 100000).toFixed(1)} Lakhs</div>
              <div className="text-sm text-muted-foreground">Estimated Price*</div>
            </div>
          </div>
        )}

        <Button className="w-full">Get Detailed Quote</Button>

        <div className="text-xs text-muted-foreground">
          *Prices are indicative and subject to change. Additional charges like parking, registration, and other fees
          are not included.
        </div>
      </CardContent>
    </Card>
  )
}
