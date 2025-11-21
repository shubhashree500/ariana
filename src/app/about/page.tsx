import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent } from "@/src/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { Building, Users, Award, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Ariana Inka Linga Vihar",
  description: "Learn about the developers and vision behind Ariana Inka Linga Vihar residential project.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-gray-800">
          About TATA Ariana Kalinga Vihar
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl">
          A premium residential project designed for modern living with world-class amenities and strategic location.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Vision</h2>
          <p className="text-muted-foreground mb-4">
            Ariana Kalinga Vihar represents the pinnacle of modern residential development, where luxury meets
            functionality. Our vision is to create a community that offers not just homes, but a lifestyle that enhances
            the quality of life for every resident.
          </p>
          <p className="text-muted-foreground">
            With meticulously planned layouts, premium amenities, and strategic location advantages, we're building more
            than just apartments - we're crafting a legacy for generations to come.
          </p>
        </div>
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="https://media.tatahousing.com/projects/July2023/7672aabfc1c029774c5c.webp"
            alt="Project vision"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <Tabs defaultValue="developer" className="max-w-5xl mx-auto mb-20">
        <TabsList className="grid w-full grid-cols-3 bg-white rounded shadow">
          <TabsTrigger value="developer">Developer</TabsTrigger>
          <TabsTrigger value="project">Project Details</TabsTrigger>
          <TabsTrigger value="location">Location</TabsTrigger>
        </TabsList>
        <TabsContent value="developer" className="p-6 bg-muted/40 rounded-lg mt-4 shadow">
          <h3 className="text-2xl font-bold mb-3">About the Developer</h3>
          <p className="text-muted-foreground mb-4">
            With over 15 years of experience in real estate development, our team has successfully delivered 25+
            residential and commercial projects across the region. We are committed to quality construction, timely
            delivery, and customer satisfaction.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-6">
            {["Projects Completed", "Happy Families", "Years Experience"].map((label, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-extrabold text-primary">{["25+", "5000+", "15+"][i]}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="project" className="p-6 bg-muted/40 rounded-lg mt-4 shadow">
          <h3 className="text-2xl font-bold mb-3">Project Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Project Details</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Total Area: 12 Acres</li>
                <li>• Total Units: 480 Apartments</li>
                <li>• Building Height: G+14 Floors</li>
                <li>• Possession: Dec 2025</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Unit Types</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• 1 BHK: 650-750 sq.ft</li>
                <li>• 2 BHK: 950-1150 sq.ft</li>
                <li>• 3 BHK: 1350-1550 sq.ft</li>
                <li>• Penthouse: 2000+ sq.ft</li>
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="location" className="p-6 bg-muted/40 rounded-lg mt-4 shadow">
          <h3 className="text-2xl font-bold mb-3">Strategic Location</h3>
          <p className="text-muted-foreground mb-4">
            Located in the heart of the growing suburban area with excellent connectivity to major business districts,
            educational institutions, and healthcare facilities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">Connectivity</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Metro Station: 2 km</li>
                <li>• Airport: 25 km</li>
                <li>• IT Hub: 8 km</li>
                <li>• City Center: 12 km</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Nearby Facilities</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Schools: 500m</li>
                <li>• Hospital: 1 km</li>
                <li>• Shopping Mall: 1.5 km</li>
                <li>• Banks: 300m</li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{
            icon: <Building className="h-10 w-10 text-primary" />, title: "Quality Construction", description: "Premium materials and superior construction standards"
          }, {
            icon: <Users className="h-10 w-10 text-primary" />, title: "Customer First", description: "Dedicated customer support and transparent processes"
          }, {
            icon: <Award className="h-10 w-10 text-primary" />, title: "Award Winning", description: "Recognized for excellence in real estate development"
          }, {
            icon: <MapPin className="h-10 w-10 text-primary" />, title: "Prime Location", description: "Strategic location with excellent connectivity"
          }].map((item, index) => (
            <Card key={index} className="shadow-md hover:shadow-xl transition">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted/30 p-10 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-8">🏆 Awards & Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            year: "2023", award: "Best Residential Project", organization: "Real Estate Excellence Awards"
          }, {
            year: "2022", award: "Green Building Certification", organization: "IGBC"
          }, {
            year: "2021", award: "Developer of the Year", organization: "Property Awards"
          }].map((item, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow">
              <div className="text-3xl font-bold text-primary mb-2">{item.year}</div>
              <div className="font-semibold mb-1 text-gray-700">{item.award}</div>
              <div className="text-sm text-muted-foreground">{item.organization}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
