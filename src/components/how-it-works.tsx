import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const steps = [
  {
    number: 1,
    title: 'Sign Up',
    description: 'Create your account and complete your profile'
  },
  {
    number: 2,
    title: 'Join Discord',
    description: 'Connect with the community in real-time'
  },
  {
    number: 3,
    title: 'Build Your Profile',
    description: 'Coming soon - Showcase your expertise'
  },
  {
    number: 4,
    title: 'Connect and Grow',
    description: 'Network, learn, and seize opportunities'
  }
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-primary/5">
      <div className="container">
        <h2 className="text-3xl font-bold font-space-grotesk text-center mb-12">
          How It Works
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <Card key={step.number} className="relative bg-card hover:shadow-lg transition-shadow">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                {step.number}
              </div>
              <CardHeader>
                <CardTitle className="font-space-grotesk">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}