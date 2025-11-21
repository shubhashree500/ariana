import Hero from "../components/home/hero"
import ProjectOverview from "../components/home/project-overview"
import Amenities from "../components/home/amenities"
import FloorPlans from "../components/home/floor-plans"
import LocationAdvantages from "../components/home/location-advantages"
import Gallery from "../components/home/gallery"
import Testimonials from "../components/home/testimonials"
import CtaSection from "../components/common/cta-section"

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <Hero />
      <ProjectOverview />
      <FloorPlans />
      <Amenities />
      <LocationAdvantages />
      <Gallery />
      <Testimonials />
      <CtaSection />
    </div>
  )
}
