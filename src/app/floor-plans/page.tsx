import type { Metadata } from "next"
import FloorPlansList from "@/src/components/floor-plans/floor-plans-list"
import PriceCalculator from "@/src/components/floor-plans/price-calculator"

export const metadata: Metadata = {
  title: "Floor Plans - Ariana Inka Linga Vihar",
  description: "Explore our thoughtfully designed floor plans for 1BHK, 2BHK, 3BHK apartments and penthouses.",
}

export default function FloorPlansPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Floor Plans & Pricing</h1>
        <p className="text-muted-foreground text-lg">
          Choose from our range of thoughtfully designed apartments that cater to every lifestyle need.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <FloorPlansList />
        </div>
        <div className="lg:col-span-1">
          <PriceCalculator />
        </div>
      </div>
    </div>
  )
}
