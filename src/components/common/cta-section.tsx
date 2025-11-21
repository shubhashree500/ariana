import Link from "next/link"
import { Button } from "@/src/components/ui/button"

export default function CtaSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-primary/10 rounded-lg p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Make Ariana Vihar Your Home?</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Don't miss this opportunity to own a premium apartment in one of the most sought-after locations. Limited
          units available with attractive payment plans and special launch offers.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/contact">Schedule Site Visit</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/floor-plans">Download Brochure</Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4">*Prices subject to change. Terms and conditions apply.</p>
      </div>
    </section>
  )
}
