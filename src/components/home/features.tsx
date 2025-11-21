import { Card, CardContent } from "@/src/components/ui/card"
import { Utensils, Wifi, Dumbbell, Car, Coffee, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Utensils className="h-10 w-10 text-primary" />,
      title: "Fine Dining",
      description: "Experience exquisite cuisine at our multiple restaurants offering a variety of culinary delights.",
    },
    {
      icon: <Wifi className="h-10 w-10 text-primary" />,
      title: "Free Wi-Fi",
      description: "Stay connected with complimentary high-speed internet access throughout the resort.",
    },
    {
      icon: <Dumbbell className="h-10 w-10 text-primary" />,
      title: "Fitness Center",
      description: "Maintain your fitness routine in our state-of-the-art gym with modern equipment.",
    },
    {
      icon: <Car className="h-10 w-10 text-primary" />,
      title: "Airport Transfers",
      description: "Enjoy hassle-free transportation with our luxury airport transfer service.",
    },
    {
      icon: <Coffee className="h-10 w-10 text-primary" />,
      title: "Spa & Wellness",
      description: "Rejuvenate your body and mind with our range of spa treatments and wellness activities.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Event Spaces",
      description:
        "Perfect venues for weddings, conferences, and special celebrations with professional planning services.",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Resort Amenities</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover the exceptional facilities and services that make your stay at Ariana Inka Linga Vihar truly
          memorable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border-none shadow-md">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
