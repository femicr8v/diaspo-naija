import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { footerContent, footerLinks } from "@/lib/constant";

export function Footer() {
  return (
    <footer className="nigerian-primary-gradient text-primary-foreground relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5 blur-xl"></div>
      </div>

      <div className="container py-12 relative">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-2xl font-bold font-space-grotesk flex items-center gap-2 text-white">
              {footerContent.brandName}
            </h3>
            <p className="text-white/80">{footerContent.brandTagline}</p>
          </div>
          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <Separator className="bg-white/20" />
        <div className="mt-8 text-center text-sm text-white/60">
          {footerContent.copyright}
        </div>
      </div>
    </footer>
  );
}
