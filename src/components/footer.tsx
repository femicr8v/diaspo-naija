import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { footerContent, footerLinks } from "@/lib/constant";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-2xl font-bold font-space-grotesk flex items-center gap-2">
              {footerContent.brandName}
            </h3>
            <p className="text-gray-300">{footerContent.brandTagline}</p>
          </div>
          <div className="flex gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <Separator className="bg-gray-700" />
        <div className="mt-8 text-center text-sm text-gray-400">
          {footerContent.copyright}
        </div>
      </div>
    </footer>
  );
}
