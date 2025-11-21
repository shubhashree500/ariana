"use client"

import { useState } from "react"
import { Card } from "@/src/components/ui/card"
import { Button } from "@/src/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function AmenitiesCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const amenities = [
    {
      title: "Indoor Games",
      image: "https://media.tatahousing.com/amenities/November2024/519f4d8075dd38fe5047.webp",
      description: "Family enjoying pool/billiards game",
    },
    {
      title: "Library",
      image: "https://media.tatahousing.com/amenities/November2024/d2ac64389f86ef8da905.webp",
      description: "Reading and learning space",
    },
    {
      title: "Board games",
      image: "https://media.tatahousing.com/amenities/November2024/c0a912f9a8be4e8d3c6e.webp",
      description: "Chess and other board games",
    },
    {
      title: "Tennis Court",
      image: "https://media.tatahousing.com/amenities/November2024/d8afa2b2656835afdd08.webp",
      description: "Professional tennis court",
    },
    {
      title: "Swimming Pool",
      image: "https://media.tatahousing.com/amenities/May2023/4c5630944914b0af5ad9.webp",
      description: "Olympic size swimming pool",
    },
    {
      title: "Fitness Center",
      image: "https://media.tatahousing.com/amenities/May2023/7d0ccdc6d47a37104b80.webp",
      description: "Modern gym equipment",
    },
    {
      title: "Garden Area",
      image: "https://media.tatahousing.com/amenities/November2024/96bf1584871967fc027b.webp",
      description: "Landscaped gardens",
    },
    {
      title: "Clubhouse",
      image: "https://media.tatahousing.com/amenities/November2024/bb68e54771e1f27262e7.webp",
      description: "Community clubhouse",
    },
    {
      title: "Kids Play Area",
      image: "https://media.tatahousing.com/amenities/November2024/c4d0af31f62da97cf2c5.webp",
      description: "Safe play zone for children",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % amenities.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + amenities.length) % amenities.length)
  }

  const getVisibleSlides = () => {
    const slides = []
    for (let i = 0; i < 4; i++) {
      const index = (currentSlide + i) % amenities.length
      slides.push(amenities[index])
    }
    return slides
  }

  return (
    <section className="min-h-screen bg-gray-50 flex">
      {/* Left Sidebar */}
      <div className="w-80 bg-amber-700 flex items-center justify-center relative">
        <div className="transform -rotate-90 text-white text-2xl font-light tracking-[0.3em]">AMENITIES</div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-12 relative">
        {/* Header */}
        <div className="mb-12">
          <p className="text-amber-700 text-sm font-medium mb-4 tracking-wider">AMENITIES</p>
          <h1 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">AMENITIES THAT ARE CLASS APART</h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            With plethora of excellent outdoor and indoor amenities at Ariana, to rejuvenate and relax. This makes
            everyday exciting and full of infinite possibilities to make memories.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-4 gap-6 mb-8">
            {getVisibleSlides().map((amenity, index) => (
              <Card key={index} className="overflow-hidden shadow-lg border-0">
                <div className="relative h-64">
                  <img
                    src={amenity.image || "/placeholder.svg"}
                    alt={amenity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-white text-xl font-semibold mb-1">{amenity.title}</h3>
                    <p className="text-white/80 text-xs">Image shot at site on Feb 2024</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Progress and Navigation */}
          <div className="flex items-center justify-between">
            <div className="text-amber-700 text-lg font-medium">
              {String(currentSlide + 1).padStart(2, "0")}/{String(amenities.length).padStart(2, "0")}
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="icon" onClick={prevSlide} className="border-gray-300 hover:bg-gray-100">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={nextSlide} className="border-gray-300 hover:bg-gray-100">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
