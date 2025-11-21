import Image from "next/image"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Users, Maximize2, Coffee, Wifi, Bath } from "lucide-react"

export default function RoomsList() {
  const rooms = [
    {
      name: "Deluxe Room",
      description: "Spacious room with modern amenities and garden view",
      image: "/placeholder.svg?height=400&width=600",
      price: 12000,
      capacity: "2 Adults",
      size: "400 sq. ft.",
      amenities: ["Free Wi-Fi", "Breakfast", "Air Conditioning"],
      slug: "deluxe-room",
    },
    {
      name: "Premium Room",
      description: "Elegant room with enhanced amenities and pool view",
      image: "/placeholder.svg?height=400&width=600",
      price: 15000,
      capacity: "2 Adults, 1 Child",
      size: "450 sq. ft.",
      amenities: ["Free Wi-Fi", "Breakfast", "Mini Bar"],
      slug: "premium-room",
    },
    {
      name: "Executive Suite",
      description: "Spacious suite with separate living area and balcony",
      image: "/placeholder.svg?height=400&width=600",
      price: 18000,
      capacity: "2 Adults, 2 Children",
      size: "650 sq. ft.",
      amenities: ["Free Wi-Fi", "Breakfast", "Lounge Access"],
      slug: "executive-suite",
    },
    {
      name: "Family Suite",
      description: "Perfect for families with two bedrooms and spacious living area",
      image: "/placeholder.svg?height=400&width=600",
      price: 22000,
      capacity: "4 Adults",
      size: "800 sq. ft.",
      amenities: ["Free Wi-Fi", "Breakfast", "Kitchen"],
      slug: "family-suite",
    },
    {
      name: "Royal Villa",
      description: "Exclusive villa with private pool and personalized service",
      image: "/placeholder.svg?height=400&width=600",
      price: 35000,
      capacity: "4 Adults",
      size: "1200 sq. ft.",
      amenities: ["Free Wi-Fi", "Breakfast", "Private Pool"],
      slug: "royal-villa",
    },
    {
      name: "Presidential Suite",
      description: "Our most luxurious accommodation with panoramic views",
      image: "/placeholder.svg?height=400&width=600",
      price: 45000,
      capacity: "4 Adults",
      size: "1500 sq. ft.",
      amenities: ["Free Wi-Fi", "Breakfast", "Butler Service"],
      slug: "presidential-suite",
    },
  ]

  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes("Wi-Fi")) return <Wifi className="h-4 w-4" />
    if (amenity.includes("Breakfast")) return <Coffee className="h-4 w-4" />
    return <Bath className="h-4 w-4" />
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
      {rooms.map((room, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="relative h-64">
            <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
          </div>
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-semibold">{room.name}</h3>
              <div className="text-lg font-bold text-primary">₹{room.price}</div>
            </div>
            <p className="text-muted-foreground mb-4">{room.description}</p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>{room.capacity}</span>
              </div>
              <div className="flex items-center">
                <Maximize2 className="h-4 w-4 mr-1" />
                <span>{room.size}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {room.amenities.map((amenity, i) => (
                <div key={i} className="flex items-center text-xs bg-muted px-2 py-1 rounded">
                  {getAmenityIcon(amenity)}
                  <span className="ml-1">{amenity}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Button className="flex-1" asChild>
                <Link href={`/rooms/${room.slug}`}>View Details</Link>
              </Button>
              <Button variant="outline" className="flex-1">
                Book Now
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
