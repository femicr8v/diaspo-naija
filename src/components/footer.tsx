import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="bg-background">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-2xl font-bold font-space-grotesk flex items-center gap-2">
              🌍 GloNig
            </h3>
            <p className="text-muted-foreground">
              Connecting Nigerians Worldwide
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
              Privacy
            </Link>
          </div>
        </div>
        <Separator />
        <div className="mt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Global Nigerian Community. All rights reserved.
        </div>
      </div>
    </footer>
  )
}