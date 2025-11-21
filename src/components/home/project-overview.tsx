import { Card, CardContent } from "@/src/components/ui/card"
import { Building, MapPin, Calendar, Users } from "lucide-react"

export default function ProjectOverview() {
  const highlights = [
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "480 Premium Units",
      description: "Thoughtfully designed 1, 2 & 3 BHK apartments and penthouses",
    },
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: "Prime Location",
      description: "Strategic location with excellent connectivity to major hubs",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Ready to Move",
      description: "Possession starting December 2025 with RERA approval",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Trusted Developer",
      description: "15+ years of experience with 25+ successful projects",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ariana Inka Linga Vihar is a premium residential project offering modern living spaces with world-class
          amenities in a prime location.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {highlights.map((highlight, index) => (
          <Card key={index} className="border-none shadow-md">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4">{highlight.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-muted/30 rounded-lg p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">12</div>
            <div className="text-muted-foreground">Acres</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">480</div>
            <div className="text-muted-foreground">Total Units</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">G+14</div>
            <div className="text-muted-foreground">Floors</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">30+</div>
            <div className="text-muted-foreground">Amenities</div>
          </div>
        </div>
      </div>
    </section>
  )
}
