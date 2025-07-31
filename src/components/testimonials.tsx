import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

const testimonials = [
  {
    text: "This platform has been invaluable in helping me navigate my tech career transition to Canada.",
    author: "Sarah O.",
    location: "Toronto",
    initials: "SO"
  },
  {
    text: "I found my mentor here and now I'm successfully running my startup in Lagos.",
    author: "Michael A.",
    location: "Lagos",
    initials: "MA"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold font-space-grotesk text-center mb-12">
          What Our Community Says
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="h-16 w-16 mb-4">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <blockquote className="text-lg mb-4">
                    "{testimonial.text}"
                  </blockquote>
                  <p className="font-medium">
                    {testimonial.author}
                    <span className="text-muted-foreground"> • {testimonial.location}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}