import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const features = [
  {
    icon: '📱',
    title: 'Verified Information',
    description: 'Access trusted, up-to-date information about opportunities and processes.'
  },
  {
    icon: '🤝',
    title: 'Global Mentorship',
    description: 'Connect with experienced mentors from various industries worldwide.'
  },
  {
    icon: '💡',
    title: 'Investment Opportunities',
    description: 'Discover and participate in verified investment opportunities.'
  }
]

export function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold font-space-grotesk text-center mb-12">
          Why Choose Our Platform
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <CardTitle className="font-space-grotesk">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}