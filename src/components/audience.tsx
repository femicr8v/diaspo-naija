import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const audiences = [
  {
    title: 'Nigerians in the Diaspora',
    benefits: [
      'Stay connected with home',
      'Invest in verified opportunities',
      'Share your expertise',
      'Support the next generation'
    ]
  },
  {
    title: 'Nigerians in Nigeria',
    benefits: [
      'Access global opportunities',
      'Get mentored by experts',
      'Learn from experiences',
      'Build international connections'
    ]
  }
]

export function Audience() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index} className="bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="font-space-grotesk">{audience.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {audience.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}