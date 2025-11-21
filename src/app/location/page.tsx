import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/src/components/ui/card"
import { MapPin, Clock, Car, Train } from "lucide-react"

export const metadata: Metadata = {
  title: "Location & Connectivity - Ariana Inka Linga Vihar",
  description: "Discover the strategic location advantages and excellent connectivity of our residential project.",
}

export default function LocationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Location & Connectivity</h1>
        <p className="text-muted-foreground text-lg">
          Strategically located with excellent connectivity to major business districts, educational institutions, and
          entertainment hubs.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Prime Location Advantages</h2>
          <p className="text-muted-foreground mb-6">
            Ariana Inka Linga Vihar is strategically positioned in one of the fastest-growing suburban areas, offering
            the perfect balance of urban convenience and peaceful living.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Strategic Location</h3>
                <p className="text-muted-foreground text-sm">
                  Located on the main arterial road with easy access to major highways and business districts.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Train className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Metro Connectivity</h3>
                <p className="text-muted-foreground text-sm">
                  Just 2 km from the nearest metro station with direct connectivity to the city center.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Car className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-semibold">Road Network</h3>
                <p className="text-muted-foreground text-sm">
                  Well-connected road network with multiple route options to avoid traffic congestion.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=400&width=600" alt="Location map" fill className="object-cover" />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Connectivity & Distance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Train className="h-8 w-8 text-primary" />,
              title: "Metro Station",
              distance: "2 km",
              time: "5 min",
            },
            { icon: <Car className="h-8 w-8 text-primary" />, title: "Airport", distance: "25 km", time: "45 min" },
            { icon: <MapPin className="h-8 w-8 text-primary" />, title: "IT Hub", distance: "8 km", time: "20 min" },
            {
              icon: <Clock className="h-8 w-8 text-primary" />,
              title: "City Center",
              distance: "12 km",
              time: "30 min",
            },
          ].map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <div className="text-muted-foreground">
                  <div className="text-lg font-semibold">{item.distance}</div>
                  <div className="text-sm">{item.time} drive</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Nearby Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-4">Education</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Delhi Public School - 500m</li>
                <li>• Ryan International - 800m</li>
                <li>• Engineering College - 2 km</li>
                <li>• Medical College - 3 km</li>
                <li>• University Campus - 5 km</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-4">Healthcare</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• City Hospital - 1 km</li>
                <li>• Apollo Clinic - 1.5 km</li>
                <li>• Max Healthcare - 2 km</li>
                <li>• Pharmacy - 300m</li>
                <li>• Diagnostic Center - 500m</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-xl mb-4">Shopping & Entertainment</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Shopping Mall - 1.5 km</li>
                <li>• Supermarket - 400m</li>
                <li>• Cinema Complex - 2 km</li>
                <li>• Restaurants - 500m</li>
                <li>• Banks & ATMs - 300m</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden h-[400px] relative">
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <p className="text-muted-foreground">Interactive Google Maps would be embedded here</p>
        </div>
      </div>
    </div>
  )
}
