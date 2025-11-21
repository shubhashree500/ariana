import type { Metadata } from "next"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"

export const metadata: Metadata = {
  title: "Gallery - Ariana Inka Linga Vihar",
  description: "Browse through our photo gallery showcasing our resort, rooms, dining, and experiences.",
}

export default function GalleryPage() {
  // In a real app, these would be fetched from a database or CMS
  const categories = [
    {
      id: "resort",
      name: "Resort & Property",
      images: Array(12).fill("/placeholder.svg?height=600&width=800"),
    },
    {
      id: "rooms",
      name: "Rooms & Suites",
      images: Array(9).fill("/placeholder.svg?height=600&width=800"),
    },
    {
      id: "dining",
      name: "Dining",
      images: Array(6).fill("/placeholder.svg?height=600&width=800"),
    },
    {
      id: "spa",
      name: "Spa & Wellness",
      images: Array(6).fill("/placeholder.svg?height=600&width=800"),
    },
    {
      id: "events",
      name: "Events & Celebrations",
      images: Array(8).fill("/placeholder.svg?height=600&width=800"),
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Photo Gallery</h1>
        <p className="text-muted-foreground text-lg">
          Explore our resort through stunning imagery showcasing our accommodations, facilities, and experiences.
        </p>
      </div>

      <Tabs defaultValue="resort">
        <TabsList className="flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.images.map((image, index) => (
                <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${category.name} image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
