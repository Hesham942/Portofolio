import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Data Analysis Intern",
    company: "National Telecommunication Institute (NTI)",
    location: "Egypt",
    period: "July 2024 – Sept 2024",
    achievements: [
      "Cleaned and analyzed 10,000+ marketing records using Excel/Power Query, improving data accuracy and preparation efficiency",
      "Developed interactive Power BI dashboards to visualize key insights, enhancing decision-making",
    ],
  },
  {
    title: "AI & Machine Learning Trainee",
    company: "Information Technology Institute (ITI)",
    location: "Egypt",
    period: "Aug 2024 – Aug 2024",
    achievements: [
      "Learned and applied supervised learning (classification) and unsupervised learning (clustering) techniques to solve real-world problems",
      "Studied deep learning fundamentals (CNN, RNN, ANN) with hands-on experience in TensorFlow",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <Badge variant="secondary">{exp.period}</Badge>
                      <Badge variant="outline">{exp.location}</Badge>
                    </div>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
