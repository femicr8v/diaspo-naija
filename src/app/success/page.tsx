import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Success() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-24 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <div className="max-w-xl mx-auto">
            <Card className="bg-card">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
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
                </div>
                <CardTitle className="text-2xl font-space-grotesk">
                  Welcome to the Community!
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Your account has been created successfully.
                </p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4">
                  <p>
                    Check your email for verification and next steps. Meanwhile,
                    you can:
                  </p>
                  <div className="flex flex-col gap-4">
                    <Button asChild>
                      <Link href="https://discord.gg/your-invite">
                        Join Our Discord Community
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/">Return to Homepage</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
