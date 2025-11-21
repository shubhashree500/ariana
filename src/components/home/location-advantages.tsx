import Image from "next/image"
import { Card, CardContent } from "@/src/components/ui/card"
import { MapPin, Clock, Train, Plane, GraduationCap, ShoppingBag } from "lucide-react"

export default function LocationAdvantages() {
  const advantages = [
    {
      icon: <Train className="h-8 w-8 text-primary" />,
      title: "Metro Connectivity",
      description: "Just 2 km from metro station with direct connectivity to business districts",
      distance: "2 km",
    },
    {
      icon: <Plane className="h-8 w-8 text-primary" />,
      title: "Airport Access",
      description: "Quick access to international airport via expressway",
      distance: "25 km",
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "Educational Hub",
      description: "Top schools and colleges within walking distance",
      distance: "500m",
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-primary" />,
      title: "Shopping & Entertainment",
      description: "Major malls and entertainment centers nearby",
      distance: "1.5 km",
    },
  ]

  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Strategic Location Advantages</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Perfectly positioned to offer the best of urban convenience while maintaining a peaceful residential
            environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Why This Location?</h3>
            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0">{advantage.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold">{advantage.title}</h4>
                      <span className="text-sm text-primary font-medium">({advantage.distance})</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image src="https://singlesmediacontent.com/properties/photos/7518/locationmap/tata-ariana-phase-3-location-map-image-1747639692.webp" alt="Location map" fill className="object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-lg">Connectivity</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Metro Station: 2 km</li>
                <li>• IT Hub: 8 km</li>
                <li>• City Center: 12 km</li>
                <li>• Airport: 25 km</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-lg">Travel Time</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Metro: 5 minutes</li>
                <li>• IT Hub: 20 minutes</li>
                <li>• City Center: 30 minutes</li>
                <li>• Airport: 45 minutes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-lg">Nearby Facilities</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Schools: 500m</li>
                <li>• Hospital: 1 km</li>
                <li>• Shopping Mall: 1.5 km</li>
                <li>• Banks: 300m</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
