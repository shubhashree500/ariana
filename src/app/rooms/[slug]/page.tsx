import type { Metadata } from "next"
import { Card, CardContent } from "@/src/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { Check } from "lucide-react"
import RoomGallery from "@/src/components/rooms/room-gallery"
import BookingForm from "@/src/components/rooms/booking-form"

export const metadata: Metadata = {
  title: "Deluxe Room - Ariana Inka Linga Vihar",
  description: "Spacious and elegant deluxe room with modern amenities and stunning views.",
}

export default function RoomDetailPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch room data based on the slug
  const room = {
    name: "Deluxe Room",
    description:
      "Our spacious Deluxe Room offers the perfect blend of comfort and elegance. Featuring a king-sized bed with premium linens, a private balcony with stunning views, and a luxurious bathroom with a rainfall shower.",
    price: 12000,
    size: "400 sq. ft.",
    capacity: "2 Adults, 1 Child",
    bed: "King Size",
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Mini Bar",
      "Room Service",
      "Flat-screen TV",
      "Coffee Maker",
      "In-room Safe",
      "Hairdryer",
    ],
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <RoomGallery images={room.images} />

          <div className="mt-8">
            <h1 className="text-3xl font-bold mb-2">{room.name}</h1>
            <p className="text-muted-foreground mb-6">{room.description}</p>

            <Tabs defaultValue="details">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="policies">Policies</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="p-4 bg-muted/30 rounded-lg mt-2">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="p-3">
                    <div className="font-semibold">Room Size</div>
                    <div className="text-muted-foreground">{room.size}</div>
                  </div>
                  <div className="p-3">
                    <div className="font-semibold">Capacity</div>
                    <div className="text-muted-foreground">{room.capacity}</div>
                  </div>
                  <div className="p-3">
                    <div className="font-semibold">Bed Type</div>
                    <div className="text-muted-foreground">{room.bed}</div>
                  </div>
                  <div className="p-3">
                    <div className="font-semibold">View</div>
                    <div className="text-muted-foreground">Garden View</div>
                  </div>
                  <div className="p-3">
                    <div className="font-semibold">Check-in</div>
                    <div className="text-muted-foreground">2:00 PM</div>
                  </div>
                  <div className="p-3">
                    <div className="font-semibold">Check-out</div>
                    <div className="text-muted-foreground">12:00 PM</div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="amenities" className="p-4 bg-muted/30 rounded-lg mt-2">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="policies" className="p-4 bg-muted/30 rounded-lg mt-2">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Cancellation Policy</h3>
                    <p className="text-sm text-muted-foreground">
                      Free cancellation up to 48 hours before check-in. Cancellations made within 48 hours of check-in
                      are subject to a one-night charge.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Children Policy</h3>
                    <p className="text-sm text-muted-foreground">
                      Children under 12 years stay free when using existing bedding. Extra beds are available for an
                      additional charge.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Pet Policy</h3>
                    <p className="text-sm text-muted-foreground">Sorry, pets are not allowed in this room type.</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="text-2xl font-bold">₹{room.price}</div>
                <div className="text-sm text-muted-foreground">per night + taxes</div>
              </div>

              <BookingForm />
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Why Book Direct</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Best rate guarantee</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Free cancellation up to 48 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">No hidden fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Priority room allocation</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
