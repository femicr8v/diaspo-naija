'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'

export function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement newsletter subscription
    toast.success('Thanks for subscribing!')
    setEmail('')
  }

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-space-grotesk mb-4">
            Stay in the Loop
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Get updates about new features and community highlights
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="max-w-md"
              required
            />
            <Button type="submit">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}