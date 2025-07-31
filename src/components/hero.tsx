import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-primary/5 to-background pt-16">
      <div className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20">
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold font-space-grotesk sm:text-6xl">
            Connecting Nigerians Globally
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            A trusted hub bridging Diaspora and Nigeria through verified information, mentorship, and opportunity.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/signup">
                Join Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#how-it-works">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}