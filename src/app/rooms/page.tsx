import type { Metadata } from "next"
import RoomsList from "@/src/components/rooms/rooms-list"
import RoomFilters from "@/src/components/rooms/room-filters"

export const metadata: Metadata = {
  title: "Rooms & Suites - Ariana Inka Linga Vihar",
  description: "Explore our luxurious rooms and suites designed for your comfort and relaxation.",
}

export default function RoomsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Rooms & Suites</h1>
        <p className="text-muted-foreground text-lg">
          Experience luxury and comfort in our thoughtfully designed accommodations.
        </p>
      </div>

      <RoomFilters />
      <RoomsList />
    </div>
  )
}
