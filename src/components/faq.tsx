import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is this platform free?",
    answer: "Yes, our basic membership is completely free. Premium features coming soon."
  },
  {
    question: "Why is Discord used?",
    answer: "Discord provides real-time communication and community building features perfect for our needs."
  },
  {
    question: "Can I mentor from abroad?",
    answer: "Absolutely! Our platform is designed for global connection and remote mentorship."
  },
  {
    question: "What's coming next?",
    answer: "We're working on profile verification, job boards, and investment platforms."
  }
]

export function FAQ() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container">
        <h2 className="text-3xl font-bold font-space-grotesk text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-space-grotesk">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}