import Image from "next/image"
import Link from "next/link"
import { Button } from "@/src/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Gallery() {
  const images = [
    "https://media.tatahousing.com/galleries/July2023/3ffc380f95e79a17f6f4.webp",
    "	https://media.tatahousing.com/projects/July2023/7672aabfc1c029774c5c.webp",
    "https://media.tatahousing.com/galleries/July2023/9a1f2650bab1bbaac55b.webp",
    "https://media.tatahousing.com/galleries/July2023/3ffc380f95e79a17f6f4.webp",
    "	https://media.tatahousing.com/galleries/July2023/3ffc380f95e79a17f6f4.webp",
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">Resort Gallery</h2>
          <p className="text-muted-foreground max-w-2xl">
            Take a visual journey through our beautiful resort and get a glimpse of the experiences that await you.
          </p>
        </div>
        <Button variant="outline" className="mt-4 md:mt-0" asChild>
          <Link href="/gallery" className="flex items-center">
            View Full Gallery <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="relative aspect-square md:aspect-auto md:row-span-2 rounded-lg overflow-hidden">
          <Image src={images[0] || "/placeholder.svg"} alt="Resort gallery image" fill className="object-cover" />
        </div>
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image src={images[1] || "/placeholder.svg"} alt="Resort gallery image" fill className="object-cover" />
        </div>
        <div className="relative aspect-square rounded-lg overflow-hidden">
          <Image src={images[2] || "/placeholder.svg"} alt="Resort gallery image" fill className="object-cover" />
        </div>
        <div className="relative aspect-square md:aspect-auto md:row-span-2 rounded-lg overflow-hidden">
          <Image src={images[3] || "/placeholder.svg"} alt="Resort gallery image" fill className="object-cover" />
        </div>
        <div className="relative aspect-square md:col-span-2 rounded-lg overflow-hidden">
          <Image src={images[4] || "/placeholder.svg"} alt="Resort gallery image" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}
