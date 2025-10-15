import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Monitor } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "PySpark", "Java", "SQL", "Bash Scripting"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["Oracle", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      "Git/GitHub",
      "Jupyter Notebook",
      "Apache Hadoop",
      "Apache Spark",
      "Apache Kafka",
      "Docker",
      "Apache Airflow",
      "Apache Flink",
    ],
  },
  {
    title: "Operating Systems",
    icon: Monitor,
    skills: ["Windows", "Linux"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <Card key={index} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, i) => (
                        <Badge key={i} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
