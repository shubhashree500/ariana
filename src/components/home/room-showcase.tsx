import Image from "next/image"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { ArrowRight, Users, Maximize2 } from "lucide-react"

export default function RoomShowcase() {
  const rooms = [
    {
      name: "Deluxe Room",
      description: "Spacious room with modern amenities and garden view",
      image: "/placeholder.svg?height=400&width=600",
      price: 12000,
      capacity: "2 Adults",
      size: "400 sq. ft.",
      slug: "deluxe-room",
    },
    {
      name: "Premium Suite",
      description: "Luxurious suite with separate living area and balcony",
      image: "/placeholder.svg?height=400&width=600",
      price: 18000,
      capacity: "2 Adults, 2 Children",
      size: "650 sq. ft.",
      slug: "premium-suite",
    },
    {
      name: "Royal Villa",
      description: "Exclusive villa with private pool and personalized service",
      image: "/placeholder.svg?height=400&width=600",
      price: 35000,
      capacity: "4 Adults",
      size: "1200 sq. ft.",
      slug: "royal-villa",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Accommodations</h2>
          <p className="text-muted-foreground max-w-2xl">
            Choose from our selection of elegantly designed rooms and suites, each offering comfort and luxury for a
            memorable stay.
          </p>
        </div>
        <Button variant="outline" className="mt-4 md:mt-0" asChild>
          <Link href="/rooms" className="flex items-center">
            View All Rooms <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {rooms.map((room, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-md">
            <div className="relative h-64">
              <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{room.name}</h3>
                <div className="text-lg font-bold text-primary">₹{room.price}</div>
              </div>
              <p className="text-muted-foreground mb-4">{room.description}</p>
              <div className="flex justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{room.capacity}</span>
                </div>
                <div className="flex items-center">
                  <Maximize2 className="h-4 w-4 mr-1" />
                  <span>{room.size}</span>
                </div>
              </div>
              <Button className="w-full" asChild>
                <Link href={`/rooms/${room.slug}`}>View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
