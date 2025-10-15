import { Card } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "heshamhatem2004@gmail.com",
    href: "mailto:heshamhatem2004@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 109 673 2718",
    href: "tel:+201096732718",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "hesham-hatem",
    href: "https://www.linkedin.com/in/hesham-hatem-0968b1287/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "Hesham942",
    href: "https://github.com/Hesham942",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            I'm currently seeking internship opportunities to apply my technical knowledge in real-world scenarios. Feel
            free to reach out if you'd like to connect!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <Card key={index} className="p-6">
                <a
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground">{contact.label}</p>
                    <p className="font-medium truncate group-hover:text-primary transition-colors">{contact.value}</p>
                  </div>
                </a>
              </Card>
            )
          })}
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">© 2025 Hesham Hatem. Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </section>
  )
}
