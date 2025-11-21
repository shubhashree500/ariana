import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Clock, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Dining - Ariana Inka Linga Vihar",
  description: "Explore our exquisite dining options offering a variety of cuisines prepared by expert chefs.",
}

export default function DiningPage() {
  const restaurants = [
    {
      name: "Spice Garden",
      description:
        "Experience authentic Indian cuisine with a modern twist. Our chefs use traditional recipes and fresh local ingredients to create memorable dishes that celebrate India's rich culinary heritage.",
      cuisine: "Indian",
      hours: "12:00 PM - 11:00 PM",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Azure",
      description:
        "Our poolside restaurant offers a relaxed dining experience with a focus on Mediterranean and international favorites. Enjoy fresh seafood, grilled specialties, and refreshing beverages.",
      cuisine: "Mediterranean",
      hours: "11:00 AM - 10:00 PM",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "The Oriental Pavilion",
      description:
        "Discover the flavors of East Asia in our elegant Oriental restaurant. From Japanese sushi to Thai curries and Chinese specialties, our menu offers a journey through the diverse cuisines of Asia.",
      cuisine: "Pan-Asian",
      hours: "6:00 PM - 11:00 PM",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Dining Experiences</h1>
        <p className="text-muted-foreground text-lg">
          Indulge in exceptional culinary journeys at our diverse restaurants and bars.
        </p>
      </div>

      <div className="space-y-16">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src={restaurant.image || "/placeholder.svg"} alt={restaurant.name} fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">{restaurant.name}</h2>
              <div className="text-primary font-medium mb-4">{restaurant.cuisine} Cuisine</div>
              <p className="text-muted-foreground mb-6">{restaurant.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{restaurant.hours}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Ground Floor, Main Building</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Ext. 123</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button>View Menu</Button>
                <Button variant="outline">Reserve a Table</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t">
        <h2 className="text-3xl font-bold text-center mb-8">Special Dining Experiences</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Private Beach Dinner",
              description: "Enjoy a romantic dinner under the stars with personalized service and a customized menu.",
              image: "/placeholder.svg?height=300&width=400",
            },
            {
              title: "Chef's Table",
              description: "An exclusive culinary journey with our executive chef featuring special tasting menus.",
              image: "/placeholder.svg?height=300&width=400",
            },
            {
              title: "In-Room Dining",
              description: "24-hour room service with an extensive menu for a private dining experience in your room.",
              image: "/placeholder.svg?height=300&width=400",
            },
          ].map((experience, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={experience.image || "/placeholder.svg"}
                  alt={experience.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">{experience.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{experience.description}</p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
