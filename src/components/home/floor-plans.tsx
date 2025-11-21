import Image from "next/image"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { ArrowRight, Home, Maximize2 } from "lucide-react"

export default function FloorPlans() {
  const floorPlans = [
    {
      name: "1 BHK",
      area: "650-750 sq.ft",
      price: "₹45-55 Lakhs",
      description: "Perfect for young professionals and small families",
      image: "/placeholder.svg?height=300&width=400",
      features: ["1 Bedroom", "1 Bathroom", "Kitchen", "Balcony"],
    },
    {
      name: "2 BHK",
      area: "950-1150 sq.ft",
      price: "₹65-80 Lakhs",
      description: "Ideal for growing families with spacious living",
      image: "https://singlesmediacontent.com//properties/photos/7518/floorplans/1747639155_1floorplansimage.webp",
      features: ["2 Bedrooms", "2 Bathrooms", "Kitchen", "Living Room"],
    },
    {
      name: "3 BHK",
      area: "1350-1550 sq.ft",
      price: "₹95-120 Lakhs",
      description: "Luxurious living with premium amenities",
      image: "https://singlesmediacontent.com//properties/photos/7518/floorplans/1747639155_2floorplansimage.webp",
      features: ["3 Bedrooms", "3 Bathrooms", "Kitchen", "Dining Area"],
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Floor Plans & Pricing</h2>
          <p className="text-muted-foreground max-w-2xl">
            Choose from our range of thoughtfully designed apartments that cater to every lifestyle and budget.
          </p>
        </div>
        <Button variant="outline" className="mt-4 md:mt-0" asChild>
          <Link href="/floor-plans" className="flex items-center">
            View All Plans <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {floorPlans.map((plan, index) => (
          <Card key={index} className="overflow-hidden border-none shadow-md">
            <div className="relative h-48">
              <Image src={plan.image || "/placeholder.svg"} alt={plan.name} fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="text-lg font-bold text-primary">{plan.price}</div>
              </div>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <div className="flex justify-between text-sm text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Maximize2 className="h-4 w-4 mr-1" />
                  <span>{plan.area}</span>
                </div>
                <div className="flex items-center">
                  <Home className="h-4 w-4 mr-1" />
                  <span>{plan.features.length} Features</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {plan.features.map((feature, i) => (
                  <span key={i} className="text-xs bg-muted px-2 py-1 rounded">
                    {feature}
                  </span>
                ))}
              </div>
              <Button className="w-full" asChild>
                <Link href="/floor-plans">View Details</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
