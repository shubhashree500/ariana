import type { Metadata } from "next"
import { Card, CardContent } from "@/src/components/ui/card"
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react"
import ContactForm from "@/src/components/common/contact-form"
import SiteVisitForm from "@/src/components/common/site-visit-form"

export const metadata: Metadata = {
  title: "Contact Us - Ariana Inka Linga Vihar",
  description:
    "Get in touch with us for site visits, inquiries, or to book your dream home at Ariana Inka Linga Vihar.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
        <p className="text-muted-foreground text-lg">
          Ready to make Ariana Inka Linga Vihar your home? Get in touch with our sales team for site visits, pricing
          details, and booking assistance.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="h-6 w-6 text-primary" />
              Schedule Site Visit
            </h2>
            <SiteVisitForm />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <ContactForm />
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold">Sales Office</h3>
                  <p className="text-muted-foreground">
                    Ariana Inka Linga Vihar Sales Office
                    <br />
                    Plot No. 123, Sector 45
                    <br />
                    Gurgaon, Haryana 122001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">
                    Sales: +91 98765 43210
                    <br />
                    Customer Care: +91 98765 43211
                    <br />
                    Site Office: +91 98765 43212
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">
                    Sales: sales@arianavihar.com
                    <br />
                    Info: info@arianavihar.com
                    <br />
                    Support: support@arianavihar.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold">Office Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 9:00 AM - 7:00 PM
                    <br />
                    Sunday: 10:00 AM - 6:00 PM
                    <br />
                    Site Visits: 9:00 AM - 6:00 PM (All Days)
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">RERA Approved</h3>
                  <p className="text-muted-foreground text-sm">
                    Fully RERA compliant project with transparent pricing and timely delivery commitment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">Flexible Payment Plans</h3>
                  <p className="text-muted-foreground text-sm">
                    Multiple payment options including construction-linked plans and easy EMI options.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">Home Loan Assistance</h3>
                  <p className="text-muted-foreground text-sm">
                    Tie-ups with leading banks for quick home loan approvals at competitive rates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h3 className="font-semibold">Quality Assurance</h3>
                  <p className="text-muted-foreground text-sm">
                    Premium construction quality with branded fittings and modern amenities.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-lg overflow-hidden h-[400px] relative">
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Interactive Google Maps would be embedded here</p>
            <p className="text-sm text-muted-foreground mt-2">Showing exact location and nearby landmarks</p>
          </div>
        </div>
      </div>
    </div>
  )
}
