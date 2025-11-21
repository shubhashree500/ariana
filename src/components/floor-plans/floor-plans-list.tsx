import Image from "next/image"
import { Button } from "@/src/components/ui/button"
import { Card, CardContent } from "@/src/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs"
import { Home, Maximize2, Bed, Bath } from "lucide-react"

export default function FloorPlansList() {
  const floorPlans = {
    "1bhk": [
      {
        name: "1 BHK - Type A",
        area: "650 sq.ft",
        price: "₹45 Lakhs",
        carpet: "520 sq.ft",
        image: "/placeholder.svg?height=400&width=600",
        features: { bedrooms: 1, bathrooms: 1, balconies: 1 },
      },
      {
        name: "1 BHK - Type B",
        area: "750 sq.ft",
        price: "₹55 Lakhs",
        carpet: "600 sq.ft",
        image: "/placeholder.svg?height=400&width=600",
        features: { bedrooms: 1, bathrooms: 1, balconies: 1 },
      },
    ],
    "2bhk": [
      {
        name: "2 BHK - Type A",
        area: "950 sq.ft",
        price: "₹65 Lakhs",
        carpet: "760 sq.ft",
        image: "/placeholder.svg?height=400&width=600",
        features: { bedrooms: 2, bathrooms: 2, balconies: 1 },
      },
      {
        name: "2 BHK - Type B",
        area: "1150 sq.ft",
        price: "₹80 Lakhs",
        carpet: "920 sq.ft",
        image: "/placeholder.svg?height=400&width=600",
        features: { bedrooms: 2, bathrooms: 2, balconies: 2 },
      },
    ],
    "3bhk": [
      {
        name: "3 BHK - Type A",
        area: "1350 sq.ft",
        price: "₹95 Lakhs",
        carpet: "1080 sq.ft",
        image: "/placeholder.svg?height=400&width=600",
        features: { bedrooms: 3, bathrooms: 3, balconies: 2 },
      },
      {
        name: "3 BHK - Type B",
        area: "1550 sq.ft",
        price: "₹120 Lakhs",
        carpet: "1240 sq.ft",
        image: "/placeholder.svg?height=400&width=600",
        features: { bedrooms: 3, bathrooms: 3, balconies: 2 },
      },
    ],
  }

  return (
    <Tabs defaultValue="1bhk">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="1bhk">1 BHK</TabsTrigger>
        <TabsTrigger value="2bhk">2 BHK</TabsTrigger>
        <TabsTrigger value="3bhk">3 BHK</TabsTrigger>
      </TabsList>

      {Object.entries(floorPlans).map(([key, plans]) => (
        <TabsContent key={key} value={key} className="mt-6">
          <div className="grid gap-6">
            {plans.map((plan, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative h-64 md:h-auto">
                    <Image src={plan.image || "/placeholder.svg"} alt={plan.name} fill className="object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <div className="text-xl font-bold text-primary">{plan.price}</div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Maximize2 className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="font-semibold">{plan.area}</div>
                          <div className="text-sm text-muted-foreground">Built-up Area</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Home className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <div className="font-semibold">{plan.carpet}</div>
                          <div className="text-sm text-muted-foreground">Carpet Area</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-6 mb-6">
                      <div className="flex items-center gap-2">
                        <Bed className="h-4 w-4 text-muted-foreground" />
                        <span>
                          {plan.features.bedrooms} Bedroom{plan.features.bedrooms > 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath className="h-4 w-4 text-muted-foreground" />
                        <span>
                          {plan.features.bathrooms} Bathroom{plan.features.bathrooms > 1 ? "s" : ""}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Home className="h-4 w-4 text-muted-foreground" />
                        <span>
                          {plan.features.balconies} Balcon{plan.features.balconies > 1 ? "ies" : "y"}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button className="flex-1">Download Floor Plan</Button>
                      <Button variant="outline" className="flex-1">
                        Get Price Details
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  )
}
