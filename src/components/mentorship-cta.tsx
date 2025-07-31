import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function MentorshipCTA() {
  return (
    <section id="mentorship" className="py-20 bg-primary/5">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-space-grotesk mb-4">
            Join our mentorship network
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Connect as a guide or a learner
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/signup?type=mentor">
                Become a Mentor
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/signup?type=mentee">
                Find a Mentor
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}