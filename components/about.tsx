import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">About Me</h2>
        <Card className="p-6 sm:p-8">
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate Computer Science and AI student at Menoufia National University with strong skills in
              programming, data structures, and problem-solving. Currently maintaining a GPA of 3.3 (Very Good), I'm
              dedicated to applying my technical knowledge in real-world scenarios and expanding my expertise in
              emerging technologies.
            </p>
            <p>
              My journey in tech has led me through valuable internships at the National Telecommunication Institute
              (NTI) as a Data Analysis Intern and the Information Technology Institute (ITI) as an AI & Machine Learning
              Trainee. These experiences have strengthened my skills in data analysis, machine learning, and big data
              technologies.
            </p>
            <p>
              I'm particularly interested in data engineering, building scalable ETL pipelines, and leveraging
              technologies like Apache Spark, Kafka, and Hadoop to process and analyze large datasets. I'm always eager
              to learn new technologies and take on challenging projects that push the boundaries of what's possible
              with data.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
