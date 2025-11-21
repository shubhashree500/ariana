import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Facilities - Ariana Inka Linga Vihar",
  description: "Explore our world-class facilities designed for your comfort, relaxation, and entertainment.",
}

export default function FacilitiesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Resort Facilities</h1>
        <p className="text-muted-foreground text-lg">
          Discover our range of amenities and services designed to enhance your stay.
        </p>
      </div>

      <Tabs defaultValue="wellness" className="mb-16">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="wellness">Wellness</TabsTrigger>
          <TabsTrigger value="recreation">Recreation</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
        </TabsList>

        <TabsContent value="wellness" className="mt-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Spa and Wellness" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Spa & Wellness</h2>
              <p className="text-muted-foreground mb-6">
                Our award-winning spa offers a sanctuary of peace and tranquility. Indulge in a range of treatments
                inspired by ancient healing traditions and modern techniques, designed to rejuvenate your body and mind.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold">Facilities Include:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                    <li>Massage therapy rooms</li>
                    <li>Steam room and sauna</li>
                    <li>Jacuzzi and hydrotherapy pool</li>
                    <li>Relaxation lounge</li>
                    <li>Yoga and meditation pavilion</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Hours:</h3>
                  <p className="text-muted-foreground">9:00 AM - 8:00 PM daily</p>
                </div>
              </div>

              <Button>View Spa Menu</Button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mt-12">
            <div className="md:order-2 relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Fitness Center" fill className="object-cover" />
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl font-bold mb-4">Fitness Center</h2>
              <p className="text-muted-foreground mb-6">
                Maintain your fitness routine in our state-of-the-art gym equipped with the latest cardio and strength
                training equipment. Our certified trainers are available for personal training sessions.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold">Facilities Include:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                    <li>Cardio equipment</li>
                    <li>Free weights and strength machines</li>
                    <li>Functional training area</li>
                    <li>Group fitness studio</li>
                    <li>Personal training services</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Hours:</h3>
                  <p className="text-muted-foreground">6:00 AM - 10:00 PM daily</p>
                </div>
              </div>

              <Button>Book a Training Session</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="recreation" className="mt-6">
          <div className="grid gap-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="Swimming Pool" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Swimming Pools</h2>
                <p className="text-muted-foreground mb-6">
                  Dive into our crystal-clear swimming pools surrounded by lush gardens. Choose from our main pool,
                  infinity edge pool with stunning views, or the dedicated children's pool with water features.
                </p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-semibold">Features:</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                      <li>Main pool with swim-up bar</li>
                      <li>Infinity edge pool overlooking the landscape</li>
                      <li>Children's pool with water slides</li>
                      <li>Poolside cabanas and loungers</li>
                      <li>Towel service</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold">Hours:</h3>
                    <p className="text-muted-foreground">7:00 AM - 8:00 PM daily</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              {[
                {
                  title: "Tennis Courts",
                  description: "Two professional-grade tennis courts with equipment rental and coaching available.",
                  hours: "6:00 AM - 9:00 PM",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Kids Club",
                  description: "Supervised activities and play areas for children aged 4-12 years with trained staff.",
                  hours: "9:00 AM - 6:00 PM",
                  image: "/placeholder.svg?height=300&width=400",
                },
                {
                  title: "Game Room",
                  description: "Indoor entertainment with billiards, table tennis, board games, and video games.",
                  hours: "10:00 AM - 10:00 PM",
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
                    <p className="text-muted-foreground text-sm mb-3">{facility.description}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      <span>{facility.hours}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="business" className="mt-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=600" alt="Conference Room" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Business Center & Meeting Rooms</h2>
              <p className="text-muted-foreground mb-6">
                Our fully equipped business center and versatile meeting spaces are perfect for conferences, corporate
                retreats, and special events. Our dedicated team ensures your event runs smoothly.
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold">Facilities Include:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                    <li>Grand ballroom (capacity: 300 people)</li>
                    <li>3 meeting rooms (capacity: 20-50 people)</li>
                    <li>Boardroom (capacity: 12 people)</li>
                    <li>Business center with computers and printing services</li>
                    <li>High-speed Wi-Fi and audiovisual equipment</li>
                    <li>Catering services</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4">
                <Button>Download Brochure</Button>
                <Button variant="outline">Request Proposal</Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="services" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "24-Hour Reception",
                description:
                  "Our front desk is staffed around the clock to assist with check-in, check-out, and any requests during your stay.",
                icon: "🔑",
              },
              {
                title: "Concierge Services",
                description:
                  "Our knowledgeable concierge team can arrange local tours, transportation, restaurant reservations, and more.",
                icon: "👨‍💼",
              },
              {
                title: "Room Service",
                description: "Enjoy our restaurant menu in the comfort of your room with our 24-hour room service.",
                icon: "🍽️",
              },
              {
                title: "Laundry & Dry Cleaning",
                description: "Same-day laundry and dry cleaning services available for your convenience.",
                icon: "👕",
              },
              {
                title: "Airport Transfers",
                description: "Luxury vehicle transfers to and from the airport can be arranged upon request.",
                icon: "🚗",
              },
              {
                title: "Childcare Services",
                description: "Professional babysitting services available with advance notice.",
                icon: "👶",
              },
              {
                title: "Currency Exchange",
                description: "Foreign currency exchange service available at the front desk.",
                icon: "💱",
              },
              {
                title: "Gift Shop",
                description: "Browse our selection of souvenirs, essentials, and local handicrafts.",
                icon: "🎁",
              },
              {
                title: "Medical Assistance",
                description: "Doctor on call for medical emergencies and basic first aid available at the resort.",
                icon: "🩺",
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="font-bold text-xl mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
