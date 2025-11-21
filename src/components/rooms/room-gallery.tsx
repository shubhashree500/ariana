"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface RoomGalleryProps {
  images: string[]
}

export default function RoomGallery({ images }: RoomGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  return (
    <>
      <div className="space-y-2">
        <div
          className="relative aspect-[16/9] rounded-lg overflow-hidden cursor-pointer"
          onClick={() => setShowLightbox(true)}
        >
          <Image src={images[currentImage] || "/placeholder.svg"} alt="Room image" fill className="object-cover" />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {images.slice(0, 4).map((image, index) => (
            <div
              key={index}
              className={`relative aspect-[4/3] rounded-md overflow-hidden cursor-pointer ${
                currentImage === index ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Room thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {showLightbox && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white"
            onClick={() => setShowLightbox(false)}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
          <Button variant="ghost" size="icon" className="absolute left-4 text-white" onClick={prevImage}>
            <ChevronLeft className="h-8 w-8" />
            <span className="sr-only">Previous</span>
          </Button>
          <div className="relative h-[80vh] w-[80vw]">
            <Image src={images[currentImage] || "/placeholder.svg"} alt="Room image" fill className="object-contain" />
          </div>
          <Button variant="ghost" size="icon" className="absolute right-4 text-white" onClick={nextImage}>
            <ChevronRight className="h-8 w-8" />
            <span className="sr-only">Next</span>
          </Button>
        </div>
      )}
    </>
  )
}
