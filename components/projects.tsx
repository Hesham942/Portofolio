import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

const projects = [
  {
    title: "Flink, Kafka & HDFS Data Pipeline",
    description:
      "Built a real-time data pipeline that reads from Kafka topics, processes data with Apache Flink, and writes output to HDFS. Orchestrated using Docker Compose with simplified HDFS connectivity configuration.",
    technologies: ["Apache Flink", "Apache Kafka", "HDFS", "Docker", "Python"],
    github: "https://github.com/Hesham942/flink-kafka-hdfs-demo",
  },
  {
    title: "Airflow COVID-19 Data Pipeline",
    description:
      "Automated ETL pipeline for COVID-19 case data cleansing and modeling using Apache Airflow. Ingests raw data, cleanses and preprocesses datasets, and transforms data into structured format for analysis.",
    technologies: ["Apache Airflow", "Docker", "PostgreSQL", "Pandas", "Python"],
    github: "https://github.com/Hesham942/airflow-covid19-pipeline",
  },
  {
    title: "Bank Marketing Analysis",
    description:
      "Analyzed 50,000+ records of bank marketing data, improving data quality and built predictive model for customer response prediction using machine learning techniques.",
    technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    github: "https://github.com/Hesham942/Bank-Marketing-Analysis",
  },
  {
    title: "ETL for Nested JSON",
    description:
      "Designed and implemented ETL pipeline processing 1M+ nested JSON records using PySpark, reducing processing time significantly and simplifying analysis workflows.",
    technologies: ["Python", "PySpark", "PostgreSQL", "ETL"],
    github: "https://github.com/Hesham942/ETL-for-nested-JSON",
  },
  {
    title: "Google Play Store Analysis",
    description:
      "Analyzed 1M+ app records from Google Play Store, identifying that 70% of downloads came from free apps, providing actionable insights for marketing strategies.",
    technologies: ["Python", "PySpark", "PostgreSQL", "Data Analysis"],
    github: "https://github.com/Hesham942/Google-Play-Store-Analysis",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 flex flex-col">
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              {project.github && (
                <div className="flex gap-2 mt-6">
                  <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
