import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/src/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"

export const metadata: Metadata = {
  title: "Amenities - Ariana Inka Linga Vihar",
  description: "Discover world-class amenities including clubhouse, swimming pool, gym, and recreational facilities.",
}

export default function AmenitiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">World-Class Amenities</h1>
        <p className="text-muted-foreground text-lg">
          Experience luxury living with our comprehensive range of amenities designed for your comfort and convenience.
        </p>
      </div>

      <Tabs defaultValue="recreational" className="mb-16">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="recreational">Recreation</TabsTrigger>
          <TabsTrigger value="fitness">Fitness & Wellness</TabsTrigger>
          <TabsTrigger value="convenience">Convenience</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="recreational" className="mt-6">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Clubhouse" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Clubhouse & Recreation</h2>
              <p className="text-muted-foreground mb-6">
                Our state-of-the-art clubhouse is the heart of community life, featuring multiple recreational
                facilities for residents of all ages.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Facilities Include:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                    <li>Multi-purpose hall for events</li>
                    <li>Indoor games room</li>
                    <li>Library and reading lounge</li>
                    <li>Kids play area</li>
                    <li>Senior citizen corner</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Swimming Pool",
                description: "Olympic-size swimming pool with separate kids pool and poolside deck",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Sports Courts",
                description: "Badminton, tennis, and basketball courts for sports enthusiasts",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                title: "Landscaped Gardens",
                description: "Beautifully designed gardens with walking paths and seating areas",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((facility, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={facility.image || "/placeholder.svg"}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-2">{facility.title}</h3>
                  <p className="text-muted-foreground text-sm">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="fitness" className="mt-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Fitness Center" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Fitness & Wellness</h2>
              <p className="text-muted-foreground mb-6">
                Maintain your health and wellness with our comprehensive fitness facilities designed for all age groups.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Facilities Include:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                    <li>Fully equipped gymnasium</li>
                    <li>Yoga and meditation hall</li>
                    <li>Spa and wellness center</li>
                    <li>Jogging track</li>
                    <li>Outdoor fitness equipment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="convenience" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "24/7 Power Backup",
                description: "Uninterrupted power supply with generator backup for common areas and lifts",
                icon: "⚡",
              },
              {
                title: "High-Speed Elevators",
                description: "Modern elevators with emergency communication systems",
                icon: "🏢",
              },
              {
                title: "Parking",
                description: "Covered parking spaces for cars and two-wheelers",
                icon: "🚗",
              },
              {
                title: "Water Supply",
                description: "24/7 water supply with water treatment plant",
                icon: "💧",
              },
              {
                title: "Waste Management",
                description: "Efficient waste segregation and disposal system",
                icon: "♻️",
              },
              {
                title: "Maintenance",
                description: "Professional facility management and housekeeping services",
                icon: "🔧",
              },
            ].map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="security" className="mt-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Security" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Security & Safety</h2>
              <p className="text-muted-foreground mb-6">
                Your safety is our priority. We have implemented comprehensive security measures to ensure a safe and
                secure living environment.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Security Features:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                    <li>24/7 security personnel</li>
                    <li>CCTV surveillance</li>
                    <li>Access control systems</li>
                    <li>Intercom facility</li>
                    <li>Fire safety systems</li>
                    <li>Emergency response protocols</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
