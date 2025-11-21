import Image from "next/image"
import { Card, CardContent } from "@/src/components/ui/card"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Mumbai",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "Our stay at Ariana Inka Linga Vihar was absolutely perfect. The staff went above and beyond to make our anniversary special. The room was luxurious and the food was exceptional. We can't wait to return!",
    },
    {
      name: "Rahul Mehta",
      location: "Delhi",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "From the moment we arrived, we were treated like royalty. The resort grounds are beautiful, the spa treatments were rejuvenating, and the dining experiences were unforgettable. Truly a 5-star experience.",
    },
    {
      name: "Anjali Patel",
      location: "Bangalore",
      image: "/placeholder.svg?height=100&width=100",
      rating: 5,
      text: "We hosted our company retreat at Ariana Vihar and it exceeded all expectations. The conference facilities were top-notch, the accommodations were comfortable, and the team-building activities were perfectly organized.",
    },
  ]

  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Guest Experiences</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our guests have to say about their stay at Ariana Inka Linga
            Vihar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {Array(testimonial.rating)
                    .fill(null)
                    .map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
