import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award } from "lucide-react"

const education = {
  degree: "Bachelor of Computer Science & Artificial Intelligence",
  university: "Menoufia National University",
  location: "Egypt",
  period: "2022 – 2026",
  gpa: "(Very Good)",
}

const certifications = [
  "Google Data Analytics: Foundations: Data, Data, Everywhere",
  "Google Data Analytics: Ask Questions to Make Data-Driven Decisions",
]

const activities = [
  {
    title: "Junior Student Activities",
    description: "Organized sessions and welcomed new students, helping them transition into their first year.",
  },
  {
    title: "Enactus Menoufia University (HR Member)",
    description:
      "Conducted evaluations and supported team development initiatives to enhance performance and collaboration.",
  },
]

export function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Education & Activities</h2>
        <div className="space-y-6">
          {/* Education */}
          <Card className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="text-xl font-semibold">{education.degree}</h3>
                  <p className="text-muted-foreground font-medium">{education.university}</p>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <Badge variant="secondary">{education.period}</Badge>
                    <Badge variant="outline">{education.location}</Badge>
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">GPA: {education.gpa}</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Certifications */}
          <Card className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-semibold">Certifications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {certifications.map((cert, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-secondary mt-1.5">•</span>
                      <span className="leading-relaxed">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Activities */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Activities</h3>
            {activities.map((activity, index) => (
              <Card key={index} className="p-6">
                <h4 className="font-semibold mb-2">{activity.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{activity.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
